/**
 * Created by aaron on 10/27/2016.
 */
var submit=function (){
 var stringToGet=$('#stringsToLookFor').val(),listOfStringsToSearch = $('#listOfStrings').val(), stringToGetArray, stringToLookThrough, stringToGetObject={}, listOfStringsToSearchObject={}, matches={};
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
 function moveTheArrayElementsToObjects(){
  for(let i = 0; i < stringToGetArray.length; i++){
    stringToGetObject[stringToGetArray[i]]=stringToGetArray[i];
  };
  for(let i = 0; i < stringToLookThrough.length; i++){
      listOfStringsToSearchObject[stringToLookThrough[i]]=stringToLookThrough[i];
  }
 }
 function checkForMatchesAndPush() {
     for(let string in listOfStringsToSearchObject){
         for(let secondString in stringToGetObject){
             if(listOfStringsToSearchObject[string] === stringToGetObject[secondString]){
                 matches[stringToGetObject[secondString]]=stringToGetObject[secondString];
             }
         }
     }
 }
  function printObjectsToScreen(){
            for(let match in matches){
                $('#output').append('<p>' + matches[match] + '</p>')
            }
  }
        clearOutput();
        checkStrings();
        if(stringToGetArray) {
            if(stringToLookThrough) {
                moveTheArrayElementsToObjects();
                checkForMatchesAndPush();
                printObjectsToScreen();
            }
        }else{
            $('#output').append('<p>Please enter a string</p>');
        }

    matches={};

};