
let totalScore = 0;

// Assign GLOBAL variables
let scoreToBeat = 0;
let wins = 0;
let loses = 0;
let randNum;
let gemValues;

//RandNum function , this will be used everytime there is a randon number to be generated.
function randNumber(num1, num2) {
    return Math.floor((Math.random() * num1) + num2);
}

// Start Function
function start() {

    // Generate Random Number and assign it to a variable between 19 and 120 formula:[ () * (max - min + 1)) + min];
    randNum = randNumber(120, 19)
    console.log(randNum); //sanity test: works!

    // Display random number in "#scoreToBeat" ID.
    $("#scoreToBeat").text(randNum);

    // Generate a random number for all gems that should be bwteen 1 and 12.

    //--------------------------
    //THIS IS THE OLD CODE...
    //--------------------------

    // let saphireNum = Math.floor((Math.random() * 12) + 1);
    // console.log(saphireNum);
    // let rubyNum = Math.floor((Math.random() * 12) + 1);jhsdjsyurrfeh5ewyrchfykgxyjfhgf  vcmcn cnxccbznsdn bxmzbmbnbnasmnxmabxmabbscdhgsjxhsghxasghnxagmdhgwhxhwdvhgh
    // console.log(rubyNum);
    // let diamondNum = Math.floor((Math.random() * 12) + 1);
    // console.log(diamondNum);
    // let amethystNum = Math.floor((Math.random() * 12) + 1);
    // console.log(amethystNum);
    // totalScore = 0;
    // $("#totalScore").text(totalScore);
    // return [saphireNum, rubyNum, diamondNum, amethystNum];

    //---------------------------
    //THIS IS THE NEW CODE
    //---------------------------

    let saphireNum = randNumber(12, 1);
    console.log(saphireNum);
    let rubyNum = randNumber(12, 1);
    console.log(rubyNum);
    let diamondNum = randNumber(12, 1);
    console.log(diamondNum);
    let amethystNum = randNumber(12, 1);
    console.log(amethystNum);
    totalScore = 0;
    $("#totalScore").text(totalScore);
    return [saphireNum, rubyNum, diamondNum, amethystNum];
}

// Create an on.click event that triggers and adds the "saphireNum" to the totalScore.
$(".crystals").on("click", function () {

    // if .this "click" event .is(has) id "img-saphire"
    if ($(this).is("#img-saphire")) {
        //add the number gen by saphire to totalScore, rinse and repeat...
        totalScore += gemValues[0];
    } else if ($(this).is("#img-ruby")) {
        totalScore += gemValues[1];
    } else if ($(this).is("#img-diamond")) {
        totalScore += gemValues[2];
    } else if ($(this).is("#img-amethyst")) {
        totalScore += gemValues[3];
    }

    $("#totalScore").text(totalScore);
    console.log(totalScore); //sanity check: works!

    // If totalScore === scoreToBeat add +1 to "winsCoount
    if (totalScore === randNum) {
        wins++;
        $("#winsCount").text(wins);
    //    alert("You are a Winner!")
        gemValues = start();

        // else +1 to losesCount
    } else if (totalScore > randNum) {
        loses++;
        $("#losesCount").text(loses);
        gemValues = start();
    //    alert("LOOOOOOOOOOOOOOSER!!!!!!!!!!!!!!!!!!")
    }
});
gemValues = start();
console.log(gemValues);


