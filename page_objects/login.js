

module.exports = {
  url: 'http://yahoo.com',
  elements: {
    signin_register_button: '.signin-register--signin-button',
    username: '#username',
    password: '#password',
   	sign_in_button: '.ui-component__button',
   	greeting: '.user-greeting--name'
   },
  
  commands: [
  {

  	loginUser: function(email,password) {
     console.log('inside the test');	 	
     return this  	
	    .click('@signin_register_button')
        .setValue('@username',email)
        .setValue('@password', password)
        .click('@sign_in_button');
  }
}]
}