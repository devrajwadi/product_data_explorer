import { Injectable } from '@nestjs/common';
import { PlaywrightCrawler } from 'crawlee';

@Injectable()
export class ScrapeService {
  async scrapeNavigation(): Promise<{ title: string; slug: string }[]> {
    const results: { title: string; slug: string }[] = [];

    const crawler = new PlaywrightCrawler({
      requestHandler: async ({ page }) => {
        await page.goto('https://www.worldofbooks.com/', {
          waitUntil: 'domcontentloaded',
        });

        const items = await page.$$eval('nav a', (links) =>
          links
            .map((a) => ({
              title: a.textContent?.trim() || '',
              slug: a.getAttribute('href'),
            }))
            .filter(
              (item): item is { title: string; slug: string } =>
                Boolean(item.title) &&
                typeof item.slug === 'string' &&
                item.slug.startsWith('/'),
            ),
        );

        results.push(...items);
      },
    });

    await crawler.run(['https://www.worldofbooks.com/']);
    return results;
  }
}
