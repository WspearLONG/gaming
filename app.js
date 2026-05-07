const roadmap = [
  { title: "确认系统和显卡", body: "先看 Windows 版本、Python 是否已装、有没有 NVIDIA 显卡。不要跳过这一步。" },
  { title: "安装 Miniconda 或 Anaconda", body: "新手选 Anaconda，想轻量选 Miniconda。安装完成后优先用 Anaconda Prompt。" },
  { title: "创建独立虚拟环境", body: "每个项目一个环境。不要把所有库都装进 base，后期会很难排错。" },
  { title: "配置 VS Code 或 PyCharm", body: "IDE 必须选择刚创建的 conda 环境，否则会出现明明安装了包却 import 失败。" },
  { title: "安装 Jupyter 和常用模块", body: "先跑通 numpy、pandas、matplotlib、opencv，再进入深度学习环境。" },
  { title: "最后处理 CUDA / YOLO / 部署", body: "GPU 环境最容易出错，必须按驱动、框架、CUDA 版本顺序检查。" },
];

const tutorials = [
  {
    title: "Python 环境配置：系统 Python、conda、pip 的区别",
    category: "基础",
    level: "入门",
    summary: "先搞清楚 Python、pip、conda、虚拟环境和解释器路径，避免后面一直选错环境。",
    steps: [
      step("打开终端", "按 Win 键，搜索 PowerShell 或 Anaconda Prompt。新手建议先用 Anaconda Prompt。", "terminal", "PowerShell / Anaconda Prompt"),
      step("查看 Python 版本", "输入命令确认当前终端调用的是哪个 Python。", "terminal", "python --version"),
      step("查看 Python 路径", "Windows 下用 where python。路径能告诉你现在用的是系统 Python 还是 conda 环境。", "terminal", "where python"),
      step("查看 pip 绑定位置", "pip 必须和当前 Python 绑定到同一个环境，否则会装到别处。", "terminal", "pip -V"),
      step("理解安装原则", "有 conda 环境时，先激活环境，再安装包；不要直接在 base 里乱装。", "diagram", "conda activate py310 -> pip install 包名"),
    ],
    verify: "命令行前面出现环境名，例如 (py310)，where python 指向 conda envs 目录。",
  },
  {
    title: "Anaconda / Miniconda 安装与虚拟环境管理",
    category: "基础",
    level: "必学",
    summary: "从下载安装器、点击安装按钮，到创建、激活、删除和导出 conda 环境。",
    steps: [
      step("进入官网下载安装器", "Anaconda 体积大但省事；Miniconda 体积小但需要自己装包。", "browser", "Download Anaconda / Miniconda"),
      step("运行安装器", "双击 .exe，看到安装器后点击 Next。", "installer", "Next"),
      step("接受协议", "点击 I Agree，然后选择 Just Me。新手不需要为所有用户安装。", "installer", "I Agree -> Just Me"),
      step("选择安装目录", "路径不要有中文和特殊符号，例如 C:\\Users\\你的用户名\\miniconda3。", "installer", "Destination Folder"),
      step("不要乱勾 PATH", "不建议勾 Add to PATH。安装后用 Anaconda Prompt 更稳定。", "installer", "不要勾 Add to PATH"),
      step("创建环境", "安装完成后打开 Anaconda Prompt，创建 Python 3.10 环境。", "terminal", "conda create -n py310 python=3.10"),
      step("激活环境", "进入环境后命令行前面会出现 (py310)。", "terminal", "conda activate py310"),
      step("安装常用包", "先用 conda 安装科学计算包，conda 没有再用 pip。", "terminal", "conda install numpy pandas matplotlib"),
      step("导出环境", "项目跑通后导出 environment.yml，方便别人复现。", "terminal", "conda env export > environment.yml"),
    ],
    verify: "conda env list 能看到 py310；python -c \"import numpy\" 不报错。",
  },
  {
    title: "VS Code 开发环境配置：解释器、终端、调试",
    category: "IDE",
    level: "常用",
    summary: "安装 Python 扩展，选择 conda 解释器，确认终端、运行按钮和调试器都使用同一环境。",
    steps: [
      step("安装 VS Code", "进入 VS Code 官网下载 Windows 安装器，安装时可以勾选添加到右键菜单。", "browser", "Download for Windows"),
      step("打开扩展面板", "点击左侧方块图标，或者按 Ctrl+Shift+X。", "vscode", "Extensions"),
      step("安装 Python 扩展", "搜索 Python，安装 Microsoft 发布的 Python 扩展。", "vscode", "Python -> Install"),
      step("选择解释器", "按 Ctrl+Shift+P，输入 Python: Select Interpreter。", "vscode", "Python: Select Interpreter"),
      step("选择 conda 环境", "选择 py310 或你的项目环境，不要选系统 Python。", "vscode", "conda env: py310"),
      step("打开终端验证", "打开 Terminal，确认前缀是 (py310)。", "terminal", "python -c \"import sys; print(sys.executable)\""),
      step("运行测试文件", "新建 test.py，写一行 print，然后点右上角运行按钮。", "vscode", "print('hello vscode')"),
    ],
    verify: "sys.executable 指向 conda envs/py310，运行按钮和终端输出一致。",
  },
  {
    title: "PyCharm 配置 Conda Interpreter",
    category: "IDE",
    level: "常用",
    summary: "让 PyCharm 使用已有 conda 环境，解决 PyCharm 能运行但终端不能运行或反过来的问题。",
    steps: [
      step("打开设置", "进入 File -> Settings，macOS 是 Preferences。", "pycharm", "File -> Settings"),
      step("进入解释器页面", "点击 Project -> Python Interpreter。", "pycharm", "Project -> Python Interpreter"),
      step("添加解释器", "点击 Add Interpreter，选择 Conda Environment。", "pycharm", "Add Interpreter -> Conda"),
      step("选择已有环境", "Existing environment 选择 envs\\py310\\python.exe。", "pycharm", "Existing environment"),
      step("应用设置", "点击 OK / Apply 后，等待 PyCharm 索引环境。", "pycharm", "Apply"),
      step("在 Terminal 验证", "PyCharm 底部 Terminal 也要确认 Python 路径。", "terminal", "python -c \"import sys; print(sys.executable)\""),
    ],
    verify: "PyCharm 右下角解释器路径和 Terminal 输出路径一致。",
  },
  {
    title: "Jupyter Notebook 配置与使用",
    category: "基础",
    level: "常用",
    summary: "安装 notebook / ipykernel，把 conda 环境注册成 Jupyter kernel，并学会新建 Notebook。",
    steps: [
      step("激活环境", "先进入你要用于 Notebook 的环境。", "terminal", "conda activate py310"),
      step("安装 Jupyter", "安装 notebook 和 ipykernel。", "terminal", "conda install notebook ipykernel"),
      step("注册内核", "把当前环境注册到 Jupyter 的 Kernel 列表。", "terminal", "python -m ipykernel install --user --name py310 --display-name \"Python (py310)\""),
      step("启动 Jupyter", "启动后浏览器会自动打开 Notebook 页面。", "terminal", "jupyter notebook"),
      step("新建 Notebook", "点击 New，选择 Python (py310)。", "jupyter", "New -> Python (py310)"),
      step("运行验证单元格", "在第一个单元格输入 import sys 并运行。", "jupyter", "import sys\nprint(sys.executable)"),
    ],
    verify: "Notebook 输出的 sys.executable 指向 py310 环境。",
  },
  {
    title: "常用 Python 模块安装与验证",
    category: "排错",
    level: "必备",
    summary: "numpy、matplotlib、opencv-python、pyqt5、pandas、scikit-learn、onnxruntime、ultralytics 的安装和验证。",
    steps: [
      step("激活项目环境", "所有包都装进项目环境，不要装进 base。", "terminal", "conda activate py310"),
      step("安装科学计算包", "numpy、pandas、matplotlib、scikit-learn 优先用 conda。", "terminal", "conda install numpy pandas matplotlib scikit-learn"),
      step("安装 OpenCV", "桌面环境用 opencv-python；服务器环境可以用 headless。", "terminal", "pip install opencv-python"),
      step("安装 PyQt5", "PyQt5 容易受 Python 版本影响，建议在干净环境安装。", "terminal", "pip install pyqt5"),
      step("安装部署和 YOLO 包", "按需安装 onnxruntime 和 ultralytics。", "terminal", "pip install onnxruntime ultralytics"),
      step("一次性 import 验证", "安装后立刻 import，不要等写代码时才发现问题。", "terminal", "python -c \"import cv2,numpy,pandas,sklearn; print('ok')\""),
    ],
    verify: "所有 import 不报错，pip show 包名显示路径在当前 conda 环境里。",
  },
  {
    title: "PyTorch / TensorFlow 深度学习环境安装",
    category: "深度学习",
    level: "进阶",
    summary: "按官方命令选择 CPU 或 CUDA 版本，安装后验证 torch.cuda 和 TensorFlow GPU。",
    steps: [
      step("确认显卡", "只有 NVIDIA 显卡才走 CUDA 路线；没有 NVIDIA 显卡就先用 CPU。", "terminal", "nvidia-smi"),
      step("进入 PyTorch 官网", "在 Get Started 页面按系统、包管理器、CUDA 版本生成命令。", "browser", "PyTorch Get Started"),
      step("安装 PyTorch", "不要随便复制旧博客命令，优先用官网生成的命令。", "terminal", "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121"),
      step("验证 PyTorch GPU", "True 表示 PyTorch 能调用 CUDA。", "terminal", "python -c \"import torch; print(torch.cuda.is_available())\""),
      step("安装 TensorFlow", "Windows 原生 GPU 支持有版本限制；新项目可考虑 WSL2 或 CPU。", "terminal", "pip install tensorflow"),
      step("验证 TensorFlow", "查看 TensorFlow 能识别到哪些设备。", "terminal", "python -c \"import tensorflow as tf; print(tf.config.list_physical_devices())\""),
    ],
    verify: "torch.cuda.is_available() 输出 True，或 CPU 环境能正常 import torch / tensorflow。",
  },
  {
    title: "CUDA / cuDNN / 显卡驱动适配",
    category: "深度学习",
    level: "进阶",
    summary: "讲清驱动、CUDA Toolkit、运行时、cuDNN 的关系，避免 CUDA 不匹配。",
    steps: [
      step("先看驱动", "nvidia-smi 能运行，说明驱动可用；它显示的是驱动支持的最高 CUDA 能力。", "terminal", "nvidia-smi"),
      step("区分 Toolkit 和运行时", "PyTorch pip 包通常自带 CUDA 运行时，不一定需要单独安装完整 Toolkit。", "diagram", "Driver -> CUDA Runtime -> PyTorch"),
      step("需要编译再装 Toolkit", "如果要编译 CUDA 扩展或 TensorRT 工具，再安装 CUDA Toolkit。", "browser", "CUDA Toolkit Download"),
      step("检查 nvcc", "只有安装 Toolkit 后才通常有 nvcc。没有 nvcc 不代表 PyTorch GPU 一定不能用。", "terminal", "nvcc --version"),
      step("检查框架 CUDA 版本", "框架内部 CUDA 版本要和安装命令对应。", "terminal", "python -c \"import torch; print(torch.version.cuda)\""),
      step("cuDNN 按框架说明处理", "不要随便把 DLL 到处复制；优先看 TensorFlow / CUDA 官方说明。", "diagram", "cuDNN DLL -> 框架可加载路径"),
    ],
    verify: "nvidia-smi 正常，torch.version.cuda 和你的 PyTorch 安装命令匹配。",
  },
  {
    title: "Ultralytics YOLO 训练环境配置",
    category: "深度学习",
    level: "实战",
    summary: "创建 YOLO 环境，安装 ultralytics，跑通 yolo checks 和最小训练。",
    steps: [
      step("创建 YOLO 环境", "YOLO 单独一个环境，避免和别的项目包冲突。", "terminal", "conda create -n yolo python=3.10"),
      step("激活环境", "后续所有命令都在 yolo 环境里执行。", "terminal", "conda activate yolo"),
      step("安装 PyTorch", "有 NVIDIA 显卡就按 PyTorch 官网 CUDA 命令安装。", "terminal", "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121"),
      step("安装 Ultralytics", "官方包名是 ultralytics。", "terminal", "pip install ultralytics"),
      step("环境检测", "yolo checks 会检查 Python、torch、CUDA、依赖库状态。", "terminal", "yolo checks"),
      step("跑最小训练", "先用官方小数据集跑通，不要一上来就用自己的大数据集。", "terminal", "yolo detect train data=coco8.yaml model=yolo11n.pt epochs=3 imgsz=640"),
      step("查看训练结果", "训练结果会输出到 runs/detect/train。", "terminal", "dir runs\\detect"),
    ],
    verify: "出现 runs/detect/train，并且没有 CUDA out of memory 或 No module named 报错。",
  },
  {
    title: "ONNX / TensorRT / OpenVINO 导出与部署环境",
    category: "部署",
    level: "进阶",
    summary: "先导出 ONNX，再按硬件选择 ONNX Runtime、TensorRT 或 OpenVINO。",
    steps: [
      step("确认原模型可推理", "先确认 PyTorch 模型本身能跑，不能直接从坏模型开始导出。", "terminal", "yolo predict model=yolo11n.pt source=bus.jpg"),
      step("安装 ONNX 工具", "ONNX 是常见中间格式，先装 onnx 和 onnxruntime。", "terminal", "pip install onnx onnxruntime"),
      step("导出 ONNX", "用 Ultralytics 官方 export 命令导出。", "terminal", "yolo export model=yolo11n.pt format=onnx"),
      step("CPU 部署验证", "通用 CPU 场景先用 onnxruntime 跑通。", "terminal", "python -c \"import onnxruntime as ort; print(ort.get_available_providers())\""),
      step("NVIDIA 部署 TensorRT", "TensorRT 适合 NVIDIA GPU 高性能部署，需要匹配 CUDA / TensorRT 版本。", "terminal", "trtexec --onnx=model.onnx --saveEngine=model.engine"),
      step("Intel 部署 OpenVINO", "Intel CPU / iGPU / NPU 可以导出 OpenVINO。", "terminal", "yolo export model=yolo11n.pt format=openvino"),
    ],
    verify: "导出文件存在，并能用目标后端跑一次真实推理。",
  },
  {
    title: "pip / conda 安装失败、版本冲突、DLL 报错处理",
    category: "排错",
    level: "排错",
    summary: "按路径、版本、安装源、二进制依赖四个方向定位问题。",
    steps: [
      step("先确认环境", "大多数问题不是包没装，而是装到了另一个环境。", "terminal", "python -c \"import sys; print(sys.executable)\""),
      step("查看包位置", "pip show 能看到包装在哪里。", "terminal", "pip show numpy"),
      step("升级 pip", "老 pip 可能找不到新 wheel。", "terminal", "python -m pip install -U pip"),
      step("查看冲突", "pip check 可以发现已安装包之间的依赖冲突。", "terminal", "pip check"),
      step("新建干净环境", "如果冲突太多，不要硬修，直接新建环境最快。", "terminal", "conda create -n clean310 python=3.10"),
      step("重装问题包", "DLL load failed 常见处理是干净环境重装二进制包。", "terminal", "pip install --force-reinstall opencv-python"),
    ],
    verify: "pip check 没有冲突，import 目标包不再报错。",
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
    cause: "当前解释器不是安装包的那个环境，或者包没有装进当前环境。",
    check: ["python -c \"import sys; print(sys.executable)\"", "pip show 包名", "conda env list"],
    fix: ["conda activate 环境名", "pip install 包名", "VS Code / PyCharm 重新选择解释器"],
  },
  {
    title: "DLL load failed",
    cause: "二进制包依赖缺失、Python 版本不支持、包版本不匹配。",
    check: ["python --version", "pip show 出错包", "where python"],
    fix: ["新建干净环境", "重装问题包", "OpenCV 可尝试 opencv-python-headless"],
  },
  {
    title: "pip / conda 安装失败",
    cause: "网络、镜像、Python 版本不支持、依赖冲突或权限问题。",
    check: ["python --version", "pip -V", "pip check"],
    fix: ["python -m pip install -U pip", "换干净环境", "优先使用官方推荐命令"],
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

function step(title, body, visual, command = "") {
  return { title, body, visual, command };
}

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
    const text = `${item.title} ${item.category} ${item.summary} ${item.steps.map((s) => `${s.title} ${s.body} ${s.command}`).join(" ")}`.toLowerCase();
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
          <div class="mini-visual ${item.steps[0].visual}">
            <span>${visualLabel(item.steps[0].visual)}</span>
            <code>${escapeHtml(item.steps[0].command || item.steps[0].title)}</code>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <button type="button" class="read-button" data-tutorial="${index}">查看图文步骤</button>
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
      <dt>检查命令</dt><dd>${item.check.map((cmd) => terminalLine(cmd)).join("")}</dd>
      <dt>修复步骤</dt><dd><ol>${item.fix.map((stepText) => `<li>${stepText}</li>`).join("")}</ol></dd>
    </dl>
  `;
}

function openTutorial(index) {
  const item = tutorials[index];
  if (!item) return;

  detail.innerHTML = `
    <div class="modal-kicker"><span class="tag">${item.category}</span><b>${item.level}</b><span>${item.steps.length} 个图文步骤</span></div>
    <h2 id="modalTitle">${item.title}</h2>
    <p class="modal-summary">${item.summary}</p>
    <div class="step-list">
      ${item.steps.map((itemStep, stepIndex) => renderStep(itemStep, stepIndex)).join("")}
    </div>
    <div class="modal-section">
      <h3>最后验证</h3>
      <p>${item.verify}</p>
    </div>
  `;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function renderStep(itemStep, index) {
  return `
    <article class="step-card">
      <div class="step-copy">
        <span class="step-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${itemStep.title}</h3>
          <p>${itemStep.body}</p>
        </div>
      </div>
      ${visualBlock(itemStep)}
    </article>
  `;
}

function visualBlock(itemStep) {
  if (itemStep.visual === "terminal") {
    return `
      <figure class="step-visual terminal-shot">
        <figcaption>终端截图示意</figcaption>
        <div class="window-dots"><i></i><i></i><i></i></div>
        <pre><code>${escapeHtml(itemStep.command)}</code></pre>
      </figure>
    `;
  }

  return `
    <figure class="step-visual ui-shot ${itemStep.visual}">
      <figcaption>${visualLabel(itemStep.visual)}</figcaption>
      <div class="fake-window">
        <div class="fake-title">${visualTitle(itemStep.visual)}</div>
        <div class="fake-body">${visualContent(itemStep)}</div>
      </div>
    </figure>
  `;
}

function visualContent(itemStep) {
  const command = escapeHtml(itemStep.command || itemStep.title);
  if (itemStep.visual === "browser") {
    return `<div class="address">${officialUrl(itemStep.command)}</div><div class="primary-button">${command}</div><div class="hint-arrow">点击这里</div>`;
  }
  if (itemStep.visual === "installer") {
    return `<div class="checkline">安装选项</div><div class="checkline muted">安装路径</div><div class="primary-button">${command}</div>`;
  }
  if (itemStep.visual === "vscode") {
    return `<div class="side-icons"></div><div class="search-box">${command}</div><div class="primary-button">选择 / 安装</div>`;
  }
  if (itemStep.visual === "pycharm") {
    return `<div class="settings-tree">Project</div><div class="settings-main">${command}</div><div class="primary-button">Apply</div>`;
  }
  if (itemStep.visual === "jupyter") {
    return `<div class="notebook-toolbar">Run  Kernel  New</div><div class="notebook-cell">${command.replace(/\n/g, "<br>")}</div>`;
  }
  return `<div class="flow">${command}</div><div class="primary-button">按顺序检查</div>`;
}

function terminalLine(cmd) {
  return `<code>${escapeHtml(cmd)}</code>`;
}

function visualLabel(type) {
  const labels = {
    browser: "浏览器下载页示意图",
    installer: "安装器点击示意图",
    vscode: "VS Code 操作示意图",
    pycharm: "PyCharm 设置示意图",
    jupyter: "Jupyter 操作示意图",
    terminal: "终端命令截图",
    diagram: "环境关系示意图",
  };
  return labels[type] || "步骤示意图";
}

function visualTitle(type) {
  const titles = {
    browser: "官方网页",
    installer: "安装向导",
    vscode: "Visual Studio Code",
    pycharm: "PyCharm Settings",
    jupyter: "Jupyter Notebook",
    diagram: "环境关系图",
  };
  return titles[type] || "操作界面";
}

function officialUrl(label = "") {
  const value = label.toLowerCase();
  if (value.includes("anaconda") || value.includes("miniconda")) return "https://www.anaconda.com/download";
  if (value.includes("vscode") || value.includes("vs code")) return "https://code.visualstudio.com/";
  if (value.includes("pytorch")) return "https://pytorch.org/get-started/locally/";
  if (value.includes("cuda")) return "https://developer.nvidia.com/cuda-downloads";
  if (value.includes("tensorflow")) return "https://www.tensorflow.org/install";
  if (value.includes("pycharm")) return "https://www.jetbrains.com/pycharm/download/";
  if (value.includes("jupyter")) return "https://jupyter.org/install";
  if (value.includes("openvino")) return "https://docs.openvino.ai/";
  if (value.includes("ultralytics") || value.includes("yolo")) return "https://docs.ultralytics.com/quickstart/";
  return "请从下方“官方下载入口”进入官网";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
