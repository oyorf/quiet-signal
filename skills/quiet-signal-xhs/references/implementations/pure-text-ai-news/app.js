const sourceBase = 'OpenAI 2026-08-18｜AP / Reuters / KQED，检索于 2026-08-23';

const meta = (page, label) => `
  <header class="topline">
    <span class="signal">AI NEWS / ${label}</span>
    <span>${String(page).padStart(2,'0')} / 07</span>
  </header>`;

const footer = (source = sourceBase) => `
  <footer class="footer">
    <span class="source">${source}</span>
    <span class="brand">QUIET SIGNAL</span>
  </footer>`;

const cards = [
  `<section class="card cover" data-qs-frame="cover" aria-label="封面：ChatGPT 开始为青少年单独设规则">
    ${meta(1,'OPENAI')}
    <div class="cover-main">
      <div class="cover-label">CHATGPT FOR TEENS</div>
      <h1><span>ChatGPT</span><span>开始为青少年</span><span class="accent">单独设规则</span></h1>
      <div class="age-row"><strong>13–17</strong><span>被识别或自报为这个年龄段的用户，会进入专门体验。</span></div>
      <p class="cover-note">这不只是“多几个家长控制”，而是把学习、安全与关系边界写进默认行为。</p>
    </div>
    ${footer('OpenAI 官方发布｜2026-08-18')}
  </section>`,

  `<section class="card" data-qs-frame="facts" aria-label="发布事实">
    ${meta(2,'WHAT HAPPENED')}
    <h2 class="title">先别急着评价，<br>这次到底<span class="accent">改了什么</span></h2>
    <p class="intro">OpenAI 发布的不是一个单独 App，而是一套面向未成年用户的默认体验。</p>
    <div class="fact-list">
      <div class="fact-row"><span class="num">01</span><h3>适用对象</h3><p>用户自报为 13–17 岁，或系统估计其未满 18 岁。</p></div>
      <div class="fact-row"><span class="num">02</span><h3>自动进入</h3><p>符合条件的账号会被放入 ChatGPT for Teens，而不是等待家长手动开启。</p></div>
      <div class="fact-row"><span class="num">03</span><h3>默认保护</h3><p>高风险内容、关系表达与健康使用提醒从一开始就生效。</p></div>
      <div class="fact-row"><span class="num">04</span><h3>附加控制</h3><p>关联家长账号后，可以再设置安静时段、部分选项和有限风险通知。</p></div>
    </div>
    <div class="fact-strip"><b>关键变化：保护从“可选设置”前移到“默认体验”。</b><span>18 AUG 2026</span></div>
    ${footer('OpenAI 官方发布；Reuters｜2026-08-18')}
  </section>`,

  `<section class="card" data-qs-frame="learning" aria-label="学习路径">
    ${meta(3,'LEARNING')}
    <h2 class="title">它最先改的不是答案，<br>而是<span class="accent">作业路径</span></h2>
    <p class="intro">当系统判断用户正在绕过作业过程时，目标不是直接拒绝，而是把人带回“自己完成”的路径。</p>
    <div class="learning-path">
      <div class="learning-stage">
        <small class="learning-label">INPUT</small>
        <b class="learning-line line-one">我只想要</b>
        <b class="learning-line line-two">最终答案</b>
        <div class="flow-arrow" aria-hidden="true"><svg viewBox="0 0 40 24"><path d="M3 12h34M30 5l7 7-7 7"/></svg></div>
      </div>
      <div class="learning-stage">
        <small class="learning-label">REDIRECT</small>
        <b class="learning-line line-one">拆成步骤</b>
        <b class="learning-line line-two">继续追问</b>
        <div class="flow-arrow" aria-hidden="true"><svg viewBox="0 0 40 24"><path d="M3 12h34M30 5l7 7-7 7"/></svg></div>
      </div>
      <div class="learning-stage learning-stage-final">
        <small class="learning-label">OUTPUT</small>
        <b class="learning-line line-one">检查理解</b>
        <b class="learning-line line-two">自己作答</b>
      </div>
    </div>
    <div class="learning-notes">
      <div class="learning-note"><b>Study Mode</b><p>用引导问题和分步支持解释概念。</p></div>
      <div class="learning-note"><b>作业提醒</b><p>识别“走捷径”倾向，再引导回学习模式。</p></div>
      <div class="learning-note"><b>测验与可视化</b><p>练习、检查理解，并把难概念表现得更清楚。</p></div>
      <div class="learning-note"><b>Study Hours</b><p>在设定时段内默认开启学习模式。</p></div>
    </div>
    <div class="learning-claim">它想把 ChatGPT 从“答案机器”，改成一个会迫使你参与过程的学习工具。</div>
    ${footer('OpenAI 官方发布｜学习功能为产品设计目标，不等于学习效果已经得到长期验证')}
  </section>`,

  `<section class="card" data-qs-frame="safety" aria-label="安全保护分层">
    ${meta(4,'SAFETY')}
    <h2 class="title">安全保护不只是在<br>敏感词上<span class="accent">加限制</span></h2>
    <p class="intro">这次发布把青少年风险拆成三层：看什么、怎样建立关系、使用多久。</p>
    <div class="guardrails">
      <div class="guardrail"><h3><span>LAYER 01</span>高风险内容</h3><p>对自伤、暴力、进食障碍、危险活动，以及露骨或图形化内容采用更严格的年龄适配保护。</p></div>
      <div class="guardrail"><h3><span>LAYER 02</span>关系边界</h3><p>不应使用浪漫语言，不鼓励情感依赖，也不暗示自己拥有感受、意识或真实情绪。</p></div>
      <div class="guardrail"><h3><span>LAYER 03</span>使用习惯</h3><p>增加休息提醒、敏感图片上传提示，并持续把 ChatGPT 标识为 AI，而不是现实关系的替代品。</p></div>
    </div>
    <div class="boundary-band"><b>设计意图</b><p>不是只阻止危险回答，也要减少用户把聊天机器人误认成亲密关系对象。</p></div>
    ${footer('OpenAI Under-18 Model Spec 与 ChatGPT for Teens 发布说明｜2026-08-18')}
  </section>`,

  `<section class="card" data-qs-frame="parents" aria-label="家长控制与隐私边界">
    ${meta(5,'PARENTS + PRIVACY')}
    <h2 class="title">家长能收到提醒，<br>但不能直接<span class="accent">翻聊天记录</span></h2>
    <p class="intro">家长控制与青少年隐私并不是同一个方向。产品选择的是“风险时介入”，而不是“每句话都监控”。</p>
    <div class="parent-grid">
      <div class="parent-col"><h3>家长可以做</h3><ul><li>关联青少年账号</li><li>设置 Quiet Hours</li><li>管理部分设置</li><li>在有限高风险情形收到通知</li></ul></div>
      <div class="parent-col"><h3>家长看不到</h3><ul><li>默认查看每一条对话</li><li>把所有内容持续同步到家长端</li><li>只凭产品提醒替代现实沟通</li><li>保证系统永远不会判断错误</li></ul></div>
    </div>
    <div class="privacy-note"><b>真正的边界</b><p>OpenAI把重点放在真实风险提示，同时保留青少年的成长空间；但家长控制需要关联账号，保护效果仍取决于识别与执行。</p></div>
    ${footer('OpenAI；Indian Express 采访；AP｜家长控制与隐私边界，2026-08-18 至 2026-08-21')}
  </section>`,

  `<section class="card" data-qs-frame="data" aria-label="青少年使用 AI 的数据背景">
    ${meta(6,'WHY NOW')}
    <h2 class="title">真正的压力来自：<br>AI 已经进入<span class="accent">日常作业</span></h2>
    <p class="intro">这不是“要不要允许”的未来问题。美国一项超过 1,000 名青少年的调查显示，使用已经发生，争议集中到“怎样使用”。</p>
    <div class="data-ledger">
      <div class="data-row"><strong>7/10</strong><p>青少年表示正在使用 AI 完成学校作业。<span>使用已经成为日常行为，而不是少数尝试。</span></p></div>
      <div class="data-row"><strong>63%</strong><p>使用 AI 做作业的学生，会以某种形式从工具获得答案。<span>真正的问题是答案在学习过程中扮演什么角色。</span></p></div>
      <div class="data-row"><strong>38%</strong><p>AI 使用者表示，可用工具让自己产生了更少的原创想法。<span>效率可能同时削弱“从空白开始”的能力。</span></p></div>
      <div class="data-row"><strong>2/3</strong><p>认为 AI 帮助理解作业；但接近四成也感觉自己错过了学习。<span>帮助与替代可以同时发生。</span></p></div>
    </div>
    <div class="data-conclusion">这正是青少年模式最难的一点：它必须提高可用性，同时故意保留一部分“思考的摩擦”。</div>
    ${footer('KQED 转述 Common Sense Media 调查｜2026-08-18；样本为美国青少年')}
  </section>`,

  `<section class="card closing" data-qs-frame="closing" aria-label="结论与未解决问题">
    ${meta(7,'WHAT IT MEANS')}
    <h2 class="title">这不是“安全了”，<br>而是默认规则终于<br><span class="accent">开始区分年龄</span></h2>
    <p class="intro">发布值得关注，但“产品写了保护”与“保护真实有效”之间，还有一段必须被验证的距离。</p>
    <div class="closing-grid">
      <div class="closing-col"><h3>它改变了</h3><p>未成年用户不再默认获得与成人完全相同的体验。</p><p>学习功能开始主动阻止一部分“直接交答案”的路径。</p><p>关系表达与高风险内容获得更明确的默认边界。</p></div>
      <div class="closing-col"><h3>它没有解决</h3><p>年龄预测是否准确，以及误判会怎样影响用户。</p><p>默认保护能否真正减少依赖、作弊和危险建议。</p><p>学校、家庭和现实支持是否会被产品功能替代。</p></div>
    </div>
    <div class="closing-statement">真正值得继续观察的，不是功能列表，而是它能不能让 AI <span>帮助学习，却不接管学习</span>。</div>
    ${footer('事实截至 2026-08-23｜保护有效性仍需独立、长期评估')}
  </section>`
];

document.getElementById('deck').innerHTML = cards.join('');
