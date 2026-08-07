const notes = [
  {
    title: "阿婷醫師的讀書筆記",
    category: "tools",
    accent: "teal",
    status: "文獻雷達",
    description:
      "每日整理老人醫學、骨質疏鬆、內分泌新陳代謝相關文獻，依興趣自動評分排序。",
    tags: ["每日文獻", "老人醫學", "骨質疏鬆", "內分泌"],
    publicUrl: "https://tsn4830-ui.github.io/drartin-reading-notes/",
    localUrl: "../reading-radar/site/index.html",
  },
  {
    title: "糖尿病患者骨質疏鬆照護共識",
    category: "endo",
    accent: "gold",
    status: "投影片網站",
    description:
      "2026 三學會共識圖解：糖尿病病人骨折風險、篩檢、診斷、治療與血糖藥選擇。",
    tags: ["糖尿病", "骨質疏鬆", "共識"],
    publicUrl: "https://tsn4830-ui.github.io/dm-bone-consensus-2026/",
    localUrl: "../dm-osteoporosis-slides/index.html",
  },
  {
    title: "GDM 管理照護臨床路徑",
    category: "endo",
    accent: "cranberry",
    status: "臨床路徑",
    description:
      "妊娠糖尿病從診斷轉介、孕期四站追蹤、生產評估到產後 OGTT 結案的互動式照護導航，附逐站核對、血糖目標與申報提示。",
    note: "附註：目前需以原建立者帳號登入瀏覽。",
    tags: ["妊娠糖尿病", "GDM", "臨床路徑", "健保申報"],
    publicUrl: "https://gdm-care-pathway.richtin.chatgpt.site/",
    localUrl: "",
  },
  {
    title: "高齡心衰竭照護最佳化",
    category: "cardio",
    accent: "blue",
    status: "指南筆記",
    description:
      "整理 AHA Scientific Statement 中高齡心衰竭照護的功能、共病、照護目標與藥物調整。",
    tags: ["心衰竭", "高齡醫學", "AHA"],
    publicUrl: "https://tsn4830-ui.github.io/heart-failure-older-adult/",
    localUrl: "../heart-failure-older-adult-site/index.html",
  },
  {
    title: "2026 ACC 抗血小板治療讀書筆記",
    category: "cardio",
    accent: "cranberry",
    status: "指南筆記",
    description:
      "ASCVD 抗血小板治療臨床情境、DAPT 期間、出血風險與長期策略整理。",
    tags: ["抗血小板", "ASCVD", "ACC", "DAPT"],
    publicUrl: "https://tsn4830-ui.github.io/antiplatelet-therapy-2026-notes/",
    localUrl: "../antiplatelet-therapy-2026-pages/index.html",
  },
  {
    title: "2026 CKM Syndrome Guideline",
    category: "cardio",
    accent: "teal",
    status: "指南投影片",
    description:
      "心血管、腎臟與代謝症候群指南的臨床摘要版本，方便快速抓重點與備課。",
    tags: ["CKM", "心腎代謝", "指南"],
    publicUrl: "https://tsn4830-ui.github.io/ckm-2026-guideline/",
    localUrl: "../ckm_2026_guideline_ppt/site/index.html",
  },
  {
    title: "CKM Compass 風險決策工具",
    category: "cardio",
    accent: "gold",
    status: "互動工具",
    description:
      "整合 2026 AHA/ACC CKM 指引與 PREVENT 風險計算器：CKM 分期、CAC 與生物標記風險重分類、分期別治療建議。",
    tags: ["CKM", "PREVENT", "風險計算", "心腎代謝"],
    publicUrl: "https://ckm-compass-2026.richtin.chatgpt.site",
    localUrl: "",
  },
  {
    title: "2026 內科小手冊",
    category: "guideline",
    accent: "blue",
    status: "臨床手冊",
    description:
      "整合抗生素、心衰竭、高血壓、血脂、抗血小板、電解質、內分泌急症等臨床速查內容。",
    tags: ["內科", "速查", "住院醫療"],
    publicUrl: "https://tsn4830-ui.github.io/2026-im-pocket/",
    localUrl: "../火星渦蟲-2026/site-repo/index.html",
  },
  {
    title: "內科疾病臨床指引索引",
    category: "guideline",
    accent: "teal",
    status: "指引索引",
    description:
      "依內科次專科與疾病分類，彙整 NEJM、Lancet、JAMA、BMJ、Diabetes Care、KDIGO、ATA 等臨床指引與免費全文。",
    tags: ["內科", "臨床指引", "期刊", "免費全文"],
    publicUrl: "https://tsn4830-ui.github.io/im-guideline-index/",
    localUrl: "",
  },
  {
    title: "個人讀書小站",
    category: "tools",
    accent: "sage",
    status: "索引工具",
    description:
      "用 DOI 或網址快速加入待讀文獻，適合當作平日蒐集文章的第一站。",
    tags: ["文獻管理", "待讀清單", "快速加入"],
    publicUrl: "https://tsn4830-ui.github.io/personal-reading-site/",
    localUrl: "../personal-reading-site/index.html",
  },
  {
    title: "疼痛評估工具",
    category: "tools",
    accent: "blue",
    status: "床邊工具",
    description:
      "PQRST 架構的疼痛評估：NRS 0–10 評分、處置後快速重評、自動算疼痛下降幅度與功能影響，可一鍵產生摘要。",
    tags: ["疼痛", "PQRST", "NRS", "床邊評估"],
    publicUrl: "https://pain-assessment-tool.richtin.chatgpt.site/",
    localUrl: "",
  },
  {
    title: "Williams 內分泌學 15e 讀書筆記",
    category: "endo",
    accent: "cranberry",
    status: "教科書筆記",
    description:
      "Williams Textbook of Endocrinology 第 15 版繁體中文讀書筆記，離線含圖單檔完整版，依章節整理內分泌重點。",
    tags: ["內分泌", "教科書", "Williams", "離線含圖", "本機限定"],
    privateId: "williams-endo-offline",
    privateNote: "此站不公開索引，開啟後需輸入密碼。",
    privateUrl: "https://williams.drtsengshihting.com/",
    publicUrl: "",
    localUrl: "../../Dropbox/William2025/Williams內分泌學15e_離線_含圖.html",
  },
  {
    title: "心血管代謝多重長期病況",
    category: "cardio",
    accent: "sage",
    status: "報告投影片",
    description:
      "根據 The Lancet 2026 cardiometabolic MLTC 系列整理的繁體中文醫學報告投影片。",
    tags: ["心血管代謝", "MLTC", "The Lancet"],
    publicUrl: "https://tsn4830-ui.github.io/cardiometabolic-mltc-lancet-2026/",
    localUrl: "../cardiometabolic-mltc-report/site/index.html",
  },
  {
    title: "糖尿病照護小幫手",
    category: "edu",
    accent: "teal",
    status: "病人衛教",
    description:
      "給糖尿病病友與家屬的照護入口：飲食、用藥、血糖監測與併發症預防的日常提醒。",
    tags: ["糖尿病", "病人衛教", "自我照護"],
    publicUrl: "https://dm.drtsengshihting.com/",
    localUrl: "",
  },
  {
    title: "2026 CGM 衛教重點整理",
    category: "edu",
    accent: "blue",
    status: "病人衛教",
    description:
      "連續血糖監測（CGM）的使用重點整理：數值怎麼看、目標範圍、常見狀況與注意事項。",
    tags: ["CGM", "連續血糖監測", "糖尿病", "病人衛教"],
    publicUrl: "https://cgm.drtsengshihting.com/",
    localUrl: "",
  },
  {
    title: "守護「腎」利人生",
    category: "edu",
    accent: "sage",
    status: "病人衛教",
    description:
      "糖尿病腎臟病變衛教站：腎功能指標怎麼看、飲食與用藥注意事項、延緩惡化的做法。",
    tags: ["糖尿病腎病變", "腎臟", "病人衛教"],
    publicUrl: "https://tsn4830-ui.github.io/diabetic-kidney-disease-education-site/",
    localUrl: "",
  },
  {
    title: "阿婷醫師的控糖小撇步",
    category: "edu",
    accent: "gold",
    status: "衛教音檔",
    description:
      "以短音檔形式講糖尿病日常控糖重點的收聽目錄，適合傳給病友在通勤或做家事時聽。",
    tags: ["糖尿病", "衛教音檔", "LINE"],
    publicUrl: "https://tsn4830-ui.github.io/dm-line-edu-media/",
    localUrl: "",
  },
  {
    title: "減重實證課",
    category: "edu",
    accent: "cranberry",
    status: "實證課程",
    description:
      "給民眾的公開減重實證課：每一句建議都標明證據強度，涵蓋飲食、運動、行為與藥物。",
    tags: ["減重", "肥胖", "實證", "民眾"],
    publicUrl: "https://weight.drtsengshihting.com/",
    localUrl: "",
  },
  {
    title: "內科 Review Hub",
    category: "tools",
    accent: "blue",
    status: "文獻追蹤",
    description:
      "內科各次專科的回顧文獻追蹤站，每週自動從 PubMed 更新新的綜論與指引。",
    tags: ["內科", "文獻追蹤", "PubMed", "每週更新"],
    publicUrl: "https://imreview.drtsengshihting.com/",
    localUrl: "",
  },
  {
    title: "病理學題庫總覽",
    category: "tools",
    accent: "cranberry",
    status: "教學題庫",
    description:
      "解剖生理病理學 III 的病理學題庫，依單元分類可自我測驗。",
    tags: ["病理學", "題庫", "教學"],
    publicUrl: "https://tsn4830-ui.github.io/pathology-quiz/",
    localUrl: "",
  },
  {
    title: "衡日 BalanceDays",
    category: "edu",
    accent: "teal",
    status: "追蹤工具",
    description:
      "維持健康體態與減重的日常小幫手：記錄療程、飲食、喝水、症狀、體重、運動、睡眠與心情，跨裝置同步並可匯出完整健康紀錄。",
    note: "附註：需登入後使用。",
    tags: ["減重", "體重管理", "健康體態", "自我追蹤"],
    publicUrl: "https://balancedose-glp1-tw.richtin.chatgpt.site/",
    localUrl: "",
  },
  {
    title: "體重與代謝健康評估",
    category: "tools",
    accent: "sage",
    status: "門診工具",
    description:
      "體重與代謝評估門診用的線上評估工具，協助整理病史、代謝風險與後續處置方向。",
    tags: ["體重", "代謝評估", "門診工具", "私訊索取"],
    privateId: "metabolic-assess-tool",
    privateNote: "門診內部使用，未公開分享；有需要的朋友請私訊阿婷醫師。",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "內分泌私密教材站",
    category: "endoteach",
    accent: "blue",
    status: "科內教材",
    description:
      "科內教學用的內分泌教材站：題庫閃卡、課程大綱、整合案例、文字投影片，附個人筆記雲端同步與內分泌指引雷達。",
    note: "附註：純教學整理，不含原書 PDF 與圖表。",
    tags: ["內分泌", "教材", "題庫", "科內教學"],
    privateNote: "此站不公開索引，開啟後需以科內帳號密碼登入。",
    privateUrl: "https://endo-private-site.pages.dev/",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "Principles of Endocrinology 讀書筆記",
    category: "endoteach",
    accent: "gold",
    status: "教科書筆記",
    description:
      "Principles of Endocrinology 的個人讀書筆記投影片站。",
    note: "附註：不含原書圖表，須自行參照；教科書 PDF 可上 ClinicalKey 下載。",
    tags: ["內分泌", "教科書", "投影片"],
    privateNote: "此站不公開索引，開啟後需輸入帳號密碼。",
    privateUrl: "https://principles-endocrinology-ating-notes.pages.dev/",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "新陳代謝科專科訓練教學計畫",
    category: "endoteach",
    accent: "teal",
    status: "訓練計畫",
    description:
      "兩年制專科訓練的能力導向（CBME）教學計畫：訓練手冊、六種評量表單、核心技能對照表與學習護照追蹤。",
    note: "附註：根據教科書整理，純文字版本，沒有圖片、沒有影片。",
    tags: ["內分泌", "專科訓練", "CBME", "科內教學"],
    privateNote: "此站僅供科內教學使用，未對外公開，開啟後需輸入密碼。",
    privateUrl: "https://endo.drtsengshihting.com/",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "內分泌代謝實證教室",
    category: "endoteach",
    accent: "gold",
    status: "實證教材",
    description:
      "給內科／新陳代謝科住院醫師的 14 章內分泌實證教材：45 支已驗證影片、79 篇附 DOI 文獻，每章含臨床轉譯、常見誤區與反證，附學習紀錄同步。",
    note: "附註：根據實證醫學指引與文獻整理，並搭配網路影片。",
    tags: ["內分泌", "住院醫師", "實證教材"],
    privateNote: "此站不公開索引，開啟後需輸入密碼。",
    privateUrl: "https://endoclass.drtsengshihting.com/",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "iPhone 光影學堂",
    category: "life",
    accent: "cranberry",
    status: "自學課程",
    description:
      "iPhone 手機攝影自學站：從相機設定、用光構圖、動態拍攝到建立影像風格四章十堂課，精選教學影片並附每堂的拍攝練習任務。",
    tags: ["攝影", "iPhone", "自學課程"],
    publicUrl: "https://iphone-photo-academy.richtin.chatgpt.site/",
    localUrl: "",
  },
  {
    title: "阿婷醫師的訓練科學筆記",
    category: "training",
    accent: "sage",
    status: "實證學習站",
    description:
      "訓練科學實證學習站：14 章主題、32 支精選影片、43 篇文獻，附學習紀錄與文獻雷達。非營利、不公開索引。",
    tags: ["訓練科學", "肌力訓練", "實證", "私訊索取"],
    privateId: "training-science-notes",
    privateNote: "網站不公開連結，有需要的朋友請私訊阿婷醫師索取。",
    publicUrl: "",
    localUrl: "",
  },
  {
    title: "內科專科護理師考古題",
    category: "tools",
    accent: "cranberry",
    status: "考古題練習",
    description:
      "衛福部公告的 110–114 年度專科護理師甄審筆試試題：專科護理通論與進階專科護理（內科）兩科共 800 題，全題附解析（判斷關鍵、逐選項對錯、陷阱、依據來源），另有模擬測驗、錯題本、每題筆記與跨裝置同步。",
    tags: ["專科護理師", "考古題", "內科", "解析", "模擬測驗", "筆記同步"],
    note: "附註：題目與標準答案逐字取自衛福部官方 PDF；解析由 AI 依實證來源整理、引用逐條驗證過，尚未逐題人工審閱。",
    publicUrl: "https://np.drtsengshihting.com/",
    localUrl: "../np-exam-prep/index.html",
  },
];

notes.sort((a, b) => Number(Boolean(b.publicUrl)) - Number(Boolean(a.publicUrl)));

const categoryLabels = {
  guideline: "大內科",
  endo: "內分泌代謝",
  endoteach: "內分泌教學",
  cardio: "心腎代謝",
  edu: "病人衛教",
  tools: "工具與雷達",
  methods: "方法學",
  training: "運動科學",
  life: "生活與興趣",
};

const cards = document.querySelector("#cards");
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const resultSummary = document.querySelector("#resultSummary");
const filters = Array.from(document.querySelectorAll(".filter"));
const totalCount = document.querySelector("#totalCount");
const topicCount = document.querySelector("#topicCount");
const isLocalFile = window.location.protocol === "file:";
let activeFilter = "all";

function privateLinkKey(note) {
  return note.privateId ? `privateLink:${note.privateId}` : null;
}

function getPrivateLink(note) {
  const key = privateLinkKey(note);
  if (!key) return "";
  try {
    return localStorage.getItem(key) || "";
  } catch (err) {
    return "";
  }
}

function renderActions(note) {
  if (note.publicUrl) {
    return `
      <div class="links public-links">
        <a class="link" href="${note.publicUrl}" target="_blank" rel="noopener">開啟網站</a>
      </div>
    `;
  }

  if (note.localUrl && isLocalFile) {
    return `
      <div class="private-note local-private-note">
        <strong>私人筆記</strong>
        <span>這份內容只在你的這台電腦可開啟。</span>
        <a href="${note.localUrl}">本機開啟</a>
      </div>
    `;
  }

  if (note.privateUrl) {
    return `
      <div class="private-note device-private-note">
        <strong>私人網站・需帳密</strong>
        <span>${note.privateNote || "這份筆記已放在 Cloudflare 私密站，開啟後請輸入私人帳號密碼。"}</span>
        <a href="${note.privateUrl}" target="_blank" rel="noopener">開啟私人網站</a>
      </div>
    `;
  }

  const deviceLink = getPrivateLink(note);
  if (deviceLink) {
    return `
      <div class="private-note device-private-note">
        <strong>本裝置私人連結</strong>
        <span>這條連結只存在你這台裝置的瀏覽器，別人看不到。</span>
        <a href="${deviceLink}" target="_blank" rel="noopener">開啟</a>
        <div class="device-link-actions">
          <button type="button" class="link-manage" data-action="set-private" data-id="${note.privateId}">更新連結</button>
          <button type="button" class="link-manage" data-action="clear-private" data-id="${note.privateId}">清除</button>
        </div>
      </div>
    `;
  }

  if (note.privateId) {
    return `
      <div class="private-note">
        <strong>私人筆記・未公開分享</strong>
        <span>${note.privateNote || "可在你自己的裝置上綁定一條只有本機看得到的連結。"}</span>
        <button type="button" class="link-manage" data-action="set-private" data-id="${note.privateId}">在本裝置設定私人連結</button>
      </div>
    `;
  }

  return `
    <div class="private-note">
      <strong>私人筆記・未公開分享</strong>
      <span>${note.privateNote || "這份內容只存在作者本機，分享此索引時其他人無法開啟。"}</span>
    </div>
  `;
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function noteMatches(note, query) {
  if (!query) return true;
  const haystack = [
    note.title,
    note.description,
    note.note || "",
    note.status,
    categoryLabels[note.category],
    ...note.tags,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function render() {
  const query = normalize(searchInput.value);
  const visible = notes.filter((note) => {
    const categoryMatch = activeFilter === "all" || note.category === activeFilter;
    return categoryMatch && noteMatches(note, query);
  });

  cards.innerHTML = "";

  if (visible.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "沒有找到符合條件的筆記。換個關鍵字或分類試試。";
    cards.append(empty);
  }

  visible.forEach((note) => {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.accent = note.accent;
    article.innerHTML = `
      <div class="card-header">
        <h3>${note.title}</h3>
        <span class="status">${note.status}</span>
      </div>
      <p>${note.description}</p>
      ${note.note ? `<p class="card-note">${note.note}</p>` : ""}
      <div class="tags">
        <span class="tag">${categoryLabels[note.category]}</span>
        ${note.tags
          .map((tag) => `<span class="tag${["本機限定", "私訊索取"].includes(tag) ? " tag-private" : ""}">${tag}</span>`)
          .join("")}
      </div>
      ${renderActions(note)}
    `;
    cards.append(article);
  });

  const filterLabel = activeFilter === "all" ? "全部分類" : categoryLabels[activeFilter];
  resultSummary.textContent = `${filterLabel}中顯示 ${visible.length} / ${notes.length} 個網站。`;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((filter) => filter.classList.toggle("active", filter === button));
    render();
  });
});

cards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  if (!id) return;
  const key = `privateLink:${id}`;

  if (button.dataset.action === "set-private") {
    const current = (() => {
      try {
        return localStorage.getItem(key) || "";
      } catch (err) {
        return "";
      }
    })();
    const input = window.prompt(
      "貼上只給這台裝置用的連結（例如你的 Dropbox 分享連結）。留空按確定則清除。",
      current,
    );
    if (input === null) return;
    const value = input.trim();
    try {
      if (value) {
        localStorage.setItem(key, value);
      } else {
        localStorage.removeItem(key);
      }
    } catch (err) {
      window.alert("這個瀏覽器不允許儲存，可能是無痕模式。");
    }
    render();
  }

  if (button.dataset.action === "clear-private") {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      /* ignore */
    }
    render();
  }
});

searchInput.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  render();
});

totalCount.textContent = notes.length;
topicCount.textContent = new Set(notes.map((note) => note.category)).size;
render();
