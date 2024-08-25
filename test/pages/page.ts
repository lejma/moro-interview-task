class Page {

    public async visitPage (url: string) {
        let notConsentLocator: string = ''
        if (url.includes('google.com')) {
            notConsentLocator = '[id="W0wltc"]'
        }
        browser.url(url)
        await browser.$(notConsentLocator).click() // NOT consent to cookies on every visit
    }
}
export default new Page()