

var fs = require('fs');
var path = require('path');

var filename = 'package.json';
var exist = false;



fs.readdir('.', function (err,listFiles) {
    for(var i=0;i<listFiles.length;i++){
        if(listFiles[i]== filename){
            exist=true;
        }
    }

    if (exist==true){
        console.log("The file",filename,"exists!");
    }
    else{
        console.log("The file",filename,"doesn't exist!");
    }

});
/*
var processData = process.argv;

var filename = processData[2];
var dirname = processData[3];

console.log(filename,dirname);
*/
