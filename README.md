# NodeProgramTrading
Node.js 程式交易

# 安裝
- [Node.js® Downloads](https://nodejs.org/en/download/current)

- [MongoDB Community Server Download](https://www.mongodb.com/try/download/community-kubernetes-operator)

- nest
```shell
npm install -g @nestjs/cli

nest -h
```
# 取得上市或上櫃的股票清單
## 建立 scraper 專案目錄與執行
```shell
# Nest CLI 建立 scraper 的 Nest 應用程式
nest new scraper

# 建立 ScraperModule
nest g module scraper

# 進入目錄並執行
cd scraper
npm run start
```

## 必要安裝
```
npm install --save @nestjs/axios cheerio iconv-lite
```
- `@nestjs/axios`
處理 HTTP 請求與回應
- `cheerio`
分析 HTML 資料與操作
- `iconv-lite`
將字串轉換不同編碼格式

# 執行 service
- 新增 twse-scraper 的 service
```
nest g service twse-scraper --flat --no-spec
```
- `--flat`
確保 Service 與 Module 在同一目錄
- `--no-spec`
省略單元測試的建立
## 已知問題
twse-scraper.service.ts 會有兩個  
子目錄 `scraper` 目錄內的 `twse-scraper.service.ts`  
是我們實作的內容  
工作目錄上的 `twse-scraper.service.ts`  
是 NEST-CLI 產生的  
目前可以正常執行  
移除 `twse-scraper.service.ts` 則會編譯錯誤  

## 修正 eslint 錯誤
```
Delete `␍` eslint(prettier/prettier) [第 1 行,第 36 欄]
```
修正指令為:
```
npm run lint --fix
```
