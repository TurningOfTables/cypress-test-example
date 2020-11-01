const elements = {
  NAVBAR: ".nav-container",
  HOME_LINK: "#home-link",
  LOGIN_LINK: "#login-link",
  HEADER: "#header",
  COMPANY_NAME: "#company-name",
  INTRO: "#intro",
  INTRO_HEADING: "#intro-heading",
  PRODUCTS: "#products",
  PRODUCTS_HEADING: "#products-heading",
  TESTIMONIALS: "#testimonials",
  TESTIMONIALS_HEADING: "#testimonials-heading",
  CONTACT: "#contact",
  CONTACT_HEADING: "#contact-heading"
};

describe("Lorem Ipsum Plc - Page Content", () => {
  beforeEach(() => {
    cy.visit("./sample_site/index.html");
  });

  it("should display the nav bar", () => {
    cy.get(elements.NAVBAR).should("be.visible");
    cy.get(elements.HOME_LINK).should("be.visible");
    cy.get(elements.LOGIN_LINK).should("be.visible");
  });

  it("should display the header", () => {
    cy.get(elements.HEADER).should("be.visible");
    cy.get(elements.COMPANY_NAME).should("be.visible");
  });

  it("should display the intro", () => {
    cy.get(elements.INTRO).should("be.visible");
    cy.get(elements.INTRO_HEADING).should("be.visible");
  });

  it("should display the products", () => {
    cy.get(elements.PRODUCTS).should("be.visible");
    cy.get(elements.PRODUCTS_HEADING).should("be.visible");
  });

  it("should display the testimonials", () => {
    cy.get(elements.TESTIMONIALS).should("be.visible");
    cy.get(elements.TESTIMONIALS_HEADING).should("be.visible");
  });

  it("should display the contact info", () => {
    cy.get(elements.CONTACT).should("be.visible");
    cy.get(elements.CONTACT_HEADING).should("be.visible");
  })
});
