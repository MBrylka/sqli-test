import { Page } from "@playwright/test";
import { ResultsComponent } from "../components/resultsComponent";
import { SearchComponent } from "../components/SearchComponent";


export class DuckDuckGoPage {

    readonly search: SearchComponent
    readonly results: ResultsComponent

    constructor(private page: Page) {
        this.search = new SearchComponent(page)
        this.results = new ResultsComponent(page)
    }

    async open() {
        await this.page.goto('https://duckduckgo.com/', {
            waitUntil: "domcontentloaded"
        });
    }

}