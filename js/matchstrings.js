/**
 * Created by aaron on 10/27/2016.
 */
var submit=function (){
 var stringToGet=$('#stringsToLookFor').val(),listOfStringsToSearch = $('#listOfStrings').val(), stringToGetArray=stringToGet.split(' '), stringToLookThrough=listOfStringsToSearch.split(' '), stringToGetObject={}, listOfStringsToSearchObject={}, matches={};

 function moveTheArrayElementsToObjects(){
  for(let i = 0; i < stringToGetArray.length; i++){
    stringToGetObject[stringToGetArray[i]]=stringToGetArray[i];
  };

  for(let i = 0; i < stringToLookThrough.length; i++){
      listOfStringsToSearchObject[stringToLookThrough[i]]=stringToLookThrough[i];
  }

 }
 moveTheArrayElementsToObjects();

};