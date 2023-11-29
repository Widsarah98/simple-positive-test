import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/swag.login.page.js';
import SecurePage from '../pageobjects/swag.secure.page.js';
import errSecurePage from '../pageobjects/errSecurePage.js';
import errLoginPage from '../pageobjects/errorLoginPage.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Swag Labs')
    })
})


describe('My Negative test for standard user', () => {
    it('should not login with valid username credentials and invalid password', async () => {
        await errLoginPage.open()

        await errLoginPage.login('standard_user', 'asdlkfj;aldkgj')
        await expect(errSecurePage.errorAlert).toBeExisting()
        await expect(errSecurePage.errorAlert).toHaveTextContaining(
            'Epic sadface')
    })
})


describe('My Negative test for locked_out_user', () => {
    it('should not login with valid username credentials and invalid password', async () => {
        await errLoginPage.open()

        await errLoginPage.login('standard_user', 'fkr((,a;dl2')
        await expect(errSecurePage.errorAlert).toBeExisting()
        await expect(errSecurePage.errorAlert).toHaveTextContaining(
            'Epic sadface')
    })
})


describe('My Negative test for problem_user', () => {
    it('should not login with valid username credentials and invalid password', async () => {
        await errLoginPage.open()

        await errLoginPage.login('standard_user', '12345678')
        await expect(errSecurePage.errorAlert).toBeExisting()
        await expect(errSecurePage.errorAlert).toHaveTextContaining(
            'Epic sadface')
    })
})