// Simple version (no error-detection)

// function()--> possible return values

function rank(card) { // --> 1..13
    if (((card+1)*0.25) <= 13 && ((card+1)*0.25) >= 12.25) {
        console.log("rank is 13");
        return 13
    } else if (((card+1)*0.25) <= 12 && ((card+1)*0.25) >= 11.25) {
        console.log("rank is 12");
        return 12
    } else if (((card+1)*0.25) <= 11 && ((card+1)*0.25) >= 10.25) {
        console.log("rank is 11");
        return 11
    } else if (((card+1)*0.25) <= 10 && ((card+1)*0.25) >= 9.25) {
        console.log("rank is 10");
        return 10
    } else if (((card+1)*0.25) <= 9 && ((card+1)*0.25) >= 8.25) {
        console.log("rank is 9");
        return 9
    } else if (((card+1)*0.25) <= 8 && ((card+1)*0.25) >= 7.25) {
        console.log("rank is 8");
        return 8
    } else if (((card+1)*0.25) <= 7 && ((card+1)*0.25) >= 6.25) {
        console.log("rank is 7");
        return 7
    } else if (((card+1)*0.25) <= 6 && ((card+1)*0.25) >= 5.25) {
        console.log("rank is 6");
        return 6
    } else if (((card+1)*0.25) <= 5 && ((card+1)*0.25) >= 4.25) {
        console.log("rank is 5");
        return 5
    } else if (((card+1)*0.25) <= 4 && ((card+1)*0.25) >= 3.25) {
        console.log("rank is 4");
        return 4
    } else if (((card+1)*0.25) <= 3 && ((card+1)*0.25) >= 2.25) {
        console.log("rank is 3");
        return 3
    } else if (((card+1)*0.25) <= 2 && ((card+1)*0.25) >= 1.25) {
        console.log("rank is 2");
        return 2
    } else if (((card+1)*0.25) <= 1 && ((card+1)*0.25) >= 0.25) {
        console.log("rank is 1");
        return 1
    } else {
        return false
    }
}

rank(0); //1
rank(19); //5
rank(44); //12

function suit(card) {
    if (card === 0) {
        console.log("suit is hearts");
        return 1
    } else if ((card % 2) === 0) {
        //hearts or spades
        if ((card % 4) === 0) {
            return 1
            console.log("suit is hearts");
        } else {
            return 3
            console.log("suit is spades.");
        }
    } else if ((card % 2) != 0) {
        if (((card + 1) % 4) === 0) {
            return 4
            console.log("suit is clubs.");
        } else {
            return 2
            console.log("suit is diamonds.")
        }
    } else {
        console.log("incorrect card submission");
        return false
    }
}

suit(0); //hearts
suit(5); //diamonds
suit(18); //spades
suit(23); //clubs
suit(51); // clubs
suit(41); //diamonds

function cardID(rank, suit) { // --> 0..51
    var lowRange = 4 * (rank - 1);
    var id = lowRange + (suit - 1);
    console.log(id);
    return id
}

cardID(1, 1); // 0
cardID(13, 4); // 51
cardID(5, 2); // 17
cardID(3, 3); // 10

function color(card) { // -->"red","black"
    var cardSuit = suit(card);
    console.log("card suit is", cardSuit);
    if ((cardSuit === 1) || (cardSuit === 2)) {
        console.log("card is red");
        return "red"
    } else {
        console.log("card is black");
        return "black"
    }
}

color(0); //red
color(51); //black
color(17); //red
color(38); //black

function callSuit(card) { //silliness, but name(); doesn't work without this, for some reason
    return suit(card)
}

callSuit(13);

function name(card) { // --> string
    var preNumber = rank(card);
    var preSuit = callSuit(card);
    if (preNumber === 13) {
        var number = "King";
    } else if (preNumber === 12) {
        var number = "Queen";
    } else if (preNumber === 11) {
        var number = "Jack";
    } else if (preNumber === 10) {
        var number = "Ten";
    } else if (preNumber === 9) {
        var number = "Nine";
    } else if (preNumber === 8) {
        var number = "Eigth";
    } else if (preNumber === 7) {
        var number = "Seven";
    } else if (preNumber === 6) {
        var number = "Six";
    } else if (preNumber === 5) {
        var number = "Five";
    } else if (preNumber === 4) {
        var number = "Four";
    } else if (preNumber === 3) {
        var number = "Three";
    } else if (preNumber === 2) {
        var number = "Two";
    } else if (preNumber === 1) {
        var number = "Ace";
    } else {
        var number = "Invalid Number";
        console.log("invalid rank");
    }
    console.log("this is preSuit", preSuit);
    if (preSuit === 1) {
        var suit = "Hearts";
    } else if (preSuit === 2) {
        var suit = "Diamonds";
    } else if (preSuit === 3) {
        var suit = "Spades";
    } else if (preSuit === 4) {
        var suit = "Clubs";
    }
    var answer = number+" of "+suit;
    console.log(answer);
    return answer
}

name(8);

function precedes(cardA,cardB) { //-->false,true
}

function sameColor(cardA,cardB) { //-->false,true
}

function nextInSuit(cardA) {//--> 0..51
}

function prevInSuit(cardB) {//--> 0..51
}

// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,"Test 1 failed");
assert(rank(3)===1,"Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,"Test 4 failed");
assert(suit(5)===2,"Test 5 failed");
assert(suit(51)===4,"Test 6 failed");
assert(cardID(1,1)===0,"Test 7 failed");
assert(cardID(13,4)===51,"Test 8 failed");
assert(cardID(8,3)===30,"Test 9 failed");
assert(color(0)==='red',"Test 10 failed");
assert(color(2)==='black',"Test 11 failed");
assert(name(5)==='Two of Diamonds',"Test 12 failed");
assert(name(51)==='King of Clubs',"Test 13 failed");
assert(!precedes(0,1),"Test 14 failed");
assert(precedes(0,5),"Test 15 failed");
assert(precedes(51,0),"Test 16 failed");
assert(precedes(50,2),"Test 17 failed");
assert(sameColor(0,1),"Test 18 failed");
assert(!sameColor(1,2),"Test 19 failed");
assert(nextInSuit(0)===4,"Test 20 failed");
assert(nextInSuit(51)===3,"Test 21 failed");
assert(nextInSuit(48)===0,"Test 22 failed");
assert(prevInSuit(0)===48,"Test 23 failed");
assert(prevInSuit(3)===51,"Test 24 failed");
assert(prevInSuit(5)===1,"Test 25 failed");
