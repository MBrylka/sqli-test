import test, { expect } from "@playwright/test";
import { DuckDuckGoAtions } from "./actions/DuckDuckGoActions";
import { AutomationSearchData } from "./data/SearchData";
import { WikipediaPage } from "../wikipedia/pages/WikipediaPage";
import { WikipediaActions } from "../wikipedia/actions/WikipediaActions";
import { DuckDuckGoPage } from "./pages/DuckDuckGo";



test('Search Automation in duckDuckGo and take screenshot of wiki page',
    async ({page}) => {
        await test.step('Search automation in duckDuckGo and open Wikipedia link', async () => {
            const duckDuckGoPage = new DuckDuckGoPage(page)
            const duckDuckGoActions = new DuckDuckGoAtions(duckDuckGoPage)

            await duckDuckGoPage.open()
            await duckDuckGoActions.search(AutomationSearchData.searchString)
            await duckDuckGoActions.openLink(AutomationSearchData.expectedResult)
        })

        await test.step('Verify earliest automation date and take screenshot', async () => {
            const wikipediaPage = new WikipediaPage(page)
            const wikipediaActions = new WikipediaActions(wikipediaPage)

            const dates = await wikipediaActions.getDates()
            expect(dates).not.toHaveLength(0)
            expect(dates).toContain('1785')
            await wikipediaPage.takeScreenshot('automation-wiki.png')
        })
    }
)