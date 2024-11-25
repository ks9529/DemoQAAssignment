import elements from "../e2e/WTW/WTW.js";
import data from "../fixtures/data's.json";


Cypress.Commands.add('changeLanguage', (language) => {
  // Open the language/region selector menu
 cy.get(elements.selectregion).click()
 cy.get(elements.selectcountry).click() 
 cy.get(elements.scrollbar).scrollTo('bottom')
 cy.get(elements.US_EN).click()
});

Cypress.Commands.add('performSearchandVerifyResults', (query) => {
  // Locate and use the search box
  // Open search
  cy.get(elements.searchmenu).click()
  cy.get(elements.inputtext).type(query).type('{enter}')
  cy.get(elements.resultheader).should('contains.text','Results')   
    
});

Cypress.Commands.add('setSortOption', (option) => {
  // Set the sort option dynamically (e.g., date or relevance)
     if(cy.url().should('include', '&sort=relevancy')){
          cy.xpath(elements.sortbydate).click()  
     }
     cy.url().should('include', 'date')
});

Cypress.Commands.add('filterByContentType', (contentType) => {
  //filter content by Article
  cy.get(elements.articlecheckbox).click()
});

Cypress.Commands.add('validateLinks', (expectedStart) => {
  //validate expected url to be present in search results
  cy.xpath(elements.resultsparagraph)
  .each(($row) => {
       cy.wrap($row).find("span")
      .should('contains.text',data.expectedLinkStart)  
  })     
});

Cypress.Commands.add('rejectcookie', (test) => {
  cy.get('body').then(($body) => {
    if ($body.find(elements.rejectAllButtonSelector).length > 0) {
    // If the cookie banner is present, click the "Reject All" button
        cy.get(elements.rejectAllButtonSelector).click();
   } 
  })
})
  
