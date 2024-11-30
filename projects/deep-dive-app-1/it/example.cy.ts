type TestBankAccountsCtx = {
    allUsers?: [];
    authenticatedUser?: {};
    bankAccounts?: [];
  };
  
  describe("Bank Accounts API", function () {
    let ctx: TestBankAccountsCtx = {};
  
    before(() => {
      // Hacky workaround to have the e2e tests pass when cy.visit('http://localhost:3000') is called
      cy.request("GET", "/");
    });
  
    beforeEach(function () {
      cy.task("db:seed");
  
      // cy.database("filter", "users").then((users: User[]) => {
      //   ctx.authenticatedUser = users[0];
      //   ctx.allUsers = users;
  
      //   return cy.loginByApi(ctx.authenticatedUser.username);
      // });
  
      // cy.database("filter", "bankaccounts").then((bankAccounts: BankAccount[]) => {
      //   ctx.bankAccounts = bankAccounts;
      // });
    });
  
    context("GET /bankAccounts", function () {
      it("gets a list of bank accounts for user", function () {
        // const { id: userId } = ctx.authenticatedUser!;
        // cy.request("GET", `${apiBankAccounts}`).then((response) => {
        //   expect(response.status).to.eq(200);
        //   expect(response.body.results[0].userId).to.eq(userId);
        // });
      });
    });
  
    context("GET /bankAccounts/:bankAccountId", function () {
      it("gets a bank account", function () {
        // const { id: userId } = ctx.authenticatedUser!;
        // const { id: bankAccountId } = ctx.bankAccounts![0];
        // cy.request("GET", `${apiBankAccounts}/${bankAccountId}`).then((response) => {
        //   expect(response.status).to.eq(200);
        //   expect(response.body.account.userId).to.eq(userId);
        // });
      });
    });

  });    