# GitHub Pages 個人網站範本（Digital IC / AI Hardware）

這是一個**可直接上傳 GitHub Pages** 的個人作品集範本。不需要安裝 Node.js、React 或任何套件，也不需要付費買主機。

## 1. 本機預覽

直接用 Chrome / Edge 打開 `index.html`，就能看到網站。建議先用瀏覽器檢查電腦版和手機版。

網站由以下檔案構成：

```text
username.github.io/
├── index.html   ← 網站內容
├── style.css    ← 顏色、字體、排版、手機版設計
├── script.js    ← 個人資料、互動、PE 示意圖
├── favicon.svg  ← 網站圖示
├── .nojekyll    ← GitHub Pages 直接發布靜態檔案
└── README.md    ← 本說明
```

## 2. 先改自己的資料（很重要）

用 VS Code 開啟 `script.js`，最上方有：

```javascript
const SITE = {
  displayName: 'Y. Huang',
  initials: 'YH',
  email: '',
  githubUsername: '',
  resumeUrl: ''
};
```

- `displayName` 改成你的英文名字或慣用名稱。
- `initials` 是左上角 Logo 的字母。
- `email` 放自己想公開的 Email（留空就不顯示聯絡按鈕）。
- `githubUsername` 是 GitHub 帳號名稱（留空就不顯示 GitHub 個人頁按鈕）。
- `resumeUrl` 可填 `resume.pdf`，並將檔案放在與 `index.html` 相同的資料夾；目前留空。
- 專案敘述、研究興趣、學經歷、技術技能等文字都直接在 `index.html` 裡修改。
- 如果不想公開「National Ilan University」等教育背景，記得在 `index.html` 修改。
- **目前的專案描述是示範文案，請依你實際完成的內容調整，不要把未完成的功能寫成已驗證成果。**

## 3. 不用指令，把網站上傳到 GitHub

1. 登入 https://github.com/ 。
2. 右上角 `+` → `New repository`。
3. 在 `Repository name` 填入 **`你的GitHub帳號.github.io`**。例如帳號 `octocat`，名稱就是 `octocat.github.io`。
4. 選擇 `Public`（GitHub Free 的 Pages 使用公開 Repository）。按 `Create repository`。
5. 進入 Repository，點 `Add file` → `Upload files`。
6. **將這個資料夾內所有檔案上傳到 Repository 根目錄**。不要把外層資料夾整個包成一層目錄；GitHub Repository 最外層必須能看到 `index.html`。
7. 在下方按 `Commit changes`。
8. 點 `Settings` → 左側 `Pages`。
9. 在 `Build and deployment` 設定：
   - `Source`：`Deploy from a branch`
   - `Branch`：`main`
   - Folder：`/(root)`
   - 點 `Save`
10. 等待 GitHub 部署完成，再開啟 **`https://你的GitHub帳號.github.io/`**。

GitHub 官方表示，推送更新後可能需要**最多 10 分鐘**才會顯示。

參考文件：https://docs.github.com/en/pages/quickstart

## 4. 以後要修改網站

最簡單：到 GitHub Repository 找到對應檔案，按鉛筆編輯、儲存 `Commit changes`。更新完成後 GitHub Pages 會重新發布。

如果後續常常改，建議安裝 Git 和 VS Code，將 Repository `git clone` 到自己電腦；但**第一版完全不需要先學會 Git 指令**。

## 5. 注意公開資料

GitHub Pages 是公開網站；不要上傳學校、實驗室或 TSRI / 晶圓廠合約限制公開的 PDK、技術文件、網表、設計細節或未經授權的成果。公開作品前先確認授權與學校規範。

---

設計特色：純靜態網站、深色硬體科技風、RWD 手機適配、作品分類篩選、可展開的專案細節、無虛構 PPA 數據、無外部圖庫依賴。字型若 Google Fonts 無法連線，會自動使用系統字型。
