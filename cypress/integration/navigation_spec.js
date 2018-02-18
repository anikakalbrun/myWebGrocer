describe('Navigation, Form Submitting', () => {
    it('navigation from Page1, Page2 to Page3 and form submitting', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place
        cy.contains('Welcome');
        // search for the button and click it
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Type values into the inputs
        cy.get('[name="firstName"]').type('John');
        cy.get('[name="surname"]').type('Doe');
        cy.get('.react-datepicker__input-container > input').type('15/03/1980');
        cy.get('[name="nationality"]').type('Irish');
        cy.get('[name="email"]').type('john.doe@gmail.com');
        cy.get('[name="occupation"]').type('Front End Developer');
        //click the submit button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Thank You');
    });
});