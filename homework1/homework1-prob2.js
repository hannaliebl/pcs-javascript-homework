function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree \n","two turtle doves \n","three French hens \n","four calling birds\n","five golden rings\n","six geese a-laying\n","seven swans a-swimming\n","eight maids a-milking\n","nine ladies dancing\n","ten lords a-leaping\n","eleven pipers piping\n","twelve drummers drumming\n"];
        var finalSong = [];
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas\n my true love sent to me \n";
        for (i = days; i >= 1; i--) {
            var intro = songBase1+i+songBase2;
            function giftBacklog() {
                var giftsToChange = gifts.slice(0); //clone entire gifts array to work with later
                var backlog = giftsToChange.splice(0, (i-1))
                return backlog.reverse()
            }
            finalSong.splice(0,0, intro, gifts[i-1], giftBacklog());
        }
        console.log(finalSong.join());
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(12);