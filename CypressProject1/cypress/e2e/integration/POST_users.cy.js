/// <reference types="cypress"/>

describe('POST user tests', function (){


    it('post user', function(){
      
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : 'Bearer ea4c32bd5a24b3b81fd4671afc3ec12079071e502b1b098ee5a32f9d703b401f'
            },
            body : {

                
                "name": "Toski",
                "email": "fatos-ahmet13@hotmail.com",
                "gender": "male",
                "status": "active"
            

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            /// expect(res.name).has.property('name','Toski')
           
        })
        


    })




})