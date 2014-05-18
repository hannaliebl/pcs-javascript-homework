/// ============= PART 1 ===============
function and3(a,b,c) {
    if (a) {
        if (b) {
            if (c) {
                console.log("true");
                return true
            } else {
                console.log("false");
                return false
            }
        } else {
            console.log("false");
            return false
        }
    } else {
        console.log("false")
        return false
    }
}

and3(1,1,2); //true
and3(1,2,NaN); //false
and3((1<2),1,1); //true

//test that and3() works properly in context
function testAndAnd(word) {
// uncomment below to see it work with &&
//     if ((word.length > 3) && (word.length < 6) &&(word.length !== 5)) {
//         console.log("your word was 4 letters long");
//     } else {
//         console.log("your word was not 4 letters long");
//     }
// uncomment below to see if it works with and3()
    if (and3((word.length > 3),(word.length < 6),(word.length !== 5))) {
        console.log("your word was 4 letters long!");
    } else {
        console.log("your word was not 4 letters long");
    }
}

testAndAnd("cat"); //not 4
testAndAnd("four"); //4
testAndAnd("treat"); //not 4

function useAnd(a,b,c) {
    if (a && b && c) {
        console.log("true");
    } else {
        console.log("false");
    }
}

useAnd(1,1,2); //true
useAnd(1,2,NaN); //false
useAnd((1<2),1,1); //true



/// ============= PART 2 ===============
tenArray = [1,2,3,4,5,6,7,8,9,10];

function andN(n, anArray) {
    keepTrack = [];
    for (i = n; i >= 1; i--) {
        if (anArray[i-1]) {
            keepTrack.push("true inside");
        }
    }
    if (keepTrack.length === n) {
        return true
    } else {
        return false
    }
}

andN(10, tenArray);