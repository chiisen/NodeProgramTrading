import * as cheerio from 'cheerio';
import * as iconv from 'iconv-lite';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TwseScraperService {
  constructor(private httpService: HttpService) {}

  /**
   * 為了測試執行結果，可加入 `onApplicationBootstrap()` 方法來執行程式。如下：
   *
   * async onApplicationBootstrap() {
   *   const tse = await this.fetchListedStocks({ market: 'TSE' });
   *   console.log(tse);  // 顯示上市公司股票清單
   *
   *   const otc = await this.fetchListedStocks({ market: 'OTC' });
   *   console.log(otc);  // 顯示上櫃公司股票清單
   * }
   *
   * @see https://github.com/chunkai1312/nodejs-investing-twstock/issues/1
   */
  async fetchListedStocks(options?: { market: 'TSE' | 'OTC' }) {
    const market = options?.market ?? 'TSE';
    const url = {
      TSE: 'https://isin.twse.com.tw/isin/class_main.jsp?market=1&issuetype=1',
      OTC: 'https://isin.twse.com.tw/isin/class_main.jsp?market=2&issuetype=4',
    };
    const response = await firstValueFrom(
      this.httpService.get(url[market], { responseType: 'arraybuffer' }),
    );
    const page = iconv.decode(response.data, 'big5');
    const $ = cheerio.load(page);

    return $('.h4 tr')
      .slice(1)
      .map((_, el) => {
        const td = $(el).find('td');
        return {
          symbol: td.eq(2).text().trim(),
          name: td.eq(3).text().trim(),
          market: td.eq(4).text().trim(),
          industry: td.eq(6).text().trim(),
        };
      })
      .toArray();
  }

  async onApplicationBootstrap() {
    const tse = await this.fetchListedStocks({ market: 'TSE' });
    console.log(tse); // 顯示上市公司股票清單

    const otc = await this.fetchListedStocks({ market: 'OTC' });
    console.log(otc); // 顯示上櫃公司股票清單
  }
}
