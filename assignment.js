// Problem 1 : Convert Feet to Mile using function name feetToMile
//input: feet & output: corresponding mile
//Algorithm: mile = feet/5280 or, mile = feet * 0.0001893939393939394

function feetToMile(feetValue){
    if(feetValue<0){
        return "Measuring unit cannot be less than 0! Positive value,please...";
    }
    else{
        var mileValue = feetValue/5280;
        return mileValue;
    }
}
var resultantMile = feetToMile(5000);
console.log("Mile = ",resultantMile);


/*
Problem 2 : A person is going to purchase wood for chair, table and bed. 
But he don't know how many he will and in which amount. Let's help him with programming!
Input : amount of chair, table and bed. 
Given: Required wood for chair, table and bed are 1, 3 and 5 cubic feet respectively
Output: total amount of wood required.
Function Name: woodCalculator
 */

function woodCalculator(chair,table,bed){
    if(chair <0 || table <0 || bed<0){
        return "Cannot build NEGATIVE amount of things! Please Input 0 to any positive value."
    }
    else{
        var woodForChair = chair * 1;
        var woodForTable = table * 3;
        var woodForBed = bed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;
        return totalWood;
    }
}
var woodCount = woodCalculator(20,10,20);
console.log("Total wood needed ",woodCount," cubic feet");


/*
Problem 3:
Input: Number of flood of the building
Output: Number of brick required according to the following conditions-
a. 0-9th floor 15 feet high
b. 10-19th floor 12 feet high
c. 20 and above 10 feet high
*Each feet require 1000 bricks.
Function Name: brickCalculator
*/

//Consider 0 as ground floor
function brickCalculator(floorCount){
    if(floorCount<0){
        return "Lowest number of floor value is 0."
    }
    else if(floorCount<= 9){
        var totalHeight = (floorCount + 1) * 15;
    }
    else if(floorCount<=19){
        var topTenHeight = 10*15;
        var tenPlusHeight = (floorCount - 9) * 12 //+1 -10 = -9 [1st 10 already counted]
        var totalHeight = topTenHeight + tenPlusHeight;
    }
    else{
        var topTwentyHeight = (10*15) + (10*12);
        var twentyPlusHeight = (floorCount -19) * 10; // +1 -20 = -19 [first 20 already counted]
        var totalHeight = topTwentyHeight + twentyPlusHeight;
    }
         
    var brickRequired = totalHeight*1000;
    return brickRequired;
}
var totalBrick = brickCalculator(0);
console.log("Total",totalBrick,"Bricks Required");


/*
Input: array with friends name
Output: the smallest name
Function Name: tinyFriend
*/

function tinyFriend(friends){

    //Array undefined or null inputs handled by placing the defined values in an empty array
    var definedValues = [];
    for(var i=0; i<friends.length; i++){
        if(typeof friends[i] != 'undefined' && friends[i] != null){
            definedValues.push(friends[i]);
        }
    }

    //Handling empty string or white space inputs [From googling -> stack_over_flow]
    var friendList = definedValues.filter(definedValues => definedValues.trim().length > 0); 

    //remove extra white spaces in the array element [From googling -> stack_over_flow]
    var validNames = [];
    for(var i=0; i<friendList.length; i++){
        validNames.push(friendList[i].replace(/\s{2,}/g, ' ').trim());
    }

    // To compare friend names we need at least 2 valid names.
    if(validNames.length == 0 ||validNames.length<2){
        return "Require at lest two valid names";
    }

    // We have valid array here... Now working to find the tiny one
    else{
        //finding the lowest length of array element
        var tinyLength = validNames[0].length; 
        for(var i = 0; i<validNames.length;i++){
            if(validNames[i].length<tinyLength){
                tinyLength = validNames[i].length;
            }         
        }
        // placing the lowest size elements in a new array from the validNames array
        var tinyName = [];
        for(var i=0;i<validNames.length; i++){
            if(validNames[i].length == tinyLength){
                tinyName.push(validNames[i]);
            }
        }
        // sort the tiny array in ascending order.
        var tinyNameSorted = tinyName.sort();
        // The first element of the array [index 0] is the tiny name. So, return it.
        return tinyNameSorted[0];
    }
}
var friends = tinyFriend(["Nazmul","Emon","Parul","Moni","Aru","Tanni","Ayman",,""," ","  Nazmul   Haq ","Arif"]);
console.log(friends);