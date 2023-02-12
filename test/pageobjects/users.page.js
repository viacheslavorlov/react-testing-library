const Page = require('./page');

class UsersPage extends Page {
    get loadingTitle() {
        return $('#user-loading')
    }

    get usersList() {
        return $('#users-list')
    }

    get  usersItems() {
        return browser.react$$('SingleUserE2E')
    }
    get  usersItems2() {
        return $$('.SingleUserE2E')
    }

    async loadData() {
        try {
            await this.open();
            await this.loadingTitle.waitForDisplayed({timeout: 2000})
            await this.usersList.waitForDisplayed({timeout: 2000})

        } catch (e) {
            throw new Error('не удалось загрузить пользователей ' + e.message)
        }
    }

    async deleteUser() {

        try {

            const usersCount = await this.usersItems2.length;
            if (!usersCount) {
                throw new Error('пользователи не найдены')
            }

            await this.usersItems2[0].$('.user-delete').click();
            const usersCountAfterDelete = await this.usersItems2.length
            if (usersCount - 1 !== usersCountAfterDelete) {
                throw new Error('не удалось удалить пользователя или удалился более чем один элемент')
            }
        } catch (e) {
            throw new Error('не удалось удалить пользователя ' + e.message)
        }
    }

    open() {
        return super.open('/users-e2e');
    }
}

module.exports = new UsersPage();