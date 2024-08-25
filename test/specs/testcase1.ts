import Page from '../pages/page'
import GooglePage from '../pages/google.page'
import MoroPage from '../pages/moro.page'

describe('Interview Task', () => {
    it('Google MoroSystems page, visit it and go to Kariera page', async () => {
        await Page.visitPage('https://www.google.com')
        await GooglePage.searchForKeyword('MoroSystems')
        await browser.$('[class="tjvcx GvPZzd cHaqb"]').click() // go to moro systems (assumes it is in the top results)
        await MoroPage.topMenuKariera.click()
        const h1text = await $('h1').getText()
        expect(h1text).toContain('S TEBOU\nBUDEME LEPŠÍ')
        await browser.pause(2000)
    });
 });