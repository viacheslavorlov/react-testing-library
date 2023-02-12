const UsersPage = require("../pageobjects/users.page");


describe('UsersE2e test', function () {
    it('load data', async () => {
        await UsersPage.loadData()
    })

    it('delete one user', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    })

});