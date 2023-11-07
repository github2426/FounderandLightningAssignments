/// <reference types="cypress" />

describe("Assignment fo Test", function() {

    beforeEach(() => {
        cy.visit("https://www.founderandlightning.com/contact")
        cy.get('#hs-eu-cookie-confirmation-inner')
        cy.get('#hs-eu-confirmation-button').click()
    }) 

    it("Developement of automation contact us", function(){
        //launch contact us page
        //cy.visit("https://www.founderandlightning.com/contact")
      
        cy.get('input[name="firstname"]').type("Sachin")
        cy.get('input[name="lastname"]').type("Kumbhar")
        cy.get('input[type="email"]').type("kumbhar.sachin24@gmail.com")
        cy.get('input[name="mobilephone"]').type("9730490641")

        const page = ['How did you hear about us?','Referral', 'Word of mouth', 'Event','Article','Facebook', 'Twitter','Instagram','LinkedIn','Job board','Other','Clubhouse']
        let i;
        for(i=1;i<page.length;i++) {
            cy.get('select').select(i).should('have.value',page[i]);
        }

       cy.wait(2000)
       cy.get('textarea[name="message"]').type("need to know next step for appointment")
        cy.get("input[type='submit']").click()

        })

        it("verify all links are returns correct result",function(){
            const page = ['Home', 'About Us', 'Our Portfolio','Resources','F+L Capital', 'Careers','FAQs','Tech Glossary','Smoke Test Guide','Top']
           // cy.visit("https://www.founderandlightning.com/contact")
            //cy.get('#hs-eu-cookie-confirmation-inner')
            //cy.get('#hs-eu-confirmation-button').click()
            page.forEach(page => {
                cy.contains(page).then((link) => {
                    cy.request(link.prop('href')).its('status').should('eq',200)
                })
            })

            cy.get('.social-link-footer').click({ multiple: true });
    
        })
    
    it("Verify proper error message asserted on entering a invalid data", function(){
       // cy.visit("https://www.founderandlightning.com/contact")
        //cy.get('#hs-eu-cookie-confirmation-inner')
        //cy.get('#hs-eu-confirmation-button').click()
        cy.wait(5000)
        cy.get('input[name="firstname"]').type(" ")
        cy.get('input[name="lastname"]').type(" ")
        cy.get('label[class="hs-error-msg hs-main-font-element"]').should("have.text",'Please complete this required field.');
        cy.get('input[type="email"]').type("s")
        cy.get('label[class="hs-error-msg hs-main-font-element"]').should("include.text",'Email must be formatted correctly.');
        cy.get('input[name="mobilephone"]').type('424534')
        cy.get('label[class="hs-error-msg hs-main-font-element"]').should("include.text",'The number you entered is not in range.');
        cy.get('textarea[name="message"]').type(" ")
        cy.get('label[class="hs-error-msg hs-main-font-element"]').should("include.text",'Please complete this required field.');
    })

})