import { Page } from "@playwright/test";
import { PageContent } from "../components/PageContent";

export class WikipediaPage {
    readonly pageContent: PageContent

    constructor(private page: Page) {
        this.pageContent = new PageContent(page)
    }

    async takeScreenshot(filename: string) {
        await this.page.screenshot({path: filename})
    }
}