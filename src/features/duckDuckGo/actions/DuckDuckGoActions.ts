import { DuckDuckGoPage as DuckDuckGoPage } from "../pages/DuckDuckGo";

export class DuckDuckGoAtions {
    constructor(private duckDuckGoPage: DuckDuckGoPage) {}

    async search(searchString: string) {
        await this.duckDuckGoPage.search.searchInput.fill(searchString)
        await this.duckDuckGoPage.search.searchButton.click()
    }

    async openLink(resultName: string) {
        await this.duckDuckGoPage.results.resultLink(resultName).click()
    }

    async takeScreenshot() {
        
    }
}