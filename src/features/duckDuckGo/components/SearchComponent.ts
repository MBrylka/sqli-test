import { Locator, Page } from "@playwright/test";

export class SearchComponent {
    searchInput: Locator
    searchButton: Locator
    
    constructor(private page: Page) {
        this.page = page;
        this.searchInput = this.page.getByRole('combobox', {name: 'Search with DuckDuckGo'})
        this.searchButton = this.page.locator('button', { hasText: 'search'}).first()
    }
    
}