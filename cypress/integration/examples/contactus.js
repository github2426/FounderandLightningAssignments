/// <reference types="cypress" />

describe("Assignment fo Test", function() {

    it("Developement of automation contact us", function(){

        //launch contact us page
        cy.visit("https://www.founderandlightning.com/contact")
        cy.get('#hs-eu-cookie-confirmation-inner')
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type("Sachin");
        cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type("Kumbhar");
        cy.get('#email-b15d4232-7672-429d-81fd-a00020bddf95').type("kumbhar.sachin24@gmail.com");
        cy.get('#mobilephone-b15d4232-7672-429d-81fd-a00020bddf95').type("9730490641");
        cy.get('select').select(1).should('have.value',"Referral");
        cy.get('select').select(2).should('have.value',"Word of mouth");
        cy.get('select').select(3).should('have.value',"Event");
        cy.get('select').select(4).should('have.value',"Article");
        cy.get('select').select(5).should('have.value',"Facebook");
        cy.get('select').select(6).should('have.value',"Twitter");
        cy.get('select').select(7).should('have.value',"Instagram");
        cy.get('select').select(8).should('have.value',"LinkedIn");
        cy.get('select').select(9).should('have.value',"Job board");
        cy.get('select').select(10).should('have.value',"Other");
        cy.get('select').select(11).should('have.value',"Clubhouse");
        cy.wait(2000)
        cy.get('#message-b15d4232-7672-429d-81fd-a00020bddf95').type("need to know next step for appointment")
        cy.get("input[type='submit']").click()

        })

        it("verify all links are returns correct result",function(){
            const page = ['Home', 'About Us', 'Our Portfolio','Resources','F+L Capital', 'Careers','FAQs','Tech Glossary','Smoke Test Guide','Top']
            cy.visit("https://www.founderandlightning.com/contact")
            cy.get('#hs-eu-cookie-confirmation-inner')
            cy.get('#hs-eu-confirmation-button').click()
            page.forEach(page => {
                cy.contains(page).then((link) => {
                    cy.request(link.prop('href')).its('status').should('eq',200)
                })
            })

            cy.get('.social-link-footer').click({ multiple: true });
    
        })
    })


    it("verify assertion for not entering fields givea a proper error message",function(){

        cy.visit("https://www.founderandlightning.com/contact")
        cy.get('#hs-eu-cookie-confirmation-inner')
        cy.get('#hs-eu-confirmation-button').click()
        cy.get('#firstname-b15d4232-7672-429d-81fd-a00020bddf95').type(" ");
        cy.get('#lastname-b15d4232-7672-429d-81fd-a00020bddf95').type("Kumbhar");
    })