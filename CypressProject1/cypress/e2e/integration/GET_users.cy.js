/// <reference types="cypress"/>




describe('GET user API test', function (){

    it('get users', function(){


        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : 'Bearer 3864f1c944508d2e578b1259937794e2152664392c9794475d7ec021f3aaa223'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
           
        })

    })


    it('get users by ID', function(){


        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'authorization' : 'Bearer 3864f1c944508d2e578b1259937794e2152664392c9794475d7ec021f3aaa223'
             }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            
           
           
        })

    })







})    