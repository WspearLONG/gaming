const roadmap = [
  { title: "确认系统和显卡", body: "打开 设置 -> 系统 -> 关于，确认 Windows 版本；打开任务管理器 -> 性能 -> GPU，看显卡型号。" },
  { title: "安装 Miniconda 或 Anaconda", body: "新手想省事选 Anaconda；想轻量、少占空间选 Miniconda。安装后用 Anaconda Prompt 操作。" },
  { title: "创建虚拟环境", body: "每个项目一个环境，例如 conda create -n py310 python=3.10。不要把所有包都装进 base。" },
  { title: "配置 IDE", body: "VS Code 选择解释器，PyCharm 配置 Conda Interpreter，确认终端显示的是当前环境名。" },
  { title: "安装常用包并验证", body: "先装 numpy、pandas、matplotlib、opencv-python，再用 python -c 命令验证 import 成功。" },
  { title: "需要深度学习再装 GPU", body: "先确认显卡驱动，再按 PyTorch / TensorFlow 官方命令安装对应 CUDA 版本。" },
];

const tutorials = [
  {
    title: "Python 环境配置：系统 Python、conda、pip 的区别",
    category: "基础",
    level: "入门",
    summary: "讲清楚为什么不要乱装多个 Python，什么时候用 conda，什么时候用 pip。",
    commands: ["python --version", "where python", "pip --version", "conda --version"],
    steps: [
      "先确认电脑里已有几个 Python：在 PowerShell 输入 where python。",
      "如果你准备使用 Anaconda / Miniconda，后续项目优先在 conda 环境里安装包。",
      "不要在不清楚路径的情况下反复安装 Python，否则 VS Code 和 PyCharm 很容易选错解释器。",
      "安装包前先激活环境：conda activate 环境名。",
    ],
    verify: "命令行前面出现环境名，例如 (py310)，并且 python --version 是你预期的版本。",
  },
  {
    title: "Anaconda / Miniconda 安装与虚拟环境管理",
    category: "基础",
    level: "必学",
    summary: "从安装器点击、创建环境、激活环境、删除环境到导出 environment.yml。",
    commands: ["conda create -n py310 python=3.10", "conda activate py310", "conda install numpy pandas matplotlib", "conda env export > environment.yml"],
    steps: [
      "进入官网下载安装器。新手选 Anaconda，想轻量选 Miniconda。",
      "安装时一路 Next；不建议勾选 Add to PATH，优先使用 Anaconda Prompt。",
      "打开 Anaconda Prompt，输入 conda --version 确认安装成功。",
      "创建环境：conda create -n py310 python=3.10。",
      "进入环境：conda activate py310。",
      "安装包：优先 conda install，conda 没有再 pip install。",
    ],
    verify: "输入 conda env list 可以看到 py310；输入 python -c \"import numpy\" 不报错。",
  },
  {
    title: "VS Code 开发环境配置：解释器、终端、调试",
    category: "IDE",
    level: "常用",
    summary: "安装 Python 扩展，选择 conda 环境解释器，配置终端和调试按钮。",
    commands: ["Ctrl+Shift+P", "Python: Select Interpreter", "python -c \"import sys; print(sys.executable)\""],
    steps: [
      "安装 VS Code 后打开扩展面板，搜索 Python，安装 Microsoft 发布的 Python 扩展。",
      "按 Ctrl+Shift+P，输入 Python: Select Interpreter。",
      "选择你的 conda 环境，例如 py310。",
      "打开终端，确认前缀显示 (py310)。",
      "新建 test.py，写 print('hello')，右上角点击运行按钮。",
    ],
    verify: "终端输出 hello，sys.executable 指向 conda envs/py310 目录。",
  },
  {
    title: "PyCharm 配置 Conda Interpreter",
    category: "IDE",
    level: "常用",
    summary: "在 PyCharm 里绑定已有 conda 环境，避免运行时和命令行环境不一致。",
    commands: ["Settings -> Project -> Python Interpreter", "Add Interpreter -> Conda Environment"],
    steps: [
      "打开 PyCharm 项目，进入 Settings / Preferences。",
      "找到 Project -> Python Interpreter。",
      "点击 Add Interpreter，选择 Conda Environment。",
      "Existing environment 选择已有环境里的 python.exe。",
      "应用后在 PyCharm Terminal 里运行 python --version。",
    ],
    verify: "PyCharm 右下角解释器和 Terminal 中 python 路径一致。",
  },
  {
    title: "Jupyter Notebook 配置与使用",
    category: "基础",
    level: "常用",
    summary: "安装 notebook / ipykernel，把 conda 环境注册成 Jupyter kernel。",
    commands: ["conda install notebook ipykernel", "python -m ipykernel install --user --name py310 --display-name \"Python (py310)\"", "jupyter notebook"],
    steps: [
      "先激活环境：conda activate py310。",
      "安装 Jupyter：conda install notebook ipykernel。",
      "注册内核：python -m ipykernel install --user --name py310 --display-name \"Python (py310)\"。",
      "启动：jupyter notebook。",
      "浏览器打开后，新建 Notebook 时选择 Python (py310)。",
    ],
    verify: "Notebook 单元格运行 import sys; print(sys.executable)，路径应指向 py310 环境。",
  },
  {
    title: "PyTorch / TensorFlow 深度学习环境安装",
    category: "深度学习",
    level: "进阶",
    summary: "按官方命令选择 CPU 或 CUDA 版本，安装后验证 torch.cuda / TensorFlow GPU。",
    commands: ["pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121", "python -c \"import torch; print(torch.cuda.is_available())\"", "pip install tensorflow"],
    steps: [
      "先确认你是否需要 GPU。如果没有 NVIDIA 显卡，直接安装 CPU 版本。",
      "PyTorch 必须以官网 Get Started 生成的命令为准，不要随便复制旧命令。",
      "TensorFlow 在 Windows 原生 GPU 支持上有版本限制；新项目可优先考虑 WSL2 或 CPU。",
      "安装后分别运行验证命令，不要只看安装过程是否成功。",
    ],
    verify: "PyTorch 输出 True 表示 CUDA 可用；TensorFlow 用 tf.config.list_physical_devices('GPU') 查看 GPU。",
  },
  {
    title: "CUDA / cuDNN / 显卡驱动适配",
    category: "深度学习",
    level: "进阶",
    summary: "解释驱动、CUDA Toolkit、运行时、cuDNN 的关系，避免 CUDA 不匹配。",
    commands: ["nvidia-smi", "nvcc --version", "python -c \"import torch; print(torch.version.cuda)\""],
    steps: [
      "先安装或更新 NVIDIA 显卡驱动，nvidia-smi 必须能运行。",
      "PyTorch pip 包通常自带 CUDA 运行时，不一定需要你单独装完整 CUDA Toolkit。",
      "如果需要编译 CUDA 扩展，再安装 CUDA Toolkit，并让版本匹配框架要求。",
      "cuDNN 只在特定框架或手动部署场景需要额外处理，优先看框架官方说明。",
    ],
    verify: "nvidia-smi 能看到显卡；torch.version.cuda 和安装命令中的 CUDA 版本一致。",
  },
  {
    title: "Ultralytics YOLO 训练环境配置",
    category: "深度学习",
    level: "实战",
    summary: "安装 ultralytics，验证 yolo 命令，准备数据集并启动训练。",
    commands: ["pip install ultralytics", "yolo checks", "yolo detect train data=coco8.yaml model=yolo11n.pt epochs=3 imgsz=640"],
    steps: [
      "创建独立环境，例如 conda create -n yolo python=3.10。",
      "安装 PyTorch，确认 GPU 可用。",
      "安装 ultralytics：pip install ultralytics。",
      "运行 yolo checks 查看环境检测结果。",
      "先用官方小数据集 coco8.yaml 跑通，再换自己的数据集。",
    ],
    verify: "训练能生成 runs/detect/train 目录，且没有 CUDA out of memory 或 No module named 报错。",
  },
  {
    title: "ONNX / TensorRT / OpenVINO 导出与部署环境",
    category: "部署",
    level: "进阶",
    summary: "把模型导出为 ONNX，再按硬件选择 ONNX Runtime、TensorRT 或 OpenVINO。",
    commands: ["pip install onnx onnxruntime", "yolo export model=yolo11n.pt format=onnx", "yolo export model=yolo11n.pt format=openvino", "trtexec --onnx=model.onnx --saveEngine=model.engine"],
    steps: [
      "先确认原始 PyTorch 模型推理正常。",
      "导出 ONNX，优先用官方导出命令。",
      "CPU / 通用部署可先用 onnxruntime 验证。",
      "NVIDIA GPU 高性能部署考虑 TensorRT。",
      "Intel CPU / iGPU / NPU 部署考虑 OpenVINO。",
    ],
    verify: "导出文件存在，并且用目标推理后端跑一次真实图片推理成功。",
  },
  {
    title: "常用 Python 模块安装与验证",
    category: "排错",
    level: "必备",
    summary: "numpy、matplotlib、opencv-python、pyqt5、pandas、scikit-learn、onnxruntime、ultralytics 的安装顺序和验证。",
    commands: ["pip install numpy matplotlib opencv-python pandas scikit-learn onnxruntime ultralytics", "pip install pyqt5", "python -c \"import cv2, numpy, pandas, sklearn; print('ok')\""],
    steps: [
      "先激活你的项目环境，不要在 base 里乱装。",
      "科学计算优先 conda install numpy pandas scikit-learn matplotlib。",
      "OpenCV 通常 pip install opencv-python；服务器无界面可用 opencv-python-headless。",
      "PyQt5 如果 DLL 报错，优先新建干净环境重装。",
      "安装完立刻 import 验证，避免到写代码时才发现环境错了。",
    ],
    verify: "所有 import 不报错；pip show 包名 能看到安装位置在当前环境下。",
  },
];

const downloads = [
  ["Python", "https://www.python.org/downloads/", "官方 Python 下载页"],
  ["Anaconda", "https://www.anaconda.com/download", "Anaconda Distribution 下载"],
  ["Miniconda", "https://docs.anaconda.com/miniconda/", "轻量 conda 安装器"],
  ["VS Code", "https://code.visualstudio.com/", "Visual Studio Code 官网"],
  ["PyCharm", "https://www.jetbrains.com/pycharm/download/", "PyCharm Community / Professional"],
  ["Jupyter", "https://jupyter.org/install", "Jupyter 官方安装说明"],
  ["PyTorch", "https://pytorch.org/get-started/locally/", "生成对应 CUDA 的安装命令"],
  ["TensorFlow", "https://www.tensorflow.org/install", "TensorFlow 官方安装说明"],
  ["CUDA Toolkit", "https://developer.nvidia.com/cuda-downloads", "NVIDIA CUDA 下载"],
  ["cuDNN", "https://developer.nvidia.com/cudnn", "NVIDIA cuDNN"],
  ["Ultralytics", "https://docs.ultralytics.com/quickstart/", "YOLO 快速开始"],
  ["OpenVINO", "https://docs.openvino.ai/", "Intel OpenVINO 文档"],
];

const troubles = [
  {
    title: "No module named xxx",
    cause: "当前解释器不是你安装包的那个环境，或者包根本没装进当前环境。",
    check: ["python -c \"import sys; print(sys.executable)\"", "pip show 包名", "conda env list"],
    fix: ["先 conda activate 环境名", "再 pip install 包名", "VS Code / PyCharm 重新选择解释器"],
  },
  {
    title: "DLL load failed",
    cause: "二进制包依赖缺失、包版本不匹配，常见于 opencv、pyqt5、torch、onnxruntime。",
    check: ["确认 Python 版本是否受支持", "pip show 出错包", "where python"],
    fix: ["新建干净环境重装", "不要混用多个来源的同一个包", "OpenCV 可尝试 opencv-python-headless"],
  },
  {
    title: "pip / conda 安装失败",
    cause: "网络、镜像、Python 版本不支持、包冲突或权限问题。",
    check: ["python --version", "pip -V", "conda config --show channels"],
    fix: ["升级 pip：python -m pip install -U pip", "换干净环境", "优先使用官方推荐命令"],
  },
  {
    title: "GPU 无法调用 / CUDA 不匹配",
    cause: "驱动、框架 CUDA 运行时、CUDA Toolkit、显卡架构之间不匹配。",
    check: ["nvidia-smi", "python -c \"import torch; print(torch.cuda.is_available(), torch.version.cuda)\""],
    fix: ["更新 NVIDIA 驱动", "按 PyTorch 官网重新选择 CUDA 命令", "不要用旧博客里的 CUDA 版本组合"],
  },
];

let currentFilter = "all";
let searchTerm = "";

const roadmapNode = document.querySelector("#roadmap");
const tutorialGrid = document.querySelector("#tutorialGrid");
const downloadGrid = document.querySelector("#downloadGrid");
const troubleList = document.querySelector("#troubleList");
const troublePanel = document.querySelector("#troublePanel");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector(".search");
const filterButtons = document.querySelectorAll(".filter");
const themeToggle = document.querySelector("[data-theme-toggle]");
const modal = document.querySelector("#tutorialModal");
const detail = document.querySelector("#tutorialDetail");

function renderRoadmap() {
  roadmapNode.innerHTML = roadmap
    .map((item, index) => `
      <article class="road-item">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><h3>${item.title}</h3><p>${item.body}</p></div>
      </article>
    `)
    .join("");
}

function renderTutorials() {
  const term = searchTerm.trim().toLowerCase();
  const filtered = tutorials.filter((item) => {
    const matchesFilter = currentFilter === "all" || item.category === currentFilter;
    const text = `${item.title} ${item.category} ${item.summary} ${item.commands.join(" ")}`.toLowerCase();
    return matchesFilter && (!term || text.includes(term));
  });

  if (!filtered.length) {
    tutorialGrid.innerHTML = '<p class="empty">没有找到匹配教程，换个关键词或分类试试。</p>';
    return;
  }

  tutorialGrid.innerHTML = filtered
    .map((item) => {
      const index = tutorials.indexOf(item);
      return `
        <article class="tutorial-card">
          <div class="card-top">
            <span class="tag">${item.category}</span>
            <b>${item.level}</b>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <code>${item.commands[0]}</code>
          <button type="button" class="read-button" data-tutorial="${index}">查看一步一步教程</button>
        </article>
      `;
    })
    .join("");
}

function renderDownloads() {
  downloadGrid.innerHTML = downloads
    .map(([name, url, desc]) => `
      <a class="download-card" href="${url}" target="_blank" rel="noreferrer">
        <strong>${name}</strong>
        <span>${desc}</span>
        <em>打开官网</em>
      </a>
    `)
    .join("");
}

function renderTroubles(active = 0) {
  troubleList.innerHTML = troubles
    .map((item, index) => `<button class="${index === active ? "active" : ""}" type="button" data-trouble="${index}">${item.title}</button>`)
    .join("");
  renderTroublePanel(active);
}

function renderTroublePanel(index) {
  const item = troubles[index];
  troublePanel.innerHTML = `
    <h3>${item.title}</h3>
    <dl>
      <dt>常见原因</dt><dd>${item.cause}</dd>
      <dt>检查命令</dt><dd>${item.check.map((cmd) => `<code>${cmd}</code>`).join("")}</dd>
      <dt>修复步骤</dt><dd><ol>${item.fix.map((step) => `<li>${step}</li>`).join("")}</ol></dd>
    </dl>
  `;
}

function openTutorial(index) {
  const item = tutorials[index];
  if (!item) return;
  detail.innerHTML = `
    <div class="modal-kicker"><span class="tag">${item.category}</span><b>${item.level}</b></div>
    <h2 id="modalTitle">${item.title}</h2>
    <p class="modal-summary">${item.summary}</p>
    <div class="modal-section"><h3>第 1 步：准备</h3><p>先打开 Anaconda Prompt、PowerShell、VS Code 终端或 PyCharm Terminal。确认你知道当前环境名。</p></div>
    <div class="modal-section"><h3>第 2 步：照着执行</h3><ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol></div>
    <div class="modal-section"><h3>第 3 步：复制命令</h3><div class="command-list">${item.commands.map((cmd) => `<code>${cmd}</code>`).join("")}</div></div>
    <div class="modal-section"><h3>第 4 步：验证成功</h3><p>${item.verify}</p></div>
  `;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTutorials();
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  renderTutorials();
  document.querySelector("#tutorials").scrollIntoView({ block: "start" });
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  renderTutorials();
});

tutorialGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tutorial]");
  if (button) openTutorial(Number(button.dataset.tutorial));
});

troubleList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-trouble]");
  if (!button) return;
  troubleList.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
  renderTroublePanel(Number(button.dataset.trouble));
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("py-guide-theme", next);
});

const savedTheme = localStorage.getItem("py-guide-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

renderRoadmap();
renderTutorials();
renderDownloads();
renderTroubles();
