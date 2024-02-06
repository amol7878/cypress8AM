describe("Automate calender", () => {

    Cypress.on("uncaught:exception", () => {
        return false
    })

    it.only("Automate SpiceJet Date calender for Depart date", () => {

        //  Depart Date
        let currentDate = new Date()
        currentDate.setDate(currentDate.getDate() + 5)

        let year = currentDate.getFullYear()
        let month = currentDate.getMonth()
        month = currentDate.toLocaleString("default", { month: "long" })
        let date = currentDate.getDate()
        cy.log(year, month, date)

        cy.visit("https://book.spicejet.com/");
        cy.get("#custom_date_picker_id_1").first().siblings("button").click()

        cy.get(".ui-datepicker-title").each((el, ind, list) => {
            cy.log(el.text())
            if (el.text().includes(year)) {

            } else {
                cy.get(".ui-datepicker-next.ui-corner-all").click()
            }

        })

        cy.get(".ui-datepicker-title").each((el, ind, list) => {
            cy.log(el.text())
            if (el.text().includes(year)) {

            } else {
                cy.get(".ui-datepicker-next.ui-corner-all").click()
            }

        })


        cy.get(".ui-datepicker-title").each((el, ind, list) => {
            cy.log(el.text())
            if (el.text().includes(year)) {

            } else {
                cy.get(".ui-datepicker-next.ui-corner-all").click()
            }

        })

        function SelectYear() {

        }
        cy.get(".ui-datepicker-title").each((el, ind, list) => {
            cy.log(el.text())
            if (el.text().includes(year)) {

            } else {
                cy.get(".ui-datepicker-next.ui-corner-all").click()
            }

        })

    })

    it("Automate SpiceJet Date calender for Return date ", () => {

        //  Depart Date
        let currentDate = new Date()
        currentDate.setDate(currentDate.getDate() + 300)

        let year = currentDate.getFullYear()
        let month = currentDate.getMonth()
        month = currentDate.toLocaleString("default", { month: "long" })
        let date = currentDate.getDate()
        cy.log(year, month, date)

        cy.visit("https://book.spicejet.com/");
        cy.get("#custom_date_picker_id_1").first().siblings("button").click()
    })
})