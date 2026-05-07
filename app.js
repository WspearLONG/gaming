const guides = [
  {
    title: "开荒前 3 小时路线",
    type: "开荒",
    tone: "blue",
    image: "路线",
    summary: "从出生点到第一个主线 Boss 的路线表，标出必须拿的地图碎片、锻造材料和安全补给点。",
    meta: ["等级 1-22", "8 分钟", "V1.4.2"],
    updated: "2026-05-07",
    prep: ["购买 3 瓶火抗药", "主武器强化到 +3", "点亮灰岸营地传送点"],
    steps: ["出生点向北拿地图碎片，不要先打巡逻精英。", "清理东侧矿洞，拿第一枚符文槽和 6 个锻造石。", "回营地强化主武器，再进入雾林外圈。"],
    related: ["灰岸营地", "雾林古道", "灰烬骑士"],
  },
  {
    title: "灰烬骑士二阶段拆招",
    type: "Boss",
    tone: "red",
    image: "Boss",
    summary: "逐招拆解突刺、落雷、抓取和火浪，附带近战、法术、盾反三套稳定处理方式。",
    meta: ["主线 Boss", "6 分钟", "V1.4.2"],
    updated: "2026-05-06",
    prep: ["冰脂至少 2 个", "耐力保持 30% 以上", "二阶段不要贪第三刀"],
    steps: ["一阶段贴左腿，横扫后只打两刀。", "二阶段看到抬剑先停半拍再滚。", "火浪结束后有稳定重击窗口，盾反流可以接处决。"],
    related: ["赤纹长刃", "冰脂", "主线钥印"],
  },
  {
    title: "中期武器强度榜",
    type: "装备",
    tone: "gold",
    image: "装备",
    summary: "按获取难度、强化成本、削韧表现和流派兼容度综合排序，不只比较面板数值。",
    meta: ["等级 45-80", "10 分钟", "V1.4.1"],
    updated: "2026-05-03",
    prep: ["先确定主属性方向", "不要同时强化三把以上武器", "保留稀有锻造石给主武器"],
    steps: ["45 级前优先选低需求武器。", "进入王城前把主武器强化到 +7。", "Boss 攻坚优先看削韧和战技。"],
    related: ["赤纹长刃", "霜铸盾枪", "星灯短杖"],
  },
  {
    title: "雾林隐藏宝箱清单",
    type: "收集",
    tone: "green",
    image: "收集",
    summary: "按传送点拆分宝箱、魂石、隐藏门和精英怪掉落，支持一轮补完。",
    meta: ["雾林区域", "12 分钟", "V1.4.2"],
    updated: "2026-05-05",
    prep: ["携带照明道具", "装备发现率护符", "先点亮北线传送点"],
    steps: ["从北线传送点出发，先拿树桥下方宝箱。", "沿河道向东走，击破假墙进入隐藏墓室。", "最后处理南侧精英，避免来回跑图。"],
    related: ["雾林地图碎片", "古木徽记", "树心祭司"],
  },
  {
    title: "月影支线不漏 NPC 路线",
    type: "任务",
    tone: "purple",
    image: "任务",
    summary: "整理每个 NPC 的移动节点、对话触发条件和会导致任务失败的主线推进点。",
    meta: ["结局相关", "14 分钟", "V1.4.0"],
    updated: "2026-04-28",
    prep: ["王城 Boss 前完成第二次对话", "不要提前交出月影信物", "保留一份银露花"],
    steps: ["灰岸营地第一次对话后，去雾林北线找 NPC。", "击败树心祭司后返回营地触发搬迁。", "进入王城前完成钟楼对话，否则结局分支关闭。"],
    related: ["月影信物", "银露花", "隐藏结局"],
  },
  {
    title: "裂隙王城推进表",
    type: "开荒",
    tone: "red",
    image: "王城",
    summary: "把城门、内庭、钟楼和王座区拆成四段，每段列出最低准备线和可跳过战斗。",
    meta: ["等级 55+", "11 分钟", "V1.4.2"],
    updated: "2026-05-07",
    prep: ["雷抗 22 以上", "主武器 +7", "携带 2 个解控药"],
    steps: ["城门段先拉开双弩手。", "内庭从右侧屋顶绕行，可跳过两只精英。", "钟楼双卫前补满资源，优先分离弩卫和盾卫。"],
    related: ["钟楼双卫", "王城通行印", "霜铸盾枪"],
  },
];

const regions = [
  { name: "灰岸营地", level: "1-22", loot: "符文槽、锻造石、火抗药", goal: "解锁锻造台，建立开荒补给点。" },
  { name: "雾林古道", level: "23-42", loot: "地图碎片、古木徽记、隐藏宝箱", goal: "拿北线传送点，处理树心祭司。" },
  { name: "裂隙王城", level: "55-70", loot: "王城通行印、霜铸盾枪", goal: "拆分城门、内庭、钟楼三段推进。" },
  { name: "黑潮港", level: "70+", loot: "深潮护符、暗银矿、船坞钥匙", goal: "准备毒抗，优先清除远程炮台。" },
];

const bosses = [
  { name: "灰烬骑士", level: "28-35", weakness: "冰属性、背刺硬直、盾反", danger: "落雷追踪翻滚终点，连续翻滚容易被火浪补刀。", answer: "落雷后向左后方贴身，可稳定打两刀或接重击。", reward: "赤纹长刃、灰烬誓约、主线钥印" },
  { name: "树心祭司", level: "36-42", weakness: "火属性、投掷物打断", danger: "根须封锁外圈，毒雾会压缩治疗窗口。", answer: "优先清根须核心，读条时用投掷物打断。", reward: "古木徽记、翠叶护符、雾林地图碎片" },
  { name: "钟楼双卫", level: "58-66", weakness: "雷属性、分离站位", danger: "双狂暴会形成盾击和弩箭的连续控制。", answer: "先压低弩卫但不击杀，引盾卫到楼梯转角处理。", reward: "王城通行印、霜铸盾枪、升降机钥匙" },
];

const gear = [
  { name: "赤纹长刃", role: "处决爆发", atk: 92, safe: 54, cost: 68, tag: "Boss 攻坚" },
  { name: "霜铸盾枪", role: "稳健反击", atk: 74, safe: 91, cost: 58, tag: "新手推荐" },
  { name: "星灯短杖", role: "探索法术", atk: 68, safe: 73, cost: 44, tag: "收集补图" },
];

const checklistItems = ["点亮灰岸营地", "拿第一枚符文槽", "主武器强化到 +3", "击败灰烬骑士", "拿雾林地图碎片", "完成月影第二次对话", "进入裂隙王城", "击败钟楼双卫"];

let currentFilter = "all";
let searchTerm = "";

const guideGrid = document.querySelector("#guideGrid");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector(".search");
const filterButtons = document.querySelectorAll(".filter");
const mapDetail = document.querySelector("#mapDetail");
const mapPins = document.querySelectorAll(".map-pin");
const bossList = document.querySelector("#bossList");
const bossPanel = document.querySelector("#bossPanel");
const gearGrid = document.querySelector("#gearGrid");
const checklist = document.querySelector("#checklist");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const themeToggle = document.querySelector("[data-theme-toggle]");
const guideModal = document.querySelector("#guideModal");
const guideDetail = document.querySelector("#guideDetail");

function renderGuides() {
  const term = searchTerm.trim().toLowerCase();
  const filtered = guides.filter((guide) => {
    const matchesFilter = currentFilter === "all" || guide.type === currentFilter;
    const text = `${guide.title} ${guide.type} ${guide.summary} ${guide.meta.join(" ")} ${guide.related.join(" ")}`.toLowerCase();
    return matchesFilter && (!term || text.includes(term));
  });

  if (!filtered.length) {
    guideGrid.innerHTML = '<p class="empty">没有找到匹配的攻略，换个关键词或切换分类试试。</p>';
    return;
  }

  guideGrid.innerHTML = filtered
    .map((guide) => {
      const index = guides.indexOf(guide);
      return `
        <article class="guide-card">
          <div class="guide-thumb ${guide.tone}"><span>${guide.image}</span></div>
          <div class="guide-body">
            <div class="card-top">
              <span class="tag ${guide.tone}">${guide.type}</span>
              <time datetime="${guide.updated}">${guide.updated}</time>
            </div>
            <h3>${guide.title}</h3>
            <p>${guide.summary}</p>
            <div class="meta">${guide.meta.map((item) => `<span>${item}</span>`).join("")}</div>
            <button type="button" class="read-button" data-guide="${index}">查看完整攻略</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMap(index = 0) {
  const region = regions[index];
  mapDetail.innerHTML = `
    <span class="tag blue">${region.name}</span>
    <dl>
      <dt>推荐等级</dt><dd>${region.level}</dd>
      <dt>关键掉落</dt><dd>${region.loot}</dd>
      <dt>首要目标</dt><dd>${region.goal}</dd>
    </dl>
  `;
}

function renderBossTabs(activeIndex = 0) {
  bossList.innerHTML = bosses
    .map((boss, index) => `
      <button class="boss-tab ${index === activeIndex ? "active" : ""}" type="button" data-boss="${index}">
        <strong>${boss.name}</strong>
        <span>推荐等级 ${boss.level}</span>
      </button>
    `)
    .join("");
  renderBossPanel(activeIndex);
}

function renderBossPanel(index) {
  const boss = bosses[index];
  bossPanel.innerHTML = `
    <span class="tag red">Boss 速查</span>
    <h3>${boss.name}</h3>
    <dl>
      <dt>建议等级</dt><dd>${boss.level}</dd>
      <dt>弱点</dt><dd>${boss.weakness}</dd>
      <dt>高危机制</dt><dd>${boss.danger}</dd>
      <dt>推荐应对</dt><dd>${boss.answer}</dd>
      <dt>关键掉落</dt><dd>${boss.reward}</dd>
    </dl>
  `;
}

function renderGear() {
  gearGrid.innerHTML = gear
    .map((item, index) => `
      <button class="gear-card ${index === 1 ? "selected" : ""}" type="button">
        <span class="tag gold">${item.tag}</span>
        <h3>${item.name}</h3>
        <p>${item.role}</p>
        ${meter("输出", item.atk)}
        ${meter("容错", item.safe)}
        ${meter("成本", item.cost)}
      </button>
    `)
    .join("");
}

function meter(label, value) {
  return `<div class="meter"><span>${label}</span><b>${value}</b><i style="width:${value}%"></i></div>`;
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem("guide-progress") || "[]");
  checklist.innerHTML = checklistItems
    .map((item, index) => `
      <label class="check-row">
        <input type="checkbox" data-check="${index}" ${saved.includes(index) ? "checked" : ""} />
        <span>${item}</span>
      </label>
    `)
    .join("");
  updateProgress();
}

function updateProgress() {
  const checked = [...checklist.querySelectorAll("input:checked")].map((input) => Number(input.dataset.check));
  localStorage.setItem("guide-progress", JSON.stringify(checked));
  progressText.textContent = `${checked.length} / ${checklistItems.length}`;
  progressBar.style.width = `${(checked.length / checklistItems.length) * 100}%`;
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
    <div class="modal-section"><h3>进入前准备</h3><ul>${guide.prep.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    <div class="modal-section"><h3>攻略步骤</h3><ol>${guide.steps.map((item) => `<li>${item}</li>`).join("")}</ol></div>
    <div class="modal-section"><h3>相关条目</h3><div class="related-list">${guide.related.map((item) => `<span>${item}</span>`).join("")}</div></div>
  `;
  guideModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeGuide() {
  guideModal.hidden = true;
  document.body.classList.remove("modal-open");
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

guideGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-guide]");
  if (button) openGuide(Number(button.dataset.guide));
});

mapPins.forEach((pin) => {
  pin.addEventListener("click", () => {
    mapPins.forEach((item) => item.classList.toggle("active", item === pin));
    renderMap(Number(pin.dataset.region));
  });
});

bossList.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-boss]");
  if (!tab) return;
  bossList.querySelectorAll(".boss-tab").forEach((item) => item.classList.toggle("active", item === tab));
  renderBossPanel(Number(tab.dataset.boss));
});

gearGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gear-card");
  if (!card) return;
  gearGrid.querySelectorAll(".gear-card").forEach((item) => item.classList.toggle("selected", item === card));
});

checklist.addEventListener("change", updateProgress);

guideModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-guide]")) closeGuide();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !guideModal.hidden) closeGuide();
});

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("guide-theme", next);
});

const savedTheme = localStorage.getItem("guide-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

renderGuides();
renderMap();
renderBossTabs();
renderGear();
renderChecklist();
