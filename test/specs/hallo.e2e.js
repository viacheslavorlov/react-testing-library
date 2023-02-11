const HelloPage = require('../pageobjects/hello.page');

describe('My hello world test', () => {
	it('should test ok with hello string', async () => {
		await HelloPage.open()

		await HelloPage.toggleTitle('hello');
		await expect(HelloPage.helloH1).toBeExisting();
		await expect(HelloPage.helloH1).toHaveTextContaining('HELLO WORLD');
		await HelloPage.toggleBtn.click();
		await expect(HelloPage.helloH1).not.toBeExisting();
	})
	it('should NOT test ok with random string', async () => {
		await HelloPage.open()
		await HelloPage.toggleTitle('asdfzxcv');
		await expect(HelloPage.helloH1).not.toBeExisting();
	})
})


