class GooglePage {

    get searchField() { // search field
        return $('[id="APjFqb"]')
    }

    get resultsDisplayed() {
        return $('[class="YmvwI"]')
    }

    get moroPageFromGoogleSearchResults() {
        return $('//a[contains(@href, "https://www.morosystems.cz") and @jsname="UWckNb"]')
    } 
    
    public async searchForKeyword(keyword: string) {
        await this.searchField.setValue(keyword)
        await browser.keys("Enter")
        await this.resultsDisplayed
    }
}
export default new GooglePage()