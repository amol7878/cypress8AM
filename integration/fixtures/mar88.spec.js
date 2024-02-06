[08:47, 08/03/2023] +91 88307 29406: ///<reference types="cypress"/>

// import fixtData from '../fixtures/user.json';
// const fixtData = require('../fixtures/user.json');
// const Image = require('../fixtures/image/Image.jpg');

xdescribe('fixtures', () => {

          let obj1 = [{
                    firstName: 'ankit',
                    lastName: 'testLastName1',
                    email: "testEmail@gmail.com",
                    msg: "this is test data",
                    successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
          }, {
                    firstName: 'test123',
                    lastName: 'testLastName2',
                    email: "testEmail2@gmail.com",
                    msg: "this is test datdsadasdsadsaa2",
                    successMsg: 'Thanks for contacting us! We will get in touch with you shortly.'
          }]

          // it('hardcoded values',()=>{
          //     cy.visit('https://www.weifieldcontracting.com/contact/')
          //     cy.get('[name="input_1.3"]').type('testName')
          //     cy.get('[name="input_1.6"]').type('testLastName')
          //     cy.get('#input_2_2').type('test@gmail.com')
          //     cy.get('#input_2_3').type('test msgtest msgtest msgtest msgtest msgtest msgtest msg')
          //     cy.get('#gform_submit_button_2').click()
          //     cy.get('#gform_confirmation_message_2').should('have.text','Thanks for contacting us! We will get in touch with you shortly.')
          // })

          // it('hardcoded values for single object',()=>{
          //     cy.visit('https://www.weifieldcontracting.com/contact/')
          //     cy.get('[name="input_1.3"]').type(obj1[0].firstName)
          //     cy.get('[name="input_1.6"]').type(obj1[0].lastName)
          //     cy.get('#input_2_2').type(obj1[0].email)
          //     cy.get('#input_2_3').type(obj1[0].msg)
          //     cy.get('#gform_submit_button_2').click()
          //     cy.get('#gform_confirmation_message_2').should('have.text',obj1[0].successMsg)
          // })

          it('executing test case for multiple data', () => {
                    obj1.forEach((el) => {
                              cy.visit('https://www.weifieldcontracting.com/contact/')
                              cy.get('[name="input_1.3"]').type(el.firstName)
                              cy.get('[name="input_1.6"]').type(el.lastName)
                              cy.get('#input_2_2').type(el.email)
                              cy.get('#input_2_3').type(el.msg)
                              cy.get('#gform_submit_button_2').click()
                              cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
                    })
          });

});

xdescribe('Extract data from fixture using js', () => {

          it('Using js import statement', () => {
                    cy.log(fixtData)
                    // fixtData  ---> Array
                    // fixtData[0]  ---> object
                    cy.visit('https://www.weifieldcontracting.com/contact/')
                    cy.get('[name="input_1.3"]').type(fixtData[0].firstName)
                    cy.get('[name="input_1.6"]').type(fixtData[0].lastName)
                    cy.get('#input_2_2').type(fixtData[0].email)
                    cy.get('#input_2_3').type(fixtData[0].msg)
                    // cy.get('#gform_submit_button_2').click()
                    // cy.get('#gform_confirmation_message_2').should('have.text', el.successMsg)
          });

          it.only('Using js require keyword', () => {
                    cy.log(fixtData)
                    // fixtData  ---> Array
                    // fixtData[0]  ---> object
                    cy.visit('https://www.weifieldcontracting.com/contact/')
                    cy.get('[name="input_1.3"]').type(fixtData[0].firs…
[08:47, 08/03/2023] +91 88307 29406: describe('Fetch data from fixture file using cypress fixture method using variables', function () {
          cy.fixture(filepath,encoding, options)
          // variable --> Global varible, Aliase, this keyword
          let globalfixtFileData

          // before hook
          before("Get data from fixture data", function () {
                    // //1. Using global variable -->
                    cy.fixture('ABC/user.json').then(fixtFileData => {
                              globalfixtFileData = fixtFileData
                    });

                    //  //2. Using Alies => Cypress variable
                    //  //as()  --->
                    cy.fixture('ABC/user.json').as("fixtFileData")

                    // // 3. this keyword
                    cy.fixture('ABC/user.json').then(function (fixtFileData) {
                              this.fixtFileData = fixtFileData
                    });
          });

          it('Using cy.fixture get data from fixture file', () => {
                    // cy.fixture('user').then(fixtFileData => {
                    //           cy.log(fixtFileData)
                    // })

                    // cy.fixture('user.json').then(fixtFileData => {
                    //           cy.log(fixtFileData)
                    // })

                    // Nested path
                    cy.fixture('ABC/user.json').then(fixtFileData => {
                              cy.log(fixtFileData)
                              // fixtFileData  ---> Array
                              // fixtFileData[0]  ---> object
                              cy.visit('https://www.weifieldcontracting.com/contact/')
                              cy.get('[name="input_1.3"]').type(fixtFileData[0].firstName)
                              cy.get('[name="input_1.6"]').type(fixtFileData[0].lastName)
                              cy.get('#input_2_2').type(fixtFileData[0].email)
                              cy.get('#input_2_3').type(fixtFileData[0].msg)
                    })
          });

          it('Using cy.fixture get data from fixture file with global variable', () => {
                    cy.log(globalfixtFileData)
                    // globalfixtFileData  ---> Array
                    // globalfixtFileData[0]  ---> object
                    cy.visit('https://www.weifieldcontracting.com/contact/')
                    cy.get('[name="input_1.3"]').type(globalfixtFileData[0].firstName)
                    cy.get('[name="input_1.6"]').type(globalfixtFileData[0].lastName)
                    cy.get('#input_2_2').type(globalfixtFileData[0].email)
                    cy.get('#input_2_3').type(globalfixtFileData[0].msg)
          });

          it('Using cy.fixture get data from fixture file with cypress variable(Alies)', () => {
                    cy.get("@fixtFileData").then(data => cy.log(data))

          });

          it.only('Using cy.fixture get data from fixture file with this keyword', function () {
                    cy.log(this.fixtFileData)
                    // console.log(this)
          });

});