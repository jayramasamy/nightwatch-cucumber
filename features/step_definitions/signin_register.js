import {readJsonFile,readYamlFile,readYamlData} from "../../lib/helper";

//import {readJsonFile,readYamlFile,readYamlData} from "../../lib/helper";


//var helpers = require('../../lib/helper');
const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {


	Given(/^I logon to the groceries website$/, () => {
		client.url(client.launch_url)
		//client.waitForElementVisible('body', 1000)

	  	var userData = readYamlData('user_details.yaml','uk','user','default',null);
      	console.log('login with:'+userData.email);	
         return client			
      	  .click('.signin-register--signin-button')
      	  .setValue('#username',userData.email)
      	  .setValue('#password', userData.password)
      	  .click('.ui-component__button')
      	  .assert.elementPresent('.user-greeting--name')
			})

   When(/^I logout$/, () => {
		return client.click('.utility-header__logout-button');
   	
   })

   Then(/^I should be logged out of the site$/, () => {
   		return client
            //.waitForElementVisible('.signin-register--signin-button', 1000)
		      .assert.elementPresent('.signin-register--signin-button')
   	
   })

Then(/^I logon to the groceries website using page objects$/, () => {
      var userData = readYamlData('user_details.yaml','uk','user','default',null);
      console.log('login with:'+userData.email);
      client.url(client.launch_url)
  
      const login = client.page.login();
                
         login.click('@signin_register_button')
         login.setValue('@username',userData.email)
         login.setValue('@password', userData.password)
         login.click('@sign_in_button')
         login.assert.elementPresent('.user-greeting--name')

         return client
      
   })



Then(/^I logon to the groceries website using page objects method inside$/, () => {
      var userData = readYamlData('user_details.yaml','uk','user','default',null);
      console.log('login with:'+userData.email);
      client.url(client.launch_url)
       const login = client.page.login();
     return login.loginUser(userData.email,userData.password);    
   })

}
)