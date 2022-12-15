  export  class LoginPage {


    enterUsername (enterUsername){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type (enterUsername)

    }

    enterPassword (enterPassword){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type (enterPassword)

    }

     clickLogin (){
        cy.get('.oxd-button').click ()
    }








    }