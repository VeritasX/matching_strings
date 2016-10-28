/**
 * Created by aaron on 10/27/2016.
 */
var submit=function (){
 var stringToGet=$('#stringsToLookFor').val(),listOfStringsToSearch = $('#listOfStrings').val(), stringToGetArray, stringToLookThrough, matches={};
    function clearOutput() {
        $('#output').empty();
    }
    function checkStrings() {
        if(stringToGet !== ''){
            stringToGetArray=stringToGet.split(' ');
        }
        if(listOfStringsToSearch !== ''){
            stringToLookThrough=listOfStringsToSearch.split(' ');
        }
    }

 function checkForMatchesAndPush() {
     for(let i=0; i < stringToLookThrough.length; i++){
         for(let j=0; j < stringToGetArray.length; j++){
             if(stringToLookThrough[i] === stringToGetArray[j]){
                 matches[stringToGetArray[j]]=stringToGetArray[j];
             }
         }
     }
 }
  function printObjectsToScreen(){
            for(let match in matches){
                $('#output').append('<p>' + matches[match] + '</p>');
            }
  }
        clearOutput();
        checkStrings();
        if(stringToGetArray) {
            if(stringToLookThrough) {
                checkForMatchesAndPush();
                printObjectsToScreen();
            }
        }else{
            $('#output').append('<p>Please enter a string</p>');
        }


};

var clearInputs=function(){
    
}