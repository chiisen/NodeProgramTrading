import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module';
// 透過 `nest g service twse-scraper --flat --no-spec` 建立的 twse-scraper.service 服務，與 `scraper` 目錄的 twse-scraper.service 服務才能正確執行
import { TwseScraperService } from './scraper/twse-scraper.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ScraperModule],
  providers: [TwseScraperService],
})
export class AppModule {}
