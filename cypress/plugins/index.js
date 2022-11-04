/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // below is query for running sql
  on('task',{ queryDb: query=>{ return queryTestDb(query, config) }, }); 
}

const { reject } = require('bluebird')
// connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config){
//creates  a new my sql connection using credentials from cypress.json env's
const connection = mysql.createConnection(config.env.db)

//start connection to db
connection.connect()
// exec query + disconnect to db as a promise
return new Promise((resolve, rejext) =>{
  connection.query(query,(error,results)=>{
    if (error) reject(error)
    else{
 console.log(results)
    //  connection.end() 
     return resolve(results)
    
    }

  })
})

}

///////////////////////

module.exports = (on, config) => {
  // https://github.com/bahmutov/cypress-email-results
  // only configure the email plugin if the environment variable is set
  if (process.env.EMAIL_TO) {
    require('cypress-email-results')(on, config, {
      email: 'zubair.mohammad@qunatana.in',
     // process.env.EMAIL_TO,
      emailOnSuccess: false,
    })
  }
  
}
///////////////////////////////////////////
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

