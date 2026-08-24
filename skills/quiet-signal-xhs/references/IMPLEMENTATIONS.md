# 小红书实现参考索引

本文件把视觉演示连接到生成它们的真实 HTML、CSS 和 JavaScript。新建或大幅改版时，先通过 `DEMOS.md` 选择最相关的一到两个演示，再完整读取对应实现目录中的三个文件。实现所需的原始图片也保留在对应目录中，因此这些参考可以直接渲染，而不只是代码片段。

## 云南旅行：图片驱动的连续叙事

- [index.html](implementations/yunnan-travel/index.html)
- [styles.css](implementations/yunnan-travel/styles.css)
- [app.js](implementations/yunnan-travel/app.js)

重点观察图片区域如何获得叙事角色，不同内容关系如何产生不同结构，以及整组如何通过稳定页头、页脚、字体、颜色和安全边距保持统一。

## 纯文字 AI 新闻：说明、分点与信息密度

- [index.html](implementations/pure-text-ai-news/index.html)
- [styles.css](implementations/pure-text-ai-news/styles.css)
- [app.js](implementations/pure-text-ai-news/app.js)

重点观察纯文字页面如何通过字号、细线、编号、网格和纵向收束支撑完整画布，而不是用大容器放大短内容。

## NASA 月球微生物：照片、示意机制与证据边界

- [index.html](implementations/nasa-moon-science/index.html)
- [styles.css](implementations/nasa-moon-science/styles.css)
- [app.js](implementations/nasa-moon-science/app.js)

重点观察真实图片、CSS 示意图、事实边界、来源和结论如何共存，以及关系元素如何在最终画面中对齐。

## 使用边界

- 代码是实现证据，不是要复制的模板。
- 学习其中已经成立的尺度、空间、图文关系和渲染方法；不要继承固定页数、具体题材或页面顺序。
- 最终判断仍以当前内容关系和渲染后的像素结果为准。
