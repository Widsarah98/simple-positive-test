import { $ } from '@wdio/globals'
import Page from './swag.page.js';


class SecurePage extends Page {
    
    get flashAlert () {
        return $('.app_logo');
    }
}

export default new SecurePage();
