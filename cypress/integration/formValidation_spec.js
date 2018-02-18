describe('Form Validation', () => {

    it('input[name="firstName"] must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the input[name="firstName"] without a value
        cy.get('input[name="firstName"]').click();
        cy.get('input[name="firstName"]').blur();
        //Check for error message
        cy.contains('Required');
        // Type into the input[name="firstName"] an invalid value
        cy.get('[name="firstName"]').type('T');
        //Check for error message
        cy.contains('must include at least 2 characters');
        // Type into the input[name="firstName"] an invalid value
        cy.get('[name="firstName"]').type("Test, test");
        //Check for error message
        cy.contains('must contain letters only');
    });

    it('input[name="surname"] must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the input[name="surname"] without a value
        cy.get('input[name="surname"]').click();
        cy.get('input[name="surname"]').blur();
        //Check for error message
        cy.contains('Required');
        // Type into the input[name="surname"] an invalid value
        cy.get('[name="surname"]').type('T');
        //Check for error message
        cy.contains('must include at least 2 characters');
        // Type into the input[name="surname"] an invalid value
        cy.get('[name="surname"]').type("Test, test");
        //Check for error message
        cy.contains('may only contain letters, space and dash characters');
    });

    it('dob input must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the '.react-datepicker__input-container > input' without a value
        cy.get('.react-datepicker__input-container > input').click();
        //click another input to trigger the dob input validation
        cy.get('[name="surname"]').click();
        //Check for error message
        cy.contains('Required');
    });

    it('input[name="email"] must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the input[name="email"] without a value
        cy.get('input[name="email"]').click();
        cy.get('input[name="email"]').blur();
        //Check for error message
        cy.contains('Required');
        // Type into the input[name="email"] an invalid value
        cy.get('[name="email"]').type('T');
        //Check for error message
        cy.contains('Invalid email address');
        // Type into the input[name="email"] an invalid value
    });

    it('input[name="nationality"] must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the input[name="nationality"] without a value
        cy.get('input[name="nationality"]').click();
        cy.get('input[name="nationality"]').blur();
        //Check for error message
        cy.contains('Required');
        // Type into the input[name="nationality"] an invalid value
        cy.get('[name="nationality"]').type('T');
        //Check for error message
        cy.contains('must include at least 2 characters');
        // Type into the input[name="nationality"] an invalid value
        cy.get('[name="nationality"]').type("Test, test");
        //Check for error message
        cy.contains('must contain letters only');
    });

    it('input[name="occupation"] must be validated', () => {
        // visit 'baseUrl'
        cy.visit('/');
        // assert if we are in good place - search for a 'smarter world phrase
        cy.contains('Welcome');
        //click the button
        cy.get('button').click();
        // assert if we are in good place
        cy.contains('Submit');
        // Leave the input[name="occupation"] without a value
        cy.get('input[name="occupation"]').click();
        cy.get('input[name="occupation"]').blur();
        //Check for error message
        cy.contains('Required');
        // Type into the input[name="occupation"] an invalid value
        cy.get('[name="occupation"]').type('T');
        //Check for error message
        cy.contains('must include at least 2 characters');
        // Type into the input[name="occupation"] an invalid value
        cy.get('[name="occupation"]').type("Test, test");
        //Check for error message
        cy.contains('may only contain letters, space and dash characters');
    });
});