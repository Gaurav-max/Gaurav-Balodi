describe("Testcase", function(){

	beforeEach(() => {
	    Cypress.Cookies.preserveOnce('_aceinvoice_session')
  })

	it("Visit URL", function(){
		cy.visit("https://www.aceinvoice.com/")
	})

	it("Sign Up and Negative assertion", function(){
		cy.get('#navbarSupportedContent > ul > li:nth-child(6) > a').should('contain','Sign up for FREE')
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
       cy.get("[data-test-id='signup-submit']").should('be.visible').click()
       cy.get("[data-test-id='signup-password']").should('be.visible').should('be.enabled').type("welcome1234!")
       cy.get("[data-test-id='signup-continue']").should('be.visible').click()
	} )

	it("Enter Name", function(){
        cy.get("[data-test-id='introduction-first-name']").should('be.visible').should('be.enabled').type('Oliver')
        cy.get("[data-test-id='introduction-first-name']").should('have.value','Oliver')
        cy.get("[data-test-id='introduction-last-name']").should('be.visible').should('be.enabled').type('Smith')
        cy.get("[data-test-id='introduction-last-name']").should('have.value','Smith')
	} )

	it("Select Time Zone", function(){
    
	cy.get('#react-select-2-input').should('be.visible').click()
    cy.get('#react-select-2-input').type('New Delhi').type('{enter}')
	//cy.get('#react-select-2-input').should('contain','(GMT+05:30) New Delhi')
	} )
	it("Select radio", function(){
		cy.get("[type='radio']").check('%d/%m/%Y',{force:true})
		cy.get("[type='checkbox']").check({force:true} )
		cy.get("[data-test-id=introduction-submit]").should('contain','Continue').click()
	} )

	it("Enter Company Name", function(){
		cy.get("input[name='name']").should('be.visible').should('be.enabled').type("neerajdotname Private Limited")
        cy.get("[data-test-id='introduction-submit']").click()
        cy.get("[data-test-id='client-form-skip']").click()
	} )

	it("Assert 1 and continue", function(){
		cy.get(".pl-4").contains("Congratulations, you're all set!")
		cy.get("button[data-test-id=onboarding-continue]").should('be.visible').should('be.enabled').click()
	} )

	it("Click On Client and Add new one", function(){
		cy.get(".ri-user-star-line").should('be.visible').should('not.be.enabled').click()
		cy.get("[data-test-id='client-add-new']").should('be.visible').should('not.be.enabled').click()
	} )

	it("Enter Client Name and submit", function() {
		cy.get("[data-test-id='client-name']").should('be.visible').should('be.enabled').type("Trix Inc")
		cy.get("[data-test-id='client-submit']").should('be.visible').should('be.enabled').click()
	} )

	it("Assert ", function(){
		cy.get("[data-test-id=project-add-new]").contains("Add New Project")
	} )

	it("Enter Client Name", function(){
		cy.get("[data-test-id=project-name]").type("Trix Web Development")
	} )
 
	it("Select Billing Method", function(){ 
		cy.get('#react-select-5-input').type('Hourly project rate',{force: true}).type('{enter}')
	} )
	it("Enter Amount", function(){
		cy.get("input[data-test-id='project-rate']").clear().type(20)
	} )

	it("Click on Add-New-Project Submit", function(){
		cy.get("[data-test-id='project-save']").click()
	} )

	it("Assert of name, rate, rounding, person name", function() {
		cy.get("[data-test-id=project-name]").should('have.value',"Trix Web Development");
		cy.get("[data-test-id='project-hourly-rate']").contains("$20.00")
		cy.get("div span").contains("No rounding")
		cy.get("[data-test-id=project-team-member-table-name-1]").contains("Oliver Smith")
	} )

} )
