
import {LoginPage} from "./page/login_pages"
const loginPage = new LoginPage()

describe('All Login Tests', function (){


    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    it('Login Test 1', function () {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').click ()
    })
    
    
    
    it('Login Test 2', function () {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').click()
    })
    
})




