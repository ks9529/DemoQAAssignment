import data from "../../fixtures/data's.json"
require('cypress-xpath');
/// <reference types="cypress" />

describe('WTW Website Tests', () => {

   it('Go to url', () => {
     cy.visit(data.baseUrl);
    cy.rejectcookie();
         
  })

   it('Change the language and region to US-EN', () => {
    const language = data.languages[data.defaultLanguage];
    cy.changeLanguage(language);
   })
   
   it('Search for IFRS 17 and verify result', () => {
    cy.performSearchandVerifyResults(data.searchQuery);
   })

   it('Sort results by date', () => {
    cy.setSortOption(data.sortOptions.date);
   })

   it('Filter content type to Article', () => {
    cy.filterByContentType(data.contentType);
   })

   it('Validate links start with the expected URL', () => {
    cy.validateLinks(data.expectedLinkStart);
   })  
     
   });
 
   