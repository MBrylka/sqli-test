import { Locator, Page } from "@playwright/test";

export class ResultsComponent {
    constructor(private page: Page) {}
    
    resultLink(linkName: string) {
        return this.page.getByRole('link', { name: new RegExp(linkName, 'i')}).first()

    }
}