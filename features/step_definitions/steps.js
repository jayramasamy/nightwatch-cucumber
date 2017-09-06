
//import {apple,bread} from '../lib/helper.js';

var helpers = require('../../lib/helper');

module.exports = function() {
	this.Given(/^I open the Modus Create home page$/, function(callback) {
		this
			.url(this.launch_url)
			.waitForElementVisible('body', 1000)

		callback(null, 'pending');
	})

	this.Then(/^the title is "([^"]*)"$/, function(title, callback) {
		this.assert.title(title);
		callback(null, 'pending');
	})

	this.Then(/^the About Page link exists$/, function(callback) {
		this.assert.elementPresent('a[href="/about"]')
		callback(null, 'pending');
	})



       this.Then(/^I search for search term from a json file$/, function (callback) {

       	testData = helpers.readJsonFile('testdata.json');
       	console.log(testData);

       	for(i=0;i<testData.length;i++)
       	{
       		console.log('Serching for:'+testData[i].term);	

			this.waitForElementVisible('.search-form--form #query', 5000)
			this.setValue('.search-form--form #query',testData[i].term)
			this.click(".search-form--form #query+button.submit")

			this.waitForElementVisible('.search-form--form #query', 5000)
			this.assert.elementPresent('.product-list-container')
	
       	}
         callback(null, 'pending');
       })



       this.Then(/^I search for search term from a yaml file$/, function (callback) {

       	testData = helpers.readYamlFile('testdata.yaml');
      	console.log('Serching for:'+testData.search.term1);	

			this.waitForElementVisible('.search-form--form #query', 5000)
			this.setValue('.search-form--form #query',testData.search.term1)
			this.click(".search-form--form #query+button.submit")

			this.waitForElementVisible('.search-form--form #query', 5000)
			this.assert.elementPresent('.product-list-container')

			// repeat teh same again
	       console.log('Serching for:'+testData.search.term2);	
			this.waitForElementVisible('.search-form--form #query', 5000)
			this.setValue('.search-form--form #query',testData.search.term2)
			this.click(".search-form--form #query+button.submit")

			this.waitForElementVisible('.search-form--form #query', 5000)
			this.assert.elementPresent('.product-list-container')
	       
         callback(null, 'pending');
        })


}