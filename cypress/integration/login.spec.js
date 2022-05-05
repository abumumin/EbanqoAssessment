describe('User should be added successfully', function(){
    
    it ('The site should launch successfully', function(){
        cy.openSite()
    })
    it ('User should be able to enter login details', function(){
        cy.enterLoginDetails()
    })

    it ('User should be able to click on login  button', function(){
        cy.clickOnLoginButton()
    })
    
})