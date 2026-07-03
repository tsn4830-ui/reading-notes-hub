# 阿婷醫師的讀書筆記總覽

這是一個純靜態入口網站，用來整合已完成的讀書筆記、指南摘要、投影片網站與文獻雷達。

公開網址：

https://tsn4830-ui.github.io/reading-notes-hub/

## 使用方式

直接開啟：

```sh
open index.html
```

或用本機伺服器：

```sh
python3 -m http.server 4173
```

## 新增筆記

在 `app.js` 的 `notes` 陣列新增一筆資料即可。建議至少填：

- `title`
- `category`
- `description`
- `tags`
- `publicUrl`
- `localUrl`

如果還沒有公開網址，`publicUrl` 可以先留空，首頁會顯示「待發布」。
