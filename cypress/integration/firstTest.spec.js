/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Putranda Bagus')
        cy.get('[placeholder="Email"][type="text"]').type('putranda@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('putranda@gmail.com')
        cy.get('#inputPassword2').type('123456789')

        cy.get('.text').contains('Option 1').click()

        cy.get('.text').contains('Option 2').click()
    });

    it('Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('putranda@gmail.com')
        cy.get('#exampleInputPassword1').type('123456789')
            // cy.get('.text').contains('Check me out').click()
        cy.get('.custom-checkbox').eq(1).click()


    });

    it('Fill Form without labels', () => {
        // cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-form-elements > ngx-form-layouts > div:nth-child(2) > div:nth-child(1) > nb-card:nth-child(2) > nb-card-body > form > div:nth-child(1) > input')
        cy.get('[placeholder="Recipients"]').type('putranda bagus')

        // cy.get('body > ngx-app > ngx-pages > ngx-one-column-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-form-elements > ngx-form-layouts > div:nth-child(2) > div:nth-child(1) > nb-card:nth-child(2) > nb-card-body > form > div:nth-child(2) > input')
        cy.get('[placeholder="Subject"]').type('halooooo')

        cy.get('textarea[placeholder="Message"]').type('hiyahiyahiya ashiap')
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('pokokimel@rocketmail.com')
        cy.get('#inputPassword3').type('12345678')
        cy.get('.custom-checkbox').last().click()
    });

    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Putranda')
        cy.get('#inputLastName').type('Bagus')
        cy.get('#inputEmail').type('pokokimel@mail.com')
        cy.get('#inputWebsite').type('www.bagusbagusbagus.com')
    });

    it.only('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
    });
})