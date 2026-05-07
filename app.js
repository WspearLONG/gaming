const guides = [
  {
    title: "开荒前 3 小时路线",
    type: "开荒",
    tone: "blue",
    summary: "从出生点到第一个主线 Boss 的路线表，标出必须拿的地图碎片、锻造材料和安全补给点。",
    meta: ["新手推荐", "等级 1-22", "8 分钟", "V1.4.2"],
    updated: "2026-05-07",
    prep: ["购买 3 瓶火抗药", "保留 1200 金币升级主武器", "优先点亮灰岸营地传送点"],
    steps: ["出生点向北拿地图碎片，不要先打巡逻精英。", "清理东侧矿洞，拿第一枚符文槽和 6 个锻造石。", "回营地强化主武器到 +3，再进入雾林外圈。"],
    related: ["灰岸营地", "雾林古道", "灰烬骑士"],
  },
  {
    title: "灰烬骑士二阶段拆招",
    type: "Boss",
    tone: "red",
    summary: "逐招拆解突刺、落雷、抓取和火浪，附带近战、法术、盾反三套稳定处理方式。",
    meta: ["主线 Boss", "近战适用", "6 分钟", "V1.4.2"],
    updated: "2026-05-06",
    prep: ["冰脂至少 2 个", "耐力保持 30% 以上", "二阶段不要贪第三刀"],
    steps: ["一阶段贴左腿，横扫后只打两刀。", "二阶段落雷会追踪翻滚终点，看到抬剑先停半拍再滚。", "火浪结束后有稳定重击窗口，盾反流可以接处决。"],
    related: ["赤纹长刃", "冰脂", "主线钥印"],
  },
  {
    title: "中期武器强度榜",
    type: "装备",
    tone: "gold",
    summary: "按获取难度、强化成本、削韧表现和流派兼容度综合排序，不只比较面板数值。",
    meta: ["装备榜单", "等级 45-80", "10 分钟", "V1.4.1"],
    updated: "2026-05-03",
    prep: ["先确定主属性方向", "不要同时强化三把以上武器", "保留稀有锻造石给主武器"],
    steps: ["45 级前优先选低需求武器，避免属性点被锁死。", "进入王城前把主武器强化到 +7。", "Boss 攻坚优先看削韧和战技，不只看攻击力。"],
    related: ["赤纹长刃", "霜铸盾枪", "星灯短杖"],
  },
  {
    title: "雾林隐藏宝箱清单",
    type: "收集",
    tone: "green",
    summary: "按传送点拆分宝箱、魂石、隐藏门和精英怪掉落，支持一轮补完。",
    meta: ["地图收集", "雾林区域", "12 分钟", "V1.4.2"],
    updated: "2026-05-05",
    prep: ["携带照明道具", "装备发现率护符", "先点亮北线传送点"],
    steps: ["从北线传送点出发，先拿树桥下方宝箱。", "沿河道向东走，击破假墙进入隐藏墓室。", "最后处理南侧精英，避免来回跑图。"],
    related: ["雾林地图碎片", "古木徽记", "树心祭司"],
  },
  {
    title: "月影支线不漏 NPC 路线",
    type: "任务",
    tone: "purple",
    summary: "整理每个 NPC 的移动节点、对话触发条件和会导致任务失败的主线推进点。",
    meta: ["支线任务", "结局相关", "14 分钟", "V1.4.0"],
    updated: "2026-04-28",
    prep: ["王城 Boss 前完成第二次对话", "不要提前交出月影信物", "保留一份银露花"],
    steps: ["灰岸营地第一次对话后，去雾林北线找 NPC。", "击败树心祭司后返回营地触发搬迁。", "进入王城前完成钟楼对话，否则结局分支关闭。"],
    related: ["月影信物", "银露花", "隐藏结局"],
  },
  {
    title: "裂隙王城推进表",
    type: "开荒",
    tone: "red",
    summary: "把城门、内庭、钟楼和王座区拆成四段，每段列出最低准备线和可跳过战斗。",
    meta: ["主线地图", "等级 55+", "11 分钟", "V1.4.2"],
    updated: "2026-05-07",
    prep: ["雷抗 22 以上", "主武器 +7", "携带 2 个解控药"],
    steps: ["城门段先拉开双弩手，避免和盾兵同时交战。", "内庭从右侧屋顶绕行，可跳过两只精英。", "钟楼双卫前补满资源，优先分离弩卫和盾卫。"],
    related: ["钟楼双卫", "王城通行印", "霜铸盾枪"],
  },
];

const bosses = [
  {
    name: "灰烬骑士",
    level: "推荐等级 28-35",
    weakness: "冰属性、背刺硬直、盾反",
    danger: "二阶段落雷会追踪玩家上一次翻滚终点，连续翻滚容易被火浪补刀。",
    answer: "保留一次耐力，不连续翻滚。落雷后向左后方贴身，可稳定打两刀或接一次重击。",
    reward: "赤纹长刃、灰烬誓约、主线钥印",
  },
  {
    name: "树心祭司",
    level: "推荐等级 36-42",
    weakness: "火属性、投掷物打断",
    danger: "召唤根须后会封锁外圈，拖太久会叠加毒雾，治疗窗口会被压缩。",
    answer: "优先清根须核心，读条时用投掷物打断，保持中距离绕右手侧。",
    reward: "古木徽记、翠叶护符、雾林地图碎片",
  },
  {
    name: "钟楼双卫",
    level: "推荐等级 58-66",
    weakness: "雷属性、分离站位",
    danger: "两名守卫同时进入狂暴时，盾击和弩箭会形成连续控制。",
    answer: "先压低弩卫血量但不击杀，引盾卫到楼梯转角处理，避免双狂暴。",
    reward: "王城通行印、霜铸盾枪、钟楼升降机钥匙",
  },
];

let currentFilter = "all";
let searchTerm = "";

const guideGrid = document.querySelector("#guideGrid");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector(".search");
const filterButtons = document.querySelectorAll(".filter");
const bossList = document.querySelector("#bossList");
const bossPanel = document.querySelector("#bossPanel");
const themeToggle = document.querySelector("[data-theme-toggle]");
const guideModal = document.querySelector("#guideModal");
const guideDetail = document.querySelector("#guideDetail");

function renderGuides() {
  const term = searchTerm.trim().toLowerCase();
  const filtered = guides.filter((guide) => {
    const matchesFilter = currentFilter === "all" || guide.type === currentFilter;
    const text = `${guide.title} ${guide.type} ${guide.summary} ${guide.meta.join(" ")}`.toLowerCase();
    return matchesFilter && (!term || text.includes(term));
  });

  if (!filtered.length) {
    guideGrid.innerHTML = '<p class="empty">没有找到匹配的攻略，换个关键词或切换分类试试。</p>';
    return;
  }

  guideGrid.innerHTML = filtered
    .map(
      (guide) => `
        <article class="guide-card">
          <div class="card-top">
            <span class="tag ${guide.tone}">${guide.type}</span>
            <time datetime="${guide.updated}">${guide.updated}</time>
          </div>
          <h3>${guide.title}</h3>
          <p>${guide.summary}</p>
          <div class="meta">
            ${guide.meta.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <button type="button" class="read-button" data-guide="${guides.indexOf(guide)}">查看攻略</button>
        </article>
      `,
    )
    .join("");
}

function openGuide(index) {
  const guide = guides[index];
  if (!guide) return;

  guideDetail.innerHTML = `
    <div class="modal-kicker">
      <span class="tag ${guide.tone}">${guide.type}</span>
      <time datetime="${guide.updated}">更新：${guide.updated}</time>
    </div>
    <h2 id="modalTitle">${guide.title}</h2>
    <p class="modal-summary">${guide.summary}</p>
    <div class="modal-section">
      <h3>进入前准备</h3>
      <ul>${guide.prep.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h3>攻略步骤</h3>
      <ol>${guide.steps.map((item) => `<li>${item}</li>`).join("")}</ol>
    </div>
    <div class="modal-section">
      <h3>相关条目</h3>
      <div class="related-list">${guide.related.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
  `;

  guideModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeGuide() {
  guideModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderBossTabs(activeIndex = 0) {
  bossList.innerHTML = bosses
    .map(
      (boss, index) => `
        <button class="boss-tab ${index === activeIndex ? "active" : ""}" type="button" data-boss="${index}" role="tab" aria-selected="${index === activeIndex}">
          <strong>${boss.name}</strong>
          <span>${boss.level}</span>
        </button>
      `,
    )
    .join("");
  renderBossPanel(activeIndex);
}

function renderBossPanel(index) {
  const boss = bosses[index];
  bossPanel.innerHTML = `
    <span class="tag red">Boss 速查</span>
    <h3>${boss.name}</h3>
    <dl>
      <dt>建议等级</dt>
      <dd>${boss.level}</dd>
      <dt>弱点</dt>
      <dd>${boss.weakness}</dd>
      <dt>高危机制</dt>
      <dd>${boss.danger}</dd>
      <dt>推荐应对</dt>
      <dd>${boss.answer}</dd>
      <dt>关键掉落</dt>
      <dd>${boss.reward}</dd>
    </dl>
  `;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderGuides();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  renderGuides();
  document.querySelector("#guides").scrollIntoView({ block: "start" });
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  renderGuides();
});

bossList.addEventListener("click", (event) => {
  const tab = event.target.closest(".boss-tab");
  if (!tab) return;
  const index = Number(tab.dataset.boss);
  bossList.querySelectorAll(".boss-tab").forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  renderBossPanel(index);
});

guideGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-guide]");
  if (!button) return;
  openGuide(Number(button.dataset.guide));
});

guideModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-guide]")) {
    closeGuide();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !guideModal.hidden) {
    closeGuide();
  }
});

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("guide-theme", next);
});

const savedTheme = localStorage.getItem("guide-theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

renderGuides();
renderBossTabs();
