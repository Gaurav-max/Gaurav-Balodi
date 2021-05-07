describe("Testcase", function(){

	beforeEach(() => {
	    Cypress.Cookies.preserveOnce('_aceinvoice_session')
  })

	it("Visit URL", function(){
		cy.visit("https://www.aceinvoice.com/")
	})

	it("Sign Up", function(){
		cy.get('#navbarSupportedContent > ul > li:nth-child(6) > a').click()
	})

	it("Enter Email and Password", function(){

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
	} )

	it("Enter Name", function(){
        cy.get("[data-test-id='introduction-first-name']").type('Oliver')
        cy.get("[data-test-id='introduction-last-name']").type('Smith')
	} )

	it("Select Time Zone", function(){
    
	cy.get('#react-select-2-input').click()
    cy.get('#react-select-2-input').type('New Delhi').type('{enter}')
      
	} )

	it("Select radio", function(){
		cy.get("input[type='radio']").check('%d/%m/%Y',{force:true} )
		cy.get("[type='checkbox']").check({force:true})
		cy.get("[data-test-id=introduction-submit]").click()
	} )

	it("Enter Company Name", function(){
		cy.get("input[name='name']").type("neerajdotname Private Limited")
        cy.get("[data-test-id='introduction-submit']").click()
        cy.get("[data-test-id='client-form-skip']").click()
	} )

	it("Assert 1 and continue", function(){
		cy.get(".pl-4").contains("Congratulations, you're all set!")
		cy.get("button[data-test-id=onboarding-continue]").click()
	} )
/*	it("Assert 2", function(){
		cy.get("div.verification-banner").contains("Verification email sent to")
	} )*/

	it("Click On Client and Add new one", function(){
		cy.get(".ri-user-star-line").click();
		cy.get("[data-test-id='client-add-new']").click()
	} )

	it("Enter Client Name and submit", function() {
		cy.get("[data-test-id='client-name']").type("Trix Inc")
		cy.get("[data-test-id='client-submit']").click()
	} )

	it("Assert 3", function(){
		cy.get("[data-test-id=project-add-new]").contains("Add New Project")
	} )

	it("Enter Client Name", function(){
		cy.get("[data-test-id=project-name]").type("Trix Web Development")
	} )

	it("Select Billing Method", function(){   //".nui-react-select__control > .nui-react-select__value-container > .nui-react-select__single-value"
		//cy.get('.nui-react-select__single-value').contains('Select Billing Method').click()
	//	cy.get('.nui-react-select__single-value').contains('Select Billing Method').click().type('Hourly project rate')
		cy.get('.css-19bqh2r').invoke('show').contains('Hourly project rate').click()
		

		//cy.get(".nui-react-select__single-value").type('Hourly project rate').type('{enter}')
		//cy.get('.nui-react-select__single-value css-1uccc91-singleValue').should('have.value','hourly_project_rate')
	} )
	it("Enter Amount", function(){
		cy.get("input[data-test-id='project-rate']").clear().type(20)
	} )

	it("Click on Add-New-Project Submit", function(){
		cy.get("[data-test-id='project-save']").click()
	} )

	it("Assert 4-5-6-7", function() {
		cy.get("[data-test-id=project-name]").should('have.value',"Trix Web Development");
		cy.get(".nui-react-select__single-value").contains("Hourly Project Rate")
		cy.get("div span").contains("No rounding")
		cy.get("[data-test-id=project-team-member-table-name-1]").contains("Oliver Smith")
	} )

} )