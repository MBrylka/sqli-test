import { WikipediaPage } from "../pages/WikipediaPage";

export class WikipediaActions {
    constructor(private wikipediapage: WikipediaPage) {}

    async getDates(): Promise<Array<String>> {
        const text =  await this.wikipediapage.pageContent.contentText.innerText()
        return text.match(/\b\d{4}\b/g) ?? [];
    }
}