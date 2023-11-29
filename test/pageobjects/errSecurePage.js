import { $ } from '@wdio/globals'
import Page from './swag.page.js';


class errSecurePage extends Page {
    
    get errorAlert () {
        return $('//h3[@data-test="error"]');
    }
}

export default new errSecurePage();
