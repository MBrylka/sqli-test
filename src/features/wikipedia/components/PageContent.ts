import { Locator, Page } from "@playwright/test";

export class PageContent {
    contentText: Locator

    constructor(private page: Page) {
        this.contentText = this.page.locator('#mw-content-text')
    }
}