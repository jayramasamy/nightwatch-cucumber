var helpers = require('../../lib/helper');
const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {

// module.exports = function() {

Given(/^I am on the grocery website$/,  () => {

		//console.log(client.globals.waitForConditionTimeout);	

		return client
			.url(client.launch_url)
			//.url('https://www.tesco.com/groceries?playwell=1')
			//.waitForElementVisible('body', 100000)
	})

 When(/^I search for (.*)$/,  (term) => {
         // Write code here that turns the phrase above into concrete actions
        return client
		    //.waitForElementVisible('.search-form--form #query', 100000)
			.setValue('.search-form--form #query',term)
			.click(".search-form--form #query+button.submit")
       });


   Then(/^I should see results for (.*)$/,  (term) => {
         // Write code here that turns the phrase above into concrete actions
         return client
        //	.waitForElementVisible('.search-form--form #query', 100000)
        	.assert.elementPresent('.heading.query')
       });

}
)