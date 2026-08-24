<div align="center">

# Quiet Signal

面向 AI 设计工作的开源视觉语言与生产型 Skill 集合。

[![License: MIT](https://img.shields.io/badge/License-MIT-0A0A0A.svg)](LICENSE)
![Skills](https://img.shields.io/badge/Skills-3-7C3AED.svg)

</div>

![Quiet Signal 全景设计图](docs/assets/quiet-signal-readme-hero.png)

Quiet Signal 用近白表面、清晰的黑灰层级、编辑性字体关系、细线分组和有限的紫色信号，帮助 AI Agent 产出安静、清楚、克制，但具有明确辨识度的设计结果。

它不是一套固定模板。基座 Skill 定义跨媒介稳定的视觉身份；小红书与长篇报告 Skill 在此基础上补充各自媒介的内容组织、实现、渲染与验收规则。

## 包含的 Skills

| Skill | 用途 | 适合场景 | 依赖 |
| --- | --- | --- | --- |
| [`quiet-signal-design`](skills/quiet-signal-design/) | 应用或审核 Quiet Signal 核心视觉语言 | 界面、网站、海报、社交图、演示文稿等已明确的设计任务 | 无 |
| [`quiet-signal-xhs`](skills/quiet-signal-xhs/) | 生成、修改、渲染与审核 1080×1440 小红书图文 | 文章、文字、URL 或用户已规划的图文内容 | `quiet-signal-design` |
| [`quiet-signal-reports`](skills/quiet-signal-reports/) | 制作可编辑 HTML/CSS、A4 PDF 与全页 QA 图 | 需要完整论证、来源与长篇阅读的报告 | `quiet-signal-design` |

## 安装

### 安装全部 Skills

```bash
git clone https://github.com/oyorf/quiet-signal.git
mkdir -p ~/.codex/skills
cp -R quiet-signal/skills/quiet-signal-design ~/.codex/skills/
cp -R quiet-signal/skills/quiet-signal-xhs ~/.codex/skills/
cp -R quiet-signal/skills/quiet-signal-reports ~/.codex/skills/
```

重新启动 Codex 或重新加载 Skills。之后可以在对话中通过 `$quiet-signal-design`、`$quiet-signal-xhs` 或 `$quiet-signal-reports` 显式调用。

### 只安装需要的 Skill

基座可以单独安装。安装小红书或报告 Skill 时，必须同时安装 `quiet-signal-design`：

```bash
# 只安装基座
cp -R quiet-signal/skills/quiet-signal-design ~/.codex/skills/

# 安装小红书能力（基座 + 小红书）
cp -R quiet-signal/skills/quiet-signal-design ~/.codex/skills/
cp -R quiet-signal/skills/quiet-signal-xhs ~/.codex/skills/

# 安装报告能力（基座 + 报告）
cp -R quiet-signal/skills/quiet-signal-design ~/.codex/skills/
cp -R quiet-signal/skills/quiet-signal-reports ~/.codex/skills/
```

如果你的 Agent 使用其他 Skill 目录，把目标路径替换成对应环境的目录即可。每个 Skill 的入口都是其目录下的 `SKILL.md`。

## 1. 基座：`quiet-signal-design`

基座保存 Quiet Signal 的核心视觉身份，包括颜色、字体角色、空间关系、几何、表面、图像、动效与验收边界。它有两种使用方式：

- **Apply**：把视觉语言应用到一个目标、内容、结构和输出要求已经明确的设计任务。
- **Audit**：对现有作品进行审查，指出符合项、具体违反项与最小修正建议。

### 用法

```text
Use $quiet-signal-design to apply Quiet Signal to this 1600×900 launch visual.
Preserve the supplied copy and information structure, and export the final PNG.
```

```text
Use $quiet-signal-design to audit this interface against the approved Quiet Signal
core specification. List conforming decisions, violations, uncertainties, and the
smallest useful corrections. Do not edit it.
```

为了得到稳定结果，请同时提供：设计对象与目标、必须保留的内容、必要结构或功能、尺寸与技术限制，以及期望的交付格式。基座只定义“如何看起来”，不会替用户发明内容策略、产品功能或媒介规格。

### 示例

下面的开源发布海报由基座视觉语言组织：中性表面建立主体，紫色只承担识别与关系信号，内容通过层级、细线与空间形成一条明确阅读轴。

![Quiet Signal 基座设计示例](docs/assets/quiet-signal-open-source-poster.png)

核心规范见 [`skills/quiet-signal-design/references/SPEC.md`](skills/quiet-signal-design/references/SPEC.md)。

## 2. 小红书：`quiet-signal-xhs`

`quiet-signal-xhs` 把中文文字、文章、URL 或用户指定的页面计划制作成 1080×1440（3:4）图文系列。它会完成必要的内容理解与分页、可编辑实现、逐页渲染和最终视觉 QA，同时保留事实、限定条件、来源和用户已经锁定的文案。

### 用法

```text
Use $quiet-signal-xhs to turn this article into a polished 1080×1440 Xiaohongshu
image-card series. Preserve all facts and sources. Deliver editable source, every
final PNG, and a contact sheet.
```

如果页数、顺序或某页文案已经确定，请直接在提示中写明；Skill 会保留这些决定，只处理尚未锁定的部分。

### 示例：云南旅行

22 页旅行图文同时使用路线、时间线、比较、清单和目的地图片页。变化来自内容关系，统一感来自稳定的字体、颜色、边距、来源与页码系统。

![Quiet Signal 云南旅行小红书 22 页总览](skills/quiet-signal-xhs/references/demos/yunnan-travel.png)

### 更多小红书示例

纯文字内容不依赖装饰图片，也可以通过层级、编号、细线和有限信号色形成完整阅读路径。

![Quiet Signal 纯文字 AI 新闻小红书总览](skills/quiet-signal-xhs/references/demos/pure-text-ai-news.png)

科学内容则用真实图片承担现场或证据角色，并明确区分事实、推测与限制。

![Quiet Signal NASA 月球微生物小红书总览](skills/quiet-signal-xhs/references/demos/nasa-moon-science.png)

媒介规范、演示索引与可运行源码位于 [`skills/quiet-signal-xhs/references/`](skills/quiet-signal-xhs/references/)。演示是视觉与生产证据，不是固定模板。

## 3. 长篇报告：`quiet-signal-reports`

`quiet-signal-reports` 面向需要完整解释、证据边界和来源账本的长篇内容。可编辑 HTML/CSS 是排版源，A4 PDF 是正式交付物，逐页 PNG 与总览图是视觉验收证据。

### 用法

```text
Use $quiet-signal-reports to turn these sources into a source-backed A4 report.
Keep the full reasoning and limitations. Deliver editable HTML/CSS, a source ledger,
the final PDF, rendered page PNGs, and a contact sheet.
```

### 示例：月球南极微生物长篇报告

该示例包含 26 页 A4 内容，展示连续正文、机制说明、证据照片、条件表、比较关系、底部补充层与来源系统如何在同一份报告中共存。

![Quiet Signal 月球南极微生物 26 页报告总览](skills/quiet-signal-reports/references/demos/lunar-microbe-longform.png)

完整 HTML/CSS、来源账本与本地图片位于 [`skills/quiet-signal-reports/references/implementations/lunar-microbe-longform/`](skills/quiet-signal-reports/references/implementations/lunar-microbe-longform/)。

### 渲染依赖

- Node.js、`playwright-core` 与 Chrome/Chromium：生成 PDF；
- Python 3、Pillow 与 Poppler 的 `pdftoppm`：生成逐页 PNG 和总览图。

从 `skills/quiet-signal-reports` 目录运行：

```bash
node scripts/render_report.mjs \
  --input references/implementations/lunar-microbe-longform/index.html \
  --output /path/to/output/quiet-signal-report.pdf \
  --expected-pages 26

python3 scripts/render_review.py \
  --pdf /path/to/output/quiet-signal-report.pdf \
  --output-dir /path/to/output/review
```

运行任一脚本的 `--help` 可查看完整参数。

## 设计原则

- **信号优先于装饰**：每个醒目元素都应说明它在提示什么。
- **层级优先于容器**：先用字号、字重、对齐、邻近和空间组织信息。
- **紫色必须有语义**：紫色只用于品牌、焦点、选择和关键变化。
- **留白必须有作用**：留白用于暂停、聚焦、呼吸或转场。
- **面积服从内容重量**：不为填满画布制造空洞标题、卡片或图表。
- **可访问性不可让步**：不依赖颜色单独表达状态，优先保证清晰与可读。

Quiet Signal 不默认使用紫色渐变、玻璃拟态、装饰性 3D、层层圆角、卡片墙、假仪表盘或无意义循环动效。

## 仓库结构

```text
quiet-signal/
├── docs/assets/                    # README 与发布素材
├── skills/
│   ├── quiet-signal-design/        # 核心视觉语言与规范
│   ├── quiet-signal-xhs/           # 小红书生产、演示与完整实现
│   └── quiet-signal-reports/       # 长篇报告生产、渲染脚本与完整实现
├── LICENSE
└── README.md
```

每个 Skill 都包含其正常工作直接依赖的规范、参考实现和参考素材。外部测试输出、研究材料和未发布的内部开发文档不属于本仓库。

## 贡献

欢迎通过 Issue 报告问题、提出媒介适配建议，或通过 Pull Request 改进文档与实现。提交前请注意：

1. 不要把单次作品的局部构图直接升级为核心规则；
2. 新增或修改核心视觉规则时，说明语义、适用条件、禁止用法与版本影响；
3. 新增示例时保留来源和授权信息，不提交无权公开的图片或内容；
4. 修改小红书或报告实现后，重新渲染全部页面并检查总览与全尺寸结果。

## License

本项目采用 [MIT License](LICENSE)。

MIT License 适用于本仓库原创的代码与文档。演示中引用的新闻内容、商标与第三方图片仍归各自权利人所有；其来源和署名保留在对应实现与来源账本中，不因收录于本仓库而改变授权范围。
