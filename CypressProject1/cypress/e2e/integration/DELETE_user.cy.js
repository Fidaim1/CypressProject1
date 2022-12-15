/// <reference types="cypress"/>

describe('DELETE user tests', function (){


    it('delete user', function(){
      
        cy.request({
            method : 'DELETE',
            url : 'https://gorest.co.in/public/v2/users/6095',
            headers : {
                'authorization' : 'Bearer ea4c32bd5a24b3b81fd4671afc3ec12079071e502b1b098ee5a32f9d703b401f'
            },
        })
        


    })




})