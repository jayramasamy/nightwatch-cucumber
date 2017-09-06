  require('babel-register')() 

  import yaml from "js-yaml";
  import fs from "fs";
  import path from "path";

//var path = require('path');

export function readJsonFile(filename)
{
	var output;
	//fs = require('fs')
	output = fs.readFileSync(path.join(__dirname,'../data/'+filename)).toString();
    jsonData = JSON.parse(output);
	return jsonData;
}

export function readYamlFile(fileName)
{
	// yaml = require('js-yaml');
 //  fs = require('fs');

	var output = yaml.safeLoad(fs.readFileSync(path.join(__dirname,'../data/'+fileName),'utf-8'));
	return output;
}

export function readYamlData(fileName, key1, key2, key3,key4)
{
 var yamlData = readYamlFile(fileName);
 var result;
    if (key1 === null) {result = yamlData;}
    else
   { 	
    if (key1 !== null) {result = yamlData[key1];}
    if (key2 !== null) {result = yamlData[key1][key2];}
    if (key3 !== null) {result = yamlData[key1][key2][key3];}
    if (key4 !== null) {result = yamlData[key1][key2][key3][key4];}
  }	 	
  //console.log(result);
 return result;
}


// module.exports = {
//     readJsonFile,readYamlFile,readYamlData
// };