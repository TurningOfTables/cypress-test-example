const elements = {
  LOGIN_LINK: "#login-link",
  LOGIN_POPUP: "#login-popup",
  LOGIN_CLOSE: "#login-popup-close",
  USERNAME_INPUT: "#username",
  PASSWORD_INPUT: "#password",
  SUBMIT: "#form-submit",
  LOGIN_SUCCESS: ".form-success-container",
  LOGIN_FAIL: ".form-failure-container",
};

describe("Lorem Ipsum Plc - Login", () => {
  beforeEach(() => {
    cy.visit("./sample_site/index.html");
  });

  it("should open the login popup correctly", () => {
    cy.get(elements.LOGIN_LINK).click();
    cy.get(elements.LOGIN_POPUP).should("be.visible");
  });

  it("should close the login form", () => {
    cy.get(elements.LOGIN_LINK).click();
    cy.get(elements.LOGIN_POPUP).should("be.visible");
    cy.get(elements.LOGIN_CLOSE).click();
    cy.get(elements.LOGIN_POPUP).should("not.be.visible");
  });

  it("should log in with valid right details", () => {
    cy.get(elements.LOGIN_LINK).click();
    cy.get(elements.USERNAME_INPUT).type("User42");
    cy.get(elements.PASSWORD_INPUT).type("guest");
    cy.get(elements.SUBMIT).click();
    cy.get(elements.LOGIN_SUCCESS).should("be.visible");
  });

  it("should not log in with invalid details", () => {
    cy.get(elements.LOGIN_LINK).click();
    cy.get(elements.USERNAME_INPUT).type("User42");
    cy.get(elements.PASSWORD_INPUT).type("foo");
    cy.get(elements.SUBMIT).click();
    cy.get(elements.LOGIN_FAIL).should("be.visible");
  });
});
