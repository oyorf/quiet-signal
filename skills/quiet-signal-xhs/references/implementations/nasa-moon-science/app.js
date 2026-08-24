const sourceBase = 'NASA Science｜Science Advances DOI: 10.1126/sciadv.aec0811｜事实截至 2026-08-23';

const meta = (page, label) => `
  <header class="topline">
    <span class="signal">SPACE BIOLOGY / ${label}</span>
    <span>${String(page).padStart(2,'0')} / 07</span>
  </header>`;

const footer = (source = sourceBase) => `
  <footer class="footer">
    <span class="source">${source}</span>
    <span class="brand">QUIET SIGNAL</span>
  </footer>`;

const cards = [
  `<section class="card cover" data-qs-frame="cover" aria-label="封面：我们登上月球时，也会把微生物带过去">
    <img class="cover-photo" src="assets/moon-earthset.jpg" alt="月球背面地平线上方露出一弯地球">
    ${meta(1,'MOON')}
    <div class="cover-copy">
      <p class="eyebrow">AUG 19 · 2026 / NASA STUDY</p>
      <h1>我们登上月球时，<br>也会把<span>微生物</span><br>带过去</h1>
      <p class="cover-deck">NASA 研究认为：月球南极的一些阴影角落，可能让人类携带的微生物至少存活一个地球日。</p>
      <div class="cover-boundary"><b>但这不等于</b><span>它们能繁殖，更不等于发现了月球生命。</span></div>
    </div>
    ${footer('图：Artemis II 航天员拍摄，NASA｜研究发表于 2026-08-19')}
  </section>`,

  `<section class="card" data-qs-frame="definition" aria-label="先纠正三个容易混淆的概念">
    ${meta(2,'READ THIS FIRST')}
    <h2 class="title">这条新闻最容易被<br><span class="accent">读错三个词</span></h2>
    <p class="intro">研究讨论的是人类带去的微生物能否短期留下，不是在宣布月球出现了生命。</p>
    <div class="definition-ledger">
      <div class="definition-row"><strong>存活</strong><div><b>至少保持生命状态 1 个地球日</b><p>这是研究采用的判断边界。</p></div></div>
      <div class="definition-row"><strong>生长</strong><div><b>没有证据表明它们能生长或繁殖</b><p>月球缺少液态水、适宜大气与温度等关键条件。</p></div></div>
      <div class="definition-row"><strong>月球生命</strong><div><b>研究对象来自地球与载人航天环境</b><p>它讨论的是污染控制，而不是外星生命发现。</p></div></div>
    </div>
    <div class="signal-statement">准确标题应该是：<b>“地球微生物可能在月球南极短期存活。”</b></div>
    ${footer('NASA Science｜“survive” 在研究中不代表 grow or reproduce')}
  </section>`,

  `<section class="card" data-qs-frame="shadow" aria-label="月球南极阴影为何可能成为存活区">
    ${meta(3,'WHY SOUTH POLE')}
    <h2 class="title">真正提供庇护的，<br>不是月球，而是<span class="accent">阴影</span></h2>
    <p class="intro">月球自转轴倾角很小。在两极，太阳像贴着地平线移动，微小地形也能挡住光。</p>
    <div class="terrain-art" role="img" aria-label="低角度阳光被山脊阻挡，在背面形成低温阴影区的示意图">
      <div class="sun"></div><span class="sun-label">低角度阳光</span>
      <div class="ray ray-a"></div><div class="ray ray-b"></div>
      <div class="ridge ridge-a"></div><div class="ridge ridge-b"></div>
      <div class="shadow-pocket"><b>阴影口袋</b><span>低温 · 少紫外线</span></div>
      <div class="terrain-caption">示意图｜不是按比例绘制</div>
    </div>
    <div class="cause-list">
      <div><span>01</span><b>地形遮光</b><p>坑壁、山脊甚至小凸起，都能挡住贴近地平线的太阳。</p></div>
      <div><span>02</span><b>降低辐射</b><p>阴影帮助脆弱分子与微生物避开致命紫外线。</p></div>
      <div><span>03</span><b>保持低温</b><p>永久或长时阴影还能保存水与挥发性物质。</p></div>
    </div>
    ${footer('NASA Science｜月球南极光照机制与“survivable niches”解释')}
  </section>`,

  `<section class="card" data-qs-frame="humans" aria-label="污染来自人类在场本身">
    ${meta(4,'WE BRING THEM')}
    <h2 class="title">污染不是任务失控，<br>而是<span class="accent">人类在场</span>的代价</h2>
    <div class="human-stat"><strong>1,000,000</strong><p>一块铅笔橡皮大小的皮肤上，平均约有这么多细菌。</p></div>
    <figure class="photo-block">
      <img src="assets/iss-microbe-sampling.jpg" alt="NASA 航天员 Kate Rubins 在国际空间站采集微生物样本">
      <figcaption><span>2016 · ISS</span>NASA 航天员 Kate Rubins 在国际空间站采集微生物样本。图：JAXA / Takuya Onishi</figcaption>
    </figure>
    <div class="human-notes">
      <p><b>来源</b>微生物会从皮肤、航天服和居住舱环境中逸出。</p>
      <p><b>限制</b>机器人可以高温灭菌；载人任务不可能把航天员按同样方式处理。</p>
    </div>
    ${footer('NASA Science｜皮肤细菌数量为报道中的平均示例')}
  </section>`,

  `<section class="card" data-qs-frame="method" aria-label="研究如何推算可存活区域">
    ${meta(5,'HOW THEY TESTED')}
    <h2 class="title">研究没有把微生物<br>直接送上<span class="accent">月球</span></h2>
    <p class="intro">它把已知耐受极限与月球南极环境数据叠加，推算哪里可能出现“可存活生态位”。</p>
    <div class="method-rail">
      <div class="method-row"><span>01</span><div><b>选微生物</b><p>5 类来自人体或航天环境的细菌与真菌，包括耐紫外线较强的黑曲霉。</p><small>MICROBES</small></div></div>
      <div class="method-row"><span>02</span><div><b>定耐受边界</b><p>整理既有研究中，每类微生物能够承受的最高温度与紫外线剂量。</p><small>HEAT + UV</small></div></div>
      <div class="method-row"><span>03</span><div><b>叠加月表环境</b><p>使用月球勘测轨道器的高程、温度数据，再加入辐射模型。</p><small>LRO DATA</small></div></div>
      <div class="method-row"><span>04</span><div><b>模拟三个地点</b><p>Nobile Rim、Connecting Ridge 与 De Gerlache Rim。</p><small>3 SITES</small></div></div>
    </div>
    <div class="scale-result"><b>结果尺度</b><span>从约一英里宽的坑底，到一枚航天员靴印大小。</span></div>
    ${footer('NASA Science；Science Advances｜环境模拟结果，不是月面实地培养实验')}
  </section>`,

  `<section class="card" data-qs-frame="evidence" aria-label="真正风险是未来证据被污染">
    ${meta(6,'THE REAL RISK')}
    <h2 class="title">真正要保护的，<br>是未来证据的<span class="accent">出处</span></h2>
    <p class="intro">如果先没有记录“人来之前有什么”，以后发现微生物或化学信号，就可能说不清它来自月球还是航天员。</p>
    <div class="evidence-axis">
      <div class="evidence-phase"><small>BEFORE ARRIVAL</small><strong>建立基线</strong><p>记录原始月壤、挥发物、化学信号与已知污染物。</p></div>
      <div class="axis-mark"><span></span><b>人类抵达</b></div>
      <div class="evidence-phase"><small>AFTER ARRIVAL</small><strong>持续追踪</strong><p>记录航天服、栖息舱与活动带来的微生物变化。</p></div>
    </div>
    <div class="evidence-ledger">
      <div><b>不做基线</b><p>未来信号可能失去可解释性。</p></div>
      <div><b>做好基线</b><p>月球反而能成为研究极端环境存活的天然实验室。</p></div>
      <div><b>更远影响</b><p>这套污染控制经验最终会用于火星生命搜索。</p></div>
    </div>
    <div class="quote-band">“先知道那里原本有什么，才能确认后来发现的东西是不是我们带去的。”</div>
    ${footer('NASA Science｜planetary protection 与 contamination baseline')}
  </section>`,

  `<section class="card closing" data-qs-frame="closing" aria-label="结论：这不是月球生命新闻">
    ${meta(7,'WHAT IT MEANS')}
    <h2 class="title">这不是月球生命新闻，<br>而是一条<span class="accent">探索伦理</span>新闻</h2>
    <p class="intro">人类越接近长期驻留月球，就越需要承认：观察者本身也会改变被观察的地方。</p>
    <div class="takeaway-stack">
      <div><span>01</span><b>可能发生</b><p>一些地球微生物可能在南极阴影中保持休眠并短期存活。</p></div>
      <div><span>02</span><b>没有发生</b><p>没有证据表明它们能在月球生长，也没有发现月球原生生命。</p></div>
      <div><span>03</span><b>现在要做</b><p>在载人活动改变现场之前，先留下可信、可比较的环境基线。</p></div>
    </div>
    <div class="closing-statement">我们带去的不只是设备和脚印，<br>还有一个必须被记录的<span>地球背景</span>。</div>
    ${footer('NASA Science｜研究发表于 Science Advances，2026-08-19')}
  </section>`
];

document.getElementById('deck').innerHTML = cards.join('');
