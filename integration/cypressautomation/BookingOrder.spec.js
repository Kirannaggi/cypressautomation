/// <reference types="cypress" />  

// above reference is the intellisense and it shows suggestions when we are using the cypress

describe('AutomationTesting', function ()
{
it('Test Cases-Login functionality, Click on Category, Viewing the product, Add an item to cart and checkout,Checkout Confirmation, Verify Order details', function() 
 {  
  //TestCase-1 User should be able to Login and click on any category

   cy.visit('https://automationteststore.com/')

   // Verify user is able to login
   cy.contains('Login or register').click()
   cy.get('input[name=loginname]').type('Kiran')
   cy.get('input[id=loginFrm_password]').type('admin1234')
   cy.get('button[title=Login]').click()

   //Clicking on any one category name
   cy.get('section[id=categorymenu]>nav>ul>li:nth-of-type(4)').click()


   //TestCase-2 Verifying the specific product

   //Assertion to verify the category page
   .should('contain','Skincare')

   // Click on specific product
   cy.get(':nth-child(2) > .thumbnail > :nth-child(2) > img').click()

   //View the product details
   cy.get('#product_details > :nth-child(1) > :nth-child(2) > .row > .col-md-12')
   
   //Assertion to verify the title
   cy.title().should('be.equal','Absolue Eye Precious Cells')


   //TestCase-3 Add item to cart and click on checkout

   //Increase The Quantity by 4  
   cy.get('#product_quantity[type=text]').clear()
   cy.get('#product_quantity[type=text]').type('4')  

   //Click on Add To Cart
   cy.get('.cart').click()

   //Assertion to verify the title
   cy.get('i').parent('span').should('contain','Shopping Cart')

   //Click on Checkout
   cy.get('#cart_checkout1').click()


   //TestCase-4 Click on Confirm order and continue

   //Assertion to Verify title
   cy.title().and('include','Checkout Confirmation')

   //Click on Confirm Order Button
   cy.get('button#checkout_btn.btn.btn-orange.pull-right.lock-on-click').click()
    
   //Assertion to verify title
   cy.title().should('contains','Your Order Has Been Processed')

   //Click on Continue Button
   cy.get('.mb40 > .btn').click()


  //TestCase-5 Verfying the order details
  cy.get('#main_menu_top')
  .invoke('css', 'display', 'block')
  .find('.menu_text').contains('Account').click()
  cy.get(':nth-child(2) > .dash-tile > .dash-tile-header > .dash-tile-options > .btn').click()  

})
})


