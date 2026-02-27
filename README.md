# 🚀 NodeProgramTrading
運用 Node.js 打造你的專屬程式交易系統 📈

## 🛠️ 環境安裝
在開始之前，請確保已安裝以下必要工具：

- **Node.js**: [前往官網下載最新版本](https://nodejs.org/en/download/current) 💻
- **MongoDB Community Server**: [資料庫下載連結](https://www.mongodb.com/try/download/community-kubernetes-operator) 🍃
- **NestJS CLI**: 
  ```shell
  npm install -g @nestjs/cli
  
  # 確認安裝成功
  nest -h
  ```

---

## 📊 取得上市/上櫃股票清單
透過 NestJS 建立爬蟲模組來獲取市場資訊。

### 1️⃣ 建立 Scraper 專案與初始化
```shell
# 使用 Nest CLI 建立名為 scraper 的應用程式
nest new scraper

# 建立專案專屬的 ScraperModule
nest g module scraper

# 進入目錄並啟動伺服器
cd scraper
npm run start
```

### 2️⃣ 安裝必要相依套件
```shell
npm install --save @nestjs/axios cheerio iconv-lite
```
- **`@nestjs/axios`**: 負責處理非同步 HTTP 請求與回應 🌐
- **`cheerio`**: 如同 jQuery 般便利地分析與操作 HTML 資料 📑
- **`iconv-lite`**: 解決編碼問題，將字串轉換為正確格式 🔤

---

## ⚙️ 執行 Service 開發

### 新增 TWSE 爬蟲服務
```shell
nest g service twse-scraper --flat --no-spec
```
- `--flat`: 將 Service 直接產生在 Module 同一目錄下，保持結構簡潔。
- `--no-spec`: 省略產生單元測試檔案，專注於功能開發。

### ⚠️ 已知問題
在開發過程中，可能會遇到 `twse-scraper.service.ts` 重複出現的情況：
1. `scraper` 子目錄內的檔案是我們主要實作內容。
2. 根目錄或工作目錄上的檔案是由 NEST-CLI 自動產生的。

**注意**：目前系統可正常運作，但若手動移除該檔案可能會導致編譯錯誤。

---

## 🧹 修正 ESLint / Prettier 錯誤
若遇到 `Delete ␍ eslint(prettier/prettier)` 換行符號報錯：

**解決方法 A：使用自動修復指令**
```shell
npm run lint --fix
```

**解決方法 B：修改設定檔（推薦）**
- 在 `.eslintrc.js` 加入: `'linebreak-style': 'off'`
- 在 `.prettierrc` 加入: `"endOfLine": "auto"`

---

*Happy Trading! 🚀🌕*

