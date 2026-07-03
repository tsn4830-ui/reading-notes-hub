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
    title: "個人讀書小站",
    category: "tools",
    accent: "sage",
    status: "索引工具",
    description:
      "用 DOI 或網址快速加入待讀文獻，適合當作平日蒐集文章的第一站。",
    tags: ["文獻管理", "待讀清單", "快速加入", "本機限定"],
    publicUrl: "",
    localUrl: "../personal-reading-site/index.html",
  },
  {
    title: "Williams 內分泌學 15e 讀書筆記",
    category: "endo",
    accent: "cranberry",
    status: "教科書筆記",
    description:
      "Williams Textbook of Endocrinology 第 15 版繁體中文讀書筆記，離線含圖單檔完整版，依章節整理內分泌重點。",
    tags: ["內分泌", "教科書", "Williams", "離線含圖", "本機限定"],
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
    tags: ["心血管代謝", "MLTC", "The Lancet", "本機限定"],
    publicUrl: "",
    localUrl: "../cardiometabolic-mltc-report/site/index.html",
  },
];

const categoryLabels = {
  guideline: "指南筆記",
  endo: "內分泌代謝",
  cardio: "心腎代謝",
  tools: "工具與雷達",
  methods: "方法學",
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

  return `
    <div class="private-note">
      <strong>私人筆記・未公開分享</strong>
      <span>這份內容只存在作者本機，分享此索引時其他人無法開啟。</span>
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
      <div class="tags">
        <span class="tag">${categoryLabels[note.category]}</span>
        ${note.tags
          .map((tag) => `<span class="tag${tag === "本機限定" ? " tag-private" : ""}">${tag}</span>`)
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

searchInput.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  render();
});

totalCount.textContent = notes.length;
topicCount.textContent = new Set(notes.map((note) => note.category)).size;
render();
