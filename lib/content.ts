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
  | {
      kind: "chart";
      chartType:
        | "supply-demand"
        | "ppc"
        | "perfect-comp-firm"
        | "monopoly"
        | "monop-comp-sr"
        | "monop-comp-lr"
        | "monopsony"
        | "labor-market"
        | "labor-market-shift"
        | "labor-market-tax"
        | "negative-externality"
        | "positive-externality"
        | "lorenz-curve";
    }
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
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Imperfect Competition", zh: "不完全竞争" },
      description: {
        en: "Monopoly, monopolistic competition, and oligopoly — markets where firms have pricing power.",
        zh: "垄断、垄断竞争与寡头——企业拥有定价能力的市场。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Monopoly: Characteristics & Demand", zh: "垄断:特征与需求" },
          summary: {
            en: "One seller, barriers to entry, and why a monopolist's MR lies below price.",
            zh: "单一卖家、进入壁垒,以及垄断者的 MR 为何低于价格。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Monopoly Profit Max & Efficiency", zh: "垄断的利润最大化与效率" },
          summary: {
            en: "MR = MC chooses Q; price off the demand curve. Deadweight loss and allocative inefficiency.",
            zh: "MR = MC 决定 Q;在需求曲线上读 P。无谓损失与配置低效。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Price Discrimination", zh: "价格歧视" },
          summary: {
            en: "Charging different prices for the same good — conditions, degrees, and welfare effects.",
            zh: "对同一商品收取不同价格——条件、等级与福利影响。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Monopolistic Competition", zh: "垄断竞争" },
          summary: {
            en: "Many firms, differentiated products: SR profit possible, LR zero profit with excess capacity.",
            zh: "许多企业、差异化产品:短期可盈利,长期零利润且存在过剩产能。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Oligopoly & Game Theory", zh: "寡头与博弈论" },
          summary: {
            en: "Few interdependent firms — payoff matrices, dominant strategies, and Nash equilibrium.",
            zh: "少数相互依赖的企业——收益矩阵、占优策略与纳什均衡。",
          },
        },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Factor Markets", zh: "要素市场" },
      description: {
        en: "How firms decide how much labor and capital to hire — and what sets wages and rents.",
        zh: "企业如何决定雇用多少劳动与资本——以及工资与租金由什么决定。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Derived Demand & MRP", zh: "派生需求与 MRP" },
          summary: {
            en: "Demand for inputs comes from demand for output. Marginal Revenue Product = how much an extra unit of input adds to revenue.",
            zh: "对投入品的需求源于对产品的需求。边际收益产品 = 多雇 1 单位投入所增加的收益。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Competitive Labor Markets", zh: "完全竞争劳动市场" },
          summary: {
            en: "Market S and D set the wage; each firm hires where its MRP equals the going wage.",
            zh: "市场 S 与 D 决定工资;各家企业在自己的 MRP 等于市场工资处雇用。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Shifts in Labor Demand & Supply", zh: "劳动需求与供给的移动" },
          summary: {
            en: "What shifts the MRP curve (technology, output price, other inputs) and the labor supply curve (immigration, preferences, alternative wages).",
            zh: "什么会使 MRP 曲线移动(技术、产品价格、其他投入),什么会使劳动供给曲线移动(移民、偏好、替代工资)。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Least-Cost & Profit-Max Input Combination", zh: "最低成本与利润最大化的投入组合" },
          summary: {
            en: "Using multiple inputs: MP_L/P_L = MP_K/P_K (least cost) and MRP_L/P_L = MRP_K/P_K = 1 (profit max).",
            zh: "同时使用多种投入时:MP_L/P_L = MP_K/P_K(最低成本),MRP_L/P_L = MRP_K/P_K = 1(利润最大)。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Monopsony & Imperfect Factor Markets", zh: "买方垄断与不完全要素市场" },
          summary: {
            en: "A single buyer of labor — MFC above S, hires fewer workers at a lower wage; minimum wage can improve BOTH.",
            zh: "劳动的单一买家——MFC 高于 S,雇用更少、工资更低;最低工资反而**同时**能提高两者。",
          },
        },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Market Failure & the Role of Government", zh: "市场失灵与政府的角色" },
      description: {
        en: "When unregulated markets fail to deliver social efficiency — externalities, public goods, inequality — and how government can correct them.",
        zh: "当自发市场无法实现社会效率时——外部性、公共物品、不平等——政府如何纠正。",
      },
      topics: [
        {
          slug: "topic-1",
          title: { en: "Social Efficiency & Market Failure", zh: "社会效率与市场失灵" },
          summary: {
            en: "The MSB = MSC efficiency condition, private vs social benefits/costs, and what 'market failure' means.",
            zh: "MSB = MSC 的效率条件、私人与社会的成本/收益,以及「市场失灵」的含义。",
          },
        },
        {
          slug: "topic-2",
          title: { en: "Negative Externalities", zh: "负外部性" },
          summary: {
            en: "MSC > MPC (pollution) or MPB > MSB (secondhand smoke) — overproduction and DWL; Pigouvian taxes and cap-and-trade.",
            zh: "MSC > MPC(污染)或 MPB > MSB(二手烟)——过度生产与 DWL;庇古税与排放权交易。",
          },
        },
        {
          slug: "topic-3",
          title: { en: "Positive Externalities", zh: "正外部性" },
          summary: {
            en: "MSB > MPB (vaccines, education) — underproduction and DWL; Pigouvian subsidies and public provision.",
            zh: "MSB > MPB(疫苗、教育)——产出不足与 DWL;庇古补贴与公共提供。",
          },
        },
        {
          slug: "topic-4",
          title: { en: "Public Goods & Common Resources", zh: "公共物品与公地资源" },
          summary: {
            en: "The rivalry × excludability grid, the free-rider problem, and the tragedy of the commons.",
            zh: "「可竞争 × 可排他」两维分类、搭便车问题,以及公地悲剧。",
          },
        },
        {
          slug: "topic-5",
          title: { en: "Income & Wealth Inequality", zh: "收入与财富不平等" },
          summary: {
            en: "Lorenz curve, Gini coefficient, and the equity-efficiency trade-off in redistribution.",
            zh: "洛伦兹曲线、基尼系数,以及再分配中的公平-效率权衡。",
          },
        },
      ],
    },
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
    { kind: "chart", chartType: "perfect-comp-firm" },
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

  // --------- Unit 4 · Topic 1 · Monopoly: Characteristics & Demand ---------
  "unit-4/topic-1": [
    {
      kind: "table",
      caption: {
        en: "Perfect competition vs. monopoly — side by side",
        zh: "完全竞争 vs. 垄断——对照表",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Perfect competition", zh: "完全竞争" },
        { en: "Monopoly", zh: "垄断" },
      ],
      rows: [
        [{ en: "Number of firms", zh: "企业数量" }, { en: "Many small ones", zh: "许多小企业" }, { en: "**One**", zh: "**一家**" }],
        [{ en: "Product", zh: "产品" }, { en: "Identical", zh: "相同" }, { en: "**Unique**, no close substitutes", zh: "**独特**,无相近替代" }],
        [{ en: "Barriers to entry", zh: "进入壁垒" }, { en: "None", zh: "无" }, { en: "**High** — legal, natural, or strategic", zh: "**高**——法律、自然或战略" }],
        [{ en: "Firm's demand curve", zh: "企业需求曲线" }, { en: "Horizontal at P", zh: "在 P 处水平" }, { en: "**Downward-sloping** (the market D itself)", zh: "**向下倾斜**(即整个市场 D)" }],
        [{ en: "Pricing power", zh: "定价能力" }, { en: "None — price taker", zh: "无——价格接受者" }, { en: "**Price maker**", zh: "**价格制定者**" }],
        [{ en: "MR relation to P", zh: "MR 与 P 的关系" }, { en: "MR = P", zh: "MR = P" }, { en: "**MR < P** (after the first unit)", zh: "**MR < P**(第 1 单位之后)" }],
      ],
    },
    {
      kind: "callout",
      label: { en: "Sources of monopoly — the four classic barriers", zh: "垄断来源——四类经典壁垒" },
      text: {
        en: "**Natural** (LRATC keeps falling — one firm is cheaper than many, e.g. water utility). **Legal** (patents, copyrights, licenses). **Control of a key resource** (De Beers + diamond mines historically). **Strategic / network effects** (platforms where one winner dominates).",
        zh: "**自然**(LRATC 持续下降,一家比多家便宜,如自来水)。**法律**(专利、版权、许可证)。**关键资源控制**(历史上的 De Beers 与钻石矿)。**战略 / 网络效应**(赢者通吃的平台)。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "A monopolist's demand schedule — note what happens to TR and MR",
        zh: "垄断者的需求表——留意 TR 与 MR 的变化",
      },
      columns: [
        { en: "P", zh: "P" },
        { en: "Q", zh: "Q" },
        { en: "TR = P × Q", zh: "TR = P × Q" },
        { en: "MR = ΔTR/ΔQ", zh: "MR = ΔTR/ΔQ" },
      ],
      rows: [
        [{ en: "$10", zh: "$10" }, { en: "0", zh: "0" }, { en: "0", zh: "0" }, { en: "—", zh: "—" }],
        [{ en: "$9", zh: "$9" }, { en: "1", zh: "1" }, { en: "9", zh: "9" }, { en: "9", zh: "9" }],
        [{ en: "$8", zh: "$8" }, { en: "2", zh: "2" }, { en: "16", zh: "16" }, { en: "7", zh: "7" }],
        [{ en: "$7", zh: "$7" }, { en: "3", zh: "3" }, { en: "21", zh: "21" }, { en: "5", zh: "5" }],
        [{ en: "$6", zh: "$6" }, { en: "4", zh: "4" }, { en: "24", zh: "24" }, { en: "3", zh: "3" }],
        [{ en: "$5", zh: "$5" }, { en: "5", zh: "5" }, { en: "25", zh: "25" }, { en: "1", zh: "1" }],
        [{ en: "$4", zh: "$4" }, { en: "6", zh: "6" }, { en: "24", zh: "24" }, { en: "−1", zh: "−1" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "To sell one **more** unit, the monopolist must **lower price on every unit** — not just the new one. So **MR = new P − (price cut × previous Q)**. At P=$9→$8, revenue rises by $8 on the new unit but **loses $1 on the first**, so MR = 7, not 8. MR is always **below** P (except for Q=1).",
        zh: "多卖 1 单位,垄断者必须对**所有**单位降价——不只对新增的那一单位。所以 **MR = 新 P − (降价幅度 × 已售 Q)**。P=$9→$8 时,新单位带来 $8,但**原来 1 单位少收 $1**,故 MR = 7 而非 8。MR **永远低于** P(Q=1 除外)。",
      },
    },
    {
      kind: "callout",
      label: { en: "The twice-as-steep rule (linear demand)", zh: "「两倍陡」规则(线性需求)" },
      text: {
        en: "For a **linear demand curve**, the MR curve starts at the same intercept as D but has **twice the slope**. If D is P = 10 − Q, then MR = 10 − 2Q. MR hits zero when TR is at its **maximum** — exactly where elasticity = 1.",
        zh: "**线性需求**下,MR 与 D 的纵截距相同,但斜率是 D 的 **两倍**。若 D: P = 10 − Q,则 MR = 10 − 2Q。MR 为零时 TR 达到**最大**——正好对应弹性 = 1。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Monopoly Profit Maximization** — pick Q where MR = MC, then read P off the demand curve.",
        zh: "下一节:**垄断的利润最大化**——在 MR = MC 处选 Q,再到需求曲线上读 P。",
      },
    },
  ],

  // --------- Unit 4 · Topic 2 · Monopoly Profit Max & Efficiency ---------
  "unit-4/topic-2": [
    {
      kind: "table",
      caption: {
        en: "Monopoly profit table (constant MC = $3; fixed cost = $4)",
        zh: "垄断利润表(固定 MC = $3;固定成本 $4)",
      },
      columns: [
        { en: "Q", zh: "Q" },
        { en: "P", zh: "P" },
        { en: "TR", zh: "TR" },
        { en: "TC", zh: "TC" },
        { en: "MR", zh: "MR" },
        { en: "MC", zh: "MC" },
        { en: "Profit", zh: "利润" },
      ],
      rows: [
        [{ en: "1", zh: "1" }, { en: "$9", zh: "$9" }, { en: "9", zh: "9" }, { en: "7", zh: "7" }, { en: "9", zh: "9" }, { en: "3", zh: "3" }, { en: "+2", zh: "+2" }],
        [{ en: "2", zh: "2" }, { en: "$8", zh: "$8" }, { en: "16", zh: "16" }, { en: "10", zh: "10" }, { en: "7", zh: "7" }, { en: "3", zh: "3" }, { en: "+6", zh: "+6" }],
        [{ en: "3", zh: "3" }, { en: "$7", zh: "$7" }, { en: "21", zh: "21" }, { en: "13", zh: "13" }, { en: "5", zh: "5" }, { en: "3", zh: "3" }, { en: "+8", zh: "+8" }],
        [{ en: "4", zh: "4" }, { en: "$6", zh: "$6" }, { en: "24", zh: "24" }, { en: "16", zh: "16" }, { en: "3", zh: "3" }, { en: "3", zh: "3" }, { en: "+8 (max)", zh: "+8(最大)" }],
        [{ en: "5", zh: "5" }, { en: "$5", zh: "$5" }, { en: "25", zh: "25" }, { en: "19", zh: "19" }, { en: "1", zh: "1" }, { en: "3", zh: "3" }, { en: "+6", zh: "+6" }],
        [{ en: "6", zh: "6" }, { en: "$4", zh: "$4" }, { en: "24", zh: "24" }, { en: "22", zh: "22" }, { en: "−1", zh: "−1" }, { en: "3", zh: "3" }, { en: "+2", zh: "+2" }],
      ],
    },
    {
      kind: "callout",
      label: { en: "The monopoly two-step", zh: "垄断「两步法」" },
      text: {
        en: "**Step 1**: Find Q* where **MR = MC**. **Step 2**: Go STRAIGHT UP to the **demand curve** to read P*. Never read P off the MR curve! In the table above, MR = MC at Q = 4, and P (from D) = $6. Profit = (P − ATC) × Q = (6 − 4) × 4 = $8.",
        zh: "**第 1 步**:在 **MR = MC** 处找 Q*。**第 2 步**:**垂直向上**到**需求曲线**读 P*。**绝不在** MR 曲线上读 P!上表中 Q = 4 处 MR = MC,P(从 D 读)= $6。利润 = (P − ATC) × Q = (6 − 4) × 4 = $8。",
      },
    },
    { kind: "chart", chartType: "monopoly" },
    {
      kind: "table",
      caption: {
        en: "Perfect competition vs. monopoly — same cost, same demand",
        zh: "完全竞争 vs. 垄断——相同成本、相同需求",
      },
      columns: [
        { en: "Outcome", zh: "结果" },
        { en: "Perfect competition", zh: "完全竞争" },
        { en: "Monopoly", zh: "垄断" },
      ],
      rows: [
        [{ en: "Price", zh: "价格" }, { en: "P = MC", zh: "P = MC" }, { en: "**P > MC**", zh: "**P > MC**" }],
        [{ en: "Quantity", zh: "数量" }, { en: "Q at D = MC", zh: "Q 在 D = MC" }, { en: "**Less** (Q at MR = MC)", zh: "**更少**(Q 在 MR = MC)" }],
        [{ en: "Consumer surplus", zh: "消费者剩余" }, { en: "Larger", zh: "较大" }, { en: "**Smaller**", zh: "**较小**" }],
        [{ en: "Producer surplus", zh: "生产者剩余" }, { en: "Normal", zh: "正常" }, { en: "**Larger** (captures part of CS)", zh: "**更大**(夺取部分 CS)" }],
        [{ en: "Deadweight loss", zh: "无谓损失" }, { en: "Zero", zh: "零" }, { en: "**Positive** (triangle between D and MC, Q_m → Q_pc)", zh: "**正值**(D 与 MC 之间的三角形,Q_m → Q_pc)" }],
        [{ en: "Long-run profit", zh: "长期利润" }, { en: "Zero", zh: "零" }, { en: "**Can persist** — barriers block entry", zh: "**可持续**——壁垒阻止进入" }],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "The **deadweight loss** of monopoly equals the value of trades that never happen: units where buyers' willingness to pay (on D) exceeds MC, yet the monopolist restricts Q to keep P high. Monopoly is **allocatively inefficient** because **P > MC** at Q*.",
        zh: "垄断的**无谓损失**等于本可发生却未发生的交易之和:在那些买家支付意愿(D 上)高于 MC 的单位上,垄断者为维持高 P 而减产。由于 Q* 处 **P > MC**,垄断是**配置低效**的。",
      },
    },
    {
      kind: "callout",
      label: { en: "Natural monopoly — a special case", zh: "自然垄断——特殊情形" },
      text: {
        en: "When LRATC falls throughout the relevant range of demand, **one large firm is cheaper than many small ones**. Splitting it up would raise cost to consumers. Governments typically allow the monopoly but **regulate price** — often at the **socially optimal** level P = MC (but this causes losses if P < ATC, requiring a subsidy) or the **fair-return** level P = ATC (zero economic profit).",
        zh: "当 LRATC 在整段相关需求区间都下降时,**一家大企业比多家小企业便宜**。拆分反而提高消费者成本。政府通常允许其存在但**管制价格**——常见做法是**社会最优**水平 P = MC(若 P < ATC 会亏损,需补贴),或**公平收益**水平 P = ATC(零经济利润)。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Price Discrimination** — what happens when the monopolist charges different customers different prices.",
        zh: "下一节:**价格歧视**——垄断者对不同顾客收取不同价格时会发生什么。",
      },
    },
  ],

  // --------- Unit 4 · Topic 3 · Price Discrimination ---------
  "unit-4/topic-3": [
    {
      kind: "table",
      caption: {
        en: "Three degrees of price discrimination",
        zh: "价格歧视的三个等级",
      },
      columns: [
        { en: "Degree", zh: "等级" },
        { en: "What the firm does", zh: "企业做法" },
        { en: "Real-world example", zh: "现实例子" },
      ],
      rows: [
        [
          { en: "1st (perfect)", zh: "一级(完全)" },
          { en: "Charges **each buyer** his/her maximum willingness to pay", zh: "对**每位买家**收其最高支付意愿" },
          { en: "Negotiated car deals, bespoke consulting", zh: "汽车议价、定制咨询" },
        ],
        [
          { en: "2nd (block)", zh: "二级(数量 / 版本)" },
          { en: "Price depends on **quantity** or version bought", zh: "价格随**购买量**或版本变化" },
          { en: "Bulk discounts, Netflix tiers, airline cabin classes", zh: "批量折扣、Netflix 分级、机舱等级" },
        ],
        [
          { en: "3rd (group)", zh: "三级(群体)" },
          { en: "Different prices for **identifiable groups**", zh: "对**可识别的不同群体**收取不同价格" },
          { en: "Student / senior discounts, matinee vs. evening", zh: "学生 / 老年票、日场 vs. 晚场" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "Three conditions for price discrimination", zh: "价格歧视的三项条件" },
      text: {
        en: "(1) **Market power** — the firm faces a downward-sloping demand curve (PC firms can't PD). (2) **Ability to distinguish** between buyers with different willingness to pay. (3) **No resale** — otherwise low-price buyers would arbitrage by reselling to high-price buyers.",
        zh: "(1) **定价能力**——企业面对向下倾斜的需求曲线(完全竞争企业不能搞 PD)。(2) **能识别**不同支付意愿的买家。(3) **无法转卖**——否则低价买家会倒卖给高价买家,套利破坏。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Welfare effects: single-price monopoly vs. perfect price discrimination",
        zh: "福利影响:单一价格垄断 vs. 完全价格歧视",
      },
      columns: [
        { en: "Metric", zh: "指标" },
        { en: "Single-price monopoly", zh: "单一价格垄断" },
        { en: "Perfect price discrimination", zh: "完全价格歧视" },
      ],
      rows: [
        [{ en: "Quantity produced", zh: "生产数量" }, { en: "Q_m (less than socially optimal)", zh: "Q_m(低于社会最优)" }, { en: "**Q_pc** (same as perfect competition!)", zh: "**Q_pc**(与完全竞争相同!)" }],
        [{ en: "Consumer surplus", zh: "消费者剩余" }, { en: "Positive (triangle above P_m)", zh: "为正(P_m 以上的三角形)" }, { en: "**Zero** — all captured by firm", zh: "**为零**——全被企业收走" }],
        [{ en: "Producer surplus", zh: "生产者剩余" }, { en: "Large rectangle", zh: "大矩形" }, { en: "**Huge** — takes all CS too", zh: "**巨大**——连 CS 也一并收走" }],
        [{ en: "Deadweight loss", zh: "无谓损失" }, { en: "Positive triangle", zh: "正三角形" }, { en: "**Zero**", zh: "**零**" }],
        [{ en: "MR curve", zh: "MR 曲线" }, { en: "Below D", zh: "在 D 之下" }, { en: "**MR = D** for this firm", zh: "**MR = D**(因为每单位按 WTP 定价)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "A perfectly price-discriminating monopolist produces the **allocatively efficient** quantity — because it can capture the gain from every additional unit, it has no incentive to restrict output. The **total surplus is the same** as under perfect competition, but the **distribution is radically different**: all of it goes to the producer.",
        zh: "完全价格歧视垄断者的产量是**配置有效**的——因为每多一单位的收益都能被企业获得,企业没有限产动机。**总剩余与完全竞争相同**,但**分配完全不同**:全部归生产者。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Real-world price discrimination is usually **imperfect** (3rd-degree). It still tends to raise total surplus relative to single-price monopoly by getting the good to more buyers — but some groups pay **more** than they would under uniform pricing.",
        zh: "现实中的价格歧视通常是**不完全**的(三级)。相较于单一价格垄断,它通常会**提高总剩余**,让更多买家买到商品——但某些群体反而**比统一定价时付得更多**。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Monopolistic Competition** — many firms, but each with a sliver of pricing power.",
        zh: "下一节:**垄断竞争**——企业很多,每家拥有少许定价能力。",
      },
    },
  ],

  // --------- Unit 4 · Topic 4 · Monopolistic Competition ---------
  "unit-4/topic-4": [
    {
      kind: "table",
      caption: {
        en: "Four market structures at a glance",
        zh: "四种市场结构一览",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Perfect comp.", zh: "完全竞争" },
        { en: "Monopolistic comp.", zh: "垄断竞争" },
        { en: "Oligopoly", zh: "寡头" },
        { en: "Monopoly", zh: "垄断" },
      ],
      rows: [
        [{ en: "# of firms", zh: "企业数" }, { en: "Many", zh: "许多" }, { en: "**Many**", zh: "**许多**" }, { en: "Few", zh: "少数" }, { en: "One", zh: "一家" }],
        [{ en: "Product", zh: "产品" }, { en: "Identical", zh: "同质" }, { en: "**Differentiated**", zh: "**差异化**" }, { en: "Either", zh: "任一" }, { en: "Unique", zh: "独特" }],
        [{ en: "Entry barriers", zh: "进入壁垒" }, { en: "None", zh: "无" }, { en: "**Low**", zh: "**低**" }, { en: "High", zh: "高" }, { en: "Very high", zh: "极高" }],
        [{ en: "Firm D slope", zh: "企业 D 斜率" }, { en: "Horizontal", zh: "水平" }, { en: "**Downward, very elastic**", zh: "**下倾,富有弹性**" }, { en: "Downward", zh: "下倾" }, { en: "Downward (market D)", zh: "下倾(市场 D)" }],
        [{ en: "LR economic profit", zh: "长期经济利润" }, { en: "0", zh: "0" }, { en: "**0**", zh: "**0**" }, { en: ">0 possible", zh: "可 >0" }, { en: ">0", zh: ">0" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Monopolistic competition combines the 'many firms, free entry' feature of perfect competition with the 'downward-sloping demand' feature of monopoly. Each firm has a **sliver** of market power because its product is slightly differentiated (brand, location, quality) — but its demand is **highly elastic** because many close substitutes exist.",
        zh: "垄断竞争兼具完全竞争「企业多、自由进入」和垄断「需求曲线下倾」的特点。每家企业因产品略有差异(品牌、地段、品质)而拥有**少许**定价能力——但由于有许多相近替代品,其需求**富有弹性**。",
      },
    },
    {
      kind: "callout",
      label: { en: "SR vs. LR for monopolistic competition", zh: "垄断竞争的短期与长期" },
      text: {
        en: "**SR**: same two-step as monopoly — MR = MC picks Q, price off D. Firm can earn profit (P > ATC), break even, or lose. **LR**: free entry/exit drives economic profit to **zero** → **P = ATC** but **P > MC** (still has pricing power). The demand curve is tangent to ATC from above.",
        zh: "**短期**:与垄断相同的两步法——MR = MC 选 Q,在 D 上读 P。企业可获利(P > ATC)、保本或亏损。**长期**:自由进出使经济利润归**零** → **P = ATC** 但 **P > MC**(仍有定价能力)。需求曲线从上方切于 ATC。",
      },
    },
    { kind: "chart", chartType: "monop-comp-sr" },
    { kind: "chart", chartType: "monop-comp-lr" },
    {
      kind: "table",
      caption: {
        en: "Long-run efficiency comparison",
        zh: "长期效率对比",
      },
      columns: [
        { en: "Criterion", zh: "标准" },
        { en: "Perfect competition", zh: "完全竞争" },
        { en: "Monopolistic competition", zh: "垄断竞争" },
      ],
      rows: [
        [
          { en: "Produces at minimum ATC?", zh: "在最低 ATC 处生产?" },
          { en: "**Yes** — productively efficient", zh: "**是**——生产有效" },
          { en: "**No** — excess capacity (Q < min ATC Q)", zh: "**否**——过剩产能(Q < 最低 ATC 处的 Q)" },
        ],
        [
          { en: "P = MC?", zh: "P = MC?" },
          { en: "**Yes** — allocatively efficient", zh: "**是**——配置有效" },
          { en: "**No** — P > MC, some DWL", zh: "**否**——P > MC,产生 DWL" },
        ],
        [
          { en: "Economic profit (LR)", zh: "长期经济利润" },
          { en: "Zero", zh: "零" },
          { en: "Zero (entry pushes down to ATC)", zh: "零(进入使 P = ATC)" },
        ],
      ],
      highlightLastRow: false,
    },
    {
      kind: "paragraph",
      text: {
        en: "**Excess capacity** is the signature flaw of monopolistic competition: in the long run the firm produces **less than the output that would minimize ATC**, so ATC is above its potential minimum. The 'waste' pays for **product variety** — many restaurants, hair salons, and clothing brands. Whether that's worth it is a question of taste, not theory.",
        zh: "**过剩产能**是垄断竞争的标志性缺陷:长期中企业**产量低于使 ATC 最小化的水平**,因此 ATC 高于其潜在最低。这种「浪费」换来的是**产品多样性**——林立的餐厅、美发店与服装品牌。值不值,是偏好问题,而非理论问题。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Oligopoly & Game Theory** — where the remaining element is how rivals react.",
        zh: "下一节:**寡头与博弈论**——关键要素是对手如何反应。",
      },
    },
  ],

  // --------- Unit 4 · Topic 5 · Oligopoly & Game Theory ---------
  "unit-4/topic-5": [
    {
      kind: "table",
      caption: {
        en: "Oligopoly at a glance",
        zh: "寡头概览",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Oligopoly", zh: "寡头" },
      ],
      rows: [
        [{ en: "Number of firms", zh: "企业数" }, { en: "**Few** (2–10)", zh: "**少数**(2~10 家)" }],
        [{ en: "Product", zh: "产品" }, { en: "Identical or differentiated", zh: "同质或差异化" }],
        [{ en: "Barriers to entry", zh: "进入壁垒" }, { en: "**High**", zh: "**高**" }],
        [{ en: "Key feature", zh: "核心特征" }, { en: "**Strategic interdependence** — each firm's best action depends on rivals' actions", zh: "**战略相互依赖**——各家最优行动取决于对手" }],
        [{ en: "Real examples", zh: "现实例子" }, { en: "Airlines, smartphones, automobiles, soda", zh: "航空、智能手机、汽车、可乐" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Oligopolists can try to **collude** (formally: cartel; informally: tacit collusion, price leadership). A successful cartel acts like a monopoly — but every member has an **incentive to cheat** by producing more than the agreed quota. That's why cartels tend to break down.",
        zh: "寡头可尝试**合谋**(正式:卡特尔;非正式:默契合谋、价格领导)。成功的卡特尔像垄断——但每个成员都有**欺骗**的诱因(多产超配额)。这就是卡特尔容易瓦解的原因。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Prisoner's dilemma — two firms choosing to 'Hold price' or 'Cut price' (profits in $M)",
        zh: "囚徒困境——两家企业选「维持价格」或「降价」(利润以百万美元计)",
      },
      columns: [
        { en: "", zh: "" },
        { en: "Firm B: Hold", zh: "B:维持" },
        { en: "Firm B: Cut", zh: "B:降价" },
      ],
      rows: [
        [
          { en: "**Firm A: Hold**", zh: "**A:维持**" },
          { en: "A: 8, B: 8", zh: "A: 8,B: 8" },
          { en: "A: 2, B: 10", zh: "A: 2,B: 10" },
        ],
        [
          { en: "**Firm A: Cut**", zh: "**A:降价**" },
          { en: "A: 10, B: 2", zh: "A: 10,B: 2" },
          { en: "A: 4, B: 4", zh: "A: 4,B: 4" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "Reading a payoff matrix — dominant strategy", zh: "读收益矩阵——占优策略" },
      text: {
        en: "A firm has a **dominant strategy** if one row (or column) gives higher payoff **no matter what the rival does**. Check Firm A: if B holds → A earns 8 (hold) vs. 10 (cut) → **cut is better**. If B cuts → A earns 2 (hold) vs. 4 (cut) → **cut is better**. So A's dominant strategy is **Cut**. By symmetry, so is B's. Both cut → payoff (4, 4) — worse for both than (8, 8).",
        zh: "若某行(或某列)在**对手任何选择下**都给更高收益,该企业有**占优策略**。看 A:B 维持时,A 收 8(维持)vs. 10(降价)→ **降价更好**;B 降价时,A 收 2(维持)vs. 4(降价)→ **降价更好**。故 A 的占优策略是**降价**。对称地,B 亦然。双方都降价 → (4, 4),比 (8, 8) 都差。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "**Nash equilibrium** = an outcome where **no player wants to change their strategy** given what the other does. In the dilemma above, (Cut, Cut) is the unique Nash equilibrium — starting there, neither firm can improve by switching. (Hold, Hold) is **not** a Nash equilibrium because either firm could unilaterally switch to Cut and earn 10 instead of 8.",
        zh: "**纳什均衡** = 给定对方选择,**没有玩家想要改变**的结果。上述困境中,(降价,降价)是唯一纳什均衡——从此出发,任一方单独改变都不会更好。(维持,维持) **不是**纳什均衡,因为任一方单独改为降价能得 10 而非 8。",
      },
    },
    {
      kind: "callout",
      label: { en: "Game-theory vocabulary cheat-sheet", zh: "博弈论术语速查" },
      text: {
        en: "**Dominant strategy**: best regardless of opponent. **Nash equilibrium**: nobody wants to deviate given the other's choice. **Collusive / cooperative outcome**: the payoff pair both would agree to if they could commit (often NOT the Nash equilibrium). **Prisoner's dilemma**: the unique feature where the dominant-strategy outcome is worse for both than the cooperative one.",
        zh: "**占优策略**:不论对方如何选,这一选最好。**纳什均衡**:给定对方选择,没人愿意偏离。**合谋 / 合作结果**:若能可信承诺,双方都愿意的收益对(常常**不是**纳什均衡)。**囚徒困境**:占优策略结果比合作结果对双方都差——这是其独特之处。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That closes Unit 4. Up next: **Unit 5 — Factor Markets**, where the same MR = MC logic is applied to labor, capital, and land.",
        zh: "第 4 单元到此结束。下一单元:**第 5 单元——要素市场**,把同一套 MR = MC 逻辑用到劳动、资本和土地上。",
      },
    },
  ],

  // --------- Unit 5 · Topic 1 · Derived Demand & MRP ---------
  "unit-5/topic-1": [
    {
      kind: "table",
      caption: {
        en: "Goods markets vs. factor markets — who's on which side",
        zh: "产品市场 vs. 要素市场——谁在哪一侧",
      },
      columns: [
        { en: "Market", zh: "市场" },
        { en: "Buyer", zh: "买家" },
        { en: "Seller", zh: "卖家" },
        { en: "Price", zh: "价格" },
      ],
      rows: [
        [{ en: "Goods (output)", zh: "产品" }, { en: "Households", zh: "家庭" }, { en: "Firms", zh: "企业" }, { en: "P (e.g. $/bread)", zh: "P(如 $/面包)" }],
        [{ en: "Factor (input)", zh: "要素" }, { en: "**Firms**", zh: "**企业**" }, { en: "**Households**", zh: "**家庭**" }, { en: "W, r (wage, rent)", zh: "W、r(工资、租金)" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Demand for an input is **derived demand** — it exists only because the input helps produce something people want. No one wants a hammer for its own sake; firms hire labor to make furniture that consumers want. If the **output** market changes, factor demand changes with it.",
        zh: "对投入品的需求是**派生需求**——只因该投入能生产人们想要的东西而存在。没人单单为锤子本身而需要锤子;企业雇劳动是为造出消费者想要的家具。**产品**市场变化,要素需求随之变化。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Bakery hiring decision — output sells for $5/loaf",
        zh: "烘焙店雇工决策——面包售价 $5/条",
      },
      columns: [
        { en: "Workers (L)", zh: "工人 (L)" },
        { en: "Total Product", zh: "总产量" },
        { en: "MP", zh: "MP" },
        { en: "MRP = MP × P", zh: "MRP = MP × P" },
      ],
      rows: [
        [{ en: "0", zh: "0" }, { en: "0", zh: "0" }, { en: "—", zh: "—" }, { en: "—", zh: "—" }],
        [{ en: "1", zh: "1" }, { en: "20", zh: "20" }, { en: "20", zh: "20" }, { en: "$100", zh: "$100" }],
        [{ en: "2", zh: "2" }, { en: "35", zh: "35" }, { en: "15", zh: "15" }, { en: "$75", zh: "$75" }],
        [{ en: "3", zh: "3" }, { en: "45", zh: "45" }, { en: "10", zh: "10" }, { en: "$50", zh: "$50" }],
        [{ en: "4", zh: "4" }, { en: "52", zh: "52" }, { en: "7", zh: "7" }, { en: "$35", zh: "$35" }],
        [{ en: "5", zh: "5" }, { en: "56", zh: "56" }, { en: "4", zh: "4" }, { en: "$20", zh: "$20" }],
      ],
    },
    {
      kind: "callout",
      label: { en: "MRP — the key formula", zh: "MRP——核心公式" },
      text: {
        en: "**MRP (Marginal Revenue Product) = MP × MR_output.** For a firm that **sells in a competitive output market** (price taker), MR = P, so **MRP = MP × P**. For a firm with market power (monopoly, monopolistic competition), MR < P, so **MRP = MP × MR < MP × P**. MRP falls because **MP falls** (diminishing returns) and — for a price-maker — because **MR falls too** as output rises.",
        zh: "**MRP(边际收益产品)= MP × MR_产品。**若企业在**竞争的产品市场**销售(价格接受者),MR = P,故 **MRP = MP × P**;若企业有定价能力(垄断或垄断竞争),MR < P,故 **MRP = MP × MR < MP × P**。MRP 下降既因为 **MP 下降**(边际递减),也因为对价格制定者 **MR 也在下降**。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: the hiring rule — a firm keeps hiring labor as long as each new worker's **MRP** is at least as large as the **wage**.",
        zh: "下一节:雇用法则——只要每多雇 1 名工人的 **MRP** 不低于**工资**,企业就继续雇。",
      },
    },
  ],

  // --------- Unit 5 · Topic 2 · Competitive Labor Markets ---------
  "unit-5/topic-2": [
    {
      kind: "table",
      caption: {
        en: "Features of a perfectly competitive labor market",
        zh: "完全竞争劳动市场的特征",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Description", zh: "说明" },
      ],
      rows: [
        [{ en: "Buyers (firms)", zh: "买家(企业)" }, { en: "Many — each hires a tiny share of total labor", zh: "许多——每家只雇全部劳动的极小部分" }],
        [{ en: "Sellers (workers)", zh: "卖家(工人)" }, { en: "Many — homogeneous skills", zh: "许多——技能同质" }],
        [{ en: "Firm's labor supply curve", zh: "企业的劳动供给曲线" }, { en: "**Horizontal** at market wage W* — firm is a **wage taker**", zh: "在市场工资 W* 处**水平**——企业是**工资接受者**" }],
        [{ en: "Market labor supply curve", zh: "市场劳动供给曲线" }, { en: "**Upward sloping** — more labor at higher wages", zh: "**向上倾斜**——工资越高劳动供给越多" }],
        [{ en: "MFC (marginal factor cost)", zh: "MFC(边际要素成本)" }, { en: "MFC = W (flat for each firm — pays same wage for every worker)", zh: "MFC = W(对每家企业水平——每位工人同等工资)" }],
      ],
    },
    {
      kind: "callout",
      label: { en: "The hiring rule — MRP = W", zh: "雇用法则——MRP = W" },
      text: {
        en: "A competitive firm **keeps hiring** labor so long as MRP ≥ W (next worker adds at least as much revenue as wage cost). It **stops** when MRP = W. This is exactly the **MR = MC** logic from Unit 3, applied to the factor market: each additional unit of input is a unit of **cost** (wage) and brings a unit of **revenue** (MRP).",
        zh: "只要 MRP ≥ W(下一位工人带来的收入不低于工资成本),竞争企业就**继续雇**;当 MRP = W 时**停手**。这正是第 3 单元的 **MR = MC** 逻辑用于要素市场:每单位投入既是一单位**成本**(工资),又带来一单位**收入**(MRP)。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Firm hiring decision at wage W = $40",
        zh: "工资 W = $40 时的企业雇用决策",
      },
      columns: [
        { en: "L", zh: "L" },
        { en: "MRP", zh: "MRP" },
        { en: "W", zh: "W" },
        { en: "Hire?", zh: "是否雇?" },
      ],
      rows: [
        [{ en: "1", zh: "1" }, { en: "$80", zh: "$80" }, { en: "$40", zh: "$40" }, { en: "Yes — profit ↑", zh: "是——利润↑" }],
        [{ en: "2", zh: "2" }, { en: "$60", zh: "$60" }, { en: "$40", zh: "$40" }, { en: "Yes", zh: "是" }],
        [{ en: "3", zh: "3" }, { en: "$40", zh: "$40" }, { en: "$40", zh: "$40" }, { en: "**Yes (stop here)**", zh: "**是(到此为止)**" }],
        [{ en: "4", zh: "4" }, { en: "$25", zh: "$25" }, { en: "$40", zh: "$40" }, { en: "No — 4th worker costs more than earns", zh: "否——第 4 名工人成本高于收益" }],
      ],
      highlightLastRow: false,
    },
    {
      kind: "paragraph",
      text: {
        en: "The **firm's demand for labor IS its MRP curve** (above the point where hiring makes economic sense). Market labor demand is the **horizontal sum** of every firm's MRP. Market supply comes from workers' labor-leisure choices and alternative jobs. **Market W* = where market D_L and S_L cross**; individual firms then take W* as given.",
        zh: "**企业对劳动的需求就是它的 MRP 曲线**(在雇用有经济意义的范围内)。市场劳动需求 = 各家 MRP 的**横向加总**。市场供给来自工人的「劳动 vs. 闲暇」选择与替代工作。**市场 W* = 市场 D_L 与 S_L 的交点**;单个企业以 W* 为定价接受者。",
      },
    },
    { kind: "chart", chartType: "labor-market" },
    {
      kind: "paragraph",
      text: {
        en: "Up next: what makes the labor D curve and S curve **shift** — including the effects of **taxes and subsidies** — and how to predict the effect on equilibrium wage and employment.",
        zh: "下一节:什么会使劳动 D 曲线和 S 曲线**移动**(含**税收与补贴**的影响),以及如何预测对均衡工资与雇用量的影响。",
      },
    },
  ],

  // --------- Unit 5 · Topic 3 · Shifts in Labor Demand & Supply ---------
  "unit-5/topic-3": [
    {
      kind: "table",
      caption: {
        en: "What shifts LABOR DEMAND (MRP) — three sources",
        zh: "什么使**劳动需求**(MRP)移动——三类来源",
      },
      columns: [
        { en: "Source", zh: "来源" },
        { en: "Example", zh: "例子" },
        { en: "Shift direction", zh: "移动方向" },
      ],
      rows: [
        [
          { en: "Output price (P) ↑", zh: "产品价格 P ↑" },
          { en: "Lumber prices spike → demand for loggers ↑", zh: "木材价格飙升 → 伐木工需求 ↑" },
          { en: "D_L shifts RIGHT (MRP = MP × P)", zh: "D_L **右移**(MRP = MP × P)" },
        ],
        [
          { en: "Productivity (MP) ↑", zh: "生产率 MP ↑" },
          { en: "Better software tools → programmer MP ↑", zh: "工具更好 → 程序员 MP ↑" },
          { en: "D_L shifts RIGHT", zh: "D_L **右移**" },
        ],
        [
          { en: "Price of a SUBSTITUTE input ↑", zh: "**替代**投入品价格 ↑" },
          { en: "Industrial robots get expensive → firms hire more workers", zh: "工业机器人涨价 → 企业雇更多工人" },
          { en: "D_L shifts RIGHT", zh: "D_L **右移**" },
        ],
        [
          { en: "Price of a COMPLEMENT input ↑", zh: "**互补**投入品价格 ↑" },
          { en: "Trucks get expensive → fewer truck drivers hired", zh: "卡车涨价 → 卡车司机雇得更少" },
          { en: "D_L shifts LEFT", zh: "D_L **左移**" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "Substitutes vs. complements in PRODUCTION", zh: "生产中的**替代品**与**互补品**" },
      text: {
        en: "Two inputs are **substitutes** if using more of one means using less of the other (labor vs. robots on an assembly line). They are **complements** if they are used together in fixed-ish proportions (trucks + truck drivers). When a substitute's price rises, firms switch toward labor — D_L ↑. When a complement's price rises, firms use less of both — D_L ↓.",
        zh: "两种投入若「多用一个就少用另一个」为**替代品**(流水线上的工人 vs. 机器人);若「一般按比例搭配使用」为**互补品**(卡车 + 司机)。**替代**品涨价 → 企业转向劳动 → D_L ↑;**互补**品涨价 → 两者都少用 → D_L ↓。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "What shifts LABOR SUPPLY — three main forces",
        zh: "什么使**劳动供给**移动——三大力量",
      },
      columns: [
        { en: "Source", zh: "来源" },
        { en: "Example", zh: "例子" },
        { en: "Shift direction", zh: "移动方向" },
      ],
      rows: [
        [
          { en: "Population / immigration", zh: "人口 / 移民" },
          { en: "Immigration wave adds workers", zh: "移民浪潮增加工人" },
          { en: "S_L shifts RIGHT", zh: "S_L **右移**" },
        ],
        [
          { en: "Preferences / demographics", zh: "偏好 / 人口结构" },
          { en: "Women enter the workforce in larger numbers", zh: "女性大量进入就业市场" },
          { en: "S_L shifts RIGHT", zh: "S_L **右移**" },
        ],
        [
          { en: "Alternative wages", zh: "替代工作工资" },
          { en: "Wages in plumbing spike → fewer people choose carpentry", zh: "水电工工资上涨 → 更少人选木工" },
          { en: "S_L (carpenters) shifts LEFT", zh: "(木工)S_L **左移**" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "To predict the effect of **simultaneous shifts**, apply the familiar four-combo rule from Unit 2: if D ↑ and S ↑ → **Q (employment) rises unambiguously; wage is ambiguous** (depends on which shift is larger). If D ↑ and S ↓ → wage rises unambiguously; employment is ambiguous.",
        zh: "预测**同时移动**时,用第 2 单元熟悉的四种组合规则:若 D ↑ 且 S ↑ → **雇用 Q 确定上升;工资不确定**(取决于哪次移动更大)。若 D ↑ 且 S ↓ → 工资确定上升;雇用不确定。",
      },
    },
    { kind: "chart", chartType: "labor-market-shift" },
    {
      kind: "heading",
      text: { en: "Government interventions in labor markets", zh: "政府对劳动市场的干预" },
    },
    {
      kind: "paragraph",
      text: {
        en: "Taxes and subsidies are just another set of D/S shifters — but students often miss them. The trick is to ask **who legally pays** (statutory incidence) to find WHICH curve moves; the **economic burden** (who actually loses money) depends on elasticities, not on who signs the check.",
        zh: "税收与补贴也是 D/S 移动的来源,但学生常忽视。关键是先问**谁在法律上支付**(法定归宿)——从而确定**哪条曲线移动**;**经济负担**(真正受损的一方)取决于弹性,而非谁写支票。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Four labor-market interventions — which curve moves, and which way",
        zh: "劳动市场四类干预——哪条曲线移动、朝哪一方向",
      },
      columns: [
        { en: "Intervention", zh: "干预" },
        { en: "Curve that shifts", zh: "移动的曲线" },
        { en: "Effect on L", zh: "对 L 的影响" },
        { en: "Effect on W received / paid", zh: "对收 / 付 W 的影响" },
      ],
      rows: [
        [
          { en: "Tax on EMPLOYERS (payroll tax on firm)", zh: "对**雇主**征税(企业支付的薪资税)" },
          { en: "**D_L shifts DOWN by t**", zh: "**D_L 下移 t**" },
          { en: "L falls", zh: "L 下降" },
          { en: "W_worker ↓, W_firm (total cost) ↑", zh: "W_工人 ↓,W_雇主(总成本)↑" },
        ],
        [
          { en: "Tax on WORKERS (income / payroll tax on worker)", zh: "对**工人**征税(工资 / 个人薪资税)" },
          { en: "**S_L shifts UP by t**", zh: "**S_L 上移 t**" },
          { en: "L falls", zh: "L 下降" },
          { en: "W_gross ↑, W_net ↓", zh: "W_税前 ↑,W_税后 ↓" },
        ],
        [
          { en: "Subsidy to FIRMS (hiring credit)", zh: "对**企业**补贴(雇用信用)" },
          { en: "**D_L shifts UP by s**", zh: "**D_L 上移 s**" },
          { en: "L rises", zh: "L 上升" },
          { en: "W_worker ↑, W_firm (net cost) ↓", zh: "W_工人 ↑,W_企业(净成本)↓" },
        ],
        [
          { en: "Subsidy to WORKERS (e.g. EITC)", zh: "对**工人**补贴(如 EITC 劳动所得税抵免)" },
          { en: "**S_L shifts DOWN by s**", zh: "**S_L 下移 s**" },
          { en: "L rises", zh: "L 上升" },
          { en: "W_firm ↓, W_worker (with subsidy) ↑", zh: "W_企业 ↓,W_工人(含补贴)↑" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "The tax-equivalence theorem", zh: "税收等价定理" },
      text: {
        en: "A tax of $t imposed on **employers** and a tax of $t imposed on **workers** produce the **identical economic outcome** — same L, same net wage received, same gross wage paid, same DWL. Only the **statutory incidence** differs; the **economic incidence** depends on relative elasticities of S_L and D_L (the less elastic side bears more).",
        zh: "对**雇主**征 $t 税与对**工人**征 $t 税,**经济结果完全相同**——同样的 L、同样的税后所得、同样的税前支付、同样的 DWL。只有**法定归宿**不同;**经济归宿**取决于 S_L 与 D_L 的相对弹性(缺乏弹性的一方承担更多)。",
      },
    },
    { kind: "chart", chartType: "labor-market-tax" },
    {
      kind: "paragraph",
      text: {
        en: "In the chart, a $2 per-worker tax on employers shifts D_L down by $2. Before the tax: L = 6, W = $8. After: employers pay $9 per worker, workers receive $7, and only L = 5 workers are hired. Tax revenue (yellow rectangle) = $2 × 5 = **$10**; deadweight loss = the small triangle between the two equilibria (the 1 unit of labor and the trades it enabled that now never happen).",
        zh: "图中对雇主征每人 $2 税使 D_L 下移 $2。税前:L = 6,W = $8。税后:雇主每人付 $9,工人拿 $7,仅雇 L = 5。税收收入(黄色矩形)= $2 × 5 = **$10**;DWL 是两个均衡之间的小三角(消失的那 1 单位劳动及其交易)。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "A per-worker **subsidy** reverses the direction — D_L (or S_L) shifts the **opposite** way, raising employment and redistributing surplus, but creating a deadweight loss of its own (government pays more than the extra surplus generated).",
        zh: "单位**补贴**方向相反——D_L(或 S_L)向**反方向**移动,雇用上升、剩余重新分配,但本身也带来 DWL(政府支付超过新增剩余)。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: what to do when the firm uses **multiple** inputs (labor AND capital).",
        zh: "下一节:当企业同时使用**多种**投入(劳动 + 资本)时该怎么办。",
      },
    },
  ],

  // --------- Unit 5 · Topic 4 · Least-Cost & Profit-Max Input Combination ---------
  "unit-5/topic-4": [
    {
      kind: "callout",
      label: { en: "The least-cost rule", zh: "最低成本法则" },
      text: {
        en: "To produce **any** target output at minimum cost, combine inputs so that the **MP per dollar is equal across inputs**: **MP_L / P_L = MP_K / P_K**. If the ratios aren't equal, you can save money by substituting toward the higher-MP-per-dollar input. (This answers HOW to produce — not HOW MUCH.)",
        zh: "以最低成本生产**任一**给定产量,需使**每一美元的 MP 在各投入上相等**:**MP_L / P_L = MP_K / P_K**。如果不相等,就把投入转向每美元 MP 较高的一方来省钱。(这回答**如何生产**,而非**生产多少**。)",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Is this firm cost-minimizing? P_L = $10, P_K = $20",
        zh: "该企业是否成本最小化?P_L = $10,P_K = $20",
      },
      columns: [
        { en: "Input mix", zh: "投入组合" },
        { en: "MP_L", zh: "MP_L" },
        { en: "MP_K", zh: "MP_K" },
        { en: "MP_L / P_L", zh: "MP_L / P_L" },
        { en: "MP_K / P_K", zh: "MP_K / P_K" },
        { en: "Action", zh: "行动" },
      ],
      rows: [
        [
          { en: "Current", zh: "当前" },
          { en: "30", zh: "30" },
          { en: "40", zh: "40" },
          { en: "3", zh: "3" },
          { en: "2", zh: "2" },
          { en: "**Hire MORE L** (higher MP/$)", zh: "**多用 L**(每美元 MP 较高)" },
        ],
        [
          { en: "After adjusting", zh: "调整后" },
          { en: "25", zh: "25" },
          { en: "50", zh: "50" },
          { en: "2.5", zh: "2.5" },
          { en: "2.5", zh: "2.5" },
          { en: "**Balanced — cost-minimizing**", zh: "**平衡——成本最小化**" },
        ],
      ],
      highlightLastRow: true,
    },
    {
      kind: "callout",
      label: { en: "The profit-max rule (adds one more condition)", zh: "利润最大化法则(多加一条)" },
      text: {
        en: "Cost minimization tells you the **mix** of inputs. **Profit maximization** also tells you the **total amount**: hire each input until **MRP / P = 1 for every input**, i.e. **MRP_L = P_L** and **MRP_K = P_K**. Equivalently: MRP_L / P_L = MRP_K / P_K = 1. At this point, each input earns exactly what it adds to revenue — no further adjustment raises profit.",
        zh: "成本最小化决定投入的**组合**。**利润最大化**还决定**总量**:每种投入都雇到 **MRP / P = 1**,即 **MRP_L = P_L** 且 **MRP_K = P_K**。等价地:MRP_L / P_L = MRP_K / P_K = 1。此时每种投入所带来的收入正好等于其成本——再调整已无法增加利润。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Least-cost rule vs. profit-max rule — the difference",
        zh: "最低成本法则 vs. 利润最大化法则——区别",
      },
      columns: [
        { en: "Rule", zh: "法则" },
        { en: "Condition", zh: "条件" },
        { en: "What it decides", zh: "它决定什么" },
      ],
      rows: [
        [
          { en: "Least cost", zh: "最低成本" },
          { en: "MP_L / P_L = MP_K / P_K", zh: "MP_L / P_L = MP_K / P_K" },
          { en: "**Ratio / mix** of inputs", zh: "投入**比例 / 组合**" },
        ],
        [
          { en: "Profit max", zh: "利润最大化" },
          { en: "MRP_L / P_L = MRP_K / P_K = 1", zh: "MRP_L / P_L = MRP_K / P_K = 1" },
          { en: "**Levels** of each input (hence output)", zh: "每种投入的**使用量**(进而决定产出)" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Note the nesting: any profit-maxing firm is automatically cost-minimizing, but a cost-minimizing firm may still be producing too much or too little for maximum profit.",
        zh: "注意嵌套关系:任何利润最大化的企业自动是成本最小化的;但成本最小化的企业未必在利润最大化的产量上。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: what changes when there is only **one buyer** of labor.",
        zh: "下一节:当劳动市场只有**一个买家**时,会发生什么。",
      },
    },
  ],

  // --------- Unit 5 · Topic 5 · Monopsony & Imperfect Factor Markets ---------
  "unit-5/topic-5": [
    {
      kind: "table",
      caption: {
        en: "Monopsony vs. competitive labor market",
        zh: "买方垄断 vs. 完全竞争劳动市场",
      },
      columns: [
        { en: "Feature", zh: "特征" },
        { en: "Competitive", zh: "完全竞争" },
        { en: "Monopsony", zh: "买方垄断" },
      ],
      rows: [
        [{ en: "Number of buyers (firms)", zh: "买家数(企业)" }, { en: "Many", zh: "许多" }, { en: "**One**", zh: "**一家**" }],
        [{ en: "Labor supply firm faces", zh: "企业面对的劳动供给" }, { en: "Horizontal at W*", zh: "在 W* 处水平" }, { en: "**Upward-sloping** (entire market S)", zh: "**向上倾斜**(整个市场 S)" }],
        [{ en: "MFC = marginal factor cost", zh: "MFC" }, { en: "MFC = W", zh: "MFC = W" }, { en: "**MFC > W** (above S, twice as steep for linear S)", zh: "**MFC > W**(在 S 之上,线性 S 下斜率为两倍)" }],
        [{ en: "Hiring rule", zh: "雇用法则" }, { en: "Hire until MRP = W", zh: "雇到 MRP = W" }, { en: "**Hire until MRP = MFC; read W off S**", zh: "**雇到 MRP = MFC;在 S 上读 W**" }],
        [{ en: "Employment L", zh: "雇用 L" }, { en: "Higher (L_c)", zh: "较高(L_c)" }, { en: "**Lower (L_m < L_c)**", zh: "**更低(L_m < L_c)**" }],
        [{ en: "Wage W", zh: "工资 W" }, { en: "Higher (W_c)", zh: "较高(W_c)" }, { en: "**Lower (W_m < W_c)**", zh: "**更低(W_m < W_c)**" }],
        [{ en: "DWL", zh: "DWL" }, { en: "Zero", zh: "零" }, { en: "**Positive**", zh: "**正值**" }],
      ],
      highlightLastRow: true,
    },
    {
      kind: "paragraph",
      text: {
        en: "The monopsonist's problem mirrors the monopolist's: to hire **one more** worker, the firm must raise the wage for **every** worker (can't wage-discriminate). So the MFC of the next worker = new wage + raise paid to everyone already hired > new wage alone. Hence **MFC > W** whenever L > 0.",
        zh: "买方垄断的问题与垄断者对称:多雇**1 名**工人必须给**所有**工人都涨薪(无法工资歧视)。因此下一位工人的 MFC = 新工资 + 付给已有工人的加薪 > 仅新工资。所以只要 L > 0,**MFC > W**。",
      },
    },
    { kind: "chart", chartType: "monopsony" },
    {
      kind: "callout",
      label: { en: "The monopsony two-step", zh: "买方垄断「两步法」" },
      text: {
        en: "**Step 1**: Find L* where **MFC = MRP**. **Step 2**: Go STRAIGHT DOWN to the **S curve** to read W*. Never read W off MFC! In the chart above, MFC = MRP at L = 4, giving MFC = $10 — but the wage is only W = 6 on S. The gap (MFC − W = 4) is the exploitation-per-worker relative to MRP.",
        zh: "**第 1 步**:在 **MFC = MRP** 处找 L*。**第 2 步**:**垂直向下**到 **S 曲线**读 W*。**绝不在** MFC 上读 W!上图 L = 4 处 MFC = MRP = $10,但工资在 S 上只有 W = 6。**MFC − W = 4** 即相对 MRP 的单位工资压低。",
      },
    },
    {
      kind: "callout",
      label: { en: "The counterintuitive minimum-wage result", zh: "最低工资的反直觉结论" },
      text: {
        en: "In a **competitive** labor market, a binding minimum wage above W* **reduces** employment (classic four-combo: W↑, L↓). In a **monopsony**, a minimum wage set anywhere between W_m and W_c **flattens** the firm's labor supply up to that minimum — effectively making MFC = minimum wage. If the floor is at W_c, both employment and the wage rise **to the competitive levels**, eliminating DWL. Minimum wages can be welfare-improving ONLY when firms have monopsony power.",
        zh: "**完全竞争**劳动市场里,有约束力的最低工资(高于 W*)使雇用**减少**(经典四种组合:W↑,L↓)。**买方垄断**下,设在 W_m 与 W_c 之间的最低工资把企业面对的劳动供给**拉平**到最低工资水平——MFC 实际上等于最低工资。若设在 W_c 处,雇用与工资都**提升到竞争水平**,DWL 归零。最低工资能提升福利,**仅**当企业具有买方垄断力时。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Other imperfections: **unions** act as countervailing power on the supply side (a **labor monopoly**) and can raise wages in competitive markets — at the cost of employment. **Bilateral monopoly** (one buyer + one seller) is indeterminate theoretically; real outcomes depend on bargaining power.",
        zh: "其他非完全市场:**工会**在供给侧作为制衡力量(**劳动垄断**),可在竞争市场抬高工资——但以雇用下降为代价。**双边垄断**(一买一卖)理论上不确定,实际结果取决于谈判力量。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That closes Unit 5. Up next: **Unit 6 — Market Failure & the Role of Government**, where externalities and public goods demand a different toolkit.",
        zh: "第 5 单元到此结束。下一单元:**第 6 单元——市场失灵与政府的角色**,外部性与公共物品需要不同的工具箱。",
      },
    },
  ],

  // --------- Unit 6 · Topic 1 · Social Efficiency & Market Failure ---------
  "unit-6/topic-1": [
    {
      kind: "table",
      caption: {
        en: "Private vs. social — four key quantities",
        zh: "私人与社会——四个关键量",
      },
      columns: [
        { en: "Symbol", zh: "符号" },
        { en: "Meaning", zh: "含义" },
        { en: "Who pays / receives", zh: "谁承担 / 获得" },
      ],
      rows: [
        [
          { en: "**MPC**", zh: "**MPC**" },
          { en: "Marginal private cost — the cost the producer bears", zh: "边际私人成本——生产者承担的成本" },
          { en: "Firm only", zh: "仅企业" },
        ],
        [
          { en: "**MSC**", zh: "**MSC**" },
          { en: "Marginal social cost = MPC + all external costs", zh: "边际社会成本 = MPC + 全部外部成本" },
          { en: "Firm + bystanders", zh: "企业 + 旁观者" },
        ],
        [
          { en: "**MPB**", zh: "**MPB**" },
          { en: "Marginal private benefit — value to the buyer (this is D)", zh: "边际私人收益——买家的价值(即 D)" },
          { en: "Buyer only", zh: "仅买家" },
        ],
        [
          { en: "**MSB**", zh: "**MSB**" },
          { en: "Marginal social benefit = MPB + all external benefits", zh: "边际社会收益 = MPB + 全部外部收益" },
          { en: "Buyer + bystanders", zh: "买家 + 旁观者" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "The efficiency condition", zh: "效率条件" },
      text: {
        en: "A market is **socially efficient** (maximizes total surplus) when **MSB = MSC**. Without externalities, MPB = MSB and MPC = MSC, so the market-clearing condition MPB = MPC **automatically** hits efficiency — the invisible hand works. With externalities, MPC ≠ MSC or MPB ≠ MSB, and the market produces the **wrong quantity**.",
        zh: "市场**社会有效**(总剩余最大)的条件是 **MSB = MSC**。若无外部性,MPB = MSB 且 MPC = MSC,市场出清的 MPB = MPC **自动**达到效率——看不见的手管用。有外部性时,MPC ≠ MSC 或 MPB ≠ MSB,市场产量**不对**。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Four sources of market failure",
        zh: "市场失灵的四大来源",
      },
      columns: [
        { en: "Source", zh: "来源" },
        { en: "Why the market fails", zh: "为什么市场失灵" },
      ],
      rows: [
        [
          { en: "**Externalities**", zh: "**外部性**" },
          { en: "Costs or benefits spill over to bystanders (MPC ≠ MSC or MPB ≠ MSB)", zh: "成本/收益外溢到旁观者(MPC ≠ MSC 或 MPB ≠ MSB)" },
        ],
        [
          { en: "**Public goods**", zh: "**公共物品**" },
          { en: "Non-excludable → free riders → private market undersupplies", zh: "不可排他 → 搭便车 → 私人市场供给不足" },
        ],
        [
          { en: "**Market power**", zh: "**市场力量**" },
          { en: "P > MC under monopoly / monopolistic competition (Unit 4)", zh: "垄断 / 垄断竞争下 P > MC(第 4 单元)" },
        ],
        [
          { en: "**Imperfect information**", zh: "**信息不对称**" },
          { en: "Adverse selection, moral hazard — parties can't assess quality / risk accurately", zh: "逆向选择、道德风险——双方无法准确评估质量 / 风险" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Unit 6 mostly tackles the **first two** — externalities and public goods — and their government remedies. The invisible hand, studied since Unit 2, handles the easy cases; now we diagnose what it can't.",
        zh: "第 6 单元主要处理**前两项**——外部性与公共物品——及其政府对策。自第 2 单元起学过的看不见的手能搞定简单情形;现在来诊断它搞不定的问题。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Negative Externalities** — the classic pollution case, where the market produces too much of a bad thing.",
        zh: "下一节:**负外部性**——典型的污染情形,市场「坏东西」产得太多。",
      },
    },
  ],

  // --------- Unit 6 · Topic 2 · Negative Externalities ---------
  "unit-6/topic-2": [
    {
      kind: "table",
      caption: {
        en: "Two flavors of negative externality",
        zh: "负外部性的两种类型",
      },
      columns: [
        { en: "Type", zh: "类型" },
        { en: "Condition", zh: "条件" },
        { en: "Example", zh: "例子" },
      ],
      rows: [
        [
          { en: "**Negative PRODUCTION externality**", zh: "**负**生产**外部性**" },
          { en: "**MSC > MPC** (costs spill over)", zh: "**MSC > MPC**(成本外溢)" },
          { en: "Factory pollution, truck noise", zh: "工厂污染、卡车噪音" },
        ],
        [
          { en: "**Negative CONSUMPTION externality**", zh: "**负**消费**外部性**" },
          { en: "**MPB > MSB** (using it harms others)", zh: "**MPB > MSB**(使用伤及他人)" },
          { en: "Secondhand smoke, loud stereos", zh: "二手烟、大声音响" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "For a negative **production** externality: the market sets MPC = MPB, but the true social cost is MSC > MPC. So at Q_m the **last unit's social cost exceeds social benefit**. Society would prefer less — the socially optimal Q* satisfies **MSC = MSB**, and Q_m > Q* (**overproduction**). The DWL is the triangle between MSC and MSB from Q* to Q_m.",
        zh: "负**生产**外部性:市场按 MPC = MPB 出清,但真实社会成本 MSC > MPC。在 Q_m 处**最后一单位的社会成本高于社会收益**,社会偏好更少的产量。社会最优 Q* 满足 **MSC = MSB**,且 Q_m > Q*(**过度生产**)。DWL 是 Q* 到 Q_m 之间 MSC 与 MSB 夹的三角形。",
      },
    },
    { kind: "chart", chartType: "negative-externality" },
    {
      kind: "callout",
      label: { en: "Pigouvian correction", zh: "庇古式纠正" },
      text: {
        en: "A **per-unit tax on producers equal to the marginal external cost** shifts MPC up to coincide with MSC, moving the market to the socially optimal Q*. In the chart, setting t = $2 shifts MPC from 2 + Q to 4 + Q = MSC, giving Q* = 3 at P = 7. The tax **eliminates DWL** (if calibrated correctly) and turns the externality into government revenue.",
        zh: "**对生产者征与边际外部成本等额的单位税**,使 MPC 上移至与 MSC 重合,市场被推到社会最优 Q*。图中设 t = $2,MPC 从 2 + Q 变为 4 + Q = MSC,得到 Q* = 3,P = 7。税(若校准恰当)**消除 DWL**,并把外部性转化为财政收入。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Government tools for negative externalities",
        zh: "应对负外部性的政府工具",
      },
      columns: [
        { en: "Tool", zh: "工具" },
        { en: "How it works", zh: "如何运作" },
        { en: "Strengths / weaknesses", zh: "优劣" },
      ],
      rows: [
        [
          { en: "**Pigouvian tax**", zh: "**庇古税**" },
          { en: "Price per unit of the externality (e.g. $/ton of CO₂)", zh: "对外部性按单位收费(如 $/吨 CO₂)" },
          { en: "✓ Efficient if priced correctly · ✗ Hard to measure damages", zh: "✓ 定价准确时有效 · ✗ 损害难以准确衡量" },
        ],
        [
          { en: "**Cap-and-trade (tradable permits)**", zh: "**排污权交易(可转让许可)**" },
          { en: "Fix total pollution; let firms trade permits", zh: "固定污染总量;企业间自由交易" },
          { en: "✓ Certain quantity · ✗ Permit price volatile", zh: "✓ 总量确定 · ✗ 许可价格波动" },
        ],
        [
          { en: "**Regulation (command-and-control)**", zh: "**直接管制**" },
          { en: "Mandate technology / cap emissions per firm", zh: "规定技术或单企业排放上限" },
          { en: "✓ Simple to enforce · ✗ Inefficient, inflexible", zh: "✓ 执法简单 · ✗ 低效、缺乏灵活性" },
        ],
        [
          { en: "**Coase theorem (private bargaining)**", zh: "**科斯定理(私下协商)**" },
          { en: "Well-defined property rights + low transaction costs → parties negotiate the optimum", zh: "产权明确 + 交易成本低 → 双方私下谈判达最优" },
          { en: "✓ No government needed · ✗ Fails when many parties or high transaction costs", zh: "✓ 无需政府 · ✗ 人数多或交易成本高时失灵" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Positive Externalities** — the mirror case, where the market produces too little of a good thing.",
        zh: "下一节:**正外部性**——镜像情形,市场对「好东西」产得太少。",
      },
    },
  ],

  // --------- Unit 6 · Topic 3 · Positive Externalities ---------
  "unit-6/topic-3": [
    {
      kind: "table",
      caption: {
        en: "Two flavors of positive externality",
        zh: "正外部性的两种类型",
      },
      columns: [
        { en: "Type", zh: "类型" },
        { en: "Condition", zh: "条件" },
        { en: "Example", zh: "例子" },
      ],
      rows: [
        [
          { en: "**Positive CONSUMPTION externality**", zh: "**正**消费**外部性**" },
          { en: "**MSB > MPB** (using it helps others)", zh: "**MSB > MPB**(使用使他人受益)" },
          { en: "Vaccines, flu shots, education, well-kept lawns", zh: "疫苗、流感针、教育、修整良好的草坪" },
        ],
        [
          { en: "**Positive PRODUCTION externality**", zh: "**正**生产**外部性**" },
          { en: "**MSC < MPC** (producing helps others)", zh: "**MSC < MPC**(生产使他人受益)" },
          { en: "R&D spillovers, honey-bee pollination benefiting nearby farms", zh: "研发溢出、蜜蜂为邻近农田授粉" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "For a positive **consumption** externality: the market sets MPC = MPB, but the true social benefit is MSB > MPB. At Q_m the **last unit's social benefit exceeds social cost** — society wants more. Q* (where MSC = MSB) is **larger** than Q_m: **underproduction**. The DWL is the triangle between MSB and MPC from Q_m to Q*.",
        zh: "正**消费**外部性:市场按 MPC = MPB 出清,但真实社会收益 MSB > MPB。在 Q_m 处**最后一单位的社会收益超过社会成本**——社会希望更多。社会最优 Q*(MSC = MSB 处)**大于** Q_m:**产出不足**。DWL 是 Q_m 到 Q* 之间 MSB 与 MPC 夹的三角形。",
      },
    },
    { kind: "chart", chartType: "positive-externality" },
    {
      kind: "callout",
      label: { en: "Pigouvian correction — the mirror case", zh: "庇古式纠正——镜像情形" },
      text: {
        en: "A **per-unit subsidy to consumers equal to the marginal external benefit** shifts MPB up to coincide with MSB, moving the market to Q*. In the chart, a $2 subsidy raises MPB from 10 − Q to 12 − Q = MSB, giving Q* = 5 at P = 7 paid by the market, with consumers effectively paying 7 − 2 = 5. (A subsidy to producers works symmetrically.)",
        zh: "**对消费者按边际外部收益等额补贴**,MPB 上移至与 MSB 重合,市场到达 Q*。图中 $2 补贴使 MPB 从 10 − Q 上升到 12 − Q = MSB,得到 Q* = 5,市场价格 P = 7,消费者实际净支付 7 − 2 = 5。(对生产者补贴对称成立。)",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Government tools for positive externalities",
        zh: "应对正外部性的政府工具",
      },
      columns: [
        { en: "Tool", zh: "工具" },
        { en: "How it works", zh: "如何运作" },
      ],
      rows: [
        [
          { en: "**Pigouvian subsidy**", zh: "**庇古补贴**" },
          { en: "Per-unit payment to consumers or producers equal to the external benefit", zh: "对消费者或生产者每单位支付等于外部收益" },
        ],
        [
          { en: "**Public provision**", zh: "**公共提供**" },
          { en: "Government supplies the good (free public schools, free vaccines)", zh: "政府直接提供(免费义务教育、免费疫苗)" },
        ],
        [
          { en: "**Mandates / requirements**", zh: "**强制 / 规定**" },
          { en: "Compulsory schooling, required vaccines for school enrollment", zh: "义务教育年限、入学疫苗要求" },
        ],
        [
          { en: "**Patents (for R&D)**", zh: "**专利(针对研发)**" },
          { en: "Give innovators temporary market power → closer capture of the benefit", zh: "给予创新者临时市场力量 → 更多收益内部化" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Public Goods & Common Resources** — goods with rivalrous/excludable properties the private market struggles to handle.",
        zh: "下一节:**公共物品与公地资源**——私人市场难以处理的「可竞争 / 可排他」特征的商品。",
      },
    },
  ],

  // --------- Unit 6 · Topic 4 · Public Goods & Common Resources ---------
  "unit-6/topic-4": [
    {
      kind: "table",
      caption: {
        en: "The rivalry × excludability grid — four kinds of goods",
        zh: "「可竞争 × 可排他」两维分类——四种物品",
      },
      columns: [
        { en: "", zh: "" },
        { en: "**Excludable**", zh: "**可排他**" },
        { en: "**Non-excludable**", zh: "**不可排他**" },
      ],
      rows: [
        [
          { en: "**Rivalrous**", zh: "**可竞争**" },
          { en: "**Private goods** (bread, shoes)", zh: "**私人物品**(面包、鞋子)" },
          { en: "**Common-pool resources** (ocean fish, public grazing)", zh: "**公地资源**(海洋渔业、公共牧场)" },
        ],
        [
          { en: "**Non-rivalrous**", zh: "**不可竞争**" },
          { en: "**Club goods** (cable TV, toll roads, streaming)", zh: "**俱乐部物品**(有线电视、收费公路、流媒体)" },
          { en: "**Public goods** (national defense, street lighting)", zh: "**公共物品**(国防、路灯)" },
        ],
      ],
    },
    {
      kind: "callout",
      label: { en: "Two defining properties", zh: "两项定义性特征" },
      text: {
        en: "**Rivalrous**: one person's consumption reduces what's available for others (a sandwich). **Excludable**: it's possible to prevent non-payers from consuming (a movie ticket checks). A **public good** is BOTH non-rivalrous AND non-excludable — the hardest case for private markets.",
        zh: "**可竞争**:一人消费减少他人可消费的量(一份三明治)。**可排他**:能阻止未付费者消费(电影检票)。**公共物品**同时**不可竞争**且**不可排他**——对私人市场而言最难的情形。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "**Free-rider problem** (public goods): since you can consume a non-excludable good without paying, everyone has an incentive to wait for someone else to pay. Nobody pays, the good is undersupplied or not provided at all. Example: nobody voluntarily funds a lighthouse — government must do it through taxes.",
        zh: "**搭便车问题**(公共物品):不可排他意味着不付费也能消费,人人都想等别人付费。结果谁都不付,物品供给不足甚至无法提供。例:没人自愿出资建灯塔——必须由政府以税款提供。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "**Tragedy of the commons** (common-pool resources): rivalrous but non-excludable → each user consumes without regard for others' shares → overuse, depletion. Example: unregulated fishing → fisheries collapse. Solutions: quotas, permits, privatization of property rights, community self-governance.",
        zh: "**公地悲剧**(公地资源):可竞争但不可排他 → 每个使用者只顾自己、不顾他人的份额 → 过度使用、耗尽。例:无管制的渔业 → 渔场崩溃。对策:配额、许可证、产权私有化、社区自治。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Policy responses by good type",
        zh: "按物品类型分的政策应对",
      },
      columns: [
        { en: "Good type", zh: "物品类型" },
        { en: "Main problem", zh: "主要问题" },
        { en: "Typical solution", zh: "典型对策" },
      ],
      rows: [
        [{ en: "Private", zh: "私人" }, { en: "None (market handles it)", zh: "无(市场自然运作)" }, { en: "Leave to the market", zh: "交给市场" }],
        [{ en: "Club", zh: "俱乐部" }, { en: "Exclusion costs; may need many users", zh: "排他成本;需足够多用户" }, { en: "Subscriptions, tolls", zh: "订阅、通行费" }],
        [{ en: "Common-pool", zh: "公地" }, { en: "**Overuse** (tragedy of commons)", zh: "**过度使用**(公地悲剧)" }, { en: "Quotas, permits, privatize rights", zh: "配额、许可证、产权私有化" }],
        [{ en: "Public", zh: "公共" }, { en: "**Undersupply** (free riders)", zh: "**供给不足**(搭便车)" }, { en: "Tax-funded public provision", zh: "财政税收提供" }],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "Up next: **Inequality** — the final role of government in Unit 6, measured through Lorenz curves and Gini coefficients.",
        zh: "下一节:**不平等**——第 6 单元政府的最后一个角色,用洛伦兹曲线与基尼系数衡量。",
      },
    },
  ],

  // --------- Unit 6 · Topic 5 · Income & Wealth Inequality ---------
  "unit-6/topic-5": [
    {
      kind: "table",
      caption: {
        en: "Income vs. wealth — different things",
        zh: "收入 vs. 财富——不是同一概念",
      },
      columns: [
        { en: "Concept", zh: "概念" },
        { en: "What it is", zh: "是什么" },
        { en: "Typical distribution", zh: "典型分布" },
      ],
      rows: [
        [
          { en: "**Income** (flow)", zh: "**收入**(流量)" },
          { en: "Earnings over a period: wages, rents, interest, profits", zh: "一段时间的收益:工资、租金、利息、利润" },
          { en: "Moderately unequal", zh: "中度不平等" },
        ],
        [
          { en: "**Wealth** (stock)", zh: "**财富**(存量)" },
          { en: "Net assets at a point in time: savings, home, stocks minus debt", zh: "某时点的净资产:储蓄、房产、股票减债务" },
          { en: "**Much more unequal** than income", zh: "**远比收入**更不平等" },
        ],
      ],
    },
    { kind: "chart", chartType: "lorenz-curve" },
    {
      kind: "callout",
      label: { en: "Reading a Lorenz curve", zh: "读洛伦兹曲线" },
      text: {
        en: "X-axis: cumulative % of the **population** (poorest to richest). Y-axis: cumulative % of **income** (or wealth). The 45° line is **perfect equality** (bottom 20% earn 20%, etc.). The actual Lorenz curve **bows below** the equality line. The further below, the greater the inequality. If the bottom 80% earn only 64% of income, the top 20% earn 36% — far above their population share.",
        zh: "横轴:从穷到富的**累计人口**百分比;纵轴:累计**收入**(或财富)百分比。45° 线是**完全平等**(底 20% 拿 20%,以此类推)。实际洛伦兹曲线**向下凸**,越远离平等线越不平等。若底 80% 人口拿 64% 收入,则顶 20% 拿 36%——远超其人口比重。",
      },
    },
    {
      kind: "callout",
      label: { en: "Gini coefficient — a single inequality number", zh: "基尼系数——单一不平等数值" },
      text: {
        en: "**Gini = (area between equality line and Lorenz curve) / (total area under equality line)**. Range: **0** = perfect equality (Lorenz coincides with 45° line); **1** = one person has everything. The Lorenz curve in the chart above has Gini ≈ **0.33** — comparable to developed economies. Higher Gini = more inequality.",
        zh: "**Gini = (平等线与洛伦兹曲线之间的面积) / (平等线以下总面积)**。取值:**0** = 完全平等(洛伦兹与 45° 重合);**1** = 一人占有全部。上图洛伦兹曲线 Gini ≈ **0.33**——与发达经济体相当。Gini 越大越不平等。",
      },
    },
    {
      kind: "table",
      caption: {
        en: "Redistribution policies and their trade-offs",
        zh: "再分配政策及其权衡",
      },
      columns: [
        { en: "Policy", zh: "政策" },
        { en: "How it reduces inequality", zh: "如何减少不平等" },
        { en: "Efficiency cost", zh: "效率代价" },
      ],
      rows: [
        [
          { en: "**Progressive income tax**", zh: "**累进所得税**" },
          { en: "Higher marginal rates on higher incomes", zh: "高收入边际税率更高" },
          { en: "Distorts labor-leisure choice (DWL from tax wedge)", zh: "扭曲「劳动 vs. 闲暇」选择(税楔造成 DWL)" },
        ],
        [
          { en: "**Transfer payments**", zh: "**转移支付**" },
          { en: "Social Security, unemployment, SNAP, EITC", zh: "社保、失业金、食品券、EITC" },
          { en: "Can weaken work incentives if phased out too steeply", zh: "若退出太陡会削弱劳动激励" },
        ],
        [
          { en: "**Public provision of merit goods**", zh: "**公共提供绩效物品**" },
          { en: "Public education, healthcare → raises bottom incomes long-term", zh: "公立教育、医疗 → 长期提高底层收入" },
          { en: "Financing requires taxes; quality may lag private alternatives", zh: "财政需税款;质量可能落后于私营" },
        ],
        [
          { en: "**Minimum wage**", zh: "**最低工资**" },
          { en: "Raises low-wage earnings floor", zh: "抬高低工资底线" },
          { en: "May reduce employment in competitive labor markets (Unit 5)", zh: "在竞争劳动市场可能降低雇用(见第 5 单元)" },
        ],
      ],
    },
    {
      kind: "paragraph",
      text: {
        en: "**The equity-efficiency trade-off**: every redistributive policy pays some efficiency cost for a gain in equity. There is no answer economics alone can give to 'how much inequality is too much' — that's a value judgment. What economics CAN say is what each policy costs and who pays for it.",
        zh: "**公平-效率权衡**:任何再分配政策都为公平付出一定的效率代价。「多大不平等算过分」不是经济学能单独回答的问题——这是价值判断。经济学能说清的是:每项政策的代价是多少、由谁承担。",
      },
    },
    {
      kind: "paragraph",
      text: {
        en: "That closes Unit 6 — and the AP Microeconomics course. From individual choices under scarcity, through market structure and factor pricing, to the role of government in correcting failures: you now have the complete microeconomic toolkit.",
        zh: "第 6 单元——以及整个 AP 微观经济学课程——到此结束。从稀缺下的个人选择,到市场结构与要素定价,再到政府在纠正市场失灵中的角色:你已经掌握了完整的微观经济学工具箱。",
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

  // --------- Unit 3 · Topic 1 · Production & Diminishing Returns ---------
  "unit-3/topic-1": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Short-run production at a print shop (one fixed press)",
          zh: "一家印刷店的短期生产(固定 1 台印刷机)",
        },
        columns: [
          { en: "Workers (L)", zh: "工人数(L)" },
          { en: "Total Product (TP)", zh: "总产量(TP)" },
        ],
        rows: [
          [{ en: "0", zh: "0" }, { en: "0", zh: "0" }],
          [{ en: "1", zh: "1" }, { en: "10", zh: "10" }],
          [{ en: "2", zh: "2" }, { en: "26", zh: "26" }],
          [{ en: "3", zh: "3" }, { en: "48", zh: "48" }],
          [{ en: "4", zh: "4" }, { en: "66", zh: "66" }],
          [{ en: "5", zh: "5" }, { en: "78", zh: "78" }],
          [{ en: "6", zh: "6" }, { en: "84", zh: "84" }],
          [{ en: "7", zh: "7" }, { en: "82", zh: "82" }],
        ],
      },
      prompt: {
        en: "At which worker does **diminishing marginal returns** first set in, and at which worker does **marginal product first become negative**?",
        zh: "从哪一位工人开始出现**边际收益递减**?从哪一位工人开始**边际产量首次为负**?",
      },
      choices: [
        { id: "a", text: { en: "Diminishing returns begin at L=3; MP first negative at L=6.", zh: "L=3 开始递减;L=6 首次为负。" } },
        { id: "b", text: { en: "Diminishing returns begin at L=4; MP first negative at L=7.", zh: "L=4 开始递减;L=7 首次为负。" } },
        { id: "c", text: { en: "Diminishing returns begin at L=7; MP first negative at L=7.", zh: "L=7 开始递减;L=7 首次为负。" } },
        { id: "d", text: { en: "Diminishing returns begin at L=2; MP first negative at L=6.", zh: "L=2 开始递减;L=6 首次为负。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Compute MP (ΔTP): **10, 16, 22, 18, 12, 6, −2**. MP rises through L=3 (22), then **falls** starting at L=4 (18) — that's where **diminishing MP** begins. MP stays positive through L=6 (+6). At **L=7, MP = 82 − 84 = −2**, the first negative value. Note the distinction: diminishing MP means **slower** growth (still positive); negative MP means TP actually **falls**.",
        zh: "算 MP(ΔTP):**10、16、22、18、12、6、−2**。MP 在 L=3 达到 22 的峰值,L=4 开始下降到 18——**边际递减**从这里开始。MP 到 L=6 仍为正(+6)。**L=7 时 MP = 82 − 84 = −2**,首次为负。注意区别:边际递减是增速**变慢**(仍为正);MP 为负是 TP **实际下降**。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A firm's 5th worker has MP = 12 and the firm's AP rose from 10 (at 4 workers) to **AP₅ = 10.4**. The firm hires a **6th worker** with **MP = 4**. What must be true about **AP₆**?",
        zh: "某企业第 5 名工人的 MP = 12,AP 从 4 人时的 10 升到 **AP₅ = 10.4**。再招第 **6** 名工人,**MP = 4**。**AP₆** 必然满足什么?",
      },
      choices: [
        { id: "a", text: { en: "AP₆ > AP₅ because MP₆ > 0 (any positive MP raises AP).", zh: "AP₆ > AP₅,因为 MP₆ > 0(只要 MP 为正,AP 就升)。" } },
        { id: "b", text: { en: "AP₆ = AP₅ because AP is a running average and one more worker barely changes it.", zh: "AP₆ = AP₅,因为 AP 是累积平均,多一人几乎不变。" } },
        { id: "c", text: { en: "AP₆ < AP₅ because **MP₆ (4) < AP₅ (10.4)** — marginal below average pulls the average down.", zh: "AP₆ < AP₅,因为 **MP₆(4)< AP₅(10.4)**——边际低于平均,会把平均拉下来。" } },
        { id: "d", text: { en: "Cannot be determined without knowing TP.", zh: "不知道 TP 时无法判断。" } },
      ],
      answerId: "c",
      explanation: {
        en: "The **MP-pulls-AP rule**: when **MP < AP**, AP **falls**. Here MP₆ = 4 is well below AP₅ = 10.4, so AP must fall. Concretely: TP₅ = 5 × 10.4 = 52; TP₆ = 52 + 4 = 56; AP₆ = 56/6 ≈ **9.33** < 10.4 ✓. Choice A wrongly assumes positive MP always raises AP — it only does so when MP > AP.",
        zh: "**MP 拉动 AP 规则**:**MP < AP** 时,AP **下降**。这里 MP₆ = 4 远低于 AP₅ = 10.4,AP 必然下降。具体地:TP₅ = 5 × 10.4 = 52;TP₆ = 52 + 4 = 56;AP₆ = 56/6 ≈ **9.33** < 10.4 ✓。选项 A 误以为 MP 为正就会提高 AP——只有 MP > AP 时才成立。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Which statement about **diminishing marginal returns** is TRUE?",
        zh: "关于**边际收益递减**,哪项陈述正确?",
      },
      choices: [
        { id: "a", text: { en: "It is the same thing as diseconomies of scale, just with different names.", zh: "与规模不经济是同一回事,只是名称不同。" } },
        { id: "b", text: { en: "It is a **short-run** phenomenon that occurs because **at least one input is fixed**; it has no bearing on long-run costs.", zh: "它是**短期**现象,因为**至少有一项投入固定**;与长期成本无关。" } },
        { id: "c", text: { en: "It implies that total product must eventually become negative.", zh: "它意味着总产量最终会变为负数。" } },
        { id: "d", text: { en: "It is avoided in industries that use advanced technology.", zh: "使用高科技的行业可以避免它。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Diminishing marginal returns** is defined for the **short run**, where at least one input (capital, land) is fixed and you vary another (labor). In the **long run**, every input can be scaled — so diminishing returns doesn't apply; **diseconomies of scale** is a separate long-run phenomenon driven by coordination costs, not crowding of a fixed input. Choice A conflates the two; choice C confuses diminishing MP with negative MP — TP keeps rising through diminishing MP.",
        zh: "**边际收益递减**是为**短期**定义的——至少有一项投入(资本、土地)固定,另一项(劳动)可变。**长期**中所有投入都可按比例扩张,因此该规律不适用;**规模不经济**是**另一个**长期现象,由协调成本驱动,而不是固定投入被挤。选项 A 把两者混为一谈;选项 C 把边际递减与 MP 为负混淆——边际递减时 TP 仍在上升。",
      },
    },
  ],

  // --------- Unit 3 · Topic 2 · Short-Run Costs ---------
  "unit-3/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Partial short-run cost table (all figures in dollars)",
          zh: "短期成本部分表(金额为美元)",
        },
        columns: [
          { en: "Q", zh: "Q" },
          { en: "FC", zh: "FC" },
          { en: "VC", zh: "VC" },
          { en: "TC", zh: "TC" },
          { en: "ATC", zh: "ATC" },
        ],
        rows: [
          [{ en: "10", zh: "10" }, { en: "60", zh: "60" }, { en: "90", zh: "90" }, { en: "150", zh: "150" }, { en: "15", zh: "15" }],
          [{ en: "11", zh: "11" }, { en: "60", zh: "60" }, { en: "?", zh: "?" }, { en: "?", zh: "?" }, { en: "14.50", zh: "14.50" }],
        ],
      },
      prompt: {
        en: "Compute the **marginal cost of the 11th unit**.",
        zh: "计算**第 11 单位的边际成本**。",
      },
      choices: [
        { id: "a", text: { en: "$10 — because ATC fell by $0.50.", zh: "$10——因为 ATC 下降 $0.50。" } },
        { id: "b", text: { en: "$9.50 — because TC₁₁ = 11 × 14.50 = 159.50, so MC = 159.50 − 150 = $9.50.", zh: "$9.50——因为 TC₁₁ = 11 × 14.50 = 159.50,所以 MC = 159.50 − 150 = $9.50。" } },
        { id: "c", text: { en: "$14.50 — the new ATC is the MC.", zh: "$14.50——新的 ATC 就是 MC。" } },
        { id: "d", text: { en: "$5 — the drop in AFC.", zh: "$5——AFC 的下降幅度。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Reconstruct TC from ATC × Q: **TC₁₁ = 11 × 14.50 = $159.50**. Then **MC = ΔTC / ΔQ = (159.50 − 150) / 1 = $9.50**. Sanity check: MC ($9.50) < old ATC ($15), which is why ATC fell — marginal below average always pulls average down. Choice C confuses ATC with MC; they coincide only at minimum ATC.",
        zh: "用 ATC × Q 还原 TC:**TC₁₁ = 11 × 14.50 = $159.50**。再算 **MC = ΔTC / ΔQ = (159.50 − 150) / 1 = $9.50**。自检:MC($9.50)< 原 ATC($15),这正是 ATC 下降的原因——边际低于平均时,平均下降。选项 C 把 ATC 与 MC 混淆;两者只在 ATC 最低点相等。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "At Q = 100, a firm's **ATC = $20 and rising**; **AVC = $12 and rising**; **AFC = $8 and falling**. Which statement is consistent with these facts?",
        zh: "Q = 100 时,企业 **ATC = $20 且正在上升**;**AVC = $12 且正在上升**;**AFC = $8 且正在下降**。以下哪项与此一致?",
      },
      choices: [
        { id: "a", text: { en: "This is impossible — if AFC is falling, ATC cannot be rising.", zh: "这不可能——AFC 在下降,ATC 就不能上升。" } },
        { id: "b", text: { en: "MC > ATC at Q = 100 (since ATC is rising).", zh: "Q = 100 时 MC > ATC(因为 ATC 在上升)。" } },
        { id: "c", text: { en: "MC < AVC at Q = 100 (since AVC is rising).", zh: "Q = 100 时 MC < AVC(因为 AVC 在上升)。" } },
        { id: "d", text: { en: "Q = 100 must be the minimum of ATC.", zh: "Q = 100 必然是 ATC 最低点。" } },
      ],
      answerId: "b",
      explanation: {
        en: "If **ATC is rising**, marginal cost must be **above** ATC at that Q — otherwise the average would be falling. Same for AVC: AVC rising ⇒ MC > AVC. So **MC > ATC > AVC = 12**, and AFC = 8 is falling (AFC = FC/Q always falls as Q rises). Choice A is wrong because ATC = AFC + AVC, and AVC can rise faster than AFC falls — the net can be an increase.",
        zh: "**ATC 上升**意味着该 Q 处 MC **高于** ATC(否则平均就会下降)。AVC 同理:AVC 上升 ⇒ MC > AVC。所以 **MC > ATC > AVC = 12**,AFC = 8 下降(AFC = FC/Q 随 Q 增而下降)。选项 A 错了:因为 ATC = AFC + AVC,AVC 上升快过 AFC 下降时,整体可以上升。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A widget factory pays workers **$60/day** each. The 5th worker adds **MP = 6 widgets/day**; the 6th worker adds **MP = 4 widgets/day**. Which statement about the **marginal cost of producing widgets** is TRUE between the 5th and 6th worker?",
        zh: "某小配件厂每名工人日薪 **$60**。第 5 名工人 **MP = 6 件/日**;第 6 名工人 **MP = 4 件/日**。关于**每件产品的边际成本**在这两名工人之间,哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "MC rises from $10 to $15 per widget (MC = w/MP).", zh: "MC 从 $10 升到 $15/件(MC = w/MP)。" } },
        { id: "b", text: { en: "MC is $60 for every widget produced (the wage).", zh: "每件 MC 都是 $60(工资)。" } },
        { id: "c", text: { en: "MC falls from $15 to $10 per widget.", zh: "MC 从 $15 降到 $10/件。" } },
        { id: "d", text: { en: "MC cannot be computed without knowing fixed cost.", zh: "不知道固定成本就无法计算 MC。" } },
      ],
      answerId: "a",
      explanation: {
        en: "When labor is the variable input, **MC = w / MP**. 5th worker: **MC = 60/6 = $10**. 6th worker: **MC = 60/4 = $15**. MC **rises** precisely because of diminishing marginal returns — each additional worker adds fewer widgets, so the wage is spread over fewer units. FC does not enter MC (B and D wrong). This formula is the link between production (Unit 3 topic 1) and cost (topic 2).",
        zh: "当劳动是可变投入时,**MC = 工资 / MP**。第 5 名:**MC = 60/6 = $10**。第 6 名:**MC = 60/4 = $15**。MC **上升**正是因为边际收益递减——每多一名工人产出更少,同样的工资分摊到更少的件数上。FC 不进入 MC(B、D 错)。此公式正是连接生产(第 3 单元话题 1)与成本(话题 2)的纽带。",
      },
    },
  ],

  // --------- Unit 3 · Topic 3 · Long-Run Costs & Economies of Scale ---------
  "unit-3/topic-3": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "LRATC data for a manufacturer at different plant sizes",
          zh: "不同厂房规模下的 LRATC 数据",
        },
        columns: [
          { en: "Output (Q/yr)", zh: "年产量 Q" },
          { en: "LRATC ($/unit)", zh: "LRATC($/件)" },
        ],
        rows: [
          [{ en: "1,000", zh: "1,000" }, { en: "40", zh: "40" }],
          [{ en: "5,000", zh: "5,000" }, { en: "28", zh: "28" }],
          [{ en: "10,000", zh: "10,000" }, { en: "22", zh: "22" }],
          [{ en: "15,000", zh: "15,000" }, { en: "22", zh: "22" }],
          [{ en: "20,000", zh: "20,000" }, { en: "22", zh: "22" }],
          [{ en: "25,000", zh: "25,000" }, { en: "25", zh: "25" }],
          [{ en: "30,000", zh: "30,000" }, { en: "31", zh: "31" }],
        ],
      },
      prompt: {
        en: "What is the industry's **minimum efficient scale (MES)**, and where do **diseconomies of scale** begin?",
        zh: "该行业的**最小有效规模(MES)**是多少?**规模不经济**从何处开始?",
      },
      choices: [
        { id: "a", text: { en: "MES = 1,000 (the smallest size shown); diseconomies begin at 5,000.", zh: "MES = 1,000(表中最小);5,000 处开始规模不经济。" } },
        { id: "b", text: { en: "MES = 10,000 (the smallest Q at which LRATC first reaches its minimum of $22); diseconomies begin after 20,000.", zh: "MES = 10,000(LRATC 首次达到最低 $22 的最小 Q);20,000 之后出现规模不经济。" } },
        { id: "c", text: { en: "MES = 20,000 (the largest Q at LRATC minimum); diseconomies begin at 25,000.", zh: "MES = 20,000(最低 LRATC 的最大 Q);25,000 开始规模不经济。" } },
        { id: "d", text: { en: "MES = 30,000 (the largest output).", zh: "MES = 30,000(最大产量)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**MES = the smallest Q at which LRATC reaches its minimum.** LRATC hits $22 first at **Q = 10,000** — that's MES. Any firm producing less has a cost disadvantage. Between 10k and 20k, LRATC is flat (**constant returns to scale**). From 25k onward LRATC rises — **diseconomies of scale** begin after 20,000. Choice C confuses MES (first minimum) with the last point of the flat region.",
        zh: "**MES = LRATC 达到最低的最小 Q。**LRATC 在 **Q = 10,000** 首次触及最低 $22——此为 MES。低于此产量的企业存在成本劣势。10k~20k 之间 LRATC 保持平稳(**规模报酬不变**)。25k 之后 LRATC 上升——**规模不经济**从 20,000 之后开始。选项 C 把 MES(首次最低)与平稳段的末端混淆了。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A firm doubles **every input** (labor, capital, land) and finds that output more than doubles; average cost per unit **falls**. This is best described as:",
        zh: "某企业把**所有投入**(劳动、资本、土地)翻倍,产出**多于**翻倍,单位平均成本**下降**。最贴切的描述是:",
      },
      choices: [
        { id: "a", text: { en: "Diminishing marginal returns — output grew less than proportionally.", zh: "边际收益递减——产出不及投入增长比例。" } },
        { id: "b", text: { en: "Increasing marginal product of labor.", zh: "劳动边际产量递增。" } },
        { id: "c", text: { en: "**Economies of scale** (increasing returns to scale) — a long-run concept where all inputs scale together.", zh: "**规模经济**(规模报酬递增)——长期概念,所有投入同时变化。" } },
        { id: "d", text: { en: "Diseconomies of scale.", zh: "规模不经济。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Doubling **all** inputs is the **long-run** experiment. Output more than doubling means **increasing returns to scale**, and the falling LRATC is **economies of scale**. Choice A is wrong because diminishing returns assumes a **fixed** input — here nothing is fixed. The distinction between diminishing returns (short run) and diseconomies of scale (long run) is a frequent AP trap.",
        zh: "把**所有**投入都翻倍是**长期**实验。产出多于翻倍意味着**规模报酬递增**,LRATC 下降即**规模经济**。选项 A 错了:边际收益递减假设有一项投入**固定**——这里没有任何投入固定。边际递减(短期)与规模不经济(长期)的区别,是 AP 常见陷阱。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Which of the following is the **least likely** cause of **diseconomies of scale** in a very large firm?",
        zh: "对超大规模企业而言,下列哪项**最不可能**是**规模不经济**的成因?",
      },
      choices: [
        { id: "a", text: { en: "Layers of middle management slow decision-making.", zh: "层层中层管理减缓决策。" } },
        { id: "b", text: { en: "Communication distortions between HQ and distant divisions.", zh: "总部与远距部门之间的信息失真。" } },
        { id: "c", text: { en: "A fixed piece of capital (e.g., a single factory) becoming overcrowded with workers.", zh: "某项固定资本(如某间厂房)被过多工人挤占。" } },
        { id: "d", text: { en: "Shirking and coordination costs rising faster than output.", zh: "偷懒与协调成本增长快于产出。" } },
      ],
      answerId: "c",
      explanation: {
        en: "**Diseconomies of scale** are **long-run** problems (bureaucracy, coordination, communication) — A, B, D. Choice **C** describes a **short-run** problem: crowding of a FIXED input is diminishing marginal returns, not diseconomies of scale. In the long run the firm would simply build a second factory; the fact that scaling **every** input together still raises average cost is what makes diseconomies distinct.",
        zh: "**规模不经济**属**长期**问题(官僚、协调、沟通)——A、B、D。选项 **C** 属**短期**问题:固定投入被挤占是边际递减,而不是规模不经济。长期中企业会再建一家厂房;即便**同时**扩大**所有**投入,平均成本依然上升,才是规模不经济的独有之处。",
      },
    },
  ],

  // --------- Unit 3 · Topic 4 · Profit Maximization (MR = MC) ---------
  "unit-3/topic-4": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "A firm faces constant P = $50. MC at each Q:",
          zh: "企业面对固定 P = $50。各 Q 的 MC:",
        },
        columns: [
          { en: "Q", zh: "Q" },
          { en: "MC ($)", zh: "MC($)" },
        ],
        rows: [
          [{ en: "1", zh: "1" }, { en: "20", zh: "20" }],
          [{ en: "2", zh: "2" }, { en: "25", zh: "25" }],
          [{ en: "3", zh: "3" }, { en: "35", zh: "35" }],
          [{ en: "4", zh: "4" }, { en: "50", zh: "50" }],
          [{ en: "5", zh: "5" }, { en: "65", zh: "65" }],
          [{ en: "6", zh: "6" }, { en: "80", zh: "80" }],
        ],
      },
      prompt: {
        en: "What is the **profit-maximizing quantity**, and how much does producing the 5th unit add to profit?",
        zh: "**利润最大化产量**是多少?第 5 单位对利润的贡献是多少?",
      },
      choices: [
        { id: "a", text: { en: "Q* = 5, because 5 is closest to the middle; the 5th unit adds $65 to profit.", zh: "Q* = 5,因其位于中间;第 5 单位给利润加 $65。" } },
        { id: "b", text: { en: "Q* = 4 (where MR = MC = $50); the 5th unit would **subtract $15** (MR − MC = 50 − 65).", zh: "Q* = 4(MR = MC = $50);第 5 单位会使利润**减 $15**(MR − MC = 50 − 65)。" } },
        { id: "c", text: { en: "Q* = 3 (last unit where MC < MR strictly); the 5th unit adds $0.", zh: "Q* = 3(最后一个严格 MC < MR 的 Q);第 5 单位贡献 $0。" } },
        { id: "d", text: { en: "Q* = 6 (the highest Q); each unit covers cost.", zh: "Q* = 6(最大 Q);每单位都覆盖成本。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Apply **MR = MC**. With constant price, **MR = P = $50**. The last Q where MC ≤ MR is **Q = 4 (MC = 50)** — the rule says produce through Q = 4 and stop. The 5th unit's contribution to profit = MR − MC = **50 − 65 = −$15** (a loss per unit). Choice C stops too early (Q = 3 is a strict MC < MR, but at Q = 4 the firm is indifferent and should still produce it).",
        zh: "套 **MR = MC**。价格固定时,**MR = P = $50**。MC ≤ MR 的最后 Q 是 **Q = 4(MC = 50)**——生产到 Q = 4 为止。第 5 单位对利润的贡献 = MR − MC = **50 − 65 = −$15**(单位亏损)。选项 C 停得太早(Q = 3 时 MC 严格小于 MR,但到 Q = 4 企业无差异,仍应生产)。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A firm in the short run faces **P = $8**. At its MR = MC output, **AVC = $7** and **ATC = $11**. Fixed costs are **$400** and it produces **100 units**. What should the firm do in the short run, and what is its profit/loss?",
        zh: "短期中企业面对 **P = $8**。在 MR = MC 的产量,**AVC = $7**,**ATC = $11**。固定成本为 **$400**,产量 **100 件**。短期应如何决策?利润/亏损是多少?",
      },
      choices: [
        { id: "a", text: { en: "Shut down; loss = $400 (fixed cost only).", zh: "停业;亏损 = $400(仅固定成本)。" } },
        { id: "b", text: { en: "**Produce**; loss = **$300**. (Since P > AVC, the firm covers all VC plus $1 toward FC per unit, reducing the $400 FC loss to $300.)", zh: "**继续生产**;亏损 = **$300**。(P > AVC,单位覆盖全部 VC 并向 FC 贡献 $1,使 $400 的 FC 亏损降到 $300。)" } },
        { id: "c", text: { en: "Produce; earn profit of $300 (since P > AVC).", zh: "生产;获利 $300(因 P > AVC)。" } },
        { id: "d", text: { en: "Produce; loss = $400 regardless (same as shutting down).", zh: "生产;亏损 $400(与停业相同)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Shutdown check: P = $8 > AVC = $7 → **keep producing** (losing less than shutting down). Profit = (P − ATC) × Q = **(8 − 11) × 100 = −$300**. Shutdown loss would be **$400** (all FC). By producing, the firm cuts its loss by $100 — exactly the $1 contribution margin × 100 units. Choice A makes the classic mistake of shutting down whenever loss occurs.",
        zh: "停业检验:P = $8 > AVC = $7 → **继续生产**(比停业亏得少)。利润 = (P − ATC) × Q = **(8 − 11) × 100 = −$300**。停业亏损为 **$400**(全部 FC)。继续生产每件贡献 $1 × 100 = $100,使亏损减少 $100。选项 A 是常见错误——一亏损就停业。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "At **Q = 50**, a monopolist's **MR = $12** and **MC = $8**. The firm's current ATC at Q = 50 is $15, so the firm is earning a loss of $3 per unit. Which action maximizes profit (or minimizes loss)?",
        zh: "某垄断者在 **Q = 50** 时,**MR = $12**、**MC = $8**。当前 Q = 50 处 ATC = $15,单位亏损 $3。下列何项使利润最大(或亏损最小)?",
      },
      choices: [
        { id: "a", text: { en: "Cut output — profit is already negative, so producing less reduces the loss.", zh: "减产——既然已亏损,减产就会减亏。" } },
        { id: "b", text: { en: "Keep output at 50 — ATC is above price, so nothing else helps.", zh: "维持 50——ATC 高于价格,其他都无用。" } },
        { id: "c", text: { en: "**Expand output** — as long as **MR > MC**, each extra unit adds more revenue than cost, shrinking the loss (or turning it into profit).", zh: "**增产**——只要 **MR > MC**,每多一单位的收入都大于成本,亏损缩小(甚至转为盈利)。" } },
        { id: "d", text: { en: "Shut down immediately — any loss is unacceptable in the short run.", zh: "立即停业——短期任何亏损都不可接受。" } },
      ],
      answerId: "c",
      explanation: {
        en: "The rule is **MR vs. MC**, not whether ATC is above or below P. Here MR ($12) > MC ($8), so each additional unit adds **$4** to profit. The firm should expand Q until MR = MC, regardless of current ATC. The per-unit loss of $3 is a red herring — it is based on ATC, not marginal values. Only shutdown depends on an **average** (P vs. AVC), and this question does not give AVC.",
        zh: "规则是 **MR 与 MC** 的比较,而非 ATC 是否高于 P。这里 MR($12)> MC($8),每多一单位对利润贡献 **$4**。企业应增产直到 MR = MC,与当前 ATC 无关。$3 单位亏损是干扰项——它基于 ATC 而非边际值。只有停业决策才用**平均值**(P 与 AVC 比较),而题目未给 AVC。",
      },
    },
  ],

  // --------- Unit 3 · Topic 5 · Perfect Competition ---------
  "unit-3/topic-5": [
    {
      id: "q1",
      prompt: {
        en: "In a perfectly competitive market in **long-run equilibrium**, which chain of equalities must hold for every surviving firm?",
        zh: "在**长期均衡**的完全竞争市场中,每个存活企业必然满足下列哪一串等式?",
      },
      choices: [
        { id: "a", text: { en: "P = MR > MC > minimum ATC.", zh: "P = MR > MC > 最低 ATC。" } },
        { id: "b", text: { en: "**P = MR = MC = minimum ATC**; economic profit = 0.", zh: "**P = MR = MC = 最低 ATC**;经济利润 = 0。" } },
        { id: "c", text: { en: "P = MR = MC < minimum ATC; firms lose money but stay in the industry.", zh: "P = MR = MC < 最低 ATC;亏损但留在行业。" } },
        { id: "d", text: { en: "P > MR = MC; downward-sloping demand at the firm level.", zh: "P > MR = MC;企业层面需求向下倾斜。" } },
      ],
      answerId: "b",
      explanation: {
        en: "In LR equilibrium: entry has eliminated any positive profit and exit has eliminated any loss, so **P = min ATC** (zero economic profit). At the chosen Q the firm still applies MR = MC, and in perfect competition MR = P, so **P = MR = MC**. Put together: **P = MR = MC = min ATC**. This is also the productively- and allocatively-efficient point.",
        zh: "长期均衡中:进入消除正利润,退出消除亏损,所以 **P = 最低 ATC**(零经济利润)。在所选 Q 处企业仍应用 MR = MC,完全竞争下 MR = P,因此 **P = MR = MC**。合起来:**P = MR = MC = 最低 ATC**。此点同时实现生产有效与配置有效。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A perfectly competitive firm's **short-run supply curve** is:",
        zh: "完全竞争企业的**短期供给曲线**是:",
      },
      choices: [
        { id: "a", text: { en: "The horizontal demand curve at the market price.", zh: "市场价格处的水平需求线。" } },
        { id: "b", text: { en: "The entire MC curve.", zh: "整条 MC 曲线。" } },
        { id: "c", text: { en: "The portion of MC that lies **above minimum AVC** (below AVC the firm shuts down).", zh: "MC 曲线中**高于 AVC 最低点**的部分(低于 AVC 则停业)。" } },
        { id: "d", text: { en: "The portion of ATC that is downward-sloping.", zh: "ATC 曲线中向下倾斜的部分。" } },
      ],
      answerId: "c",
      explanation: {
        en: "A price-taker maximizes profit by producing where **MC = P**, but only **if P ≥ AVC** (otherwise shut down and save on VC). So the firm's SR supply = **MC above minimum AVC**. Choice B fails because below min AVC the firm supplies **zero**, not the MC value. Choice A describes the firm's demand, not supply.",
        zh: "价格接受者的利润最大化在 **MC = P** 处,但前提是 **P ≥ AVC**(否则停业,以节省可变成本)。因此企业短期供给 = **最低 AVC 之上的 MC**。选项 B 错:低于最低 AVC 时企业供给为**零**,而非 MC 值。选项 A 是企业的需求,不是供给。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A perfectly competitive industry is in long-run equilibrium. Then consumer preferences shift **permanently** toward the good, raising demand. Trace the full short-run → long-run adjustment. Which sequence is correct?",
        zh: "完全竞争行业初始在长期均衡。之后消费者偏好**永久性**转向该商品,需求增加。完整的短期→长期调整顺序,以下哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "SR: P rises, firms earn profit. LR: **entry** shifts market **supply right** until P returns to minimum ATC. Industry Q is **higher** than before; firm-level Q is unchanged.", zh: "短期:P 上升,企业获利。长期:**进入**使市场**供给右移**,直至 P 回到最低 ATC。行业 Q **高于**初始;单企业 Q 不变。" } },
        { id: "b", text: { en: "SR: P rises; firms raise their own prices too. LR: P stays elevated forever because demand is permanent.", zh: "短期:P 上升,企业也自行涨价。长期:价格永久升高,因需求是永久的。" } },
        { id: "c", text: { en: "SR: P falls since firms expect future entry. LR: P returns to previous level.", zh: "短期:预期未来进入,P 下降。长期:回到原水平。" } },
        { id: "d", text: { en: "SR: Q rises, P is unchanged (firms are price-takers).", zh: "短期:Q 上升,P 不变(企业是价格接受者)。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Permanent D↑ raises P and the firm earns **positive short-run profit** (P > ATC). Because entry is free, new firms **enter**, market **supply shifts right**, and P falls **back to minimum ATC** — restoring **zero economic profit**. At the firm level, nothing changes: same Q at minimum ATC. At the **industry** level, Q is much larger — more firms, same per-firm output. Choice B forgets that individual firms are price-takers and cannot set price above market P.",
        zh: "需求永久右移使 P 上升,企业**短期获得正经济利润**(P > ATC)。由于进入自由,新企业**进入**,市场**供给右移**,价格**回落至最低 ATC**——恢复**零经济利润**。单企业层面一切不变:仍在最低 ATC 处生产同样 Q。**行业**层面 Q 大幅增加——企业数增加,每家产出不变。选项 B 忘了个别企业是价格接受者,不能把价定得高于市场 P。",
      },
    },
  ],

  // --------- Unit 4 · Topic 1 · Monopoly: Characteristics & Demand ---------
  "unit-4/topic-1": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "A monopolist's demand schedule",
          zh: "某垄断者的需求表",
        },
        columns: [
          { en: "P", zh: "P" },
          { en: "Q", zh: "Q" },
        ],
        rows: [
          [{ en: "$20", zh: "$20" }, { en: "0", zh: "0" }],
          [{ en: "$18", zh: "$18" }, { en: "1", zh: "1" }],
          [{ en: "$16", zh: "$16" }, { en: "2", zh: "2" }],
          [{ en: "$14", zh: "$14" }, { en: "3", zh: "3" }],
          [{ en: "$12", zh: "$12" }, { en: "4", zh: "4" }],
          [{ en: "$10", zh: "$10" }, { en: "5", zh: "5" }],
        ],
      },
      prompt: {
        en: "What is the **marginal revenue** of the 4th unit?",
        zh: "第 **4** 单位的**边际收益**是多少?",
      },
      choices: [
        { id: "a", text: { en: "$12 — the price of the 4th unit.", zh: "$12——第 4 单位的价格。" } },
        { id: "b", text: { en: "$6 — because TR goes from 3×$14 = $42 to 4×$12 = $48, so MR = $6.", zh: "$6——TR 从 3×$14 = $42 变为 4×$12 = $48,故 MR = $6。" } },
        { id: "c", text: { en: "$2 — the price cut per unit.", zh: "$2——每单位降价幅度。" } },
        { id: "d", text: { en: "$14 — the old price.", zh: "$14——原价格。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MR = ΔTR / ΔQ. TR₃ = 3 × $14 = $42; TR₄ = 4 × $12 = $48; so **MR = $48 − $42 = $6**. MR = $6 < P = $12 because selling the 4th unit requires cutting price on **all four** from $14 to $12 — you gain $12 on the new sale but lose $2 on each of the previous 3. Quick check using the twice-as-steep rule: D is P = 20 − 2Q, so MR = 20 − 4Q; at Q = 4, MR = 20 − 16 = $4 (average over the interval from 3→4 gives $6, consistent with the discrete calculation).",
        zh: "MR = ΔTR / ΔQ。TR₃ = 3 × $14 = $42;TR₄ = 4 × $12 = $48;故 **MR = $48 − $42 = $6**。MR = $6 < P = $12,因为多卖第 4 单位必须把**全部 4 单位**价格从 $14 降到 $12——新卖赚 $12,原 3 单位各少收 $2。用「两倍陡」校验:D 为 P = 20 − 2Q,故 MR = 20 − 4Q;Q = 4 时 MR = $4(3→4 区间的平均即 $6,与离散计算一致)。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Which of the following is **NOT** a source of monopoly power?",
        zh: "下列哪项**不是**垄断力量的来源?",
      },
      choices: [
        { id: "a", text: { en: "A patent granted to the inventor of a new drug.", zh: "发明新药获得的专利。" } },
        { id: "b", text: { en: "Ownership of the only source of a key mineral.", zh: "独占某关键矿产的唯一来源。" } },
        { id: "c", text: { en: "LRATC that falls throughout the relevant range of market demand.", zh: "LRATC 在相关需求区间持续下降。" } },
        { id: "d", text: { en: "**A firm that produces a standardized commodity alongside many rivals.**", zh: "**与众多对手一起生产标准化大宗商品的企业。**" } },
      ],
      answerId: "d",
      explanation: {
        en: "Monopoly power requires **barriers to entry** and **no close substitutes**. Choice A is a **legal** barrier (patent). Choice B is a **key-resource** barrier. Choice C is a **natural** monopoly (minimum efficient scale ≥ market demand). Choice D describes **perfect competition** — many rivals with identical products → no pricing power at all.",
        zh: "垄断力量要求**进入壁垒**与**无相近替代品**。选项 A 是**法律**壁垒(专利);B 是**关键资源**壁垒;C 是**自然**垄断(最小有效规模 ≥ 市场需求)。选项 D 描述的是**完全竞争**——多个对手 + 同质产品 → 完全无定价能力。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A monopolist's linear demand is **P = 50 − Q**. At what output is **TR maximized**, and what is **MR** at that output?",
        zh: "某垄断者的线性需求为 **P = 50 − Q**。**TR 最大**时的产量是多少?该产量下 **MR** 是多少?",
      },
      choices: [
        { id: "a", text: { en: "Q = 50, MR = 0 (largest possible Q).", zh: "Q = 50,MR = 0(最大可能 Q)。" } },
        { id: "b", text: { en: "**Q = 25, MR = 0** — TR peaks where MR hits zero (and elasticity = 1).", zh: "**Q = 25,MR = 0**——TR 在 MR = 0(弹性 = 1)处达到峰值。" } },
        { id: "c", text: { en: "Q = 25, MR = 25 — MR equals P.", zh: "Q = 25,MR = 25——MR 等于 P。" } },
        { id: "d", text: { en: "Q = 0, MR = 50 — highest possible price.", zh: "Q = 0,MR = 50——最高可能价格。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Twice-as-steep rule: D = 50 − Q → **MR = 50 − 2Q**. Set MR = 0 → **Q = 25**. At Q = 25, P = 50 − 25 = $25 → **TR = 25 × 25 = $625** (the max). Beyond Q = 25, MR turns negative — selling more actually lowers TR. This is the output where elasticity equals 1: below it demand is elastic (MR > 0), above it demand is inelastic (MR < 0). No profit-maximizing monopolist ever produces in the inelastic region.",
        zh: "「两倍陡」规则:D = 50 − Q → **MR = 50 − 2Q**。令 MR = 0 → **Q = 25**。此时 P = 50 − 25 = $25 → **TR = 25 × 25 = $625**(峰值)。超过 Q = 25 后 MR 变负——多卖反而使 TR 下降。该产量对应弹性 = 1:之前富有弹性(MR > 0),之后缺乏弹性(MR < 0)。追求利润最大化的垄断者**从不**在缺乏弹性段生产。",
      },
    },
  ],

  // --------- Unit 4 · Topic 2 · Monopoly Profit Max & Efficiency ---------
  "unit-4/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "A monopolist: MC = $4 (constant), FC = $6",
          zh: "某垄断者:MC = $4(常数),FC = $6",
        },
        columns: [
          { en: "P", zh: "P" },
          { en: "Q", zh: "Q" },
          { en: "TR", zh: "TR" },
          { en: "MR", zh: "MR" },
        ],
        rows: [
          [{ en: "$12", zh: "$12" }, { en: "1", zh: "1" }, { en: "12", zh: "12" }, { en: "12", zh: "12" }],
          [{ en: "$11", zh: "$11" }, { en: "2", zh: "2" }, { en: "22", zh: "22" }, { en: "10", zh: "10" }],
          [{ en: "$10", zh: "$10" }, { en: "3", zh: "3" }, { en: "30", zh: "30" }, { en: "8", zh: "8" }],
          [{ en: "$9", zh: "$9" }, { en: "4", zh: "4" }, { en: "36", zh: "36" }, { en: "6", zh: "6" }],
          [{ en: "$8", zh: "$8" }, { en: "5", zh: "5" }, { en: "40", zh: "40" }, { en: "4", zh: "4" }],
          [{ en: "$7", zh: "$7" }, { en: "6", zh: "6" }, { en: "42", zh: "42" }, { en: "2", zh: "2" }],
        ],
      },
      prompt: {
        en: "Find the **profit-maximizing P and Q**, and compute **economic profit**.",
        zh: "求**利润最大化的 P 与 Q**,并计算**经济利润**。",
      },
      choices: [
        { id: "a", text: { en: "P = $4, Q = 5; profit = $14. (Set P = MC.)", zh: "P = $4,Q = 5;利润 = $14。(令 P = MC。)" } },
        { id: "b", text: { en: "**P = $8, Q = 5; profit = $14.** MR = MC at Q = 5; read P = $8 off D; profit = TR − TC = 40 − (5×4 + 6) = $14.", zh: "**P = $8,Q = 5;利润 = $14。**Q = 5 时 MR = MC;在 D 上读 P = $8;利润 = TR − TC = 40 − (5×4 + 6) = $14。" } },
        { id: "c", text: { en: "P = $4, Q = 5; profit = $20. Reads P off MR curve.", zh: "P = $4,Q = 5;利润 = $20。(从 MR 曲线读 P。)" } },
        { id: "d", text: { en: "P = $7, Q = 6; profit = $12. Produces beyond MR = MC.", zh: "P = $7,Q = 6;利润 = $12。(超过 MR = MC 点继续生产。)" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Step 1**: find Q where MR = MC. Scan MR column: at Q = 5, MR = $4 = MC. **Step 2**: read **P off the demand curve** (not MR!) → P = $8. Profit = (P − ATC) × Q; here ATC = (5 × 4 + 6)/5 = $5.20, so profit = (8 − 5.20) × 5 = **$14**. Choice A is the classic 'P = MC' error — that's the rule for perfect competition, not monopoly. Choice C reads P off MR, also wrong.",
        zh: "**第 1 步**:找 MR = MC 的 Q。扫 MR 列:Q = 5 时 MR = $4 = MC。**第 2 步**:**在需求曲线上读 P**(不是 MR!)→ P = $8。利润 = (P − ATC) × Q;此处 ATC = (5 × 4 + 6)/5 = $5.20,利润 = (8 − 5.20) × 5 = **$14**。选项 A 是典型「P = MC」错误——那是完全竞争规则。选项 C 从 MR 读 P,亦误。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A monopolist currently produces at a point where **MR = $4** and **MC = $10**. Elasticity of demand is **|E| = 0.5** (inelastic). Which statement correctly describes the firm's state AND the corrective action?",
        zh: "某垄断者当前产量下 **MR = $4**、**MC = $10**,需求弹性 **|E| = 0.5**(缺乏弹性)。哪项同时正确描述其状态与应采取的调整?",
      },
      choices: [
        { id: "a", text: { en: "Profit is maximized — a monopolist always operates where MR < MC.", zh: "已达利润最大——垄断者总在 MR < MC 处生产。" } },
        { id: "b", text: { en: "**Profit is not maximized. Because MR < MC, the firm should CUT output. Also, no profit-maxing monopolist operates in the inelastic region — reducing Q raises P AND raises TR, lowering TC too.**", zh: "**未达最大。因 MR < MC,应**减产**。此外,利润最大化垄断者**不会**在缺乏弹性段生产——减产既抬高 P 又抬高 TR,同时降低 TC。**" } },
        { id: "c", text: { en: "Profit is not maximized. Expand output to raise total revenue.", zh: "未达最大;增产以提高 TR。" } },
        { id: "d", text: { en: "Profit is maximized because |E| < 1.", zh: "已达最大——|E| < 1。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Two signals point to 'cut Q': (1) MR ($4) < MC ($10) → the last unit cost more than it brought in, so drop it. (2) Demand is **inelastic** → a price rise (which accompanies a Q cut) increases TR; since Q falls, TC falls too. **Both revenue and cost move the right way** when you cut Q. A rational monopolist never operates in the inelastic region (|E| < 1). Choice C confuses the direction.",
        zh: "两个信号都指向「减产」:(1)MR($4)< MC($10)——最后一单位成本高于收益,应去掉;(2)需求**缺乏弹性**——减产带来涨价,TR 上升;同时 Q 下降,TC 也下降。**收益与成本同时朝有利方向变化**。理性垄断者**绝不**在缺乏弹性段(|E| < 1)生产。选项 C 方向反了。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A **natural monopoly** has continuously falling LRATC. Government can regulate its price at **P = MC** (socially optimal) or **P = ATC** (fair-return). Which statement about these options is TRUE?",
        zh: "某**自然垄断**的 LRATC 持续下降。政府可将价格管制在 **P = MC**(社会最优)或 **P = ATC**(公平收益)。哪项关于两种方案的描述正确?",
      },
      choices: [
        { id: "a", text: { en: "P = MC maximizes total surplus but the firm loses money (since ATC > MC for a falling-ATC firm), so a subsidy is needed.", zh: "P = MC 使总剩余最大,但企业亏损(LRATC 下降时 ATC > MC),需要补贴。" } },
        { id: "b", text: { en: "P = ATC yields zero economic profit and smaller DWL than unregulated monopoly, but P still exceeds MC so some DWL remains.", zh: "P = ATC 带来零经济利润,DWL 小于未受管制垄断,但因 P 仍 > MC,仍有 DWL。" } },
        { id: "c", text: { en: "**Both A and B are true.**", zh: "**A 和 B 都对。**" } },
        { id: "d", text: { en: "Neither — natural monopolies are always better off unregulated.", zh: "都不对——自然垄断应当完全不受管制。" } },
      ],
      answerId: "c",
      explanation: {
        en: "At **P = MC** (socially optimal): Q is efficient but for a natural monopoly with LRATC still falling, MC < ATC, so **P < ATC → the firm loses money** — the government usually covers this with a subsidy. At **P = ATC** (fair-return): firm breaks even with no subsidy, Q is larger than unregulated monopoly's Q, so DWL shrinks — but since P > MC, DWL is not zero. Both statements are accurate and represent the classic tradeoff.",
        zh: "**P = MC**(社会最优)下:Q 有效,但自然垄断的 LRATC 仍在下降,MC < ATC,故 **P < ATC → 企业亏损**——政府通常以补贴填平。**P = ATC**(公平收益)下:企业零利润、无需补贴,Q 大于未管制 Q,DWL 缩小——但 P 仍 > MC,DWL 非零。两项均准确,构成经典权衡。",
      },
    },
  ],

  // --------- Unit 4 · Topic 3 · Price Discrimination ---------
  "unit-4/topic-3": [
    {
      id: "q1",
      prompt: {
        en: "Which set of conditions is **necessary** for a firm to successfully price discriminate?",
        zh: "企业成功实施价格歧视的**必要**条件集合是?",
      },
      choices: [
        { id: "a", text: { en: "Perfect competition, homogeneous product, and low barriers to entry.", zh: "完全竞争、同质产品、低壁垒。" } },
        { id: "b", text: { en: "**Market power (downward-sloping D), ability to distinguish buyers by willingness to pay, and no resale between buyers.**", zh: "**定价能力(D 下倾)、能识别不同支付意愿的买家、买家间无法转卖。**" } },
        { id: "c", text: { en: "Constant MC, no fixed costs, and identical buyers.", zh: "常数 MC、无 FC、买家同质。" } },
        { id: "d", text: { en: "Government approval and at least 10 distinct customer groups.", zh: "政府批准,至少 10 个可区分群体。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The three standard conditions are: **(1) market power** — a perfectly competitive firm faces a horizontal demand and cannot price discriminate; (2) **ability to distinguish** groups (students vs. adults, peak vs. off-peak, by quantity); (3) **no resale** — or else arbitrage breaks the scheme (low-price buyers resell to high-price buyers). Choice A describes perfect competition, the one market structure where PD is impossible.",
        zh: "三项标准条件是:**(1) 定价能力**——完全竞争企业面对水平需求,无法价格歧视;**(2) 能识别**不同群体(学生 vs. 成人、高峰 vs. 非高峰、按数量);**(3) 无法转卖**——否则套利者把低价商品倒卖给高价买家,计划失败。选项 A 描述的是完全竞争——PD 恰好不可能的一种结构。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A monopolist practicing **perfect (1st-degree) price discrimination** faces linear D: P = 40 − Q and constant MC = $10. What **Q** does this firm produce, and what is the **deadweight loss**?",
        zh: "实行**完全(一级)价格歧视**的垄断者面对线性需求 P = 40 − Q,MC = $10(常数)。其产量 **Q** 与**无谓损失**各为多少?",
      },
      choices: [
        { id: "a", text: { en: "Q = 15 (where MR = MC); DWL is a large triangle.", zh: "Q = 15(MR = MC);DWL 为较大三角形。" } },
        { id: "b", text: { en: "**Q = 30 (where D = MC, i.e. P = MC); DWL = 0** — PD captures every mutually beneficial trade.", zh: "**Q = 30(D = MC,即 P = MC);DWL = 0**——PD 捕获每笔互利交易。" } },
        { id: "c", text: { en: "Q = 40; DWL = 0; firm gives the good away.", zh: "Q = 40;DWL = 0;企业免费赠送。" } },
        { id: "d", text: { en: "Q = 0; the firm can't sell below the highest reservation price.", zh: "Q = 0;企业无法低于最高保留价销售。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Under **perfect PD**, the firm captures every consumer's willingness to pay — so **MR = D** (each extra unit adds exactly its price). Setting MR = MC gives D = MC: **40 − Q = 10 → Q = 30**. That's the **allocatively efficient** quantity (same as perfect competition). Because every unit between MC and D gets traded, **DWL = 0**. But the entire **consumer surplus is captured as producer surplus** — the firm's profit is huge. Choice A uses single-price monopoly's rule (MR = 40 − 2Q), which doesn't apply under perfect PD.",
        zh: "**完全 PD** 下,企业捕获每位买家的支付意愿——所以 **MR = D**(每多一单位收入正好等于其价格)。令 MR = MC:D = MC → 40 − Q = 10 → **Q = 30**。这是**配置有效**的产量(与完全竞争相同)。由于 MC 与 D 之间的每单位都成交,**DWL = 0**。但全部**消费者剩余被夺走作为生产者剩余**——企业利润巨大。选项 A 用了单一价格垄断的 MR = 40 − 2Q,不适用于完全 PD。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A movie theater charges students $8, adults $14 for the **same** film. Which of the following is the most plausible reason this works economically?",
        zh: "某电影院对学生收 $8、成人收 $14(**同一**场次)。下列最合理的经济学原因是?",
      },
      choices: [
        { id: "a", text: { en: "Students have more elastic demand than adults; charging them less raises total revenue.", zh: "学生需求比成人更富有弹性;对其降价能提高总收益。" } },
        { id: "b", text: { en: "Adults have more elastic demand, so they pay more.", zh: "成人需求更富有弹性,所以付得更多。" } },
        { id: "c", text: { en: "Both groups have identical demand; the price difference is just discrimination for its own sake.", zh: "两群需求完全相同;差价只是为歧视而歧视。" } },
        { id: "d", text: { en: "Resale is impossible because tickets lack ID checks.", zh: "转卖不可能——票上无身份检查。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Under **3rd-degree PD**, the firm charges **lower prices to the group with more elastic demand** and **higher prices to the inelastic group**. Students are price-sensitive (tighter budget, many entertainment substitutes) — charging them $8 brings them in. Adults are less elastic (higher income, this-movie-tonight). Choice D is backward: PD actually **requires** no resale, and student tickets usually **do** check ID precisely to prevent resale.",
        zh: "**三级 PD** 下,企业对**需求更富弹性的群体**收**低价**、对弹性较小的群体收**高价**。学生对价格敏感(预算紧、娱乐替代品多)——$8 能吸引他们;成人弹性较小(收入高、就想今晚看这部)。选项 D 反了:PD **必须**防止转卖,学生票通常**会**查 ID 以防止转卖。",
      },
    },
  ],

  // --------- Unit 4 · Topic 4 · Monopolistic Competition ---------
  "unit-4/topic-4": [
    {
      id: "q1",
      prompt: {
        en: "In **long-run equilibrium** for a monopolistically competitive firm, which chain of (in)equalities must hold at the firm's chosen Q?",
        zh: "垄断竞争企业的**长期均衡**中,在其所选 Q 处必然成立的(不)等式链是?",
      },
      choices: [
        { id: "a", text: { en: "P = MC = MR = min ATC (identical to perfect competition).", zh: "P = MC = MR = 最低 ATC(与完全竞争相同)。" } },
        { id: "b", text: { en: "**P = ATC > MC = MR**, and Q is **below** the output that would minimize ATC.", zh: "**P = ATC > MC = MR**,且 Q **低于**最低 ATC 的 Q。" } },
        { id: "c", text: { en: "P > ATC > MC; economic profits persist.", zh: "P > ATC > MC;长期仍有经济利润。" } },
        { id: "d", text: { en: "P = MR and MC > ATC.", zh: "P = MR 且 MC > ATC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "LR entry/exit drives economic profit to zero, so **P = ATC** at the chosen Q. The firm still applies MR = MC to pick Q; its D is downward-sloping, so **P > MR** and therefore **P > MC**. The D curve is **tangent** to ATC from above, which means the tangency point is on the **downward-sloping** part of ATC — so the firm produces where **ATC is still falling**, i.e. below minimum ATC Q: **excess capacity**. Choice A confuses MC with PC.",
        zh: "长期进出把经济利润压到零,所以所选 Q 处 **P = ATC**。企业仍用 MR = MC 选 Q;由于 D 下倾,**P > MR**,所以 **P > MC**。D 从**上方切** ATC,切点在 ATC 仍下降的一段——企业在 **ATC 尚未达到最低**处生产,即低于最低 ATC 对应的 Q:**过剩产能**。选项 A 把 MC 与 PC 混淆。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Compared to perfect competition in long-run equilibrium, a monopolistically competitive industry has:",
        zh: "相比长期均衡的完全竞争,垄断竞争行业:",
      },
      choices: [
        { id: "a", text: { en: "Higher price, lower output per firm, positive DWL, but **more product variety**.", zh: "价格更高、单厂产量更低、正 DWL,但**更多产品多样性**。" } },
        { id: "b", text: { en: "Lower price, higher output per firm, and zero DWL.", zh: "价格更低、单厂产量更高、DWL 为零。" } },
        { id: "c", text: { en: "Exactly the same price, output, and variety.", zh: "价格、数量、多样性完全相同。" } },
        { id: "d", text: { en: "Higher price but lower DWL than perfect competition.", zh: "价格更高,但 DWL 比完全竞争更低。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Because **P > MC** at the monopolistically competitive firm's Q, there is **allocative inefficiency** (positive DWL). Firms operate with **excess capacity** (below min ATC), so ATC is higher and each firm's Q is smaller than under perfect competition. The 'cost' of differentiation is offset by the **gain in product variety** that consumers value. That tradeoff — more variety at higher cost — is the signature of monopolistic competition.",
        zh: "垄断竞争企业所选 Q 处 **P > MC**,存在**配置低效**(正 DWL)。企业处于**过剩产能**(低于最低 ATC),故 ATC 更高、每家产量更少。差异化的「成本」被消费者所重视的**多样性收益**抵消。这一权衡——更高成本换更多多样性——是垄断竞争的标志。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A monopolistically competitive firm currently has **P = $18, ATC = $15, MR = MC = $8**. Describe the short-run state and predict the long-run adjustment.",
        zh: "某垄断竞争企业当前 **P = $18,ATC = $15,MR = MC = $8**。描述短期状态并预测长期调整。",
      },
      choices: [
        { id: "a", text: { en: "SR: breakeven; LR: no change.", zh: "短期保本;长期不变。" } },
        { id: "b", text: { en: "**SR: economic profit of $3 per unit; LR: rivals enter → each firm's demand shifts LEFT and becomes more elastic, until P = ATC with MR = MC still holding.**", zh: "**短期:单位经济利润 $3;长期:对手进入 → 各家需求**左移**且更富弹性,直到 P = ATC 且仍满足 MR = MC。**" } },
        { id: "c", text: { en: "SR: loss; LR: firms exit, raising this firm's price.", zh: "短期亏损;长期退出,抬高该企业价格。" } },
        { id: "d", text: { en: "SR: profit; LR: this firm raises P to $15.", zh: "短期盈利;长期该企业自行把 P 提到 $15。" } },
      ],
      answerId: "b",
      explanation: {
        en: "P ($18) > ATC ($15) → SR **profit of $3 per unit**. Low entry barriers → new differentiated rivals **enter**, stealing customers. Each incumbent firm's demand shifts **LEFT** and becomes **more elastic** (closer substitutes appear). Entry stops when P = ATC at the firm's MR = MC Q. Choice D misses the market-structure mechanism — a monopolistically competitive firm can't just hold its price; entry forces it down.",
        zh: "P($18)> ATC($15)→ 短期**单位利润 $3**。进入壁垒低 → 差异化新对手**进入**,抢走顾客;各家需求**左移**且**更富弹性**(替代品更多)。进入停止于 P = ATC(在 MR = MC 的 Q)。选项 D 忽视了市场结构机制——垄断竞争企业无法任意抬价,进入会将价格压下来。",
      },
    },
  ],

  // --------- Unit 4 · Topic 5 · Oligopoly & Game Theory ---------
  "unit-4/topic-5": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Payoff matrix — (Firm A's profit, Firm B's profit) in $M",
          zh: "收益矩阵——(A 利润,B 利润)单位 $M",
        },
        columns: [
          { en: "", zh: "" },
          { en: "B: Low price", zh: "B:低价" },
          { en: "B: High price", zh: "B:高价" },
        ],
        rows: [
          [{ en: "**A: Low price**", zh: "**A:低价**" }, { en: "(5, 5)", zh: "(5, 5)" }, { en: "(12, 3)", zh: "(12, 3)" }],
          [{ en: "**A: High price**", zh: "**A:高价**" }, { en: "(3, 12)", zh: "(3, 12)" }, { en: "(10, 10)", zh: "(10, 10)" }],
        ],
      },
      prompt: {
        en: "Identify **dominant strategies** (if any) and the **Nash equilibrium**.",
        zh: "识别**占优策略**(如有)与**纳什均衡**。",
      },
      choices: [
        { id: "a", text: { en: "Both firms have dominant strategy **High price**; NE = (High, High) = (10, 10).", zh: "双方占优策略均为**高价**;NE = (高, 高) = (10, 10)。" } },
        { id: "b", text: { en: "**Both firms have dominant strategy Low price (5 > 3 and 12 > 10); NE = (Low, Low) = (5, 5).**", zh: "**双方占优策略均为低价(5 > 3 且 12 > 10);NE = (低, 低) = (5, 5)。**" } },
        { id: "c", text: { en: "Only A has a dominant strategy; no NE exists.", zh: "只有 A 有占优策略;不存在 NE。" } },
        { id: "d", text: { en: "There are two Nash equilibria: (Low, Low) and (High, High).", zh: "存在两个纳什均衡:(低, 低)与 (高, 高)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Check A: if B plays Low → A gets 5 (Low) vs. 3 (High) → Low better. If B plays High → A gets 12 (Low) vs. 10 (High) → Low better. So A's dominant strategy is **Low**. By symmetry B's is also **Low**. Nash equilibrium = (Low, Low) with payoff (5, 5). This is a classic **prisoner's dilemma**: both would prefer (10, 10), but each has an incentive to deviate from cooperation — so (High, High) is **not** stable.",
        zh: "查 A:B 低价时,A 得 5(低)vs. 3(高)→ 低更优;B 高价时,A 得 12(低)vs. 10(高)→ 低更优。故 A 的占优策略是**低价**。对称地 B 亦然。纳什均衡 = (低, 低),收益 (5, 5)。这是典型**囚徒困境**:双方都偏好 (10, 10),但各有偏离合作的动机——(高, 高) **不稳定**。",
      },
    },
    {
      id: "q2",
      figure: {
        kind: "table",
        caption: {
          en: "Payoff matrix — (Firm X, Firm Y)",
          zh: "收益矩阵——(X, Y)",
        },
        columns: [
          { en: "", zh: "" },
          { en: "Y: Advertise", zh: "Y:投广告" },
          { en: "Y: Don't", zh: "Y:不投" },
        ],
        rows: [
          [{ en: "**X: Advertise**", zh: "**X:投广告**" }, { en: "(6, 6)", zh: "(6, 6)" }, { en: "(10, 4)", zh: "(10, 4)" }],
          [{ en: "**X: Don't**", zh: "**X:不投**" }, { en: "(4, 10)", zh: "(4, 10)" }, { en: "(8, 8)", zh: "(8, 8)" }],
        ],
      },
      prompt: {
        en: "Does either firm have a dominant strategy? Identify the Nash equilibrium.",
        zh: "任一家企业是否有占优策略?找出纳什均衡。",
      },
      choices: [
        { id: "a", text: { en: "Neither has a dominant strategy; no NE exists.", zh: "两家都无占优策略;不存在 NE。" } },
        { id: "b", text: { en: "**Both firms have dominant strategy Advertise (6 > 4 and 10 > 8); NE = (Advertise, Advertise) = (6, 6).**", zh: "**两家占优策略均为投广告(6 > 4 且 10 > 8);NE = (投, 投) = (6, 6)。**" } },
        { id: "c", text: { en: "Both have dominant strategy Don't; NE = (Don't, Don't) = (8, 8).", zh: "两家占优策略均为不投;NE = (不投, 不投) = (8, 8)。" } },
        { id: "d", text: { en: "Two Nash equilibria: (Advertise, Advertise) and (Don't, Don't).", zh: "两个 NE:(投, 投) 与 (不投, 不投)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Test X: Y advertises → X gets 6 vs. 4 → Advertise better. Y doesn't → X gets 10 vs. 8 → Advertise better. X's dominant strategy = **Advertise**. Same for Y. NE = (Advertise, Advertise) = (6, 6). Another prisoner's dilemma: both would earn more at (Don't, Don't) = (8, 8), but neither can commit. This explains why rivals often advertise heavily even when it cancels out — dominant-strategy rationality forces them into a worse outcome.",
        zh: "查 X:Y 投广告 → X 得 6 vs. 4 → 投更优;Y 不投 → X 得 10 vs. 8 → 投更优。X 占优策略 = **投广告**。Y 亦然。NE = (投, 投) = (6, 6)。又一个囚徒困境:(不投, 不投) = (8, 8) 双方更好,但无法可信承诺。这解释了为何对手常常互相拼广告却相互抵消——占优策略的理性把他们推入更差结果。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Two airlines in a single-route duopoly have agreed to cooperate: each holds capacity low so prices stay high. Which statement best explains why **cartels like this tend to break down over time**?",
        zh: "某航线双寡头两家航司约定合作:各自限制运力以维持高价。下列哪项**最好**解释这类卡特尔长期**容易瓦解**?",
      },
      choices: [
        { id: "a", text: { en: "Governments can't legally prosecute cartels, so firms simply lose interest.", zh: "政府不能追究卡特尔,企业自行失去兴趣。" } },
        { id: "b", text: { en: "Cooperation is the dominant strategy, but both firms sometimes make mistakes.", zh: "合作是占优策略,只是双方偶尔失误。" } },
        { id: "c", text: { en: "**Each firm has an incentive to cheat: expanding capacity above the agreed limit gives the cheater higher profit if the other sticks to the agreement — the classic prisoner's dilemma incentive.**", zh: "**每家都有欺骗动机:若对方守约,自己偷偷扩容可获更高利润——典型的囚徒困境诱因。**" } },
        { id: "d", text: { en: "Consumers always eventually organize boycotts.", zh: "消费者终究会组织抵制。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Cartels are cooperation agreements that are **not a Nash equilibrium** — at the cooperative point, each firm's **best response** to the other cooperating is to **cheat** (expand) and earn more. Without an enforcement mechanism that makes cheating costly, the cartel unravels toward the non-cooperative Nash outcome. This is why OPEC-style cartels repeatedly struggle to hold together. Choice B misstates the dilemma: cheating, not cooperating, is the dominant strategy.",
        zh: "卡特尔是一种**不是纳什均衡**的合作安排——在合作点,每家对对方守约的**最优回应**是**欺骗**(扩产)以获更高利润。没有让欺骗付出代价的执行机制,卡特尔会瓦解到非合作纳什结果。这正是 OPEC 类卡特尔反复难以维系的原因。选项 B 误述:占优策略是**欺骗**,而非合作。",
      },
    },
  ],

  // --------- Unit 5 · Topic 1 · Derived Demand & MRP ---------
  "unit-5/topic-1": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "A competitive firm's production data; output sells at P = $8",
          zh: "某竞争企业的生产数据;产品售价 P = $8",
        },
        columns: [
          { en: "Workers (L)", zh: "工人 (L)" },
          { en: "Total Product", zh: "总产量" },
        ],
        rows: [
          [{ en: "1", zh: "1" }, { en: "12", zh: "12" }],
          [{ en: "2", zh: "2" }, { en: "22", zh: "22" }],
          [{ en: "3", zh: "3" }, { en: "30", zh: "30" }],
          [{ en: "4", zh: "4" }, { en: "36", zh: "36" }],
          [{ en: "5", zh: "5" }, { en: "40", zh: "40" }],
        ],
      },
      prompt: {
        en: "What is the **MRP of the 4th worker**?",
        zh: "**第 4 名工人**的 **MRP** 是多少?",
      },
      choices: [
        { id: "a", text: { en: "$8 — the product price.", zh: "$8——产品价格。" } },
        { id: "b", text: { en: "$48 — MP × P (since the firm is a competitive seller).", zh: "$48——MP × P(企业在产品市场是价格接受者)。" } },
        { id: "c", text: { en: "$288 — total revenue at 4 workers.", zh: "$288——4 人时的 TR。" } },
        { id: "d", text: { en: "$6 — MP of the 4th worker.", zh: "$6——第 4 名工人的 MP。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MP of the 4th worker = 36 − 30 = **6 units**. Because the firm sells in a competitive output market, **MR = P = $8**, so **MRP = MP × P = 6 × 8 = $48**. Choice C confuses TOTAL with MARGINAL. Choice D stops at MP and forgets to multiply by P.",
        zh: "第 4 名工人的 MP = 36 − 30 = **6 单位**。企业在产品市场完全竞争,**MR = P = $8**,故 **MRP = MP × P = 6 × 8 = $48**。选项 C 把总量与边际量混淆;选项 D 只算 MP,忘记乘以 P。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "The output price of smartphones **doubles**. Technology and productivity are unchanged. What happens to the **MRP of a smartphone-assembly worker**?",
        zh: "智能手机产品价格**翻倍**,技术与生产率不变。**手机组装工的 MRP** 如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Unchanged — MRP depends on MP, not P.", zh: "不变——MRP 只取决于 MP,与 P 无关。" } },
        { id: "b", text: { en: "**Doubles — MRP = MP × P, and P doubled; this is derived demand at work.**", zh: "**翻倍——MRP = MP × P,P 翻倍;派生需求直接体现。**" } },
        { id: "c", text: { en: "Halves — workers become more expensive relative to output.", zh: "减半——工人相对产品变贵。" } },
        { id: "d", text: { en: "Falls to zero because price controls kick in.", zh: "降为零——自动出现价格管制。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Derived demand**: labor demand exists only because labor makes something valuable. If the **output** price doubles, each unit of labor now produces **twice the revenue**, so MRP doubles (MP unchanged, P × 2). This shifts D_L for smartphone workers to the right — wages and employment in that market rise even though the production technology didn't change.",
        zh: "**派生需求**:对劳动的需求源自其所产出的商品。**产品**价格翻倍后,每单位劳动带来的收入也翻倍,MRP 翻倍(MP 不变,P × 2)。这使手机工人的 D_L 右移——即便技术未变,工资与雇用量都上升。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Firm X is a MONOPOLIST in its output market. Its 5th worker has MP = 10 units. At Q = 50 (the firm's current total output), P = $20 and MR = $12. Compute the **5th worker's MRP**.",
        zh: "X 企业在产品市场是**垄断者**。第 5 名工人 MP = 10 单位。在 Q = 50(当前总产出)处,P = $20,MR = $12。第 5 名工人的 **MRP** 是多少?",
      },
      choices: [
        { id: "a", text: { en: "$200 = MP × P.", zh: "$200 = MP × P。" } },
        { id: "b", text: { en: "**$120 = MP × MR** (a monopolist's MR < P).", zh: "**$120 = MP × MR**(垄断者的 MR < P)。" } },
        { id: "c", text: { en: "$20 = P itself.", zh: "$20 = P。" } },
        { id: "d", text: { en: "$10 = MP of the worker only.", zh: "$10 = 只算工人的 MP。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The general formula is **MRP = MP × MR_output**. For a price-taker, MR = P so MRP = MP × P. For a **price-maker** (monopolist), MR < P, so you must use MR. Here **MRP = 10 × $12 = $120**. Choice A makes the common mistake of using P instead of MR — that overstates MRP for any firm with market power.",
        zh: "通用公式是 **MRP = MP × MR_产品**。价格接受者 MR = P,故 MRP = MP × P;**价格制定者**(垄断)MR < P,必须用 MR。这里 **MRP = 10 × $12 = $120**。选项 A 用 P 代替 MR——对任何具有定价能力的企业而言,这会高估 MRP。",
      },
    },
  ],

  // --------- Unit 5 · Topic 2 · Competitive Labor Markets ---------
  "unit-5/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Firm's MRP at each L; market wage W = $30",
          zh: "各 L 下的 MRP;市场工资 W = $30",
        },
        columns: [
          { en: "L", zh: "L" },
          { en: "MRP", zh: "MRP" },
        ],
        rows: [
          [{ en: "1", zh: "1" }, { en: "$80", zh: "$80" }],
          [{ en: "2", zh: "2" }, { en: "$60", zh: "$60" }],
          [{ en: "3", zh: "3" }, { en: "$45", zh: "$45" }],
          [{ en: "4", zh: "4" }, { en: "$35", zh: "$35" }],
          [{ en: "5", zh: "5" }, { en: "$30", zh: "$30" }],
          [{ en: "6", zh: "6" }, { en: "$20", zh: "$20" }],
        ],
      },
      prompt: {
        en: "How many workers should the firm hire to maximize profit?",
        zh: "为使利润最大化,企业应雇用多少名工人?",
      },
      choices: [
        { id: "a", text: { en: "4 — the largest L where MRP > W strictly.", zh: "4——MRP 严格大于 W 的最大 L。" } },
        { id: "b", text: { en: "**5 — the largest L where MRP ≥ W (hire until MRP = W, then stop).**", zh: "**5——MRP ≥ W 的最大 L(雇到 MRP = W 为止)。**" } },
        { id: "c", text: { en: "6 — still profitable overall.", zh: "6——整体仍盈利。" } },
        { id: "d", text: { en: "3 — stop before MRP gets too close to W.", zh: "3——MRP 快接近 W 前就停。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Hiring rule: **hire as long as MRP ≥ W**. Workers 1–5 all satisfy this (last one with MRP = $30 = W exactly — firm is indifferent but by convention hires). Worker 6 has MRP = $20 < $30 — hiring them **reduces** profit by $10. So L* = 5. Choice A stops one worker too early.",
        zh: "雇用规则:**MRP ≥ W 时继续雇**。第 1~5 名都满足(第 5 名 MRP = $30 = W,企业无差异,按惯例仍雇);第 6 名 MRP = $20 < $30,雇用会使利润**减少 $10**,故 L* = 5。选项 A 少雇了 1 名。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Why does a perfectly competitive firm face a **horizontal** labor supply curve at the market wage, while the **market** labor supply curve is **upward-sloping**?",
        zh: "为何完全竞争企业面对的劳动供给曲线在市场工资处**水平**,而**市场**劳动供给曲线却**向上倾斜**?",
      },
      choices: [
        { id: "a", text: { en: "Firms are small — each can hire any number of workers at W* without moving the wage; the market as a whole must pay more to attract more workers (from leisure or other jobs).", zh: "单企业小——可在 W* 雇任意数量而不影响工资;而整个市场要吸引更多工人(从闲暇或其他工作)必须付更高工资。" } },
        { id: "b", text: { en: "Firms can wage-discriminate; market cannot.", zh: "企业可工资歧视,市场不可。" } },
        { id: "c", text: { en: "Workers are monopolists on the supply side.", zh: "工人在供给侧是垄断者。" } },
        { id: "d", text: { en: "The MFC curve is always above the supply curve at the firm level.", zh: "企业层面 MFC 恒在 S 之上。" } },
      ],
      answerId: "a",
      explanation: {
        en: "In a competitive labor market, a single firm hires a **tiny share** of all labor — adding 5 or 50 workers doesn't affect the market wage. From the firm's perspective, labor supply is **horizontal at W***. But the **whole market** must raise W to draw more workers away from leisure or other jobs, so market S slopes up. Choice D describes **monopsony**, not competitive firms.",
        zh: "竞争劳动市场里,单个企业只雇全部劳动的**极小部分**——多雇 5 人或 50 人都不会影响市场工资。对企业而言,劳动供给在 W* 处**水平**。但**整个市场**要从闲暇或其他工作中吸引更多工人必须提高 W,故市场 S 向上。选项 D 描述的是**买方垄断**,不是竞争企业。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A competitive firm is currently hiring 10 workers. At that L, **MRP = $45** and the market wage **W = $30**. Which statement is TRUE?",
        zh: "某竞争企业目前雇 10 名工人,该 L 处 **MRP = $45**,市场工资 **W = $30**。下列哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "The firm should fire workers because wages are eating into profit.", zh: "应裁员——工资侵蚀利润。" } },
        { id: "b", text: { en: "**The firm should HIRE MORE workers — each one adds $45 of revenue for only $30 of wage cost — until MRP falls to $30.**", zh: "**应**多雇**——每多 1 人带来 $45 收入却只需 $30 工资,直到 MRP 降到 $30。**" } },
        { id: "c", text: { en: "The firm should keep L = 10; it is already profit-maximizing.", zh: "应保持 L = 10,已是最大。" } },
        { id: "d", text: { en: "The firm should keep L = 10 but raise the wage to $45.", zh: "保持 L = 10,但把工资提到 $45。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MRP ($45) > W ($30) means the next worker adds **$45 of revenue** at a cost of only **$30** — a $15 profit gain. The firm should keep hiring until **MRP falls (diminishing returns) to $30**. Choice D misunderstands the competitive market — the firm is a **wage taker** and cannot 'set' the wage.",
        zh: "MRP($45)> W($30):再雇一人带来 **$45** 收入,成本仅 **$30**——利润增加 $15。企业应继续雇,直到 **MRP 降至 $30**(边际递减)。选项 D 误解竞争市场——企业是**工资接受者**,无法自行「设定」工资。",
      },
    },
  ],

  // --------- Unit 5 · Topic 3 · Shifts in Labor Demand & Supply ---------
  "unit-5/topic-3": [
    {
      id: "q1",
      prompt: {
        en: "A breakthrough makes industrial robots **much cheaper**. In a manufacturing plant, robots are a **substitute** for assembly-line workers. What happens to the **demand for assembly-line labor**?",
        zh: "一项突破使工业机器人**大幅降价**。某制造厂中,机器人是装配线工人的**替代品**。对**装配线劳动**的需求如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Demand for labor rises (robots make workers more productive).", zh: "劳动需求上升——机器人提升工人生产率。" } },
        { id: "b", text: { en: "**Demand for labor FALLS — firms substitute TOWARD the cheaper input, away from labor.**", zh: "**劳动需求**下降**——企业**转向更便宜的投入**,减少使用劳动。**" } },
        { id: "c", text: { en: "Demand for labor unchanged — robot prices don't affect labor.", zh: "劳动需求不变——机器人价格不影响劳动。" } },
        { id: "d", text: { en: "Labor supply shifts left.", zh: "劳动供给左移。" } },
      ],
      answerId: "b",
      explanation: {
        en: "When a **substitute** input gets cheaper, firms **switch toward it** and use **less** of the other input — so D_L **shifts LEFT**. If robots were a **complement** (worked alongside labor, like power tools), cheaper robots would raise D_L. Choice A is the classic mistake of assuming ANY cost reduction raises labor demand.",
        zh: "当**替代**投入变便宜,企业**转向使用替代品**,**减少**另一种投入——D_L **左移**。若机器人是**互补品**(如工人使用的电动工具),机器人便宜反而提高 D_L。选项 A 是典型错误:误以为成本下降就会提升劳动需求。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "In the market for teachers, two events happen **simultaneously**: (I) a new policy raises teacher productivity by 20% (MP ↑); (II) a large wave of young retirees re-enter the workforce as teachers. What happens to **equilibrium wage W and employment L**?",
        zh: "教师市场同时发生两件事:(I)新政策使教师生产率上升 20%(MP ↑);(II)大量退休后返聘的年轻人成为教师。**均衡工资 W 与雇用 L** 如何变化?",
      },
      choices: [
        { id: "a", text: { en: "W rises; L falls.", zh: "W 上升;L 下降。" } },
        { id: "b", text: { en: "**L rises unambiguously; W is ambiguous (depends on the relative size of the shifts).**", zh: "**L 确定上升;W 不确定(取决于两次移动的相对大小)。**" } },
        { id: "c", text: { en: "W rises; L rises.", zh: "W 上升;L 上升。" } },
        { id: "d", text: { en: "Both fall.", zh: "两者都下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "(I) MP ↑ → D_L shifts RIGHT (alone: W↑, L↑). (II) More supply → S_L shifts RIGHT (alone: W↓, L↑). Both push L **up**, so L rises unambiguously. But one pushes W up and the other pushes W down — **W is ambiguous**. This is the classic 'both curves shift right' four-combo result.",
        zh: "(I) MP ↑ → D_L **右移**(单独:W↑、L↑);(II) 供给增加 → S_L **右移**(单独:W↓、L↑)。两者都推升 L,L 确定上升;但一个推 W 上、一个推 W 下——**W 不确定**。这是典型「两条曲线都右移」的四种组合结果。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Consider two labor markets: (I) nurses (complement to hospital capital); (II) taxi drivers (substitute for ride-share algorithms). The price of **hospital equipment rises 40%** and **ride-share algorithm costs fall 30%**. Predict the direction of demand shifts.",
        zh: "考虑两个劳动市场:(I) 护士(医院资本的**互补品**);(II) 出租车司机(网约车算法的**替代品**)。**医院设备价格上涨 40%**,**网约车算法成本下降 30%**。预测需求曲线的移动方向。",
      },
      choices: [
        { id: "a", text: { en: "D for nurses shifts RIGHT; D for drivers shifts RIGHT.", zh: "护士 D 右移;司机 D 右移。" } },
        { id: "b", text: { en: "**D for nurses shifts LEFT (complement more expensive ⇒ less of both); D for drivers shifts LEFT (cheap substitute replaces drivers).**", zh: "**护士 D**左移**(互补品更贵 → 两者都少用);司机 D**左移**(便宜替代品取代司机)。**" } },
        { id: "c", text: { en: "D for nurses shifts LEFT; D for drivers shifts RIGHT.", zh: "护士 D 左移;司机 D 右移。" } },
        { id: "d", text: { en: "Neither shifts — input prices don't affect labor demand.", zh: "都不移动——投入价格不影响劳动需求。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Complements**: when their price rises, the paired input is used less → D_L ↓. Hospital equipment ↑ → fewer nurses hired → D for nurses **LEFT**. **Substitutes**: when their price falls, firms switch toward them and away from labor → D_L ↓. Algorithms cheap → fewer drivers → D for drivers **LEFT**. The two effects come from opposite directions of price change but give the SAME direction of shift because the relationship to labor is opposite.",
        zh: "**互补品**涨价:相关投入用得更少 → D_L ↓。医院设备 ↑ → 少雇护士 → 护士 D **左移**。**替代品**降价:企业转向便宜替代,减少劳动 → D_L ↓。算法便宜 → 司机少 → 司机 D **左移**。两个情境价格变化方向相反,但与劳动的关系也相反,因此移动方向**相同**。",
      },
    },
  ],

  // --------- Unit 5 · Topic 4 · Least-Cost & Profit-Max Input Combination ---------
  "unit-5/topic-4": [
    {
      id: "q1",
      prompt: {
        en: "A firm uses labor and capital. Currently **MP_L = 40, P_L = $10; MP_K = 30, P_K = $15**. Is the firm cost-minimizing? If not, which adjustment saves money?",
        zh: "某企业同时使用劳动与资本。当前 **MP_L = 40、P_L = $10;MP_K = 30、P_K = $15**。企业是否成本最小化?若否,应如何调整?",
      },
      choices: [
        { id: "a", text: { en: "Yes — both MPs are positive.", zh: "是——两个 MP 都为正。" } },
        { id: "b", text: { en: "**No — MP_L / P_L = 4 > MP_K / P_K = 2, so SUBSTITUTE TOWARD LABOR (use more L, less K).**", zh: "**否——MP_L / P_L = 4 > MP_K / P_K = 2,应**向劳动替代**(多用 L,少用 K)。**" } },
        { id: "c", text: { en: "No — substitute toward capital (P_K is higher).", zh: "否——向资本替代(P_K 更高)。" } },
        { id: "d", text: { en: "Cannot be determined without knowing output price.", zh: "不知道产品价格无法判断。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Least-cost rule**: MP_L / P_L = MP_K / P_K. Here **4 ≠ 2**: each $1 on labor buys 4 MP, but each $1 on capital buys only 2 MP. Shift spending toward **labor** — as L rises, MP_L falls (diminishing returns); as K falls, MP_K rises. Adjustment continues until the two ratios equalize. Choice C has the intuition backwards — chase the higher MP-per-$, not the cheaper input.",
        zh: "**最低成本法则**:MP_L / P_L = MP_K / P_K。这里 **4 ≠ 2**:每 $1 买 L 得 4 MP,每 $1 买 K 只得 2 MP。应把支出转向**劳动**——L 增 MP_L 降(边际递减),K 减 MP_K 升,调整到两比值相等。选项 C 方向反了:追高每美元 MP,而非追便宜投入。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A firm is currently cost-minimizing AND uses labor until **MRP_L = $15 = P_L**. For capital, **MRP_K = $60 and P_K = $40**. To maximize profit, what should the firm do with capital?",
        zh: "某企业目前是成本最小化的,劳动已雇到 **MRP_L = $15 = P_L**。而资本 **MRP_K = $60,P_K = $40**。为使利润最大,应如何处理资本?",
      },
      choices: [
        { id: "a", text: { en: "Do nothing — cost-minimizing already implies profit-max.", zh: "不用调整——成本最小化自动意味着利润最大。" } },
        { id: "b", text: { en: "**Hire MORE capital until MRP_K falls to $40 = P_K (profit-max requires MRP_i = P_i for EACH input, not just equalization).**", zh: "**多**雇**资本,直到 MRP_K 降到 $40 = P_K(利润最大化要求**每种**投入的 MRP = 其价格,不只是比例相等)。**" } },
        { id: "c", text: { en: "Reduce capital because output is already too high.", zh: "减少资本,产量已过高。" } },
        { id: "d", text: { en: "Raise P_K to $60.", zh: "把 P_K 提到 $60。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Cost minimization only fixes the **ratio** of inputs. **Profit max** adds the condition **MRP_i = P_i for every input** — each input earns exactly what it adds. Here MRP_K = $60 > P_K = $40, so each extra unit of capital adds **$20 profit**. Hire more capital until MRP_K falls (diminishing MP) to $40. Choice A overlooks this: cost-min doesn't set levels, only ratios.",
        zh: "成本最小化只固定投入**比例**。**利润最大**还要求**每种投入 MRP = 其价格**——每种投入所得正好等于其贡献。这里 MRP_K = $60 > P_K = $40,每多一单位资本**加 $20 利润**。应多雇资本,直到 MRP_K 降至 $40(边际递减)。选项 A 忽略了这点:成本最小化不决定用量水平,只决定比例。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Which statement correctly describes the relationship between the **least-cost rule** and the **profit-max rule**?",
        zh: "下列哪项正确描述**最低成本法则**与**利润最大化法则**的关系?",
      },
      choices: [
        { id: "a", text: { en: "The two rules are identical.", zh: "两条法则完全相同。" } },
        { id: "b", text: { en: "**Every profit-maximizing firm is automatically cost-minimizing, but a cost-minimizing firm may still be producing too much or too little for profit-max.**", zh: "**利润最大化企业**自动**成本最小化,但成本最小化企业**未必**处在利润最大化的产量上。**" } },
        { id: "c", text: { en: "A firm can minimize cost without satisfying MP_L/P_L = MP_K/P_K.", zh: "企业可在不满足 MP_L/P_L = MP_K/P_K 时实现成本最小。" } },
        { id: "d", text: { en: "A firm can maximize profit without using any capital.", zh: "企业可不使用任何资本就实现利润最大。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Nesting**: profit-max is **cost-min PLUS** the level condition MRP_i = P_i. So profit-max ⇒ cost-min, but cost-min ⇏ profit-max (a firm could be cost-minimizing while producing the wrong total quantity). This is why AP separates the two rules: they answer different questions (HOW vs. HOW MUCH).",
        zh: "**嵌套**:利润最大化 = 成本最小化 + 水平条件 MRP_i = P_i。因此 利润最大 ⇒ 成本最小,但成本最小 ⇏ 利润最大(企业可能成本最小但产量不对)。AP 把两条法则分开讲,正是因为它们回答不同问题(**如何生产** vs. **生产多少**)。",
      },
    },
  ],

  // --------- Unit 5 · Topic 5 · Monopsony & Imperfect Factor Markets ---------
  "unit-5/topic-5": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Labor supply schedule a monopsonist faces",
          zh: "买方垄断者面对的劳动供给表",
        },
        columns: [
          { en: "L", zh: "L" },
          { en: "Wage (W, $/hr)", zh: "工资 W($/小时)" },
          { en: "Total wage bill", zh: "总工资支出" },
          { en: "MFC", zh: "MFC" },
        ],
        rows: [
          [{ en: "1", zh: "1" }, { en: "$10", zh: "$10" }, { en: "$10", zh: "$10" }, { en: "—", zh: "—" }],
          [{ en: "2", zh: "2" }, { en: "$11", zh: "$11" }, { en: "$22", zh: "$22" }, { en: "$12", zh: "$12" }],
          [{ en: "3", zh: "3" }, { en: "$12", zh: "$12" }, { en: "$36", zh: "$36" }, { en: "$14", zh: "$14" }],
          [{ en: "4", zh: "4" }, { en: "$13", zh: "$13" }, { en: "$52", zh: "$52" }, { en: "$16", zh: "$16" }],
        ],
      },
      prompt: {
        en: "Why is **MFC > W** at every L > 1?",
        zh: "为什么 L > 1 时 **MFC > W**?",
      },
      choices: [
        { id: "a", text: { en: "MFC always equals the wage for a monopsonist.", zh: "买方垄断下 MFC 恒等于工资。" } },
        { id: "b", text: { en: "**To hire one more worker the firm must raise the wage for ALL workers — so MFC = new wage + raise paid to existing workers > new wage.**", zh: "**多雇 1 人必须给**所有**工人涨薪——MFC = 新工资 + 给已有工人的加薪 > 新工资。**" } },
        { id: "c", text: { en: "MFC reflects overtime premiums only.", zh: "MFC 只反映加班费。" } },
        { id: "d", text: { en: "MFC is the government-mandated minimum wage.", zh: "MFC 是政府最低工资。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A monopsonist faces the **entire market labor supply curve**, which slopes up — to hire one more worker the firm must raise the wage for **every** worker (can't wage-discriminate). MFC = (new wage × new L) − (old wage × old L). From L=1 to L=2: MFC = $22 − $10 = **$12 > $11**. This is the mirror image of monopoly: there, to sell one more unit you must cut price on all → MR < P.",
        zh: "买方垄断者面对整条**市场劳动供给**曲线(向上倾斜)——多雇 1 人必须给**所有**工人涨薪(无法工资歧视)。MFC = (新 W × 新 L) − (旧 W × 旧 L)。L=1→2 时 MFC = $22 − $10 = **$12 > $11**。这与垄断对称:多卖 1 单位必须对所有人降价,故 MR < P。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A monopsonist faces labor supply **S: W = 2 + L** and MRP curve **MRP = 14 − L**. Find **L_m, W_m**, and compare to the competitive benchmark.",
        zh: "某买方垄断者面对劳动供给 **S: W = 2 + L**、MRP 曲线 **MRP = 14 − L**。求 **L_m、W_m**,并与完全竞争基准比较。",
      },
      choices: [
        { id: "a", text: { en: "L_m = 6, W_m = 8 (same as competitive).", zh: "L_m = 6,W_m = 8(与竞争相同)。" } },
        { id: "b", text: { en: "**L_m = 4, W_m = 6; competitive L_c = 6, W_c = 8 — monopsony hires FEWER workers at a LOWER wage.**", zh: "**L_m = 4,W_m = 6;竞争 L_c = 6,W_c = 8——买方垄断**雇更少、工资更低**。**" } },
        { id: "c", text: { en: "L_m = 4, W_m = 10 (read wage off MFC).", zh: "L_m = 4,W_m = 10(从 MFC 读 W)。" } },
        { id: "d", text: { en: "L_m = 12 (largest possible).", zh: "L_m = 12(最大可能)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MFC for linear S (W = a + bL) is **a + 2bL**; here MFC = **2 + 2L**. Set MFC = MRP: 2 + 2L = 14 − L → 3L = 12 → **L_m = 4**. **Read W off S (not MFC!)**: W_m = 2 + 4 = **$6**. Competitive: set S = MRP: 2 + L = 14 − L → **L_c = 6, W_c = 8**. Monopsony restricts L and depresses W. Choice C is the classic 'read W off MFC' error.",
        zh: "线性 S(W = a + bL)对应 **MFC = a + 2bL**;此处 MFC = **2 + 2L**。令 MFC = MRP:2 + 2L = 14 − L → 3L = 12 → **L_m = 4**。**从 S(而非 MFC)读 W**:W_m = 2 + 4 = **$6**。竞争:S = MRP → 2 + L = 14 − L → **L_c = 6、W_c = 8**。买方垄断压低 L 与 W。选项 C 是经典「从 MFC 读 W」错误。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "In a monopsonistic labor market with W_m = $6 and competitive benchmark W_c = $8, the government sets a **minimum wage at $7**. What happens to the wage and employment?",
        zh: "在 W_m = $6、竞争基准 W_c = $8 的买方垄断劳动市场,政府将**最低工资设在 $7**。工资与雇用如何变化?",
      },
      choices: [
        { id: "a", text: { en: "W rises to $7, L falls (classic minimum-wage result).", zh: "W 升至 $7,L 下降(经典最低工资结果)。" } },
        { id: "b", text: { en: "**BOTH W and L rise: the firm now faces a flat supply at $7 up to the natural S, so its effective MFC = $7 until that point; more workers get hired at the higher wage.**", zh: "**W 与 L 同时上升:企业面对的供给在 $7 以下变为水平,实际 MFC = $7,在到达自然 S 之前更多工人被雇用。**" } },
        { id: "c", text: { en: "W unchanged, L falls.", zh: "W 不变,L 下降。" } },
        { id: "d", text: { en: "Both fall — minimum wages always hurt workers.", zh: "两者都下降——最低工资总是有害。" } },
      ],
      answerId: "b",
      explanation: {
        en: "In a **monopsony**, a minimum wage between W_m and W_c **flattens** the firm's perceived labor supply curve to a horizontal line at the minimum until it meets the natural upward S. On that flat portion, **MFC = minimum wage**. The firm now hires until MFC (= $7) = MRP, which gives a HIGHER L than before. So **both W and L rise**. The common 'minimum wages always cut jobs' intuition from competitive markets FLIPS under monopsony — the key exception. If the minimum were set above W_c, then L would fall as in the competitive case.",
        zh: "**买方垄断**下,位于 W_m 与 W_c 之间的最低工资使企业面对的劳动供给在最低工资水平**被拉平**,直到与自然 S 交汇。在水平段 **MFC = 最低工资**。企业雇到 MFC(= $7)= MRP,雇用量**增加**。所以 **W 与 L 同时上升**。竞争市场中「最低工资一定减少就业」的直觉,在买方垄断下**反转**——这是关键例外。若设得高于 W_c,则雇用下降(同竞争情形)。",
      },
    },
  ],

  // --------- Unit 6 · Topic 1 · Social Efficiency & Market Failure ---------
  "unit-6/topic-1": [
    {
      id: "q1",
      prompt: {
        en: "A market **achieves social efficiency** when which condition holds at equilibrium?",
        zh: "市场**实现社会效率**的均衡条件是?",
      },
      choices: [
        { id: "a", text: { en: "Quantity demanded equals quantity supplied.", zh: "需求量等于供给量。" } },
        { id: "b", text: { en: "**MSB = MSC — the last unit's full social benefit equals its full social cost.**", zh: "**MSB = MSC——最后一单位的社会总收益等于社会总成本。**" } },
        { id: "c", text: { en: "P = MC for every buyer and seller.", zh: "每一位买家与卖家 P = MC。" } },
        { id: "d", text: { en: "Total revenue equals total cost for all firms.", zh: "所有企业 TR = TC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Social efficiency = maximizing total surplus = equating **MARGINAL SOCIAL benefit** with **MARGINAL SOCIAL cost** at the last unit. In a market with no externalities, MSB = MPB (= D) and MSC = MPC (= S), so the usual Qd = Qs condition automatically hits MSB = MSC. But **with externalities**, that shortcut fails — the market clears at MPB = MPC while MSB ≠ MSC. Choice A describes market clearing, which is necessary but not sufficient.",
        zh: "社会效率 = 总剩余最大化 = 在最后一单位使**边际社会收益**与**边际社会成本**相等。无外部性时,MSB = MPB(= D)、MSC = MPC(= S),常见的 Qd = Qs 自动满足 MSB = MSC。但**有外部性**时这条捷径失效——市场在 MPB = MPC 处出清,却有 MSB ≠ MSC。选项 A 是市场出清条件,必要但不充分。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Which of the following is NOT one of the four classical sources of market failure?",
        zh: "下列哪项**不是**市场失灵的四大经典来源?",
      },
      choices: [
        { id: "a", text: { en: "Externalities.", zh: "外部性。" } },
        { id: "b", text: { en: "Public goods.", zh: "公共物品。" } },
        { id: "c", text: { en: "Market power (monopoly).", zh: "市场力量(垄断)。" } },
        { id: "d", text: { en: "**A government budget deficit.**", zh: "**政府预算赤字。**" } },
      ],
      answerId: "d",
      explanation: {
        en: "The four classical sources are **externalities, public goods, market power, and imperfect information**. A budget deficit is a macroeconomic outcome, not a micro market-failure category. Note: 'inequality' is often listed as a fifth rationale for government intervention — but it's NOT a market failure in the efficiency sense; it's an equity concern.",
        zh: "四大经典来源为**外部性、公共物品、市场力量、信息不完全**。预算赤字是宏观结果,不是微观市场失灵类别。注:「不平等」常被列为政府干预的第五类理由——但它**不是**效率意义上的市场失灵,而是公平问题。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "In a market with NO externalities, the supply curve represents MPC and the demand curve represents MPB. Which statement correctly relates them to social costs and benefits?",
        zh: "某市场**无**外部性,供给曲线即 MPC、需求曲线即 MPB。下列关于它们与社会成本 / 收益的关系,哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "MSC > MPC because government adds costs.", zh: "MSC > MPC——政府增加成本。" } },
        { id: "b", text: { en: "**MSC = MPC and MSB = MPB, so market equilibrium (MPC = MPB) also satisfies MSC = MSB — the market is automatically efficient.**", zh: "**MSC = MPC 且 MSB = MPB,故市场均衡(MPC = MPB)也满足 MSC = MSB——市场自动有效。**" } },
        { id: "c", text: { en: "MSB is always less than MPB.", zh: "MSB 总是小于 MPB。" } },
        { id: "d", text: { en: "The market cannot be efficient without government intervention.", zh: "无政府干预就无法达成效率。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Externalities, by definition, are spillovers beyond the private parties. Without them, there is no 'outside' — so MSC = MPC and MSB = MPB. The market-clearing condition MPC = MPB then coincides with the efficiency condition MSC = MSB → **invisible-hand result**. Government intervention is only warranted when one of the four sources of market failure is present.",
        zh: "外部性的定义即「溢出到私人当事人之外」。无外部性意味着没有「外部」——所以 MSC = MPC,MSB = MPB。市场出清的 MPC = MPB 与效率条件 MSC = MSB 重合——**看不见的手结果**。只有存在四大市场失灵之一时,政府介入才有依据。",
      },
    },
  ],

  // --------- Unit 6 · Topic 2 · Negative Externalities ---------
  "unit-6/topic-2": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "A steel market (per-ton, $; pollution imposes $20/ton external cost)",
          zh: "某钢铁市场(单位:每吨 $,污染造成每吨 $20 外部成本)",
        },
        columns: [
          { en: "Q (tons)", zh: "Q(吨)" },
          { en: "MPC", zh: "MPC" },
          { en: "MPB", zh: "MPB" },
        ],
        rows: [
          [{ en: "10", zh: "10" }, { en: "$40", zh: "$40" }, { en: "$90", zh: "$90" }],
          [{ en: "20", zh: "20" }, { en: "$60", zh: "$60" }, { en: "$80", zh: "$80" }],
          [{ en: "30", zh: "30" }, { en: "$70", zh: "$70" }, { en: "$70", zh: "$70" }],
          [{ en: "40", zh: "40" }, { en: "$80", zh: "$80" }, { en: "$60", zh: "$60" }],
          [{ en: "50", zh: "50" }, { en: "$90", zh: "$90" }, { en: "$50", zh: "$50" }],
        ],
      },
      prompt: {
        en: "Find the **market** Q_m and the **socially optimal** Q*.",
        zh: "求**市场** Q_m 与**社会最优** Q*。",
      },
      choices: [
        { id: "a", text: { en: "Q_m = 30, Q* = 30 (no externality adjustment needed).", zh: "Q_m = 30,Q* = 30(无需调整)。" } },
        { id: "b", text: { en: "**Q_m = 30 (MPC = MPB); Q* = 20 (where MSC = MPC + $20 = MPB: $80 = $80).**", zh: "**Q_m = 30(MPC = MPB);Q* = 20(MSC = MPC + $20 = MPB:$80 = $80)。**" } },
        { id: "c", text: { en: "Q_m = 20, Q* = 30.", zh: "Q_m = 20,Q* = 30。" } },
        { id: "d", text: { en: "Q_m = 50, Q* = 10.", zh: "Q_m = 50,Q* = 10。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Market clears where **MPC = MPB**: at Q = 30, both equal $70 → **Q_m = 30**. Social optimum requires **MSC = MSB**; since the externality is on production, MSC = MPC + $20 and MSB = MPB. At Q = 20: MSC = $60 + $20 = $80 = MPB ✓ → **Q* = 20**. The market OVERPRODUCES by 10 tons relative to the efficient level — classic negative externality result.",
        zh: "市场出清 **MPC = MPB**:Q = 30 时两者都为 $70 → **Q_m = 30**。社会最优需 **MSC = MSB**;生产型外部性下 MSC = MPC + $20,MSB = MPB。Q = 20 时 MSC = $60 + $20 = $80 = MPB ✓ → **Q* = 20**。市场相对有效水平**过度生产** 10 吨——典型负外部性结果。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "To internalize a negative **production** externality of $5 per unit, a Pigouvian tax should be set at:",
        zh: "要内部化每单位 $5 的负**生产**外部性,庇古税应设为:",
      },
      choices: [
        { id: "a", text: { en: "$0 — markets self-correct.", zh: "$0——市场会自我调节。" } },
        { id: "b", text: { en: "**$5 per unit, on the producer — this shifts MPC up by $5 to coincide with MSC, moving Q to Q*.**", zh: "**每单位 $5,对**生产者**征税——MPC 上移 $5 与 MSC 重合,Q 移动到 Q*。**" } },
        { id: "c", text: { en: "$10 per unit — double the externality for safety.", zh: "每单位 $10——加倍以防万一。" } },
        { id: "d", text: { en: "A lump-sum tax unrelated to output.", zh: "与产量无关的一次性税款。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A Pigouvian tax equal to the **marginal external cost** ($5) causes producers to face the full social cost for each unit they produce. MPC shifts up to MSC, market clearing happens at MPC + tax = MPB ↔ MSC = MSB = Q*. Choice C overshoots and creates a different DWL (market now underproduces). Choice D doesn't depend on Q, so it fails to change the marginal decision.",
        zh: "等于**边际外部成本**($5)的庇古税使生产者每多产 1 单位就承担全部社会成本。MPC 上移至 MSC,市场出清在 MPC + 税 = MPB ↔ MSC = MSB = Q*。选项 C 过度,反而使市场产出不足、产生新 DWL。选项 D 与 Q 无关,无法改变边际决策。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A factory and a neighborhood have a pollution dispute. The factory values producing at $100/day; the neighbors' damage is $60/day. Transaction costs are low. According to the **Coase theorem**, what is the efficient outcome?",
        zh: "工厂与邻居因污染起纠纷。工厂生产的价值 $100/日;邻居的损失 $60/日。交易成本低。依**科斯定理**,有效结果是?",
      },
      choices: [
        { id: "a", text: { en: "Production ceases — polluters must always stop.", zh: "停产——污染者必须停止。" } },
        { id: "b", text: { en: "**Production continues because total benefit ($100) > total damage ($60). With clear property rights, private bargaining achieves this outcome regardless of who has the legal right.**", zh: "**继续生产——总收益 $100 > 总损害 $60。产权明确时,**不论法定权属在谁**,私下协商都会达到这一结果。**" } },
        { id: "c", text: { en: "Production continues only if the factory has the legal right.", zh: "只有工厂拥有法定权时才继续生产。" } },
        { id: "d", text: { en: "The government must impose a tax.", zh: "必须由政府征税。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Coase theorem**: with well-defined property rights and low transaction costs, private parties bargain to the efficient outcome. Since total benefit ($100) > total damage ($60), production is efficient. If the factory has the right, neighbors can't afford to pay $100+ to stop it (efficient: don't pay). If the neighbors have the right, the factory will pay them more than $60 (damage) but less than $100 (value) — say $80 — to produce. Either way, production continues. The **legal right changes who pays whom**, not the final Q.",
        zh: "**科斯定理**:产权明确且交易成本低时,当事人私下协商达到有效结果。由于总收益 $100 > 总损害 $60,生产有效。若工厂有权,邻居无法用 $100+ 让其停止(高效:不付)。若邻居有权,工厂会付给他们高于 $60(损失)、低于 $100(价值)——如 $80——以维持生产。两种情形下**生产都继续**。法定权属只改变**谁付给谁**,不改变最终 Q。",
      },
    },
  ],

  // --------- Unit 6 · Topic 3 · Positive Externalities ---------
  "unit-6/topic-3": [
    {
      id: "q1",
      prompt: {
        en: "Flu vaccines produce a **positive consumption externality** (vaccinated people can't spread the virus to others). Which statement correctly describes the market outcome?",
        zh: "流感疫苗产生**正消费外部性**(接种者不会把病毒传给他人)。下列哪项正确描述市场结果?",
      },
      choices: [
        { id: "a", text: { en: "The market produces the socially optimal quantity because vaccines are voluntary.", zh: "市场产出社会最优——疫苗自愿接种。" } },
        { id: "b", text: { en: "**The market UNDERPRODUCES: MPB < MSB, so Q_m < Q*. DWL is the triangle where MSB > MPC but trades don't happen.**", zh: "**市场**产出不足**:MPB < MSB,故 Q_m < Q*。DWL 为「MSB > MPC 却未发生的交易」三角形。**" } },
        { id: "c", text: { en: "The market OVERPRODUCES because vaccines are cheap.", zh: "市场过度生产——疫苗便宜。" } },
        { id: "d", text: { en: "There is no DWL because people voluntarily buy vaccines.", zh: "没有 DWL——人们自愿购买。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Individuals only count the **private** benefit (I won't get sick) when deciding to vaccinate, not the **social** benefit (others also won't get sick). So MPB < MSB, and at market equilibrium (MPC = MPB) the last unit has MSB > MSC — society wants more. Q_m is therefore **below** Q*. DWL is the triangle of missed mutually beneficial trades.",
        zh: "人们在决定是否接种时只计入**私人**收益(自己不生病),而不计**社会**收益(他人也不生病)。所以 MPB < MSB,在市场均衡(MPC = MPB)处最后一单位仍有 MSB > MSC——社会希望更多。Q_m 因此**低于** Q*。DWL 是那些本可互惠却未发生的交易之和。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "For a positive consumption externality worth $4 per unit, which intervention moves the market to the socially optimal Q*?",
        zh: "每单位 $4 的正消费外部性,哪项干预使市场到达社会最优 Q*?",
      },
      choices: [
        { id: "a", text: { en: "A $4 per-unit tax on producers.", zh: "对生产者每单位征 $4 税。" } },
        { id: "b", text: { en: "**A $4 per-unit subsidy to consumers (or, equivalently, to producers) — shifts MPB up to coincide with MSB.**", zh: "**对消费者每单位补贴 $4(或等价地,对生产者补贴)——MPB 上移至与 MSB 重合。**" } },
        { id: "c", text: { en: "A $4 price ceiling on the good.", zh: "对该商品设 $4 价格上限。" } },
        { id: "d", text: { en: "Nothing — markets fix themselves.", zh: "无需干预——市场自我纠正。" } },
      ],
      answerId: "b",
      explanation: {
        en: "To **internalize** a positive externality of $v per unit, subsidize $v per unit. A consumer subsidy raises MPB to MSB (consumers now feel the full social benefit). A producer subsidy lowers MPC by $v, with the same final quantity — same economic outcome, different statutory incidence (tax-equivalence applies to subsidies too). Choice A (tax) pushes the market FURTHER from Q* — wrong direction.",
        zh: "要**内部化**每单位 $v 的正外部性,就补贴 $v/单位。对消费者补贴使 MPB 上移至 MSB(消费者面对全部社会收益);对生产者补贴使 MPC 下移 $v,终态 Q 相同——同经济结果,法定归宿不同(税收等价同样适用于补贴)。选项 A(征税)把市场推得**更远离** Q*,方向相反。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "Basic research (like particle physics) generates large **positive production externalities** — other firms can copy discoveries. Why might the government use **patents** instead of subsidies for applied R&D?",
        zh: "基础研究(如粒子物理)产生大量**正生产外部性**——其他企业可模仿发现。为什么政府对应用型研发更常用**专利**而非补贴?",
      },
      choices: [
        { id: "a", text: { en: "Patents lower the social benefit to zero.", zh: "专利使社会收益归零。" } },
        { id: "b", text: { en: "**Patents give innovators temporary market power, allowing them to capture more of the social benefit — so private R&D incentive aligns closer with MSB, even without direct fiscal outlay.**", zh: "**专利赋予创新者临时市场力量,使其能夺回更多社会收益——私人研发激励从而更接近 MSB,**无需**直接财政支出。**" } },
        { id: "c", text: { en: "Patents make research non-excludable.", zh: "专利使研究不可排他。" } },
        { id: "d", text: { en: "Patents eliminate the externality entirely.", zh: "专利完全消除外部性。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A patent grants temporary monopoly rights, allowing the innovator to charge above MC and recoup more of the value created. This raises **private** benefit of R&D closer to **social** benefit → more R&D. The cost is **short-run DWL** from monopoly pricing (Unit 4), but that's weighed against the larger long-run gain in innovation. Choice D is too strong — patents mitigate, not eliminate, the externality (and create their own distortion).",
        zh: "专利给予临时垄断权,创新者可按高于 MC 的价收费,更多地收回所创造的价值。私人研发收益向社会收益靠拢 → 研发增加。代价是**短期 DWL**(第 4 单元的垄断定价),但与长期创新收益权衡。选项 D 过强——专利是**缓解**而非**消除**外部性,并自带新扭曲。",
      },
    },
  ],

  // --------- Unit 6 · Topic 4 · Public Goods & Common Resources ---------
  "unit-6/topic-4": [
    {
      id: "q1",
      figure: {
        kind: "table",
        caption: {
          en: "Four items — classify each",
          zh: "四项物品——分类",
        },
        columns: [
          { en: "Item", zh: "物品" },
          { en: "Description", zh: "说明" },
        ],
        rows: [
          [{ en: "I · A streaming TV subscription", zh: "I · 流媒体电视订阅" }, { en: "One viewer does not diminish another's signal; password locked.", zh: "一人观看不影响他人信号;密码锁定。" }],
          [{ en: "II · An ocean fishery (unregulated)", zh: "II · 无管制的海洋渔业" }, { en: "Each fish caught is one less for others; no way to exclude boats.", zh: "每条被捕捞的鱼使他人少一条;无法阻止他船进入。" }],
          [{ en: "III · Street lighting", zh: "III · 街道照明" }, { en: "My use does not diminish yours; cannot charge for standing under it.", zh: "我用不减少你的份额;无法对站在灯下的人收费。" }],
          [{ en: "IV · An apple", zh: "IV · 一个苹果" }, { en: "Only one person can eat it; seller can charge at checkout.", zh: "只有一人能吃;收银台可收费。" }],
        ],
      },
      prompt: {
        en: "Match items to categories.",
        zh: "将各项匹配到相应类别。",
      },
      choices: [
        { id: "a", text: { en: "I public; II private; III common; IV club.", zh: "I 公共;II 私人;III 公地;IV 俱乐部。" } },
        { id: "b", text: { en: "**I club; II common-pool; III public; IV private.**", zh: "**I 俱乐部;II 公地;III 公共;IV 私人。**" } },
        { id: "c", text: { en: "All four are public goods.", zh: "四项都是公共物品。" } },
        { id: "d", text: { en: "I private; II public; III common; IV club.", zh: "I 私人;II 公共;III 公地;IV 俱乐部。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Apply the 2×2 grid. **I (streaming)**: non-rivalrous (my viewing doesn't diminish yours) + excludable (password) → **club**. **II (unregulated fishery)**: rivalrous (each fish taken is gone) + non-excludable (open ocean) → **common-pool**. **III (streetlight)**: non-rivalrous + non-excludable → **public**. **IV (apple)**: rivalrous + excludable → **private**.",
        zh: "套 2×2 表。**I(流媒体)**:不可竞争(我看不影响你)+ 可排他(密码)→ **俱乐部**。**II(无管制渔业)**:可竞争(每鱼被捕是损失)+ 不可排他(海洋开放)→ **公地**。**III(路灯)**:不可竞争 + 不可排他 → **公共**。**IV(苹果)**:可竞争 + 可排他 → **私人**。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "A country considers privately funding its national defense through voluntary donations. Which market failure would most likely occur?",
        zh: "某国考虑通过自愿捐款私人出资国防。下列哪项市场失灵最可能出现?",
      },
      choices: [
        { id: "a", text: { en: "Tragedy of the commons — soldiers overuse shared equipment.", zh: "公地悲剧——士兵滥用共享装备。" } },
        { id: "b", text: { en: "**Free-rider problem — defense is non-excludable, so individuals wait for others to pay; total contributions fall far below efficient level.**", zh: "**搭便车问题——国防不可排他,人人等别人付款;总捐款远低于有效水平。**" } },
        { id: "c", text: { en: "Adverse selection.", zh: "逆向选择。" } },
        { id: "d", text: { en: "Minimum wage unemployment.", zh: "最低工资失业。" } },
      ],
      answerId: "b",
      explanation: {
        en: "National defense is a classic **public good**: non-rivalrous (protecting one citizen doesn't diminish protection to others) and **non-excludable** (can't selectively un-defend freeloaders). Free-riding dominates: each person reasons 'my contribution is tiny; I'll let others pay' → total funding falls far short of the social optimum. This is why defense is **tax-financed and government-provided** in nearly every country.",
        zh: "国防是典型**公共物品**:不可竞争(保护一人不减少对他人的保护)且**不可排他**(无法选择性对非出资者不保护)。搭便车占优:每人都想「我捐的太少,让别人付吧」→ 总资金远低于社会最优。这就是几乎所有国家都**由财政税收出资、政府提供**的原因。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "In an unregulated ocean fishery (common-pool resource), why does overfishing tend to occur even though it harms everyone in the long run?",
        zh: "无管制海洋渔业(公地资源)中,为什么过度捕捞常常发生——尽管从长期看对所有人都不利?",
      },
      choices: [
        { id: "a", text: { en: "Fishermen are stupid or shortsighted.", zh: "渔民愚蠢或目光短浅。" } },
        { id: "b", text: { en: "**Each boat faces full private benefit of catching one more fish, but only a tiny share of the long-run depletion cost — individually rational overfishing leads to collective collapse.**", zh: "**每条渔船享有多捞一条鱼的**全部**私人收益,却只承担长期资源枯竭成本的**极小一部分**——个体理性导致集体崩溃。**" } },
        { id: "c", text: { en: "Fish prices are too low.", zh: "鱼价太低。" } },
        { id: "d", text: { en: "Boats cannot be tracked in the ocean.", zh: "海洋无法追踪船只。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The **tragedy of the commons** isn't about individual irrationality — it's that rivalry + non-excludability makes each actor's private benefit from using the resource much larger than their private share of the depletion cost. Even fully rational actors deplete the stock. Solutions require **changing the incentive structure**: quotas (cap each boat's catch), tradable permits, or privatizing sections of the fishery to create property rights.",
        zh: "**公地悲剧**不是个体不理性——而是「可竞争 + 不可排他」使每位使用者的私人收益远大于其私人承担的消耗成本。即便完全理性,资源仍会被耗尽。对策是**改变激励结构**:配额(限定每船捕捞量)、可交易许可证,或将渔场私有化以建立产权。",
      },
    },
  ],

  // --------- Unit 6 · Topic 5 · Income & Wealth Inequality ---------
  "unit-6/topic-5": [
    {
      id: "q1",
      prompt: {
        en: "Which of the following Lorenz curves describes the **MOST equal** distribution of income?",
        zh: "下列洛伦兹曲线中,哪一条描述的是**最平等**的收入分布?",
      },
      choices: [
        { id: "a", text: { en: "A curve that bows far below the 45° line.", zh: "明显**低**于 45° 线的弯曲曲线。" } },
        { id: "b", text: { en: "**A curve that lies ON (or very close to) the 45° line.**", zh: "**正好落在(或接近)45° 线上的曲线。**" } },
        { id: "c", text: { en: "A curve that bows above the 45° line.", zh: "**高**于 45° 线的曲线。" } },
        { id: "d", text: { en: "A horizontal line.", zh: "水平线。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The 45° **line of equality** means the bottom N% of people receive exactly N% of income for every N. A Lorenz curve that coincides with it = **perfect equality** (Gini = 0). The further the curve **bows below** (option A), the greater the inequality (higher Gini). Option C is geometrically impossible for a legitimate Lorenz curve (it would imply the poor earn more than their share).",
        zh: "45° 线表示底 N% 人口正好拿 N% 收入(对任意 N)。洛伦兹曲线与之重合 = **完全平等**(Gini = 0)。曲线越向下凸(A),越不平等(Gini 越高)。C 对正常洛伦兹曲线几何不可能(意味着穷人拿到超过其人口比重的收入)。",
      },
    },
    {
      id: "q2",
      prompt: {
        en: "Country X has Gini = 0.25; Country Y has Gini = 0.50. Which statement is TRUE?",
        zh: "X 国 Gini = 0.25;Y 国 Gini = 0.50。下列哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "Country X has more inequality than Country Y.", zh: "X 比 Y 更不平等。" } },
        { id: "b", text: { en: "**Country Y has more inequality; its Lorenz curve bows further below the 45° line than X's.**", zh: "**Y 更不平等;Y 的洛伦兹曲线比 X 更远离 45° 线。**" } },
        { id: "c", text: { en: "Both are equally unequal.", zh: "两国不平等程度相同。" } },
        { id: "d", text: { en: "Gini values can't be compared across countries.", zh: "各国 Gini 无法比较。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Gini ranges from 0 (perfect equality) to 1 (one person has everything). **Higher Gini = more inequality**. 0.50 > 0.25, so Country Y is more unequal. Typical developed economies are around 0.30–0.45; many Latin American and Sub-Saharan countries fall above 0.50.",
        zh: "Gini 介于 0(完全平等)与 1(一人独占)之间。**Gini 越大越不平等**。0.50 > 0.25,故 Y 更不平等。发达国家多在 0.30~0.45;许多拉美与撒哈拉以南国家在 0.50 以上。",
      },
    },
    {
      id: "q3",
      prompt: {
        en: "A progressive income tax reduces the Gini coefficient but also creates deadweight loss. This illustrates:",
        zh: "累进所得税降低 Gini 但带来无谓损失。这体现了:",
      },
      choices: [
        { id: "a", text: { en: "That progressive taxes are always bad.", zh: "累进税总是有害。" } },
        { id: "b", text: { en: "**The equity–efficiency trade-off: redistribution reduces inequality (equity gain) but distorts work/save/invest decisions (efficiency cost).**", zh: "**公平-效率权衡:再分配降低不平等(公平收益)但扭曲劳动 / 储蓄 / 投资决策(效率代价)。**" } },
        { id: "c", text: { en: "That Gini is a meaningless statistic.", zh: "Gini 是无意义的统计量。" } },
        { id: "d", text: { en: "A market failure.", zh: "市场失灵。" } },
      ],
      answerId: "b",
      explanation: {
        en: "This is the classic **equity–efficiency trade-off**: almost every redistributive policy improves the distribution at some efficiency cost. Economics identifies the trade-off and measures its size; whether the trade is worth it is a **value judgment** outside economics. Choice A is too absolute — the trade-off says there's a cost, not that the cost outweighs the benefit. Choice D confuses redistribution with market failure — unequal market outcomes are not themselves a failure of efficiency.",
        zh: "这是经典**公平-效率权衡**:几乎所有再分配政策都以一定效率代价改善分配。经济学指出权衡并度量其大小;是否值得属于经济学之外的**价值判断**。选项 A 过于绝对——权衡说存在代价,并不意味代价超过收益。选项 D 混淆了再分配与市场失灵——不平等本身不是效率失灵。",
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

  "unit-3": [
    // ---- Production & Diminishing Returns (3) ----
    {
      id: "u3q01",
      figure: {
        kind: "table",
        caption: {
          en: "Production schedule for a small factory (capital fixed at 1 plant)",
          zh: "某小工厂生产表(资本固定,1 座厂房)",
        },
        columns: [
          { en: "Workers (L)", zh: "工人数(L)" },
          { en: "Total Product", zh: "总产量" },
        ],
        rows: [
          [{ en: "0", zh: "0" }, { en: "0", zh: "0" }],
          [{ en: "1", zh: "1" }, { en: "15", zh: "15" }],
          [{ en: "2", zh: "2" }, { en: "40", zh: "40" }],
          [{ en: "3", zh: "3" }, { en: "72", zh: "72" }],
          [{ en: "4", zh: "4" }, { en: "96", zh: "96" }],
          [{ en: "5", zh: "5" }, { en: "112", zh: "112" }],
          [{ en: "6", zh: "6" }, { en: "120", zh: "120" }],
        ],
      },
      prompt: {
        en: "Consider three claims: (I) MP₃ = 32. (II) AP₄ = 24. (III) Diminishing marginal returns begin with the **3rd** worker. Which are correct?",
        zh: "考虑三项陈述:(I)MP₃ = 32。(II)AP₄ = 24。(III)边际收益递减从**第 3 名**工人开始。哪些正确?",
      },
      choices: [
        { id: "a", text: { en: "I only", zh: "仅 I" } },
        { id: "b", text: { en: "I and II only", zh: "仅 I 和 II" } },
        { id: "c", text: { en: "II and III only", zh: "仅 II 和 III" } },
        { id: "d", text: { en: "All three", zh: "三项都对" } },
      ],
      answerId: "b",
      explanation: {
        en: "MP₃ = 72 − 40 = **32** ✓. AP₄ = 96/4 = **24** ✓. MPs are 15, 25, **32**, 24, 16, 8 — MP peaks at worker 3 and **falls starting with the 4th**, so diminishing MP begins at **L = 4**, not L = 3. III is a classic off-by-one trap.",
        zh: "MP₃ = 72 − 40 = **32** ✓。AP₄ = 96/4 = **24** ✓。MP 序列:15、25、**32**、24、16、8——MP 在第 3 名达到峰值,**从第 4 名开始下降**,因此边际递减始于 **L = 4**,而非 L = 3。III 是典型的 off-by-one 陷阱。",
      },
    },
    {
      id: "u3q02",
      prompt: {
        en: "A farm hires its 8th worker. Before hiring: AP = 20. After hiring: AP = 19. What can you conclude about the 8th worker's marginal product?",
        zh: "某农场雇用第 8 名工人。雇用前 AP = 20,雇用后 AP = 19。关于第 8 名工人的边际产量,能得出什么结论?",
      },
      choices: [
        { id: "a", text: { en: "MP₈ = 19 — the new AP equals the new worker's MP.", zh: "MP₈ = 19——新 AP 等于新工人的 MP。" } },
        { id: "b", text: { en: "MP₈ = 12 (since TP rose from 7 × 20 = 140 to 8 × 19 = 152).", zh: "MP₈ = 12(因为 TP 从 7 × 20 = 140 升到 8 × 19 = 152)。" } },
        { id: "c", text: { en: "MP₈ = −1 — the drop in AP.", zh: "MP₈ = −1——AP 的降幅。" } },
        { id: "d", text: { en: "MP₈ > AP₇ — otherwise AP couldn't have changed.", zh: "MP₈ > AP₇——否则 AP 无法变化。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Reconstruct TP: old TP = 7 × 20 = 140. New TP = 8 × 19 = 152. **MP₈ = 152 − 140 = 12**. Sanity check: MP₈ = 12 < AP₇ = 20, so AP falls — consistent with the marginal-pulls-average rule. Choice A incorrectly identifies MP with AP. Choice D is backward: AP falls precisely because MP < AP.",
        zh: "还原 TP:旧 TP = 7 × 20 = 140;新 TP = 8 × 19 = 152。**MP₈ = 152 − 140 = 12**。自检:MP₈ = 12 < AP₇ = 20,所以 AP 下降——符合边际拉平均的规律。选项 A 把 MP 与 AP 混同。选项 D 方向反了:AP 下降正因 MP < AP。",
      },
    },
    {
      id: "u3q03",
      prompt: {
        en: "Which pairing correctly matches a concept with the time horizon in which it operates?",
        zh: "以下哪项**正确**把概念与其所在的时间视角配对?",
      },
      choices: [
        { id: "a", text: { en: "Diminishing marginal returns — long run; Diseconomies of scale — short run.", zh: "边际收益递减——长期;规模不经济——短期。" } },
        { id: "b", text: { en: "**Diminishing marginal returns — short run**; **Diseconomies of scale — long run**.", zh: "**边际收益递减——短期**;**规模不经济——长期**。" } },
        { id: "c", text: { en: "Both are short-run concepts.", zh: "两者都属短期。" } },
        { id: "d", text: { en: "Both are long-run concepts.", zh: "两者都属长期。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Diminishing **marginal** returns requires a **fixed** input — a short-run condition. Diseconomies of **scale** assumes every input can vary and is driven by coordination/bureaucracy — a long-run phenomenon. Mixing the two is one of the most frequent AP errors on Unit 3.",
        zh: "**边际**收益递减需要**固定**投入——短期条件。**规模**不经济假设所有投入都可变,由协调/官僚驱动——长期现象。两者混淆是 AP 第 3 单元最常见的错误之一。",
      },
    },

    // ---- Short-Run Costs (3) ----
    {
      id: "u3q04",
      figure: {
        kind: "table",
        caption: {
          en: "Cost data at Q = 20",
          zh: "Q = 20 处的成本数据",
        },
        columns: [
          { en: "Metric", zh: "指标" },
          { en: "Value ($)", zh: "数值($)" },
        ],
        rows: [
          [{ en: "FC", zh: "FC" }, { en: "100", zh: "100" }],
          [{ en: "VC", zh: "VC" }, { en: "200", zh: "200" }],
          [{ en: "MC of 21st unit", zh: "第 21 单位 MC" }, { en: "12", zh: "12" }],
        ],
      },
      prompt: {
        en: "At Q = 21, what is the firm's **ATC**?",
        zh: "Q = 21 时,企业 **ATC** 是多少?",
      },
      choices: [
        { id: "a", text: { en: "$15 — unchanged from Q = 20.", zh: "$15——与 Q = 20 相同。" } },
        { id: "b", text: { en: "**$14.86** (rounded) — TC₂₁ = 300 + 12 = 312; 312 / 21 ≈ 14.857.", zh: "**约 $14.86**——TC₂₁ = 300 + 12 = 312;312 / 21 ≈ 14.857。" } },
        { id: "c", text: { en: "$12 — MC equals ATC.", zh: "$12——MC 等于 ATC。" } },
        { id: "d", text: { en: "$16 — MC adds directly to ATC.", zh: "$16——MC 直接加到 ATC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "At Q = 20: TC = 100 + 200 = $300; ATC = 300/20 = $15. Add the 21st unit's MC of $12: **TC₂₁ = 312**, so **ATC₂₁ = 312/21 ≈ $14.86**. ATC **fell** because MC ($12) was below old ATC ($15) — the marginal-pulls-average rule again.",
        zh: "Q = 20 时:TC = 100 + 200 = $300;ATC = 300/20 = $15。加上第 21 单位 MC = $12:**TC₂₁ = 312**,**ATC₂₁ = 312/21 ≈ $14.86**。ATC **下降**,因为 MC($12)低于原 ATC($15)——再次体现边际拉动平均的规律。",
      },
    },
    {
      id: "u3q05",
      prompt: {
        en: "A firm's **FC = $600**. When Q = 60, **AVC = $10** and **MC = $18**. Which statement must be TRUE?",
        zh: "企业 **FC = $600**。Q = 60 时 **AVC = $10**、**MC = $18**。下列哪项**必然**为真?",
      },
      choices: [
        { id: "a", text: { en: "ATC = $28 (simply add AVC + MC).", zh: "ATC = $28(AVC + MC)。" } },
        { id: "b", text: { en: "ATC = $20 (since AFC = 600/60 = $10, so ATC = AVC + AFC = 10 + 10).", zh: "ATC = $20(AFC = 600/60 = $10,ATC = AVC + AFC = 10 + 10)。" } },
        { id: "c", text: { en: "AVC must be at its minimum because MC > AVC.", zh: "AVC 必然处于最低点,因 MC > AVC。" } },
        { id: "d", text: { en: "Profit is positive at Q = 60 regardless of price.", zh: "不论价格,Q = 60 处都有正利润。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**ATC = AVC + AFC**. AFC = FC / Q = 600/60 = $10. So **ATC = 10 + 10 = $20**. MC is a marginal, not an average — adding it to AVC (choice A) has no meaning. Choice C is wrong: MC > AVC means AVC is still **rising** (past its minimum), not at its minimum.",
        zh: "**ATC = AVC + AFC**。AFC = FC / Q = 600/60 = $10。所以 **ATC = 10 + 10 = $20**。MC 是边际值,不是平均值——加到 AVC(选项 A)没有意义。选项 C 错:MC > AVC 说明 AVC 仍在**上升**(已过最低点),而非在最低点。",
      },
    },
    {
      id: "u3q06",
      prompt: {
        en: "A firm's **MC = $25** at Q = 40, with **MC rising**. At the same Q, **ATC = $30 and falling, AVC = $18 and rising**. Consider two claims: (I) Q = 40 is below both minimum ATC and minimum AVC. (II) Q = 40 is above minimum AVC but below minimum ATC. Which is correct?",
        zh: "某企业在 Q = 40 时 **MC = $25 且上升**;同一 Q 处 **ATC = $30 且下降,AVC = $18 且上升**。陈述:(I)Q = 40 位于 ATC 与 AVC 两条最低点之下。(II)Q = 40 在 AVC 最低点之上,但在 ATC 最低点之下。哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "I only", zh: "仅 I" } },
        { id: "b", text: { en: "**II only** — MC > AVC pulls AVC up (past its min); MC < ATC still lets ATC fall (before its min).", zh: "**仅 II**——MC > AVC 把 AVC 向上拉(已过最低点);MC < ATC 仍让 ATC 下降(未到最低点)。" } },
        { id: "c", text: { en: "Both I and II", zh: "两项都对" } },
        { id: "d", text: { en: "Neither — the scenario is impossible.", zh: "都不对——情境不可能" } },
      ],
      answerId: "b",
      explanation: {
        en: "Use the **marginal-pulls-average** rule on each curve separately. **AVC** is rising → MC > AVC → you are **past** AVC's minimum. **ATC** is falling → MC < ATC → you are **before** ATC's minimum. So Q = 40 sits **between** the two minima. The scenario is perfectly consistent: AVC's min usually occurs at a lower Q than ATC's min because AFC keeps pulling ATC down.",
        zh: "对每条曲线分别套**边际拉平均**:**AVC** 上升 → MC > AVC → 已**越过** AVC 最低点。**ATC** 下降 → MC < ATC → **尚未**到 ATC 最低点。因此 Q = 40 位于两最低点**之间**。情境完全自洽:AVC 最低通常在比 ATC 最低更小的 Q 处,因为 AFC 仍在向下拉动 ATC。",
      },
    },

    // ---- Long-Run Costs (3) ----
    {
      id: "u3q07",
      figure: {
        kind: "table",
        caption: {
          en: "Outputs at four different plant sizes with all inputs doubled",
          zh: "四种厂房规模、所有投入翻倍后的产出",
        },
        columns: [
          { en: "Plant", zh: "厂房" },
          { en: "Inputs (index)", zh: "投入(指数)" },
          { en: "Output", zh: "产出" },
        ],
        rows: [
          [{ en: "A → A'", zh: "A → A'" }, { en: "1 → 2", zh: "1 → 2" }, { en: "100 → 250", zh: "100 → 250" }],
          [{ en: "B → B'", zh: "B → B'" }, { en: "1 → 2", zh: "1 → 2" }, { en: "200 → 400", zh: "200 → 400" }],
          [{ en: "C → C'", zh: "C → C'" }, { en: "1 → 2", zh: "1 → 2" }, { en: "300 → 550", zh: "300 → 550" }],
        ],
      },
      prompt: {
        en: "Classify each plant's returns to scale.",
        zh: "判断每家厂房的规模报酬类型。",
      },
      choices: [
        { id: "a", text: { en: "A' increasing, B' constant, C' decreasing.", zh: "A' 递增、B' 不变、C' 递减。" } },
        { id: "b", text: { en: "All three constant (inputs doubled).", zh: "三家都不变(投入翻倍)。" } },
        { id: "c", text: { en: "All three increasing (outputs rose).", zh: "三家都递增(产出都上升)。" } },
        { id: "d", text: { en: "A' decreasing, B' constant, C' increasing.", zh: "A' 递减、B' 不变、C' 递增。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Ratio output / input: A': 250/100 = 2.5× (vs 2× input) → **increasing**. B': 400/200 = 2× = input factor → **constant**. C': 550/300 ≈ 1.83× (< 2×) → **decreasing**. Increasing returns to scale produces economies of scale (LRATC falls); decreasing returns to scale produces diseconomies (LRATC rises); constant returns to scale means LRATC is flat.",
        zh: "比率 产出/投入:A':250/100 = 2.5 倍(投入 2 倍)→ **递增**。B':400/200 = 2 倍 = 投入倍数 → **不变**。C':550/300 ≈ 1.83 倍(< 2 倍)→ **递减**。规模报酬递增 → 规模经济(LRATC 下降);递减 → 规模不经济(LRATC 上升);不变 → LRATC 平稳。",
      },
    },
    {
      id: "u3q08",
      prompt: {
        en: "In an industry where **MES is very large relative to market demand**, what market structure is most likely to emerge, and why?",
        zh: "若某行业的 **MES 相对于市场需求很大**,最有可能形成何种市场结构?原因是什么?",
      },
      choices: [
        { id: "a", text: { en: "Perfect competition, because small firms can imitate large firms.", zh: "完全竞争——小企业可以模仿大企业。" } },
        { id: "b", text: { en: "**Natural monopoly or very concentrated oligopoly** — only one or a few firms can reach MES, so rivals can't match their cost.", zh: "**自然垄断或高度集中的寡头**——只有极少数企业能达到 MES,其他企业在成本上无法匹敌。" } },
        { id: "c", text: { en: "Monopolistic competition, because MES drives product differentiation.", zh: "垄断竞争——MES 驱动差异化。" } },
        { id: "d", text: { en: "It depends only on whether the good is a necessity.", zh: "仅取决于商品是否为必需品。" } },
      ],
      answerId: "b",
      explanation: {
        en: "If MES is near or above total market demand, only one firm (or a handful) can operate at minimum LRATC. Smaller rivals have higher unit costs and are out-competed on price — **natural monopoly** (if MES ≥ demand) or **tight oligopoly** (if a couple of firms can fit). This is why utilities, railroads, and aircraft manufacturing are concentrated.",
        zh: "若 MES 接近或超过整个市场需求,只有一家(或极少数)企业能达到最低 LRATC。规模较小的对手单位成本更高,价格上打不过——形成**自然垄断**(MES ≥ 需求)或**高度集中的寡头**(能容下几家)。这是公用事业、铁路、飞机制造高度集中的原因。",
      },
    },
    {
      id: "u3q09",
      prompt: {
        en: "Which of the following scenarios describes **economies of scope** (not economies of scale)?",
        zh: "下列哪项描述的是**范围经济**(非规模经济)?",
      },
      choices: [
        { id: "a", text: { en: "A factory that produces 1M units has lower unit cost than one that produces 100k.", zh: "年产 100 万件的工厂单位成本低于年产 10 万件的工厂。" } },
        { id: "b", text: { en: "**A supermarket adding a pharmacy cuts total operating cost because shared rent, staff, and checkout systems spread across both lines.**", zh: "**超市开设药品柜,共享租金、员工与收银系统,使两条业务线总成本下降。**" } },
        { id: "c", text: { en: "A firm experiences lower LRATC as output doubles.", zh: "产量翻倍时 LRATC 下降。" } },
        { id: "d", text: { en: "A manufacturer buys inputs in bulk at a 10% discount.", zh: "厂商批量采购获 10% 折扣。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Economies of scale**: cost falls as output of a single product rises (A, C, D). **Economies of scope**: cost falls from producing **multiple products jointly** that share resources — exactly what the supermarket + pharmacy example describes. These are distinct efficiency concepts and AP often tests whether you can separate them.",
        zh: "**规模经济**:单一产品产量上升使单位成本下降(A、C、D)。**范围经济**:**同时生产多种**共享资源的产品使成本下降——正是超市加药品柜的例子。两者是不同的效率概念,AP 常考能否区分。",
      },
    },

    // ---- Profit Maximization (3) ----
    {
      id: "u3q10",
      figure: {
        kind: "table",
        caption: {
          en: "A firm's revenue & cost schedule (market price = $30)",
          zh: "企业收益与成本表(市场价 = $30)",
        },
        columns: [
          { en: "Q", zh: "Q" },
          { en: "TR", zh: "TR" },
          { en: "TC", zh: "TC" },
        ],
        rows: [
          [{ en: "0", zh: "0" }, { en: "0", zh: "0" }, { en: "40", zh: "40" }],
          [{ en: "1", zh: "1" }, { en: "30", zh: "30" }, { en: "60", zh: "60" }],
          [{ en: "2", zh: "2" }, { en: "60", zh: "60" }, { en: "75", zh: "75" }],
          [{ en: "3", zh: "3" }, { en: "90", zh: "90" }, { en: "95", zh: "95" }],
          [{ en: "4", zh: "4" }, { en: "120", zh: "120" }, { en: "120", zh: "120" }],
          [{ en: "5", zh: "5" }, { en: "150", zh: "150" }, { en: "160", zh: "160" }],
          [{ en: "6", zh: "6" }, { en: "180", zh: "180" }, { en: "215", zh: "215" }],
        ],
      },
      prompt: {
        en: "Identify the **profit-maximizing Q** and the firm's **maximum profit**.",
        zh: "找到**利润最大化 Q** 与**最大利润**。",
      },
      choices: [
        { id: "a", text: { en: "Q = 6; profit = $180.", zh: "Q = 6;利润 = $180。" } },
        { id: "b", text: { en: "**Q = 4; profit = $0** (MR = MC boundary). Wait — check Q = 3 which gives −$5 loss and Q = 4 which gives $0. Q = 4 is the last Q where MR ≥ MC.", zh: "**Q = 4;利润 = $0**(MR = MC 的边界)。但再看 Q = 3 亏 $5、Q = 4 为 $0——Q = 4 是 MR ≥ MC 的最后一个 Q。" } },
        { id: "c", text: { en: "Q = 3; profit = −$5 because profit is highest (least negative).", zh: "Q = 3;利润 = −$5(亏损最小)。" } },
        { id: "d", text: { en: "Q = 5; profit = −$10.", zh: "Q = 5;利润 = −$10。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Profit = TR − TC at each Q: −40, −30, −15, −5, **0**, −10, −35. The **maximum (least negative) profit is $0 at Q = 4**, achieved exactly at MR = MC = $30 (MC_Q₄ = 120 − 95 = 25 ≤ 30 ≤ 40 = MC_Q₅). Choice A ignores that TC rises faster than TR after Q = 4. Even a 'zero profit' firm should keep producing — zero **economic** profit still covers opportunity cost.",
        zh: "各 Q 的利润 = TR − TC:−40、−30、−15、−5、**0**、−10、−35。**最大(亏损最小)利润 $0 出现在 Q = 4**,正好对应 MR = MC = $30(MC_Q₄ = 120 − 95 = 25 ≤ 30 ≤ 40 = MC_Q₅)。选项 A 忽略了 Q = 4 之后 TC 增速快于 TR。即使利润为零企业也应生产——经济零利润仍然覆盖机会成本。",
      },
    },
    {
      id: "u3q11",
      prompt: {
        en: "At its profit-maximizing Q, a firm has **P = $12**, **AVC = $13**, and **ATC = $18**. The firm's fixed cost is $500. Which decision minimizes its loss?",
        zh: "在利润最大化 Q 处,企业 **P = $12**、**AVC = $13**、**ATC = $18**,固定成本 $500。哪一决策使亏损最小?",
      },
      choices: [
        { id: "a", text: { en: "Continue producing; the loss of $6 per unit is smaller than the FC loss.", zh: "继续生产;单位亏 $6 小于 FC 亏损。" } },
        { id: "b", text: { en: "**Shut down**; P < AVC, so each unit produced *adds* to the loss beyond the $500 FC.", zh: "**停业**;P < AVC,每生产一单位都会在 $500 FC 基础上**继续**增加亏损。" } },
        { id: "c", text: { en: "Continue producing; any production covers some fixed cost.", zh: "继续生产;任何产量都能覆盖部分 FC。" } },
        { id: "d", text: { en: "The firm is indifferent between producing and shutting down.", zh: "生产与停业无差异。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**P < AVC** → **shut down**. Each unit sold brings in $12 but variable cost alone is $13, so producing **adds** $1 × Q to the loss on top of the $500 FC. Shutting down limits the loss to **$500** (FC only). Choice A is the common mistake of using ATC for the shutdown decision — it's AVC that matters, because only variable cost can be avoided by producing zero.",
        zh: "**P < AVC** → **停业**。每生产一单位收入 $12,仅可变成本就是 $13,生产**额外**使亏损增加 $1 × Q,叠加在 $500 FC 之上。停业把亏损限制在 **$500**(仅 FC)。选项 A 是常见错误:停业决策用 AVC,而非 ATC——只有可变成本能靠不生产来省掉。",
      },
    },
    {
      id: "u3q12",
      prompt: {
        en: "A firm is producing at **MR = MC = $20**. Fixed cost rises by $200 due to a new property tax, while all other cost curves remain the same. Which statement is TRUE about the firm's **short-run** response?",
        zh: "某企业正在 **MR = MC = $20** 处生产。由于新房产税,固定成本上升 $200,其余所有成本曲线不变。关于**短期**反应,下列哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "The firm raises Q until new MR = new MC to recover the tax.", zh: "企业提高 Q,直至新 MR = 新 MC,以收回税款。" } },
        { id: "b", text: { en: "The firm cuts Q because ATC shifted up.", zh: "企业减产——因 ATC 上移。" } },
        { id: "c", text: { en: "**Q is unchanged** — FC does not affect MC, so the MR = MC condition is unchanged. Profit simply falls by $200.", zh: "**Q 不变**——FC 不影响 MC,MR = MC 条件不变,利润仅下降 $200。" } },
        { id: "d", text: { en: "The firm shuts down because higher FC always triggers shutdown.", zh: "企业立即停业——FC 上升必触发停业。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Fixed costs are **sunk** — they don't depend on Q, so they don't enter **MC**. The profit-max condition MR = MC is unchanged, so **Q is unchanged**. Profit simply drops by the lump-sum $200. Shutdown depends on **P vs AVC**, not on FC (D wrong). This is the clean way AP tests whether you can separate marginal from average/fixed thinking.",
        zh: "固定成本**沉没**——与 Q 无关,所以不进入 **MC**。利润最大化条件 MR = MC 不变,**Q 不变**。利润一次性下降 $200。停业取决于 **P 与 AVC** 的比较,与 FC 无关(D 错)。这是 AP 检验你能否分清边际与平均/固定的经典方式。",
      },
    },

    // ---- Perfect Competition (3) ----
    {
      id: "u3q13",
      figure: {
        kind: "table",
        caption: {
          en: "A perfectly competitive firm at Q = MR = MC",
          zh: "一家完全竞争企业在 Q = MR = MC 处",
        },
        columns: [
          { en: "Metric", zh: "指标" },
          { en: "Value", zh: "数值" },
        ],
        rows: [
          [{ en: "Market price P", zh: "市场价格 P" }, { en: "$24", zh: "$24" }],
          [{ en: "Quantity at MR = MC", zh: "MR = MC 的产量" }, { en: "300", zh: "300" }],
          [{ en: "ATC at that Q", zh: "该 Q 处的 ATC" }, { en: "$20", zh: "$20" }],
          [{ en: "AVC at that Q", zh: "该 Q 处的 AVC" }, { en: "$15", zh: "$15" }],
        ],
      },
      prompt: {
        en: "Compute **short-run economic profit** and predict the **long-run** change in market price.",
        zh: "计算**短期经济利润**,并预测**长期**市场价格变化。",
      },
      choices: [
        { id: "a", text: { en: "Profit = $1,200; LR price falls toward $20 as firms enter.", zh: "利润 = $1,200;长期企业进入使价格降至 $20。" } },
        { id: "b", text: { en: "Profit = $1,200; LR price rises because demand is high.", zh: "利润 = $1,200;需求强使长期价格上升。" } },
        { id: "c", text: { en: "Profit = $2,700 (P × Q − AVC × Q); price stays at $24.", zh: "利润 = $2,700(P × Q − AVC × Q);价格不变 $24。" } },
        { id: "d", text: { en: "Profit = $0 because perfectly competitive firms never profit.", zh: "利润 = $0——完全竞争企业从不盈利。" } },
      ],
      answerId: "a",
      explanation: {
        en: "**SR profit = (P − ATC) × Q = (24 − 20) × 300 = $1,200**. Because profit is positive, **entry** shifts market supply right until **P falls to min ATC = $20**, returning the industry to zero economic profit. Choice C subtracts AVC instead of ATC — that gives variable-cost contribution margin, not profit. Choice D conflates SR (profits possible) with LR (zero profit).",
        zh: "**短期利润 = (P − ATC) × Q = (24 − 20) × 300 = $1,200**。利润为正 → **进入**使市场供给右移,直到 **P 降至最低 ATC = $20**,行业回到零经济利润。选项 C 减去 AVC 而非 ATC——那是可变成本贡献,不是利润。选项 D 混淆短期(可有利润)与长期(零利润)。",
      },
    },
    {
      id: "u3q14",
      prompt: {
        en: "In a perfectly competitive industry at long-run equilibrium, the government imposes a **per-unit tax** on all firms. After full adjustment, what happens to the number of firms and each firm's output?",
        zh: "某完全竞争行业初始处于长期均衡。政府对所有企业征收**单位税**。完全调整后,企业数量与每家产量会如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Firms exit; each surviving firm produces at its new minimum ATC. Market supply shifts left, price rises.", zh: "部分企业退出;存活企业在新最低 ATC 处生产。市场供给左移,价格上升。" } },
        { id: "b", text: { en: "All firms stay; each produces more to cover the tax.", zh: "所有企业留下;每家多产以抵税。" } },
        { id: "c", text: { en: "Firms enter because prices rose.", zh: "企业进入——价格上升。" } },
        { id: "d", text: { en: "No change — a tax has no long-run effect on a perfectly competitive industry.", zh: "无变化——税在完全竞争行业无长期影响。" } },
      ],
      answerId: "a",
      explanation: {
        en: "Per-unit tax shifts each firm's **MC and ATC up by the tax**. At old P, firms earn **negative profit** → **exit**. Exit shifts market supply **left**, raising P until surviving firms earn zero profit again — at the **new minimum ATC**. Each surviving firm operates at its new (higher) min ATC. Thus: fewer firms, higher P, and per-firm Q adjusts to the new min-ATC point.",
        zh: "单位税使每家企业的 **MC 和 ATC 同时上移**。原 P 下企业**亏损** → **退出**。退出使市场供给**左移**,P 上升直到存活企业再次零利润——即**新最低 ATC**。每家存活企业在新(更高的)最低 ATC 处运营。结果:企业减少、P 上升,每家 Q 调整到新最低 ATC 点。",
      },
    },
    {
      id: "u3q15",
      prompt: {
        en: "A perfectly competitive firm reports: **P = $10, MR = $10, MC = $10, ATC = $9**. A student concludes: 'This firm is in long-run equilibrium because MR = MC.' Evaluate the claim.",
        zh: "某完全竞争企业的数据:**P = $10,MR = $10,MC = $10,ATC = $9**。学生结论:「MR = MC,所以处于长期均衡」。评价这一说法。",
      },
      choices: [
        { id: "a", text: { en: "Correct — MR = MC is the definition of long-run equilibrium.", zh: "正确——MR = MC 就是长期均衡的定义。" } },
        { id: "b", text: { en: "**Incorrect — MR = MC only determines the firm's profit-max Q. Long-run equilibrium also requires P = min ATC, but here P = $10 > ATC = $9, so the firm earns $1 per unit in economic profit. Entry will follow.**", zh: "**错误——MR = MC 只决定利润最大化 Q。长期均衡还要求 P = 最低 ATC,这里 P = $10 > ATC = $9,企业有 $1/单位经济利润,进入将发生。**" } },
        { id: "c", text: { en: "Incorrect — because P > ATC, the firm will exit.", zh: "错误——P > ATC,企业将退出。" } },
        { id: "d", text: { en: "Correct — MR = MC always implies zero profit in competitive markets.", zh: "正确——完全竞争下 MR = MC 总意味着零利润。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Long-run equilibrium has **two** conditions: (1) MR = MC (profit-max Q) AND (2) **P = minimum ATC** (zero economic profit). Here P = $10 exceeds ATC = $9, so the firm earns **$1 per unit** economic profit, which invites **entry** — not equilibrium. Choice C reverses the direction: P > ATC brings entry, not exit.",
        zh: "长期均衡需**同时**满足:(1)MR = MC(利润最大化 Q),(2)**P = 最低 ATC**(零经济利润)。这里 P = $10 > ATC = $9,企业获得 **$1/单位**经济利润,将吸引**进入**——不是均衡。选项 C 方向反了:P > ATC 引发进入,而非退出。",
      },
    },
  ],

  "unit-4": [
    // ---- Monopoly: Characteristics & Demand (3) ----
    {
      id: "u4q01",
      prompt: {
        en: "A monopolist faces linear demand **P = 100 − 2Q**. What is the formula for **MR**, and at what Q does **TR peak**?",
        zh: "某垄断者面对线性需求 **P = 100 − 2Q**。**MR** 的表达式是什么?**TR** 在什么 Q 处达到峰值?",
      },
      choices: [
        { id: "a", text: { en: "MR = 100 − 2Q (same as D); TR peaks at Q = 50.", zh: "MR = 100 − 2Q(与 D 相同);TR 在 Q = 50 达峰。" } },
        { id: "b", text: { en: "**MR = 100 − 4Q; TR peaks at Q = 25** (where MR = 0).", zh: "**MR = 100 − 4Q;TR 在 Q = 25 达峰**(MR = 0 处)。" } },
        { id: "c", text: { en: "MR = 50 − 2Q; TR peaks at Q = 25.", zh: "MR = 50 − 2Q;TR 在 Q = 25 达峰。" } },
        { id: "d", text: { en: "MR = 100; TR peaks when MR equals the price.", zh: "MR = 100;TR 在 MR = P 时达峰。" } },
      ],
      answerId: "b",
      explanation: {
        en: "For linear demand **P = a − bQ**, MR has the **same intercept a** and **double the slope 2b**: MR = a − 2bQ. Here a = 100, b = 2, so **MR = 100 − 4Q**. TR peaks where MR = 0 → 100 − 4Q = 0 → **Q = 25**. At Q = 25, P = 100 − 50 = $50, TR = 25 × 50 = $1,250 (maximum). Choice A confuses MR with D, a very common mistake.",
        zh: "对线性需求 **P = a − bQ**,MR 与 D **同截距 a**,**斜率为两倍 2b**:MR = a − 2bQ。此处 a = 100、b = 2,故 **MR = 100 − 4Q**。TR 在 MR = 0 处达峰 → 100 − 4Q = 0 → **Q = 25**。此时 P = $50,TR = $1,250。选项 A 混淆了 MR 与 D,是常见错误。",
      },
    },
    {
      id: "u4q02",
      figure: {
        kind: "table",
        caption: {
          en: "Four potential monopoly sources",
          zh: "四种潜在垄断来源",
        },
        columns: [
          { en: "Case", zh: "情形" },
          { en: "Description", zh: "描述" },
        ],
        rows: [
          [{ en: "I", zh: "I" }, { en: "A pharma firm holds a 20-year patent on a new drug.", zh: "一家药企持有新药 20 年专利。" }],
          [{ en: "II", zh: "II" }, { en: "An electricity utility has LRATC falling through the whole market.", zh: "一家电力公司 LRATC 在整个市场区间持续下降。" }],
          [{ en: "III", zh: "III" }, { en: "A farmer sells wheat in a market with thousands of identical farmers.", zh: "一位农民在数千名相同农民并存的市场中卖小麦。" }],
          [{ en: "IV", zh: "IV" }, { en: "A social network has 90% of users; new rivals lack the network effect.", zh: "某社交网络占 90% 用户;新对手缺乏网络效应。" }],
        ],
      },
      prompt: {
        en: "Which cases depict a **monopoly** (as opposed to some other market structure)?",
        zh: "以下哪些情形构成**垄断**(而非其他市场结构)?",
      },
      choices: [
        { id: "a", text: { en: "I and II only.", zh: "仅 I 和 II。" } },
        { id: "b", text: { en: "II and III only.", zh: "仅 II 和 III。" } },
        { id: "c", text: { en: "**I, II, and IV** (legal, natural, and network/strategic barriers).", zh: "**I、II、IV**(法律、自然、网络/战略壁垒)。" } },
        { id: "d", text: { en: "All four.", zh: "四项全部。" } },
      ],
      answerId: "c",
      explanation: {
        en: "I = **legal** monopoly (patent). II = **natural** monopoly (LRATC falling through demand). IV = **strategic / network-effect** monopoly. Case III describes **perfect competition**, not monopoly — many identical sellers, standardized product. The point: monopolies arise from distinct types of barriers, but all require one seller with no close substitutes.",
        zh: "I = **法律**垄断(专利);II = **自然**垄断(LRATC 在需求区间下降);IV = **战略 / 网络效应**垄断。III 描述的是**完全竞争**——同质产品、许多相同卖家。要点:垄断可源于不同壁垒,但共同要求是一家卖家 + 无相近替代。",
      },
    },
    {
      id: "u4q03",
      prompt: {
        en: "For any profit-maximizing monopolist, at the chosen Q*, the **price elasticity of demand** must satisfy:",
        zh: "对任一追求利润最大化的垄断者,在所选 Q* 处,需求的**价格弹性**必然满足:",
      },
      choices: [
        { id: "a", text: { en: "|E| < 1 (inelastic region).", zh: "|E| < 1(缺乏弹性段)。" } },
        { id: "b", text: { en: "**|E| > 1 (elastic region) — otherwise MR < 0 would exceed MC = 0 impossible; and cutting Q would raise both TR and lower TC.**", zh: "**|E| > 1(富有弹性段)——否则 MR < 0,不可能等于 MC ≥ 0;且减产能同时提高 TR、降低 TC。**" } },
        { id: "c", text: { en: "|E| = 1 exactly.", zh: "|E| 恰好 = 1。" } },
        { id: "d", text: { en: "|E| depends only on the shape of MC, not D.", zh: "|E| 只取决于 MC 形状,与 D 无关。" } },
      ],
      answerId: "b",
      explanation: {
        en: "For linear D, MR > 0 ⇔ elastic (|E| > 1); MR = 0 ⇔ unit elastic (|E| = 1); MR < 0 ⇔ inelastic. Profit-max requires MR = MC; since MC ≥ 0, it's impossible to have MR < 0 at the optimum — so the firm **never** operates in the inelastic region. Additionally: if the firm were in the inelastic region, cutting Q would **raise** P and TR while lowering TC — strictly dominating the current choice. So Q* is always on the **elastic** segment of D.",
        zh: "线性 D 下:MR > 0 ⇔ 富有弹性(|E| > 1);MR = 0 ⇔ 单位弹性;MR < 0 ⇔ 缺乏弹性。利润最大化要求 MR = MC;由于 MC ≥ 0,最优不可能在 MR < 0 处——所以垄断者**绝不**在缺乏弹性段生产。此外,缺乏弹性段时减产可同时**提高** P 与 TR、**降低** TC,严格优于当前选择。所以 Q* 恒在 D 的**富有弹性**段。",
      },
    },

    // ---- Monopoly Profit Max & Efficiency (3) ----
    {
      id: "u4q04",
      prompt: {
        en: "A monopolist has **D: P = 80 − 2Q** and constant **MC = 20**. Compute **Q_m (monopoly quantity), P_m (monopoly price)**, and the **deadweight loss** (compared to perfect competition).",
        zh: "某垄断者面对 **D: P = 80 − 2Q**,**MC = 20**(常数)。求**垄断产量 Q_m、垄断价格 P_m、无谓损失**(相对完全竞争)。",
      },
      choices: [
        { id: "a", text: { en: "Q_m = 30, P_m = 20, DWL = 0.", zh: "Q_m = 30,P_m = 20,DWL = 0。" } },
        { id: "b", text: { en: "**Q_m = 15, P_m = 50, DWL = ½ × 15 × 30 = 225.**", zh: "**Q_m = 15,P_m = 50,DWL = ½ × 15 × 30 = 225。**" } },
        { id: "c", text: { en: "Q_m = 15, P_m = 20, DWL = 450.", zh: "Q_m = 15,P_m = 20,DWL = 450。" } },
        { id: "d", text: { en: "Q_m = 30, P_m = 50, DWL = 0 (always).", zh: "Q_m = 30,P_m = 50,DWL = 0(恒)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MR = 80 − 4Q. Set MR = MC: 80 − 4Q = 20 → **Q_m = 15**. Price off D: P_m = 80 − 2×15 = **$50**. Perfect-competition Q: D = MC → 80 − 2Q = 20 → Q_pc = 30. **DWL** = area of the triangle between D and MC from Q_m = 15 to Q_pc = 30. Base = 30 − 15 = 15; height = P_m − MC = 50 − 20 = 30; **DWL = ½ × 15 × 30 = $225**. Choice A wrongly applies the PC rule (P = MC) to a monopolist.",
        zh: "MR = 80 − 4Q。令 MR = MC:80 − 4Q = 20 → **Q_m = 15**。从 D 读 P_m = 80 − 2×15 = **$50**。完全竞争 Q:D = MC → Q_pc = 30。**DWL** = Q_m = 15 到 Q_pc = 30 之间 D 与 MC 夹的三角形。底 = 15,高 = 50 − 20 = 30,**DWL = ½ × 15 × 30 = $225**。选项 A 误把 PC 规则(P = MC)套用于垄断者。",
      },
    },
    {
      id: "u4q05",
      prompt: {
        en: "A monopolist currently produces Q = 40 with **P = $30, ATC = $25, MR = $12, MC = $18**. What should the firm do to increase profit, and what will happen to P?",
        zh: "某垄断者当前 Q = 40,**P = $30,ATC = $25,MR = $12,MC = $18**。应如何调整以提高利润?P 如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Expand Q to push MR up toward MC; P will fall (moving down D).", zh: "增产使 MR 向 MC 靠拢;P 沿 D 下移。" } },
        { id: "b", text: { en: "**Cut Q — since MR < MC, the last unit lost money; as Q falls, move UP the D curve so P RISES.**", zh: "**减产——MR < MC,最后一单位亏损;Q 下降后,沿 D 向上移,P **上升**。**" } },
        { id: "c", text: { en: "Keep Q unchanged because P > ATC (already profitable).", zh: "保持 Q 不变——P > ATC(已盈利)。" } },
        { id: "d", text: { en: "Shut down — P < ATC.", zh: "停业——P < ATC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MR ($12) < MC ($18) → the last unit produced **lost $6** compared to not producing it. Cut Q. As the monopolist moves UP D (Q falls), **P rises**, MR rises, MC falls — all three effects push profit up until MR = MC. Choice A is backward. Choice C mixes up the **decision variable**: P > ATC says profit is already positive, but doesn't say it's maximized — MR = MC does.",
        zh: "MR($12)< MC($18)→ 最后一单位相对于不生产**亏了 $6**,应减产。Q 下降时沿 D 向上移,**P 上升**、MR 上升、MC 下降——三效合力推高利润,直至 MR = MC。选项 A 方向反了。选项 C 混淆了**决策变量**:P > ATC 说明已盈利,但未必最大——最大的条件是 MR = MC。",
      },
    },
    {
      id: "u4q06",
      prompt: {
        en: "A regulator imposes **average-cost (fair-return) pricing** on a natural monopoly. Compared to the unregulated monopoly outcome, what happens to Q, P, and deadweight loss?",
        zh: "监管机构对某自然垄断实施**平均成本(公平收益)定价**。相比未受管制的垄断结果,Q、P、DWL 如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Q rises, P falls, DWL falls to zero.", zh: "Q 上升、P 下降、DWL 降为零。" } },
        { id: "b", text: { en: "**Q rises, P falls, DWL falls but is NOT zero (because P is still above MC).**", zh: "**Q 上升、P 下降、DWL 缩小但**不为零**(P 仍 > MC)。**" } },
        { id: "c", text: { en: "Q falls, P rises, DWL rises.", zh: "Q 下降、P 上升、DWL 上升。" } },
        { id: "d", text: { en: "Q unchanged; only profits change.", zh: "Q 不变;只有利润变化。" } },
      ],
      answerId: "b",
      explanation: {
        en: "P = ATC sits **below** unregulated P_m (since P_m > ATC_m means profit) but **above MC** (for a falling-ATC natural monopoly, ATC > MC). So Q rises (further along D) and P falls — shrinking DWL — but since P > MC some DWL remains. Only P = MC (the socially optimal rule) eliminates DWL, but that requires a subsidy because P would be below ATC. This is the textbook fair-return vs. socially-optimal tradeoff.",
        zh: "P = ATC 位于未管制 P_m **之下**(因为 P_m > ATC_m 才能盈利)但**仍高于 MC**(自然垄断 LRATC 下降段 ATC > MC)。Q 上升(沿 D 向右)、P 下降 → DWL 缩小;但 P > MC,DWL 非零。只有 P = MC(社会最优)能消除 DWL,但需补贴(P < ATC)。这是教材中的「公平收益 vs. 社会最优」权衡。",
      },
    },

    // ---- Price Discrimination (3) ----
    {
      id: "u4q07",
      prompt: {
        en: "Compared to single-price monopoly of the **same** product with the **same** demand and MC, **perfect (1st-degree) price discrimination** produces:",
        zh: "相比同一产品、同一需求与 MC 下的**单一价格**垄断,**完全(一级)价格歧视**带来:",
      },
      choices: [
        { id: "a", text: { en: "Lower Q, higher DWL, lower PS.", zh: "更低 Q、更高 DWL、更低 PS。" } },
        { id: "b", text: { en: "Same Q, same DWL, same CS + PS split.", zh: "相同 Q、相同 DWL、相同 CS + PS 比例。" } },
        { id: "c", text: { en: "**Higher Q (= perfect-competition Q), DWL = 0, but CS transferred entirely to PS.**", zh: "**更高 Q(= 完全竞争 Q)、DWL = 0,但 CS 全部转给 PS。**" } },
        { id: "d", text: { en: "Lower price for every consumer.", zh: "每位消费者都付更低价格。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Under perfect PD, the monopolist charges each buyer their reservation price → MR = D → MR = MC sets Q at the **efficient level** (same as PC). DWL = 0. But every buyer pays exactly their willingness to pay, so **CS = 0** — all surplus goes to the firm. Efficiency is achieved, but **distribution** is extremely unequal. Choice D is a common misread — buyers with high WTP pay MORE than they would under single pricing, not less.",
        zh: "完全 PD 下,垄断者对每位买家收其保留价格 → MR = D → MR = MC 得到**有效**的 Q(与 PC 相同)。DWL = 0。但每位买家正好付其支付意愿,**CS = 0**——所有剩余归企业。效率实现,但**分配**极不均。选项 D 是常见误读——支付意愿高的买家反而比单一价格时付**更多**,而非更少。",
      },
    },
    {
      id: "u4q08",
      prompt: {
        en: "Which of the following business practices is **NOT** an example of price discrimination?",
        zh: "下列哪项**不是**价格歧视的例子?",
      },
      choices: [
        { id: "a", text: { en: "Airlines charging more for last-minute bookings than early bookings.", zh: "航司对临近起飞的订票收更高价。" } },
        { id: "b", text: { en: "Theaters offering student and senior discounts.", zh: "影院提供学生票和老年票。" } },
        { id: "c", text: { en: "**A gas station raising its price from $3.00 to $3.50 for all customers during a hurricane.**", zh: "**飓风期间某加油站对所有顾客把价格从 $3.00 提到 $3.50。**" } },
        { id: "d", text: { en: "Software companies charging enterprise customers more per license than individuals.", zh: "软件公司对企业客户每席位收费高于个人。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Price discrimination means charging **different prices** to **different buyers** (or buyer segments) for the **same good**. A, B, D all fit. Choice C is a **single price change for all customers** — it's a supply/demand shock, not PD. Mislabeling uniform price hikes as discrimination is a common news-media error; the economics test wants precision: different price for different buyers, same good.",
        zh: "价格歧视指对**同一商品**向**不同买家**(或群体)收**不同价格**。A、B、D 都符合。选项 C 是**对所有顾客的一次统一涨价**——那是供需冲击,不是 PD。媒体常把统一涨价误称为「歧视」;经济学考试看的是精确定义:同一商品、不同买家、不同价格。",
      },
    },
    {
      id: "u4q09",
      prompt: {
        en: "A software firm offers its enterprise plan at $200/seat/month to businesses, but charges only $10/month to individual students for the same software. Assuming this scheme is profitable, which of the following must be TRUE?",
        zh: "某软件公司对企业按 $200/席/月收费,对学生同样软件只收 $10/月。假设该定价方案有利可图,下列哪项必然成立?",
      },
      choices: [
        { id: "a", text: { en: "Students have MORE inelastic demand than enterprises.", zh: "学生比企业需求更缺乏弹性。" } },
        { id: "b", text: { en: "**Resale from students to enterprises is effectively blocked (e.g., student licenses verified with .edu email and non-transferable), and students' demand is more elastic than enterprises'.**", zh: "**学生向企业的转售被有效阻止(如 .edu 邮箱验证、不可转让许可),且学生需求比企业更富弹性。**" } },
        { id: "c", text: { en: "The firm charges each customer exactly their reservation price.", zh: "企业对每位客户收其保留价格。" } },
        { id: "d", text: { en: "Students pay more than enterprises do.", zh: "学生付得比企业多。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Two conditions must hold for this 3rd-degree PD to work: **(1) no resale** (otherwise one student could buy 100 licenses and resell to enterprises at $100/seat, undercutting the enterprise plan). (2) **Different elasticities** — students are more price-sensitive (cheap alternatives, lower budget), so the firm charges them less; enterprises are inelastic (productivity tool, established budget), so they bear the high price. Choice C describes perfect (1st-degree) PD, which is not what's happening here.",
        zh: "该三级 PD 要可行需同时满足:(1)**无法转卖**(否则学生买 100 席可 $100/席倒卖给企业,挤垮企业版);(2)**弹性不同**——学生对价格敏感(替代品多、预算低)故低价,企业缺乏弹性(生产工具、预算充足)故高价。选项 C 描述完全(一级)PD,不是这里的情形。",
      },
    },

    // ---- Monopolistic Competition (3) ----
    {
      id: "u4q10",
      prompt: {
        en: "A monopolistically competitive industry is in **long-run equilibrium**. Which pair of statements is TRUE?",
        zh: "某垄断竞争行业处于**长期均衡**。下列哪对陈述正确?",
      },
      choices: [
        { id: "a", text: { en: "P = MC and P > ATC.", zh: "P = MC 且 P > ATC。" } },
        { id: "b", text: { en: "**P > MC and P = ATC (but not minimum ATC — there's excess capacity).**", zh: "**P > MC 且 P = ATC(但不是**最低** ATC——存在过剩产能)。**" } },
        { id: "c", text: { en: "P = MR = MC = minimum ATC (like perfect competition).", zh: "P = MR = MC = 最低 ATC(与完全竞争相同)。" } },
        { id: "d", text: { en: "P = ATC = minimum ATC; firms are fully efficient.", zh: "P = ATC = 最低 ATC;企业完全有效率。" } },
      ],
      answerId: "b",
      explanation: {
        en: "LR entry/exit drives economic profit to zero → **P = ATC** at chosen Q. But D is downward-sloping, so MR < P, giving MR = MC < P → **P > MC**. The tangency between D and ATC sits on the **downward-sloping** part of ATC, so the chosen Q is **below** the one that minimizes ATC — **excess capacity**. Choice C is the perfect-competition outcome, not monopolistic competition.",
        zh: "长期进出把经济利润压到零 → 所选 Q 处 **P = ATC**。但 D 下倾,MR < P,故 MR = MC < P → **P > MC**。D 与 ATC 的切点位于 ATC **下降段**,所选 Q **低于**最低 ATC 对应的 Q——**过剩产能**。选项 C 是完全竞争结果,不是垄断竞争。",
      },
    },
    {
      id: "u4q11",
      prompt: {
        en: "A monopolistically competitive restaurant currently has **P = $25, ATC = $20, MR = MC = $15**. Describe the short-run outcome and predict what happens to THIS firm's demand curve in the long run.",
        zh: "某垄断竞争餐厅当前 **P = $25,ATC = $20,MR = MC = $15**。描述短期结果,并预测**该餐厅**长期需求曲线的变化。",
      },
      choices: [
        { id: "a", text: { en: "SR: loss; LR: demand shifts right.", zh: "短期亏损;长期需求右移。" } },
        { id: "b", text: { en: "**SR: profit = $5/meal; LR: rival restaurants enter → this firm's demand shifts LEFT and becomes MORE elastic.**", zh: "**短期每餐利润 $5;长期对手进入 → 该餐厅需求**左移**且更富弹性。**" } },
        { id: "c", text: { en: "SR: profit; LR: demand shifts right as word spreads.", zh: "短期盈利;长期口碑使需求右移。" } },
        { id: "d", text: { en: "SR: breakeven; no LR change.", zh: "短期保本;长期无变化。" } },
      ],
      answerId: "b",
      explanation: {
        en: "P ($25) > ATC ($20) → **SR profit of $5/meal**. Since entry barriers are low, new differentiated restaurants **enter**, stealing customers from the incumbent. The incumbent's **demand shifts left** (fewer customers at every price) and **becomes more elastic** (closer substitutes now available). Entry continues until demand is **tangent** to ATC at MR = MC. Choice C is tempting but misses the market-structure logic — in an industry with free entry, firm-level demand shrinks, not grows, when others imitate.",
        zh: "P($25)> ATC($20)→ **短期每餐利润 $5**。由于进入壁垒低,新差异化餐厅**进入**,抢走客户。该餐厅**需求左移**(各价格下客户减少)且**更富弹性**(可替代品更多)。进入持续到 D **切于** ATC(在 MR = MC 的 Q)。选项 C 看似合理,但忽视了市场结构逻辑——自由进入的行业中,对手模仿会缩小(而非扩大)个体企业需求。",
      },
    },
    {
      id: "u4q12",
      prompt: {
        en: "Which statement about **excess capacity** in monopolistic competition is TRUE?",
        zh: "关于垄断竞争中的**过剩产能**,哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "It means firms hold unsold inventory that they cannot sell.", zh: "指企业持有卖不掉的库存。" } },
        { id: "b", text: { en: "**It means firms produce BELOW the Q that would minimize ATC — so ATC is above its potential minimum. The 'wasted' capacity pays for product variety.**", zh: "**指企业产量**低于**使 ATC 最小化的 Q——因此 ATC 高于其潜在最低。「被浪费」的产能换来产品多样性。**" } },
        { id: "c", text: { en: "It disappears in the long run once firms exit.", zh: "长期中企业退出后就消失。" } },
        { id: "d", text: { en: "It is identical to deadweight loss.", zh: "与无谓损失等同。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Excess capacity** = the difference between the LR Q (at tangency of D to ATC, on ATC's downward-sloping part) and the Q that minimizes ATC. The firm could produce more at a lower unit cost, but doing so would push price below ATC and erase profit. This is a productive inefficiency — the 'price' society pays for **product variety** in monopolistic competition. It is a distinct concept from DWL (which is allocative inefficiency, P > MC).",
        zh: "**过剩产能** = 长期 Q(D 与 ATC 切点,位于 ATC 下降段)与使 ATC 最小化的 Q 之差。企业本可多产以降低单位成本,但这样做会把 P 压到 ATC 以下,利润归零。这是**生产低效**——为换取垄断竞争的**产品多样性**所付的代价。它与 DWL(配置低效,P > MC)是不同概念。",
      },
    },

    // ---- Oligopoly & Game Theory (3) ----
    {
      id: "u4q13",
      figure: {
        kind: "table",
        caption: {
          en: "Duopoly payoff matrix (firm A's profit, firm B's profit) in $M",
          zh: "双寡头收益矩阵(A 利润,B 利润)单位 $M",
        },
        columns: [
          { en: "", zh: "" },
          { en: "B: Enter", zh: "B:进入" },
          { en: "B: Stay out", zh: "B:不进入" },
        ],
        rows: [
          [{ en: "**A: Fight**", zh: "**A:对抗**" }, { en: "(−2, −2)", zh: "(−2, −2)" }, { en: "(5, 0)", zh: "(5, 0)" }],
          [{ en: "**A: Accommodate**", zh: "**A:妥协**" }, { en: "(3, 3)", zh: "(3, 3)" }, { en: "(7, 0)", zh: "(7, 0)" }],
        ],
      },
      prompt: {
        en: "Does A have a dominant strategy? What is (are) the Nash equilibrium(a)?",
        zh: "A 是否有占优策略?纳什均衡是什么(可能不止一个)?",
      },
      choices: [
        { id: "a", text: { en: "A's dominant strategy is Fight; unique NE = (Fight, Enter) = (−2, −2).", zh: "A 占优策略为对抗;唯一 NE = (对抗, 进入) = (−2, −2)。" } },
        { id: "b", text: { en: "**A's dominant strategy is Accommodate (3 > −2 and 7 > 5); NE = (Accommodate, Enter) = (3, 3).**", zh: "**A 占优策略为妥协(3 > −2 且 7 > 5);NE = (妥协, 进入) = (3, 3)。**" } },
        { id: "c", text: { en: "Neither firm has a dominant strategy; no NE exists.", zh: "两家都无占优策略;无 NE。" } },
        { id: "d", text: { en: "Two NE: (Fight, Stay out) and (Accommodate, Enter).", zh: "两个 NE:(对抗, 不进入) 与 (妥协, 进入)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Check A: if B enters → Fight gets −2, Accommodate gets 3 → **Accommodate better**. If B stays out → Fight gets 5, Accommodate gets 7 → **Accommodate better**. So A's dominant strategy is **Accommodate**. Given A accommodates, B compares 3 (Enter) vs. 0 (Stay out) → B enters. **NE = (Accommodate, Enter) = (3, 3)**. This models why 'fighting' threats are often **not credible** — rational incumbents back down rather than burn money on a price war.",
        zh: "查 A:B 进入时 → 对抗得 −2,妥协得 3 → **妥协更优**;B 不进入时 → 对抗得 5,妥协得 7 → **妥协更优**。故 A 占优策略为**妥协**。给定 A 妥协,B 比较 3(进入)vs. 0(不进入)→ 进入。**NE = (妥协, 进入) = (3, 3)**。这解释了为何「对抗」威胁常**不可信**——理性在位者宁肯妥协,也不愿打一场烧钱的价格战。",
      },
    },
    {
      id: "u4q14",
      figure: {
        kind: "table",
        caption: {
          en: "Payoff matrix — (Firm A, Firm B)",
          zh: "收益矩阵——(A, B)",
        },
        columns: [
          { en: "", zh: "" },
          { en: "B: Cooperate", zh: "B:合作" },
          { en: "B: Cheat", zh: "B:欺骗" },
        ],
        rows: [
          [{ en: "**A: Cooperate**", zh: "**A:合作**" }, { en: "(20, 20)", zh: "(20, 20)" }, { en: "(5, 25)", zh: "(5, 25)" }],
          [{ en: "**A: Cheat**", zh: "**A:欺骗**" }, { en: "(25, 5)", zh: "(25, 5)" }, { en: "(10, 10)", zh: "(10, 10)" }],
        ],
      },
      prompt: {
        en: "Three claims: (I) Both firms have dominant strategy 'Cheat.' (II) The cooperative outcome (20, 20) is a Nash equilibrium. (III) This is a prisoner's dilemma. Which are correct?",
        zh: "三项陈述:(I) 双方占优策略均为「欺骗」;(II) 合作结果 (20, 20) 是纳什均衡;(III) 这是囚徒困境。哪些正确?",
      },
      choices: [
        { id: "a", text: { en: "I and II only.", zh: "仅 I 和 II。" } },
        { id: "b", text: { en: "**I and III only** — (20, 20) is NOT an NE because each firm can deviate to earn 25.", zh: "**仅 I 和 III**——(20, 20) **不是** NE,因为任一方可偏离到 25。" } },
        { id: "c", text: { en: "II and III only.", zh: "仅 II 和 III。" } },
        { id: "d", text: { en: "All three.", zh: "三项全对。" } },
      ],
      answerId: "b",
      explanation: {
        en: "(I) True: check A — if B cooperates: Cheat 25 > Cooperate 20. If B cheats: Cheat 10 > Cooperate 5. Dominant = Cheat. (III) True: the classic feature is that the dominant-strategy outcome (Cheat, Cheat) = (10, 10) is worse for **both** than (Cooperate, Cooperate) = (20, 20). (II) **False**: at (20, 20), each firm could deviate to Cheat and earn 25 — so cooperation is NOT a Nash equilibrium. The unique NE is (Cheat, Cheat) = (10, 10). This is why 'it would be better if we both cooperated' is rarely enough to sustain cooperation.",
        zh: "(I) 对:查 A——B 合作时,欺骗 25 > 合作 20;B 欺骗时,欺骗 10 > 合作 5。占优 = 欺骗。(III) 对:囚徒困境的特征正是占优结果 (欺骗, 欺骗) = (10, 10) 对**双方**都比 (合作, 合作) = (20, 20) 差。(II) **错**:在 (20, 20),任一方单独偏离到欺骗可得 25——故合作**不是** NE。唯一 NE 是 (欺骗, 欺骗) = (10, 10)。这也说明「大家合作更好」不足以维持合作。",
      },
    },
    {
      id: "u4q15",
      prompt: {
        en: "An oligopoly cartel agrees to restrict output and raise price to the monopoly level. Which outcome is **most consistent** with game theory predictions?",
        zh: "某寡头卡特尔约定限产抬价至垄断水平。下列哪项**最符合**博弈论预测?",
      },
      choices: [
        { id: "a", text: { en: "All firms permanently honor the agreement because cooperation is a dominant strategy.", zh: "所有企业都会长期遵守——合作是占优策略。" } },
        { id: "b", text: { en: "**Members have an incentive to secretly cheat by producing above quota; cartels tend to collapse unless rigorously enforced.**", zh: "**成员有动机秘密超配额;若无严格执法,卡特尔容易瓦解。**" } },
        { id: "c", text: { en: "The cartel always produces more than a monopoly would.", zh: "卡特尔永远比垄断多产。" } },
        { id: "d", text: { en: "Price always falls to the competitive level immediately.", zh: "价格立即降至竞争水平。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Cartel cooperation is **not a Nash equilibrium**: at the cooperative output, each firm can earn **more** by expanding secretly while rivals hold quotas. With weak enforcement (which real cartels usually have) members cheat, output rises, price falls — the cartel collapses toward the non-cooperative outcome. This is why OPEC has historically struggled to hold quota discipline, and why antitrust law focuses on detecting cheating's opposite: collusion among firms that **would** cheat if they could.",
        zh: "卡特尔合作**不是纳什均衡**:在合作产量,任一方都可通过偷偷扩产(对方守约)获**更高**利润。执法乏力(现实卡特尔常如此)时,成员欺骗、产量上升、价格下跌——向非合作结果瓦解。这正是 OPEC 长期难以维系配额纪律的原因,也是反垄断法关注合谋的根本(揭露的正是那些「若可欺骗就会欺骗」的企业间合谋)。",
      },
    },
  ],

  "unit-5": [
    // ---- Derived Demand & MRP (3) ----
    {
      id: "u5q01",
      figure: {
        kind: "table",
        caption: {
          en: "Firm production table; output price P = $10",
          zh: "某企业生产表;产品价格 P = $10",
        },
        columns: [
          { en: "L", zh: "L" },
          { en: "TP", zh: "TP" },
        ],
        rows: [
          [{ en: "1", zh: "1" }, { en: "14", zh: "14" }],
          [{ en: "2", zh: "2" }, { en: "26", zh: "26" }],
          [{ en: "3", zh: "3" }, { en: "36", zh: "36" }],
          [{ en: "4", zh: "4" }, { en: "44", zh: "44" }],
          [{ en: "5", zh: "5" }, { en: "50", zh: "50" }],
        ],
      },
      prompt: {
        en: "Three claims: (I) MRP₃ = $100. (II) MRP falls from L=1 to L=5. (III) The firm is a price-taker in its output market. Which are supported?",
        zh: "三项陈述:(I) MRP₃ = $100;(II) MRP 从 L=1 到 L=5 下降;(III) 企业在产品市场是价格接受者。哪些成立?",
      },
      choices: [
        { id: "a", text: { en: "I only.", zh: "仅 I。" } },
        { id: "b", text: { en: "II only.", zh: "仅 II。" } },
        { id: "c", text: { en: "**All three** — MP values are 14, 12, 10, 8, 6 (decreasing); MRP = MP × $10 uses fixed P, which requires price-taking; MRP₃ = 10 × $10 = $100.", zh: "**三项全对**——MP 为 14、12、10、8、6(递减);MRP = MP × $10 用固定 P,需价格接受;MRP₃ = 10 × $10 = $100。" } },
        { id: "d", text: { en: "I and III only.", zh: "仅 I 和 III。" } },
      ],
      answerId: "c",
      explanation: {
        en: "MP: 14, 12, **10**, 8, 6. Using MRP = MP × P (valid because of price-taking): MRP₁=$140, MRP₂=$120, **MRP₃=$100**, MRP₄=$80, MRP₅=$60 — strictly decreasing. All three claims hold. (II) is ensured by diminishing returns. (III) is the only way MR = P, so using P in the MRP formula is valid.",
        zh: "MP:14、12、**10**、8、6。用 MRP = MP × P(因价格接受):MRP₁=$140,MRP₂=$120,**MRP₃=$100**,MRP₄=$80,MRP₅=$60——严格递减。三项全成立。(II) 由边际递减保证;(III) 是 MR = P 成立的前提,所以在 MRP 公式中用 P 才合法。",
      },
    },
    {
      id: "u5q02",
      prompt: {
        en: "Two firms use identical workers with identical MP schedules. Firm A sells in a perfectly competitive output market at P = $20. Firm B is a monopolist charging P = $40 but with MR = $20 at its current Q. Which statement is TRUE about the two firms' labor demand (MRP)?",
        zh: "两家企业雇用的工人 MP 相同。A 在产品市场完全竞争,P = $20;B 是垄断者,当前 Q 处 P = $40 但 MR = $20。关于两家对劳动的需求(MRP),下列哪项正确?",
      },
      choices: [
        { id: "a", text: { en: "B has higher MRP because its price is higher.", zh: "B 的 MRP 更高——因价格更高。" } },
        { id: "b", text: { en: "**They have the SAME MRP at this Q: A uses MRP = MP × $20 and B uses MRP = MP × MR = MP × $20. Equal.**", zh: "**同 Q 处两家 MRP**相同**:A 用 MRP = MP × $20,B 用 MRP = MP × MR = MP × $20,相等。**" } },
        { id: "c", text: { en: "A has higher MRP because it is more competitive.", zh: "A 的 MRP 更高——竞争性更强。" } },
        { id: "d", text: { en: "B has zero MRP because it is a price-maker.", zh: "B 的 MRP = 0——因为它是价格制定者。" } },
      ],
      answerId: "b",
      explanation: {
        en: "For any firm, **MRP = MP × MR_output**. A is a price-taker so MR = P = $20. B is a price-maker with MR = $20 at this Q (P = $40 is irrelevant to MRP!). With identical MP, **MRP is identical at this Q**. The common mistake (A) uses P for the monopolist — wrong, because the monopolist's next unit of output must be sold at a price cut that reduces revenue. MR, not P, is what the worker's output is 'worth' at the margin.",
        zh: "对任一企业,**MRP = MP × MR_产品**。A 价格接受,MR = P = $20;B 是价格制定者,当前 Q 处 MR = $20(P = $40 与 MRP 无关!)。MP 相同,所以同 Q 处 **MRP 相同**。常见错误(A)对垄断者用 P——错了,因为垄断者多产一单位须降价,其带来的边际收入要低。决定工人产出「边际价值」的是 MR,不是 P。",
      },
    },
    {
      id: "u5q03",
      prompt: {
        en: "A sudden fashion trend triples the demand (and price) of a popular designer shoe, while the **physical** MP of a shoemaker is unchanged. What happens to the **wage and employment** of shoemakers in that market?",
        zh: "时尚潮流使某款名牌鞋需求(与价格)翻了 3 倍,制鞋工人的**物理 MP** 不变。该市场制鞋工的**工资与雇用**如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Wage and employment both unchanged — MP is what matters, not output price.", zh: "两者不变——只看 MP,不看产品价格。" } },
        { id: "b", text: { en: "**Both rise — higher output price raises MRP (= MP × P), shifting the labor-demand curve RIGHT. Along an upward-sloping labor-supply curve, W ↑ and L ↑.**", zh: "**同时上升——产品价格上升使 MRP(= MP × P)提高,D_L **右移**;沿上倾的 S_L,W ↑、L ↑。**" } },
        { id: "c", text: { en: "Wage rises, employment falls.", zh: "工资上升、雇用下降。" } },
        { id: "d", text: { en: "Wage falls, employment rises.", zh: "工资下降、雇用上升。" } },
      ],
      answerId: "b",
      explanation: {
        en: "This is the signature feature of **derived demand**: product-market shocks flow directly into the factor market. P × 3 → MRP × 3 (MP fixed) → D_L shifts right. Equilibrium moves along the upward-sloping S_L: higher L, higher W. This is why 'hot' industries see both jobs and wages expand — driven entirely by output demand.",
        zh: "这是**派生需求**的特征:产品市场冲击直接传导到要素市场。P × 3 → MRP × 3(MP 不变)→ D_L 右移。沿上倾 S_L:L ↑、W ↑。这就是「热门」行业雇用与工资同升的原因——完全由产品需求驱动。",
      },
    },

    // ---- Competitive Labor Markets (3) ----
    {
      id: "u5q04",
      prompt: {
        en: "A competitive firm's MRP curve is **MRP = 100 − 5L** (in $). The market wage is **W = $40**. How many workers does the firm hire, and what is the total wage bill?",
        zh: "某竞争企业的 MRP = 100 − 5L(单位 $)。市场工资 W = $40。雇用多少人?总工资支出多少?",
      },
      choices: [
        { id: "a", text: { en: "L = 12, wage bill = $480.", zh: "L = 12,工资支出 = $480。" } },
        { id: "b", text: { en: "**L = 12, wage bill = $480. (Set MRP = W: 100 − 5L = 40 → L = 12. Bill = 12 × $40 = $480.)**", zh: "**L = 12,工资支出 = $480。(令 MRP = W:100 − 5L = 40 → L = 12;支出 = 12 × $40 = $480。)**" } },
        { id: "c", text: { en: "L = 20 (maximum L), wage bill = $800.", zh: "L = 20(最大 L),工资支出 = $800。" } },
        { id: "d", text: { en: "L = 12, wage bill = $768 (using average MRP).", zh: "L = 12,工资支出 = $768(按平均 MRP)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Hiring rule: MRP = W ⇒ 100 − 5L = 40 ⇒ **L = 12**. Every worker earns the market wage of $40 (the firm is a wage-taker, not wage-discriminator), so the bill is **12 × $40 = $480**. Choice D wrongly uses average MRP; in a competitive market the firm pays W for every worker, regardless of each one's MRP.",
        zh: "雇用规则:MRP = W → 100 − 5L = 40 → **L = 12**。每人都按市场工资 $40 拿(企业是工资接受者,不做工资歧视),支出 = **12 × $40 = $480**。选项 D 错用平均 MRP;竞争市场中每名工人拿市场 W,与各自 MRP 无关。",
      },
    },
    {
      id: "u5q05",
      prompt: {
        en: "In the nursing labor market, demand and supply are both upward-sloping-over-time trends: hospitals expand services (D ↑), and nursing schools graduate more nurses (S ↑). If the **supply shift is smaller** than the demand shift, predict what happens to equilibrium wage and employment.",
        zh: "护士劳动市场中,医院扩张服务使 D ↑,学校毕业生增加使 S ↑。若**供给移动幅度小于**需求移动,均衡工资与雇用如何?",
      },
      choices: [
        { id: "a", text: { en: "W rises, L falls.", zh: "W ↑,L ↓。" } },
        { id: "b", text: { en: "W and L both fall.", zh: "W、L 都下降。" } },
        { id: "c", text: { en: "**W rises, L rises — both shifts push L up; the bigger D↑ dominates on W.**", zh: "**W ↑,L ↑——两次移动都推升 L;D↑ 占优使 W 上升。**" } },
        { id: "d", text: { en: "W ambiguous, L rises.", zh: "W 不确定,L 上升。" } },
      ],
      answerId: "c",
      explanation: {
        en: "D↑ alone: W↑, L↑. S↑ alone: W↓, L↑. Both push L up → **L rises**. On W, D↑ pushes up and S↑ pushes down — **magnitudes matter**. If D↑ is the larger shift, the W↑ effect dominates → **W rises**. Without knowing which is larger, W would be ambiguous (choice D is the right answer to the OTHER version of this question).",
        zh: "单独 D↑:W↑、L↑;单独 S↑:W↓、L↑。两者都推 L 上 → **L 上升**;在 W 上 D↑ 推升、S↑ 压低——**幅度决定胜负**。D↑ 更大时 W↑ 占优 → **W 上升**。未指明大小时 W 不确定(D 是「不指定大小版本」的正确答案)。",
      },
    },
    {
      id: "u5q06",
      prompt: {
        en: "A competitive firm currently hires 20 workers. MRP of the 20th worker is $45; the market wage is $50. The firm's CFO suggests: 'We're losing money on the 20th worker — fire him and profit rises.' Evaluate this claim.",
        zh: "某竞争企业目前雇 20 人,第 20 人 MRP = $45,市场工资 W = $50。CFO 说:「第 20 人在亏损,开除能让利润上升。」评价这一说法。",
      },
      choices: [
        { id: "a", text: { en: "False — MRP shouldn't be compared to W.", zh: "错——MRP 不应与 W 比较。" } },
        { id: "b", text: { en: "**True — the 20th worker adds $45 of revenue but costs $50, reducing profit by $5. Firing them raises profit by $5, and the firm should stop hiring where MRP = W = $50 (some L between 10 and 20).**", zh: "**对——第 20 人带来 $45 收入、成本 $50,每人使利润减 $5。开除即增加 $5 利润;企业应雇到 MRP = W = $50 为止(介于 10 和 20 之间的某 L)。**" } },
        { id: "c", text: { en: "False — firing any worker always loses productive capacity.", zh: "错——开除工人总会损失产能。" } },
        { id: "d", text: { en: "False — the CFO should raise wages to match MRP.", zh: "错——CFO 应提高工资以匹配 MRP。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The CFO is correct. **Profit-max hiring rule**: keep hiring as long as **MRP ≥ W**; stop (and cut) when **MRP < W**. At L = 20, MRP ($45) < W ($50) → the 20th worker is a net $5 loss. Reduce L. Choice D misunderstands competitive labor markets: individual firms cannot 'set' the wage — they are wage-takers. Choice C is false: firing a worker whose MRP < W raises profit.",
        zh: "CFO 说得对。**利润最大化雇用规则**:MRP ≥ W 时继续雇;**MRP < W 时停止并减少**。L = 20 时 MRP($45)< W($50)→ 第 20 人净亏 $5,应裁员。选项 D 误解竞争劳动市场:单企业无法「设定」工资——是价格接受者。选项 C 错:开除 MRP < W 的工人反而增加利润。",
      },
    },

    // ---- Shifts in Labor Demand & Supply (3) ----
    {
      id: "u5q07",
      figure: {
        kind: "table",
        caption: {
          en: "Four events in the market for programmers",
          zh: "程序员劳动市场的四个事件",
        },
        columns: [
          { en: "Event", zh: "事件" },
          { en: "Description", zh: "说明" },
        ],
        rows: [
          [{ en: "E1", zh: "E1" }, { en: "Software prices rise 30%.", zh: "软件售价上涨 30%。" }],
          [{ en: "E2", zh: "E2" }, { en: "Cheap AI coding assistants (a substitute) become widely available.", zh: "便宜的 AI 编程助手(**替代品**)广泛普及。" }],
          [{ en: "E3", zh: "E3" }, { en: "Coding bootcamps triple their output of new programmers.", zh: "编程训练营毕业生数翻 3 倍。" }],
          [{ en: "E4", zh: "E4" }, { en: "Demand for software (the output) falls in a recession.", zh: "衰退中软件(产品)需求下降。" }],
        ],
      },
      prompt: {
        en: "Which event shifts the programmer **demand curve** (D_L) to the RIGHT?",
        zh: "哪个事件使程序员**需求曲线**(D_L)**右移**?",
      },
      choices: [
        { id: "a", text: { en: "**E1 — higher software price raises MRP (MP × P).**", zh: "**E1——软件价格上涨提高 MRP(MP × P)。**" } },
        { id: "b", text: { en: "E2 — cheaper AI substitute raises demand for human programmers.", zh: "E2——AI 替代品变便宜提升程序员需求。" } },
        { id: "c", text: { en: "E3 — more bootcamp grads raises demand.", zh: "E3——毕业生多就是需求多。" } },
        { id: "d", text: { en: "E4 — recession raises demand by making labor cheaper.", zh: "E4——衰退使劳动变便宜,需求上升。" } },
      ],
      answerId: "a",
      explanation: {
        en: "**E1**: output price ↑ → MRP ↑ → D_L **RIGHT**. ✓ **E2**: cheap **substitute** → firms switch TO AI, AWAY from programmers → D_L **LEFT**. **E3**: affects **supply**, not demand → S_L right. **E4**: output demand ↓ drags down output price → MRP ↓ → D_L LEFT. Choice B is the standard substitute/complement trap: cheaper substitutes REDUCE demand for labor, not raise it.",
        zh: "**E1**:产品价格 ↑ → MRP ↑ → D_L **右移**。✓ **E2**:**替代品**变便宜 → 企业转向 AI,远离程序员 → D_L **左移**。**E3**:影响**供给**,不是需求 → S_L 右。**E4**:产品需求 ↓ 带动产品价格 ↓ → MRP ↓ → D_L 左移。选项 B 是替代/互补经典陷阱:替代品便宜使劳动需求**下降**。",
      },
    },
    {
      id: "u5q08",
      prompt: {
        en: "The **minimum wage in retail** rises 25% while technology (self-checkout) becomes cheaper. For **supermarket cashier** labor demand, which effect on D_L is most accurate?",
        zh: "零售业**最低工资**上涨 25%,同时自助收银**技术变便宜**。超市**收银员**劳动需求(D_L)最准确的描述是?",
      },
      choices: [
        { id: "a", text: { en: "D_L unchanged — minimum wage only affects S.", zh: "D_L 不变——最低工资只影响 S。" } },
        { id: "b", text: { en: "**D_L for cashiers shifts LEFT: a substitute (self-checkout) gets cheaper AND the cashier wage (a direct cost) is higher, both pushing firms away from hiring cashiers.**", zh: "**收银员 D_L **左移**:替代品(自助收银)变便宜,同时收银员工资(直接成本)上升,双重作用使企业减少雇用。**" } },
        { id: "c", text: { en: "D_L rises — higher wages mean higher MRP.", zh: "D_L 上升——工资上升意味 MRP 上升。" } },
        { id: "d", text: { en: "D_L rises because labor gets more valuable.", zh: "D_L 上升——劳动更有价值。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Two forces push **against** cashiers: (1) a **substitute** input (self-checkout) got cheaper → firms substitute TOWARD it, away from cashiers → D_L LEFT. (2) Higher wage makes each remaining cashier more expensive. (Technically the wage is a movement along D_L, but rising wage costs accelerate technology adoption — which shifts D_L further LEFT.) Choice C confuses 'high wage' with 'high MRP' — the two are independent.",
        zh: "两股力量压制收银员需求:(1)**替代品**(自助收银)变便宜,企业转向替代品,**减少**收银员 → D_L **左移**;(2)工资上升使每人更贵(严格讲是沿 D_L 移动,但高工资加速技术替代——使 D_L 更**左移**)。选项 C 混淆「高工资」与「高 MRP」——二者独立。",
      },
    },
    {
      id: "u5q09",
      prompt: {
        en: "In the labor market for local baristas, D_L shifts LEFT (café business slumping) AND S_L shifts LEFT (many baristas leave the workforce). Which combination of equilibrium changes is possible?",
        zh: "本地咖啡师劳动市场:D_L **左移**(咖啡馆业低迷)且 S_L **左移**(大量咖啡师离开就业市场)。下列均衡变化组合中哪项是**可能的**?",
      },
      choices: [
        { id: "a", text: { en: "W rises, L falls (if S shift is larger).", zh: "W ↑,L ↓(若 S 移动更大)。" } },
        { id: "b", text: { en: "W falls, L falls (if D shift is larger).", zh: "W ↓,L ↓(若 D 移动更大)。" } },
        { id: "c", text: { en: "W ambiguous, L falls unambiguously.", zh: "W 不确定,L **一定**下降。" } },
        { id: "d", text: { en: "**All three — L falls unambiguously; W can be up, down, or unchanged depending on relative sizes.**", zh: "**三者皆可——L 一定下降;W 可升、可降、可不变,取决于两次移动的相对大小。**" } },
      ],
      answerId: "d",
      explanation: {
        en: "D↓ alone: W↓, L↓. S↓ alone: W↑, L↓. Both push L **down** — so L falls for sure. On W, the two shifts push in **opposite directions**, so W is ambiguous: up if S↓ dominates (A), down if D↓ dominates (B), unchanged if equal. Choice C correctly calls L unambiguous and W ambiguous, but it's a proper subset of D.",
        zh: "单独 D↓:W↓、L↓;单独 S↓:W↑、L↓。两者都把 L 压下去 → L **一定下降**;W 上推力与下推力并存,**方向不定**:S↓ 占优则 W 升(A),D↓ 占优则 W 降(B),相等则不变。C 正确指出 L 确定 / W 不定,但是 D 的子情形。",
      },
    },

    // ---- Least-Cost & Profit-Max Input Combination (3) ----
    {
      id: "u5q10",
      prompt: {
        en: "A firm uses labor at P_L = $20 and capital at P_K = $50. At the current mix, **MP_L = 60** and **MP_K = 100**. Which adjustment moves the firm toward cost-minimization?",
        zh: "某企业 P_L = $20,P_K = $50。当前组合 **MP_L = 60、MP_K = 100**。下列哪项调整使企业更接近成本最小化?",
      },
      choices: [
        { id: "a", text: { en: "Shift toward capital; MP_K is higher.", zh: "向资本转——MP_K 更高。" } },
        { id: "b", text: { en: "**Shift toward labor: MP_L/P_L = 3 > MP_K/P_K = 2, so each $1 on labor buys more output.**", zh: "**向**劳动**转:MP_L/P_L = 3 > MP_K/P_K = 2,每 $1 的劳动买到更多产出。**" } },
        { id: "c", text: { en: "Stay the same; the firm is already cost-minimizing.", zh: "保持不变——已成本最小化。" } },
        { id: "d", text: { en: "Raise P_L to $30 to rebalance.", zh: "把 P_L 提到 $30 以重新平衡。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Least-cost rule**: MP_L/P_L = MP_K/P_K. Here 60/20 = **3** > 100/50 = **2**. Each $1 spent on labor yields 3 units of output vs. 2 for capital — hire more labor, less capital. As L ↑, MP_L falls (diminishing returns); as K ↓, MP_K rises — until the two ratios equalize. Choice A looks at raw MP and misses the per-dollar dimension, the most common AP trap here.",
        zh: "**最低成本法则**:MP_L/P_L = MP_K/P_K。此处 60/20 = **3** > 100/50 = **2**。每 $1 劳动得 3 单位产出,每 $1 资本只得 2 单位——应多用劳动、少用资本。L ↑ → MP_L ↓;K ↓ → MP_K ↑,最终两比值相等。选项 A 只看绝对 MP,忽视「每美元」维度——本话题最常见陷阱。",
      },
    },
    {
      id: "u5q11",
      prompt: {
        en: "A firm has reached **MP_L / P_L = MP_K / P_K = 4** (cost-minimizing). The current MRP_L = $60 and P_L = $20. To maximize profit, is the firm already there? If not, what should it do?",
        zh: "某企业已达 **MP_L / P_L = MP_K / P_K = 4**(成本最小化)。当前 MRP_L = $60,P_L = $20。利润是否已最大化?若否,应如何调整?",
      },
      choices: [
        { id: "a", text: { en: "Yes, profit is maximized because cost-min is sufficient.", zh: "是——成本最小化已足够。" } },
        { id: "b", text: { en: "**No — profit-max requires MRP_i = P_i for each input. Here MRP_L = $60 > P_L = $20, so the firm should expand BOTH inputs (keeping the cost-min ratio) until both MRPs fall to their prices.**", zh: "**否——利润最大化要求**每种**投入 MRP_i = P_i。此处 MRP_L = $60 > P_L = $20,应**同时扩张两种投入**(保持成本最小比例),直至各自 MRP 降到其价格。**" } },
        { id: "c", text: { en: "No — cut labor immediately.", zh: "否——立即减少劳动。" } },
        { id: "d", text: { en: "No — raise P_L to equal MRP_L.", zh: "否——把 P_L 提到等于 MRP_L。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Cost-min sets the **ratio** but not the **level**. Profit-max requires MRP = P for **each** input. Since MRP_L = $60 > P_L = $20, each extra unit of labor adds $40 to profit. Expand labor (and capital in the right ratio to preserve cost-min) — as usage rises, MP falls, so MRP falls toward P_L. Stop when MRP_L = P_L = $20. Cost-min ⊂ profit-max is the hierarchy.",
        zh: "成本最小化只固定**比例**,不决定**水平**。利润最大化要求**每种**投入 MRP = P。此处 MRP_L = $60 > P_L = $20,每多一单位劳动加利润 $40。应扩张劳动(并按成本最小比例增加资本),使用量增加 → MP 下降 → MRP 向 P_L 靠拢,停于 MRP_L = P_L = $20。成本最小化 ⊂ 利润最大化。",
      },
    },
    {
      id: "u5q12",
      figure: {
        kind: "table",
        caption: {
          en: "Four scenarios — is the firm cost-minimizing?",
          zh: "四种情境——企业是否成本最小化?",
        },
        columns: [
          { en: "Scenario", zh: "情境" },
          { en: "MP_L", zh: "MP_L" },
          { en: "P_L", zh: "P_L" },
          { en: "MP_K", zh: "MP_K" },
          { en: "P_K", zh: "P_K" },
        ],
        rows: [
          [{ en: "A", zh: "A" }, { en: "40", zh: "40" }, { en: "$10", zh: "$10" }, { en: "60", zh: "60" }, { en: "$15", zh: "$15" }],
          [{ en: "B", zh: "B" }, { en: "20", zh: "20" }, { en: "$5", zh: "$5" }, { en: "40", zh: "40" }, { en: "$20", zh: "$20" }],
          [{ en: "C", zh: "C" }, { en: "30", zh: "30" }, { en: "$15", zh: "$15" }, { en: "50", zh: "50" }, { en: "$20", zh: "$20" }],
          [{ en: "D", zh: "D" }, { en: "50", zh: "50" }, { en: "$5", zh: "$5" }, { en: "200", zh: "200" }, { en: "$20", zh: "$20" }],
        ],
      },
      prompt: {
        en: "In which scenarios is the firm cost-minimizing?",
        zh: "哪些情境下企业**成本最小化**?",
      },
      choices: [
        { id: "a", text: { en: "A only.", zh: "仅 A。" } },
        { id: "b", text: { en: "**A and D** — both satisfy MP_L/P_L = MP_K/P_K (A: 4 = 4; D: 10 = 10).", zh: "**A 和 D**——两者都满足 MP_L/P_L = MP_K/P_K(A:4 = 4;D:10 = 10)。" } },
        { id: "c", text: { en: "A, B, and C.", zh: "A、B、C。" } },
        { id: "d", text: { en: "All four.", zh: "四项全部。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Compute MP/$ for each: A: 40/10=**4**, 60/15=**4** ✓. B: 20/5=**4**, 40/20=**2** ✗. C: 30/15=**2**, 50/20=**2.5** ✗. D: 50/5=**10**, 200/20=**10** ✓. Only A and D are cost-minimizing. Notice that B and C are **different** sizes of mismatch — in both, the firm should shift toward the input with higher MP per dollar.",
        zh: "算各情境的 MP/$:A:40/10=**4**、60/15=**4** ✓;B:20/5=**4**、40/20=**2** ✗;C:30/15=**2**、50/20=**2.5** ✗;D:50/5=**10**、200/20=**10** ✓。只有 A 与 D 成本最小化。注意 B 与 C 的失衡方向不同——两者都应向「每美元 MP 较高」的投入倾斜。",
      },
    },

    // ---- Monopsony & Imperfect Factor Markets (3) ----
    {
      id: "u5q13",
      prompt: {
        en: "A coal-mining town has one employer. Labor supply to the mine is **W = 4 + 0.5L**. Marginal revenue product is **MRP = 20 − L**. Find the **monopsony wage, employment, and the DWL compared to competitive benchmark**.",
        zh: "某煤矿镇只有一位雇主。煤矿面对的劳动供给 **W = 4 + 0.5L**,MRP = 20 − L。求**买方垄断工资、雇用量,以及相对竞争基准的 DWL**。",
      },
      choices: [
        { id: "a", text: { en: "W = 9, L = 10, DWL = 0.", zh: "W = 9,L = 10,DWL = 0。" } },
        { id: "b", text: { en: "**L_m = 8, W_m = 8; competitive L_c ≈ 10.67, W_c ≈ 9.33. DWL > 0 because L_m < L_c.**", zh: "**L_m = 8,W_m = 8;竞争 L_c ≈ 10.67,W_c ≈ 9.33。因 L_m < L_c,DWL > 0。**" } },
        { id: "c", text: { en: "L_m = 8, W_m = 12 (read W off MFC).", zh: "L_m = 8,W_m = 12(从 MFC 读)。" } },
        { id: "d", text: { en: "Monopsony has zero DWL because the firm still meets demand.", zh: "买方垄断 DWL 为零——企业仍满足需求。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MFC for W = a + bL is a + 2bL → here MFC = 4 + L. Set MFC = MRP: 4 + L = 20 − L → **L_m = 8**. Read W off S: W_m = 4 + 0.5(8) = **$8**. Competitive: S = MRP → 4 + 0.5L = 20 − L → 16 = 1.5L → **L_c ≈ 10.67**, **W_c ≈ 9.33**. Since L_m < L_c, DWL > 0. Choice C is the classic 'read W off MFC' mistake: MFC is a cost curve, not a wage.",
        zh: "W = a + bL 下 MFC = a + 2bL → 此处 MFC = 4 + L。令 MFC = MRP:4 + L = 20 − L → **L_m = 8**。工资在 S 上读:W_m = 4 + 0.5(8) = **$8**。竞争:S = MRP → 4 + 0.5L = 20 − L → 16 = 1.5L → **L_c ≈ 10.67、W_c ≈ 9.33**。L_m < L_c,故 DWL > 0。选项 C 是「从 MFC 读 W」的典型错误——MFC 是成本曲线,不是工资。",
      },
    },
    {
      id: "u5q14",
      prompt: {
        en: "A monopsonist currently hires 4 workers at W = $6 (see the Topic 5 chart). The government imposes a minimum wage of **$8** (slightly above the competitive benchmark of $8). What happens to employment?",
        zh: "某买方垄断者目前雇 4 人,W = $6(见话题 5 图)。政府设最低工资 **$8**(略高于竞争基准 $8)。雇用如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Employment falls below 4 (standard minimum-wage result).", zh: "雇用降到 4 以下(标准最低工资结果)。" } },
        { id: "b", text: { en: "**Employment rises to 6 (the competitive level) at W = $8 — the minimum wage neutralizes monopsony power by flattening the firm's effective supply to $8 until it meets S_L.**", zh: "**雇用升至 6(竞争水平),W = $8——最低工资通过把企业面对的供给拉平到 $8,抵消买方垄断力量,直至与 S_L 相交。**" } },
        { id: "c", text: { en: "Employment stays at 4; only wages rise to $8.", zh: "雇用仍为 4,仅工资升至 $8。" } },
        { id: "d", text: { en: "Employment goes to zero — the firm shuts down.", zh: "雇用降为零——企业停业。" } },
      ],
      answerId: "b",
      explanation: {
        en: "At W_min = $8, the firm's labor-supply curve becomes **horizontal at $8** up to the point where natural S crosses $8 (which is exactly L_c = 6). Along this flat region, **MFC = $8**. Firm hires where MFC = MRP: $8 = 14 − L → L = 6. So **BOTH wage and employment rise**, from (4, $6) to (6, $8). Set min wage too high (above competitive W_c) and employment falls — but at or below competitive W, monopsony min-wage improves welfare.",
        zh: "最低工资 $8 下,企业面对的劳动供给在 $8 处变为水平,直到与自然 S 相交(恰好 L_c = 6)。水平段上 **MFC = $8**。企业在 MFC = MRP 处雇用:$8 = 14 − L → L = 6。**工资与雇用同升**:从 (4, $6) 到 (6, $8)。若最低工资设得过高(超出 W_c),雇用会下降——但在竞争 W 及以下区间,买方垄断最低工资提升福利。",
      },
    },
    {
      id: "u5q15",
      prompt: {
        en: "In a perfectly competitive labor market (W_c = $15), the government sets a minimum wage of $20. In a monopsony market (W_m = $10, W_c = $15), the same $20 minimum is imposed. Predict employment changes in each.",
        zh: "某完全竞争劳动市场 W_c = $15,政府设最低工资 $20;某买方垄断市场 W_m = $10、W_c = $15,同样设 $20 最低。各市场雇用如何变化?",
      },
      choices: [
        { id: "a", text: { en: "Employment rises in both markets.", zh: "两市场雇用都上升。" } },
        { id: "b", text: { en: "Employment falls in both markets.", zh: "两市场雇用都下降。" } },
        { id: "c", text: { en: "**Employment falls in the competitive market (W above equilibrium); in monopsony, employment first rose from W_m=$10 to W_c=$15, but at $20 (above W_c) it now FALLS below L_c — the minimum wage is 'too high.'**", zh: "**竞争市场雇用下降(W 高于均衡);买方垄断中工资从 W_m = $10 升到 W_c = $15 时雇用上升,但 $20(高于 W_c)反而使雇用降至 L_c 以下——最低工资「过高」。**" } },
        { id: "d", text: { en: "No change in either — minimum wages are always non-binding.", zh: "两市场都不变——最低工资都不具约束力。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Competitive market: W_min = $20 > W_c = $15 → binding → L falls (shortage of jobs). Monopsony market: the minimum wage is welfare-improving only up to W_c. At $20 (above W_c), the firm faces a flat supply at $20; MFC = $20; L from 20 = 14 − L is **L = ** (using Topic 5 data: MRP = 14 − L → $20 = 14 − L → L = −6, infeasible — so L = 0 or a corner solution). More generally: above W_c, a minimum wage in monopsony behaves just like a competitive minimum wage — employment falls. The famous 'monopsony exception' to the minimum-wage debate only holds in the interval [W_m, W_c].",
        zh: "竞争市场:W_min = $20 > W_c = $15 → 具约束力 → L 下降(就业短缺)。买方垄断:最低工资仅在至 W_c 之前能提升福利。设在 $20(> W_c)时,企业面对 $20 水平供给,MFC = $20;由 MRP = 14 − L 解 L = −6(不可行)→ 角点 L = 0 或接近零。一般结论:超过 W_c 后,买方垄断的最低工资与竞争市场一样使雇用下降。著名的「买方垄断例外」只在 [W_m, W_c] 区间成立。",
      },
    },
  ],

  "unit-6": [
    // ---- Social Efficiency & Market Failure (3) ----
    {
      id: "u6q01",
      prompt: {
        en: "In a market with NO externalities, perfect competition, and full information, equilibrium satisfies **all** of the following EXCEPT:",
        zh: "在**无**外部性、完全竞争、完全信息的市场里,均衡**同时**满足下列**除**哪一项**之外**的全部条件?",
      },
      choices: [
        { id: "a", text: { en: "Qd = Qs (market clears).", zh: "Qd = Qs(市场出清)。" } },
        { id: "b", text: { en: "P = MC for each firm.", zh: "每家 P = MC。" } },
        { id: "c", text: { en: "**Zero total output — firms choose not to produce.**", zh: "**总产出为零——企业选择不生产。**" } },
        { id: "d", text: { en: "MSB = MSC at the last unit.", zh: "最后一单位 MSB = MSC。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Under the assumptions given, all of A, B, and D hold simultaneously — that's what the **invisible hand** theorem says: the decentralized market reaches social efficiency. Choice C is clearly not a feature of equilibrium (firms produce the MSC = MSB quantity, not zero). The question tests whether students see that perfect competition + no externalities = automatic social optimum.",
        zh: "在上述假设下,A、B、D **同时**成立——即**看不见的手**定理的结论:去中心化市场达成社会效率。选项 C 显然不是均衡特征(企业在 MSC = MSB 处生产,而非零)。本题考察学生是否掌握「完全竞争 + 无外部性 = 自动社会最优」。",
      },
    },
    {
      id: "u6q02",
      prompt: {
        en: "Match each situation to the source of market failure it best illustrates: (I) a factory's wastewater poisons a downstream town. (II) everyone wants street lighting but no one will voluntarily pay. (III) a single cable provider charges P > MC. (IV) used-car buyers cannot tell lemons from good cars.",
        zh: "将每种情形匹配到最贴切的市场失灵来源:(I) 工厂废水毒害下游镇民;(II) 人人想要路灯却无人自愿付款;(III) 唯一的有线电视商收费 P > MC;(IV) 二手车买家无法识别好车与问题车。",
      },
      choices: [
        { id: "a", text: { en: "I externality · II public good · III market power · IV imperfect info.", zh: "I 外部性 · II 公共物品 · III 市场力量 · IV 信息不完全。" } },
        { id: "b", text: { en: "I public good · II externality · III info · IV market power.", zh: "I 公共物品 · II 外部性 · III 信息 · IV 市场力量。" } },
        { id: "c", text: { en: "All four are externalities.", zh: "四项都是外部性。" } },
        { id: "d", text: { en: "All four are public-good problems.", zh: "四项都是公共物品问题。" } },
      ],
      answerId: "a",
      explanation: {
        en: "I is a classic **negative externality** (cost to bystanders). II is a **public good** (non-rivalrous, non-excludable → free-rider problem). III is a **market power** failure (monopoly price above MC creates DWL). IV is **imperfect information / adverse selection** (Akerlof's 'lemons' problem). All four arise in real markets and each requires a different policy response.",
        zh: "I 是经典**负外部性**(旁观者承担成本)。II 是**公共物品**(不可竞争、不可排他 → 搭便车)。III 是**市场力量**失灵(垄断 P > MC 产生 DWL)。IV 是**信息不完全 / 逆向选择**(阿克洛夫「柠檬市场」)。四类在现实中都会出现,各自需要不同对策。",
      },
    },
    {
      id: "u6q03",
      prompt: {
        en: "A social planner seeking to maximize total surplus in a market with a $5/unit external cost should enforce which quantity rule?",
        zh: "社会规划者在每单位 $5 外部成本的市场中追求总剩余最大化,应执行哪种数量规则?",
      },
      choices: [
        { id: "a", text: { en: "Quantity = 0 to eliminate the externality.", zh: "Q = 0——完全消除外部性。" } },
        { id: "b", text: { en: "Quantity where MPC = MPB (the unregulated market outcome).", zh: "MPC = MPB 处的 Q(自发市场结果)。" } },
        { id: "c", text: { en: "**Quantity where MSC = MSB (= MPC + $5 = MPB for a production externality).**", zh: "**MSC = MSB 处的 Q(生产型外部性下 MPC + $5 = MPB)。**" } },
        { id: "d", text: { en: "Maximum possible quantity.", zh: "最大可能 Q。" } },
      ],
      answerId: "c",
      explanation: {
        en: "The social planner sets quantity where **marginal social benefit = marginal social cost**. Q = 0 is only optimal if MSC > MSB at every positive Q (rare). The unregulated market (B) overshoots. The maximum Q (D) loses surplus on every unit where MSC > MSB. Only **MSC = MSB** — which, for a production externality, means MPC + external cost = MPB — maximizes total surplus.",
        zh: "社会规划者设定 **MSB = MSC** 处的 Q。Q = 0 仅在任一正 Q 下 MSC > MSB 时才最优(罕见)。自发市场(B)过度;最大 Q(D)在 MSC > MSB 的单位上丢失剩余。只有 **MSC = MSB**(生产型外部性下即 MPC + 外部成本 = MPB)使总剩余最大。",
      },
    },

    // ---- Negative Externalities (3) ----
    {
      id: "u6q04",
      prompt: {
        en: "A market has D: P = 20 − Q, S = MPC: P = 4 + Q, and a constant external cost of $4/unit (so MSC = MPC + $4). Find Q_m, Q*, and the optimal Pigouvian tax.",
        zh: "D: P = 20 − Q,S = MPC: P = 4 + Q,每单位外部成本 $4(故 MSC = MPC + $4)。求 Q_m、Q*、最优庇古税。",
      },
      choices: [
        { id: "a", text: { en: "Q_m = Q* = 8; tax = 0.", zh: "Q_m = Q* = 8;税 = 0。" } },
        { id: "b", text: { en: "**Q_m = 8 (4 + Q = 20 − Q); Q* = 6 (8 + Q = 20 − Q); optimal tax = $4/unit.**", zh: "**Q_m = 8(4 + Q = 20 − Q);Q* = 6(8 + Q = 20 − Q);最优税 = $4/单位。**" } },
        { id: "c", text: { en: "Q_m = 16, Q* = 12, tax = $8.", zh: "Q_m = 16,Q* = 12,税 = $8。" } },
        { id: "d", text: { en: "Q_m = 6, Q* = 8, tax = $4.", zh: "Q_m = 6,Q* = 8,税 = $4。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Market: 4 + Q = 20 − Q → **Q_m = 8**. Social opt: MSC = MSB → 8 + Q = 20 − Q → **Q* = 6**. A Pigouvian tax equal to the **marginal external cost** ($4) shifts MPC to MSC, pushing the market to Q*. Choice D reverses which is market and which is social — a common careless error.",
        zh: "市场:4 + Q = 20 − Q → **Q_m = 8**。社会最优:MSC = MSB → 8 + Q = 20 − Q → **Q* = 6**。庇古税等于**边际外部成本**($4)使 MPC 上移至 MSC,市场被推到 Q*。选项 D 把市场与社会最优颠倒——常见粗心错误。",
      },
    },
    {
      id: "u6q05",
      prompt: {
        en: "Using the same data (D: P = 20 − Q; MPC: P = 4 + Q; external cost $4), compute the **DWL** at the unregulated market outcome.",
        zh: "沿用上题数据(D: P = 20 − Q;MPC: P = 4 + Q;外部成本 $4),计算**未受管制时**的 DWL。",
      },
      choices: [
        { id: "a", text: { en: "DWL = $8.", zh: "DWL = $8。" } },
        { id: "b", text: { en: "DWL = $2.", zh: "DWL = $2。" } },
        { id: "c", text: { en: "**DWL = $4** — the area of the triangle between MSC and D from Q* = 6 to Q_m = 8.", zh: "**DWL = $4**——Q* = 6 到 Q_m = 8 之间 MSC 与 D 夹的三角形面积。" } },
        { id: "d", text: { en: "DWL = $16.", zh: "DWL = $16。" } },
      ],
      answerId: "c",
      explanation: {
        en: "DWL = ½ × (Q_m − Q*) × (MSC at Q_m − MSB at Q_m). At Q_m = 8: MSC = 8 + 8 = 16; MSB = D = 20 − 8 = 12. Gap = 4. Base = 8 − 6 = 2. **DWL = ½ × 2 × 4 = $4**. Equivalently, the tax of $4/unit × 2 extra units (6 → 8) over a wedge averaging $4/unit gives the same triangle.",
        zh: "DWL = ½ × (Q_m − Q*) × (Q_m 处 MSC − Q_m 处 MSB)。Q_m = 8:MSC = 16,MSB = D = 12,差 = 4。底 = 8 − 6 = 2。**DWL = ½ × 2 × 4 = $4**。等价地,单位税 $4 × 多出的 2 单位(6 → 8)在平均 $4 的税楔上得到同样的三角形。",
      },
    },
    {
      id: "u6q06",
      prompt: {
        en: "A cap-and-trade system and a Pigouvian tax are both used to address pollution. Which statement about their **theoretical equivalence** is MOST accurate?",
        zh: "排污权交易与庇古税都能用于污染治理。关于它们的**理论等价性**,最准确的是?",
      },
      choices: [
        { id: "a", text: { en: "They produce completely different outcomes — one is efficient, the other is not.", zh: "两者结果完全不同——一个有效、另一个无效。" } },
        { id: "b", text: { en: "**With perfect information, they can produce identical outcomes: a tax fixes the PRICE of pollution, while a cap fixes the QUANTITY. Equivalent in theory; differ in uncertainty.**", zh: "**信息完美时,两者可达相同结果:税固定污染的**价格**,排污权固定**数量**。理论等价;差别在不确定性下。**" } },
        { id: "c", text: { en: "Cap-and-trade is always cheaper for firms.", zh: "排污权对企业总是更便宜。" } },
        { id: "d", text: { en: "A Pigouvian tax always produces more pollution than cap-and-trade.", zh: "庇古税污染总是多于排污权。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A tax and a cap are **dual instruments**: the tax fixes the marginal **price** of polluting and lets firms decide quantity; the cap fixes the **quantity** and lets the permit market determine the price. With perfect info on MSC, both reach the same Q*. With uncertainty (e.g. over damage functions), they differ — taxes give price certainty, caps give quantity certainty. That's the Weitzman 'prices vs. quantities' result.",
        zh: "税与排污权是**对偶工具**:税固定污染的**边际价格**,由企业选数量;排污权固定**数量**,由许可证市场定价。若对 MSC 信息完美,两者达到同一 Q*。不确定时(如损害函数未知),两者有差别——税提供价格确定性,排污权提供数量确定性。这就是 Weitzman 的「价格 vs. 数量」结论。",
      },
    },

    // ---- Positive Externalities (3) ----
    {
      id: "u6q07",
      prompt: {
        en: "In a market for higher education, D = MPB: P = 40 − Q; S = MPC = MSC: P = 10 + Q; external benefit per unit = $6 (MSB = MPB + $6). Find Q_m, Q*, and the optimal subsidy.",
        zh: "高等教育市场:D = MPB: P = 40 − Q;S = MPC = MSC: P = 10 + Q;每单位外部收益 $6(MSB = MPB + $6)。求 Q_m、Q*、最优补贴。",
      },
      choices: [
        { id: "a", text: { en: "Q_m = Q* = 15; subsidy = 0.", zh: "Q_m = Q* = 15;补贴 = 0。" } },
        { id: "b", text: { en: "Q_m = 15, Q* = 12, subsidy = $6 (to limit growth).", zh: "Q_m = 15,Q* = 12,补贴 = $6(限增长)。" } },
        { id: "c", text: { en: "**Q_m = 15 (MPC = MPB); Q* = 18 (MPC = MSB → 10 + Q = 46 − Q); subsidy = $6/unit.**", zh: "**Q_m = 15(MPC = MPB);Q* = 18(MPC = MSB → 10 + Q = 46 − Q);补贴 = $6/单位。**" } },
        { id: "d", text: { en: "Q_m = 20, Q* = 30, subsidy = $30.", zh: "Q_m = 20,Q* = 30,补贴 = $30。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Market: 10 + Q = 40 − Q → **Q_m = 15**. MSB = MPB + 6 = 46 − Q. Social opt: MSC = MSB → 10 + Q = 46 − Q → **Q* = 18** (> Q_m, as expected for a positive externality). Optimal subsidy = marginal external benefit = **$6/unit**, paid to consumers OR producers. Choice B reverses the direction — a positive externality needs more, not less, output.",
        zh: "市场:10 + Q = 40 − Q → **Q_m = 15**。MSB = MPB + 6 = 46 − Q。社会最优:MSC = MSB → 10 + Q = 46 − Q → **Q* = 18**(> Q_m,正外部性的预期)。最优补贴 = 边际外部收益 = **$6/单位**,可付给消费者或生产者。选项 B 方向反了——正外部性需要**更多**产出,而非更少。",
      },
    },
    {
      id: "u6q08",
      prompt: {
        en: "Why might the government REQUIRE childhood vaccinations rather than simply subsidize them?",
        zh: "政府为何**强制**儿童接种疫苗,而非仅**补贴**?",
      },
      choices: [
        { id: "a", text: { en: "Subsidies are always more expensive than mandates.", zh: "补贴总是比强制更贵。" } },
        { id: "b", text: { en: "**Herd immunity requires a MINIMUM vaccination rate; partial subsidy may not get everyone above the threshold, even though aggregate uptake rises. Mandates address the strategic free-rider problem directly.**", zh: "**群体免疫需要**最低接种率**;部分补贴即便总接种上升,仍未必跨过门槛。强制直接应对战略搭便车问题。**" } },
        { id: "c", text: { en: "Vaccines are not subject to externalities.", zh: "疫苗不存在外部性。" } },
        { id: "d", text: { en: "Consumer surplus is maximized under mandates.", zh: "强制下消费者剩余最大。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Vaccines show a **threshold** externality: below a certain rate (e.g., ~95% for measles), outbreaks can occur even if most are vaccinated. A subsidy shifts D_L for vaccines up but doesn't guarantee crossing the threshold — strategic free-riders stay unvaccinated, gambling others will cover them. Mandates (with exceptions) ensure the threshold is met. Many jurisdictions use **mandates + subsidies together**.",
        zh: "疫苗具有**阈值**型外部性:低于某接种率(如麻疹约 95%)仍可能爆发,即便大部分人已接种。补贴使需求上移但不保证越过阈值——战略搭便车者赌别人会覆盖自己。强制(含豁免机制)保证阈值达成。许多地区**强制 + 补贴并用**。",
      },
    },
    {
      id: "u6q09",
      prompt: {
        en: "Which of the following is NOT a valid government response to a positive externality?",
        zh: "下列哪项**不是**应对正外部性的有效政府工具?",
      },
      choices: [
        { id: "a", text: { en: "Per-unit subsidy to producers.", zh: "对生产者按单位补贴。" } },
        { id: "b", text: { en: "Per-unit subsidy to consumers.", zh: "对消费者按单位补贴。" } },
        { id: "c", text: { en: "Public provision (e.g., free public schools).", zh: "公共提供(如免费公立学校)。" } },
        { id: "d", text: { en: "**A per-unit tax equal to the external benefit.**", zh: "**按外部收益等额征收单位税。**" } },
      ],
      answerId: "d",
      explanation: {
        en: "Taxes **shrink** the market — exactly the **wrong direction** for a positive externality (which suffers from underproduction). Choices A, B, C all expand market Q toward Q*. Mandates, public provision, and patents (for R&D) are all valid tools. The pairing is: negative externality → tax / restrict; positive externality → subsidize / expand.",
        zh: "税使市场**收缩**——这正是正外部性的**错误方向**(正外部性本来就产出不足)。A、B、C 都使 Q 向 Q* 扩张。强制、公共提供、专利(研发)都是有效工具。配对关系:负外部性 → 征税 / 限制;正外部性 → 补贴 / 扩张。",
      },
    },

    // ---- Public Goods & Common Resources (3) ----
    {
      id: "u6q10",
      prompt: {
        en: "A community wants to install a public garden. The project costs $1,000. Ten residents each personally value the garden at $150 (total $1,500 > cost). If contributions are voluntary, what is the likely outcome?",
        zh: "某社区想建公共花园,成本 $1,000。10 位居民各自价值 $150(合计 $1,500 > 成本)。自愿出资的可能结果是?",
      },
      choices: [
        { id: "a", text: { en: "Everyone pays $150 voluntarily; the garden is built.", zh: "人人自愿付 $150;花园建成。" } },
        { id: "b", text: { en: "**Free-rider problem: each resident reasons 'others will pay'; total contributions fall short and the garden may not be built despite being socially valuable.**", zh: "**搭便车问题:每人想「其他人会付」;总捐款不足,尽管社会有价值,花园可能建不起来。**" } },
        { id: "c", text: { en: "The garden is always built because benefits exceed costs.", zh: "总效益超过成本——一定会建。" } },
        { id: "d", text: { en: "Only the wealthiest resident pays; the rest contribute nothing.", zh: "只有最富的付款,其他人不付。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Public goods are **non-excludable** — once built, no resident can be stopped from enjoying the garden, paid or not. Each resident's dominant strategy is to contribute **nothing** and enjoy the good if others pay. If everyone reasons this way, total contributions fall well short of $1,000. This is the **free-rider problem**, and it's why local governments typically tax to provide such goods rather than relying on voluntary contributions.",
        zh: "公共物品**不可排他**——一旦建成,无人能被排除在外。每位居民的占优策略是**不付款**并坐享其成。如果人人如此,总捐款远不够 $1,000。这就是**搭便车问题**,也是地方政府通常以税款(而非自愿捐款)来提供此类物品的原因。",
      },
    },
    {
      id: "u6q11",
      prompt: {
        en: "Which pair of policy interventions is MOST appropriate for a **common-pool resource** (e.g., ocean fishery)?",
        zh: "对**公地资源**(如海洋渔业),下列哪对政策干预最合适?",
      },
      choices: [
        { id: "a", text: { en: "Patent protection and a public provision mandate.", zh: "专利保护与公共提供强制。" } },
        { id: "b", text: { en: "**Catch quotas and tradable fishing permits (to cap extraction and allocate rights efficiently).**", zh: "**捕捞配额与可交易渔业许可证(限制总量并高效分配权利)。**" } },
        { id: "c", text: { en: "Removing all regulations and letting the market sort itself out.", zh: "取消一切管制,放任市场自行解决。" } },
        { id: "d", text: { en: "A 100% tax on fish sold.", zh: "对售鱼征 100% 税。" } },
      ],
      answerId: "b",
      explanation: {
        en: "The tragedy of the commons is solved by **adding excludability** — quotas limit how much each user can extract, and tradable permits allocate the capped catch efficiently to the lowest-cost fishers. Choice A addresses a different market failure (positive externality). C makes the problem worse (maximally unregulated commons = maximum overuse). D is a blunt, inefficient tool that also affects good fishermen equally.",
        zh: "公地悲剧的对策是**增加排他性**——配额限定每位使用者的提取量;可交易许可证将上限额度高效分配给成本最低的渔民。选项 A 针对另一种失灵(正外部性)。C 使问题更严重(最放任 = 最过度使用)。D 是钝刀子,效率低且对良性渔民同样打击。",
      },
    },
    {
      id: "u6q12",
      prompt: {
        en: "Streaming services like Netflix offer content non-rivalrously (one viewer's access does not diminish another's) but excludably (password-protected accounts). This makes streaming a:",
        zh: "Netflix 等流媒体**不可竞争**地提供内容(一人观看不减少他人访问),但**可排他**(账户密码)。所以流媒体是:",
      },
      choices: [
        { id: "a", text: { en: "Public good.", zh: "公共物品。" } },
        { id: "b", text: { en: "Private good.", zh: "私人物品。" } },
        { id: "c", text: { en: "Common-pool resource.", zh: "公地资源。" } },
        { id: "d", text: { en: "**Club good — non-rivalrous but excludable (exactly the 'club' quadrant).**", zh: "**俱乐部物品——不可竞争但可排他(正是「俱乐部」象限)。**" } },
      ],
      answerId: "d",
      explanation: {
        en: "Apply the 2×2 grid strictly: non-rivalrous + excludable = **club good**. Other examples: toll roads (up to capacity), cable TV, software subscriptions. Club goods can be profitably provided by private firms (subscriptions capture willingness to pay) — unlike pure public goods, where non-excludability prevents private profit.",
        zh: "严格套 2×2 表:不可竞争 + 可排他 = **俱乐部物品**。其他例子:收费公路(未满载时)、有线电视、软件订阅。俱乐部物品可由私企营利提供(订阅捕获支付意愿)——这与纯公共物品不同,后者不可排他使私人无利可图。",
      },
    },

    // ---- Income & Wealth Inequality (3) ----
    {
      id: "u6q13",
      prompt: {
        en: "Country A's Gini coefficient **fell** from 0.45 to 0.40 over a decade. Country B's Gini **rose** from 0.30 to 0.32. Which statement is supported?",
        zh: "A 国十年间 Gini 从 0.45 **降至** 0.40;B 国 Gini 从 0.30 **升至** 0.32。下列哪项成立?",
      },
      choices: [
        { id: "a", text: { en: "A is now more unequal than B.", zh: "A 现在比 B 更不平等。" } },
        { id: "b", text: { en: "**A's inequality fell, but A is still MORE unequal than B (0.40 > 0.32). B's inequality rose slightly.**", zh: "**A 不平等**下降**,但仍比 B 更不平等(0.40 > 0.32);B 不平等略有上升。**" } },
        { id: "c", text: { en: "Both countries became more equal.", zh: "两国都变得更平等。" } },
        { id: "d", text: { en: "B is now more unequal than A.", zh: "B 现在比 A 更不平等。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Changes in Gini and level-comparisons are independent: A **became** more equal (0.45 → 0.40) but **remains** more unequal than B in level terms (0.40 > 0.32). B **became** slightly more unequal (0.30 → 0.32) but **remains** less unequal than A overall. Always separate trend from level when reading Gini data.",
        zh: "Gini 变化与水平比较是两件事:A **变得**更平等(0.45 → 0.40),但水平上仍比 B 更不平等(0.40 > 0.32)。B **略微变**不平等(0.30 → 0.32),但整体水平仍低于 A。读 Gini 时务必区分**趋势**与**水平**。",
      },
    },
    {
      id: "u6q14",
      prompt: {
        en: "Why is **wealth inequality** typically much larger than **income inequality** in the same country?",
        zh: "为何同一国家的**财富不平等**通常**远大于**收入不平等?",
      },
      choices: [
        { id: "a", text: { en: "Wealth is taxed more heavily than income.", zh: "财富税重于所得税。" } },
        { id: "b", text: { en: "**Wealth is the accumulated stock of past savings and inheritance; income differences compound over time, and wealth also yields more income (dividends, rents), reinforcing the gap.**", zh: "**财富是过去储蓄与遗产的**存量**积累;收入差距随时间复利累积,财富本身又产生更多收入(股息、租金),差距自我强化。**" } },
        { id: "c", text: { en: "Wealth cannot be inherited.", zh: "财富不可继承。" } },
        { id: "d", text: { en: "Income inequality is actually larger than wealth inequality.", zh: "收入不平等实际大于财富不平等。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Income is a **flow** (per-year earnings); wealth is a **stock** (net assets at a point in time). Even modest annual differences in saving and investment returns compound dramatically over decades. Inheritance transfers wealth (not income) across generations. And wealth itself generates income (rent, interest, capital gains), creating a reinforcing cycle — so wealth Gini is typically 0.70–0.85 while income Gini is 0.30–0.50.",
        zh: "收入是**流量**(年度收益);财富是**存量**(某时点净资产)。即便年度储蓄与投资收益差距不大,几十年复利也放大得惊人。遗产是财富(非收入)的代际转移。且财富本身产生收入(租金、利息、资本利得),形成自我强化——因此财富 Gini 常在 0.70~0.85,而收入 Gini 约 0.30~0.50。",
      },
    },
    {
      id: "u6q15",
      prompt: {
        en: "A government proposes a large expansion of the Earned Income Tax Credit (EITC), which adds a per-hour bonus to low-wage workers' earnings. Predict the likely effects in the competitive low-wage labor market.",
        zh: "政府计划大幅扩大劳动所得税抵免(EITC)——对低收入工人的工时按比例补贴。预测其在竞争性低薪劳动市场的影响。",
      },
      choices: [
        { id: "a", text: { en: "No change — transfers don't affect labor markets.", zh: "无影响——转移支付不影响劳动市场。" } },
        { id: "b", text: { en: "**Labor supply shifts right (workers willing to supply more labor at any gross wage because post-EITC income is higher); equilibrium gross wage falls slightly, but post-EITC take-home pay rises and employment rises.**", zh: "**劳动供给右移(工人在任何税前工资下愿意供给更多,因为含 EITC 后收入更高);均衡税前工资略降,但含 EITC 到手收入上升,雇用增加。**" } },
        { id: "c", text: { en: "Employment falls — subsidies always reduce employment.", zh: "雇用下降——补贴总是降低就业。" } },
        { id: "d", text: { en: "Employment rises and wages rise (both for firms and workers).", zh: "雇用上升,(企业与工人)工资都上升。" } },
      ],
      answerId: "b",
      explanation: {
        en: "EITC is a per-hour **subsidy to workers**, which shifts S_L **right** (workers require a lower gross wage for any given L, because the subsidy boosts their effective earnings). In equilibrium: L rises, gross wage (what firms pay) **falls** slightly, but take-home pay (gross + EITC) **rises** for workers. Unlike a minimum wage, EITC expands employment while raising low-worker income — one of the rare policies economists across the political spectrum generally endorse. Choice D wrongly claims firms' wage cost rises; the subsidy actually slightly lowers it.",
        zh: "EITC 是对**工人**的按小时**补贴**,使 S_L **右移**(任意 L 下工人所需的税前工资下降,因为补贴提升其实际收入)。均衡:L 上升;税前工资(企业所付)**略降**;工人到手(税前 + EITC)**上升**。与最低工资不同,EITC 同时扩大就业并提高低收入工人收入——是跨立场经济学家普遍认可的稀有政策之一。选项 D 错了:补贴使企业工资成本略降,而非上升。",
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

export const apPhysics1: Subject = {
  slug: "ap-physics-1",
  title: { en: "AP Physics 1", zh: "AP 物理 1" },
  tagline: {
    en: "Mechanics, energy, and waves — the foundations of how the physical world moves.",
    zh: "力学、能量与波动——物理世界运动的基础。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "Kinematics", zh: "运动学" },
      description: {
        en: "Describing motion with position, velocity, and acceleration in one and two dimensions.",
        zh: "用位置、速度与加速度描述一维与二维运动。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Position, Velocity & Acceleration", zh: "位置、速度与加速度" }, summary: { en: "Distinguishing scalar vs vector quantities and the relationship between them.", zh: "区分标量与矢量,理解三者之间的关系。" } },
        { slug: "topic-2", title: { en: "Representations of Motion", zh: "运动的表示" }, summary: { en: "Reading and translating between motion graphs (x-t, v-t, a-t).", zh: "在 x-t、v-t、a-t 图之间转换与解读。" } },
        { slug: "topic-3", title: { en: "Kinematic Equations (1D)", zh: "一维运动学方程" }, summary: { en: "The four constant-acceleration equations and when to use each.", zh: "四个匀加速运动方程及其使用条件。" } },
        { slug: "topic-4", title: { en: "Free Fall", zh: "自由落体" }, summary: { en: "Vertical motion under gravity alone — symmetry and sign conventions.", zh: "仅受重力的垂直运动——对称性与符号约定。" } },
        { slug: "topic-5", title: { en: "Projectile Motion", zh: "抛体运动" }, summary: { en: "Independent horizontal and vertical components of 2D motion.", zh: "二维运动中水平与竖直分量的独立性。" } },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Force and Translational Dynamics", zh: "力与平动动力学" },
      description: {
        en: "Newton's laws, force diagrams, friction, and uniform circular motion.",
        zh: "牛顿定律、受力分析图、摩擦力与匀速圆周运动。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Newton's First Law & Equilibrium", zh: "牛顿第一定律与平衡" }, summary: { en: "Inertia and the conditions for translational equilibrium.", zh: "惯性与平动平衡条件。" } },
        { slug: "topic-2", title: { en: "Common Forces", zh: "常见的力" }, summary: { en: "Gravity, normal, tension, friction, and spring forces.", zh: "重力、法向力、张力、摩擦力与弹簧力。" } },
        { slug: "topic-3", title: { en: "Free-Body Diagrams", zh: "受力分析图" }, summary: { en: "Isolating an object and drawing every force acting on it.", zh: "隔离物体并标出其受到的所有力。" } },
        { slug: "topic-4", title: { en: "Newton's Second Law", zh: "牛顿第二定律" }, summary: { en: "ΣF = ma applied to systems with multiple forces.", zh: "ΣF = ma 在多力系统中的应用。" } },
        { slug: "topic-5", title: { en: "Newton's Third Law", zh: "牛顿第三定律" }, summary: { en: "Action–reaction pairs and how they act on different objects.", zh: "作用与反作用——分别作用于不同物体。" } },
        { slug: "topic-6", title: { en: "Uniform Circular Motion", zh: "匀速圆周运动" }, summary: { en: "Centripetal acceleration and the net inward force.", zh: "向心加速度与指向圆心的合力。" } },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Work, Energy & Power", zh: "功、能量与功率" },
      description: {
        en: "Energy as a conserved quantity and how forces transfer it.",
        zh: "能量守恒以及力如何传递能量。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Work & the Work–Energy Theorem", zh: "功与动能定理" }, summary: { en: "W = F·d·cosθ and how net work changes kinetic energy.", zh: "W = F·d·cosθ;合外力做功改变动能。" } },
        { slug: "topic-2", title: { en: "Kinetic & Potential Energy", zh: "动能与势能" }, summary: { en: "Translational KE, gravitational PE, and elastic spring PE.", zh: "平动动能、重力势能与弹性势能。" } },
        { slug: "topic-3", title: { en: "Conservation of Mechanical Energy", zh: "机械能守恒" }, summary: { en: "When KE + PE is constant, and what breaks the conservation.", zh: "KE + PE 何时守恒,何种因素打破守恒。" } },
        { slug: "topic-4", title: { en: "Power", zh: "功率" }, summary: { en: "Rate of doing work — P = W/t and P = F·v.", zh: "做功的速率——P = W/t 与 P = F·v。" } },
      ],
    },
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Linear Momentum", zh: "线动量" },
      description: {
        en: "Momentum, impulse, and conservation in collisions.",
        zh: "动量、冲量与碰撞中的守恒。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Momentum & Impulse", zh: "动量与冲量" }, summary: { en: "p = mv and J = FΔt = Δp; impulse from F-t graphs.", zh: "p = mv 与 J = FΔt = Δp;由 F-t 图求冲量。" } },
        { slug: "topic-2", title: { en: "Conservation of Momentum", zh: "动量守恒" }, summary: { en: "Total momentum of an isolated system is constant.", zh: "孤立系统总动量保持不变。" } },
        { slug: "topic-3", title: { en: "Elastic vs Inelastic Collisions", zh: "弹性与非弹性碰撞" }, summary: { en: "When kinetic energy is conserved — and when it isn't.", zh: "动能何时守恒、何时不守恒。" } },
        { slug: "topic-4", title: { en: "Two-Dimensional Collisions", zh: "二维碰撞" }, summary: { en: "Conserving momentum component-by-component.", zh: "按分量守恒动量。" } },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Torque and Rotational Dynamics", zh: "力矩与转动动力学" },
      description: {
        en: "Rotational analogues of force and Newton's second law.",
        zh: "力与牛顿第二定律的转动对应。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Rotational Kinematics", zh: "转动运动学" }, summary: { en: "Angular position, velocity, and acceleration; ω, α, θ.", zh: "角位移、角速度与角加速度——ω、α、θ。" } },
        { slug: "topic-2", title: { en: "Torque", zh: "力矩" }, summary: { en: "τ = r·F·sinθ — what makes things rotate.", zh: "τ = r·F·sinθ——使物体转动的原因。" } },
        { slug: "topic-3", title: { en: "Rotational Inertia", zh: "转动惯量" }, summary: { en: "Mass distribution determines how hard it is to spin an object.", zh: "质量分布决定转动一个物体的难易程度。" } },
        { slug: "topic-4", title: { en: "Newton's Second Law for Rotation", zh: "转动形式的牛顿第二定律" }, summary: { en: "Στ = Iα — the rotational analogue of ΣF = ma.", zh: "Στ = Iα——ΣF = ma 的转动对应。" } },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Energy & Momentum of Rotating Systems", zh: "转动系统的能量与动量" },
      description: {
        en: "Rotational kinetic energy, angular momentum, and rolling motion.",
        zh: "转动动能、角动量与滚动运动。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Rotational Kinetic Energy", zh: "转动动能" }, summary: { en: "KE_rot = ½Iω² and energy conservation with rotation.", zh: "KE_rot = ½Iω² 与含转动的能量守恒。" } },
        { slug: "topic-2", title: { en: "Angular Momentum", zh: "角动量" }, summary: { en: "L = Iω; angular impulse and changes in L.", zh: "L = Iω;角冲量与 L 的变化。" } },
        { slug: "topic-3", title: { en: "Conservation of Angular Momentum", zh: "角动量守恒" }, summary: { en: "When external torque is zero, total L is constant.", zh: "外力矩为零时,总 L 守恒。" } },
        { slug: "topic-4", title: { en: "Rolling Motion", zh: "滚动运动" }, summary: { en: "Combining translation and rotation; rolling without slipping.", zh: "平动与转动的结合;无滑滚动。" } },
      ],
    },
    {
      slug: "unit-7",
      number: 7,
      title: { en: "Oscillations", zh: "振动" },
      description: {
        en: "Simple harmonic motion, springs, and pendulums.",
        zh: "简谐运动、弹簧与单摆。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Simple Harmonic Motion", zh: "简谐运动" }, summary: { en: "Restoring force proportional to displacement — sinusoidal motion.", zh: "回复力与位移成正比——正弦运动。" } },
        { slug: "topic-2", title: { en: "Mass-Spring Systems", zh: "弹簧振子" }, summary: { en: "Period T = 2π√(m/k); energy oscillating between KE and elastic PE.", zh: "周期 T = 2π√(m/k);能量在 KE 与弹性势能之间往复。" } },
        { slug: "topic-3", title: { en: "Pendulums", zh: "单摆" }, summary: { en: "Small-angle approximation; T = 2π√(L/g).", zh: "小角度近似;T = 2π√(L/g)。" } },
      ],
    },
    {
      slug: "unit-8",
      number: 8,
      title: { en: "Fluids", zh: "流体" },
      description: {
        en: "Density, pressure, buoyancy, and fluid flow.",
        zh: "密度、压强、浮力与流体流动。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Density & Pressure", zh: "密度与压强" }, summary: { en: "ρ = m/V and P = F/A; pressure variation with depth.", zh: "ρ = m/V 与 P = F/A;压强随深度的变化。" } },
        { slug: "topic-2", title: { en: "Buoyancy & Archimedes' Principle", zh: "浮力与阿基米德原理" }, summary: { en: "Buoyant force equals the weight of displaced fluid.", zh: "浮力等于排开流体的重量。" } },
        { slug: "topic-3", title: { en: "Continuity Equation", zh: "连续性方程" }, summary: { en: "Conservation of mass in flow: A₁v₁ = A₂v₂.", zh: "流动中的质量守恒:A₁v₁ = A₂v₂。" } },
        { slug: "topic-4", title: { en: "Bernoulli's Equation", zh: "伯努利方程" }, summary: { en: "Energy conservation along a streamline of an ideal fluid.", zh: "理想流体沿流线的能量守恒。" } },
      ],
    },
  ],
};

export const apChemistry: Subject = {
  slug: "ap-chem",
  title: { en: "AP Chemistry", zh: "AP 化学" },
  tagline: {
    en: "Atoms, reactions, and the quantitative rules behind matter and change.",
    zh: "原子、反应,以及物质与变化背后的定量规律。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "Atomic Structure & Properties", zh: "原子结构与性质" },
      description: {
        en: "Moles, atomic structure, electron configurations, and periodic trends.",
        zh: "摩尔、原子结构、电子排布与周期性规律。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Moles & Molar Mass", zh: "摩尔与摩尔质量" }, summary: { en: "Counting atoms and molecules with Avogadro's number.", zh: "用阿伏伽德罗常数计数原子与分子。" } },
        { slug: "topic-2", title: { en: "Mass Spectrometry", zh: "质谱法" }, summary: { en: "Identifying isotopes and computing average atomic mass.", zh: "鉴定同位素并计算平均原子质量。" } },
        { slug: "topic-3", title: { en: "Atomic Structure & Electron Configuration", zh: "原子结构与电子排布" }, summary: { en: "Orbitals, the aufbau principle, Hund's rule, Pauli exclusion.", zh: "原子轨道、构造原理、洪特规则与泡利不相容原理。" } },
        { slug: "topic-4", title: { en: "Photoelectron Spectroscopy", zh: "光电子能谱" }, summary: { en: "Reading PES plots to confirm electron configuration.", zh: "通过 PES 图谱验证电子排布。" } },
        { slug: "topic-5", title: { en: "Periodic Trends", zh: "周期性规律" }, summary: { en: "Atomic radius, ionization energy, electronegativity across the table.", zh: "原子半径、电离能、电负性的周期变化。" } },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Molecular & Ionic Compound Structure & Properties", zh: "分子与离子化合物的结构与性质" },
      description: {
        en: "Bonding types, Lewis structures, VSEPR geometry, and intermolecular forces.",
        zh: "化学键、路易斯结构、VSEPR 几何与分子间作用力。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Types of Chemical Bonds", zh: "化学键的类型" }, summary: { en: "Ionic, covalent, and metallic bonding — and how to predict them.", zh: "离子键、共价键与金属键——以及如何判断。" } },
        { slug: "topic-2", title: { en: "Lewis Structures & Resonance", zh: "路易斯结构与共振" }, summary: { en: "Drawing electron-dot structures and showing resonance hybrids.", zh: "绘制电子点式并展示共振杂化结构。" } },
        { slug: "topic-3", title: { en: "VSEPR & Molecular Geometry", zh: "VSEPR 与分子几何" }, summary: { en: "Predicting shape from electron-pair repulsion.", zh: "由电子对排斥推断几何形状。" } },
        { slug: "topic-4", title: { en: "Bond Polarity & Molecular Polarity", zh: "键的极性与分子的极性" }, summary: { en: "Vector sum of bond dipoles determines molecular polarity.", zh: "键偶极的矢量和决定分子极性。" } },
        { slug: "topic-5", title: { en: "Intermolecular Forces", zh: "分子间作用力" }, summary: { en: "London dispersion, dipole-dipole, hydrogen bonding — strength order.", zh: "色散力、偶极-偶极、氢键——强度比较。" } },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Properties of Substances & Mixtures", zh: "物质与混合物的性质" },
      description: {
        en: "States of matter, gas laws, solutions, and spectroscopy.",
        zh: "物质状态、气体定律、溶液与光谱分析。",
      },
      topics: [
        { slug: "topic-1", title: { en: "States of Matter", zh: "物质的状态" }, summary: { en: "Solids, liquids, gases — particle motion and energy.", zh: "固、液、气——粒子运动与能量。" } },
        { slug: "topic-2", title: { en: "Ideal Gas Law", zh: "理想气体定律" }, summary: { en: "PV = nRT and the kinetic molecular theory.", zh: "PV = nRT 与气体分子运动论。" } },
        { slug: "topic-3", title: { en: "Solutions & Mixtures", zh: "溶液与混合物" }, summary: { en: "Solubility, concentration units, and dilution.", zh: "溶解度、浓度单位与稀释。" } },
        { slug: "topic-4", title: { en: "Separation Techniques", zh: "分离技术" }, summary: { en: "Filtration, distillation, chromatography — when to use each.", zh: "过滤、蒸馏、色谱——分别适用何种情况。" } },
        { slug: "topic-5", title: { en: "Spectroscopy & the Electromagnetic Spectrum", zh: "光谱与电磁波谱" }, summary: { en: "Beer–Lambert law and identifying substances by absorption.", zh: "比尔-朗伯定律——通过吸光鉴定物质。" } },
      ],
    },
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Chemical Reactions", zh: "化学反应" },
      description: {
        en: "Reaction types, balancing, stoichiometry, and net ionic equations.",
        zh: "反应类型、配平、化学计量与离子方程式。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Physical vs Chemical Changes", zh: "物理变化与化学变化" }, summary: { en: "Identifying whether new substances are formed.", zh: "判断是否生成新物质。" } },
        { slug: "topic-2", title: { en: "Balancing Chemical Equations", zh: "配平化学方程式" }, summary: { en: "Conservation of atoms and charge.", zh: "原子与电荷守恒。" } },
        { slug: "topic-3", title: { en: "Stoichiometry", zh: "化学计量" }, summary: { en: "Mole ratios, limiting reactants, percent yield.", zh: "摩尔比、限量反应物与产率。" } },
        { slug: "topic-4", title: { en: "Types of Reactions", zh: "反应类型" }, summary: { en: "Synthesis, decomposition, single/double replacement, combustion.", zh: "化合、分解、置换、复分解、燃烧反应。" } },
        { slug: "topic-5", title: { en: "Acid–Base & Redox Reactions", zh: "酸碱与氧化还原反应" }, summary: { en: "Identifying H+ transfer and electron transfer in equations.", zh: "识别方程式中的质子转移与电子转移。" } },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Kinetics", zh: "化学动力学" },
      description: {
        en: "Reaction rates, rate laws, mechanisms, and catalysis.",
        zh: "反应速率、速率方程、机理与催化作用。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Reaction Rates", zh: "反应速率" }, summary: { en: "How concentration changes with time.", zh: "浓度随时间的变化。" } },
        { slug: "topic-2", title: { en: "Rate Laws", zh: "速率方程" }, summary: { en: "Determining order and rate constants from data.", zh: "由实验数据确定反应级数与速率常数。" } },
        { slug: "topic-3", title: { en: "Integrated Rate Laws", zh: "积分速率方程" }, summary: { en: "Zero-, first-, and second-order — half-life formulas.", zh: "零级、一级、二级反应——半衰期公式。" } },
        { slug: "topic-4", title: { en: "Reaction Mechanisms", zh: "反应机理" }, summary: { en: "Elementary steps, intermediates, and the rate-determining step.", zh: "基元反应、中间体与决速步骤。" } },
        { slug: "topic-5", title: { en: "Collision Theory & Catalysis", zh: "碰撞理论与催化" }, summary: { en: "Activation energy, the Arrhenius equation, and catalysts.", zh: "活化能、阿伦尼乌斯方程与催化剂。" } },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Thermodynamics", zh: "热力学" },
      description: {
        en: "Energy changes in chemical and physical processes.",
        zh: "化学与物理过程中的能量变化。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Endothermic & Exothermic Processes", zh: "吸热与放热过程" }, summary: { en: "Direction of energy flow between system and surroundings.", zh: "系统与环境间的能量流向。" } },
        { slug: "topic-2", title: { en: "Heat Transfer & Calorimetry", zh: "热传递与量热法" }, summary: { en: "q = mcΔT and bomb/coffee-cup calorimetry.", zh: "q = mcΔT 与弹式/咖啡杯量热实验。" } },
        { slug: "topic-3", title: { en: "Enthalpy of Reaction", zh: "反应焓" }, summary: { en: "ΔH from bond energies and standard enthalpies of formation.", zh: "由键能与标准生成焓求 ΔH。" } },
        { slug: "topic-4", title: { en: "Hess's Law", zh: "盖斯定律" }, summary: { en: "Combining known reactions to find unknown ΔH.", zh: "组合已知反应求未知 ΔH。" } },
      ],
    },
    {
      slug: "unit-7",
      number: 7,
      title: { en: "Equilibrium", zh: "化学平衡" },
      description: {
        en: "Reversible reactions, K expressions, and Le Chatelier's principle.",
        zh: "可逆反应、平衡常数表达式与勒夏特列原理。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Dynamic Equilibrium", zh: "动态平衡" }, summary: { en: "Forward and reverse rates equal at equilibrium.", zh: "平衡时正反应速率等于逆反应速率。" } },
        { slug: "topic-2", title: { en: "Equilibrium Constant K", zh: "平衡常数 K" }, summary: { en: "Writing Kc and Kp expressions; relating them to extent of reaction.", zh: "书写 Kc、Kp 并与反应程度联系。" } },
        { slug: "topic-3", title: { en: "Reaction Quotient Q", zh: "反应商 Q" }, summary: { en: "Comparing Q to K to predict the direction of shift.", zh: "比较 Q 与 K 以判断反应移动方向。" } },
        { slug: "topic-4", title: { en: "Le Chatelier's Principle", zh: "勒夏特列原理" }, summary: { en: "How systems respond to changes in concentration, P, T.", zh: "系统对浓度、压强、温度变化的响应。" } },
        { slug: "topic-5", title: { en: "Solubility Equilibria (Ksp)", zh: "溶解平衡 (Ksp)" }, summary: { en: "Predicting precipitation and the common-ion effect.", zh: "预测沉淀与同离子效应。" } },
      ],
    },
    {
      slug: "unit-8",
      number: 8,
      title: { en: "Acids & Bases", zh: "酸与碱" },
      description: {
        en: "pH, weak acid/base equilibria, buffers, and titrations.",
        zh: "pH、弱酸弱碱平衡、缓冲溶液与滴定。",
      },
      topics: [
        { slug: "topic-1", title: { en: "pH & pOH", zh: "pH 与 pOH" }, summary: { en: "Logarithmic measure of [H⁺] and [OH⁻].", zh: "[H⁺] 与 [OH⁻] 的对数表示。" } },
        { slug: "topic-2", title: { en: "Strong vs Weak Acids & Bases", zh: "强酸碱与弱酸碱" }, summary: { en: "Degree of dissociation and Ka / Kb.", zh: "解离程度与 Ka、Kb。" } },
        { slug: "topic-3", title: { en: "Weak Acid/Base Equilibria", zh: "弱酸/弱碱平衡" }, summary: { en: "ICE tables to find pH of weak-acid solutions.", zh: "用 ICE 表求弱酸溶液的 pH。" } },
        { slug: "topic-4", title: { en: "Buffers", zh: "缓冲溶液" }, summary: { en: "Henderson–Hasselbalch equation and buffer capacity.", zh: "亨德森-哈塞尔巴尔赫方程与缓冲容量。" } },
        { slug: "topic-5", title: { en: "Acid–Base Titrations", zh: "酸碱滴定" }, summary: { en: "Equivalence point, indicators, titration curves.", zh: "等当点、指示剂与滴定曲线。" } },
      ],
    },
    {
      slug: "unit-9",
      number: 9,
      title: { en: "Electrochemistry & Thermodynamics Applications", zh: "电化学与热力学应用" },
      description: {
        en: "Entropy, free energy, and electrochemistry.",
        zh: "熵、自由能与电化学。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Entropy (ΔS)", zh: "熵 (ΔS)" }, summary: { en: "Measure of disorder; predicting sign of ΔS.", zh: "无序程度的度量;判断 ΔS 的符号。" } },
        { slug: "topic-2", title: { en: "Gibbs Free Energy (ΔG)", zh: "吉布斯自由能 (ΔG)" }, summary: { en: "ΔG = ΔH − TΔS predicts spontaneity.", zh: "ΔG = ΔH − TΔS 判断自发性。" } },
        { slug: "topic-3", title: { en: "Coupled Reactions & ΔG° vs K", zh: "耦合反应与 ΔG° 与 K 的关系" }, summary: { en: "ΔG° = −RT ln K — connecting thermodynamics with equilibrium.", zh: "ΔG° = −RT ln K——热力学与平衡的连接。" } },
        { slug: "topic-4", title: { en: "Galvanic & Electrolytic Cells", zh: "原电池与电解池" }, summary: { en: "Spontaneous vs driven redox; cell diagrams and E°cell.", zh: "自发与外加电源的氧化还原;电池图与 E°cell。" } },
        { slug: "topic-5", title: { en: "Electrolysis & Faraday's Law", zh: "电解与法拉第定律" }, summary: { en: "Relating charge to moles of substance produced.", zh: "电荷量与生成物摩尔数的关系。" } },
      ],
    },
  ],
};

// ============================================================
// AP Calculus BC — skeleton (units + topics per College Board CED)
// Notes and questions to be authored topic-by-topic.
// ============================================================

export const apCalculusBC: Subject = {
  slug: "ap-calculus-bc",
  title: { en: "AP Calculus BC", zh: "AP 微积分 BC" },
  tagline: {
    en: "Limits, derivatives, integrals, and infinite series — the language of change.",
    zh: "极限、导数、积分与无穷级数——描述变化的语言。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "Limits & Continuity", zh: "极限与连续性" },
      description: {
        en: "The foundational idea of calculus — approaching values, one-sided limits, and continuous functions.",
        zh: "微积分的基础思想——值的逼近、单侧极限与连续函数。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Introducing Limits via Average Rates of Change", zh: "用平均变化率引入极限" }, summary: { en: "How average rates of change motivate the need for limits.", zh: "平均变化率如何引出对极限的需求。" } },
        { slug: "topic-2", title: { en: "Estimating Limits from Graphs & Tables", zh: "从图像与表格估计极限" }, summary: { en: "Reading limit behavior visually and numerically.", zh: "通过图像与数值判断极限行为。" } },
        { slug: "topic-3", title: { en: "Limit Laws & Algebraic Techniques", zh: "极限运算法则与代数技巧" }, summary: { en: "Sum, product, quotient rules; factoring and rationalizing.", zh: "和、积、商法则;因式分解与分子有理化。" } },
        { slug: "topic-4", title: { en: "Squeeze Theorem", zh: "夹逼定理" }, summary: { en: "Bounding a function between two known limits.", zh: "用两个已知极限夹住未知函数。" } },
        { slug: "topic-5", title: { en: "Continuity at a Point & on an Interval", zh: "点连续与区间连续" }, summary: { en: "The three-part definition of continuity and classifying discontinuities.", zh: "连续性的三条件定义与不连续类型。" } },
        { slug: "topic-6", title: { en: "Infinite Limits & Vertical Asymptotes", zh: "无穷极限与垂直渐近线" }, summary: { en: "When a function grows without bound near a point.", zh: "函数在某点附近无界增长的情形。" } },
        { slug: "topic-7", title: { en: "Limits at Infinity & Horizontal Asymptotes", zh: "无穷处的极限与水平渐近线" }, summary: { en: "End behavior of rational and exponential functions.", zh: "有理函数与指数函数的末端行为。" } },
        { slug: "topic-8", title: { en: "Intermediate Value Theorem", zh: "介值定理" }, summary: { en: "Why continuous functions can't skip values on an interval.", zh: "连续函数为何不能在区间内跳过取值。" } },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Differentiation: Definition & Fundamental Properties", zh: "微分:定义与基本性质" },
      description: {
        en: "The derivative as a limit — and the basic rules that make computing it fast.",
        zh: "导数作为极限的定义——以及使计算变得高效的基本法则。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Average vs Instantaneous Rate of Change", zh: "平均变化率与瞬时变化率" }, summary: { en: "From secant slopes to the tangent line.", zh: "从割线斜率到切线斜率。" } },
        { slug: "topic-2", title: { en: "Definition of the Derivative", zh: "导数的定义" }, summary: { en: "f'(x) = lim (f(x+h) − f(x))/h — the limit definition.", zh: "f'(x) = lim (f(x+h) − f(x))/h——导数的极限定义。" } },
        { slug: "topic-3", title: { en: "Differentiability & Continuity", zh: "可导与连续" }, summary: { en: "Differentiable implies continuous — but not the other way around.", zh: "可导必连续,但连续未必可导。" } },
        { slug: "topic-4", title: { en: "Power Rule", zh: "幂法则" }, summary: { en: "d/dx[xⁿ] = n·xⁿ⁻¹ and its algebraic consequences.", zh: "d/dx[xⁿ] = n·xⁿ⁻¹ 及其代数应用。" } },
        { slug: "topic-5", title: { en: "Derivatives of Trig, Exponential & Logarithmic Functions", zh: "三角、指数与对数函数的导数" }, summary: { en: "The core list every student must memorize.", zh: "每位学生必须记住的核心导数表。" } },
        { slug: "topic-6", title: { en: "Product & Quotient Rules", zh: "乘积法则与商法则" }, summary: { en: "Differentiating combinations of functions.", zh: "对函数组合求导。" } },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Differentiation: Composite, Implicit & Inverse Functions", zh: "微分:复合、隐函数与反函数" },
      description: {
        en: "Extending differentiation to chains, implicit relations, and inverses.",
        zh: "将微分推广到链式、隐式与反函数情形。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Chain Rule", zh: "链式法则" }, summary: { en: "Differentiating compositions: (f∘g)' = f'(g)·g'.", zh: "复合函数求导:(f∘g)' = f'(g)·g'。" } },
        { slug: "topic-2", title: { en: "Implicit Differentiation", zh: "隐函数求导" }, summary: { en: "Finding dy/dx when y is not isolated.", zh: "当 y 未被显式表达时求 dy/dx。" } },
        { slug: "topic-3", title: { en: "Derivatives of Inverse Functions", zh: "反函数的导数" }, summary: { en: "(f⁻¹)'(y) = 1 / f'(x) — the reciprocal-slope rule.", zh: "(f⁻¹)'(y) = 1 / f'(x)——互为倒数的斜率法则。" } },
        { slug: "topic-4", title: { en: "Derivatives of Inverse Trig Functions", zh: "反三角函数的导数" }, summary: { en: "Formulas for arcsin, arccos, arctan and their family.", zh: "arcsin、arccos、arctan 等函数的导数公式。" } },
        { slug: "topic-5", title: { en: "Higher-Order Derivatives", zh: "高阶导数" }, summary: { en: "f''(x), f'''(x) and their meanings in motion and curvature.", zh: "f''(x)、f'''(x) 及其在运动与曲率中的含义。" } },
      ],
    },
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Contextual Applications of Differentiation", zh: "微分的情境应用" },
      description: {
        en: "Rates of change in real-world contexts: motion, related rates, approximation.",
        zh: "真实情境中的变化率:运动、相关变化率与近似。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Straight-Line Motion", zh: "直线运动" }, summary: { en: "Position, velocity, acceleration and the sign of each.", zh: "位置、速度、加速度及其符号含义。" } },
        { slug: "topic-2", title: { en: "Rates of Change in Applied Contexts", zh: "应用情境中的变化率" }, summary: { en: "Interpreting derivatives with units.", zh: "结合单位理解导数的实际含义。" } },
        { slug: "topic-3", title: { en: "Related Rates", zh: "相关变化率" }, summary: { en: "Chain-rule problems where multiple quantities vary with time.", zh: "多个变量随时间变化的链式法则问题。" } },
        { slug: "topic-4", title: { en: "Linear Approximation & Differentials", zh: "线性近似与微分" }, summary: { en: "Using the tangent line to estimate nearby values.", zh: "用切线估计邻近点的函数值。" } },
        { slug: "topic-5", title: { en: "L'Hôpital's Rule", zh: "洛必达法则" }, summary: { en: "Resolving 0/0 and ∞/∞ indeterminate forms.", zh: "处理 0/0 与 ∞/∞ 不定型。" } },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Analytical Applications of Differentiation", zh: "微分的解析应用" },
      description: {
        en: "Using derivatives to describe shape — extrema, concavity, and curve sketching.",
        zh: "用导数描述函数形态——极值、凹凸性与曲线草图。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Mean Value Theorem & Extreme Value Theorem", zh: "中值定理与极值定理" }, summary: { en: "What continuity and differentiability guarantee on a closed interval.", zh: "闭区间上连续与可导所保证的结论。" } },
        { slug: "topic-2", title: { en: "Critical Points & Increasing/Decreasing Behavior", zh: "临界点与单调性" }, summary: { en: "Where f'(x) = 0 or undefined — and what the sign of f' tells us.", zh: "f'(x) = 0 或不存在的点,以及 f' 符号的含义。" } },
        { slug: "topic-3", title: { en: "First & Second Derivative Tests", zh: "一阶与二阶导数检验" }, summary: { en: "Classifying local maxima, minima, and points of inflection.", zh: "判别局部极大、极小与拐点。" } },
        { slug: "topic-4", title: { en: "Concavity & Inflection Points", zh: "凹凸性与拐点" }, summary: { en: "The sign of f'' and how the graph bends.", zh: "f'' 的符号与图像的弯曲方向。" } },
        { slug: "topic-5", title: { en: "Optimization", zh: "最优化问题" }, summary: { en: "Finding maxima and minima in applied problems.", zh: "在应用问题中求最大值与最小值。" } },
        { slug: "topic-6", title: { en: "Curve Sketching", zh: "函数图像绘制" }, summary: { en: "Putting it all together — a full qualitative picture of f.", zh: "综合以上信息——描绘 f 的完整定性图像。" } },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Integration & Accumulation of Change", zh: "积分与变化量的累积" },
      description: {
        en: "The integral as accumulation — Riemann sums, antiderivatives, and the FTC.",
        zh: "积分作为累积量——黎曼和、反导数与微积分基本定理。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Riemann Sums & Definite Integrals", zh: "黎曼和与定积分" }, summary: { en: "Approximating area with rectangles; the limit as n → ∞.", zh: "用矩形近似面积;当 n → ∞ 时的极限。" } },
        { slug: "topic-2", title: { en: "Fundamental Theorem of Calculus", zh: "微积分基本定理" }, summary: { en: "The link between derivatives and definite integrals.", zh: "导数与定积分之间的联系。" } },
        { slug: "topic-3", title: { en: "Antiderivatives & Indefinite Integrals", zh: "反导数与不定积分" }, summary: { en: "Reversing differentiation and the constant of integration.", zh: "对求导的逆运算与积分常数。" } },
        { slug: "topic-4", title: { en: "u-Substitution", zh: "换元积分法" }, summary: { en: "Reversing the chain rule for integration.", zh: "对链式法则的逆运算。" } },
        { slug: "topic-5", title: { en: "Integration by Parts (BC)", zh: "分部积分法(BC)" }, summary: { en: "∫u dv = uv − ∫v du — reversing the product rule.", zh: "∫u dv = uv − ∫v du——对乘积法则的逆运算。" } },
        { slug: "topic-6", title: { en: "Partial Fractions (BC)", zh: "部分分式(BC)" }, summary: { en: "Decomposing rational integrands into simpler pieces.", zh: "将有理被积函数分解为较简单的部分。" } },
        { slug: "topic-7", title: { en: "Improper Integrals (BC)", zh: "广义积分(BC)" }, summary: { en: "Integrals with infinite limits or unbounded integrands.", zh: "含无穷积分限或无界被积函数的积分。" } },
      ],
    },
    {
      slug: "unit-7",
      number: 7,
      title: { en: "Differential Equations", zh: "微分方程" },
      description: {
        en: "Modeling change with equations that involve a derivative.",
        zh: "用含导数的方程对变化进行建模。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Modeling with Differential Equations", zh: "用微分方程建模" }, summary: { en: "Translating real-world rates into equations.", zh: "将真实情境中的变化率转化为方程。" } },
        { slug: "topic-2", title: { en: "Slope Fields", zh: "斜率场" }, summary: { en: "Visualizing solution families without solving.", zh: "在不求解的情况下可视化解族。" } },
        { slug: "topic-3", title: { en: "Separation of Variables", zh: "分离变量法" }, summary: { en: "Solving separable first-order ODEs.", zh: "求解可分离变量的一阶常微分方程。" } },
        { slug: "topic-4", title: { en: "Exponential Growth & Decay", zh: "指数增长与衰减" }, summary: { en: "The archetype dy/dt = ky and its solutions.", zh: "原型方程 dy/dt = ky 及其解。" } },
        { slug: "topic-5", title: { en: "Euler's Method (BC)", zh: "欧拉法(BC)" }, summary: { en: "Numerical approximation of solutions step by step.", zh: "对解进行逐步数值近似。" } },
        { slug: "topic-6", title: { en: "Logistic Growth (BC)", zh: "逻辑斯蒂增长(BC)" }, summary: { en: "dP/dt = kP(1 − P/L) and carrying capacity.", zh: "dP/dt = kP(1 − P/L) 与环境容纳量。" } },
      ],
    },
    {
      slug: "unit-8",
      number: 8,
      title: { en: "Applications of Integration", zh: "积分的应用" },
      description: {
        en: "Using integrals to compute area, volume, and average value.",
        zh: "用积分计算面积、体积与平均值。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Average Value of a Function", zh: "函数的平均值" }, summary: { en: "(1/(b−a))·∫ₐᵇ f(x) dx — the integral definition.", zh: "(1/(b−a))·∫ₐᵇ f(x) dx——平均值的积分定义。" } },
        { slug: "topic-2", title: { en: "Accumulation & Net Change", zh: "累积量与净变化" }, summary: { en: "Integrating a rate to find total change.", zh: "对变化率积分以得到总变化量。" } },
        { slug: "topic-3", title: { en: "Area Between Curves", zh: "曲线间的面积" }, summary: { en: "∫(top − bottom) dx — and when to integrate with respect to y.", zh: "∫(上 − 下) dx,以及何时应对 y 积分。" } },
        { slug: "topic-4", title: { en: "Volumes by Cross Sections", zh: "横截面法求体积" }, summary: { en: "Known cross-sectional shapes along an axis.", zh: "沿某轴已知横截面形状的体积。" } },
        { slug: "topic-5", title: { en: "Disks & Washers", zh: "圆盘法与垫圈法" }, summary: { en: "Rotating a region about an axis.", zh: "将区域绕轴旋转所得的体积。" } },
        { slug: "topic-6", title: { en: "Arc Length (BC)", zh: "弧长(BC)" }, summary: { en: "∫√(1 + (dy/dx)²) dx — the length of a curve.", zh: "∫√(1 + (dy/dx)²) dx——曲线长度。" } },
      ],
    },
    {
      slug: "unit-9",
      number: 9,
      title: { en: "Parametric, Polar & Vector-Valued Functions (BC)", zh: "参数方程、极坐标与向量值函数(BC)" },
      description: {
        en: "BC-only territory — curves described by parameters, angles, or vectors.",
        zh: "仅限 BC 的内容——用参数、角度或向量描述的曲线。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Parametric Equations: Derivatives", zh: "参数方程的导数" }, summary: { en: "dy/dx = (dy/dt)/(dx/dt) and second derivatives.", zh: "dy/dx = (dy/dt)/(dx/dt) 与二阶导数。" } },
        { slug: "topic-2", title: { en: "Parametric Arc Length", zh: "参数曲线弧长" }, summary: { en: "∫√((dx/dt)² + (dy/dt)²) dt.", zh: "∫√((dx/dt)² + (dy/dt)²) dt。" } },
        { slug: "topic-3", title: { en: "Vector-Valued Functions & Motion", zh: "向量值函数与运动" }, summary: { en: "Position, velocity, acceleration vectors; speed = |v|.", zh: "位置、速度、加速度向量;速率 = |v|。" } },
        { slug: "topic-4", title: { en: "Polar Coordinates & Graphs", zh: "极坐标与极坐标图形" }, summary: { en: "Converting between (r, θ) and (x, y); common polar curves.", zh: "(r, θ) 与 (x, y) 的互换;常见极坐标曲线。" } },
        { slug: "topic-5", title: { en: "Derivatives in Polar Form", zh: "极坐标下的导数" }, summary: { en: "Finding dy/dx from r(θ).", zh: "由 r(θ) 求 dy/dx。" } },
        { slug: "topic-6", title: { en: "Area in Polar Coordinates", zh: "极坐标下的面积" }, summary: { en: "A = ½·∫r² dθ — and area between polar curves.", zh: "A = ½·∫r² dθ;极坐标曲线间的面积。" } },
      ],
    },
    {
      slug: "unit-10",
      number: 10,
      title: { en: "Infinite Sequences & Series (BC)", zh: "无穷数列与级数(BC)" },
      description: {
        en: "Convergence, divergence, and representing functions with Taylor series.",
        zh: "收敛、发散,以及用泰勒级数表示函数。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Sequences & Their Limits", zh: "数列及其极限" }, summary: { en: "When a sequence converges and to what.", zh: "数列何时收敛,以及收敛到何值。" } },
        { slug: "topic-2", title: { en: "Geometric Series", zh: "几何级数" }, summary: { en: "∑arⁿ converges iff |r| < 1; sum = a/(1 − r).", zh: "∑arⁿ 当且仅当 |r| < 1 时收敛;和为 a/(1 − r)。" } },
        { slug: "topic-3", title: { en: "nth-Term Test for Divergence", zh: "发散的 n 项判别法" }, summary: { en: "If lim aₙ ≠ 0, the series diverges.", zh: "若 lim aₙ ≠ 0,级数发散。" } },
        { slug: "topic-4", title: { en: "Integral & p-Series Tests", zh: "积分判别法与 p-级数" }, summary: { en: "∑1/nᵖ converges iff p > 1.", zh: "∑1/nᵖ 当且仅当 p > 1 时收敛。" } },
        { slug: "topic-5", title: { en: "Comparison & Limit-Comparison Tests", zh: "比较判别法与极限比较判别法" }, summary: { en: "Bounding unknown series by known ones.", zh: "用已知级数约束未知级数。" } },
        { slug: "topic-6", title: { en: "Alternating Series & Absolute Convergence", zh: "交错级数与绝对收敛" }, summary: { en: "Alternating series test and the error bound.", zh: "交错级数判别法与误差界。" } },
        { slug: "topic-7", title: { en: "Ratio Test", zh: "比值判别法" }, summary: { en: "lim |aₙ₊₁/aₙ| < 1 ⇒ absolute convergence.", zh: "lim |aₙ₊₁/aₙ| < 1 ⇒ 绝对收敛。" } },
        { slug: "topic-8", title: { en: "Power Series & Radius of Convergence", zh: "幂级数与收敛半径" }, summary: { en: "Finding the interval where a power series converges.", zh: "求幂级数收敛的区间。" } },
        { slug: "topic-9", title: { en: "Taylor & Maclaurin Series", zh: "泰勒级数与麦克劳林级数" }, summary: { en: "Representing functions as infinite polynomials.", zh: "将函数表示为无穷多项式。" } },
        { slug: "topic-10", title: { en: "Lagrange Error Bound", zh: "拉格朗日误差界" }, summary: { en: "Bounding the error of a Taylor-polynomial approximation.", zh: "估计泰勒多项式近似的误差。" } },
      ],
    },
  ],
};

export const apEngLang: Subject = {
  slug: "ap-eng-lang",
  title: { en: "AP English Language & Composition", zh: "AP 英语语言与写作" },
  tagline: {
    en: "Reading rhetoric, building arguments, and writing with style and precision.",
    zh: "解读修辞、构建论证,并以风格与精度写作。",
  },
  units: [
    {
      slug: "unit-1",
      number: 1,
      title: { en: "The Rhetorical Situation", zh: "修辞情境" },
      description: {
        en: "Identifying speaker, audience, purpose, context, and exigence in any text.",
        zh: "识别任何文本中的说话者、受众、目的、语境与触发因素。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Speaker, Audience & Purpose", zh: "说话者、受众与目的" }, summary: { en: "Who is writing, to whom, and why — the foundation of analysis.", zh: "谁在写、写给谁、为何写——分析的基础。" } },
        { slug: "topic-2", title: { en: "Context & Exigence", zh: "语境与触发因素" }, summary: { en: "The historical and immediate situation that prompts the text.", zh: "促成文本的历史与即时情境。" } },
        { slug: "topic-3", title: { en: "SOAPSTone Framework", zh: "SOAPSTone 分析法" }, summary: { en: "Speaker, Occasion, Audience, Purpose, Subject, Tone — a quick analytical lens.", zh: "说话者、场合、受众、目的、主题、语气——快速分析框架。" } },
        { slug: "topic-4", title: { en: "The Rhetorical Triangle", zh: "修辞三角" }, summary: { en: "How writer, audience, and subject interact to create meaning.", zh: "作者、受众与主题如何互动产生意义。" } },
      ],
    },
    {
      slug: "unit-2",
      number: 2,
      title: { en: "Claims & Evidence", zh: "论点与证据" },
      description: {
        en: "Identifying thesis claims and evaluating the evidence that supports them.",
        zh: "识别中心论点并评估支撑论点的证据。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Thesis & Main Claims", zh: "论点与中心主张" }, summary: { en: "The arguable position the writer is asking the reader to accept.", zh: "作者要求读者接受的可论证立场。" } },
        { slug: "topic-2", title: { en: "Types of Evidence", zh: "证据类型" }, summary: { en: "Facts, statistics, anecdotes, expert testimony, analogies.", zh: "事实、数据、轶事、专家证言与类比。" } },
        { slug: "topic-3", title: { en: "Source Credibility", zh: "来源可信度" }, summary: { en: "Evaluating the reliability and bias of evidence.", zh: "评估证据的可靠性与偏见。" } },
        { slug: "topic-4", title: { en: "Counterclaims & Concession", zh: "反驳与让步" }, summary: { en: "Acknowledging opposing views and refuting or conceding them.", zh: "承认对立观点并予以反驳或让步。" } },
      ],
    },
    {
      slug: "unit-3",
      number: 3,
      title: { en: "Reasoning & Organization", zh: "推理与组织" },
      description: {
        en: "How writers structure ideas to guide readers through an argument.",
        zh: "作者如何组织思想,引导读者跟随论证。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Logical Progression", zh: "逻辑推进" }, summary: { en: "How ideas build on one another from beginning to end.", zh: "思想如何从开篇到结尾层层递进。" } },
        { slug: "topic-2", title: { en: "Inductive vs Deductive Reasoning", zh: "归纳与演绎推理" }, summary: { en: "From specific to general, or general to specific.", zh: "由具体到一般,或由一般到具体。" } },
        { slug: "topic-3", title: { en: "Paragraph Structure", zh: "段落结构" }, summary: { en: "Topic sentence, evidence, commentary, transition.", zh: "主题句、证据、评论与过渡。" } },
        { slug: "topic-4", title: { en: "Transitions & Coherence", zh: "过渡与连贯性" }, summary: { en: "Words and sentences that connect ideas across paragraphs.", zh: "连接段落间思想的词语与句子。" } },
        { slug: "topic-5", title: { en: "Logical Fallacies", zh: "逻辑谬误" }, summary: { en: "Ad hominem, straw man, slippery slope, false dichotomy, etc.", zh: "人身攻击、稻草人、滑坡、二分法谬误等。" } },
      ],
    },
    {
      slug: "unit-4",
      number: 4,
      title: { en: "Style & Diction", zh: "风格与措辞" },
      description: {
        en: "How word choice, sentence structure, and figurative language shape meaning.",
        zh: "措辞、句法结构与修辞手法如何塑造意义。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Diction (Word Choice)", zh: "措辞(词汇选择)" }, summary: { en: "Formal vs informal, connotation vs denotation, register.", zh: "正式与非正式、内涵与外延、语域。" } },
        { slug: "topic-2", title: { en: "Tone & Mood", zh: "语气与氛围" }, summary: { en: "The author's attitude vs the feeling created in the reader.", zh: "作者的态度与读者感受到的氛围。" } },
        { slug: "topic-3", title: { en: "Syntax & Sentence Variation", zh: "句法与句式变化" }, summary: { en: "Sentence length, structure, and rhythm for effect.", zh: "句子长度、结构与节奏的效果。" } },
        { slug: "topic-4", title: { en: "Figurative Language", zh: "修辞手法" }, summary: { en: "Metaphor, simile, personification, hyperbole, irony.", zh: "暗喻、明喻、拟人、夸张与反讽。" } },
        { slug: "topic-5", title: { en: "Schemes & Tropes", zh: "辞格" }, summary: { en: "Anaphora, parallelism, antithesis, chiasmus, asyndeton.", zh: "首语反复、平行结构、对照、交错排列、连词省略。" } },
      ],
    },
    {
      slug: "unit-5",
      number: 5,
      title: { en: "Rhetorical Appeals", zh: "修辞诉诸" },
      description: {
        en: "The classical strategies writers use to persuade.",
        zh: "作者用于说服的经典策略。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Ethos (Credibility)", zh: "Ethos(可信度)" }, summary: { en: "Establishing trust through expertise, character, and goodwill.", zh: "通过专业性、品格与善意建立信任。" } },
        { slug: "topic-2", title: { en: "Pathos (Emotion)", zh: "Pathos(情感)" }, summary: { en: "Connecting with the audience's values and feelings.", zh: "与受众的价值观和情感相联结。" } },
        { slug: "topic-3", title: { en: "Logos (Logic)", zh: "Logos(逻辑)" }, summary: { en: "Reasoning, evidence, and clear argumentative structure.", zh: "推理、证据与清晰的论证结构。" } },
        { slug: "topic-4", title: { en: "Kairos (Timing)", zh: "Kairos(时机)" }, summary: { en: "Why the message lands at this particular moment.", zh: "信息为何在此时此刻触动人心。" } },
      ],
    },
    {
      slug: "unit-6",
      number: 6,
      title: { en: "Synthesis Essay (FRQ Q1)", zh: "综合论证写作 (FRQ 第一题)" },
      description: {
        en: "Combining multiple sources into an original argument.",
        zh: "综合多个来源,形成原创论证。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Reading the Prompt", zh: "审题" }, summary: { en: "Identifying the question's exact demand and scope.", zh: "明确题目要求与范围。" } },
        { slug: "topic-2", title: { en: "Selecting & Citing Sources", zh: "选择与引用来源" }, summary: { en: "Picking the most useful sources and citing them clearly.", zh: "挑选最有用的来源并清楚地引用。" } },
        { slug: "topic-3", title: { en: "Integrating Evidence", zh: "整合证据" }, summary: { en: "Weaving quotes and paraphrase into your own argument.", zh: "将引用与转述融入自己的论证。" } },
        { slug: "topic-4", title: { en: "Synthesis Sophistication", zh: "综合论证的深度" }, summary: { en: "Going beyond summary — making the sources speak to each other.", zh: "超越复述——让来源彼此对话。" } },
      ],
    },
    {
      slug: "unit-7",
      number: 7,
      title: { en: "Rhetorical Analysis Essay (FRQ Q2)", zh: "修辞分析写作 (FRQ 第二题)" },
      description: {
        en: "Analyzing how an author's choices construct meaning.",
        zh: "分析作者的选择如何构建意义。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Defensible Thesis", zh: "可论证的论点" }, summary: { en: "A claim about the writer's rhetorical choices — not just summary.", zh: "关于作者修辞选择的主张——而非简单概述。" } },
        { slug: "topic-2", title: { en: "Choosing Strong Devices", zh: "选择有力的修辞手法" }, summary: { en: "Picking 2–3 high-impact strategies rather than a checklist.", zh: "选择 2–3 个有力的策略,而非罗列清单。" } },
        { slug: "topic-3", title: { en: "How & Why, Not Just What", zh: "解释「如何」与「为何」" }, summary: { en: "Explaining the effect of each device on the audience.", zh: "解释每个手法对受众产生的效果。" } },
        { slug: "topic-4", title: { en: "Sophistication Point", zh: "深度分" }, summary: { en: "Earning the +1 for nuanced or complex argument.", zh: "凭借细腻或复杂的论证获得 +1 深度分。" } },
      ],
    },
    {
      slug: "unit-8",
      number: 8,
      title: { en: "Argument Essay (FRQ Q3)", zh: "论证写作 (FRQ 第三题)" },
      description: {
        en: "Building an original argument from your own knowledge and experience.",
        zh: "基于自身知识与经验,构建原创论证。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Taking a Position", zh: "明确立场" }, summary: { en: "A specific, defensible claim — not a both-sides hedge.", zh: "明确、可论证的立场——避免两边讨好。" } },
        { slug: "topic-2", title: { en: "Evidence from Knowledge", zh: "源自知识的证据" }, summary: { en: "History, literature, current events, personal experience.", zh: "历史、文学、时事与个人经历。" } },
        { slug: "topic-3", title: { en: "Concession & Refutation", zh: "让步与反驳" }, summary: { en: "Acknowledging the opposing view to strengthen your own.", zh: "承认对立观点,以增强自身论证。" } },
        { slug: "topic-4", title: { en: "Sophistication in Argument", zh: "论证的深度" }, summary: { en: "Tension, complications, and qualified claims.", zh: "张力、复杂性与有条件的主张。" } },
      ],
    },
    {
      slug: "unit-9",
      number: 9,
      title: { en: "Multiple Choice Strategies", zh: "选择题策略" },
      description: {
        en: "Reading and writing multiple-choice question types on the AP Lang exam.",
        zh: "AP Lang 考试中阅读与写作类选择题的应对策略。",
      },
      topics: [
        { slug: "topic-1", title: { en: "Reading Analysis Questions", zh: "阅读分析题" }, summary: { en: "Identifying purpose, function, and rhetorical effect of passages.", zh: "识别段落的目的、功能与修辞效果。" } },
        { slug: "topic-2", title: { en: "Writing & Revision Questions", zh: "写作与修改题" }, summary: { en: "Improving clarity, conciseness, evidence, and transitions.", zh: "提升表达的清晰度、简洁度、证据与过渡。" } },
        { slug: "topic-3", title: { en: "Eliminating Wrong Answers", zh: "排除错误选项" }, summary: { en: "Spotting traps: too extreme, off-topic, partly true.", zh: "识别陷阱:过于极端、离题、部分正确。" } },
        { slug: "topic-4", title: { en: "Time Management", zh: "时间管理" }, summary: { en: "Pacing across 45 questions in 60 minutes.", zh: "在 60 分钟内合理分配 45 题的时间。" } },
      ],
    },
  ],
};

// ============================================================
// Final comprehensive practice — 40 MCQs spanning all 6 units.
// Medium-to-hard; many items test cross-unit integration.
// Keyed by subject slug.
// ============================================================

export const finalQuestions: Record<string, Question[]> = {
  "ap-micro": [
    {
      id: "f01",
      prompt: {
        en: "A former lawyer earning **$180,000/year** quits to start a bakery. Year-1 revenue = $320,000. Explicit costs: rent $40k, ingredients $90k, staff $70k. She also invests $150,000 of her own savings (foregone interest = 4%). Compute her **economic profit**.",
        zh: "一位原年薪 **$180,000** 的律师辞职开烘焙店。第 1 年收入 $320,000;显性成本:租金 $40k、原料 $90k、员工 $70k。她还投入了 $150,000 自有储蓄(放弃的利息 4%)。求**经济利润**。",
      },
      choices: [
        { id: "a", text: { en: "$120,000 (revenue − explicit costs only).", zh: "$120,000(仅扣显性成本)。" } },
        { id: "b", text: { en: "$114,000 (subtract only the $6k interest forgone).", zh: "$114,000(仅扣 $6k 利息)。" } },
        { id: "c", text: { en: "**−$66,000** — accounting profit $120k minus implicit costs (salary $180k + interest $6k).", zh: "**−$66,000**——会计利润 $120k 减隐性成本(工资 $180k + 利息 $6k)。" } },
        { id: "d", text: { en: "$320,000 (the full revenue).", zh: "$320,000(全部收入)。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Accounting profit = 320 − 200 = **$120k**. Economic profit subtracts **implicit costs** too: the $180k salary she forgave and $6k interest on her savings. Economic profit = 120 − 180 − 6 = **−$66k**.",
        zh: "会计利润 = 320 − 200 = **$120k**。经济利润还要减**隐性成本**:放弃的工资 $180k 与储蓄利息 $6k。经济利润 = 120 − 180 − 6 = **−$66k**。",
      },
    },
    {
      id: "f02",
      prompt: {
        en: "Country A can produce **10 cars OR 30 wheat**. Country B can produce **4 cars OR 8 wheat**. Identify comparative advantage and whether trading at **1 car : 2.5 wheat** benefits both.",
        zh: "A 国可产 **10 汽车或 30 小麦**;B 国可产 **4 汽车或 8 小麦**。判断比较优势,并说明以 **1 汽车 : 2.5 小麦**贸易是否对双方有利。",
      },
      choices: [
        { id: "a", text: { en: "A has CA in both; trade is irrelevant.", zh: "A 两项皆有 CA;贸易无意义。" } },
        { id: "b", text: { en: "**B has CA in cars (OC = 2 wheat < A's 3 wheat); A has CA in wheat; 1 car : 2.5 wheat falls between the two OCs → both gain.**", zh: "**B 有汽车 CA(OC = 2 小麦 < A 的 3);A 有小麦 CA;1 汽车 : 2.5 小麦位于两 OC 之间 → 双方获益。**" } },
        { id: "c", text: { en: "A has CA in cars (higher absolute productivity).", zh: "A 有汽车 CA(绝对产量更高)。" } },
        { id: "d", text: { en: "Trade benefits B only.", zh: "只有 B 获益。" } },
      ],
      answerId: "b",
      explanation: {
        en: "OC of 1 car: A = 3 wheat; B = 2 wheat. Lower = CA → B has CA in cars, A in wheat. Any terms **strictly between** the two OCs (2 and 3 wheat per car) are mutually beneficial; 2.5 qualifies. CA depends on OC, not absolute productivity.",
        zh: "每辆车 OC:A = 3,B = 2。低者有 CA → B 有汽车 CA,A 有小麦 CA。条件**严格介于**两 OC(2~3)双方获益;2.5 合格。CA 看 OC,不看绝对产量。",
      },
    },
    {
      id: "f03",
      prompt: {
        en: "Which statement about a point ON the production possibilities curve (PPC) is MOST accurate?",
        zh: "关于**位于** PPC 上的某点,下列哪项**最准确**?",
      },
      choices: [
        { id: "a", text: { en: "It is automatically allocatively efficient.", zh: "自动达到配置有效。" } },
        { id: "b", text: { en: "**It is productively efficient (no waste), but only one specific point on the PPC is also allocatively efficient (MSB = MSC).**", zh: "**生产有效(无浪费),但只有 PPC 上一个特定点满足配置有效(MSB = MSC)。**" } },
        { id: "c", text: { en: "Productive and allocative efficiency are the same thing.", zh: "生产有效与配置有效同义。" } },
        { id: "d", text: { en: "Points inside the PPC are allocatively efficient when output is cheap.", zh: "PPC 内部点在成本低时配置有效。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**Productive efficiency** = on PPC. **Allocative efficiency** = the one bundle where MSB = MSC. A country on the PPC may still produce too many cars and too little food; only one point is the 'right' bundle.",
        zh: "**生产有效** = 在 PPC 上;**配置有效** = 唯一的 MSB = MSC 组合。位于 PPC 上可能仍「车多粮少」;只有唯一一点是「正确」组合。",
      },
    },
    {
      id: "f04",
      prompt: {
        en: "In the coffee market, a rise in income **increases** demand by 20 units, while a drought **reduces** supply by 40 units. Predict the signs of ΔP and ΔQ.",
        zh: "咖啡市场:收入上升使需求**增加** 20 单位,干旱使供给**减少** 40 单位。ΔP、ΔQ 方向?",
      },
      choices: [
        { id: "a", text: { en: "P rises, Q rises.", zh: "P 上升,Q 上升。" } },
        { id: "b", text: { en: "**P rises unambiguously; Q FALLS because the supply shift is larger.**", zh: "**P 确定上升;因供给移动幅度更大,Q **下降**。**" } },
        { id: "c", text: { en: "Both ambiguous.", zh: "均不确定。" } },
        { id: "d", text: { en: "P falls, Q falls.", zh: "P 下降,Q 下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "D↑: P↑, Q↑. S↓: P↑, Q↓. Both push P up → **P rises**. On Q, S↓ (40) > D↑ (20), so Q falls. Magnitudes matter when shifts conflict.",
        zh: "D↑:P↑、Q↑;S↓:P↑、Q↓。两者都推 P → **P 升**;Q 上 S↓(40)> D↑(20),Q 下降。",
      },
    },
    {
      id: "f05",
      prompt: {
        en: "Price of good X falls from **$20 to $16**; quantity demanded rises **100 → 140**. Midpoint |Ed| and TR change?",
        zh: "X 价格 $20 → $16;Qd 100 → 140。中点 |Ed| 与 TR 变化?",
      },
      choices: [
        { id: "a", text: { en: "|Ed| = 0.67 (inelastic); TR falls.", zh: "|Ed| = 0.67(缺乏弹性);TR 下降。" } },
        { id: "b", text: { en: "**|Ed| = 1.5 (elastic); TR rises from $2,000 to $2,240.**", zh: "**|Ed| = 1.5(富有弹性);TR 从 $2,000 升至 $2,240。**" } },
        { id: "c", text: { en: "|Ed| = 0.5; TR unchanged.", zh: "|Ed| = 0.5;TR 不变。" } },
        { id: "d", text: { en: "|Ed| = 2.5; TR falls.", zh: "|Ed| = 2.5;TR 下降。" } },
      ],
      answerId: "b",
      explanation: {
        en: "%ΔQ = 40/120 ≈ 33.3%; %ΔP = −4/18 ≈ −22.2%. **|Ed| ≈ 1.5**. Price cut + elastic D → TR rises. Check: $2,000 → $2,240 ✓.",
        zh: "%ΔQ = 40/120 ≈ 33.3%;%ΔP = −4/18 ≈ −22.2%。**|Ed| ≈ 1.5**。降价 + 富弹性 → TR 升。核实:$2,000 → $2,240 ✓。",
      },
    },
    {
      id: "f06",
      prompt: {
        en: "A $2/unit tax is placed on sellers of good Y. Demand is **very inelastic**; supply is **very elastic**. Who bears most of the burden?",
        zh: "对 Y 卖家征 $2/单位税。需求**非常缺乏弹性**,供给**非常富有弹性**。谁承担最多?",
      },
      choices: [
        { id: "a", text: { en: "Sellers (tax is written on them).", zh: "卖家(税法定归卖家)。" } },
        { id: "b", text: { en: "Burden splits evenly.", zh: "均摊。" } },
        { id: "c", text: { en: "**Buyers — the less elastic side bears more of the tax regardless of statutory incidence.**", zh: "**买家——缺乏弹性的一方承担更多,与法定归宿无关。**" } },
        { id: "d", text: { en: "Neither — the government absorbs it.", zh: "双方都不——政府吸收。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Tax incidence = **less elastic side pays more**. Inelastic buyers can't easily reduce Q → they absorb most of the $2. Example: cigarette taxes fall mostly on smokers.",
        zh: "税收归宿 = **缺乏弹性一方承担更多**。买家难以减量 → 承担大部分。例:香烟税主要落在吸烟者身上。",
      },
    },
    {
      id: "f07",
      prompt: {
        en: "D: P = 100 − Q; S: P = 20 + Q. A **$10 per-unit tax on sellers** is imposed. Find Q, P_buyer, P_seller, DWL, and tax revenue.",
        zh: "D: P = 100 − Q;S: P = 20 + Q。对**卖家**征 $10/单位税。求 Q、P_买、P_卖、DWL、税收。",
      },
      choices: [
        { id: "a", text: { en: "Q = 40, Pb = Ps = 60, DWL = 0, rev = $400.", zh: "Q = 40,Pb = Ps = 60,DWL = 0,税收 = $400。" } },
        { id: "b", text: { en: "**Q = 35, Pb = $65, Ps = $55, DWL = $25, revenue = $350.**", zh: "**Q = 35,Pb = $65,Ps = $55,DWL = $25,税收 = $350。**" } },
        { id: "c", text: { en: "Q = 30, Pb = 70, Ps = 50, DWL = $50, rev = $300.", zh: "Q = 30,Pb = 70,Ps = 50,DWL = $50,税收 = $300。" } },
        { id: "d", text: { en: "Q = 35, Pb = 55, Ps = 65, DWL = $25, rev = $350.", zh: "Q = 35,Pb = 55,Ps = 65,DWL = $25,税收 = $350。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Pre-tax: Q = 40, P = 60. Tax shifts S up: 30 + Q = 100 − Q → **Q = 35**; Pb = 65; Ps = Pb − 10 = 55. DWL = ½×5×10 = **$25**. Revenue = $350. Choice D swaps Pb and Ps.",
        zh: "税前:Q = 40,P = 60。税后:30 + Q = 100 − Q → **Q = 35**;Pb = 65;Ps = 55。DWL = ½×5×10 = **$25**,税收 = $350。选项 D 买卖价颠倒。",
      },
    },
    {
      id: "f08",
      prompt: {
        en: "Price of X rises 10%; quantity demanded of Y falls 6%. Cross-price elasticity and classification?",
        zh: "X 价格涨 10%,Y 的 Qd 降 6%。交叉弹性与分类?",
      },
      choices: [
        { id: "a", text: { en: "+0.6; substitutes.", zh: "+0.6;替代品。" } },
        { id: "b", text: { en: "**−0.6; COMPLEMENTS.**", zh: "**−0.6;**互补品**。**" } },
        { id: "c", text: { en: "+0.6; complements.", zh: "+0.6;互补品。" } },
        { id: "d", text: { en: "0; unrelated.", zh: "0;无关。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Cross-elasticity = −6 / 10 = **−0.6**. Negative → complements (e.g. cars and gasoline). Positive → substitutes.",
        zh: "交叉弹性 = −6 / 10 = **−0.6**。负 → 互补品(如汽车与汽油);正 → 替代品。",
      },
    },
    {
      id: "f09",
      prompt: {
        en: "Income rises **20%**, ramen purchases fall **10%**. Income elasticity and classification?",
        zh: "收入升 20%,泡面量降 10%。收入弹性与分类?",
      },
      choices: [
        { id: "a", text: { en: "+0.5; normal necessity.", zh: "+0.5;正常必需品。" } },
        { id: "b", text: { en: "+2.0; luxury.", zh: "+2.0;奢侈品。" } },
        { id: "c", text: { en: "**−0.5; INFERIOR good.**", zh: "**−0.5;**劣等品**。**" } },
        { id: "d", text: { en: "0; neutral.", zh: "0;中性。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Income elasticity = −10/20 = **−0.5**. Negative → inferior good. Normal positive; necessities 0–1; luxuries >1.",
        zh: "收入弹性 = −10/20 = **−0.5**。负 → 劣等品。正常品为正;必需品 0~1;奢侈品 > 1。",
      },
    },
    {
      id: "f10",
      prompt: {
        en: "A firm has P = $18, AVC = $15, ATC = $20, FC = $400, Q = 80. In the short run, what should it do?",
        zh: "P = $18、AVC = $15、ATC = $20、FC = $400、Q = 80。短期决策?",
      },
      choices: [
        { id: "a", text: { en: "Shut down; loss = $400.", zh: "停业;亏损 = $400。" } },
        { id: "b", text: { en: "**Continue; loss = $160 (smaller than the $400 shutdown loss).**", zh: "**继续;亏损 = $160(小于停业 $400)。**" } },
        { id: "c", text: { en: "Shut down; loss = $0.", zh: "停业;亏损 = $0。" } },
        { id: "d", text: { en: "Continue; profit = $160.", zh: "继续;利润 = $160。" } },
      ],
      answerId: "b",
      explanation: {
        en: "P ($18) > AVC ($15) → **continue**. TC = $20×80 = $1,600; Rev = $1,440; loss = $160. Shutdown loss = $400. Producing saves $240.",
        zh: "P > AVC → **继续**。TC = $1,600;Rev = $1,440;亏损 = $160。停业亏 $400,继续省 $240。",
      },
    },
    {
      id: "f11",
      prompt: {
        en: "At Q = 40, **MC = $15 rising**, **AVC = $12 rising**, **ATC = $20 FALLING**. Possible?",
        zh: "Q = 40:MC = $15 升,AVC = $12 升,ATC = $20 **降**。可能吗?",
      },
      choices: [
        { id: "a", text: { en: "Impossible — if AVC rises, ATC must rise.", zh: "不可能——AVC 升则 ATC 必升。" } },
        { id: "b", text: { en: "**Possible — AFC = ATC − AVC = $8 is still falling fast enough (AFC = FC/Q) to offset AVC's rise. Typical between min AVC and min ATC.**", zh: "**可能——AFC = $8 仍以足够快速度下降(AFC = FC/Q),抵消 AVC 上升。典型位于最低 AVC 与最低 ATC 之间。**" } },
        { id: "c", text: { en: "Impossible — MC must exceed ATC.", zh: "不可能——MC 必超过 ATC。" } },
        { id: "d", text: { en: "Impossible — averages must move together.", zh: "不可能——平均值应同向。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Marginal-pulls-average per curve: MC > AVC → AVC rises ✓; MC < ATC → ATC falls ✓. Normal between min AVC (past) and min ATC (not reached). AFC = FC/Q keeps falling, dragging ATC down.",
        zh: "各曲线边际拉平均:MC > AVC → AVC 升 ✓;MC < ATC → ATC 降 ✓。位于最低 AVC(已过)与最低 ATC(未到)之间。AFC 持续下降把 ATC 拉低。",
      },
    },
    {
      id: "f12",
      prompt: {
        en: "A perfectly competitive industry in LR equilibrium sees a **permanent** D↑. Trace the SR → LR outcome.",
        zh: "完全竞争行业 LR 均衡后 D **永久**↑。描述 SR → LR 调整。",
      },
      choices: [
        { id: "a", text: { en: "P and firm Q unchanged.", zh: "P 与单企业 Q 不变。" } },
        { id: "b", text: { en: "**SR: P rises, firms earn profit. LR: entry pushes supply right until P returns to min ATC. Each firm back at min ATC; industry Q larger via more firms.**", zh: "**短期:P 升、企业盈利;长期:进入使 S 右移至 P 回到最低 ATC。每家回到最低 ATC,行业 Q 因企业数增多而大幅上升。**" } },
        { id: "c", text: { en: "Firms exit to restore equilibrium.", zh: "企业退出以恢复均衡。" } },
        { id: "d", text: { en: "LR price is higher than original.", zh: "长期 P 高于初始。" } },
      ],
      answerId: "b",
      explanation: {
        en: "D↑ → SR profit → entry (free in PC) → S right → P falls back to min ATC (zero profit). Each firm same Q; industry Q much higher.",
        zh: "D↑ → 短期盈利 → 进入 → S 右移 → P 回最低 ATC(零利润)。单企业 Q 不变,行业 Q 因更多企业而大幅上升。",
      },
    },
    {
      id: "f13",
      prompt: {
        en: "Which most precisely distinguishes **diminishing marginal returns** from **diseconomies of scale**?",
        zh: "**边际递减** vs. **规模不经济**,最准确区分?",
      },
      choices: [
        { id: "a", text: { en: "They are the same phenomenon.", zh: "同一现象。" } },
        { id: "b", text: { en: "Both are short-run effects.", zh: "都是短期效应。" } },
        { id: "c", text: { en: "**Diminishing MP is SHORT RUN (one fixed input); diseconomies of scale is LONG RUN (all inputs variable; LRATC rises due to coordination costs).**", zh: "**边际递减——**短期**(有固定投入);规模不经济——**长期**(所有投入可变;协调成本使 LRATC 上升)。**" } },
        { id: "d", text: { en: "Diseconomies of scale only apply to agriculture.", zh: "规模不经济仅农业适用。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Diminishing MP requires a fixed input. Diseconomies of scale is a long-run phenomenon driven by bureaucracy/communication in large organizations, NOT input-crowding.",
        zh: "边际递减需固定投入。规模不经济是长期现象,源于大组织的官僚/沟通失灵,非投入品被挤。",
      },
    },
    {
      id: "f14",
      prompt: {
        en: "Wage $60/worker. 3rd worker's MP = 12; 4th worker's MP = 8. MC of output at these two levels?",
        zh: "工资 $60/人。第 3 名 MP = 12,第 4 名 MP = 8。产品 MC 如何?",
      },
      choices: [
        { id: "a", text: { en: "Constant at $60/worker.", zh: "恒为 $60/人。" } },
        { id: "b", text: { en: "**Rises from $5 to $7.50 (MC = w/MP); diminishing MP drives rising MC.**", zh: "**从 $5 升至 $7.50(MC = 工资/MP);边际递减驱动 MC 上升。**" } },
        { id: "c", text: { en: "Falls from $60 to $48.", zh: "从 $60 降到 $48。" } },
        { id: "d", text: { en: "Cannot compute without FC.", zh: "无 FC 无法计算。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**MC = w/MP**. 3rd: 60/12 = $5. 4th: 60/8 = $7.50. MC rises because MP falls.",
        zh: "**MC = 工资/MP**。第 3:60/12 = $5;第 4:60/8 = $7.50。MC 上升源于 MP 下降。",
      },
    },
    {
      id: "f15",
      prompt: {
        en: "At Q = 20, TC = $500. MC of the 21st unit is $30. What is ATC at Q = 21?",
        zh: "Q = 20 时 TC = $500;第 21 单位 MC = $30。Q = 21 的 ATC?",
      },
      choices: [
        { id: "a", text: { en: "$30 (= MC).", zh: "$30(= MC)。" } },
        { id: "b", text: { en: "$25 (old ATC).", zh: "$25(旧 ATC)。" } },
        { id: "c", text: { en: "**$25.24 ≈ $530 / 21.**", zh: "**约 $25.24 ≈ $530 / 21。**" } },
        { id: "d", text: { en: "$26.50 = (ATC+MC)/2.", zh: "$26.50 = (ATC+MC)/2。" } },
      ],
      answerId: "c",
      explanation: {
        en: "TC₂₁ = 500 + 30 = $530; ATC₂₁ = 530/21 ≈ **$25.24**. MC ($30) > old ATC ($25), so ATC rises slightly (marginal pulls average up).",
        zh: "TC₂₁ = 500 + 30 = $530;ATC₂₁ = 530/21 ≈ **$25.24**。MC > 旧 ATC,ATC 微升(边际拉动平均向上)。",
      },
    },
    {
      id: "f16",
      prompt: {
        en: "Monopolist faces **D: P = 80 − Q**, MC = $20. Profit-max Q and P?",
        zh: "垄断者 D: P = 80 − Q,MC = $20。利润最大化 Q 与 P?",
      },
      choices: [
        { id: "a", text: { en: "Q = 60, P = 20 (P = MC).", zh: "Q = 60,P = 20(P = MC)。" } },
        { id: "b", text: { en: "**Q = 30, P = $50.**", zh: "**Q = 30,P = $50。**" } },
        { id: "c", text: { en: "Q = 30, P = $20 (off MR).", zh: "Q = 30,P = $20(从 MR 读)。" } },
        { id: "d", text: { en: "Q = 40, P = $40.", zh: "Q = 40,P = $40。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MR = 80 − 2Q = 20 → **Q = 30**; P off D = 80 − 30 = **$50**. A uses PC rule; C reads P off MR.",
        zh: "MR = 80 − 2Q = 20 → **Q = 30**;P 从 D 读 = 80 − 30 = **$50**。A 用 PC 规则;C 从 MR 读 P。",
      },
    },
    {
      id: "f17",
      prompt: {
        en: "Same setup (D: P = 80 − Q, MC = $20). DWL vs. perfect competition?",
        zh: "同上(D: P = 80 − Q,MC = $20)。DWL 相对完全竞争?",
      },
      choices: [
        { id: "a", text: { en: "DWL = 0.", zh: "DWL = 0。" } },
        { id: "b", text: { en: "**DWL = $450 (½ × 30 × 30).**", zh: "**DWL = $450(½ × 30 × 30)。**" } },
        { id: "c", text: { en: "DWL = $900.", zh: "DWL = $900。" } },
        { id: "d", text: { en: "DWL = $1,800 (entire profit).", zh: "DWL = $1,800(全部利润)。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Q_pc = 60 (D = MC). DWL = ½ × (Q_pc − Q_m) × (P_m − MC) = ½ × 30 × 30 = **$450**. Choice D confuses DWL with transferred CS.",
        zh: "Q_pc = 60(D = MC)。DWL = ½ × (Q_pc − Q_m) × (P_m − MC) = ½ × 30 × 30 = **$450**。选项 D 混淆 DWL 与转移的 CS。",
      },
    },
    {
      id: "f18",
      prompt: {
        en: "The SAME monopolist (D: P = 80 − Q, MC = $20) now practices **perfect price discrimination**. Q, DWL, CS?",
        zh: "同一垄断者实行**完全价格歧视**。Q、DWL、CS?",
      },
      choices: [
        { id: "a", text: { en: "Q = 30, DWL = $450, CS = 0.", zh: "Q = 30,DWL = $450,CS = 0。" } },
        { id: "b", text: { en: "**Q = 60 (= Q_pc); DWL = 0; CS = 0 (captured as PS).**", zh: "**Q = 60(= Q_pc);DWL = 0;CS = 0(全转为 PS)。**" } },
        { id: "c", text: { en: "Q = 0; firm refuses to sell.", zh: "Q = 0;不售。" } },
        { id: "d", text: { en: "Q = 80; CS maximized.", zh: "Q = 80;CS 最大。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Under perfect PD, MR = D. MR = MC → D = MC → **Q = 60** (PC level). DWL = 0; but CS = 0, all surplus to firm.",
        zh: "完全 PD 下 MR = D。MR = MC → D = MC → **Q = 60**(PC 水平)。DWL = 0;但 CS = 0,全部归企业。",
      },
    },
    {
      id: "f19",
      prompt: {
        en: "Which chain holds for a **monopolistically competitive** firm in **LR** equilibrium?",
        zh: "**垄断竞争**企业**长期**均衡的条件链?",
      },
      choices: [
        { id: "a", text: { en: "P = MR = MC = min ATC (like PC).", zh: "P = MR = MC = 最低 ATC(同 PC)。" } },
        { id: "b", text: { en: "P > ATC; profit persists.", zh: "P > ATC;持续盈利。" } },
        { id: "c", text: { en: "**P = ATC AND P > MC AND Q < the Q that minimizes ATC (excess capacity).**", zh: "**P = ATC 且 P > MC 且 Q < 最低 ATC 的 Q(过剩产能)。**" } },
        { id: "d", text: { en: "P = MC but P > ATC.", zh: "P = MC 但 P > ATC。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Entry/exit → P = ATC. D downward-sloping → MR < P → MC < P. D tangent to ATC on downward portion → Q below min-ATC Q → excess capacity.",
        zh: "进入/退出 → P = ATC。D 下倾 → MR < P → MC < P。D 切于 ATC 下降段 → Q 低于最低 ATC → 过剩产能。",
      },
    },
    {
      id: "f20",
      prompt: {
        en: "A natural monopoly has falling LRATC through demand. Why does regulation typically use **P = ATC** instead of **P = MC**?",
        zh: "自然垄断 LRATC 在需求段持续下降。为何管制常用 **P = ATC** 而非 **P = MC**?",
      },
      choices: [
        { id: "a", text: { en: "P = MC is always illegal.", zh: "P = MC 总是非法。" } },
        { id: "b", text: { en: "**P = ATC allows breakeven; P = MC would be below ATC, requiring a subsidy.**", zh: "**P = ATC 可零利润;P = MC 低于 ATC,需补贴。**" } },
        { id: "c", text: { en: "P = MC creates more DWL.", zh: "P = MC 造成更多 DWL。" } },
        { id: "d", text: { en: "P = ATC is always socially optimal.", zh: "P = ATC 始终社会最优。" } },
      ],
      answerId: "b",
      explanation: {
        en: "On falling LRATC, ATC > MC. P = MC → firm loses money (needs subsidy). P = ATC → breakeven; some DWL (P > MC) but no subsidy needed.",
        zh: "LRATC 下降段 ATC > MC。P = MC → 企业亏损,需补贴;P = ATC → 零利润;有 DWL(P > MC)但无需补贴。",
      },
    },
    {
      id: "f21",
      figure: {
        kind: "table",
        caption: { en: "Payoff matrix (A, B) in $M", zh: "收益矩阵(A, B)$M" },
        columns: [{ en: "", zh: "" }, { en: "B: Coop", zh: "B:合作" }, { en: "B: Defect", zh: "B:欺骗" }],
        rows: [
          [{ en: "**A: Coop**", zh: "**A:合作**" }, { en: "(10, 10)", zh: "(10, 10)" }, { en: "(2, 15)", zh: "(2, 15)" }],
          [{ en: "**A: Defect**", zh: "**A:欺骗**" }, { en: "(15, 2)", zh: "(15, 2)" }, { en: "(5, 5)", zh: "(5, 5)" }],
        ],
      },
      prompt: {
        en: "Identify the Nash equilibrium and the cooperative outcome.",
        zh: "识别纳什均衡与合作结果。",
      },
      choices: [
        { id: "a", text: { en: "NE = (Coop, Coop).", zh: "NE =(合作, 合作)。" } },
        { id: "b", text: { en: "**NE = (Defect, Defect) = (5,5); cooperative = (Coop, Coop) = (10,10). Prisoner's dilemma.**", zh: "**NE =(欺骗, 欺骗)=(5,5);合作 =(合作, 合作)=(10,10)。囚徒困境。**" } },
        { id: "c", text: { en: "Two NE: (Coop,Coop) and (Defect,Defect).", zh: "两 NE。" } },
        { id: "d", text: { en: "No NE.", zh: "无 NE。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A's dominant = Defect (15>10; 5>2); same for B. Unique NE = (Defect, Defect) = (5,5). (Coop,Coop) gives (10,10) but is NOT stable.",
        zh: "A 占优 = 欺骗(15>10;5>2);B 同理。唯一 NE =(欺骗, 欺骗)=(5,5)。(合作, 合作)= (10, 10) 不稳定。",
      },
    },
    {
      id: "f22",
      prompt: {
        en: "At a profit-maximizing monopolist's output, which must be true about |Ed|?",
        zh: "垄断者利润最大化的 Q 处,|Ed| 必然满足?",
      },
      choices: [
        { id: "a", text: { en: "|Ed| < 1.", zh: "|Ed| < 1。" } },
        { id: "b", text: { en: "|Ed| = 0.", zh: "|Ed| = 0。" } },
        { id: "c", text: { en: "**|Ed| > 1 (elastic) — since MR = P(1 − 1/|Ed|) and MR = MC ≥ 0.**", zh: "**|Ed| > 1(富有弹性)——因 MR = P(1 − 1/|Ed|)且 MR = MC ≥ 0。**" } },
        { id: "d", text: { en: "|Ed| irrelevant.", zh: "|Ed| 无关。" } },
      ],
      answerId: "c",
      explanation: {
        en: "MR ≥ 0 requires |Ed| ≥ 1. If |Ed| < 1, MR < 0 < MC → cut Q. Rational monopolists never operate in the inelastic region.",
        zh: "MR ≥ 0 要求 |Ed| ≥ 1。若 |Ed| < 1,MR < 0 < MC → 应减产。理性垄断者**绝不**在缺乏弹性段。",
      },
    },
    {
      id: "f23",
      prompt: {
        en: "Monopolist currently: MR = $4, MC = $10, |Ed| = 0.5. Correct action?",
        zh: "垄断者:MR = $4、MC = $10、|Ed| = 0.5。正确行动?",
      },
      choices: [
        { id: "a", text: { en: "Expand Q.", zh: "增产。" } },
        { id: "b", text: { en: "**Cut Q: MR < MC AND inelastic — cutting Q raises P, raises TR, lowers TC.**", zh: "**减产:MR < MC 且缺乏弹性——减产抬高 P、抬高 TR、降低 TC。**" } },
        { id: "c", text: { en: "Do nothing.", zh: "不动。" } },
        { id: "d", text: { en: "Shut down.", zh: "停业。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Two reasons to cut: MR < MC (last unit loses money); inelastic demand (Q cut raises P and TR, reduces TC).",
        zh: "两理由减产:MR < MC(最后一单位亏损);缺乏弹性(减产抬 P、抬 TR、降 TC)。",
      },
    },
    {
      id: "f24",
      prompt: {
        en: "Firm X is a **monopolist** in output. 3rd worker's MP = 10. Current Q: **P = $40, MR = $25**. MRP of 3rd worker?",
        zh: "X 为产品**垄断者**。第 3 名 MP = 10;当前 **P = $40,MR = $25**。第 3 名 MRP?",
      },
      choices: [
        { id: "a", text: { en: "$400 (= MP × P).", zh: "$400(= MP × P)。" } },
        { id: "b", text: { en: "**$250 (= MP × MR, since price-maker and MR < P).**", zh: "**$250(= MP × MR;价格制定者,MR < P)。**" } },
        { id: "c", text: { en: "$25 (= MR).", zh: "$25。" } },
        { id: "d", text: { en: "$40 (= P).", zh: "$40。" } },
      ],
      answerId: "b",
      explanation: {
        en: "**MRP = MP × MR_output**. Price-makers: use MR, not P. MRP = 10 × $25 = $250. Using P ($40) overstates by $150.",
        zh: "**MRP = MP × MR_产品**。价格制定者用 MR,不是 P。MRP = 10 × $25 = $250。用 P($40)高估 $150。",
      },
    },
    {
      id: "f25",
      prompt: {
        en: "Competitive firm: L = 12, MRP = $70, W = $50. Action?",
        zh: "竞争企业:L = 12,MRP = $70,W = $50。行动?",
      },
      choices: [
        { id: "a", text: { en: "Do nothing.", zh: "不变。" } },
        { id: "b", text: { en: "Fire workers.", zh: "裁员。" } },
        { id: "c", text: { en: "**Hire more until MRP falls to $50 = W.**", zh: "**多雇,直到 MRP 降至 $50 = W。**" } },
        { id: "d", text: { en: "Raise the wage to $70.", zh: "把工资提到 $70。" } },
      ],
      answerId: "c",
      explanation: {
        en: "MRP ($70) > W ($50): each extra worker adds $20 to profit. Hire more until MRP = W. Firm is a wage-taker, not a wage-setter.",
        zh: "MRP > W:每多雇一人加 $20 利润。多雇直到 MRP = W。企业是工资接受者。",
      },
    },
    {
      id: "f26",
      prompt: {
        en: "Firm uses L and K: MP_L = 40, P_L = $10; MP_K = 60, P_K = $20. Cost-minimizing?",
        zh: "L 与 K:MP_L = 40,P_L = $10;MP_K = 60,P_K = $20。是否成本最小?",
      },
      choices: [
        { id: "a", text: { en: "Yes, both MPs positive.", zh: "是——两 MP 都正。" } },
        { id: "b", text: { en: "**No — MP_L/P_L = 4 > MP_K/P_K = 3, shift toward LABOR.**", zh: "**否——MP_L/P_L = 4 > MP_K/P_K = 3,转向**劳动**。**" } },
        { id: "c", text: { en: "No — shift toward capital (higher MP).", zh: "否——转向资本(MP 更高)。" } },
        { id: "d", text: { en: "Cannot tell without output price.", zh: "无产品价格无法判断。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Least-cost: MP/$ equal. L: 40/10 = 4; K: 60/20 = 3. Labor's MP per $ higher → shift to L. C confuses raw MP with per-dollar MP.",
        zh: "最低成本:MP/$ 相等。L:4;K:3。L 的每 $ MP 更高 → 向 L 倾斜。C 把绝对 MP 与每美元 MP 混同。",
      },
    },
    {
      id: "f27",
      prompt: {
        en: "Monopsonist: S: W = 3 + L; MRP = 15 − L. L_m, W_m? Competitive benchmark?",
        zh: "买方垄断:S: W = 3 + L;MRP = 15 − L。L_m、W_m?竞争基准?",
      },
      choices: [
        { id: "a", text: { en: "L_m = L_c = 6; W_m = W_c = 9.", zh: "L_m = L_c = 6;W_m = W_c = 9。" } },
        { id: "b", text: { en: "**L_m = 4, W_m = $7; L_c = 6, W_c = $9.**", zh: "**L_m = 4,W_m = $7;L_c = 6,W_c = $9。**" } },
        { id: "c", text: { en: "L_m = 4, W_m = $11 (off MFC).", zh: "L_m = 4,W_m = $11(从 MFC 读)。" } },
        { id: "d", text: { en: "L_m = 12, W_m = $15.", zh: "L_m = 12,W_m = $15。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MFC = 3 + 2L. MFC = MRP → L_m = **4**; W from S = **$7**. Comp: S = MRP → L_c = **6**, W_c = **$9**. Monopsony restricts L and W. C is 'W off MFC' error.",
        zh: "MFC = 3 + 2L。MFC = MRP → L_m = **4**;W 从 S 读 = **$7**。竞争:S = MRP → L_c = **6**、W_c = **$9**。买方垄断压低 L 与 W。C 是「从 MFC 读 W」错误。",
      },
    },
    {
      id: "f28",
      prompt: {
        en: "Same monopsony (W_m = $7, W_c = $9). Government sets minimum wage = $8. What happens to L?",
        zh: "同上(W_m = $7,W_c = $9)。政府设最低工资 $8。L 如何变?",
      },
      choices: [
        { id: "a", text: { en: "L falls.", zh: "L 下降。" } },
        { id: "b", text: { en: "**L rises from 4 to 7 (8 = 15 − L → L = 7).**", zh: "**L 从 4 升至 7(8 = 15 − L → L = 7)。**" } },
        { id: "c", text: { en: "L unchanged.", zh: "L 不变。" } },
        { id: "d", text: { en: "L falls to zero.", zh: "L 降为零。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Min wage flattens MFC at $8. Firm hires until MFC = MRP: 8 = 15 − L → L = 7. Both W and L rise — the monopsony exception to the standard minimum-wage argument.",
        zh: "最低工资把 MFC 拉平到 $8。企业雇到 MFC = MRP:8 = 15 − L → L = 7。W 与 L 同升——买方垄断的最低工资例外。",
      },
    },
    {
      id: "f29",
      prompt: {
        en: "Output price **doubles**; MP and wages unchanged. What happens to equilibrium L in a competitive labor market?",
        zh: "产品价格**翻倍**,MP 与工资不变。竞争劳动市场的均衡 L?",
      },
      choices: [
        { id: "a", text: { en: "L unchanged.", zh: "不变。" } },
        { id: "b", text: { en: "**L rises (W also rises): MRP = MP × P doubles → D_L right along upward S_L → W ↑ and L ↑.**", zh: "**L 升(W 也升):MRP = MP × P 翻倍 → D_L 沿上倾 S_L 右移 → W 与 L 同升。**" } },
        { id: "c", text: { en: "L rises, W falls.", zh: "L 升,W 降。" } },
        { id: "d", text: { en: "L falls; firms substitute capital.", zh: "L 降,企业改用资本。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Derived demand: output-price shock feeds directly into MRP = MP × P. P × 2 → MRP × 2 → D_L right; along upward S_L, both W and L rise.",
        zh: "派生需求:产品价格冲击直接进入 MRP = MP × P。P × 2 → MRP × 2 → D_L 右移;沿上倾 S_L,W 与 L 同升。",
      },
    },
    {
      id: "f30",
      prompt: {
        en: "D = MPB: P = 30 − Q; S = MPC: P = 10 + Q. External cost = $4/unit. Find Q_m, Q*, optimal Pigouvian tax.",
        zh: "D = MPB:P = 30 − Q;S = MPC:P = 10 + Q。外部成本 = $4/单位。求 Q_m、Q*、最优庇古税。",
      },
      choices: [
        { id: "a", text: { en: "Q_m = Q* = 10; tax = 0.", zh: "Q_m = Q* = 10;税 = 0。" } },
        { id: "b", text: { en: "**Q_m = 10, Q* = 8, Pigouvian tax = $4.**", zh: "**Q_m = 10,Q* = 8,庇古税 = $4。**" } },
        { id: "c", text: { en: "Q_m = 10, Q* = 12, subsidy = $4.", zh: "Q_m = 10,Q* = 12,补贴 = $4。" } },
        { id: "d", text: { en: "Q_m = 8, Q* = 10, tax = $2.", zh: "Q_m = 8,Q* = 10,税 = $2。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Q_m: 10 + Q = 30 − Q → **10**. Q*: MSC = MPC + 4 → 14 + Q = 30 − Q → **8**. Pigouvian tax = marginal external cost = **$4**.",
        zh: "Q_m:10 + Q = 30 − Q → **10**。Q*:MSC = MPC + 4 → 14 + Q = 30 − Q → **8**。庇古税 = 边际外部成本 = **$4**。",
      },
    },
    {
      id: "f31",
      prompt: {
        en: "Which situation is BEST addressed by a Pigouvian SUBSIDY rather than a tax?",
        zh: "哪种情形最适合**补贴**而非税?",
      },
      choices: [
        { id: "a", text: { en: "Factory pollution downwind.", zh: "工厂污染下风向。" } },
        { id: "b", text: { en: "Loud nightclubs disturbing residents.", zh: "夜店噪音扰民。" } },
        { id: "c", text: { en: "**Flu vaccinations (positive consumption externality).**", zh: "**流感疫苗(正消费外部性)。**" } },
        { id: "d", text: { en: "A monopoly charging P > MC.", zh: "垄断定价 P > MC。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Taxes correct negative externalities; subsidies correct positive ones. Vaccines: MSB > MPB → subsidy of marginal external benefit moves market to Q*. D is market power, not externality.",
        zh: "税纠正负外部性;补贴纠正正外部性。疫苗:MSB > MPB → 按边际外部收益补贴使市场到 Q*。D 是市场力量问题。",
      },
    },
    {
      id: "f32",
      prompt: {
        en: "Which best illustrates the **free-rider problem**?",
        zh: "最能说明**搭便车**的例子?",
      },
      choices: [
        { id: "a", text: { en: "Shop lowers prices to attract customers.", zh: "商店降价吸引顾客。" } },
        { id: "b", text: { en: "**Residents enjoy tax-funded street lights, but some refuse to pay taxes.**", zh: "**居民享受税款提供的路灯,但有人不缴税。**" } },
        { id: "c", text: { en: "Firms compete for market share.", zh: "企业争夺份额。" } },
        { id: "d", text: { en: "Monopolist charges P > MC.", zh: "垄断者收 P > MC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Free-riding requires **non-excludability**: can't prevent non-payers from benefiting. Streetlights are non-excludable → free-rider problem → tax-financed provision is typical.",
        zh: "搭便车需**不可排他**:无法阻止不付费者受益。路灯不可排他 → 搭便车 → 通常由税款提供。",
      },
    },
    {
      id: "f33",
      prompt: {
        en: "Classify: (I) uncrowded public park; (II) unregulated cod fishery; (III) toll road below capacity; (IV) private shoe.",
        zh: "分类:(I) 未拥挤公园;(II) 无管制渔场;(III) 未满载收费路;(IV) 私人鞋。",
      },
      choices: [
        { id: "a", text: { en: "**I public; II common-pool; III club; IV private.**", zh: "**I 公共;II 公地;III 俱乐部;IV 私人。**" } },
        { id: "b", text: { en: "I common; II public; III club; IV private.", zh: "I 公地;II 公共;III 俱乐部;IV 私人。" } },
        { id: "c", text: { en: "All four are public goods.", zh: "全部公共。" } },
        { id: "d", text: { en: "I private; II public; III common; IV club.", zh: "I 私人;II 公共;III 公地;IV 俱乐部。" } },
      ],
      answerId: "a",
      explanation: {
        en: "2×2 grid: I non-rival + non-excl = public; II rival + non-excl = common-pool; III non-rival + excl (tolls) = club; IV rival + excl = private.",
        zh: "2×2 表:I 不可竞争+不可排他 = 公共;II 可竞争+不可排他 = 公地;III 不可竞争+可排他(过路费)= 俱乐部;IV 可竞争+可排他 = 私人。",
      },
    },
    {
      id: "f34",
      prompt: {
        en: "X's Gini = 0.30; Y's = 0.55. Most accurate?",
        zh: "X Gini = 0.30;Y = 0.55。最准确?",
      },
      choices: [
        { id: "a", text: { en: "X more unequal.", zh: "X 更不平等。" } },
        { id: "b", text: { en: "Same inequality.", zh: "相同。" } },
        { id: "c", text: { en: "**Y substantially more unequal; Lorenz bows further below 45° line.**", zh: "**Y 显著更不平等;洛伦兹曲线更远离 45° 线。**" } },
        { id: "d", text: { en: "Gini not comparable.", zh: "不可比。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Gini: 0 = perfect equality; 1 = one person has all. Higher = more unequal. Y (0.55) > X (0.30). Developed economies typically 0.25–0.40.",
        zh: "Gini:0 = 完全平等;1 = 一人独占。越高越不平等。Y(0.55)> X(0.30)。发达经济体通常 0.25~0.40。",
      },
    },
    {
      id: "f35",
      prompt: {
        en: "Factory benefit = $100/day; neighbor damage = $40/day. Rights are clear, transaction costs low. By the **Coase theorem**:",
        zh: "工厂收益 = $100/日;邻居损失 = $40/日。产权明确、交易成本低。依**科斯定理**:",
      },
      choices: [
        { id: "a", text: { en: "Factory must shut down.", zh: "工厂必须停业。" } },
        { id: "b", text: { en: "**Operation continues (efficient: $100 > $40); rights allocation only determines who pays whom.**", zh: "**继续运营($100 > $40 有效);产权分配仅决定谁付给谁。**" } },
        { id: "c", text: { en: "Outcome depends on regulation.", zh: "取决于管制。" } },
        { id: "d", text: { en: "Factory always wins.", zh: "工厂总赢。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Efficient outcome ($100 > $40) is reached by bargaining regardless of whose right. Rights only determine the monetary transfer direction, not the final Q.",
        zh: "有效结果($100 > $40)可通过协商达成,与产权归属无关。产权只影响资金流向,不改变最终 Q。",
      },
    },
    {
      id: "f36",
      prompt: {
        en: "Monopolist: |Ed| = 2, P = $30, MC = $10. Using MR = P(1 − 1/|Ed|), is it profit-maxing?",
        zh: "垄断者:|Ed| = 2,P = $30,MC = $10。由 MR = P(1 − 1/|Ed|),是否利润最大?",
      },
      choices: [
        { id: "a", text: { en: "Yes, MR = MC here.", zh: "是,此处 MR = MC。" } },
        { id: "b", text: { en: "**No — MR = 30 × 0.5 = $15 > MC = $10; expand Q.**", zh: "**否——MR = 30 × 0.5 = $15 > MC = $10;增产。**" } },
        { id: "c", text: { en: "No, cut Q.", zh: "否,减产。" } },
        { id: "d", text: { en: "Need ATC.", zh: "需 ATC。" } },
      ],
      answerId: "b",
      explanation: {
        en: "MR = 30(1 − 1/2) = $15. MR > MC → expand. As Q rises, P falls and MR approaches MC.",
        zh: "MR = 30(1 − 1/2) = $15。MR > MC → 增产。Q 增则 P 降、MR 向 MC 靠近。",
      },
    },
    {
      id: "f37",
      prompt: {
        en: "A monopoly produces a good with a **negative production externality**. Compared to Q*, monopoly Q could be:",
        zh: "垄断产品伴**负生产外部性**。相较 Q*,垄断 Q 可能:",
      },
      choices: [
        { id: "a", text: { en: "Always higher.", zh: "恒高。" } },
        { id: "b", text: { en: "Always lower.", zh: "恒低。" } },
        { id: "c", text: { en: "**Ambiguous: monopoly restricts below competitive; externality makes competitive overshoot Q*. Net depends on magnitudes.**", zh: "**不确定:垄断使产量低于竞争;外部性使竞争高于 Q*。净效应看幅度。**" } },
        { id: "d", text: { en: "Equal to Q*.", zh: "等于 Q*。" } },
      ],
      answerId: "c",
      explanation: {
        en: "Two opposing forces: monopoly pushes Q down, negative externality pushes (competitive) Q up. Net result depends on which is larger — Q_m could be above, below, or equal to Q*.",
        zh: "两股相反力量:垄断压低 Q,负外部性抬高(竞争)Q。净结果看哪一个更大——Q_m 可高于、等于或低于 Q*。",
      },
    },
    {
      id: "f38",
      prompt: {
        en: "A $3/unit tax on bread: first on sellers, then shifted to buyers. Competitive market. How do outcomes compare?",
        zh: "面包 $3/单位税:先卖家,后买家。竞争市场。两方案结果?",
      },
      choices: [
        { id: "a", text: { en: "Seller tax worse for buyers.", zh: "卖家税对买家更糟。" } },
        { id: "b", text: { en: "**Identical: same Q, same Pb, same Ps, same DWL (tax-equivalence theorem).**", zh: "**相同:Q、Pb、Ps、DWL 都相同(税收等价定理)。**" } },
        { id: "c", text: { en: "Buyer tax worse for sellers.", zh: "买家税对卖家更糟。" } },
        { id: "d", text: { en: "Buyer tax falls fully on buyers.", zh: "买家税买家全承担。" } },
      ],
      answerId: "b",
      explanation: {
        en: "Tax equivalence: economic outcome is identical regardless of statutory incidence. Burden depends on elasticity, not who writes the check.",
        zh: "税收等价:不论法定归宿,经济结果相同。负担取决于弹性,与谁缴税无关。",
      },
    },
    {
      id: "f39",
      prompt: {
        en: "Min wage = $12 in two markets: (A) competitive W_c = $15; (B) monopsony with W_m = $8, W_c = $13. Employment effect?",
        zh: "两市场设最低工资 $12:(A) 竞争 W_c = $15;(B) 买方垄断 W_m = $8、W_c = $13。雇用如何?",
      },
      choices: [
        { id: "a", text: { en: "L falls in both.", zh: "两市场都下降。" } },
        { id: "b", text: { en: "L rises in both.", zh: "都上升。" } },
        { id: "c", text: { en: "**A: non-binding (12 < 15), no change. B: binding (W_m < 12 < W_c) → L RISES toward competitive.**", zh: "**A:不具约束力(12 < 15),无变化;B:具约束力(W_m < 12 < W_c)→ L **上升**向竞争水平靠近。**" } },
        { id: "d", text: { en: "A: L falls. B: L unchanged.", zh: "A:L 降;B:L 不变。" } },
      ],
      answerId: "c",
      explanation: {
        en: "A: $12 < $15 equilibrium → non-binding. B (monopsony): $12 is in the [W_m, W_c] interval → binding in a way that flattens MFC at $12, hiring rises. Min-wage effects depend on market structure.",
        zh: "A:$12 < $15 均衡 → 不具约束力;B(买方垄断):$12 介于 [W_m, W_c] → MFC 被拉平到 $12,雇用上升。最低工资效应取决于市场结构。",
      },
    },
    {
      id: "f40",
      prompt: {
        en: "A natural monopoly (LRATC falling through demand) is broken up into 4 smaller firms. Likely consequence?",
        zh: "自然垄断(LRATC 持续下降)拆分为 4 家。可能后果?",
      },
      choices: [
        { id: "a", text: { en: "Lower prices — competition is always best.", zh: "价格更低——竞争总是最优。" } },
        { id: "b", text: { en: "**Each firm at HIGHER ATC than the monopoly was (economies of scale lost); industry cost rises; consumer prices likely HIGHER. Regulation (P = ATC or P = MC + subsidy) is usually preferable.**", zh: "**各家 ATC 高于原垄断(规模经济丧失);行业成本上升;消费者价格可能更高。通常采用监管(P = ATC 或 P = MC + 补贴)。**" } },
        { id: "c", text: { en: "Firms produce at Q*.", zh: "企业在 Q* 生产。" } },
        { id: "d", text: { en: "Prices unchanged.", zh: "价格不变。" } },
      ],
      answerId: "b",
      explanation: {
        en: "A natural monopoly exists because one large firm is cheaper. Breakup forces smaller scale → higher per-firm ATC → higher industry cost → higher prices. Regulation is the usual remedy.",
        zh: "自然垄断存在理由:一家大企业更便宜。拆分使规模变小 → 各家 ATC 更高 → 行业成本更高 → 价格更高。通常以监管应对。",
      },
    },
  ],
  "ap-bio": [],
  "ap-physics-1": [],
  "ap-chem": [],
  "ap-calculus-bc": [],
  "ap-eng-lang": [],
};

// ============================================================
// Subjects registry
// ============================================================

export const subjects: Subject[] = [apMicro, apBio, apPhysics1, apChemistry, apCalculusBC, apEngLang];

const notesBySubject: Record<string, Record<string, NoteBlock[]>> = {
  "ap-micro": topicNotes,
  "ap-bio": {},
  "ap-physics-1": {},
  "ap-chem": {},
  "ap-calculus-bc": {},
  "ap-eng-lang": {},
};

const questionsBySubject: Record<string, Record<string, Question[]>> = {
  "ap-micro": topicQuestions,
  "ap-bio": {},
  "ap-physics-1": {},
  "ap-chem": {},
  "ap-calculus-bc": {},
  "ap-eng-lang": {},
};

const unitQuestionsBySubject: Record<string, Record<string, Question[]>> = {
  "ap-micro": unitQuestions,
  "ap-bio": {},
  "ap-physics-1": {},
  "ap-chem": {},
  "ap-calculus-bc": {},
  "ap-eng-lang": {},
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

export function getFinalQuestions(subjectSlug: string): Question[] | undefined {
  return finalQuestions[subjectSlug];
}
