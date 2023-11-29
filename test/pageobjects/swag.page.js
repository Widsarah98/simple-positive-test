import { browser } from '@wdio/globals'


export default class Page {
    
    @param path 
    
    open (path) {
        return browser.url(`https://www.saucedemo.com`)
    }
}
