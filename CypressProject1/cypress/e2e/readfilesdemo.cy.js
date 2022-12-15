/// <reference types="cypress"/>



it('Read flise using fixtures', function () {


    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)


    })



})

it('Read file using readFile', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})


it('Write file demo', function (){

    cy.writeFile('sample.txt','Hello iam Fidaim\n')
    cy.writeFile('sample.txt','Iam learning English',{flag:'a+'})





})