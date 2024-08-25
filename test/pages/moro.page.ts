class MoroPage {

    get topMenuKariera() { // Kariera top menu
        return $('//li//a[@class="m-main__link" and text()="Kariéra"]')
    }

}
export default new MoroPage()