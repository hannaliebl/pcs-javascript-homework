//scratchwork/iteration leading up to solution for Homework 1, Problem 2

//long way, first pass:
function xmasSong(days) {
    for (i = 1; i <= days; i++) {
        if (i === 1) {
            console.log("On the "+i+" day of Christmas my true love gave to me a partridge in a pear tree.");
        } else if (i === 2) {
            console.log("On the "+i+" day of Christmas my true love gave to me two turtle doves and a partridge in a pear tree.");
        }
    }
    //etc, etc
    //should actually be array.push (or something) and then toString method I think instead of console log for one string answer
}
xmasSong(12);

function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree", "two turtle doves", "three French hens"];
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas,\n my true love sent to me";
        for (i = 1; i <= days; i++) {
            var intro = songBase1+i+songBase2;
            console.log(intro);
            for (i=0; i<=days; i++) {
                console.log(gifts[i]);
            }
            //console.log(songBase1+i+songBase2);
            //gifts[i-1]);
        }
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(4);


//v 2
function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree", "two turtle doves", "three French hens"];
        var giftsAfter = []
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas,\n my true love sent to me";
        for (i = 1; i <= days; i++) {
            var intro = songBase1+i+songBase2;
            console.log(intro);
            for (x = 1; x <= i; x++) {
                console.log(gifts[x-1]);
               //console.log(giftsAfter.concat(gifts[x-1]));
            }
        }
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(3);

//v 3
//second pass:
function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree", "two turtle doves", "three French hens"];
        //gifts.reverse();
        var giftsAfter = []
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas,\n my true love sent to me";
        for (i = 1; i <= days; i++) {
            var intro = songBase1+i+songBase2;
            console.log(intro);
            for (x = 1; x <= i; x++) {
                var giftsRecorded = giftsAfter.concat(gifts[x-1]);
                console.log(giftsRecorded);
                //console.log(gifts[(gifts.length) - x]);
               //console.log(giftsAfter.concat(gifts[x-1]));
            }
        }
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(3);

//v 3.5 bad
//second pass:
function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree", "two turtle doves", "three French hens"];
        //gifts.reverse();
        var giftsAfter = [];
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas,\n my true love sent to me";
        for (i = 1; i <= days; i++) {
            var intro = songBase1+i+songBase2;
            console.log(intro);
            for (x = 1; x <= i; x++) {
                giftsAfter.push(gifts[x-1]);
                //var giftsRecorded = giftsAfter.concat(gifts[x-1]);
                console.log(giftsAfter);
                //console.log(gifts[(gifts.length) - x]);
               //console.log(giftsAfter.concat(gifts[x-1]));
            }
        }
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(3);

//v 4 closer but need to pass over all mentioned gifts each time
function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree \n","two turtle doves \n","three French hens \n"];
        var finalSong = [];
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas\n my true love sent to me \n";
        for (i = days; i >= 1; i--) {
            var intro = songBase1+i+songBase2;
            finalSong.splice(0,0, intro, gifts[i-1])
        }
        console.log(finalSong.join());
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(3);

//v5
function xmasSong(days) {
    if ((days <= 12) && (days >0)) {
        var gifts = ["a partridge in a pear tree \n","two turtle doves \n","three French hens \n"];
        var finalSong = [];
        var songBase1 = "On the ";
        var songBase2 = " day of Christmas\n my true love sent to me \n";
        for (i = days; i >= 1; i--) {
            var intro = songBase1+i+songBase2;
            function giftBacklog() {
                var oldGifts = [];
                for (x=days;x>(days-1);x--) {
                    //oldGifts.splice(0,0,gifts[x-1])
                    //return oldGifts
                    gifts.splice(i-1,1);
                    oldGifts.splice(0,0,gifts[0]);
                }
                return oldGifts
                //return gifts[i-1]
            }
            finalSong.splice(0,0, intro, gifts[i-1], giftBacklog());
        }
        console.log(finalSong.join());
    } else {
        console.log("There aren't enough gifts for the days you entered!");
    }
}
xmasSong(3);