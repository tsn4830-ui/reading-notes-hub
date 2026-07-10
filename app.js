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
    title: "Williams 內分泌學 15e 讀書筆記",
    category: "endo",
    accent: "cranberry",
    status: "教科書筆記",
    description:
      "Williams Textbook of Endocrinology 第 15 版繁體中文讀書筆記，離線含圖單檔完整版，依章節整理內分泌重點。",
    tags: ["內分泌", "教科書", "Williams", "離線含圖", "本機限定"],
    privateId: "williams-endo-offline",
    privateUrl: "https://private-reading-notes-site.pages.dev/sites/williams-endo/index.html",
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
    privateId: "cardiometabolic-mltc",
    privateUrl: "https://private-reading-notes-site.pages.dev/sites/cardiometabolic-mltc/index.html",
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
        <span>這份筆記已放在 Cloudflare 私密站，開啟後請輸入私人帳號密碼。</span>
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
        <span>可在你自己的裝置上綁定一條只有本機看得到的連結。</span>
        <button type="button" class="link-manage" data-action="set-private" data-id="${note.privateId}">在本裝置設定私人連結</button>
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
