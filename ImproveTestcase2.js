
describe('test cases',function() {
    it('1st test',function() {
        cy.visit('https://www.aceinvoice.com')   //cy.request()  is generating error
        cy.get('#navbarSupportedContent > ul > li:nth-child(6) > a').click()
        // cy.get('#navbarSupportedContent').should('contain','Sign up for FREE').click()

         const now = new Date()
         var now1 =now.getUTCMonth()

         var arry=["January","February","march","april","may","june","july","august","september","october","november","december"];
         function months(now1) {
          return arry[now1];
         }
         function date(){
         var now2 =now.getUTCDate() 
         return now2;  }

         function year(){
          var now3 =now.getUTCFullYear() 
         return now3;  }

         function hour(){
          var now4 =now.getUTCHours() 
         return now4;  }

         function minutes(){
          var now5 =now.getUTCMinutes() 
         return now5;  }

         function miliseconds(){
          var now6 =now.getUTCMilliseconds() 
         return now6;  }

        cy.get("[data-test-id='signup-email']").type('59482357'+'-'+ months(now1)+'-'+date()+'-'+year()+'-'+hour()+'-'+minutes()+'-'+miliseconds()+'@example.com')

        cy.get("[data-test-id='signup-submit']").click()
        cy.get("[data-test-id='signup-password']").type("welcome1234!")
        cy.get("[data-test-id='signup-continue']").click()
        cy.get("[data-test-id='introduction-first-name']").type('Oliver')
        cy.get("[data-test-id='introduction-last-name']").type('Smith')

       
        cy.get("[data-test-id='introduction-timezone']").select('(GMT+05:30) New Delhi').should('have.value','New Delhi')
        cy.get("[data-test-id='introduction-timezone-124']").click({force: true})

        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div.bg-white.floating-box.page-content.form-page.onboarding-info.p-5 > form > div:nth-child(4) > div > div > div > div:nth-child(2) > div > label > div.control__indicator').should('be.visible').should('not.be.checked').click()
        cy.get("[data-test-id=introduction-terms-service-input]").click({force: true})
        cy.get("[data-test-id=introduction-marketing-email-consent-input]").click({force: true})
        cy.get("[data-test-id=introduction-submit]").click()
        cy.get("[data-test-id='organization-name']").type('neerajdotname Private Limited')
        cy.get("[data-test-id='organization-submit']").click()
        cy.get("[data-test-id='client-form-skip']").click()
        cy.get('body > div:nth-child(3) > div > div.page-wrap > div > div > div > div > div > div > div > div > h4').should("contain","Congratulations, you're all set!")
        cy.get("[data-test-id='onboarding-continue']").click()

        //cy.wait(5000)
        cy.get('body > div:nth-child(3) > div > div.header > div.header.verification-banner.py-2').should('contain','Verification email sent to')

        cy.get("[data-test-id='header-clients']").click()
        cy.get("[data-test-id='client-add-new']").click()
        cy.get("[data-test-id='client-name']").type('Trix Inc')
        cy.get("[data-test-id='client-submit']").click() 
        cy.get("[data-test-id='project-add-new']").should("contain","Add New Project")
        cy.get("[data-test-id='project-name']").type('Trix Web Development')
        cy.get('[name=billingMethod]').select('hourly_project_rate').should('have.value','hourly_project_rate')

        
        //cy.get("[data-test-id=project-rate]").click({force: true})
        cy.get("[data-test-id='project-rate']").type('20')
        cy.get('[data-test-id=project-save]').click({force: true})
        
        cy.get("[data-test-id='project-name']").should('have.value','Trix Web Development')
        cy.get("[data-test-id='project-billing-method']").should('have.value','hourly_project_rate') 
       //cy.get('[data-test-id="project-hourly-rate"]').should('contain','$20.00')
        cy.get("[data-test-id=body]").should('contain','No rounding')   
        cy.get('[data-test-id=project-team-member-table-name-1]').should('contain','Oliver Smith')








      
    })
})

/*Crypto.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
return false
})*/