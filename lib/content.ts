export type Locale = "en" | "zh";

export type Bilingual = { en: string; zh: string };

export type Topic = {
  slug: string;
  title: Bilingual;
  summary: Bilingual;
};

export type Unit = {
  slug: string;
  number: number;
  title: Bilingual;
  description: Bilingual;
  topics: Topic[];
};

export type Subject = {
  slug: string;
  title: Bilingual;
  tagline: Bilingual;
  units: Unit[];
};

export type NoteBlock =
  | { kind: "heading"; text: Bilingual }
  | { kind: "paragraph"; text: Bilingual }
  | { kind: "callout"; label: Bilingual; text: Bilingual }
  | { kind: "list"; items: Bilingual[] }
  | { kind: "chart"; chartType: "supply-demand" | "ppc" }
  | {
      kind: "table";
      caption: Bilingual;
      columns: Bilingual[];
      rows: Bilingual[][];
      highlightLastRow?: boolean;
    };

export type QuestionChoice = {
  id: string;
  text: Bilingual;
};

export type Question = {
  id: string;
  prompt: Bilingual;
  figure?: NoteBlock;
  choices: QuestionChoice[];
  answerId: string;
  explanation: Bilingual;
};

export const apMicro: Subject = {
  slug: "ap-micro",
  title: { en: "AP Microeconomics", zh: "AP 微观经济学" },
  tagline: {
    en: "How individuals, firms, and markets make decisions.",
    zh: "个人、企业与市场如何进行决策。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "Basic Economic Concepts", zh: "基本经济概念" },
      description: {
        en: "Scarcity, opportunity cost, PPC, comparative advantage, and the core questions every economy must answer.",
        zh: "稀缺、机会成本、生产可能性曲线、比较优势,以及每个经济体都必须回答的核心问题。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Scarcity", zh: "稀缺性" },
          summary: {
            en: "Why resources are limited while wants are unlimited — and why every choice has a cost.",
            zh: "为什么资源是有限的,而人类的欲望是无限的——以及为什么每个选择都有成本。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Opportunity Cost", zh: "机会成本" },
          summary: {
            en: "Measuring what a choice actually gave up — both cash and the resources you already owned.",
            zh: "衡量一个选择真正放弃了什么——既包括现金,也包括你已经拥有的资源。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Production Possibilities Curve", zh: "生产可能性曲线" },
          summary: {
            en: "A graph that shows scarcity, efficiency, and the rising cost of trade-offs at a glance.",
            zh: "一张图同时展示稀缺、效率,以及取舍成本为何递增。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Comparative Advantage & Trade", zh: "比较优势与贸易" },
          summary: {
            en: "Why two producers can gain from trade — even when one is better at everything.",
            zh: "为什么即使一方在所有方面都更强,两个生产者仍能从贸易中获益。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Economic Systems", zh: "经济体制" },
          summary: {
            en: "Market, command, and mixed economies compared — who decides what, how, and for whom.",
            zh: "市场经济、计划经济与混合经济的比较——谁来决定「生产什么、如何生产、为谁生产」。",
          },
        },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Supply & Demand", zh: "供给与需求" },
      description: {
        en: "How prices are determined in competitive markets — and what happens when government intervenes.",
        zh: "价格在竞争市场中如何决定——以及当政府介入时会发生什么。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Demand", zh: "需求" },
          summary: {
            en: "The law of demand, the demand curve, and what shifts it vs. what moves along it.",
            zh: "需求法则、需求曲线,以及什么使曲线移动、什么只是沿曲线移动。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Supply", zh: "供给" },
          summary: {
            en: "The law of supply and the factors that shift the supply curve.",
            zh: "供给法则,以及使供给曲线移动的因素。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Market Equilibrium", zh: "市场均衡" },
          summary: {
            en: "How supply and demand together determine price — and the four-combo shift rule.",
            zh: "供给与需求如何共同决定价格——以及四种移动组合规则。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Price Elasticity", zh: "价格弹性" },
          summary: {
            en: "Measuring how responsive quantity is to price — and what it means for revenue.",
            zh: "衡量数量对价格变化的敏感程度——及其对收益的影响。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Government Intervention", zh: "政府干预" },
          summary: {
            en: "Price ceilings, price floors, and per-unit taxes — and the deadweight loss they create.",
            zh: "价格上限、价格下限与单位税——以及它们所造成的无谓损失。",
          },
        },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Production, Cost & Perfect Competition", zh: "生产、成本与完全竞争" },
      description: {
        en: "How firms turn inputs into output, what costs they face, and how perfectly competitive firms maximize profit.",
        zh: "企业如何将投入变为产出、面临哪些成本,以及完全竞争企业如何实现利润最大化。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Production & Diminishing Returns", zh: "生产与边际收益递减" },
          summary: {
            en: "The production function, marginal product, and why marginal product eventually falls.",
            zh: "生产函数、边际产量,以及边际产量为何最终下降。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Short-Run Costs", zh: "短期成本" },
          summary: {
            en: "Fixed, variable, total and marginal costs — and the U-shapes of ATC, AVC, and MC.",
            zh: "固定成本、可变成本、总成本、边际成本——以及 ATC、AVC、MC 的 U 形结构。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Long-Run Costs & Economies of Scale", zh: "长期成本与规模经济" },
          summary: {
            en: "The LRATC envelope, economies of scale, and minimum efficient scale.",
            zh: "长期平均成本包络线、规模经济与最小有效规模。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Profit Maximization (MR = MC)", zh: "利润最大化(MR = MC)" },
          summary: {
            en: "Why every profit-maximizing firm produces where marginal revenue equals marginal cost.",
            zh: "为什么所有追求利润最大化的企业都在边际收益等于边际成本的产量处生产。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Perfect Competition", zh: "完全竞争" },
          summary: {
            en: "The price-taking firm, short-run profit/loss, and long-run zero economic profit.",
            zh: "价格接受者企业、短期利润/亏损,以及长期零经济利润。",
          },
        },
      ],
    },
    { slug: "unit-4", number: 4, title: { en: "Imperfect Competition", zh: "不完全竞争" }, description: { en: "Monopoly, oligopoly, and monopolistic competition.", zh: "垄断、寡头与垄断竞争。" }, topics: [] },
    { slug: "unit-5", number: 5, title: { en: "Factor Markets", zh: "要素市场" }, description: { en: "Labor, capital, and the marginal productivity theory of distribution.", zh: "劳动、资本,以及边际生产力分配理论。" }, topics: [] },
    { slug: "unit-6", number: 6, title: { en: "Market Failure & the Role of Government", zh: "市场失灵与政府的角色" }, description: { en: "Externalities, public goods, and inequality.", zh: "外部性、公共物品与不平等。" }, topics: [] },
  ],
};

// ============================================================
// Notes — keyed by `${unitSlug}/${topicSlug}`
// ============================================================

export const topicNotes: Record<string, NoteBlock[]> = {
  // --------- Unit 1 · Topic 1 · Scarcity ---------
  "unit-1/topic-1": [
    {
      kind: "table",
      caption: {
        en: "A student's Saturday — 10 hours to spend, but more wants than hours",
        zh: "某学生的周六——共有 10 小时可支配,但想做的事远超 10 小时",
      },
      columns: [
        { en: "What the student wants to do", zh: "想做的事" },
        { en: "Hours it would take", zh: "所需小时数" },
      ],
      rows: [
        [{ en: "Review AP Micro unit", zh: "复习 AP 微观经济学单元" }, { en: "6 hrs", zh: "6 小时" }],
        [{ en: "Sleep in", zh: "睡个懒觉" }, { en: "4 hrs", zh: "4 小时" }],
        [{ en: "Gaming with friends", zh: "和朋友打游戏" }, { en: "3 hrs", zh: "3 小时" }],
        [{ en: "Part-time job shift", zh: "兼职轮班" }, { en: "6 hrs", zh: "6 小时" }],
        [{ en: "Total hours wanted", zh: "想做的事合计" }, { en: "19 hrs", zh: "19 小时" }],
        [{ en: "Hours actually available", zh: "实际可用时间" }, { en: "only 10 hrs", zh: "仅 10 小时" }],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "The student wants 19 hours' worth of things but has only 10. That gap between wants and resources is **scarcity**. It forces every student, household, and country to **choose** — because any hour spent on one activity is an hour that cannot be spent on another.",
        zh: "这名学生想做的事需要 19 小时,但实际只有 10 小时。想做的与实际拥有之间的差距,就是**稀缺**。正因为如此,每个学生、家庭、国家都必须**做出选择**——花在一件事上的每一小时,都是从另一件事上抽走的一小时。",
      },
    },
    {
      kind: "callout",
      label: { en: "Scarcity vs. shortage", zh: "稀缺 vs. 短缺" },
      text: {
        en: "A **shortage** is **temporary** — it happens when quantity demanded exceeds quantity supplied at the current price, and disappears when the price rises. **Scarcity** is **permanent** — wants always exceed the resources available to satisfy them.",
        zh: "**短缺**是**暂时的**——当现价下的需求量超过供给量时出现,价格上升后就会消失。**稀缺**是**永久性的**——人的欲望永远多于可用于满足欲望的资源。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Because goods are scarce, markets use **price as the rationing tool**. The chart below shows how the price of a single good settles where buyers' willingness to buy meets sellers' willingness to sell — the **equilibrium point**.",
        zh: "由于商品稀缺,市场用**价格来进行分配**。下图显示:单一商品的价格会停在「买方愿意购买」与「卖方愿意出售」相遇的位置——**均衡点**。",
      },
    },
    { kind: "chart", chartType: "supply-demand" },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Opportunity Cost** — how to measure what a specific choice actually gave up.",
        zh: "下一节:**机会成本**——如何具体衡量一个选择究竟放弃了什么。",
      },
    },
  ],

  // --------- Unit 1 · Topic 2 · Opportunity Cost ---------
  "unit-1/topic-2": [
    {
      kind: "table",
      caption: {
        en: "Maya owns a truck and rents it out. She takes a weekend camping trip instead.",
        zh: "Maya 拥有一辆货车并对外出租。这个周末她决定自己用来露营。",
      },
      columns: [
        { en: "Cost type", zh: "成本类型" },
        { en: "Item", zh: "项目" },
        { en: "Amount", zh: "金额" },
      ],
      rows: [
        [
          { en: "Explicit (out-of-pocket)", zh: "显性(现金支出)" },
          { en: "Gas, food, campground fees", zh: "汽油、食物、营地费" },
          { en: "$80", zh: "80 美元" },
        ],
        [
          { en: "Implicit (resource forgone)", zh: "隐性(放弃的资源)" },
          { en: "Rental income she could have earned", zh: "本可赚取的租金" },
          { en: "$200", zh: "200 美元" },
        ],
        [
          { en: "Total economic cost", zh: "经济总成本" },
          { en: "Explicit + implicit", zh: "显性 + 隐性" },
          { en: "$280", zh: "280 美元" },
        ],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "Maya's camping trip costs her far more than the cash she spent. The **opportunity cost** of any choice is the **value of the next-best alternative given up** — and it combines both out-of-pocket spending and the value of resources she already owned but used up.",
        zh: "Maya 这趟露营的代价,远不止她花出去的现金。任何选择的**机会成本**,都是**放弃的次优选项的价值**——它同时包括现金支出,以及她本已拥有、却因此被占用的资源的价值。",
      },
    },
    {
      kind: "callout",
      label: { en: "Explicit vs. implicit cost", zh: "显性成本 vs. 隐性成本" },
      text: {
        en: "**Explicit costs** are cash payments (rent, wages, materials). **Implicit costs** are the value of resources you already own that the choice uses up (your time, your own capital, forgone wages). Economists subtract **both** from revenue to find economic profit; accountants only subtract the explicit ones.",
        zh: "**显性成本**是现金支出(房租、工资、原料)。**隐性成本**是你已经拥有、却因该选择被占用的资源的价值(你的时间、你自有的资本、放弃的工资)。经济学家把**两者都**从收入中扣除,得到经济利润;会计师只扣除显性的。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Sunk costs do NOT belong in opportunity-cost calculations",
        zh: "沉没成本「不」计入机会成本",
      },
      columns: [
        { en: "Situation", zh: "情境" },
        { en: "Amount", zh: "金额" },
        { en: "Counts as opportunity cost?", zh: "是否计入机会成本?" },
      ],
      rows: [
        [
          { en: "Already paid $15 for a movie ticket", zh: "已支付 15 美元的电影票" },
          { en: "$15", zh: "15 美元" },
          { en: "No — spent either way (sunk)", zh: "否——不管做什么都已花出(沉没)" },
        ],
        [
          { en: "Remaining 90 min of the movie", zh: "剩余 90 分钟的电影" },
          { en: "90 min", zh: "90 分钟" },
          { en: "Yes — could still leave and do something else", zh: "是——仍可离开去做别的事" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Rational decisions **ignore sunk costs** and compare only future benefits against future opportunity costs. Staying in a bad movie to \"not waste the ticket\" is the classic mistake.",
        zh: "理性决策**忽略沉没成本**,只比较未来收益与未来的机会成本。为了「不浪费票钱」而坐完一场差劲的电影,是典型的错误。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Production Possibilities Curve** — visualizing opportunity cost across a whole economy.",
        zh: "下一节:**生产可能性曲线**——在整个经济体的层面上把机会成本画出来。",
      },
    },
  ],

  // --------- Unit 1 · Topic 3 · PPC ---------
  "unit-1/topic-3": [
    { kind: "chart", chartType: "ppc" },
    {
      kind: "paragraph",
      text: {
        en: "The **Production Possibilities Curve (PPC)** shows every combination of two goods an economy can produce with current resources and technology. Point **A is efficient** — on the curve, no waste. Point **B is inefficient** — inside the curve, resources are idle. Point **C is unattainable** — outside the curve, the economy can't reach it with what it has today.",
        zh: "**生产可能性曲线(PPC)**显示一个经济体在现有资源和技术下,能生产出来的两种商品的所有组合。**A 点有效**——位于曲线上,没有浪费。**B 点无效**——在曲线内部,资源闲置。**C 点不可达**——在曲线外,以当前条件无法实现。",
      },
    },
    {
      kind: "callout",
      label: { en: "Why the PPC is bowed out", zh: "PPC 为什么向外凸" },
      text: {
        en: "A bowed-out (concave) PPC reflects **increasing opportunity cost**: resources aren't equally good at producing both goods. Shifting the first few workers from wheat to cars is cheap — they may be natural mechanics. Shifting the last few is expensive — those are your best farmers. A **straight-line** PPC would mean **constant opportunity cost** (resources are equally productive everywhere).",
        zh: "向外凸(凹形)的 PPC 反映**机会成本递增**:各种资源在生产两种商品上并非同样高效。把最初几名工人从小麦转去造汽车很「便宜」——他们可能本就是天然的机械手;把最后几名转过去就很「贵」——那些是最好的农夫。**直线型** PPC 则意味着**机会成本恒定**(资源在生产两种商品时生产率完全相同)。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "What moves the whole PPC vs. what moves you along it",
        zh: "什么使整条 PPC 移动,什么只是沿曲线移动" ,
      },
      columns: [
        { en: "Event", zh: "事件" },
        { en: "Effect on PPC", zh: "对 PPC 的影响" },
      ],
      rows: [
        [
          { en: "New manufacturing technology", zh: "新的制造技术" },
          { en: "Shifts outward (growth)", zh: "向外移动(经济增长)" },
        ],
        [
          { en: "Population / labor force increases", zh: "人口 / 劳动力增加" },
          { en: "Shifts outward", zh: "向外移动" },
        ],
        [
          { en: "Natural disaster destroys factories", zh: "自然灾害摧毁工厂" },
          { en: "Shifts inward", zh: "向内移动" },
        ],
        [
          { en: "Country makes more cars, fewer wheat", zh: "该国多造汽车、少产小麦" },
          { en: "Movement ALONG the curve, not a shift", zh: "沿曲线移动,不是整条曲线移动" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**Growth** shifts the entire PPC outward. **Reallocation** just moves the economy from one point on the curve to another — trading one good for another at the opportunity cost the curve shows.",
        zh: "**经济增长**使整条 PPC 向外移动。**重新分配**只是把经济体从曲线上的一点移动到另一点——按照曲线所显示的机会成本,用一种商品换另一种商品。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Comparative Advantage & Trade** — why specialization beats self-sufficiency, even between unequal producers.",
        zh: "下一节:**比较优势与贸易**——为什么即使是实力悬殊的生产者,专业化也胜过自给自足。",
      },
    },
  ],

  // --------- Unit 1 · Topic 4 · Comparative Advantage ---------
  "unit-1/topic-4": [
    {
      kind: "table",
      caption: {
        en: "Output per hour — how much each country can make in 1 hour",
        zh: "每小时产量——每个国家 1 小时能生产多少",
      },
      columns: [
        { en: "", zh: "" },
        { en: "Country A (output / hr)", zh: "A 国(每小时产量)" },
        { en: "Country B (output / hr)", zh: "B 国(每小时产量)" },
      ],
      rows: [
        [
          { en: "Wheat (bushels)", zh: "小麦(蒲式耳)" },
          { en: "6", zh: "6" },
          { en: "1", zh: "1" },
        ],
        [
          { en: "Cloth (yards)", zh: "布(码)" },
          { en: "2", zh: "2" },
          { en: "3", zh: "3" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Country A is better at wheat (6 > 1); Country B is better at cloth (3 > 2). Those are **absolute advantages**. But the deeper question is: at what **opportunity cost** does each country produce? That's what comparative advantage is about.",
        zh: "A 国擅长小麦(6 > 1);B 国擅长布(3 > 2)。这些是**绝对优势**。但更深的问题是:每个国家以多大的**机会成本**来生产?这正是比较优势所要回答的。",
      },
    },
    {
      kind: "callout",
      label: { en: "Absolute vs. comparative advantage", zh: "绝对优势 vs. 比较优势" },
      text: {
        en: "**Absolute advantage** = producing more with the same resources (who is more productive). **Comparative advantage** = producing at a **lower opportunity cost** (who gives up less of the other good). Trade is driven by comparative advantage, not absolute advantage.",
        zh: "**绝对优势** = 用相同资源生产更多(谁的生产率更高)。**比较优势** = 以**更低的机会成本**生产(谁放弃得更少)。贸易由比较优势驱动,而不是绝对优势。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Opportunity cost derived from the production table above",
        zh: "根据上方产量表推出的机会成本",
      },
      columns: [
        { en: "", zh: "" },
        { en: "OC of 1 wheat", zh: "1 单位小麦的机会成本" },
        { en: "OC of 1 cloth", zh: "1 单位布的机会成本" },
      ],
      rows: [
        [
          { en: "Country A", zh: "A 国" },
          { en: "1/3 cloth (lowest)", zh: "1/3 布(最低)" },
          { en: "3 wheat", zh: "3 小麦" },
        ],
        [
          { en: "Country B", zh: "B 国" },
          { en: "3 cloth", zh: "3 布" },
          { en: "1/3 wheat (lowest)", zh: "1/3 小麦(最低)" },
        ],
        [
          { en: "Specialize in →", zh: "专门生产 →" },
          { en: "A makes wheat", zh: "A 国生产小麦" },
          { en: "B makes cloth", zh: "B 国生产布" },
        ],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "A gives up **less cloth** per bushel of wheat; B gives up **less wheat** per yard of cloth. Both countries gain when each specializes and trades — as long as the **terms of trade** (the exchange ratio) fall **between** their opportunity costs: between 1/3 and 3 yards of cloth per bushel of wheat.",
        zh: "A 国每多产一单位小麦,**放弃的布更少**;B 国每多产一单位布,**放弃的小麦更少**。只要**贸易条件**(交换比率)**位于两国机会成本之间**——每蒲式耳小麦换 1/3 到 3 码布之间——双方专业化并贸易都能获益。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Economic Systems** — the final piece of Unit 1. Who decides what gets produced, how, and for whom?",
        zh: "下一节:**经济体制**——第 1 单元的最后一块拼图。到底由谁来决定「生产什么、如何生产、为谁生产」?",
      },
    },
  ],

  // --------- Unit 1 · Topic 5 · Economic Systems ---------
  "unit-1/topic-5": [
    {
      kind: "table",
      caption: {
        en: "Three economic systems — who decides what, how, and for whom",
        zh: "三种经济体制——由谁来决定「生产什么、如何生产、为谁生产」",
      },
      columns: [
        { en: "", zh: "" },
        { en: "Market", zh: "市场经济" },
        { en: "Command", zh: "计划经济" },
        { en: "Mixed", zh: "混合经济" },
      ],
      rows: [
        [
          { en: "Who decides?", zh: "由谁决定?" },
          { en: "Buyers & sellers", zh: "买家和卖家" },
          { en: "Central planner", zh: "中央计划者" },
          { en: "Both markets AND government", zh: "市场与政府共同参与" },
        ],
        [
          { en: "Who owns resources?", zh: "资源归谁所有?" },
          { en: "Private individuals", zh: "私人" },
          { en: "Government / state", zh: "政府 / 国家" },
          { en: "Mostly private, some public", zh: "以私有为主,部分公有" },
        ],
        [
          { en: "How are scarce goods allocated?", zh: "稀缺品如何分配?" },
          { en: "Price signals", zh: "价格信号" },
          { en: "Planner's decree", zh: "计划者的命令" },
          { en: "Prices + regulations + transfers", zh: "价格 + 监管 + 转移支付" },
        ],
        [
          { en: "Real-world example", zh: "现实中的例子" },
          { en: "No pure example", zh: "没有纯粹的例子" },
          { en: "Former Soviet Union, North Korea", zh: "前苏联、朝鲜" },
          { en: "USA, China, EU — every modern economy", zh: "美国、中国、欧盟——所有现代经济体" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**Every modern economy is mixed.** The difference between them is the **balance** — how much is left to private prices vs. how much the government directs. Pure market and pure command economies are textbook extremes, not real places.",
        zh: "**所有现代经济体都是混合经济**。它们之间的区别在于**比重**——多少交给私人价格,多少由政府引导。纯粹的市场经济和纯粹的计划经济是教科书上的极端情况,而不是真实的国家。",
      },
    },
    {
      kind: "callout",
      label: { en: "The invisible hand", zh: "看不见的手" },
      text: {
        en: "Adam Smith's **invisible hand**: when each buyer and seller pursues their own interest in a competitive market, **prices coordinate their decisions** so resources flow to their most-valued uses — even though no one planned it.",
        zh: "亚当·斯密的**看不见的手**:在竞争市场中,每个买家和卖家都追求自身利益时,**价格会协调他们的决策**,使资源流向最有价值的用途——尽管并无任何人对此进行规划。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Circular flow — who supplies what to whom",
        zh: "循环流——谁向谁供给什么",
      },
      columns: [
        { en: "Market", zh: "市场" },
        { en: "Households", zh: "家庭" },
        { en: "Firms", zh: "企业" },
      ],
      rows: [
        [
          { en: "Factor market (labor, land, capital)", zh: "要素市场(劳动、土地、资本)" },
          { en: "SUPPLY factors, earn income", zh: "**供给**要素,获得收入" },
          { en: "DEMAND factors, pay wages/rent", zh: "**需求**要素,支付工资/租金" },
        ],
        [
          { en: "Product market (goods & services)", zh: "产品市场(商品与服务)" },
          { en: "DEMAND goods, pay prices", zh: "**需求**商品,支付价格" },
          { en: "SUPPLY goods, earn revenue", zh: "**供给**商品,获得收入" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**Money** flows one way around the loop; **real goods and services** flow the other. Every dollar a firm pays in wages eventually comes back as revenue when the household buys goods.",
        zh: "**货币**沿一个方向循环流动;**实物商品与服务**则沿相反方向流动。企业支付的每一美元工资,最终都会以家庭购买商品时的收入形式回到企业手中。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That wraps Unit 1. Up next: **Unit 2 — Supply & Demand**, where prices go from an abstract concept to a graph you can actually draw on.",
        zh: "第 1 单元到此结束。下一单元:**第 2 单元——供给与需求**,价格从抽象概念变成一张你可以亲手画出来的图。",
      },
    },
  ],

  // --------- Unit 2 · Topic 1 · Demand ---------
  "unit-2/topic-1": [
    {
      kind: "table",
      caption: {
        en: "A demand schedule for pizza slices (in one city, per day)",
        zh: "披萨片的需求表(某城市每日)",
      },
      columns: [
        { en: "Price per slice", zh: "每片价格" },
        { en: "Quantity demanded (slices)", zh: "需求量(片)" },
      ],
      rows: [
        [{ en: "$2", zh: "$2" }, { en: "100", zh: "100" }],
        [{ en: "$4", zh: "$4" }, { en: "70", zh: "70" }],
        [{ en: "$6", zh: "$6" }, { en: "45", zh: "45" }],
        [{ en: "$8", zh: "$8" }, { en: "25", zh: "25" }],
        [{ en: "$10", zh: "$10" }, { en: "10", zh: "10" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "As price rises, quantity demanded falls. This is the **law of demand**. It holds because of the **substitution effect** (buyers switch to cheaper alternatives), the **income effect** (higher prices reduce real purchasing power), and **diminishing marginal utility** (each extra slice delivers less satisfaction).",
        zh: "价格上升,需求量下降。这是**需求法则**。它之所以成立,源于**替代效应**(买家转向更便宜的替代品)、**收入效应**(价格上升降低实际购买力)以及**边际效用递减**(每多一片带来的满足感减少)。",
      },
    },
    {
      kind: "callout",
      label: { en: "Movement along vs. shift of", zh: "沿曲线移动 vs. 曲线整体移动" },
      text: {
        en: "A change in the **good's own price** causes a **movement along** the same demand curve — that's a change in *quantity demanded*. A change in **anything else** (income, taste, a substitute's price, etc.) causes a **shift of** the entire curve — a change in *demand*.",
        zh: "**商品自身价格**变化 → **沿同一条曲线移动**——这是**需求量**的变化。**其他任何因素**变化(收入、偏好、替代品价格等)→ **整条曲线移动**——这是**需求**的变化。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "What shifts the demand curve — the TRIBE factors",
        zh: "使需求曲线移动的因素 —— TRIBE 法则",
      },
      columns: [
        { en: "Factor", zh: "因素" },
        { en: "Change", zh: "变化" },
        { en: "Effect on D", zh: "对需求的影响" },
      ],
      rows: [
        [{ en: "T — Tastes & preferences", zh: "T——偏好" }, { en: "Good becomes trendy", zh: "商品变得流行" }, { en: "Shift right (D↑)", zh: "右移(D↑)" }],
        [{ en: "R — Related goods (substitute)", zh: "R——相关品(替代品)" }, { en: "Substitute price rises", zh: "替代品价格上升" }, { en: "Shift right (D↑)", zh: "右移(D↑)" }],
        [{ en: "R — Related goods (complement)", zh: "R——相关品(互补品)" }, { en: "Complement price rises", zh: "互补品价格上升" }, { en: "Shift left (D↓)", zh: "左移(D↓)" }],
        [{ en: "I — Income (normal good)", zh: "I——收入(正常品)" }, { en: "Income rises", zh: "收入上升" }, { en: "Shift right (D↑)", zh: "右移(D↑)" }],
        [{ en: "I — Income (inferior good)", zh: "I——收入(劣等品)" }, { en: "Income rises", zh: "收入上升" }, { en: "Shift left (D↓)", zh: "左移(D↓)" }],
        [{ en: "B — Buyers (market size)", zh: "B——买家数量(市场规模)" }, { en: "More buyers enter", zh: "更多买家进入" }, { en: "Shift right (D↑)", zh: "右移(D↑)" }],
        [{ en: "E — Expectations", zh: "E——预期" }, { en: "Buyers expect higher future price", zh: "买家预期未来涨价" }, { en: "Shift right today (D↑)", zh: "今天右移(D↑)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Supply** — the other half of the price mechanism.",
        zh: "下一节:**供给**——价格机制的另一半。",
      },
    },
  ],

  // --------- Unit 2 · Topic 2 · Supply ---------
  "unit-2/topic-2": [
    {
      kind: "table",
      caption: {
        en: "A supply schedule for pizza slices (same city, per day)",
        zh: "披萨片的供给表(同一城市每日)",
      },
      columns: [
        { en: "Price per slice", zh: "每片价格" },
        { en: "Quantity supplied (slices)", zh: "供给量(片)" },
      ],
      rows: [
        [{ en: "$2", zh: "$2" }, { en: "20", zh: "20" }],
        [{ en: "$4", zh: "$4" }, { en: "40", zh: "40" }],
        [{ en: "$6", zh: "$6" }, { en: "55", zh: "55" }],
        [{ en: "$8", zh: "$8" }, { en: "75", zh: "75" }],
        [{ en: "$10", zh: "$10" }, { en: "90", zh: "90" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "As price rises, quantity supplied rises. This is the **law of supply**. Higher prices make production more **profitable**, so existing firms expand output AND new firms enter the market. It also **covers the rising marginal cost** of squeezing more output from fixed resources in the short run.",
        zh: "价格上升,供给量上升。这是**供给法则**。更高的价格使生产**更有利可图**,现有企业增产,新企业也进入市场。它同时**弥补**了短期内从固定资源中压榨更多产出所带来的**边际成本上升**。",
      },
    },
    {
      kind: "callout",
      label: { en: "Same movement-vs-shift rule", zh: "同样的「移动 vs. 整体移动」规则" },
      text: {
        en: "A change in the **good's own price** → **movement along** the supply curve (change in *quantity supplied*). A change in **anything else** → **shift of** the curve (change in *supply*). Same logic as demand.",
        zh: "**商品自身价格**变化 → **沿供给曲线移动**(**供给量**变化)。**其他任何因素**变化 → **整条曲线移动**(**供给**变化)。与需求的逻辑相同。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "What shifts the supply curve — the ROTTEN factors",
        zh: "使供给曲线移动的因素 —— ROTTEN 法则",
      },
      columns: [
        { en: "Factor", zh: "因素" },
        { en: "Change", zh: "变化" },
        { en: "Effect on S", zh: "对供给的影响" },
      ],
      rows: [
        [{ en: "R — Resource / input prices", zh: "R——资源 / 投入品价格" }, { en: "Flour price falls", zh: "面粉价格下降" }, { en: "Shift right (S↑)", zh: "右移(S↑)" }],
        [{ en: "O — Other goods' prices", zh: "O——其他商品价格" }, { en: "Calzone price rises (firm also makes calzones)", zh: "Calzone 价格上升(企业也做 Calzone)" }, { en: "Shift left (S↓, pizza)", zh: "左移(S↓,披萨)" }],
        [{ en: "T — Technology", zh: "T——技术" }, { en: "New faster oven", zh: "更快的新烤箱" }, { en: "Shift right (S↑)", zh: "右移(S↑)" }],
        [{ en: "T — Taxes & subsidies", zh: "T——税收与补贴" }, { en: "Per-unit tax on sellers", zh: "对卖方征单位税" }, { en: "Shift left (S↓)", zh: "左移(S↓)" }],
        [{ en: "E — Expectations", zh: "E——预期" }, { en: "Sellers expect higher future price", zh: "卖家预期未来涨价" }, { en: "Shift left today (S↓)", zh: "今天左移(S↓)" }],
        [{ en: "N — Number of sellers", zh: "N——卖家数量" }, { en: "New pizzeria opens", zh: "新披萨店开业" }, { en: "Shift right (S↑)", zh: "右移(S↑)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Market Equilibrium** — where supply and demand meet.",
        zh: "下一节:**市场均衡**——供给与需求的相遇之处。",
      },
    },
  ],

  // --------- Unit 2 · Topic 3 · Market Equilibrium ---------
  "unit-2/topic-3": [
    {
      kind: "table",
      caption: {
        en: "Pizza market: combining the demand and supply schedules",
        zh: "披萨市场:把需求表和供给表合在一起",
      },
      columns: [
        { en: "Price", zh: "价格" },
        { en: "Qd", zh: "Qd" },
        { en: "Qs", zh: "Qs" },
        { en: "Status", zh: "状态" },
      ],
      rows: [
        [{ en: "$2", zh: "$2" }, { en: "100", zh: "100" }, { en: "20", zh: "20" }, { en: "Shortage 80", zh: "短缺 80" }],
        [{ en: "$4", zh: "$4" }, { en: "70", zh: "70" }, { en: "40", zh: "40" }, { en: "Shortage 30", zh: "短缺 30" }],
        [{ en: "$5", zh: "$5" }, { en: "57", zh: "57" }, { en: "57", zh: "57" }, { en: "Equilibrium", zh: "均衡" }],
        [{ en: "$6", zh: "$6" }, { en: "45", zh: "45" }, { en: "55", zh: "55" }, { en: "Surplus 10", zh: "过剩 10" }],
        [{ en: "$8", zh: "$8" }, { en: "25", zh: "25" }, { en: "75", zh: "75" }, { en: "Surplus 50", zh: "过剩 50" }],
      ],
      highlightLastRow: false,
    },
    {
      kind: "paragraph",
      text: {
        en: "At **$5**, Qd = Qs = 57 — the market **clears**. Above $5, sellers can't move all their slices → surplus → they cut price. Below $5, buyers bid against each other → shortage → they bid price up. Only at the equilibrium price does pressure from both sides disappear.",
        zh: "**在 $5 处**,Qd = Qs = 57——市场**出清**。高于 $5,卖家卖不完 → 过剩 → 卖家降价。低于 $5,买家互相抢购 → 短缺 → 买家抬价。只有在均衡价格上,双方压力同时消失。",
      },
    },
    { kind: "chart", chartType: "supply-demand" },
    {
      kind: "callout",
      label: { en: "Four-combo shift rule", zh: "四种移动组合规则" },
      text: {
        en: "**D↑** → both **P and Q rise**. **D↓** → both fall. **S↑** → P falls, Q rises. **S↓** → P rises, Q falls. If **BOTH** curves shift, one of P or Q is determinate and the other is **ambiguous** (depends on the relative size of the shifts).",
        zh: "**D↑** → P 与 Q **都上升**。**D↓** → 两者都下降。**S↑** → P 下降、Q 上升。**S↓** → P 上升、Q 下降。若**两条曲线同时**移动,P 或 Q 中有一个确定、另一个**不确定**(取决于两次移动的相对幅度)。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Four-combo reference",
        zh: "四种组合速查",
      },
      columns: [
        { en: "Shift", zh: "移动" },
        { en: "Effect on P", zh: "对 P 的影响" },
        { en: "Effect on Q", zh: "对 Q 的影响" },
      ],
      rows: [
        [{ en: "Only D ↑", zh: "仅 D↑" }, { en: "↑", zh: "↑" }, { en: "↑", zh: "↑" }],
        [{ en: "Only D ↓", zh: "仅 D↓" }, { en: "↓", zh: "↓" }, { en: "↓", zh: "↓" }],
        [{ en: "Only S ↑", zh: "仅 S↑" }, { en: "↓", zh: "↓" }, { en: "↑", zh: "↑" }],
        [{ en: "Only S ↓", zh: "仅 S↓" }, { en: "↑", zh: "↑" }, { en: "↓", zh: "↓" }],
        [{ en: "D ↑ AND S ↑", zh: "D↑ 且 S↑" }, { en: "Ambiguous", zh: "不确定" }, { en: "↑", zh: "↑" }],
        [{ en: "D ↓ AND S ↓", zh: "D↓ 且 S↓" }, { en: "Ambiguous", zh: "不确定" }, { en: "↓", zh: "↓" }],
        [{ en: "D ↑ AND S ↓", zh: "D↑ 且 S↓" }, { en: "↑", zh: "↑" }, { en: "Ambiguous", zh: "不确定" }],
        [{ en: "D ↓ AND S ↑", zh: "D↓ 且 S↑" }, { en: "↓", zh: "↓" }, { en: "Ambiguous", zh: "不确定" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Price Elasticity** — measuring just how sensitive quantity is to price.",
        zh: "下一节:**价格弹性**——精确衡量数量对价格到底有多敏感。",
      },
    },
  ],

  // --------- Unit 2 · Topic 4 · Elasticity ---------
  "unit-2/topic-4": [
    {
      kind: "table",
      caption: {
        en: "Elasticity across price ranges on a linear demand curve",
        zh: "线性需求曲线上,不同价格区间的弹性",
      },
      columns: [
        { en: "Price range", zh: "价格区间" },
        { en: "%ΔP", zh: "%ΔP" },
        { en: "%ΔQd", zh: "%ΔQd" },
        { en: "Ed = |%ΔQd / %ΔP|", zh: "Ed = |%ΔQd / %ΔP|" },
        { en: "Type", zh: "类型" },
      ],
      rows: [
        [{ en: "$2 → $4", zh: "$2 → $4" }, { en: "+100%", zh: "+100%" }, { en: "−30%", zh: "−30%" }, { en: "0.30", zh: "0.30" }, { en: "Inelastic", zh: "缺乏弹性" }],
        [{ en: "$4 → $6", zh: "$4 → $6" }, { en: "+50%", zh: "+50%" }, { en: "−36%", zh: "−36%" }, { en: "0.71", zh: "0.71" }, { en: "Inelastic", zh: "缺乏弹性" }],
        [{ en: "$6 → $8", zh: "$6 → $8" }, { en: "+33%", zh: "+33%" }, { en: "−44%", zh: "−44%" }, { en: "1.33", zh: "1.33" }, { en: "Elastic", zh: "富有弹性" }],
        [{ en: "$8 → $10", zh: "$8 → $10" }, { en: "+25%", zh: "+25%" }, { en: "−60%", zh: "−60%" }, { en: "2.40", zh: "2.40" }, { en: "Elastic", zh: "富有弹性" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**Elasticity** = |percent change in Qd ÷ percent change in P|. **Ed > 1** = *elastic* (quantity is very responsive); **Ed < 1** = *inelastic* (quantity barely budges); **Ed = 1** = *unit elastic*. On a **linear** demand curve, Ed is **higher at the top** (high-price region) and lower near the bottom — the same curve passes through all three zones.",
        zh: "**弹性** = |Qd 的百分比变化 ÷ P 的百分比变化|。**Ed > 1** 为**富有弹性**(数量非常敏感);**Ed < 1** 为**缺乏弹性**(数量几乎不动);**Ed = 1** 为**单位弹性**。在**线性**需求曲线上,**高价区间 Ed 较高**、低价区间较低——同一条曲线会穿过三个区间。",
      },
    },
    {
      kind: "callout",
      label: { en: "What makes demand elastic?", zh: "什么使需求富有弹性?" },
      text: {
        en: "**Close substitutes available** (generic cola → elastic; insulin → inelastic). **Luxury vs. necessity** (yacht → elastic; rice → inelastic). **Large share of budget** (new car → elastic; salt → inelastic). **Longer time horizon** — people find substitutes over time.",
        zh: "**是否有相近替代品**(普通可乐→富有弹性;胰岛素→缺乏弹性)。**奢侈品 vs. 必需品**(游艇→富有弹性;大米→缺乏弹性)。**占预算的比例**(新车→富有弹性;盐→缺乏弹性)。**时间跨度越长**,人们越能找到替代品。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Total Revenue test — predict TR (= P × Q) without re-computing",
        zh: "总收益检验——不必重算即可预测 TR(= P × Q)",
      },
      columns: [
        { en: "Elasticity", zh: "弹性" },
        { en: "Price ↑", zh: "价格上升" },
        { en: "Price ↓", zh: "价格下降" },
      ],
      rows: [
        [{ en: "Ed > 1 (elastic)", zh: "Ed > 1(富有弹性)" }, { en: "TR ↓", zh: "TR ↓" }, { en: "TR ↑", zh: "TR ↑" }],
        [{ en: "Ed = 1 (unit elastic)", zh: "Ed = 1(单位弹性)" }, { en: "TR unchanged", zh: "TR 不变" }, { en: "TR unchanged", zh: "TR 不变" }],
        [{ en: "Ed < 1 (inelastic)", zh: "Ed < 1(缺乏弹性)" }, { en: "TR ↑", zh: "TR ↑" }, { en: "TR ↓", zh: "TR ↓" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "The intuition: if demand is **elastic**, cutting the price attracts enough extra buyers that total revenue **rises**. If it's **inelastic**, buyers would've paid more anyway, so raising the price **increases** revenue.",
        zh: "直觉:若需求**富有弹性**,降价会吸引足够多的新买家,使总收益**上升**。若**缺乏弹性**,买家本就愿意多付,所以涨价会**提高**收益。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Government Intervention** — what happens when price can't freely adjust.",
        zh: "下一节:**政府干预**——当价格无法自由调整时会发生什么。",
      },
    },
  ],

  // --------- Unit 2 · Topic 5 · Government Intervention ---------
  "unit-2/topic-5": [
    {
      kind: "table",
      caption: {
        en: "Rent control: a $800 ceiling in a market where equilibrium rent is $1,200",
        zh: "租金管制:在均衡租金 $1,200 的市场中设定 $800 的上限",
      },
      columns: [
        { en: "", zh: "" },
        { en: "No control (equilibrium)", zh: "无管制(均衡)" },
        { en: "With $800 ceiling", zh: "设定 $800 上限" },
      ],
      rows: [
        [{ en: "Market price", zh: "市场价格" }, { en: "$1,200", zh: "$1,200" }, { en: "$800 (capped)", zh: "$800(封顶)" }],
        [{ en: "Quantity demanded", zh: "需求量" }, { en: "10,000 units", zh: "10,000 套" }, { en: "14,000 units", zh: "14,000 套" }],
        [{ en: "Quantity supplied", zh: "供给量" }, { en: "10,000 units", zh: "10,000 套" }, { en: "7,000 units", zh: "7,000 套" }],
        [{ en: "Market status", zh: "市场状态" }, { en: "Clears", zh: "出清" }, { en: "Shortage: 7,000 units", zh: "短缺:7,000 套" }],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "A **price ceiling** is a legal maximum. It only **binds** if set **below** equilibrium — and when it binds, Qd > Qs, creating a **shortage**. Non-price rationing (waiting lists, black markets, first-come-first-served) takes over because price can't.",
        zh: "**价格上限**是法定最高价。只有设定在均衡价**以下**时才具**约束力**——一旦约束,Qd > Qs,产生**短缺**。由于价格无法完成分配,就会出现非价格分配(排队、黑市、先到先得)。",
      },
    },
    {
      kind: "callout",
      label: { en: "Ceiling vs. floor", zh: "上限 vs. 下限" },
      text: {
        en: "**Price ceiling** (e.g., rent control): binding only if **BELOW** equilibrium → **shortage**. **Price floor** (e.g., minimum wage, farm price support): binding only if **ABOVE** equilibrium → **surplus**. If the ceiling sits above — or the floor sits below — equilibrium, the market ignores it entirely.",
        zh: "**价格上限**(如租金管制):只有在均衡价**以下**时才有效 → **短缺**。**价格下限**(如最低工资、农产品价格支持):只有在均衡价**以上**时才有效 → **过剩**。若上限设在均衡之上、或下限设在均衡之下,市场会完全忽略它。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Per-unit $3 excise tax on sellers of a good with equilibrium P=$10, Q=100",
        zh: "对卖方征 $3 单位税,商品原均衡 P=$10, Q=100",
      },
      columns: [
        { en: "Metric", zh: "指标" },
        { en: "Before tax", zh: "税前" },
        { en: "After tax", zh: "税后" },
      ],
      rows: [
        [{ en: "Price buyers pay", zh: "买家支付价" }, { en: "$10", zh: "$10" }, { en: "$12", zh: "$12" }],
        [{ en: "Price sellers keep (net)", zh: "卖家净得价" }, { en: "$10", zh: "$10" }, { en: "$9", zh: "$9" }],
        [{ en: "Tax per unit", zh: "单位税额" }, { en: "—", zh: "—" }, { en: "$3 (= $12 − $9)", zh: "$3(= $12 − $9)" }],
        [{ en: "Quantity traded", zh: "成交量" }, { en: "100", zh: "100" }, { en: "80", zh: "80" }],
        [{ en: "Government tax revenue", zh: "政府税收" }, { en: "—", zh: "—" }, { en: "$3 × 80 = $240", zh: "$3 × 80 = $240" }],
        [{ en: "Deadweight loss (DWL)", zh: "无谓损失(DWL)" }, { en: "—", zh: "—" }, { en: "½ × $3 × (100−80) = $30", zh: "½ × $3 × (100−80) = $30" }],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "The tax creates a **wedge**: buyers pay $2 more ($10 → $12), sellers keep $1 less ($10 → $9). **Whoever has the more inelastic curve bears the larger share** — here buyers bear 2/3 of the $3 tax because demand is more inelastic than supply in this example. The DWL triangle is the mutually beneficial trades now prevented.",
        zh: "税收造成一个**楔子**:买家多付 $2($10 → $12),卖家少得 $1($10 → $9)。**曲线更缺乏弹性的一方承担更大份额**——本例中需求比供给更缺乏弹性,所以买家承担 $3 税的 2/3。DWL 三角形就是那些本可互惠、如今不再发生的交易。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That closes Unit 2. Up next: **Unit 3 — Production, Cost, and Perfect Competition**.",
        zh: "第 2 单元到此结束。下一单元:**第 3 单元——生产、成本与完全竞争**。",
      },
    },
  ],

  // --------- Unit 3 · Topic 1 · Production & Diminishing Returns ---------
  "unit-3/topic-1": [
    {
      kind: "table",
      caption: {
        en: "A bakery's short-run production — fixed oven, varying workers",
        zh: "面包店的短期生产——固定烤箱、可变工人",
      },
      columns: [
        { en: "Workers (L)", zh: "工人数(L)" },
        { en: "Total Product (TP)", zh: "总产量(TP)" },
        { en: "Marginal Product (MP)", zh: "边际产量(MP)" },
        { en: "Average Product (AP)", zh: "平均产量(AP)" },
      ],
      rows: [
        [{ en: "0", zh: "0" }, { en: "0", zh: "0" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }],
        [{ en: "1", zh: "1" }, { en: "8", zh: "8" }, { en: "8", zh: "8" }, { en: "8", zh: "8" }],
        [{ en: "2", zh: "2" }, { en: "20", zh: "20" }, { en: "12", zh: "12" }, { en: "10", zh: "10" }],
        [{ en: "3", zh: "3" }, { en: "36", zh: "36" }, { en: "16", zh: "16" }, { en: "12", zh: "12" }],
        [{ en: "4", zh: "4" }, { en: "48", zh: "48" }, { en: "12", zh: "12" }, { en: "12", zh: "12" }],
        [{ en: "5", zh: "5" }, { en: "55", zh: "55" }, { en: "7", zh: "7" }, { en: "11", zh: "11" }],
        [{ en: "6", zh: "6" }, { en: "60", zh: "60" }, { en: "5", zh: "5" }, { en: "10", zh: "10" }],
        [{ en: "7", zh: "7" }, { en: "63", zh: "63" }, { en: "3", zh: "3" }, { en: "9", zh: "9" }],
        [{ en: "8", zh: "8" }, { en: "64", zh: "64" }, { en: "1", zh: "1" }, { en: "8", zh: "8" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Look at **MP**: it rises from 8 to 16 (workers 1–3) as workers **specialize**, then **falls** (16 → 1) as the fixed oven gets crowded. That drop is **diminishing marginal returns** — the defining fact of short-run production.",
        zh: "看 **MP**:从 8 升到 16(第 1~3 名工人,分工协作带来效率),随后**下降**(16 → 1),因为烤箱这种固定投入被挤满。这正是**边际收益递减**——短期生产的核心事实。",
      },
    },
    {
      kind: "callout",
      label: { en: "The law of diminishing marginal returns", zh: "边际收益递减规律" },
      text: {
        en: "In the **short run**, at least one input is fixed. As you add more of a **variable** input (labor) to a fixed one (capital), **marginal product eventually falls**. It is an empirical law — every real production process hits it.",
        zh: "**短期**内至少有一种投入固定。向固定投入(资本)不断增加**可变**投入(劳动),**边际产量最终会下降**。这是经验规律——任何真实生产过程都会碰到。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "The MP–AP relationship — read the same table",
        zh: "MP 与 AP 的关系——读同一张表",
      },
      columns: [
        { en: "When…", zh: "当……" },
        { en: "Then AP is…", zh: "AP 则……" },
      ],
      rows: [
        [{ en: "MP > AP", zh: "MP > AP" }, { en: "Rising (see L=1→3)", zh: "上升(见 L=1→3)" }],
        [{ en: "MP = AP", zh: "MP = AP" }, { en: "At its maximum (L=4)", zh: "达到最大值(L=4)" }],
        [{ en: "MP < AP", zh: "MP < AP" }, { en: "Falling (see L=5→8)", zh: "下降(见 L=5→8)" }],
      ],
      highlightLastRow: false,
    },
    {
      kind: "paragraph",
      text: {
        en: "This pattern — the marginal pulling the average — shows up **everywhere** in microeconomics (with costs, with revenue, with productivity). Learning to see it here pays off for the rest of the course.",
        zh: "**边际拉动平均**这条规律——在微观经济学**随处可见**(成本、收益、生产率)。在这里先看清楚,后面整门课都受益。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Short-Run Costs** — what the production table looks like in dollars.",
        zh: "下一节:**短期成本**——把生产表换成美元单位。",
      },
    },
  ],

  // --------- Unit 3 · Topic 2 · Short-Run Costs ---------
  "unit-3/topic-2": [
    {
      kind: "table",
      caption: {
        en: "A bakery's full short-run cost table (FC = $40, wage and oven costs fixed)",
        zh: "面包店的完整短期成本表(FC = $40,工资与烤箱成本固定)",
      },
      columns: [
        { en: "Q", zh: "Q" },
        { en: "FC", zh: "FC" },
        { en: "VC", zh: "VC" },
        { en: "TC", zh: "TC" },
        { en: "MC", zh: "MC" },
        { en: "AFC", zh: "AFC" },
        { en: "AVC", zh: "AVC" },
        { en: "ATC", zh: "ATC" },
      ],
      rows: [
        [{ en: "0", zh: "0" }, { en: "40", zh: "40" }, { en: "0", zh: "0" }, { en: "40", zh: "40" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }],
        [{ en: "1", zh: "1" }, { en: "40", zh: "40" }, { en: "30", zh: "30" }, { en: "70", zh: "70" }, { en: "30", zh: "30" }, { en: "40", zh: "40" }, { en: "30", zh: "30" }, { en: "70", zh: "70" }],
        [{ en: "2", zh: "2" }, { en: "40", zh: "40" }, { en: "50", zh: "50" }, { en: "90", zh: "90" }, { en: "20", zh: "20" }, { en: "20", zh: "20" }, { en: "25", zh: "25" }, { en: "45", zh: "45" }],
        [{ en: "3", zh: "3" }, { en: "40", zh: "40" }, { en: "60", zh: "60" }, { en: "100", zh: "100" }, { en: "10", zh: "10" }, { en: "13.3", zh: "13.3" }, { en: "20", zh: "20" }, { en: "33.3", zh: "33.3" }],
        [{ en: "4", zh: "4" }, { en: "40", zh: "40" }, { en: "80", zh: "80" }, { en: "120", zh: "120" }, { en: "20", zh: "20" }, { en: "10", zh: "10" }, { en: "20", zh: "20" }, { en: "30", zh: "30" }],
        [{ en: "5", zh: "5" }, { en: "40", zh: "40" }, { en: "110", zh: "110" }, { en: "150", zh: "150" }, { en: "30", zh: "30" }, { en: "8", zh: "8" }, { en: "22", zh: "22" }, { en: "30", zh: "30" }],
        [{ en: "6", zh: "6" }, { en: "40", zh: "40" }, { en: "150", zh: "150" }, { en: "190", zh: "190" }, { en: "40", zh: "40" }, { en: "6.7", zh: "6.7" }, { en: "25", zh: "25" }, { en: "31.7", zh: "31.7" }],
        [{ en: "7", zh: "7" }, { en: "40", zh: "40" }, { en: "200", zh: "200" }, { en: "240", zh: "240" }, { en: "50", zh: "50" }, { en: "5.7", zh: "5.7" }, { en: "28.6", zh: "28.6" }, { en: "34.3", zh: "34.3" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**MC** is U-shaped: falls (30 → 10) as workers specialize, then rises (10 → 50) from diminishing returns. **AVC** hits its minimum at Q = 4 ($20). **ATC** hits its minimum at Q = 5 ($30). Notice where **MC** equals each average — that's not a coincidence.",
        zh: "**MC** 是 U 形:先因分工专业化而下降(30 → 10),再因边际收益递减而上升(10 → 50)。**AVC** 在 Q = 4 处取最低($20)。**ATC** 在 Q = 5 处取最低($30)。留意 **MC** 在哪儿与各平均曲线相等——这不是巧合。",
      },
    },
    {
      kind: "callout",
      label: { en: "The MC–AVG crossing rule", zh: "MC 与平均的交点规则" },
      text: {
        en: "**MC cuts AVC and ATC at each curve's minimum.** Below the minimum, MC < average → average is falling. Above the minimum, MC > average → average is rising. Same logic as MP vs. AP — marginal pulls average.",
        zh: "**MC 在 AVC 和 ATC 各自最低点处穿过它们。**最低点左侧 MC < 平均 → 平均下降;最低点右侧 MC > 平均 → 平均上升。与 MP 对 AP 的逻辑相同——边际拉动平均。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "A few facts that are always true",
        zh: "几条恒真的结论",
      },
      columns: [
        { en: "Curve", zh: "曲线" },
        { en: "Always…", zh: "总是……" },
      ],
      rows: [
        [{ en: "AFC = FC / Q", zh: "AFC = FC / Q" }, { en: "Monotonically **falls** as Q rises", zh: "随 Q 上升**单调下降**" }],
        [{ en: "ATC = AFC + AVC", zh: "ATC = AFC + AVC" }, { en: "Hence ATC − AVC = AFC (gap shrinks)", zh: "故 ATC − AVC = AFC(缺口缩小)" }],
        [{ en: "MC = Δ TC / Δ Q", zh: "MC = Δ TC / Δ Q" }, { en: "Equals wage / MP (when labor is variable)", zh: "等于工资 / MP(劳动为可变投入时)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Long-Run Costs** — what happens when every input becomes variable.",
        zh: "下一节:**长期成本**——当所有投入都变成可变投入时会怎样。",
      },
    },
  ],

  // --------- Unit 3 · Topic 3 · Long-Run Costs & Economies of Scale ---------
  "unit-3/topic-3": [
    {
      kind: "table",
      caption: {
        en: "Long-run ATC (LRATC) — three regions of a classic U-shape",
        zh: "长期平均成本(LRATC)——经典 U 形的三段",
      },
      columns: [
        { en: "Output range", zh: "产量区间" },
        { en: "LRATC behavior", zh: "LRATC 走势" },
        { en: "Name", zh: "名称" },
      ],
      rows: [
        [
          { en: "Low Q (small plants)", zh: "低 Q(小厂)" },
          { en: "**Falling**", zh: "**下降**" },
          { en: "Economies of scale", zh: "规模经济" },
        ],
        [
          { en: "Medium Q (efficient scale)", zh: "中 Q(高效规模)" },
          { en: "**Flat**", zh: "**平稳**" },
          { en: "Constant returns to scale", zh: "规模报酬不变" },
        ],
        [
          { en: "High Q (very large plants)", zh: "高 Q(超大型厂)" },
          { en: "**Rising**", zh: "**上升**" },
          { en: "Diseconomies of scale", zh: "规模不经济" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "In the **long run**, all inputs are variable — a firm can pick any plant size. LRATC is the **lower envelope** of every possible short-run ATC curve: for each Q, choose the plant size that makes unit cost lowest. **Diminishing returns don't apply** in the long run (nothing is fixed) — the rising portion of LRATC is driven by **diseconomies of scale**, a different phenomenon.",
        zh: "**长期**中所有投入都可变——企业可选择任意厂房规模。LRATC 是所有可能短期 ATC 曲线的**下包络**:对每个 Q,选让单位成本最低的厂房规模。**边际收益递减不适用于长期**(长期无固定投入)——LRATC 上升段来自**规模不经济**,这是另一种现象。",
      },
    },
    {
      kind: "callout",
      label: { en: "Sources — what drives each region", zh: "成因——每一段的驱动因素" },
      text: {
        en: "**Economies of scale**: specialization of labor, bulk input discounts, spreading fixed costs over more units, learning-by-doing. **Diseconomies of scale**: coordination costs, slow decision-making, bureaucracy, communication breakdowns in very large firms.",
        zh: "**规模经济**:劳动分工、投入品批量折扣、固定成本摊薄到更多单位、干中学。**规模不经济**:协调成本、决策变慢、官僚主义、超大规模企业的沟通失灵。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Minimum efficient scale (MES) varies by industry",
        zh: "最小有效规模(MES)因行业而异",
      },
      columns: [
        { en: "Industry", zh: "行业" },
        { en: "Typical MES", zh: "典型 MES" },
        { en: "Implication", zh: "含义" },
      ],
      rows: [
        [
          { en: "Nail salon", zh: "美甲店" },
          { en: "Very small (1 shop)", zh: "很小(1 家店)" },
          { en: "Room for many firms", zh: "可容纳许多企业" },
        ],
        [
          { en: "Car manufacturing", zh: "汽车制造" },
          { en: "Very large (millions/yr)", zh: "很大(年产数百万辆)" },
          { en: "Only a handful of firms globally", zh: "全球只有少数企业" },
        ],
        [
          { en: "Software platform", zh: "软件平台" },
          { en: "Essentially infinite", zh: "几乎无限" },
          { en: "Natural monopolies can emerge", zh: "可能出现自然垄断" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**MES** = the smallest output at which LRATC reaches its minimum. Below MES, a firm is at a **cost disadvantage** and rivals at MES will out-compete it. Industries with large MES tend to be concentrated; industries with small MES stay fragmented.",
        zh: "**MES** = LRATC 达到最低的最小产量。低于 MES 的企业处于**成本劣势**,会被达到 MES 的对手击败。MES 大的行业往往集中,MES 小的行业则保持分散。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Profit Maximization** — the single rule that applies in every market structure.",
        zh: "下一节:**利润最大化**——适用于所有市场结构的同一条规则。",
      },
    },
  ],

  // --------- Unit 3 · Topic 4 · Profit Maximization (MR = MC) ---------
  "unit-3/topic-4": [
    {
      kind: "table",
      caption: {
        en: "A firm facing market price P = $40 per unit — find the profit-max Q",
        zh: "面临市场价格 P = $40 的企业——找到利润最大化的 Q",
      },
      columns: [
        { en: "Q", zh: "Q" },
        { en: "TR = P × Q", zh: "TR = P × Q" },
        { en: "TC", zh: "TC" },
        { en: "MR", zh: "MR" },
        { en: "MC", zh: "MC" },
        { en: "Profit (TR − TC)", zh: "利润(TR − TC)" },
      ],
      rows: [
        [{ en: "0", zh: "0" }, { en: "0", zh: "0" }, { en: "40", zh: "40" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }, { en: "−40", zh: "−40" }],
        [{ en: "1", zh: "1" }, { en: "40", zh: "40" }, { en: "70", zh: "70" }, { en: "40", zh: "40" }, { en: "30", zh: "30" }, { en: "−30", zh: "−30" }],
        [{ en: "2", zh: "2" }, { en: "80", zh: "80" }, { en: "90", zh: "90" }, { en: "40", zh: "40" }, { en: "20", zh: "20" }, { en: "−10", zh: "−10" }],
        [{ en: "3", zh: "3" }, { en: "120", zh: "120" }, { en: "100", zh: "100" }, { en: "40", zh: "40" }, { en: "10", zh: "10" }, { en: "+20", zh: "+20" }],
        [{ en: "4", zh: "4" }, { en: "160", zh: "160" }, { en: "120", zh: "120" }, { en: "40", zh: "40" }, { en: "20", zh: "20" }, { en: "+40", zh: "+40" }],
        [{ en: "5", zh: "5" }, { en: "200", zh: "200" }, { en: "150", zh: "150" }, { en: "40", zh: "40" }, { en: "30", zh: "30" }, { en: "+50", zh: "+50" }],
        [{ en: "6", zh: "6" }, { en: "240", zh: "240" }, { en: "190", zh: "190" }, { en: "40", zh: "40" }, { en: "40", zh: "40" }, { en: "+50 (max)", zh: "+50(最大)" }],
        [{ en: "7", zh: "7" }, { en: "280", zh: "280" }, { en: "240", zh: "240" }, { en: "40", zh: "40" }, { en: "50", zh: "50" }, { en: "+40", zh: "+40" }],
      ],
      highlightLastRow: false,
    },
    {
      kind: "paragraph",
      text: {
        en: "Scan **MR** vs. **MC**. From Q=1 to Q=5, **MR > MC** — every extra unit adds more revenue than cost, so profit **rises**. At **Q=6, MR = MC = $40** — profit peaks at **+$50**. At Q=7, **MR < MC** — one more unit would cost more than it brings in, so profit **falls**. The rule: **produce where MR = MC**.",
        zh: "扫 **MR** 与 **MC**。从 Q=1 到 Q=5,**MR > MC**——每多一单位带来的收入大于成本,利润**上升**。在 **Q=6 处,MR = MC = $40**——利润达到峰值 **+$50**。Q=7 时 **MR < MC**——再多产一单位成本高于收益,利润**下降**。规则:**在 MR = MC 处生产**。",
      },
    },
    {
      kind: "callout",
      label: { en: "MR = MC works in EVERY market structure", zh: "MR = MC 适用于**所有**市场结构" },
      text: {
        en: "Perfect competition, monopoly, monopolistic competition, oligopoly — **every** profit-maximizing firm picks Q where MR = MC. What changes is the shape of MR: in perfect competition MR = P (horizontal); under monopoly MR < P (downward-sloping). The **rule itself never changes**.",
        zh: "完全竞争、垄断、垄断竞争、寡头——**每一种**追求利润最大化的企业都在 MR = MC 处选 Q。**变化的只是 MR 的形状**:完全竞争下 MR = P(水平);垄断下 MR < P(向下倾斜)。**规则本身不变**。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Short-run shut-down rule — four scenarios at the loss-minimizing Q",
        zh: "短期停业法则——亏损最小化 Q 下的四种情境",
      },
      columns: [
        { en: "Condition", zh: "条件" },
        { en: "What to do?", zh: "应如何决策?" },
        { en: "Why?", zh: "为什么?" },
      ],
      rows: [
        [
          { en: "P > ATC", zh: "P > ATC" },
          { en: "Produce — earn **economic profit**", zh: "生产——赚取**经济利润**" },
          { en: "Covers all costs and then some", zh: "覆盖所有成本,还有盈余" },
        ],
        [
          { en: "P = ATC", zh: "P = ATC" },
          { en: "Produce — **break even**", zh: "生产——**保本**" },
          { en: "Covers all costs (earns normal profit)", zh: "覆盖全部成本(赚取正常利润)" },
        ],
        [
          { en: "AVC ≤ P < ATC", zh: "AVC ≤ P < ATC" },
          { en: "**Produce** — accept a loss", zh: "**继续生产**——接受亏损" },
          { en: "Covers VC and part of FC; shutting down loses MORE", zh: "覆盖 VC 和部分 FC;停业亏得更多" },
        ],
        [
          { en: "P < AVC", zh: "P < AVC" },
          { en: "**Shut down**", zh: "**立即停业**" },
          { en: "Can't even cover variable cost — keep only the FC loss", zh: "连可变成本都覆盖不了——只承担 FC 亏损" },
        ],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Perfect Competition** — the clean case where the MR curve is flat.",
        zh: "下一节:**完全竞争**——MR 曲线水平的那种简洁情形。",
      },
    },
  ],

  // --------- Unit 3 · Topic 5 · Perfect Competition ---------
  "unit-3/topic-5": [
    {
      kind: "table",
      caption: {
        en: "The defining features of perfect competition",
        zh: "完全竞争的决定性特征",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Perfect competition", zh: "完全竞争" },
      ],
      rows: [
        [{ en: "Number of firms", zh: "企业数量" }, { en: "Many small ones", zh: "许多小企业" }],
        [{ en: "Product", zh: "产品" }, { en: "Identical (homogeneous)", zh: "相同(同质)" }],
        [{ en: "Entry / exit", zh: "进入 / 退出" }, { en: "Free, no barriers", zh: "自由,无壁垒" }],
        [{ en: "Information", zh: "信息" }, { en: "Perfect on both sides", zh: "买卖双方完全信息" }],
        [{ en: "Firm's pricing power", zh: "企业定价能力" }, { en: "None — **price taker**", zh: "无——**价格接受者**" }],
        [{ en: "Firm's demand curve", zh: "企业需求曲线" }, { en: "**Horizontal** at market price", zh: "在市场价格处**水平**" }],
        [{ en: "MR relation to P", zh: "MR 与 P 的关系" }, { en: "**MR = P** (always)", zh: "**MR = P**(恒成立)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Each perfectly competitive firm is a **price taker** — the market sets the price, and the firm just decides how many units to produce. Because its demand curve is **horizontal** at P*, every extra unit sells for P*, so **MR = P**. The firm picks Q where **MC = MR = P**.",
        zh: "完全竞争企业是**价格接受者**——价格由市场决定,企业只决定生产多少。由于需求曲线在 P* 处**水平**,每多卖一单位都按 P* 成交,所以 **MR = P**。企业在 **MC = MR = P** 处选 Q。",
      },
    },
    {
      kind: "callout",
      label: { en: "Why entry and exit drive LR profit to zero", zh: "为什么进入与退出会使长期利润趋于零" },
      text: {
        en: "If firms earn **positive** economic profit, new firms **enter** → market supply shifts right → market price **falls** → individual profit shrinks. If firms lose money, firms **exit** → supply shifts left → price rises. Entry and exit continue until **economic profit = 0**. At long-run equilibrium, **P = MR = MC = minimum ATC**.",
        zh: "若企业获得**正**经济利润,新企业**进入** → 市场供给右移 → 价格**下降** → 个体利润缩水。若企业亏损,企业**退出** → 供给左移 → 价格上升。进入与退出持续到**经济利润 = 0**。在长期均衡中,**P = MR = MC = 最低 ATC**。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Short-run outcomes for a competitive firm",
        zh: "完全竞争企业的短期结果",
      },
      columns: [
        { en: "Condition (at MR=MC Q)", zh: "条件(在 MR=MC 的 Q)" },
        { en: "SR outcome", zh: "短期结果" },
        { en: "LR response of industry", zh: "行业长期反应" },
      ],
      rows: [
        [
          { en: "P > ATC", zh: "P > ATC" },
          { en: "Economic profit", zh: "经济利润" },
          { en: "Firms **enter** → S→, P falls", zh: "企业**进入** → S 右移,P 下降" },
        ],
        [
          { en: "P = ATC", zh: "P = ATC" },
          { en: "Break-even (LR equilibrium)", zh: "保本(长期均衡)" },
          { en: "Stable — no entry/exit", zh: "稳定——无进出" },
        ],
        [
          { en: "AVC ≤ P < ATC", zh: "AVC ≤ P < ATC" },
          { en: "Loss, keep producing", zh: "亏损但继续生产" },
          { en: "Firms **exit** → S←, P rises", zh: "企业**退出** → S 左移,P 上升" },
        ],
        [
          { en: "P < AVC", zh: "P < AVC" },
          { en: "Shut down", zh: "停业" },
          { en: "Firms exit", zh: "企业退出" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Long-run perfect competition is also **allocatively efficient** (P = MC, so the price buyers pay equals the cost of the last unit) and **productively efficient** (firms produce at minimum ATC). It's the benchmark every other market structure is judged against.",
        zh: "长期完全竞争同时做到**配置有效**(P = MC,买家支付的价格等于最后一单位的成本)与**生产有效**(企业在最低 ATC 处生产)。它是所有其他市场结构的衡量基准。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That closes Unit 3. Up next: **Unit 4 — Imperfect Competition**, where firms do have pricing power.",
        zh: "第 3 单元到此结束。下一单元:**第 4 单元——不完全竞争**,企业开始拥有定价能力。",
      },
    },
  ],
};

// ============================================================
// Practice questions — keyed by `${unitSlug}/${topicSlug}`
// ============================================================

export const topicQuestions: Record<string, Question[]> = {
  // --------- Unit 1 · Topic 1 · Scarcity ---------
  "unit-1/topic-1": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "The student's Saturday — wants vs. hours available",
          zh: "该学生的周六——想做的事 vs. 可用时间",
        },
        columns: [
          { en: "What the student wants", zh: "想做的事" },
          { en: "Hours needed", zh: "所需小时数" },
        ],
        rows: [
          [{ en: "Review AP Micro", zh: "复习 AP 微观" }, { en: "6", zh: "6" }],
          [{ en: "Sleep in", zh: "睡懒觉" }, { en: "4", zh: "4" }],
          [{ en: "Gaming", zh: "打游戏" }, { en: "3", zh: "3" }],
          [{ en: "Job shift", zh: "兼职" }, { en: "6", zh: "6" }],
          [{ en: "Total wanted / available", zh: "想做合计 / 可用时间" }, { en: "19 / 10", zh: "19 / 10" }],
        ],
        highlightLastRow: true,
      },
      prompt: {
        en: "Based on the table above, which economic concept is this student facing?",
        zh: "根据上表,这名学生面对的是以下哪一个经济学概念?",
      },
      choices: [
        { id: "a", text: { en: "A shortage — at the current price, buyers want more hours than are for sale.", zh: "短缺——在现价下,买家想要的小时数多于可出售的小时数。" } },
        { id: "b", text: { en: "Scarcity — total wants (19 hrs) exceed the fixed resource (10 hrs), forcing a choice.", zh: "稀缺——想做的事合计(19 小时)超过固定资源(10 小时),迫使做出选择。" } },
        { id: "c", text: { en: "A surplus — the student has more hours than wants.", zh: "过剩——该学生拥有的小时数超过他想做的事。" } },
        { id: "d", text: { en: "Market failure — the student's preferences cannot be ranked.", zh: "市场失灵——该学生的偏好无法被排序。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Read the last row: wanted = 19 hrs, available = 10 hrs. That **permanent mismatch between unlimited wants and limited resources is scarcity**. 'Shortage' (choice A) is a **market-price term** — it requires a stated price, which this table does not have. A surplus (C) would mean available > wanted, the opposite of what the table shows.",
        zh: "看最后一行:想做合计 = 19 小时,可用 = 10 小时。**欲望无限、资源有限,这种永久性的不匹配就是稀缺**。选项 A「短缺」是一个**市场价格概念**——需要给定价格,而这里并没有价格。选项 C「过剩」意味着可用 > 想做,与表格恰好相反。",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "Sam has 1 free hour. Value Sam places on each use:",
          zh: "Sam 有 1 小时空闲,他对各种使用方式的估值如下:",
        },
        columns: [
          { en: "Use of the hour", zh: "使用方式" },
          { en: "Value to Sam", zh: "对 Sam 的价值" },
        ],
        rows: [
          [{ en: "Work a shift", zh: "去上班" }, { en: "$18", zh: "18 美元" }],
          [{ en: "Study for the AP exam", zh: "复习 AP 考试" }, { en: "$12 (expected grade gain)", zh: "12 美元(预期提分价值)" }],
          [{ en: "Watch Netflix", zh: "看 Netflix" }, { en: "$6", zh: "6 美元" }],
          [{ en: "Nap", zh: "睡一觉" }, { en: "$4", zh: "4 美元" }],
        ],
      },
      prompt: {
        en: "Sam chooses to work the shift. What is the opportunity cost of that hour?",
        zh: "Sam 选择去上班。这 1 小时的机会成本是多少?",
      },
      choices: [
        { id: "a", text: { en: "$40 — the sum of all other uses given up ($12 + $6 + $4 + $18).", zh: "40 美元——所有其他用途之和(12 + 6 + 4 + 18)。" } },
        { id: "b", text: { en: "$22 — the sum of study, Netflix, and nap ($12 + $6 + $4).", zh: "22 美元——复习、Netflix、小睡之和(12 + 6 + 4)。" } },
        { id: "c", text: { en: "$12 — the value of the single next-best alternative (studying).", zh: "12 美元——单一的次优选项(复习)的价值。" } },
        { id: "d", text: { en: "$0 — Sam is earning money, so there is no cost.", zh: "0 美元——Sam 在挣钱,所以没有成本。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Opportunity cost = the **value of the single next-best alternative forgone**, not the sum of everything else. Ranking the table (work $18, study $12, Netflix $6, nap $4), the next-best alternative to working is **studying at $12**. Choice A is a **common mistake** — students often add up all alternatives, but only one was actually going to happen next.",
        zh: "机会成本 = 放弃的**单一次优选项的价值**,而不是其他所有选项的总和。将表中数值排序(上班 $18、复习 $12、Netflix $6、小睡 $4),上班的次优选项是**复习 $12**。选项 A 是**常见错误**——学生常把所有替代项加起来,但真正会发生的次优选项只有一个。",
      },
    },
    {
      id: "q3",
      figure: { kind: "chart", chartType: "supply-demand" },
      prompt: {
        en: "The chart above shows a competitive market for a scarce good. Which statement best explains why the equilibrium price sits at the intersection of supply and demand?",
        zh: "上图显示的是某种稀缺商品的竞争性市场。以下哪项最能解释为什么均衡价格位于供给与需求的交点?",
      },
      choices: [
        { id: "a", text: { en: "Because the government sets the price there by regulation.", zh: "因为政府通过法规把价格设在那里。" } },
        { id: "b", text: { en: "Because at that price, the quantity buyers want to buy equals the quantity sellers want to sell — the scarce good is fully rationed.", zh: "因为在该价格下,买方愿意购买的数量恰好等于卖方愿意出售的数量——稀缺商品被完全分配。" } },
        { id: "c", text: { en: "Because producers always want the highest possible price, and consumers cannot object.", zh: "因为生产者总想要最高的价格,而消费者无法反对。" } },
        { id: "d", text: { en: "Because scarcity does not affect price in a competitive market.", zh: "因为在竞争市场中稀缺对价格没有影响。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Below the equilibrium price, Qd > Qs (a **shortage**) and buyers bid the price up. Above it, Qs > Qd (a **surplus**) and sellers cut the price. The only price where the scarce good is neither over- nor under-demanded is **where the two curves cross** — so the market settles there. Scarcity doesn't disappear; **price is the mechanism that rations it**.",
        zh: "在均衡价以下,Qd > Qs(**短缺**),买家抬价。在均衡价以上,Qs > Qd(**过剩**),卖家降价。只有在**两条曲线相交**的那个价格,稀缺商品既不过剩也不短缺——市场因此稳定在该点。稀缺并没有消失,**价格才是用来分配稀缺品的机制**。",
      },
    },
  ],

  // --------- Unit 1 · Topic 2 · Opportunity Cost ---------
  "unit-1/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Maya's weekend camping trip — cost breakdown",
          zh: "Maya 周末露营——成本分解",
        },
        columns: [
          { en: "Cost type", zh: "成本类型" },
          { en: "Item", zh: "项目" },
          { en: "Amount", zh: "金额" },
        ],
        rows: [
          [{ en: "Explicit", zh: "显性" }, { en: "Gas, food, campground", zh: "汽油、食物、营地" }, { en: "$80", zh: "80 美元" }],
          [{ en: "Implicit", zh: "隐性" }, { en: "Rental income forgone", zh: "放弃的租金收入" }, { en: "$200", zh: "200 美元" }],
        ],
      },
      prompt: {
        en: "Using the table, what is Maya's total economic cost of the camping trip?",
        zh: "根据上表,Maya 露营的经济总成本是多少?",
      },
      choices: [
        { id: "a", text: { en: "$80 — only the cash she actually paid.", zh: "80 美元——只算她实际支付的现金。" } },
        { id: "b", text: { en: "$200 — only the rental income she gave up.", zh: "200 美元——只算放弃的租金收入。" } },
        { id: "c", text: { en: "$280 — explicit + implicit cost.", zh: "280 美元——显性 + 隐性成本。" } },
        { id: "d", text: { en: "$120 — explicit minus implicit.", zh: "120 美元——显性减去隐性。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Economic cost = **explicit + implicit**. Add $80 (gas/food/campground) + $200 (forgone rent) = **$280**. Choice A is the accountant's view — it ignores the resource Maya already owned. Choice B ignores the cash she actually spent. Both matter.",
        zh: "经济成本 = **显性 + 隐性**。80 美元(汽油/食物/营地)+ 200 美元(放弃的租金)= **280 美元**。选项 A 是会计视角——忽略了 Maya 原本就拥有的资源。选项 B 忽略了她实际花出去的现金。两者都必须计入。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Emma quits a $60,000/year job to start a bakery. She spends $40,000 on rent and supplies in the first year and earns $85,000 in revenue. What is her **economic profit**?",
        zh: "Emma 辞去年薪 6 万美元的工作去开面包店。第一年她在租金与物料上花费 4 万美元,并取得 8.5 万美元营收。她的**经济利润**是多少?",
      },
      choices: [
        { id: "a", text: { en: "$45,000 — revenue minus explicit cost only.", zh: "4.5 万美元——收入只减显性成本。" } },
        { id: "b", text: { en: "$25,000 — revenue minus explicit cost minus half the salary.", zh: "2.5 万美元——收入减显性成本,再减一半工资。" } },
        { id: "c", text: { en: "−$15,000 — revenue minus explicit and implicit cost.", zh: "−1.5 万美元——收入减显性与隐性成本。" } },
        { id: "d", text: { en: "$85,000 — all of the revenue is profit.", zh: "8.5 万美元——营收全是利润。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Economic profit = revenue − explicit − implicit cost. That's **$85k − $40k − $60k = −$15k**. The $60k salary is an **implicit cost** — Emma's own time, which she could have sold elsewhere. Accounting profit (choice A) is positive, but economic profit is negative — Emma would have been $15k better off keeping her job.",
        zh: "经济利润 = 收入 − 显性 − 隐性成本。即 **8.5 万 − 4 万 − 6 万 = −1.5 万美元**。6 万美元的工资是**隐性成本**——Emma 自己的时间本可以在别处卖掉。会计利润(选项 A)是正的,但经济利润为负——Emma 留在原工作会多赚 1.5 万美元。",
      },
    },
    {
      id: "q3",
      figure: {
        kind: "table",
        caption: {
          en: "You paid $50 for a concert ticket. 30 min in, the band is bad. A friend offers a free movie in 15 min.",
          zh: "你花 50 美元买了一张演唱会票。开场 30 分钟后发现乐队很差。朋友邀你 15 分钟后去看免费电影。",
        },
        columns: [
          { en: "Option", zh: "选项" },
          { en: "Enjoyment over next 2 hours", zh: "未来 2 小时的享受值" },
        ],
        rows: [
          [{ en: "Stay at concert", zh: "留下看演唱会" }, { en: "2 / 10", zh: "2 / 10" }],
          [{ en: "Leave for the free movie", zh: "离开去看免费电影" }, { en: "8 / 10", zh: "8 / 10" }],
        ],
      },
      prompt: {
        en: "What does opportunity-cost reasoning say you should do — and why?",
        zh: "机会成本的思路告诉你应该怎么做?为什么?",
      },
      choices: [
        { id: "a", text: { en: "Stay — leaving would waste the $50 you already paid.", zh: "留下——离开会浪费已付的 50 美元。" } },
        { id: "b", text: { en: "Stay — concerts cost more than movies, so they're worth more.", zh: "留下——演唱会比电影贵,所以更值。" } },
        { id: "c", text: { en: "Leave — the $50 is a sunk cost; compare only future enjoyment (8 > 2).", zh: "离开——50 美元是沉没成本;只比较未来享受(8 > 2)。" } },
        { id: "d", text: { en: "Leave — the movie costs less than the concert.", zh: "离开——电影比演唱会便宜。" } },
      ],
      answerId: "c",
      explanation: {
        en: "The $50 is a **sunk cost** — it's spent either way, so it should drop out of the decision. Compare only the **future** enjoyment: staying = 2, leaving = 8. The opportunity cost of staying is the **6 units of enjoyment** given up by not leaving. Choice A is the classic sunk-cost trap.",
        zh: "50 美元是**沉没成本**——不管怎么选都已经花了,应该从决策中剔除。只比较**未来**的享受:留下 = 2,离开 = 8。留下的机会成本就是**放弃的 6 单位享受**。选项 A 是经典的沉没成本陷阱。",
      },
    },
  ],

  // --------- Unit 1 · Topic 3 · PPC ---------
  "unit-1/topic-3": [
    {
      id: "q1",
      figure: { kind: "chart", chartType: "ppc" },
      prompt: {
        en: "Using the PPC above, which statement about the three points is correct?",
        zh: "根据上方 PPC,关于三个点的描述,哪一项正确?",
      },
      choices: [
        { id: "a", text: { en: "A is inefficient, B is efficient, C is efficient.", zh: "A 无效、B 有效、C 有效。" } },
        { id: "b", text: { en: "A is efficient, B is inefficient (resources idle), C is unattainable.", zh: "A 有效、B 无效(资源闲置)、C 不可达。" } },
        { id: "c", text: { en: "A and C are efficient; B is unattainable.", zh: "A 和 C 都有效;B 不可达。" } },
        { id: "d", text: { en: "All three points are on the PPC.", zh: "三个点都在 PPC 上。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**A is on the curve — productively efficient.** **B is inside the curve** — the economy could produce more of both goods, so resources are idle (**inefficient**). **C is outside the curve** — the economy can't reach it with current resources and technology (**unattainable**).",
        zh: "**A 在曲线上——生产有效**。**B 在曲线内部**——经济体本可以多生产两种商品,说明资源闲置(**无效**)。**C 在曲线外部**——以当前的资源与技术无法达到(**不可达**)。",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "Two points on an economy's PPC",
          zh: "某经济体 PPC 上的两个点",
        },
        columns: [
          { en: "Point", zh: "点" },
          { en: "Cars", zh: "汽车" },
          { en: "Wheat", zh: "小麦" },
        ],
        rows: [
          [{ en: "A", zh: "A" }, { en: "4", zh: "4" }, { en: "9", zh: "9" }],
          [{ en: "B", zh: "B" }, { en: "6", zh: "6" }, { en: "5", zh: "5" }],
        ],
      },
      prompt: {
        en: "Moving from A to B, what is the opportunity cost of **one additional car**?",
        zh: "从 A 点移动到 B 点,**多生产一辆汽车**的机会成本是多少?",
      },
      choices: [
        { id: "a", text: { en: "1 unit of wheat", zh: "1 单位小麦" } },
        { id: "b", text: { en: "2 units of wheat", zh: "2 单位小麦" } },
        { id: "c", text: { en: "4 units of wheat", zh: "4 单位小麦" } },
        { id: "d", text: { en: "6 units of wheat", zh: "6 单位小麦" } },
      ],
      answerId: "b",
      explanation: {
        en: "Going A → B, cars rise by **2** (4 → 6) and wheat falls by **4** (9 → 5). **OC of 1 extra car = 4 wheat ÷ 2 cars = 2 wheat**. Choice C is a trap for students who forget to divide by the number of cars gained.",
        zh: "从 A → B,汽车增加 **2 辆**(4 → 6),小麦减少 **4 单位**(9 → 5)。**1 辆汽车的机会成本 = 4 小麦 ÷ 2 汽车 = 2 小麦**。选项 C 是陷阱,给那些忘了要除以增加的汽车数量的学生。",
      },
    },
    {
      id: "q3",
      figure: {
        kind: "table",
        caption: {
          en: "Which event affects the PPC — and how?",
          zh: "以下事件如何影响 PPC?",
        },
        columns: [
          { en: "Event", zh: "事件" },
          { en: "Description", zh: "说明" },
        ],
        rows: [
          [{ en: "W", zh: "W" }, { en: "An earthquake destroys 20% of factories.", zh: "一场地震摧毁 20% 的工厂。" }],
          [{ en: "X", zh: "X" }, { en: "A breakthrough technology doubles productivity.", zh: "一项突破性技术使生产率翻倍。" }],
          [{ en: "Y", zh: "Y" }, { en: "The country shifts workers from cars to wheat.", zh: "该国把工人从汽车生产转到小麦生产。" }],
          [{ en: "Z", zh: "Z" }, { en: "A baby boom 20 years ago enters the labor force.", zh: "20 年前的婴儿潮进入劳动力市场。" }],
        ],
      },
      prompt: {
        en: "Which events cause the PPC to shift **outward** (economic growth)?",
        zh: "以下哪些事件会使 PPC **向外**移动(经济增长)?",
      },
      choices: [
        { id: "a", text: { en: "W and Y", zh: "W 和 Y" } },
        { id: "b", text: { en: "X and Z", zh: "X 和 Z" } },
        { id: "c", text: { en: "X and Y", zh: "X 和 Y" } },
        { id: "d", text: { en: "All four", zh: "四项全部" } },
      ],
      answerId: "b",
      explanation: {
        en: "**X (better technology)** and **Z (more labor)** both increase what the economy can produce → **outward shift**. **W (destruction)** shifts PPC **inward**. **Y (reallocation)** is just a **movement along** the existing PPC, not a shift — the economy trades cars for wheat at the curve's opportunity cost.",
        zh: "**X(更好的技术)**和 **Z(更多劳动力)**都会提高经济体的产能 → **向外移动**。**W(破坏)**使 PPC **向内移动**。**Y(重新分配)**只是**沿现有 PPC 移动**,不是整条曲线移动——经济体按曲线的机会成本用汽车换小麦。",
      },
    },
  ],

  // --------- Unit 1 · Topic 4 · Comparative Advantage ---------
  "unit-1/topic-4": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Output per hour of labor",
          zh: "每小时劳动产量",
        },
        columns: [
          { en: "", zh: "" },
          { en: "Country A", zh: "A 国" },
          { en: "Country B", zh: "B 国" },
        ],
        rows: [
          [{ en: "Wheat", zh: "小麦" }, { en: "6", zh: "6" }, { en: "1", zh: "1" }],
          [{ en: "Cloth", zh: "布" }, { en: "2", zh: "2" }, { en: "3", zh: "3" }],
        ],
      },
      prompt: {
        en: "Which country has an **absolute advantage** in wheat? Which has an **absolute advantage** in cloth?",
        zh: "在小麦生产上,哪国拥有**绝对优势**?在布的生产上呢?",
      },
      choices: [
        { id: "a", text: { en: "A in both wheat and cloth.", zh: "A 在小麦和布上都有绝对优势。" } },
        { id: "b", text: { en: "B in both wheat and cloth.", zh: "B 在小麦和布上都有绝对优势。" } },
        { id: "c", text: { en: "A in wheat; B in cloth.", zh: "A 在小麦、B 在布上有绝对优势。" } },
        { id: "d", text: { en: "B in wheat; A in cloth.", zh: "B 在小麦、A 在布上有绝对优势。" } },
      ],
      answerId: "c",
      explanation: {
        en: "**Absolute advantage** = producing more with the same resources. Read the table in each row: **wheat** → A makes 6 vs. B's 1 → **A wins**. **Cloth** → B makes 3 vs. A's 2 → **B wins**. (Note: absolute advantage does NOT determine who should specialize — that's the next question.)",
        zh: "**绝对优势** = 用相同资源生产更多。逐行读表:**小麦**→ A 产 6、B 产 1 → **A 赢**。**布** → B 产 3、A 产 2 → **B 赢**。(注意:绝对优势并不决定谁应该专业化——下一题才是。)",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "Output per hour (same table)",
          zh: "每小时产量(同一张表)",
        },
        columns: [
          { en: "", zh: "" },
          { en: "Country A", zh: "A 国" },
          { en: "Country B", zh: "B 国" },
        ],
        rows: [
          [{ en: "Wheat", zh: "小麦" }, { en: "6", zh: "6" }, { en: "1", zh: "1" }],
          [{ en: "Cloth", zh: "布" }, { en: "2", zh: "2" }, { en: "3", zh: "3" }],
        ],
      },
      prompt: {
        en: "Which country has a **comparative advantage** in wheat?",
        zh: "在小麦生产上,哪国拥有**比较优势**?",
      },
      choices: [
        { id: "a", text: { en: "Country A — it gives up only 1/3 cloth to produce 1 wheat.", zh: "A 国——每多产 1 小麦只放弃 1/3 布。" } },
        { id: "b", text: { en: "Country B — it has higher productivity in cloth.", zh: "B 国——它在布上的生产率更高。" } },
        { id: "c", text: { en: "Neither — they are equal.", zh: "都没有——两国相等。" } },
        { id: "d", text: { en: "Both — each has comparative advantage in both goods.", zh: "两国都有——每国在两种商品上都有比较优势。" } },
      ],
      answerId: "a",
      explanation: {
        en: "**Comparative advantage = lower opportunity cost.** A's OC of 1 wheat = 2 cloth ÷ 6 wheat = **1/3 cloth**. B's OC of 1 wheat = 3 cloth ÷ 1 wheat = **3 cloth**. A gives up far less cloth per bushel of wheat, so **A specializes in wheat** and B specializes in cloth. Choice D is logically impossible — comparative advantages must be opposite.",
        zh: "**比较优势 = 更低的机会成本**。A 生产 1 小麦的机会成本 = 2 布 ÷ 6 小麦 = **1/3 布**。B 生产 1 小麦的机会成本 = 3 布 ÷ 1 小麦 = **3 布**。A 每多产 1 小麦放弃的布要少得多,所以 **A 专门生产小麦**,B 专门生产布。选项 D 在逻辑上不可能——比较优势必然相反。",
      },
    },
    {
      id: "q3",
      figure: {
        kind: "table",
        caption: {
          en: "Opportunity cost of 1 wheat, for each country",
          zh: "每国生产 1 小麦的机会成本",
        },
        columns: [
          { en: "Country", zh: "国家" },
          { en: "OC of 1 wheat (in cloth)", zh: "1 小麦的机会成本(以布计)" },
        ],
        rows: [
          [{ en: "Country A", zh: "A 国" }, { en: "1/3 cloth", zh: "1/3 布" }],
          [{ en: "Country B", zh: "B 国" }, { en: "3 cloth", zh: "3 布" }],
        ],
      },
      prompt: {
        en: "At which exchange ratio would BOTH countries gain from trading wheat for cloth?",
        zh: "在哪一个交换比率下,两国都能从「以小麦换布」中获益?",
      },
      choices: [
        { id: "a", text: { en: "1/4 cloth per wheat", zh: "每小麦换 1/4 布" } },
        { id: "b", text: { en: "1 cloth per wheat", zh: "每小麦换 1 布" } },
        { id: "c", text: { en: "4 cloth per wheat", zh: "每小麦换 4 布" } },
        { id: "d", text: { en: "0 cloth per wheat (free wheat)", zh: "每小麦换 0 布(白送)" } },
      ],
      answerId: "b",
      explanation: {
        en: "Mutually beneficial **terms of trade** must fall **strictly between** the two countries' opportunity costs: **between 1/3 and 3 cloth per wheat**. **1 is inside that range** → both gain. 1/4 is below A's OC (A would rather grow its own cloth). 4 is above B's OC (B would rather grow its own wheat).",
        zh: "互利的**贸易条件**必须**严格位于**两国机会成本之间:**介于 1/3 和 3 布之间**。**1 落在范围内** → 两国都获益。1/4 低于 A 的机会成本(A 宁愿自产布)。4 高于 B 的机会成本(B 宁愿自产小麦)。",
      },
    },
  ],

  // --------- Unit 1 · Topic 5 · Economic Systems ---------
  "unit-1/topic-5": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Three descriptions of how an economy decides what to produce",
          zh: "三种「经济体如何决定生产什么」的描述",
        },
        columns: [
          { en: "Label", zh: "编号" },
          { en: "Description", zh: "描述" },
        ],
        rows: [
          [
            { en: "I", zh: "I" },
            { en: "A ministry lists quotas for every factory each year.", zh: "某部委每年给每家工厂列出配额。" },
          ],
          [
            { en: "II", zh: "II" },
            { en: "Private firms set prices; government runs schools and enforces safety rules.", zh: "私人企业定价;政府办学校并执行安全法规。" },
          ],
          [
            { en: "III", zh: "III" },
            { en: "Consumer demand and producer supply set prices, with no government involvement.", zh: "消费者需求与生产者供给决定价格,政府完全不介入。" },
          ],
        ],
      },
      prompt: {
        en: "Match each description to the correct economic system.",
        zh: "把每条描述匹配到正确的经济体制。",
      },
      choices: [
        { id: "a", text: { en: "I = Market, II = Command, III = Mixed", zh: "I = 市场,II = 计划,III = 混合" } },
        { id: "b", text: { en: "I = Command, II = Mixed, III = Market", zh: "I = 计划,II = 混合,III = 市场" } },
        { id: "c", text: { en: "I = Mixed, II = Market, III = Command", zh: "I = 混合,II = 市场,III = 计划" } },
        { id: "d", text: { en: "All three are the same system.", zh: "三者是同一种体制。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**I** = central planner decides quotas → **Command**. **II** = private prices + some government → **Mixed** (every real modern economy). **III** = pure price signals, no government → **Market** (a textbook extreme, not an actual country).",
        zh: "**I** = 中央计划者决定配额 → **计划经济**。**II** = 私人价格 + 部分政府介入 → **混合经济**(所有现代经济体)。**III** = 纯粹的价格信号、零政府介入 → **市场经济**(教科书上的极端情况,现实中不存在)。",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "Circular flow — who supplies and who demands in each market",
          zh: "循环流——每个市场中谁是供给方、谁是需求方",
        },
        columns: [
          { en: "Market", zh: "市场" },
          { en: "Households", zh: "家庭" },
          { en: "Firms", zh: "企业" },
        ],
        rows: [
          [
            { en: "Factor market (labor, land, capital)", zh: "要素市场(劳动、土地、资本)" },
            { en: "?", zh: "?" },
            { en: "?", zh: "?" },
          ],
          [
            { en: "Product market (goods & services)", zh: "产品市场(商品与服务)" },
            { en: "?", zh: "?" },
            { en: "?", zh: "?" },
          ],
        ],
      },
      prompt: {
        en: "Fill in the blanks: in the **factor market**, households __, and firms __.",
        zh: "填空:在**要素市场**中,家庭 __,企业 __。",
      },
      choices: [
        { id: "a", text: { en: "supply factors, demand factors.", zh: "供给要素,需求要素。" } },
        { id: "b", text: { en: "demand factors, supply factors.", zh: "需求要素,供给要素。" } },
        { id: "c", text: { en: "supply goods, demand goods.", zh: "供给商品,需求商品。" } },
        { id: "d", text: { en: "demand goods, supply goods.", zh: "需求商品,供给商品。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Households **own** the factors of production (their own labor, land, and savings). They **supply** those factors to firms in exchange for wages, rent, and interest. Firms **demand** the factors to produce goods. In the **product** market the roles flip: firms supply goods, households demand them.",
        zh: "家庭**拥有**生产要素(自己的劳动、土地和储蓄)。家庭把这些要素**供给**给企业,换取工资、租金与利息。企业则**需求**这些要素来生产商品。在**产品市场**中,角色反过来:企业供给商品,家庭需求商品。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A severe drought cuts the coffee harvest. Coffee prices rise. Farmers plant more coffee trees for next year, and consumers switch to tea. No government agency coordinates any of this. Which principle does the scenario BEST illustrate?",
        zh: "一场严重干旱使咖啡减产。咖啡价格上涨。来年农民多种咖啡树,消费者转向喝茶。没有任何政府机构协调这一切。此情境最能说明哪一项原则?",
      },
      choices: [
        { id: "a", text: { en: "A command economy at work — a planner directs behavior.", zh: "计划经济在运作——由计划者指挥行为。" } },
        { id: "b", text: { en: "Market failure — prices send the wrong signal.", zh: "市场失灵——价格传递错误信号。" } },
        { id: "c", text: { en: "The invisible hand — prices coordinate self-interested decisions.", zh: "看不见的手——价格协调了追求自身利益的决策。" } },
        { id: "d", text: { en: "Comparative advantage — coffee countries specialize.", zh: "比较优势——咖啡生产国专业化。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Rising prices **signal scarcity**. Farmers respond by planting more (chasing profit); consumers respond by substituting (saving money). **No single planner coordinated them — the price did**. That is the **invisible hand** at work. Choice B is wrong because the market is working correctly, not failing.",
        zh: "价格上涨**发出稀缺信号**。农民为追求利润而增产;消费者为省钱而替代。**没有任何单一计划者协调他们——价格完成了协调**。这正是**看不见的手**。选项 B 错误,因为市场在正常运作,而非失灵。",
      },
    },
  ],

  // --------- Unit 2 · Topic 1 · Demand ---------
  "unit-2/topic-1": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Demand schedule for coffee (cups/day in one café)",
          zh: "某咖啡馆每日咖啡需求表",
        },
        columns: [
          { en: "Price / cup", zh: "每杯价格" },
          { en: "Quantity demanded", zh: "需求量" },
        ],
        rows: [
          [{ en: "$3", zh: "$3" }, { en: "200", zh: "200" }],
          [{ en: "$5", zh: "$5" }, { en: "150", zh: "150" }],
          [{ en: "$7", zh: "$7" }, { en: "100", zh: "100" }],
          [{ en: "$9", zh: "$9" }, { en: "60", zh: "60" }],
        ],
      },
      prompt: {
        en: "The café raises the price from $5 to $7. Which statement correctly describes what happens?",
        zh: "该咖啡馆把价格从 $5 提到 $7。以下哪项描述正确?",
      },
      choices: [
        { id: "a", text: { en: "Demand shifts left — the curve moves.", zh: "需求左移——曲线整体移动。" } },
        { id: "b", text: { en: "Quantity demanded falls from 150 to 100 — a movement ALONG the same demand curve.", zh: "需求量从 150 降到 100——**沿同一条**需求曲线移动。" } },
        { id: "c", text: { en: "Demand rises because prices rose.", zh: "需求因价格上涨而上升。" } },
        { id: "d", text: { en: "Supply shifts.", zh: "供给曲线移动。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The only thing that changed is the **good's own price**. That always causes a **movement along** the existing demand curve — not a shift. Read the table: at $5, Qd = 150; at $7, Qd = 100. The curve itself is unchanged; only the point on it changed.",
        zh: "改变的只是**商品自身价格**。这只会使经济体**沿**现有需求曲线**移动**——而不是整条曲线移动。读表:$5 对应 150,$7 对应 100。曲线本身不变,只是在曲线上的点换了。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Tea and coffee are substitutes. The price of tea **rises** sharply. What happens to the **demand for coffee**?",
        zh: "茶和咖啡是替代品。茶价格**大幅上涨**。**咖啡的需求**会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "Demand for coffee shifts LEFT (D↓).", zh: "咖啡需求**左移**(D↓)。" } },
        { id: "b", text: { en: "Demand for coffee shifts RIGHT (D↑).", zh: "咖啡需求**右移**(D↑)。" } },
        { id: "c", text: { en: "Quantity demanded of coffee falls along its own curve.", zh: "咖啡需求量沿自身曲线下降。" } },
        { id: "d", text: { en: "Nothing — only coffee's own price affects coffee demand.", zh: "没有变化——只有咖啡自己的价格会影响咖啡需求。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Tea got more expensive, so buyers **substitute** toward coffee at every price — the coffee demand curve **shifts right**. This is the 'R' in **TRIBE**. Choice C is wrong: only coffee's OWN price changing would move along coffee's curve.",
        zh: "茶变贵了,买家在任意价格下都更愿意**替代**购买咖啡——咖啡需求曲线**右移**。这就是 **TRIBE** 中的「R」(相关品)。选项 C 错了:只有咖啡自己的价格变化才会沿咖啡曲线移动。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Ramen is an **inferior good** for the Kim family. Their income **rises** by 30%. What happens to the Kim family's demand for ramen?",
        zh: "泡面对金家而言是**劣等品**。他们的收入**上升** 30%。金家对泡面的需求会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "Shifts right — higher income always raises demand.", zh: "右移——收入增加总会提高需求。" } },
        { id: "b", text: { en: "Shifts left — for inferior goods, higher income LOWERS demand.", zh: "左移——对劣等品,收入上升反而**降低**需求。" } },
        { id: "c", text: { en: "Unchanged — income doesn't affect demand.", zh: "不变——收入不影响需求。" } },
        { id: "d", text: { en: "Movement along the demand curve.", zh: "沿需求曲线移动。" } },
      ],
      answerId: "b",
      explanation: {
        en: "For an **inferior good**, higher income means buyers switch to preferred alternatives (better meals) and buy less of the inferior option. Demand **shifts left**. Choice A would be right for a **normal good** — but ramen was stated as inferior.",
        zh: "对**劣等品**,收入上升后买家转向更偏好的替代品(更好的餐食),反而少买劣等品。需求**左移**。选项 A 适用于**正常品**——但题目已经说泡面是劣等品。",
      },
    },
  ],

  // --------- Unit 2 · Topic 2 · Supply ---------
  "unit-2/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Four events affecting the supply of laptops",
          zh: "影响笔记本电脑供给的四个事件",
        },
        columns: [
          { en: "Event", zh: "事件" },
          { en: "Change", zh: "变化" },
        ],
        rows: [
          [{ en: "E1", zh: "E1" }, { en: "Government gives laptop makers a $50-per-laptop subsidy", zh: "政府给笔记本电脑厂商每台 $50 补贴" }],
          [{ en: "E2", zh: "E2" }, { en: "Price of the microchips that go into laptops rises 40%", zh: "笔记本电脑所用芯片价格上涨 40%" }],
          [{ en: "E3", zh: "E3" }, { en: "New assembly robot cuts production time in half", zh: "新装配机器人使生产时间减半" }],
          [{ en: "E4", zh: "E4" }, { en: "Laptop makers expect a big holiday price spike next month", zh: "厂商预期下个月假期价格将大涨" }],
        ],
      },
      prompt: {
        en: "Which event shifts the laptop **supply curve LEFT** (S↓)?",
        zh: "哪个事件会使笔记本电脑**供给曲线左移**(S↓)?",
      },
      choices: [
        { id: "a", text: { en: "E1 — the subsidy", zh: "E1——补贴" } },
        { id: "b", text: { en: "E3 — the new robot", zh: "E3——新机器人" } },
        { id: "c", text: { en: "Both E2 (input cost ↑) and E4 (expecting higher future price)", zh: "E2(投入成本 ↑)和 E4(预期未来涨价)都会" } },
        { id: "d", text: { en: "All four shift S left", zh: "四项都使 S 左移" } },
      ],
      answerId: "c",
      explanation: {
        en: "**E2**: higher input price (chips) → higher marginal cost → S shifts **LEFT**. **E4**: if sellers expect higher price later, they withhold today → S shifts **LEFT today**. **E1 (subsidy)** and **E3 (better tech)** both lower per-unit cost → S shifts **RIGHT**.",
        zh: "**E2**:投入品(芯片)价格上升 → 边际成本上升 → S **左移**。**E4**:卖家预期未来涨价,今天减供 → **今天 S 左移**。**E1(补贴)**和 **E3(更好的技术)**都使单位成本下降 → S **右移**。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A factory produces **both** wooden desks AND wooden chairs using the same lumber and workers. The market price of **chairs** suddenly doubles. What happens to the **supply of desks** from this factory?",
        zh: "一家工厂**同时**用同样的木材与工人生产木桌和木椅。**椅子**的市场价格突然翻倍。该工厂对**桌子的供给**会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "Supply of desks shifts right — prices are generally rising.", zh: "桌子供给右移——价格普遍上涨。" } },
        { id: "b", text: { en: "Supply of desks shifts LEFT — resources are reallocated to the more profitable chairs.", zh: "桌子供给**左移**——资源被重新分配到更有利可图的椅子。" } },
        { id: "c", text: { en: "Supply of desks is unchanged — chairs and desks are separate markets.", zh: "桌子供给不变——椅子和桌子是不同市场。" } },
        { id: "d", text: { en: "The demand curve for desks shifts.", zh: "桌子的需求曲线移动。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Desks and chairs compete for the **same production resources** (lumber + workers). When chair prices double, the factory reallocates lumber and labor to chairs — **fewer desks are produced at every price**. The desk supply curve shifts **left**. This is the 'O' in **ROTTEN**: other goods' prices.",
        zh: "桌子和椅子争夺**同样的生产资源**(木材 + 工人)。椅子价格翻倍后,工厂把木材和劳动力转向椅子——**任意价格下桌子产量都下降**。桌子供给曲线**左移**。这正是 **ROTTEN** 中的「O」:其他商品价格。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A breakthrough in solar-panel manufacturing **halves** the cost of producing a solar panel. Other things equal, what happens in the solar-panel market?",
        zh: "太阳能板制造技术突破,使每块太阳能板的生产成本**减半**。其他条件不变,太阳能板市场会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "S shifts right; equilibrium price falls, quantity rises.", zh: "S 右移;均衡价格下降,数量上升。" } },
        { id: "b", text: { en: "S shifts left; price rises, quantity falls.", zh: "S 左移;价格上升、数量下降。" } },
        { id: "c", text: { en: "D shifts right; price rises, quantity rises.", zh: "D 右移;价格和数量都上升。" } },
        { id: "d", text: { en: "No shift — the cost change was only on the producer side.", zh: "不移动——成本变化只影响生产端。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Lower production cost is a classic supply shifter — **S shifts right** (the 'T' in ROTTEN: technology). Applying the **four-combo rule** for S↑: price **falls**, quantity **rises**. Choice D confuses shifting the curve with moving along it — a cost change definitely shifts S.",
        zh: "生产成本下降是典型的供给移动因素——**S 右移**(ROTTEN 中的「T」:技术)。套用 S↑ 的**四种组合规则**:价格**下降**、数量**上升**。选项 D 混淆了曲线移动与沿曲线移动——成本变化一定会使 S 移动。",
      },
    },
  ],

  // --------- Unit 2 · Topic 3 · Market Equilibrium ---------
  "unit-2/topic-3": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Apple market: Qd and Qs at various prices (bushels/week)",
          zh: "苹果市场:不同价格下的 Qd 与 Qs(每周蒲式耳)",
        },
        columns: [
          { en: "Price", zh: "价格" },
          { en: "Qd", zh: "Qd" },
          { en: "Qs", zh: "Qs" },
        ],
        rows: [
          [{ en: "$2", zh: "$2" }, { en: "500", zh: "500" }, { en: "100", zh: "100" }],
          [{ en: "$4", zh: "$4" }, { en: "400", zh: "400" }, { en: "200", zh: "200" }],
          [{ en: "$6", zh: "$6" }, { en: "300", zh: "300" }, { en: "300", zh: "300" }],
          [{ en: "$8", zh: "$8" }, { en: "200", zh: "200" }, { en: "400", zh: "400" }],
          [{ en: "$10", zh: "$10" }, { en: "100", zh: "100" }, { en: "500", zh: "500" }],
        ],
      },
      prompt: {
        en: "Using the table, what is the **equilibrium** price and quantity?",
        zh: "根据上表,**均衡**价格与数量分别是多少?",
      },
      choices: [
        { id: "a", text: { en: "P = $2, Q = 500 (the largest quantity demanded)", zh: "P = $2,Q = 500(最大需求量)" } },
        { id: "b", text: { en: "P = $6, Q = 300 (where Qd = Qs)", zh: "P = $6,Q = 300(Qd = Qs 处)" } },
        { id: "c", text: { en: "P = $10, Q = 500 (the largest quantity supplied)", zh: "P = $10,Q = 500(最大供给量)" } },
        { id: "d", text: { en: "P = $6, Q = 600 (sum of Qd and Qs)", zh: "P = $6,Q = 600(Qd 与 Qs 之和)" } },
      ],
      answerId: "b",
      explanation: {
        en: "Equilibrium = the single price where **Qd = Qs**. Scan the table for that row: at **$6, Qd = Qs = 300**. Above $6 there's a surplus (Qs > Qd); below, a shortage. Choice D adds Qd + Qs — a classic mistake; at equilibrium, the quantity traded is the single number on which both sides agree, not the sum.",
        zh: "均衡 = 唯一使 **Qd = Qs** 的价格。在表中找到该行:**$6 时 Qd = Qs = 300**。高于 $6 出现过剩(Qs > Qd),低于则出现短缺。选项 D 把 Qd + Qs 相加——典型错误;均衡数量是双方**一致**的那一个数,不是相加。",
      },
    },
    {
      id: "q2",
      figure: { kind: "chart", chartType: "supply-demand" },
      prompt: {
        en: "The chart above shows a market at equilibrium. The government suddenly fixes the price at a level **above** equilibrium. What occurs in the market?",
        zh: "上图显示市场处于均衡。政府突然把价格固定在**高于**均衡的水平。市场会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "A shortage: Qd > Qs, and buyers would bid the price up — but can't because the floor holds.", zh: "短缺:Qd > Qs,买家本想抬价——但下限使之无法实现。" } },
        { id: "b", text: { en: "A surplus: Qs > Qd, sellers can't sell all their stock.", zh: "过剩:Qs > Qd,卖家无法售出全部存货。" } },
        { id: "c", text: { en: "Equilibrium stays at the original point.", zh: "均衡保持在原点。" } },
        { id: "d", text: { en: "The supply curve shifts.", zh: "供给曲线移动。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Above equilibrium price, **Qs exceeds Qd** → **surplus**. Read the S-D chart: at a price above where the lines cross, the horizontal distance from D to S is the size of the surplus. Sellers would normally cut price, but the government-imposed floor prevents that — the surplus persists.",
        zh: "在均衡价格之上,**Qs 大于 Qd** → **过剩**。读 S-D 图:在交点之上的某价格处,从 D 到 S 的水平距离就是过剩的大小。卖家本应降价,但政府设定的下限阻止了降价——过剩持续存在。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "In the smartphone market, consumer incomes **rise** (smartphones are normal goods) AND rare-earth metal prices (an input) **fall** simultaneously. What happens to **equilibrium price and quantity**?",
        zh: "智能手机市场中,消费者收入**上升**(手机是正常品)且稀土金属(投入品)价格**下降****同时**发生。**均衡价格与数量**会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "P rises, Q rises.", zh: "P 上升,Q 上升。" } },
        { id: "b", text: { en: "P ambiguous, Q rises — Q definitely rises, P depends on the relative size of the shifts.", zh: "P 不确定,Q 上升——数量一定上升,价格取决于两次移动的相对幅度。" } },
        { id: "c", text: { en: "P rises, Q ambiguous.", zh: "P 上升,Q 不确定。" } },
        { id: "d", text: { en: "Both P and Q fall.", zh: "P 和 Q 都下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Income ↑ for a normal good → D shifts right** (alone: P↑, Q↑). **Input price ↓ → S shifts right** (alone: P↓, Q↑). Both push Q **up** — so quantity **definitely rises**. But one pushes P up, the other pushes P down — so **P is ambiguous** (depends which shift is larger).",
        zh: "**正常品收入上升 → D 右移**(单独作用时 P↑、Q↑)。**投入价格下降 → S 右移**(单独作用时 P↓、Q↑)。两者都推动 Q **上升**——所以数量**一定上升**。但一个推 P 上、一个推 P 下——所以 **P 不确定**(取决于哪一次移动更大)。",
      },
    },
  ],

  // --------- Unit 2 · Topic 4 · Elasticity ---------
  "unit-2/topic-4": [
    {
      id: "q1",
      prompt: {
        en: "The price of a textbook rises from $40 to $50, and quantity demanded falls from 1,000 copies to 700. Compute the **price elasticity of demand** using the simple %Δ formula.",
        zh: "一本教科书价格从 $40 涨到 $50,需求量从 1,000 本降到 700 本。用简单的百分比公式计算**需求的价格弹性**。",
      },
      choices: [
        { id: "a", text: { en: "Ed = 0.25 (inelastic)", zh: "Ed = 0.25(缺乏弹性)" } },
        { id: "b", text: { en: "Ed = 0.83 (inelastic)", zh: "Ed = 0.83(缺乏弹性)" } },
        { id: "c", text: { en: "Ed = 1.2 (elastic)", zh: "Ed = 1.2(富有弹性)" } },
        { id: "d", text: { en: "Ed = 3.0 (elastic)", zh: "Ed = 3.0(富有弹性)" } },
      ],
      answerId: "c",
      explanation: {
        en: "%ΔP = (50 − 40)/40 = **+25%**. %ΔQd = (700 − 1000)/1000 = **−30%**. Ed = |−30% / 25%| = **1.2**. Since **Ed > 1**, demand is **elastic** — a price hike of 25% cut quantity by more than 25%. Choice B drops numbers in wrong positions.",
        zh: "%ΔP = (50 − 40)/40 = **+25%**。%ΔQd = (700 − 1000)/1000 = **−30%**。Ed = |−30% / 25%| = **1.2**。因为 **Ed > 1**,需求**富有弹性**——25% 的涨价使数量下降超过 25%。选项 B 把数字套错了位置。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A concert venue **lowers** ticket prices by 10% and observes **total revenue rises** by 5%. What does this tell you about the elasticity of demand for tickets?",
        zh: "某演唱会场馆把票价**下调** 10%,总收益却**上升** 5%。这能说明演唱会票的需求弹性是什么样的?",
      },
      choices: [
        { id: "a", text: { en: "Demand is inelastic (Ed < 1).", zh: "需求缺乏弹性(Ed < 1)。" } },
        { id: "b", text: { en: "Demand is elastic (Ed > 1).", zh: "需求富有弹性(Ed > 1)。" } },
        { id: "c", text: { en: "Demand is unit elastic (Ed = 1).", zh: "需求单位弹性(Ed = 1)。" } },
        { id: "d", text: { en: "Demand is perfectly inelastic (Ed = 0).", zh: "需求完全无弹性(Ed = 0)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Total Revenue test**: a price **cut** that **raises** TR means quantity rose by a LARGER percent than price fell → demand is **elastic**. If demand were inelastic (A), a price cut would have lowered TR. If unit elastic (C), TR would be unchanged.",
        zh: "**总收益检验**:**降价**使 TR **上升**,说明数量的百分比增幅**大于**价格的百分比降幅 → 需求**富有弹性**。若需求缺乏弹性(A),降价反而会降低 TR;若单位弹性(C),TR 不变。",
      },
    },
    {
      id: "q3",
      figure: {
        kind: "table",
        caption: {
          en: "Four goods — compare their demand elasticities",
          zh: "四种商品——比较需求弹性",
        },
        columns: [
          { en: "Good", zh: "商品" },
          { en: "Substitutes?", zh: "有替代品?" },
          { en: "Necessity?", zh: "是必需品?" },
          { en: "% of budget", zh: "占预算比例" },
        ],
        rows: [
          [{ en: "Insulin (diabetic)", zh: "胰岛素(糖尿病)" }, { en: "Essentially none", zh: "几乎没有" }, { en: "Yes", zh: "是" }, { en: "Small", zh: "小" }],
          [{ en: "Generic cola", zh: "普通可乐" }, { en: "Many close ones", zh: "多种相近" }, { en: "No", zh: "否" }, { en: "Tiny", zh: "极小" }],
          [{ en: "Luxury vacation", zh: "奢华度假" }, { en: "Many (budget trips)", zh: "多种(廉价旅行)" }, { en: "No", zh: "否" }, { en: "Very large", zh: "很大" }],
          [{ en: "Salt", zh: "食盐" }, { en: "None", zh: "没有" }, { en: "Yes", zh: "是" }, { en: "Tiny", zh: "极小" }],
        ],
      },
      prompt: {
        en: "Which good has the **most INELASTIC** demand?",
        zh: "哪种商品的需求**最缺乏弹性**?",
      },
      choices: [
        { id: "a", text: { en: "Insulin", zh: "胰岛素" } },
        { id: "b", text: { en: "Generic cola", zh: "普通可乐" } },
        { id: "c", text: { en: "Luxury vacation", zh: "奢华度假" } },
        { id: "d", text: { en: "Salt", zh: "食盐" } },
      ],
      answerId: "a",
      explanation: {
        en: "All four determinants point the same way for **insulin**: **no close substitute**, medical **necessity**, and — critically — patients **will pay** whatever it takes. Salt (D) is also very inelastic (no substitute, necessity), but insulin is sharper because there is **literally no substitute**. Generic cola and luxury vacations are elastic: many substitutes or easy to forgo.",
        zh: "四项决定因素对**胰岛素**都指向同一方向:**没有相近替代品**、医学上**必需**、而且病人**无论多贵都会买**。食盐(D)也很缺乏弹性(无替代、必需),但胰岛素更极端,因为**根本没有替代品**。普通可乐和奢华度假富有弹性:有多种替代或可以放弃。",
      },
    },
  ],

  // --------- Unit 2 · Topic 5 · Government Intervention ---------
  "unit-2/topic-5": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Gasoline market before and after a $2.50/gallon price CEILING",
          zh: "汽油市场在 $2.50/加仑价格**上限**前后",
        },
        columns: [
          { en: "Metric", zh: "指标" },
          { en: "No control", zh: "无管制" },
          { en: "With $2.50 ceiling", zh: "$2.50 上限下" },
        ],
        rows: [
          [{ en: "Price", zh: "价格" }, { en: "$4.00", zh: "$4.00" }, { en: "$2.50", zh: "$2.50" }],
          [{ en: "Qd (millions of gallons)", zh: "Qd(百万加仑)" }, { en: "100", zh: "100" }, { en: "140", zh: "140" }],
          [{ en: "Qs (millions of gallons)", zh: "Qs(百万加仑)" }, { en: "100", zh: "100" }, { en: "60", zh: "60" }],
        ],
      },
      prompt: {
        en: "Using the table, what is the **size of the shortage** created by the price ceiling?",
        zh: "根据上表,价格上限造成的**短缺规模**是多少?",
      },
      choices: [
        { id: "a", text: { en: "40 million gallons (140 − 100)", zh: "4000 万加仑(140 − 100)" } },
        { id: "b", text: { en: "80 million gallons (Qd + Qs)", zh: "8000 万加仑(Qd + Qs)" } },
        { id: "c", text: { en: "80 million gallons (140 − 60)", zh: "8000 万加仑(140 − 60)" } },
        { id: "d", text: { en: "Zero — the market still clears at the new price", zh: "零——新价格下市场仍然出清" } },
      ],
      answerId: "c",
      explanation: {
        en: "**Shortage = Qd − Qs** at the capped price. With the ceiling at $2.50: Qd = 140, Qs = 60, so shortage = **140 − 60 = 80 million gallons**. Choice A compares the new Qd to the old equilibrium Qd — the wrong comparison. A binding ceiling **below** equilibrium always creates a shortage because it simultaneously encourages buying AND discourages selling.",
        zh: "**短缺 = 上限价格下的 Qd − Qs**。在 $2.50 上限下:Qd = 140,Qs = 60,所以短缺 = **140 − 60 = 80 百万加仑**。选项 A 把新的 Qd 与原均衡 Qd 相比——比较对象错了。具约束力的上限设在均衡**以下**时,同时既**鼓励购买**又**抑制供给**,必然造成短缺。",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "$2 per-unit tax on two goods — who bears more of the tax?",
          zh: "对两种商品各征 $2 单位税——谁承担更多?",
        },
        columns: [
          { en: "Good", zh: "商品" },
          { en: "Demand elasticity", zh: "需求弹性" },
          { en: "Supply elasticity", zh: "供给弹性" },
        ],
        rows: [
          [{ en: "Cigarettes", zh: "香烟" }, { en: "Very inelastic", zh: "非常缺乏弹性" }, { en: "Elastic", zh: "富有弹性" }],
          [{ en: "Luxury yachts", zh: "奢华游艇" }, { en: "Very elastic", zh: "非常富有弹性" }, { en: "Inelastic (custom builds)", zh: "缺乏弹性(定制)" }],
        ],
      },
      prompt: {
        en: "For each good, **which side bears more** of the $2 per-unit tax?",
        zh: "对每种商品,$2 单位税中**哪一方承担更多**?",
      },
      choices: [
        { id: "a", text: { en: "Cigarettes: buyers bear more; Yachts: buyers bear more.", zh: "香烟:买家承担更多;游艇:买家承担更多。" } },
        { id: "b", text: { en: "Cigarettes: buyers bear more; Yachts: sellers bear more.", zh: "香烟:买家承担更多;游艇:卖家承担更多。" } },
        { id: "c", text: { en: "Cigarettes: sellers bear more; Yachts: buyers bear more.", zh: "香烟:卖家承担更多;游艇:买家承担更多。" } },
        { id: "d", text: { en: "They split 50-50 regardless of elasticity.", zh: "不论弹性如何都五五分。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**The side with the more inelastic curve bears more tax** — it can't easily escape by changing quantity. **Cigarettes**: demand is more inelastic → **buyers bear more**. **Yachts**: supply is more inelastic → **sellers bear more**. Choice D is the common misconception — incidence depends on elasticity, not on who writes the check.",
        zh: "**曲线越缺乏弹性的一方承担越多**——因为他们难以通过改变数量来逃避。**香烟**:需求更缺乏弹性 → **买家承担更多**。**游艇**:供给更缺乏弹性 → **卖家承担更多**。选项 D 是常见误解——税收归宿取决于弹性,而不是谁去缴税。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "The government imposes a **$5 per-unit subsidy** on producers of solar panels (a competitive market with upward-sloping S and downward-sloping D). What happens?",
        zh: "政府对太阳能板生产商实施**每块 $5 补贴**(竞争市场,S 向上、D 向下)。会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "S shifts LEFT by $5 vertically; P rises, Q falls.", zh: "S 垂直**左移** $5;P 上升、Q 下降。" } },
        { id: "b", text: { en: "S shifts RIGHT by $5 vertically; buyers pay less, sellers receive more (net of subsidy), Q rises above the original equilibrium.", zh: "S 垂直**右移** $5;买家付更少,卖家(含补贴)得更多,Q 超过原均衡。" } },
        { id: "c", text: { en: "D shifts right; Q rises, but P rises too.", zh: "D 右移;Q 上升,P 也上升。" } },
        { id: "d", text: { en: "No effect — subsidies just transfer money with no price impact.", zh: "没有影响——补贴只是转移资金,不影响价格。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A per-unit **subsidy to sellers** lowers their effective marginal cost by $5 → **S shifts right by $5 vertically**. At the new equilibrium: buyers pay a **lower** price, sellers receive a **higher** net price (buyer price + $5 subsidy), and **Q rises above the efficient level** — creating deadweight loss (the government pays more than the extra surplus generated).",
        zh: "单位**卖方补贴**使卖方有效边际成本降低 $5 → **S 垂直右移 $5**。新均衡下:买家付**更低**的价格,卖家得到**更高**的净价(买价 + $5 补贴),**Q 高于有效水平**——产生无谓损失(政府支付的超过所创造的额外剩余)。",
      },
    },
  ],
};

// ============================================================
// Unit-level practice sets — 15 MCQ spanning all topics in a unit.
// Questions are NOT reused from topic-level practice.
// Keyed by unit slug.
// ============================================================

export const unitQuestions: Record<string, Question[]> = {
  "unit-1": [
    // ---- Scarcity (3) ----
    {
      id: "u1q01",
      figure: {
        kind: "table",
        caption: {
          en: "Three situations — shortage or scarcity?",
          zh: "三种情境——是短缺还是稀缺?",
        },
        columns: [
          { en: "Row", zh: "编号" },
          { en: "Situation", zh: "情境" },
        ],
        rows: [
          [
            { en: "I", zh: "I" },
            { en: "A hospital has 50 ICU beds; 120 patients tonight need one.", zh: "一家医院有 50 张 ICU 床位,今晚有 120 位患者需要。" },
          ],
          [
            { en: "II", zh: "II" },
            { en: "The city caps bread at $1 a loaf; lines form outside bakeries.", zh: "市政府把面包限价在每条 1 美元,面包店门口排起长队。" },
          ],
          [
            { en: "III", zh: "III" },
            { en: "Humans have always wanted more than Earth's resources can produce.", zh: "人类的欲望始终超过地球资源所能提供的。" },
          ],
        ],
      },
      prompt: {
        en: "Classify each row as **shortage** or **scarcity**.",
        zh: "把每一行归类为**短缺**还是**稀缺**。",
      },
      choices: [
        { id: "a", text: { en: "I shortage, II shortage, III scarcity", zh: "I 短缺,II 短缺,III 稀缺" } },
        { id: "b", text: { en: "I shortage, II scarcity, III shortage", zh: "I 短缺,II 稀缺,III 短缺" } },
        { id: "c", text: { en: "I scarcity, II scarcity, III shortage", zh: "I 稀缺,II 稀缺,III 短缺" } },
        { id: "d", text: { en: "All three are scarcity", zh: "三项都是稀缺" } },
      ],
      answerId: "a",
      explanation: {
        en: "**Shortage** is a temporary, price-specific imbalance (Qd > Qs at a stated price). I (50 beds vs 120 patients tonight) and II (price ceiling drives Qd > Qs) are both shortages. III describes the **permanent** mismatch between unlimited wants and limited resources — that's scarcity.",
        zh: "**短缺**是暂时的、与价格相关的失衡(在给定价格下 Qd > Qs)。I(今晚 50 张床对 120 位患者)与 II(价格上限使 Qd > Qs)都是短缺。III 描述的是欲望无限与资源有限之间的**永久性**不匹配——那是稀缺。",
      },
    },
    {
      id: "u1q02",
      prompt: {
        en: "A government devotes 40% of its budget to education, sets national quality standards, and guarantees free access to everyone under 18. Which of the three fundamental economic questions is being answered?",
        zh: "某国把 40% 的预算投入教育,设立全国性的质量标准,并保证所有 18 岁以下的人免费入学。它回答了三个基本经济问题中的哪一个?",
      },
      choices: [
        { id: "a", text: { en: "Only 'what to produce'", zh: "只回答了「生产什么」" } },
        { id: "b", text: { en: "Only 'how to produce'", zh: "只回答了「如何生产」" } },
        { id: "c", text: { en: "Only 'for whom to produce'", zh: "只回答了「为谁生产」" } },
        { id: "d", text: { en: "All three — what, how, and for whom", zh: "三个都回答了——生产什么、如何生产、为谁生产" } },
      ],
      answerId: "d",
      explanation: {
        en: "**What** = education services (instead of e.g. more military spending). **How** = with national quality standards (not laissez-faire). **For whom** = everyone under 18 (not just the rich). Every real policy answers all three at once — that's what scarcity forces.",
        zh: "**生产什么** = 教育服务(而非更多军费)。**如何生产** = 按国家质量标准(而非放任)。**为谁生产** = 所有 18 岁以下的人(而非只给富人)。任何真实的政策都同时回答三个问题——这正是稀缺所迫。",
      },
    },
    {
      id: "u1q03",
      figure: {
        kind: "table",
        caption: {
          en: "Four ways to allocate a scarce good",
          zh: "分配稀缺品的四种方式",
        },
        columns: [
          { en: "Mechanism", zh: "机制" },
          { en: "Who gets it?", zh: "由谁获得?" },
        ],
        rows: [
          [{ en: "Price", zh: "价格" }, { en: "Whoever is willing & able to pay most", zh: "愿付且付得起最高价的人" }],
          [{ en: "Queue", zh: "排队" }, { en: "Whoever arrives first", zh: "最先到的人" }],
          [{ en: "Lottery", zh: "抽签" }, { en: "Random chance", zh: "随机抽选" }],
          [{ en: "Rationing", zh: "配给" }, { en: "Whatever the government quota says", zh: "依政府配额" }],
        ],
      },
      prompt: {
        en: "Why do economists usually defend **price** as the allocation mechanism in a market economy?",
        zh: "为什么经济学家通常支持在市场经济中用**价格**来分配?",
      },
      choices: [
        { id: "a", text: { en: "Because price is the only method that is legal.", zh: "因为价格是唯一合法的方式。" } },
        { id: "b", text: { en: "Because price signals scarcity — higher when scarce, lower when plentiful — guiding both producers and consumers.", zh: "因为价格传递稀缺信号——稀缺时上涨、充裕时下跌——同时引导生产者和消费者。" } },
        { id: "c", text: { en: "Because prices always deliver goods to the poorest buyers.", zh: "因为价格总是把商品分给最穷的买家。" } },
        { id: "d", text: { en: "Because the other three mechanisms cannot be used at all.", zh: "因为其他三种机制根本无法使用。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Price does two things the others don't: it **signals** scarcity (tells producers to make more) AND **rations** (allocates existing supply). Queues, lotteries, and rationing only do the second. This is why market economies use price as the default — it carries information, not just allocation.",
        zh: "价格做到了其他机制做不到的两件事:它**发出信号**(告诉生产者增产),又**分配**(把现有供给分出去)。排队、抽签、配给只做第二件。这就是市场经济默认使用价格的原因——它传递信息,而不仅是分配。",
      },
    },

    // ---- Opportunity Cost (3) ----
    {
      id: "u1q04",
      figure: {
        kind: "table",
        caption: {
          en: "You have $20 and can buy exactly ONE item. Your personal value for each:",
          zh: "你有 20 美元,只能买**一件**物品。你对每件的主观价值:",
        },
        columns: [
          { en: "Item", zh: "物品" },
          { en: "Your value", zh: "你的价值" },
        ],
        rows: [
          [{ en: "Textbook", zh: "教科书" }, { en: "$25", zh: "25 美元" }],
          [{ en: "Concert ticket", zh: "演唱会票" }, { en: "$18", zh: "18 美元" }],
          [{ en: "Video game", zh: "电子游戏" }, { en: "$15", zh: "15 美元" }],
          [{ en: "Gift for a friend", zh: "给朋友的礼物" }, { en: "$12", zh: "12 美元" }],
        ],
      },
      prompt: {
        en: "You buy the textbook. What is the **opportunity cost** of that choice?",
        zh: "你买了教科书。这个选择的**机会成本**是多少?",
      },
      choices: [
        { id: "a", text: { en: "$45 — the sum of the three items not chosen", zh: "45 美元——没选的三件物品的总和" } },
        { id: "b", text: { en: "$18 — the concert, your single next-best alternative", zh: "18 美元——演唱会,唯一的次优选项" } },
        { id: "c", text: { en: "$25 — the textbook's value to you", zh: "25 美元——教科书对你的价值" } },
        { id: "d", text: { en: "$0 — the textbook was worth more than any alternative", zh: "0 美元——教科书的价值比任何替代品都高" } },
      ],
      answerId: "b",
      explanation: {
        en: "Opportunity cost = **value of the single next-best alternative given up**. Rank the alternatives: textbook ($25) > concert ($18) > game ($15) > gift ($12). You chose the textbook, so the next-best **one** forgone is the concert at **$18**. Choice A is the classic mistake — summing all alternatives instead of picking the single best.",
        zh: "机会成本 = **放弃的单一次优选项的价值**。把替代品排序:教科书($25)> 演唱会($18)> 游戏($15)> 礼物($12)。你选了教科书,所以放弃的**那一个**次优选项就是演唱会 **18 美元**。选项 A 是典型错误——把所有替代品加起来,而不是挑单一最优的。",
      },
    },
    {
      id: "u1q05",
      figure: {
        kind: "table",
        caption: {
          en: "Classify each bakery cost — explicit or implicit?",
          zh: "把每项烘焙店成本归类——显性还是隐性?",
        },
        columns: [
          { en: "Cost item", zh: "成本项目" },
          { en: "Explicit or implicit?", zh: "显性 or 隐性?" },
        ],
        rows: [
          [{ en: "$3,000 paid for a new oven", zh: "花 3,000 美元买新烤箱" }, { en: "?", zh: "?" }],
          [{ en: "Owner works 50 hrs/wk — gave up a $40/hr job", zh: "老板每周工作 50 小时——放弃了时薪 40 美元的工作" }, { en: "?", zh: "?" }],
          [{ en: "Interest forgone on $50k of personal savings used as startup capital", zh: "将 5 万美元个人储蓄用作启动资金,放弃的利息" }, { en: "?", zh: "?" }],
          [{ en: "Monthly storefront lease of $2,500", zh: "月租 2,500 美元的店铺" }, { en: "?", zh: "?" }],
        ],
      },
      prompt: {
        en: "Which items are **implicit** costs?",
        zh: "哪几项是**隐性**成本?",
      },
      choices: [
        { id: "a", text: { en: "All four", zh: "四项全部" } },
        { id: "b", text: { en: "Owner's time AND interest forgone", zh: "老板的时间和放弃的利息" } },
        { id: "c", text: { en: "Oven AND lease only", zh: "只有烤箱和租金" } },
        { id: "d", text: { en: "None — all are revenue items", zh: "都不是——它们都是收入项" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Implicit costs** = value of resources the owner already has/uses up (time, self-invested capital). The owner's time (could've earned $40/hr elsewhere) and forgone interest on her own savings are classic implicit costs. The oven and the lease are cash-out-of-pocket → **explicit costs**.",
        zh: "**隐性成本** = 老板已经拥有或占用的资源的价值(自己的时间、自有资本)。老板的时间(本可在别处赚 40 美元/小时)和自有储蓄放弃的利息都是典型的隐性成本。烤箱和租金是现金支出 → **显性成本**。",
      },
    },
    {
      id: "u1q06",
      prompt: {
        en: "A lawyer leaves a **$150,000/yr** job to open her own firm. In year 1, her firm earns **$180,000** in revenue and pays **$60,000** for office space and support staff. What is her **economic profit**?",
        zh: "一位律师辞去年薪 **15 万美元**的工作,自己开律所。第一年,律所收入 **18 万美元**,办公室与辅助人员支出 **6 万美元**。她的**经济利润**是多少?",
      },
      choices: [
        { id: "a", text: { en: "$120,000 — revenue minus explicit costs", zh: "12 万美元——收入减显性成本" } },
        { id: "b", text: { en: "−$30,000 — revenue minus explicit and implicit costs", zh: "−3 万美元——收入减显性与隐性成本" } },
        { id: "c", text: { en: "$30,000 — implicit only", zh: "3 万美元——只算隐性" } },
        { id: "d", text: { en: "$180,000 — all revenue is profit", zh: "18 万美元——营收全是利润" } },
      ],
      answerId: "b",
      explanation: {
        en: "Economic profit = revenue − explicit − implicit = **180 − 60 − 150 = −$30k**. The $150k salary she gave up is an **implicit cost**. Accountants would report a $120k profit (choice A), but the economist says she's **$30k worse off** than staying in her old job.",
        zh: "经济利润 = 收入 − 显性 − 隐性 = **18 − 6 − 15 = −3 万美元**。她放弃的 15 万美元工资是**隐性成本**。会计会报告 12 万美元的利润(选项 A),但经济学家的结论是:她其实比留在原工作**少赚 3 万美元**。",
      },
    },

    // ---- PPC (3) ----
    {
      id: "u1q07",
      figure: { kind: "chart", chartType: "ppc" },
      prompt: {
        en: "Using the PPC above, which change represents **economic growth**?",
        zh: "根据上方 PPC,下列哪种变化代表**经济增长**?",
      },
      choices: [
        { id: "a", text: { en: "Moving from B (inside) to A (on the curve)", zh: "从 B(曲线内)移动到 A(曲线上)" } },
        { id: "b", text: { en: "Moving from A to another point on the same curve with more cars but less wheat", zh: "从 A 移到同一条曲线上另一点,汽车更多但小麦更少" } },
        { id: "c", text: { en: "The ENTIRE curve shifts outward, so C becomes attainable", zh: "整条曲线向外移动,使 C 变得可达" } },
        { id: "d", text: { en: "The curve stays the same shape but tilts clockwise", zh: "曲线形状不变,但顺时针旋转" } },
      ],
      answerId: "c",
      explanation: {
        en: "**Growth** means the economy can produce **more of both goods** than before — the whole PPC shifts outward, and previously-unreachable points like C become feasible. B→A (choice A) fixes efficiency but doesn't expand capacity. A-to-another-A-point (choice B) just changes the mix.",
        zh: "**增长**意味着经济体能比以前**同时生产更多两种商品**——整条 PPC 向外移动,像 C 这样原本不可达的点也变得可行。B→A(选项 A)只是提升效率,并未扩大产能。沿曲线换点(选项 B)只是改变组合。",
      },
    },
    {
      id: "u1q08",
      figure: {
        kind: "table",
        caption: {
          en: "Four points on a single PPC",
          zh: "同一条 PPC 上的四个点",
        },
        columns: [
          { en: "Point", zh: "点" },
          { en: "Cars", zh: "汽车" },
          { en: "Wheat", zh: "小麦" },
        ],
        rows: [
          [{ en: "P", zh: "P" }, { en: "0", zh: "0" }, { en: "12", zh: "12" }],
          [{ en: "Q", zh: "Q" }, { en: "2", zh: "2" }, { en: "10", zh: "10" }],
          [{ en: "R", zh: "R" }, { en: "4", zh: "4" }, { en: "6", zh: "6" }],
          [{ en: "S", zh: "S" }, { en: "6", zh: "6" }, { en: "0", zh: "0" }],
        ],
      },
      prompt: {
        en: "Compute the opportunity cost of 1 car when moving from **Q to R**.",
        zh: "计算从 **Q 到 R** 时每多生产 1 辆汽车的机会成本。",
      },
      choices: [
        { id: "a", text: { en: "1 wheat", zh: "1 小麦" } },
        { id: "b", text: { en: "2 wheat", zh: "2 小麦" } },
        { id: "c", text: { en: "4 wheat", zh: "4 小麦" } },
        { id: "d", text: { en: "6 wheat", zh: "6 小麦" } },
      ],
      answerId: "b",
      explanation: {
        en: "Wheat lost from Q to R = 10 − 6 = **4**. Cars gained = 4 − 2 = **2**. OC of 1 car = **4 ÷ 2 = 2 wheat**. Choice C is a trap for students who forget to divide by the number of cars gained. Note: OC of a car from P→Q was only 1 wheat — the curve shows **increasing OC**.",
        zh: "从 Q 到 R,小麦减少 = 10 − 6 = **4**。汽车增加 = 4 − 2 = **2**。每多 1 辆汽车的机会成本 = **4 ÷ 2 = 2 小麦**。选项 C 是陷阱,忘了要除以汽车增加数。注:P→Q 时每辆汽车的机会成本仅为 1 小麦——曲线显示**机会成本递增**。",
      },
    },
    {
      id: "u1q09",
      figure: {
        kind: "table",
        caption: {
          en: "Four events — how does each affect the PPC?",
          zh: "四个事件——各自如何影响 PPC?",
        },
        columns: [
          { en: "Event", zh: "事件" },
          { en: "Description", zh: "说明" },
        ],
        rows: [
          [{ en: "E1", zh: "E1" }, { en: "Government mandates factories switch from coal to solar", zh: "政府强制工厂从煤炭改用太阳能" }],
          [{ en: "E2", zh: "E2" }, { en: "30% of skilled engineers emigrate abroad", zh: "30% 的熟练工程师移居海外" }],
          [{ en: "E3", zh: "E3" }, { en: "Major new oil reserve discovered domestically", zh: "国内发现大型新油田" }],
          [{ en: "E4", zh: "E4" }, { en: "Hurricane destroys 15% of farmland", zh: "飓风摧毁 15% 的农田" }],
        ],
      },
      prompt: {
        en: "Which event represents a **movement along** the PPC rather than a **shift**?",
        zh: "哪个事件是**沿 PPC 移动**,而不是整条曲线**移动**?",
      },
      choices: [
        { id: "a", text: { en: "E1 — factories reallocate the same resources differently", zh: "E1——工厂用同样的资源,换一种方式使用" } },
        { id: "b", text: { en: "E2 — engineers leave the country", zh: "E2——工程师离开" } },
        { id: "c", text: { en: "E3 — a new oil reserve is found", zh: "E3——发现新油田" } },
        { id: "d", text: { en: "E4 — hurricane destroys farmland", zh: "E4——飓风摧毁农田" } },
      ],
      answerId: "a",
      explanation: {
        en: "**Movement along** the PPC = reallocating existing resources between the two goods. E1 changes the input mix but not total capacity. **E2 and E4 shrink the PPC inward** (fewer workers, less capital). **E3 expands it outward** (more natural resources). Only E1 stays on the same curve.",
        zh: "**沿 PPC 移动** = 在两种商品之间重新分配既有资源。E1 改变投入组合但没有改变总产能。**E2 和 E4 使 PPC 向内收缩**(工人减少、资本减少)。**E3 使 PPC 向外扩张**(自然资源增加)。只有 E1 停留在同一条曲线上。",
      },
    },

    // ---- Comparative Advantage (3) ----
    {
      id: "u1q10",
      figure: {
        kind: "table",
        caption: {
          en: "Hours needed to make 1 unit (smaller is better)",
          zh: "生产 1 单位所需小时数(越小越好)",
        },
        columns: [
          { en: "", zh: "" },
          { en: "Country X", zh: "X 国" },
          { en: "Country Y", zh: "Y 国" },
        ],
        rows: [
          [{ en: "Rice (1 unit)", zh: "大米(1 单位)" }, { en: "2 hrs", zh: "2 小时" }, { en: "6 hrs", zh: "6 小时" }],
          [{ en: "Tea (1 unit)", zh: "茶叶(1 单位)" }, { en: "4 hrs", zh: "4 小时" }, { en: "3 hrs", zh: "3 小时" }],
        ],
      },
      prompt: {
        en: "Which country has the **comparative advantage** in tea?",
        zh: "哪国在茶叶上具有**比较优势**?",
      },
      choices: [
        { id: "a", text: { en: "Country X — it can make both goods faster than Y", zh: "X 国——两种商品都比 Y 快" } },
        { id: "b", text: { en: "Country Y — it gives up less rice per unit of tea", zh: "Y 国——每生产 1 单位茶叶放弃的大米更少" } },
        { id: "c", text: { en: "Neither — their opportunity costs are equal", zh: "都没有——两国机会成本相等" } },
        { id: "d", text: { en: "Both — each has comparative advantage in both goods", zh: "两国都有——每国在两种商品上都有比较优势" } },
      ],
      answerId: "b",
      explanation: {
        en: "With hours-per-unit, OC of 1 tea = (hours for tea) ÷ (hours for rice). **X: 4/2 = 2 rice. Y: 3/6 = 0.5 rice.** Y gives up far less rice per tea → **Y has the comparative advantage in tea**. X has absolute advantage in both (fewer hours), but comparative advantage goes to whoever gives up less of the OTHER good.",
        zh: "用「小时/单位」来算,1 茶叶的机会成本 = (茶叶用时)÷(大米用时)。**X:4/2 = 2 大米;Y:3/6 = 0.5 大米**。Y 每多产 1 单位茶叶放弃的大米少得多 → **Y 在茶叶上有比较优势**。X 在两项上都有绝对优势(用时更少),但比较优势属于**放弃的那另一种商品更少**的一方。",
      },
    },
    {
      id: "u1q11",
      figure: {
        kind: "table",
        caption: {
          en: "Output per worker per day",
          zh: "每人每天产量",
        },
        columns: [
          { en: "", zh: "" },
          { en: "Alpha", zh: "Alpha 国" },
          { en: "Beta", zh: "Beta 国" },
        ],
        rows: [
          [{ en: "Fish", zh: "鱼" }, { en: "20", zh: "20" }, { en: "8", zh: "8" }],
          [{ en: "Fruit", zh: "水果" }, { en: "10", zh: "10" }, { en: "6", zh: "6" }],
        ],
      },
      prompt: {
        en: "Which country should **specialize** in which good based on comparative advantage?",
        zh: "按比较优势,两国应各自**专门生产**哪种商品?",
      },
      choices: [
        { id: "a", text: { en: "Alpha: fish; Beta: fruit", zh: "Alpha:鱼;Beta:水果" } },
        { id: "b", text: { en: "Alpha: fruit; Beta: fish", zh: "Alpha:水果;Beta:鱼" } },
        { id: "c", text: { en: "Alpha: both (it's better at both)", zh: "Alpha:两种都产(它在两项上更强)" } },
        { id: "d", text: { en: "Both should produce only fruit", zh: "两国都应只产水果" } },
      ],
      answerId: "a",
      explanation: {
        en: "Alpha OC of 1 fish = 10/20 = **0.5 fruit**. Beta OC of 1 fish = 6/8 = **0.75 fruit**. Alpha gives up less fruit per fish → **Alpha specializes in fish**. Flip for fruit: Alpha OC = 2 fish, Beta OC ≈ 1.33 fish → **Beta specializes in fruit**. Choice C is the common error — absolute advantage does NOT determine who specializes.",
        zh: "Alpha 生产 1 鱼的机会成本 = 10/20 = **0.5 水果**。Beta 生产 1 鱼的机会成本 = 6/8 = **0.75 水果**。Alpha 更少放弃水果 → **Alpha 专门产鱼**。水果方向反过来:Alpha 机会成本 = 2 鱼,Beta ≈ 1.33 鱼 → **Beta 专门产水果**。选项 C 是常见错误——绝对优势**并不**决定谁专业化。",
      },
    },
    {
      id: "u1q12",
      figure: {
        kind: "table",
        caption: {
          en: "Derived opportunity costs (from the Alpha/Beta table)",
          zh: "由 Alpha/Beta 表推出的机会成本",
        },
        columns: [
          { en: "", zh: "" },
          { en: "OC of 1 fish (in fruit)", zh: "1 鱼的机会成本(以水果计)" },
        ],
        rows: [
          [{ en: "Alpha", zh: "Alpha" }, { en: "0.5", zh: "0.5" }],
          [{ en: "Beta", zh: "Beta" }, { en: "0.75", zh: "0.75" }],
        ],
      },
      prompt: {
        en: "At which terms of trade will **both** countries gain if Alpha exports fish to Beta?",
        zh: "若 Alpha 向 Beta 出口鱼,在哪种贸易条件下**两国都**获益?",
      },
      choices: [
        { id: "a", text: { en: "0.3 fruit per fish", zh: "每鱼换 0.3 水果" } },
        { id: "b", text: { en: "0.6 fruit per fish", zh: "每鱼换 0.6 水果" } },
        { id: "c", text: { en: "1.0 fruit per fish", zh: "每鱼换 1.0 水果" } },
        { id: "d", text: { en: "Any rate at all — trade is always mutually beneficial", zh: "任意比率都行——贸易总是互利" } },
      ],
      answerId: "b",
      explanation: {
        en: "Mutually beneficial terms must fall **strictly between** the two countries' opportunity costs: between **0.5 and 0.75 fruit per fish**. **0.6 is inside** that range → both gain. **0.3 < 0.5** → Alpha would rather keep producing its own fruit. **1.0 > 0.75** → Beta would rather keep producing its own fish.",
        zh: "互利的贸易条件必须**严格位于**两国机会成本**之间**:介于 **0.5 和 0.75 水果/鱼** 之间。**0.6 位于该区间** → 两国都获益。**0.3 < 0.5** → Alpha 宁愿自产水果。**1.0 > 0.75** → Beta 宁愿自产鱼。",
      },
    },

    // ---- Economic Systems (3) ----
    {
      id: "u1q13",
      figure: {
        kind: "table",
        caption: {
          en: "Flows in the circular flow model",
          zh: "循环流模型中的流动",
        },
        columns: [
          { en: "Market", zh: "市场" },
          { en: "Flow OUT of households →", zh: "从家庭流出 →" },
          { en: "Flow IN to households ←", zh: "流入家庭 ←" },
        ],
        rows: [
          [{ en: "Factor market", zh: "要素市场" }, { en: "?", zh: "?" }, { en: "Wages, rent, interest", zh: "工资、租金、利息" }],
          [{ en: "Product market", zh: "产品市场" }, { en: "Payments for goods", zh: "购买商品的支付" }, { en: "Goods and services", zh: "商品与服务" }],
        ],
      },
      prompt: {
        en: "What correctly fills the blank — the flow **out of households** in the factor market?",
        zh: "空格处应填什么——要素市场中**从家庭流出**的是?",
      },
      choices: [
        { id: "a", text: { en: "Goods and services", zh: "商品与服务" } },
        { id: "b", text: { en: "Labor, land, and capital", zh: "劳动、土地与资本" } },
        { id: "c", text: { en: "Taxes paid to government", zh: "给政府缴的税" } },
        { id: "d", text: { en: "Profits retained by firms", zh: "企业留存的利润" } },
      ],
      answerId: "b",
      explanation: {
        en: "Households **own** the factors of production — their labor, their land, their savings/capital — and **supply** them to firms in the factor market. In exchange, firms pay wages, rent, and interest (the other direction). Goods flow in the product market, not the factor market.",
        zh: "家庭**拥有**生产要素——自己的劳动、土地、储蓄 / 资本——并在要素市场上把它们**供给**给企业。作为交换,企业支付工资、租金和利息(另一方向)。商品在产品市场流动,而不是要素市场。",
      },
    },
    {
      id: "u1q14",
      figure: {
        kind: "table",
        caption: {
          en: "Three hypothetical countries",
          zh: "三个假设国家",
        },
        columns: [
          { en: "Country", zh: "国家" },
          { en: "Notable features", zh: "显著特征" },
        ],
        rows: [
          [
            { en: "Nation P", zh: "P 国" },
            { en: "90% of industry state-owned; central planner sets 5-year output targets.", zh: "90% 的产业国有;中央计划者设定 5 年产量目标。" },
          ],
          [
            { en: "Nation Q", zh: "Q 国" },
            { en: "Private ownership dominates; government funds schools, defense, and regulates banks.", zh: "以私有制为主;政府资助学校、国防,并监管银行。" },
          ],
          [
            { en: "Nation R", zh: "R 国" },
            { en: "Zero government: no taxes, no public services, no regulations.", zh: "政府完全缺席:无税收、无公共服务、无监管。" },
          ],
        ],
      },
      prompt: {
        en: "Which nation most closely resembles **every real modern developed economy**?",
        zh: "哪一国最接近**现实中所有现代发达经济体**?",
      },
      choices: [
        { id: "a", text: { en: "P — a pure command economy", zh: "P——纯粹的计划经济" } },
        { id: "b", text: { en: "Q — a mixed economy", zh: "Q——混合经济" } },
        { id: "c", text: { en: "R — a pure market economy", zh: "R——纯粹的市场经济" } },
        { id: "d", text: { en: "Equal parts of all three, rotated by year", zh: "三者每年轮换,比例相等" } },
      ],
      answerId: "b",
      explanation: {
        en: "Every real modern developed economy is **mixed**: markets as the primary allocation mechanism, with government intervention for public goods (defense, schools), regulation (banks), and redistribution. **Pure market (R)** exists nowhere. **Pure command (P)** is historical (former USSR, DPRK), not typical of modern developed economies.",
        zh: "所有现代发达经济体都是**混合经济**:以市场为主要分配机制,政府在公共物品(国防、学校)、监管(银行)、再分配上介入。**纯市场(R)**现实中不存在。**纯计划(P)**是历史上的(前苏联、朝鲜),并非典型的现代发达经济体。",
      },
    },
    {
      id: "u1q15",
      prompt: {
        en: "A global semiconductor shortage pushes chip prices up. Chip foundries invest in new fabs; consumers delay phone upgrades; phone makers redesign around cheaper chips. No government agency coordinated any of this. Which concept BEST explains the coordinated response?",
        zh: "全球芯片短缺使芯片价格上涨。晶圆厂投资新产线;消费者推迟换手机;手机厂商改用更便宜的芯片重新设计。这一切没有任何政府机构协调。以下哪个概念最能解释这种协调?",
      },
      choices: [
        { id: "a", text: { en: "Command-economy planning", zh: "计划经济的规划" } },
        { id: "b", text: { en: "Market failure — prices send the wrong signal", zh: "市场失灵——价格传递错误信号" } },
        { id: "c", text: { en: "The invisible hand — price signals coordinate self-interested decisions", zh: "看不见的手——价格信号协调各方的自利决策" } },
        { id: "d", text: { en: "Tragedy of the commons", zh: "公地悲剧" } },
      ],
      answerId: "c",
      explanation: {
        en: "Rising prices signal scarcity. Foundries (chase profit), consumers (save money), and phone makers (cut costs) each act in their own interest — and yet the responses are coordinated. **No planner is needed; the price system does the work.** That's the **invisible hand**. Choice B would apply if prices failed to reflect real scarcity — here they're working correctly.",
        zh: "价格上涨传递稀缺信号。晶圆厂(追求利润)、消费者(省钱)、手机厂(降成本)都出于自身利益行动,然而各方反应协调一致。**不需要任何计划者,价格体系自行完成协调**。这就是**看不见的手**。选项 B 只在价格未能反映真实稀缺时适用——这里价格正在正常运作。",
      },
    },
  ],

  "unit-2": [
    // ---- Demand (3) ----
    {
      id: "u2q01",
      figure: {
        kind: "table",
        caption: {
          en: "Demand schedule for strawberries at a farmers' market",
          zh: "农贸市场草莓需求表",
        },
        columns: [
          { en: "Price / pint", zh: "每品脱价格" },
          { en: "Quantity demanded (pints)", zh: "需求量(品脱)" },
        ],
        rows: [
          [{ en: "$3", zh: "$3" }, { en: "400", zh: "400" }],
          [{ en: "$5", zh: "$5" }, { en: "280", zh: "280" }],
          [{ en: "$7", zh: "$7" }, { en: "180", zh: "180" }],
          [{ en: "$9", zh: "$9" }, { en: "100", zh: "100" }],
        ],
      },
      prompt: {
        en: "A news report claims strawberries prevent cancer, making them suddenly very popular. Which correctly describes the change?",
        zh: "一则新闻报道称草莓能预防癌症,草莓突然大受欢迎。以下哪项正确描述了变化?",
      },
      choices: [
        { id: "a", text: { en: "Quantity demanded rises along the existing curve.", zh: "沿现有曲线,需求量上升。" } },
        { id: "b", text: { en: "The demand curve shifts RIGHT — at every price, more pints are now wanted.", zh: "需求曲线**右移**——任意价格下想买的数量都增加。" } },
        { id: "c", text: { en: "The supply curve shifts right.", zh: "供给曲线右移。" } },
        { id: "d", text: { en: "The demand curve shifts left.", zh: "需求曲线左移。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Price didn't change — **tastes** did. The whole demand curve shifts **right**: at every price, the new Qd is higher than the table shows. This is the 'T' in **TRIBE** (tastes/preferences). Choice A is wrong because a taste shift never moves you ALONG the old curve — it draws a new one.",
        zh: "价格没变——变的是**偏好**。整条需求曲线**右移**:任意价格下新的 Qd 都高于表中数字。这是 **TRIBE** 中的「T」(偏好)。选项 A 错误:偏好变化不会沿旧曲线移动,而是画一条新曲线。",
      },
    },
    {
      id: "u2q02",
      prompt: {
        en: "Peanut butter and jelly are **complements**. The price of peanut butter **falls** sharply. What happens to the **demand for jelly**?",
        zh: "花生酱与果酱是**互补品**。花生酱价格**大幅下跌**。**果酱需求**会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "Demand for jelly shifts LEFT.", zh: "果酱需求**左移**。" } },
        { id: "b", text: { en: "Demand for jelly shifts RIGHT — cheaper peanut butter means more PB&J, which pulls jelly demand up.", zh: "果酱需求**右移**——花生酱变便宜使 PB&J 增加,进而拉升果酱需求。" } },
        { id: "c", text: { en: "Demand for jelly is unchanged — it's a different product.", zh: "果酱需求不变——它们是不同的商品。" } },
        { id: "d", text: { en: "Quantity demanded of jelly falls along its existing curve.", zh: "果酱需求量沿现有曲线下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "For **complements**, a price change in one shifts demand for the other in the SAME direction as consumption. Cheaper peanut butter → more PB&J sandwiches → more jelly wanted at every price → **D for jelly shifts right**. Substitutes work the opposite way (substitute gets cheaper → demand for the other falls).",
        zh: "对**互补品**,一方价格变化会使另一方的需求朝**同方向**(消费量)移动。花生酱便宜 → 做更多 PB&J → 任意价格下想买的果酱增加 → **果酱需求右移**。替代品则相反(替代品便宜 → 另一方需求下降)。",
      },
    },
    {
      id: "u2q03",
      figure: {
        kind: "table",
        caption: {
          en: "Four changes in the market for domestic flights",
          zh: "国内航班市场的四个变化",
        },
        columns: [
          { en: "Change", zh: "变化" },
          { en: "Effect on DEMAND for domestic flights?", zh: "对国内航班**需求**的影响?" },
        ],
        rows: [
          [{ en: "Median income rises 10%", zh: "中位收入上升 10%" }, { en: "?", zh: "?" }],
          [{ en: "Price of gasoline (substitute for driving) rises 40%", zh: "汽油价格(驾车的替代品)上涨 40%" }, { en: "?", zh: "?" }],
          [{ en: "Airline fuel (an INPUT) price rises 40%", zh: "航油(**投入品**)价格上涨 40%" }, { en: "?", zh: "?" }],
          [{ en: "Population of travel-age adults grows 5%", zh: "旅行年龄段成年人口增长 5%" }, { en: "?", zh: "?" }],
        ],
      },
      prompt: {
        en: "Which change does NOT shift the demand curve for domestic flights?",
        zh: "哪项**不会**使国内航班的需求曲线移动?",
      },
      choices: [
        { id: "a", text: { en: "Rising income", zh: "收入上升" } },
        { id: "b", text: { en: "Gasoline price rise (driving is a substitute)", zh: "汽油价格上涨(驾车是替代品)" } },
        { id: "c", text: { en: "Airline fuel price rise — this affects SUPPLY, not demand", zh: "航油价格上涨——这影响的是**供给**,不是需求" } },
        { id: "d", text: { en: "Population growth", zh: "人口增长" } },
      ],
      answerId: "c",
      explanation: {
        en: "Input costs (airline fuel) hit **the seller's side**, shifting **supply**, not demand. The other three are all demand shifters: income (I), substitute price (R), buyers (B) — three of the TRIBE factors. Classic trap: **fuel price** sounds like it should affect flight demand, but the link runs through production cost → supply.",
        zh: "投入品成本(航油)打在**卖方一侧**,使**供给**移动,不是需求。其他三项都是需求移动因素:收入(I)、替代品价格(R)、买家数量(B)——TRIBE 中的三项。经典陷阱:**燃料价格**看起来像会影响航班需求,但它其实是通过生产成本 → 供给这条路径作用。",
      },
    },

    // ---- Supply (3) ----
    {
      id: "u2q04",
      figure: {
        kind: "table",
        caption: {
          en: "Four changes in the egg market",
          zh: "鸡蛋市场的四个变化",
        },
        columns: [
          { en: "Change", zh: "变化" },
          { en: "Shifts supply?", zh: "使供给如何移动?" },
        ],
        rows: [
          [{ en: "Bird-flu outbreak culls 20% of hens", zh: "禽流感导致 20% 的母鸡被扑杀" }, { en: "?", zh: "?" }],
          [{ en: "Per-egg subsidy of $0.10 enacted", zh: "出台每枚 $0.10 的补贴" }, { en: "?", zh: "?" }],
          [{ en: "Feed (chicken food) price doubles", zh: "饲料价格翻倍" }, { en: "?", zh: "?" }],
          [{ en: "New automated egg-sorting machines cut labor 30%", zh: "新自动分拣机减少人工 30%" }, { en: "?", zh: "?" }],
        ],
      },
      prompt: {
        en: "Which pair of changes shifts egg supply in the **SAME** direction?",
        zh: "以下哪组变化使鸡蛋供给朝**相同**方向移动?",
      },
      choices: [
        { id: "a", text: { en: "Bird flu + feed price ↑ (both left)", zh: "禽流感 + 饲料涨价(都左移)" } },
        { id: "b", text: { en: "Subsidy + feed price ↑ (both right)", zh: "补贴 + 饲料涨价(都右移)" } },
        { id: "c", text: { en: "Subsidy + sorting machines (both left)", zh: "补贴 + 分拣机(都左移)" } },
        { id: "d", text: { en: "Bird flu + subsidy (both right)", zh: "禽流感 + 补贴(都右移)" } },
      ],
      answerId: "a",
      explanation: {
        en: "**Bird flu** cuts producers → S **left**. **Feed ↑** raises marginal cost → S **left**. Same direction ✓. A **subsidy** and **better tech** both shift S **right**, so they share a direction but match *each other*, not either of the left-shifters. Choice B mixes one right with one left.",
        zh: "**禽流感**减少生产者 → S **左移**。**饲料涨价**提高边际成本 → S **左移**。方向相同 ✓。**补贴**和**更好的技术**都使 S **右移**,它们方向一致但与左移的两项不同。选项 B 把一右一左混在一起。",
      },
    },
    {
      id: "u2q05",
      prompt: {
        en: "In the market for eggs, supply shifts **left** (bird flu). What are the effects on equilibrium **price** and **quantity**?",
        zh: "鸡蛋市场中,供给**左移**(禽流感)。均衡**价格**和**数量**会如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Price rises, quantity rises.", zh: "价格上升,数量上升。" } },
        { id: "b", text: { en: "Price falls, quantity falls.", zh: "价格下降,数量下降。" } },
        { id: "c", text: { en: "Price rises, quantity falls.", zh: "价格上升,数量下降。" } },
        { id: "d", text: { en: "Price falls, quantity rises.", zh: "价格下降,数量上升。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Use the **four-combo rule** for a left shift in supply: **P rises, Q falls**. Intuition: fewer eggs for sale → scarcity bids price up, and there are simply fewer eggs changing hands. Choice D reverses supply and demand logic.",
        zh: "套用 S 左移的**四组合规则**:**P 上升、Q 下降**。直觉:出售的鸡蛋变少 → 稀缺推高价格,成交量也下降。选项 D 把供需逻辑反了。",
      },
    },
    {
      id: "u2q06",
      prompt: {
        en: "A farmer can plant **either** corn OR soybeans on the same acre. The price of soybeans **triples**, while corn's price and all input costs remain unchanged. What happens to the **supply of corn**?",
        zh: "农民可以在同一亩地上种**玉米**或**大豆**(只能选其一)。大豆价格**翻三倍**,玉米价格与所有投入成本不变。**玉米的供给**会发生什么?",
      },
      choices: [
        { id: "a", text: { en: "Supply of corn shifts RIGHT — rising prices attract production.", zh: "玉米供给**右移**——价格上涨吸引生产。" } },
        { id: "b", text: { en: "Supply of corn shifts LEFT — farmers reallocate acres from corn to soybeans.", zh: "玉米供给**左移**——农民把土地从玉米转向大豆。" } },
        { id: "c", text: { en: "Demand for corn shifts.", zh: "玉米需求曲线移动。" } },
        { id: "d", text: { en: "Nothing — corn's own price didn't change.", zh: "没变化——玉米自己的价格没变。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Soybeans compete with corn for the **same acre** (other-goods-in-production link — the 'O' in **ROTTEN**). When soybean price triples, each corn-acre has a **higher opportunity cost**, so farmers plant less corn at every price. **Corn supply shifts LEFT**. Choice D confuses 'no change in corn's price' with 'no effect' — but shifters work through costs, not own-price.",
        zh: "大豆与玉米争抢**同一亩地**(生产中的其他商品——**ROTTEN** 中的「O」)。大豆价格翻三倍时,每亩玉米的**机会成本**上升,农民任意价格下都少种玉米。**玉米供给左移**。选项 D 把「玉米自己价格没变」等同于「没有影响」——但移动因素作用于成本,而不是本商品的价格。",
      },
    },

    // ---- Market Equilibrium (3) ----
    {
      id: "u2q07",
      figure: { kind: "chart", chartType: "supply-demand" },
      prompt: {
        en: "In the chart, suppose the price is set **below** equilibrium. Which statement correctly describes the market outcome?",
        zh: "在图中,若价格设在**低于均衡**的水平,下列哪项正确描述市场结果?",
      },
      choices: [
        { id: "a", text: { en: "Surplus — Qs exceeds Qd, and sellers cut prices.", zh: "过剩——Qs 大于 Qd,卖家降价。" } },
        { id: "b", text: { en: "Shortage — Qd exceeds Qs; absent restrictions, buyers bid price up to equilibrium.", zh: "短缺——Qd 大于 Qs;若无管制,买家抬价至均衡。" } },
        { id: "c", text: { en: "Still in equilibrium — the chart is symmetric.", zh: "仍然均衡——图是对称的。" } },
        { id: "d", text: { en: "The supply curve shifts left.", zh: "供给曲线左移。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Below the equilibrium price, read the chart: the demand curve sits to the RIGHT of the supply curve → **Qd > Qs** → **shortage**. Without a price ceiling blocking it, buyers' bidding restores equilibrium. Choice A reverses the direction.",
        zh: "在均衡价格之下,看图:需求曲线位于供给曲线**右侧** → **Qd > Qs** → **短缺**。若没有价格上限阻挡,买家抬价恢复均衡。选项 A 方向反了。",
      },
    },
    {
      id: "u2q08",
      prompt: {
        en: "Simultaneously: **demand falls** AND **supply falls**. Using the four-combo rule, what can you conclude about equilibrium price and quantity?",
        zh: "**需求下降**与**供给下降**同时发生。用四组合规则,能对均衡价格和数量下什么结论?",
      },
      choices: [
        { id: "a", text: { en: "P definitely rises, Q definitely falls.", zh: "P 一定上升,Q 一定下降。" } },
        { id: "b", text: { en: "Q definitely falls; P is ambiguous (depends on the relative size of the shifts).", zh: "Q 一定下降;P 不确定(取决于两次移动的相对幅度)。" } },
        { id: "c", text: { en: "P definitely falls; Q is ambiguous.", zh: "P 一定下降;Q 不确定。" } },
        { id: "d", text: { en: "Both definitely fall.", zh: "两者都一定下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Alone, **D↓** gives P↓ and Q↓. Alone, **S↓** gives P↑ and Q↓. Both push **Q down** → Q definitely falls. But they push P in **opposite directions** → **P is ambiguous**. Choice D forgets that the two effects on P partly cancel.",
        zh: "单独看,**D↓**:P↓、Q↓;**S↓**:P↑、Q↓。两者都推 **Q 下降** → Q 一定下降。但它们推 P **方向相反** → **P 不确定**。选项 D 忘了两个效应在 P 上部分抵消。",
      },
    },
    {
      id: "u2q09",
      figure: {
        kind: "table",
        caption: {
          en: "Banana market schedule (boxes/day)",
          zh: "香蕉市场表(每日箱数)",
        },
        columns: [
          { en: "Price", zh: "价格" },
          { en: "Qd", zh: "Qd" },
          { en: "Qs", zh: "Qs" },
        ],
        rows: [
          [{ en: "$10", zh: "$10" }, { en: "900", zh: "900" }, { en: "300", zh: "300" }],
          [{ en: "$15", zh: "$15" }, { en: "700", zh: "700" }, { en: "500", zh: "500" }],
          [{ en: "$20", zh: "$20" }, { en: "500", zh: "500" }, { en: "700", zh: "700" }],
          [{ en: "$25", zh: "$25" }, { en: "300", zh: "300" }, { en: "900", zh: "900" }],
        ],
      },
      prompt: {
        en: "The schedule shows no price where Qd = Qs exactly. What is the **equilibrium price range**?",
        zh: "上表中没有一个价格恰好让 Qd = Qs。**均衡价格区间**是什么?",
      },
      choices: [
        { id: "a", text: { en: "Between $10 and $15", zh: "在 $10 和 $15 之间" } },
        { id: "b", text: { en: "Between $15 and $20 — where Qd − Qs flips sign", zh: "在 $15 和 $20 之间——Qd − Qs 在此区间变号" } },
        { id: "c", text: { en: "Between $20 and $25", zh: "在 $20 和 $25 之间" } },
        { id: "d", text: { en: "No equilibrium exists.", zh: "不存在均衡。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Equilibrium sits where **Qd = Qs**. At **$15**, Qd (700) > Qs (500) → shortage. At **$20**, Qs (700) > Qd (500) → surplus. Since the sign flips between these rows, the market-clearing price lies **between $15 and $20** (around $17.50 by interpolation).",
        zh: "均衡在 **Qd = Qs** 处。**$15** 时 Qd(700)> Qs(500)→ 短缺;**$20** 时 Qs(700)> Qd(500)→ 过剩。两行之间符号翻转,所以出清价格位于 **$15 和 $20 之间**(插值约 $17.50)。",
      },
    },

    // ---- Elasticity (3) ----
    {
      id: "u2q10",
      prompt: {
        en: "Bus fares rise from $2.00 to $2.50 (a 25% increase) and ridership falls from 10,000 to 9,500 (a 5% decrease). Is the demand for bus rides elastic or inelastic?",
        zh: "公交车票从 $2.00 涨到 $2.50(涨 25%),乘客量从 10,000 降到 9,500(降 5%)。公交车需求富有弹性还是缺乏弹性?",
      },
      choices: [
        { id: "a", text: { en: "Ed = 5.00 — highly elastic", zh: "Ed = 5.00——高度富有弹性" } },
        { id: "b", text: { en: "Ed = 0.20 — inelastic", zh: "Ed = 0.20——缺乏弹性" } },
        { id: "c", text: { en: "Ed = 1.00 — unit elastic", zh: "Ed = 1.00——单位弹性" } },
        { id: "d", text: { en: "Ed = 20 — hyper-elastic", zh: "Ed = 20——超弹性" } },
      ],
      answerId: "b",
      explanation: {
        en: "Ed = |%ΔQ ÷ %ΔP| = |−5% ÷ 25%| = **0.20**. Since **Ed < 1**, demand is **inelastic** — commuters have few substitutes in the short run, so a big fare hike barely changed ridership. Choice A inverts the ratio.",
        zh: "Ed = |%ΔQ ÷ %ΔP| = |−5% ÷ 25%| = **0.20**。因为 **Ed < 1**,需求**缺乏弹性**——通勤者短期内没有什么替代方式,所以大幅涨价几乎没改变乘车量。选项 A 把比值写反了。",
      },
    },
    {
      id: "u2q11",
      prompt: {
        en: "A streaming service **raises** its monthly price 10% and its total subscription revenue **rises** by 4%. Use the total-revenue test to identify demand elasticity.",
        zh: "某流媒体服务将月费**上调** 10%,订阅总收益**上升** 4%。用总收益检验判断需求弹性。",
      },
      choices: [
        { id: "a", text: { en: "Elastic (Ed > 1).", zh: "富有弹性(Ed > 1)。" } },
        { id: "b", text: { en: "Inelastic (Ed < 1).", zh: "缺乏弹性(Ed < 1)。" } },
        { id: "c", text: { en: "Unit elastic (Ed = 1).", zh: "单位弹性(Ed = 1)。" } },
        { id: "d", text: { en: "Perfectly elastic (Ed = ∞).", zh: "完全弹性(Ed = ∞)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Price ↑ and TR ↑** → demand is **inelastic**. The quantity lost (subscribers who churned) was smaller in percent than the price hike, so revenue grew. If demand were elastic, raising price would have shrunk TR. Streaming has many substitutes, but locked-in users and subscription inertia make short-run demand inelastic.",
        zh: "**价格 ↑ 且 TR ↑** → 需求**缺乏弹性**。流失(退订)的百分比小于涨价的百分比,所以收益仍然增长。若需求富有弹性,涨价会使 TR 下降。流媒体虽有许多替代品,但**订阅惰性**使短期需求缺乏弹性。",
      },
    },
    {
      id: "u2q12",
      figure: {
        kind: "table",
        caption: {
          en: "Four goods — determinants of elasticity",
          zh: "四种商品——弹性决定因素",
        },
        columns: [
          { en: "Good", zh: "商品" },
          { en: "Many substitutes?", zh: "替代品多吗?" },
          { en: "Luxury?", zh: "奢侈品?" },
          { en: "Big % of budget?", zh: "占预算大比例?" },
        ],
        rows: [
          [{ en: "Designer handbag", zh: "名牌手袋" }, { en: "Yes", zh: "是" }, { en: "Yes", zh: "是" }, { en: "Yes", zh: "是" }],
          [{ en: "Tap water", zh: "自来水" }, { en: "No", zh: "没有" }, { en: "No (necessity)", zh: "否(必需品)" }, { en: "Tiny", zh: "极小" }],
          [{ en: "Chewing gum", zh: "口香糖" }, { en: "Yes", zh: "是" }, { en: "No", zh: "否" }, { en: "Tiny", zh: "极小" }],
          [{ en: "International flight", zh: "国际机票" }, { en: "Yes", zh: "是" }, { en: "Yes", zh: "是" }, { en: "Yes", zh: "是" }],
        ],
      },
      prompt: {
        en: "Which good has the **most ELASTIC** demand?",
        zh: "哪种商品的需求**最富有弹性**?",
      },
      choices: [
        { id: "a", text: { en: "Designer handbag", zh: "名牌手袋" } },
        { id: "b", text: { en: "Tap water", zh: "自来水" } },
        { id: "c", text: { en: "Chewing gum", zh: "口香糖" } },
        { id: "d", text: { en: "International flight", zh: "国际机票" } },
      ],
      answerId: "a",
      explanation: {
        en: "All three determinants point to **very elastic** demand for a designer handbag: **many substitutes** (other brands, no-name bags, no bag at all), **luxury** (easy to skip), and **large share of budget** (buyers notice the price). International flights are also elastic but slightly less so (time-sensitive travel). Tap water is the most **in**elastic. Chewing gum sits in the middle.",
        zh: "三项决定因素都指向名牌手袋需求**极富弹性**:**替代品多**(其他品牌、非品牌包、不买)、**奢侈品**(容易放弃)、**占预算比例大**(买家在意价格)。国际机票也富有弹性,但略低一点(时间敏感旅行)。自来水是最**缺乏弹性**的。口香糖居中。",
      },
    },

    // ---- Government Intervention (3) ----
    {
      id: "u2q13",
      figure: {
        kind: "table",
        caption: {
          en: "Low-skilled labor market: market wage = $10/hr. Consider two minimum wages:",
          zh: "低技能劳动市场:市场工资 = $10/小时。考虑两种最低工资:",
        },
        columns: [
          { en: "Minimum wage", zh: "最低工资" },
          { en: "Qd (workers)", zh: "Qd(雇用量)" },
          { en: "Qs (workers)", zh: "Qs(求职量)" },
        ],
        rows: [
          [{ en: "$7/hr (case A)", zh: "$7/小时(情境 A)" }, { en: "10,000", zh: "10,000" }, { en: "6,000", zh: "6,000" }],
          [{ en: "$12/hr (case B)", zh: "$12/小时(情境 B)" }, { en: "8,000", zh: "8,000" }, { en: "11,000", zh: "11,000" }],
        ],
      },
      prompt: {
        en: "Which minimum wage is **binding**, and what does it produce?",
        zh: "哪一种最低工资具有**约束力**,会造成什么?",
      },
      choices: [
        { id: "a", text: { en: "Case A is binding — it creates a surplus of labor (unemployment).", zh: "情境 A 有约束力——造成劳动过剩(失业)。" } },
        { id: "b", text: { en: "Case B is binding — it sits above the $10 market wage and creates a SURPLUS of 3,000 workers (unemployment).", zh: "情境 B 有约束力——高于 $10 市场工资,造成 3,000 人的**劳动过剩**(失业)。" } },
        { id: "c", text: { en: "Both are binding.", zh: "两者都具约束力。" } },
        { id: "d", text: { en: "Neither is binding.", zh: "两者都不具约束力。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A **price floor** (minimum wage) only **binds** if set **above** the equilibrium. Market wage is $10, so **$7 < $10 → non-binding** (employers ignore it; wage stays at $10). **$12 > $10 → binding**, creating a labor **surplus** of 11,000 − 8,000 = **3,000** workers who want jobs but can't find them (unemployment).",
        zh: "**价格下限**(最低工资)只有在**高于**均衡时才具约束力。市场工资 $10,所以 **$7 < $10 → 不具约束力**(雇主忽略,工资仍为 $10)。**$12 > $10 → 具约束力**,造成劳动**过剩** 11,000 − 8,000 = **3,000** 名想工作但找不到工作的人(失业)。",
      },
    },
    {
      id: "u2q14",
      figure: {
        kind: "table",
        caption: {
          en: "Before and after a $4/pack cigarette tax (paid by sellers)",
          zh: "对香烟征每包 $4 税(由卖方缴纳)前后",
        },
        columns: [
          { en: "Metric", zh: "指标" },
          { en: "Before", zh: "税前" },
          { en: "After", zh: "税后" },
        ],
        rows: [
          [{ en: "Price buyers pay", zh: "买家支付价" }, { en: "$8", zh: "$8" }, { en: "$11.50", zh: "$11.50" }],
          [{ en: "Price sellers keep (net)", zh: "卖家净得价" }, { en: "$8", zh: "$8" }, { en: "$7.50", zh: "$7.50" }],
          [{ en: "Quantity (packs/day)", zh: "成交量(每日包)" }, { en: "1,000", zh: "1,000" }, { en: "900", zh: "900" }],
        ],
      },
      prompt: {
        en: "Who bears the larger share of the $4 tax, and what is **tax revenue**?",
        zh: "$4 税负中**谁承担更大部分**?税收总额是多少?",
      },
      choices: [
        { id: "a", text: { en: "Split 50-50 because the tax is $4; revenue = $4,000.", zh: "五五分,因为税额为 $4;税收 = $4,000。" } },
        { id: "b", text: { en: "Buyers bear $3.50 of the $4 (price rose from $8 to $11.50); tax revenue = $4 × 900 = $3,600.", zh: "买家承担 $4 中的 $3.50(价格从 $8 涨到 $11.50);税收 = $4 × 900 = $3,600。" } },
        { id: "c", text: { en: "Sellers bear all $4; revenue = $3,600.", zh: "卖家承担全部 $4;税收 = $3,600。" } },
        { id: "d", text: { en: "Buyers bear $0.50, sellers bear $3.50; revenue = $3,600.", zh: "买家承担 $0.50,卖家承担 $3.50;税收 = $3,600。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Buyer's share = new buyer price − old price = $11.50 − $8 = $3.50**. **Seller's share = $0.50** ($8 − $7.50). Buyers bear 7/8 of the tax — demand for cigarettes is very **inelastic**, so buyers can't escape by cutting quantity. **Tax revenue = tax × new Q = $4 × 900 = $3,600**. Choice A wrongly assumes 50-50 regardless of elasticity.",
        zh: "**买家承担 = 新买价 − 原价 = $11.50 − $8 = $3.50**。**卖家承担 = $0.50**($8 − $7.50)。买家承担 7/8 的税——香烟需求**非常缺乏弹性**,买家无法通过减量避税。**税收 = 单位税 × 新数量 = $4 × 900 = $3,600**。选项 A 错误地假设不论弹性如何都五五分。",
      },
    },
    {
      id: "u2q15",
      prompt: {
        en: "A city imposes a rent ceiling of $800 in a market where equilibrium rent is $1,200. Which group is made UNAMBIGUOUSLY BETTER OFF by the ceiling?",
        zh: "某市在均衡租金 $1,200 的市场上实施 $800 的租金上限。哪个群体**明确受益**?",
      },
      choices: [
        { id: "a", text: { en: "All renters — everyone pays less rent.", zh: "所有租客——人人少付租金。" } },
        { id: "b", text: { en: "Landlords — they now face clearer rules.", zh: "房东——规则更清晰。" } },
        { id: "c", text: { en: "Only renters who manage to secure a unit at $800 — they pay less, but fewer units are available overall, so many would-be renters can't find a home.", zh: "**只有**以 $800 抢到房的租客——他们少付租金,但整体供给减少,许多想租的人根本租不到。" } },
        { id: "d", text: { en: "Everyone — ceilings always help both sides.", zh: "所有人——上限对双方都有利。" } },
      ],
      answerId: "c",
      explanation: {
        en: "A binding ceiling helps the **lucky renters** who score one of the reduced number of units (Qs = 7,000 vs. the old 10,000). Other would-be renters are stuck on waitlists or pushed to the black market — **worse off**. Landlords also lose (lower revenue and often lower supply long-run). The policy is a **transfer from landlords to a subset of renters**, not a free lunch.",
        zh: "具约束力的上限只帮助到**幸运**抢到房的租客(Qs 从 10,000 降至 7,000 中的那部分人)。其他想租的人被迫排队或流向黑市,**境况更差**。房东也受损(收入下降,长期供给进一步减少)。这一政策实际是**从房东向一部分租客转移**,而非人人受益。",
      },
    },
  ],
};

// ============================================================
// AP Biology — skeleton (units + topics per College Board CED)
// Notes and questions to be authored topic-by-topic.
// ============================================================

export const apBio: Subject = {
  slug: "ap-bio",
  title: { en: "AP Biology", zh: "AP 生物学" },
  tagline: {
    en: "How life works — from molecules to ecosystems.",
    zh: "生命如何运作——从分子到生态系统。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "Chemistry of Life", zh: "生命的化学基础" },
      description: {
        en: "Water, carbon, macromolecules, and the chemical properties that make life possible.",
        zh: "水、碳、生物大分子,以及使生命成为可能的化学性质。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Structure of Water & Hydrogen Bonding", zh: "水的结构与氢键" }, summary: { en: "Why water's polarity drives nearly every biological process.", zh: "水的极性为何驱动几乎所有生物过程。" } },
        { slug: "topic-2", title: { en: "Elements of Life", zh: "生命的元素组成" }, summary: { en: "CHNOPS — the six elements making up most of living matter.", zh: "CHNOPS——构成生物体的六大元素。" } },
        { slug: "topic-3", title: { en: "Biological Macromolecules", zh: "生物大分子" }, summary: { en: "Carbohydrates, lipids, proteins, nucleic acids — structure vs function.", zh: "糖类、脂质、蛋白质、核酸——结构与功能。" } },
        { slug: "topic-4", title: { en: "Nucleic Acids", zh: "核酸" }, summary: { en: "DNA vs RNA: directionality, base pairing, and information storage.", zh: "DNA 与 RNA:方向性、碱基配对与信息存储。" } },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Cell Structure & Function", zh: "细胞结构与功能" },
      description: { en: "Organelles, membranes, and how cells maintain life.", zh: "细胞器、细胞膜,以及细胞如何维持生命。" },
      topics: [
        { slug: "topic-1", title: { en: "Cell Structure: Subcellular Components", zh: "细胞结构:亚细胞组分" }, summary: { en: "Organelles and their specialized jobs.", zh: "各细胞器及其专门功能。" } },
        { slug: "topic-2", title: { en: "Cell Size", zh: "细胞大小" }, summary: { en: "Why cells stay small — the surface-area-to-volume limit.", zh: "细胞为何保持较小——表面积/体积比限制。" } },
        { slug: "topic-3", title: { en: "Plasma Membranes", zh: "细胞膜" }, summary: { en: "The fluid-mosaic model and selective permeability.", zh: "流动镶嵌模型与选择性透过。" } },
        { slug: "topic-4", title: { en: "Membrane Transport", zh: "跨膜运输" }, summary: { en: "Passive vs active transport; osmosis and tonicity.", zh: "被动与主动运输;渗透与张力。" } },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Cellular Energetics", zh: "细胞能量学" },
      description: { en: "Enzymes, photosynthesis, cellular respiration, and energy flow.", zh: "酶、光合作用、细胞呼吸与能量流动。" },
      topics: [
        { slug: "topic-1", title: { en: "Enzyme Structure & Function", zh: "酶的结构与功能" }, summary: { en: "Active sites, specificity, and environmental effects.", zh: "活性位点、特异性与环境影响。" } },
        { slug: "topic-2", title: { en: "Photosynthesis", zh: "光合作用" }, summary: { en: "Light reactions + Calvin cycle — how plants trap energy.", zh: "光反应与卡尔文循环——植物如何捕获能量。" } },
        { slug: "topic-3", title: { en: "Cellular Respiration", zh: "细胞呼吸" }, summary: { en: "Glycolysis, Krebs, ETC — extracting ATP from glucose.", zh: "糖酵解、三羧酸循环、电子传递链——从葡萄糖获取 ATP。" } },
        { slug: "topic-4", title: { en: "Fitness", zh: "适合度与能量效率" }, summary: { en: "How efficient energy use shapes evolutionary fitness.", zh: "高效的能量利用如何塑造进化适合度。" } },
      ],
    },
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Cell Communication & Cell Cycle", zh: "细胞通讯与细胞周期" },
      description: { en: "Signaling pathways, feedback, and mitosis.", zh: "信号通路、反馈调节与有丝分裂。" },
      topics: [
        { slug: "topic-1", title: { en: "Cell Communication", zh: "细胞通讯" }, summary: { en: "How cells send and receive chemical signals.", zh: "细胞如何发送与接收化学信号。" } },
        { slug: "topic-2", title: { en: "Signal Transduction", zh: "信号转导" }, summary: { en: "Reception → transduction → response cascades.", zh: "接收→转导→响应级联反应。" } },
        { slug: "topic-3", title: { en: "Feedback", zh: "反馈调节" }, summary: { en: "Negative vs positive feedback loops.", zh: "负反馈与正反馈环。" } },
        { slug: "topic-4", title: { en: "Cell Cycle & Mitosis", zh: "细胞周期与有丝分裂" }, summary: { en: "Checkpoints, phases, and controlled division.", zh: "检查点、分裂期与有序分裂。" } },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Heredity", zh: "遗传学" },
      description: { en: "Meiosis, Mendelian genetics, and inheritance patterns.", zh: "减数分裂、孟德尔遗传与遗传模式。" },
      topics: [
        { slug: "topic-1", title: { en: "Meiosis & Genetic Diversity", zh: "减数分裂与遗传多样性" }, summary: { en: "Crossing over, independent assortment, and why siblings differ.", zh: "交叉互换、自由组合——为什么兄弟姐妹各不相同。" } },
        { slug: "topic-2", title: { en: "Mendelian Genetics", zh: "孟德尔遗传学" }, summary: { en: "Law of segregation, law of independent assortment, Punnett squares.", zh: "分离定律、自由组合定律与庞内特方格。" } },
        { slug: "topic-3", title: { en: "Non-Mendelian Genetics", zh: "非孟德尔遗传" }, summary: { en: "Incomplete dominance, codominance, sex-linkage, linked genes.", zh: "不完全显性、共显性、性连锁、连锁基因。" } },
        { slug: "topic-4", title: { en: "Environmental Effects on Phenotype", zh: "环境对表型的影响" }, summary: { en: "Genes set the range; environment picks the point.", zh: "基因设定范围,环境决定具体表现。" } },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Gene Expression & Regulation", zh: "基因表达与调控" },
      description: { en: "DNA → RNA → protein, and how cells control which genes run when.", zh: "DNA→RNA→蛋白质,以及细胞如何调控基因何时开启。" },
      topics: [
        { slug: "topic-1", title: { en: "DNA & RNA Structure", zh: "DNA 与 RNA 结构" }, summary: { en: "Double helix, base pairing, and 5′→3′ directionality.", zh: "双螺旋、碱基配对与 5′→3′ 方向性。" } },
        { slug: "topic-2", title: { en: "Replication", zh: "DNA 复制" }, summary: { en: "Semiconservative copying — leading vs lagging strand.", zh: "半保留复制——前导链与后随链。" } },
        { slug: "topic-3", title: { en: "Transcription & Translation", zh: "转录与翻译" }, summary: { en: "How the cell reads DNA and builds proteins.", zh: "细胞如何读取 DNA 并合成蛋白质。" } },
        { slug: "topic-4", title: { en: "Regulation of Gene Expression", zh: "基因表达调控" }, summary: { en: "Operons, transcription factors, epigenetics.", zh: "操纵子、转录因子与表观遗传。" } },
        { slug: "topic-5", title: { en: "Mutations", zh: "突变" }, summary: { en: "Point, frameshift, silent, missense, nonsense — effects on proteins.", zh: "点突变、移码、沉默、错义、无义——对蛋白的影响。" } },
      ],
    },
    {
      slug: "unit-7",
      number: 7,
      title: { en: "Natural Selection", zh: "自然选择" },
      description: { en: "Evolution, evidence, and population genetics.", zh: "进化、证据与群体遗传学。" },
      topics: [
        { slug: "topic-1", title: { en: "Natural Selection", zh: "自然选择" }, summary: { en: "Variation + heritability + differential survival = evolution.", zh: "变异+遗传+差异化生存 = 进化。" } },
        { slug: "topic-2", title: { en: "Hardy-Weinberg Equilibrium", zh: "哈迪-温伯格平衡" }, summary: { en: "The null model — when allele frequencies don't change.", zh: "零假设模型——等位基因频率何时不变。" } },
        { slug: "topic-3", title: { en: "Evidence of Evolution", zh: "进化的证据" }, summary: { en: "Fossils, homology, biogeography, molecular data.", zh: "化石、同源性、生物地理与分子证据。" } },
        { slug: "topic-4", title: { en: "Speciation & Extinction", zh: "物种形成与灭绝" }, summary: { en: "How new species arise and why others disappear.", zh: "新物种如何产生,旧物种为何灭绝。" } },
      ],
    },
    {
      slug: "unit-8",
      number: 8,
      title: { en: "Ecology", zh: "生态学" },
      description: { en: "Populations, communities, ecosystems, and human impact.", zh: "种群、群落、生态系统与人类影响。" },
      topics: [
        { slug: "topic-1", title: { en: "Responses to the Environment", zh: "对环境的响应" }, summary: { en: "Behavior, signaling, and energy allocation.", zh: "行为、信号与能量分配。" } },
        { slug: "topic-2", title: { en: "Energy Flow Through Ecosystems", zh: "生态系统能量流动" }, summary: { en: "10% rule, trophic levels, productivity.", zh: "10% 定律、营养级与生产力。" } },
        { slug: "topic-3", title: { en: "Population Ecology", zh: "种群生态学" }, summary: { en: "Exponential vs logistic growth; carrying capacity.", zh: "指数增长与逻辑斯蒂增长;环境容纳量。" } },
        { slug: "topic-4", title: { en: "Community Ecology", zh: "群落生态学" }, summary: { en: "Competition, predation, symbiosis, diversity.", zh: "竞争、捕食、共生与多样性。" } },
        { slug: "topic-5", title: { en: "Disruptions to Ecosystems", zh: "生态系统的干扰" }, summary: { en: "Invasives, climate change, human impact.", zh: "外来物种、气候变化与人类影响。" } },
      ],
    },
  ],
};

// ============================================================
// Subjects registry
// ============================================================

export const subjects: Subject[] = [apMicro, apBio];

const notesBySubject: Record<string, Record<string, NoteBlock[]>> = {
  "ap-micro": topicNotes,
  "ap-bio": {},
};

const questionsBySubject: Record<string, Record<string, Question[]>> = {
  "ap-micro": topicQuestions,
  "ap-bio": {},
};

const unitQuestionsBySubject: Record<string, Record<string, Question[]>> = {
  "ap-micro": unitQuestions,
  "ap-bio": {},
};

// ============================================================
// Helpers (subject-scoped)
// ============================================================

export function getSubject(subjectSlug: string): Subject | undefined {
  return subjects.find((s) => s.slug === subjectSlug);
}

export function getUnit(subjectSlug: string, unitSlug: string): Unit | undefined {
  return getSubject(subjectSlug)?.units.find((u) => u.slug === unitSlug);
}

export function getTopic(subjectSlug: string, unitSlug: string, topicSlug: string): Topic | undefined {
  return getUnit(subjectSlug, unitSlug)?.topics.find((t) => t.slug === topicSlug);
}

export function getNotes(subjectSlug: string, unitSlug: string, topicSlug: string): NoteBlock[] | undefined {
  return notesBySubject[subjectSlug]?.[`${unitSlug}/${topicSlug}`];
}

export function getQuestions(subjectSlug: string, unitSlug: string, topicSlug: string): Question[] | undefined {
  return questionsBySubject[subjectSlug]?.[`${unitSlug}/${topicSlug}`];
}

export function getUnitQuestions(subjectSlug: string, unitSlug: string): Question[] | undefined {
  return unitQuestionsBySubject[subjectSlug]?.[unitSlug];
}
