/*import { ajaxPrefilter } from "cypress/types/jquery"
import { maxBy } from "cypress/types/lodash"*/

describe('test cases',function() {
    it('1st test',function() {
        cy.visit('https://www.aceinvoice.com/')
        cy.get('#navbarSupportedContent > ul > li:nth-child(6) > a').click() // 59482357+Gaurav-max@users.noreply.github.com

         const now = new Date() 
         var now1 =now.getUTCMonth()

         var arry=["January","February","march","april","may","june","july","august","september","october","november","december"];
         function months(now1) {
          return arry[now1];
         }
         var now31 =months(now1);
         var now2 =now.getUTCDate()
         var now3 =now.getUTCFullYear()
         var now4 =now.getUTCHours()
         var now5 =now.getUTCMinutes()
         var now6 =now.getUTCMilliseconds()
       //  now1= now.getDate()
      /*  date1 = date.month()
        date2 = date.day()
        date3 = date.year()*/
        cy.get('input[type=text]').type('59482357'+'-'+ now31+'-'+now2+'-'+now3+'-'+now4+'-'+now5+'-'+now6+'@example.com')
        cy.get('input[type=submit]').click()
        cy.get('input[type=password]').type("welcome1234!")
        cy.get('input[type=submit]').click()
        cy.get('input[type=text]').type('Oliver')
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(2) > div:nth-child(2) > div > input').type('Smith')
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(3) > div > div ').click()
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(3) > div > div > select').select('(GMT+05:30) New Delhi').should('have.value','New Delhi')
        //cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(4) > div > div > div > div:nth-child(2) > div > label > div.control__indicator').should('be.visible').should('be.checked')
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(4) > div > div > div > div:nth-child(2) > div > label > div.control__indicator').should('be.visible').should('not.be.checked').click()
       cy.get('input[type=checkbox]').check({force: true})
        cy.get('input[type=checkbox]').check({force: true})
        cy.get('input[type=submit]').click()
        cy.get('input[name=name]').type('neerajdotname Private Limited')
        cy.get('input[type=submit]').click()
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.page-content.bg-white.floating-box.form-page.col-md-12.add-client-page.p-5 > form > div.form-actions.pb-0 > a').click()
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > h4').should("contain","Congratulations, you're all set!")
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > button').click()
        //cy.wait(5000)
        cy.get('body > div:nth-child(3) > div > div.header > div.header.verification-banner.py-2').should('contain','Verification email sent to')
        cy.get('body > div:nth-child(3) > div > div.header > div.container > div:nth-child(2) > div > ul > li:nth-child(4) > a').click()
        cy.get('[data-test-id=client-add-new]').click()
        cy.get('[data-test-id=client-name]').type('Trix Inc')
        cy.get('[data-test-id=client-submit]').click() 
        cy.get('[data-test-id=project-add-new]').should("contain","Add New Project")
        cy.get('[data-test-id=project-name]').type('Trix Web Development')
        cy.get('[name=billingMethod]').select('hourly_project_rate').should('have.value','hourly_project_rate')
        cy.get('[name=projectLevelRate]').type('20')
        cy.get('[data-test-id=project-save]').click({force: true})
        cy.get('[data-test-id=project-name]').should('contain','Trix Web Development')
        cy.get('[data-test-id="project-billing-method"]').should('contain','Hourly Project Rate')
        //cy.get('[data-test-id="project-hourly-rate"]').should('contain','$20.00')
        cy.get('#info > div.px-5.pt-5 > div:nth-child(2) > div:nth-child(3) > div.field-value.white-space-pre-wrap.text-break > span').should('contain','No rounding')
        cy.get('[data-test-id=project-team-member-table-name-1]').should('contain','Oliver Smith')








      
    })
})

/*Crypto.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
return false
})*/