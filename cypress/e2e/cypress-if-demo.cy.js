/// <reference types="cypress-if" />

import 'cypress-if'

describe('Cypress IF plugin', () => {

    it("Failed test - Element is not displayed", () => {
        const imageUrls = [];

        cy.visit('https://www.bosch-diy.com/se/sv/onlinekatalog-goer-det-sjaelv-ac/borra?')
        cy.acceptPrivacySettings();

        cy.get('[class^="ActiveCategorySlider_activeCard_"] img')
        .if()
        cy.get('[class^="ActiveCategorySlider_activeCard_"] img').each(($img) => {
            const imgUrl = $img.attr('src');
            
            if (imgUrl) {
                imageUrls.push(imgUrl);
            }
        })
    });  

    it("Passed test - element is displayed", () => {
        const imageUrls = [];

        cy.visit('https://www.bosch-diy.com/se/sv/elverktyg/sladdloesa-maskiner?')
        cy.acceptPrivacySettings();
    
        cy.get('[class^="ActiveCategorySlider_activeCard_"] img')
        .if()
        cy.get('[class^="ActiveCategorySlider_activeCard_"] img').each(($img) => {
            const imgUrl = $img.attr('src');
            
            if (imgUrl) {
                imageUrls.push(imgUrl);
            }
        })
    });
});
