# 完整实现索引

## 月球南极微生物长篇报告

- 总览图：`demos/lunar-microbe-longform.png`
- HTML：`implementations/lunar-microbe-longform/index.html`
- CSS：`implementations/lunar-microbe-longform/styles.css`
- 来源账本：`implementations/lunar-microbe-longform/sources.md`
- 本地图片：`implementations/lunar-microbe-longform/assets/`

这是用户逐轮审核并认可的 26 页 A4 完整实现。开始新报告前，至少完整阅读 HTML、CSS 和来源账本，并打开总览图；需要理解某个页面关系时，再查看对应的全尺寸渲染页。

应学习：字号尺度、连续正文密度、页面主轴、内容驱动的栏关系、底部补充层、来源/页码系统、图片相对路径和 HTML 到 PDF 的真实渲染方式。

不得复制：固定 26 页页序、月球题材、固定段落数量、绝对坐标、每页都使用同一种组件，或把示例当成不可修改的模板。

从 Skill 目录运行：

```bash
node scripts/render_report.mjs \
  --input references/implementations/lunar-microbe-longform/index.html \
  --output /path/to/output/quiet-signal-lunar-microbe-longform-report.pdf \
  --expected-pages 26

python3 scripts/render_review.py \
  --pdf /path/to/output/quiet-signal-lunar-microbe-longform-report.pdf \
  --output-dir /path/to/output/review
```
