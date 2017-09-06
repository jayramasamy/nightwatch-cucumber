// nightwatch.conf.js

require('babel-register')()

const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require','timeout.js', '--require', 'features/step_definitions', '--format', 'json:reports/cucumber.json', 'features']
});
	module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'https://www.xxx.xx/xxx?xxx=1',
       globals : {
        "waitForConditionTimeout": 70000,
        "waitForConditionPollInterval": 1000
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
