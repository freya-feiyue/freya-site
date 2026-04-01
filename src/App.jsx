import { useState, useEffect } from "react";
// --- 主题配置 ---
const theme = {
  fontSerif: "'Georgia', 'Times New Roman', Times, serif",
  fontSans: "'Georgia', 'Times New Roman', Times, serif",
  colorText: "#1a1a1a",
  colorSub: "#333",
  colorDetail: "#666",
  border: "1px solid rgba(0,0,0,0.1)",
};

const data = {
  name: "Freya Feiyue Tang",
  nameCN: "唐菲玥",
  tagline: "Gender & Sexuality · Queer Theory · Language & Power",
  taglineCN: "性别与性 · 酷儿理论 · 语言与权力",
  pronouns: "Any pronouns except 'he/him' · Beijing",
  pronounsCN: "'他'以外的任何代词 · 北京",
  email: "feiyue.tang@outlook.com",

  about: {
    en: `I am an undergraduate sociology student at the University of Chinese Academy of Social Sciences, with a focus on gender, sexuality, and queer lives in contemporary China. My research interests lie at the intersection of gender sociology, queer theory, and sociolinguistics, with particular attention to the relationship between language, power, and identity.\n\nI am currently interested in feminist discursive activism in digital spaces in China, examining how individuals are influenced by online feminist movements, how they come to recognize gender-based violence embedded in language, and how they develop strategic forms of feminist expression and intervention.\n\nI am also interested in the question of queer "unspeakability" in the Chinese language, particularly the possibilities and social implications of gender-neutral pronouns and gender-inclusive linguistic practices.\n\nBeyond academic research, I am actively engaged in Chinese queer communities and am exploring modes of public sociology, seeking to bridge academic inquiry with broader public conversations.\n\nI am currently preparing applications for graduate study abroad (Fall 2027), with the long-term goal of pursuing a PhD in sociology of gender.`,
    cn: `我是中国社会科学院大学社会学本科生，关注当代中国语境下的性别、性与酷儿生活。我的研究兴趣位于性别社会学、酷儿理论与社会语言学的交叉领域，尤其关注语言、权力与身份之间的关系。\n\n目前，我主要关注中国女性主义中的网络话语行动主义，探讨个体如何在数字空间中受到女性主义思潮的影响，识别语言中的性别暴力，并发展出具有策略性的表达与回应方式。同时，我也关注中文语境中酷儿的"失语"问题，尤其是性别中立代词与性别包容性语言的可能性及其社会意义。\n\n学术研究之外，我也是中文酷儿社群的积极参与者，并在持续探索公共社会学的表达路径，尝试在学术研究与公共讨论之间建立连接。\n\n我目前正在准备2027年秋季的海外研究生申请，长期目标是攻读性别社会学方向的博士学位。`
  },

  research: {
    intro: {
      en: "My research explores gender, language, and social relations in contemporary China, combining qualitative and quantitative approaches. My work spans digital feminist discourse, labor and embodiment, and sociology of family.",
      cn: "我的研究关注当代中国语境下的性别、语言与社会关系，结合定性与定量方法展开，涉及数字媒体、劳动与身体经验，以及家庭社会学等领域。"
    },
    items: [
      {
        id: 1,
        title: "Gendered Power Relations in Linguistic Practice: An Analysis of “Gender Reversal” Short Videos",
        titleCN: "语言实践中的性别权力关系 ——基于“性别倒转”类短视频的考察",
        status: "First Author | Project Thesis (Excellent)",
        statusCN: "第一作者｜项目论文（推荐优秀）",
        abstract: "This research examines the emergence of “gender reversal” short videos on social media, combining critical discourse analysis with semi-structure interviews, drawing on Bourdieu’s practice theory and framework of symbolic violence, Foucault’s discourse–power perspective, and Butler’s theory of gender performativity. It explores how audiences engage in the negotiation of gender discourse through viewing, interpreting, and reproducing “gender reversal” content. The findings show that “gender reversal” symbolically inverts social norms to render the latent and often hidden forms of everyday gendered violence visible. By producing “counter discourses,” these videos provide female audiences with emotional resonance and a sense of legitimacy for action, encouraging them to express dissatisfaction, voice objections, and challenge existing gender norms in daily interactions. However, the political efficacy of such narratives is constrained by the intrinsic tension of ironic structures and the limitations of the binary gender framework, restricting their capacity to fundamentally subvert gender hierarchies. The research argues that “gender reversal” functions not only as a strategic practice resisting patriarchal discourse but also as a critical lens through which the complexities of gendered power relations in the digital era can be examined. It offers an important window into the interplay among media, affective politics, and social structures, revealing how symbols, language, and performance mediate the negotiation of identity and power.",
        abstractCN: "本研究以社交媒体上兴起的“性别倒转”类短视频为对象，结合批判性话语分析与半结构式访谈，借助布迪厄的实践理论与符号暴力框架、福柯的话语—权力视角以及巴特勒的性别操演理论，探讨受众如何通过观看、理解与再生产“性别倒转”内容参与性别话语的协商。研究发现，“性别倒转”通过象征性逆转，将日常生活中潜在而隐蔽的性别暴力直观呈现出来，同时以“反向话语”的方式为女性受众提供情感认同与行动正当本研究以社交媒体上兴起的“性别倒转”类短视频为对象，结合批判性话语分析与半结构式访谈，借助布迪厄的实践理论与符号暴力框架、福柯的话语—权力视角以及巴特勒的性别操演理论，探讨受众如何通过观看、理解与再生产“性别倒转”内容参与性别话语的协商。研究发现，“性别倒转”通过象征性逆转，将日常生活中潜在而隐蔽的性别暴力直观呈现出来，同时以“反向话语” 的方式为女性受众提供情感认同与行动正当性，使她们在日常互动中更敢于表达不满、提出异议并挑战既有性别规范。然而，这类叙事的政治效力仍受到反讽结构内在张力的限制，同时受制于性别二元框架的固有困境，使得其在颠覆性别秩序方面存在局限性。本文认为，“性别倒转”不仅是抵抗父权话语的策略性实践，它通过符号、语言与表演的微观操作揭示了数字时代性别权力关系的复杂性，也为理解媒体、情感政治与社会结构之间的交织提供了重要窗口。",
        keywords: "gender language; gender discourse; gender reversal; discursive power",
        keywordsCN: "性别语言；性别话语；性别倒转；话语权力"
      },
      {
        id: 2,
        title: "Entangled Lives: Time, Body, and Labor Strategies of Female Textile Workers — A Field Study in Zhejiang and Jiangsu",
        titleCN: "丝线缠绕的生命：纺织女工的时空、身体与劳动策略——基于浙苏两村的田野调查",
        status: "Sole Author | Fieldwork Report (2025)",
        statusCN: "独立作者｜田野调研报告（2025）",
        abstract: "This study is based on fieldwork conducted among female textile workers in Village Y (Zhejiang) and Village K (Jiangsu), examining how local industrial structures shape their temporal experiences, bodily conditions, and labor strategies in the process of rural industrialization.The findings show that the “home-factory integration” model in Village Y merges production and everyday life, while in Village K labor practices move between public and private, collective and individual domains. Despite these differences, women in both contexts face the dual burden of productive and reproductive labor, leaving lasting imprints on their bodies.The study argues that female workers are not passive subjects; rather, through diverse labor strategies and life narratives, they actively “weave” together industrial logic, family responsibilities, and personal experience, producing alternative forms of modernity.",
        abstractCN: "本文基于对浙江Y村与江苏K村两地女性纺织工人的田野调查，探讨了乡镇工业化进程中，不同地方性产业结构如何塑造纺织女工的时空、身体与劳动策略。研究发现，Y村的“家厂合一”模式将生产与生活完全融合；K村女工的劳动经验则在公共与私人、集体与个体之间流转。尽管路径各异，她们都承受着生产与家庭的“双重再生产”压力，并在身体上留下了深刻的劳动印记。文章最终指出，女工并非被动的承受者，她们通过多样的劳动策略与生命叙事，将工业逻辑、家庭责任与个人体验交织在一起，主动“编织”出一种多层次、另类的现代性。",
        keywords: "textile industry; female workers; gender and labor; rural industrialization",
        keywordsCN: "纺织业；女性工人；性别与劳动；农村工业化",
        fieldwork: {
          en: "Fieldwork Experience: Conducted ethnographic fieldwork over three consecutive years in Village Y (Zhejiang) and Village K (Jiangsu), with a cumulative duration of over one month. Independently completed more than 30 semi-structured interviews and produced three research reports based on the field materials, focusing on the practice of “two-sided marriage,” changes in gendered division of labor, and the life experiences of female textile workers.\n\nRelated works:\nAfter Selling the Looms: Changes in the Gendered Division of Labor in Household Industry in Northern Zhejiang\nExploring the Forms and Causes of “Two-sided Marriage” in Northern Zhejiang\n\nPublication (2025):\nUnderstanding Rural China from the “Origin of Sociology”",
          cn: "田野调查经验：连续三年赴浙江Y村与江苏K村开展田野调查，累计调研逾1个月，独立完成30余次半结构式访谈，整理约50万字逐字稿，基于田野资料独立撰写3篇调研报告，聚焦“两头婚”实践，性别分工变迁及女性纺织工人生命经验。\n\n相关论文：《卖掉织机之后：浙北家庭工业发展中的性别分工变迁》《浙北“两头婚”的实践形式与成因探讨》。\n\n相关发表（2025）：\n在社会学的“初心之地”读懂乡土中国",
          link: "http://www.cass.cn/keyandongtai/guoqingdiaoyan/202508/t20250815_5910869.shtml"
        }
      },
      {
        id: 3,
        title: "Gender Attitudes and Upward Intergenerational Relations: Evidence from CFPS 2020",
        titleCN: "性别观念对上行式代际关系的影响——基于CFPS2020的分析",
        status: "Sole Author | Course Paper (2025)",
        statusCN: "独立作者｜课程论文（2025）",
        abstract: "This study examines how gender attitudes influence intergenerational relationships between adult children and their parents. Using CFPS 2020 data and generalized ordered logit models, it analyzes how gender attitudes, age, and gender jointly shape relational closeness. The findings reveal a significant nonlinear relationship: moderately traditional gender attitudes are associated with higher intimacy, while extremely conservative or extremely  egalitarian views may negatively affect closeness. Gender differences are particularly evident in relationships with mothers, where male respondents report lower levels of intimacy. This study provides new insights into the interaction between family structures and gender norms in contemporary China.",
        abstractCN: "本文旨在探讨个体性别观念对上行式代际关系，即成年子女与父母之间关系亲密度的影响。基于CFPS2020数据，本文采用广义有序Logit模型进行实证分析，研究性别观念、年龄、性别等因素如何共同作用，影响上行式代际关系。实证结果表明，性别观念对代际关系的影响呈现显著的非线性特征：较为保守的性别观念与较高的亲密度显著相关，而极端保守或极端平等的性别观念则可能对亲密度产生负面影响。此外，性别差异在与母亲的关系中尤为显著，男性与母亲的亲密度明显较低。本文的研究为理解中国社会转型过程中家庭结构和性别因素的互动提供了新的理论视角，同时为政策制定者在推动性别平等及完善养老支持方面提供了实证依据。",
        keywords: "sociology of family; intergenerational relations; gender attitudes; generalized ordered logit model",
        keywordsCN: "家庭社会学；代际关系；性别观念；广义有序逻辑模型"
      },
      {
        id: 4,
        title: "Labor Participation, Marital Stability, and Family Structure: Evidence from CFPS",
        titleCN: "劳动参与、婚姻稳定与家庭人口结构 ——基于CFPS的实证研究",
        status: "Third Author | Published (2025)",
        statusCN: "第三作者｜项目论文（发表于2025）",
        abstract: "This study uses data from the China Family Panel Studies (CFPS) for the years 2014, 2018, and 2020, including the adult database, household economic database, and family relationship data. A non-balanced panel dataset is constructed and analyzed using Logit (Probit), Ordered Logit (Ordered Probit), and panel Logit (panel Probit) models to systematically estimate the direction and magnitude of the effects of both absolute and relative labor participation time on individual marital satisfaction. The study further examines the mechanisms through which labor participation influences marital satisfaction, focusing on two dimensions: norms of family division of labor and domestic work. It also explores heterogeneity in these effects across gender, educational matching within marriage, and intergenerational childcare arrangements. The aim is to provide rigorous empirical evidence to address these questions. Publication (2025): Included in Selected Papers of Outstanding Young Scholars (ISBN: 978-7-5228-4278-3).",
        abstractCN: "本文使用2014、2018和2020年CFPS（中国家庭追踪调查数据）数据中的成人数据 库、家庭经济数据库、家庭关系数据中的数据，清洗出一份非平衡截面数据，运用Logit（Probit） 模型、Ordered Logit（Ordered Probit）模型、面板 Logit（面板Probit）模型，系统估计了劳 动参与的绝对和相对时间对于个体婚姻满意度的影响方向和影响程度，并从“家庭分工观念”、 “家务劳动”两个方面分别直接、间接地分析了劳动参与对婚姻满意度的具体影响机制，从性 别、婚姻教育匹配、隔代抚养等不同维度考察了劳动参与对婚姻满意度的异质性作用，以期通过严谨的经验证据回答上述问题。收录于《人文社会科学青年学子优秀论文选（2024）》ISBN:978-7-5228-4278-3。",
        link: "https://xianxiao.ssap.com.cn/member/home/member_id/436549.html",
        keywords: "labor participation; marital satisfaction; domestic labor; intergenerational childcare",
        keywordsCN: "劳动参与；婚姻满意度；家务劳动；隔代抚养"
      }
    ]
  },

  engagement: [
    {
      id: 1,
      title: "Public Sociology Practice (Independent Platform)",
      titleCN: "公共社会学实践（个人账号）",
      year: "2024 – Present",
      desc: "Independently run a public knowledge dissemination account “Xiaoze” (Xiaohongshu ID: 373619623), focusing on sociology and gender-related topics, and exploring ways to translate academic theories into public-facing expressions.",
      descCN: "独立运营公共知识传播账号“小沢”（小红书ID：373619623），以社会学与性别议题为核心，探索学术理论的公众化表达路径。",
      link: "https://xhslink.com/m/9ZuPKWMYuGs"
    },
    {
      id: 2,
      title: "President, Peer Health Education Society, UCASS",
      titleCN: "中国社会科学院大学青春健康同伴社社长",
      year: "2025 – Present",
      desc: "Responsible for the overall management and recruitment training of the organization. Promote gender-friendly public discussion spaces on campus through peer education and interactive seminars. Planned and led participatory workshops on topics such as sexual and reproductive health and gender equality.",
      descCN: "负责社团整体运营与招新培训，通过同伴教育与互动式研讨，在校园内推动性别友好的公共讨论空间。策划并主导以“性与生殖健康”“性别平等”为主题的参与式工作坊与同伴教育活动。",
      link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkyNDU4OTY1MQ=="
    },
    {
      id: 3,
      title: "Volunteer, Beijing Love Queer Cinema Week (LQCW)",
      titleCN: "北京爱酷电影周志愿者",
      year: "Nov 2025",
      desc: "Participated in volunteer work for the 18th film festival, responsible for on-site operations and audience services, contributing to the practice and maintenance of queer cultural public spaces.",
      descCN: "参与第18届影展志愿服务工作，负责现场执行与观众接待，支持影展活动的顺利开展，并参与酷儿文化公共空间的实践与运作。"
    },
    {
      id: 4,
      title: "Editor-in-Chief, Student Journal 'Social Research and Discourse'",
      titleCN: "学生刊物《社研社语》编辑部负责人",
      year: "2024 – Present",
      desc: "School of Sociology and Ethnology, UCASS. Oversaw the entire publication process of the journal, including topic selection, manuscript review, and coordination among authors, reviewers, and the editorial team. Established standardized review mechanisms.",
      descCN: "中国社会科学院大学社会与民族学院学生刊物负责人。统筹刊物出版全流程，主导选题策划与稿件审核，协调作者、审稿人与编辑团队之间的沟通，建立标准化稿件审核与质量控制机制。",
      link: "https://mp.weixin.qq.com/s/lI2_d93PfVSaIfRtcGybAw"
    }
  ],




  blog: {
    thinking: [
      {
        id: 1,
        title: "“ta” as a Gendered / Gender-Neutral Signifier",
        titleCN: "关于“ta”作为性别中立代词的思考",
        en: `Chinese is a language where gender is not audible in speech but marked in writing. “Ta” (他/她/它) has been used in matchmaking ads (“come find your ta”) and by queer communities as a gender-neutral marker. Yet these uses point to very different claims on the same character. Unlike English “they” or Swedish “hen,” Chinese does not offer a widely stabilized gender-neutral pronoun beyond “ta” or “he/she.” I am interested in how people use it, what meanings they attach to it, and whether it can carry the kinds of political and affective weight we ask it to bear.`,
        cn: `中文是一种在口语中无法直接听出性别，但在书写中明确标记性别的语言。“ta”（他/她/它）既被用在相亲广告中（“来找你的那个ta”），也被酷儿社群用作性别中立的表达，但这两种用法其实指向的是对同一个字的不同主张。与英语中的“they”或瑞典语中的“hen”不同，中文并没有一个被广泛稳定接受的性别中立代词，除了“ta”或“他/她”。我想理解人们如何使用它、它被赋予了什么意义，以及它是否能够承载我们期待它所承载的政治与情感重量。`
      },
      {
        id: 2,
        title: "Muscles as Gender Signifiers",
        titleCN: "作为性别符号的肌肉身体",
        en: `Muscularity in men is often read as masculinity—it requires little explanation. But when women engage in strength training and develop visible muscle, what is it read as? Threatening? Cool? Transgressive? Or another form of disciplined, regulated body? I am still unsure whether this belongs to the sociology of the body, sports sociology, or perhaps both.`,
        cn: `男性展示肌肉通常会被直接读作“男性气质”，几乎不需要额外解释。但当女性进行力量训练并展示肌肉时，这种身体会被如何理解？是威胁？是“很酷”？是越轨？还是另一种被规训的身体？我还没有完全确定，这个问题究竟属于身体社会学、运动社会学，还是两者的交叉。`
      },
      {
        id: 3,
        title: "Women Smoking and Gendered Norms",
        titleCN: "女性吸烟与性别规范",
        en: `Why is women’s smoking still widely perceived as deviant? What kinds of gendered norms and expectations are at work in producing this perception?`,
        cn: `为什么女性吸烟仍然常常被视为一种“越轨行为”？这种观念背后，运作的是怎样的性别规范与社会期待？`
      }
    ],
    essays: [
      {
        id: 101,
        title: "Moments of Queerness",
        titleCN: "我获得酷儿性的一些时刻",
        date: "Dec 2025",
        content: `2024冬天最低落的时候看了《正常人》剧集，读了英文原著后还是非常喜爱，尤其爱结尾这一段落：\n\n“She closes her eyes. He probably won’t come back, she thinks. Or he will, differently. What they have now they can never have back again. But for her the pain of loneliness will be nothing to the pain that she used to feel, of being unworthy. He brought her goodness like a gift and now it belongs to her. Meanwhile his life opens out before him in all directions at once. They’ve done a lot of good for each other. Really, she thinks, really. People can really change one another. You should go, she says. I’ll always be here. You know that.”\n\n今年冬天最低落的时候又开始读萨利鲁尼，先是很顺畅地读完了《美丽的世界，你在哪里》，过了一段时间才开始读她名声最大的《聊天记录》。鲁尼和《聊天记录》大火的时候我在念高中... 鲁尼被大家喜爱的原因之一在于她的“时代性”。鲁尼以极为真诚的方式描绘她所知道的生活，那些心理描写和小小的美丽的比喻都太像从日记本里摘出来的话，她捡起了我们无数人共有的精神碎片，精巧的拼凑后展现在大家面前。如果说happyend告诉我们“友谊是一种非常酷儿的关系”，那么鲁尼则给了我更多关于“酷儿关系”的更具体的想象，我从她的讲述中汲取到了我的后现代性和酷儿性。在《聊天记录》里，Frances和Bobbi曾经是恋人，分手后依然彼此依赖，后又断交、复合，以一种没有被命名的方式重新联结——或者如Nick所说的，以一种“非常关系无政府主义”的方式共同生活。她们关心、依赖对方，却不试图占有。 我非常嫉妒她们之间的关系，无论我们怎么称呼，我感受到一种探索QPR/关系无政府主义的强大的吸引力，我们可以定义或不定义和人们的关系，我会在交往中获得爱与很多的瞬间，我从人群中来，又回到自己的世界。《聊天记录》的结尾我也非常喜爱：“物和人在我周围转动，在模糊复杂的体系里占据不同位置，加入我现在不知道并永远都不会知道的系统。一个由事物与概念组成的复杂网路。要明白生活你需要先经历它。你不能总是做一个分析的人。”\n\n获得酷儿性的很多时刻发生在大半夜从北京城里打车回良乡的路途中，深夜的网约车上经常蹦出很多酷儿们的新思考，在许多conversations with friends中我突然发现我们都有了太多对于生活的态度的转变。某天在聊天中我突然讲道：我以前非常相信“命运”、“缘分”之类的东西，但我最近开始把它们从我的意志里剥离掉了。现在我觉得人与人的相遇就是很简单很random的事情，和人产生好感、喜欢、依恋，发生对另一个人的爱，接住爱也是很简单很random的事情。上天指派给我的唯一的事物就是我的身体，如果周遭也算的话，上天也为我指派了家庭、国籍和性别，分别定下了我的家境、教育、身处的社会和可能要遵循的规范。上天没有为我指派我的“命运”，我也不需要做上帝希望我做的事情来证明我是上帝会爱的选民。换句话说，我的酷儿性就是我可以摆脱所有我可能要遵循的规范，发展路径、性别规范、生育选择.... 任何事物对我来说都不是命定之事，我要用我的身体我的聪明勇敢去做我任何想做的事，去任何地方，结识任何人，给予并接受更多的爱、发生更多的事情，我行动，我拥有了一些联结，我播洒了一些爱，我收获了更多爱，我经过，我从一切中体会到更多的美妙。也许这是一种对于酷儿性的诠释？有评论这样告诉我，我不知道我是否对“酷儿性”进行了诠释，但也许对于这样的表达和分享，并将其命名为“酷儿性”，就是实践与诠释的过程。\n\n与酷儿伙伴们在一起的时刻，我实践、诠释、我也获得。身处酷儿社群中，我们彼此看见、拥抱、喝彩、相互联结并给予爱，在这样的瞬间中我们从个体变成被dumping into人群中的“人”，我们拥有对方，我们的酷儿性疯狂生长。\n\n2024年某日，我和伙伴们围坐在山顶的小木屋里，念着便利贴上的一句话：“thank u for being queer, thank u for being incredible u”。2025年冬天，我和伙伴们散落在城市四处，我想和大家一起复读purple小组的基本立场：“思辨的快感经常是独自的偷欢，但只有在伙伴中间我们才能成为同志”。\n\n2026对所有人一定都会是个好年:_)!`
      },
      {
        id: 102,
        title: "On Time: Chronos, Kairos, and Queer Time",
        titleCN: "关于时间的思考：Chronos、Kairos、queertime",
        date: "Jan 2026",
        content: `随机波动最新一期节目以德国作家燕妮·埃彭贝克的新书《凯罗斯》为引，简要介绍了古希腊两种对立的时间观念——chronos和kairos，随后三位主播分享了过去一年的“凯罗斯时刻”或非均质时间体验。几日前听完后仍觉不过瘾，于是写下了这篇联想与思考。\n\nChronos：被规训的线性时间。Chrono- 是代表时间的词根，它通常涉及：事件的顺序、持续的时长和测量的刻度。\n\nChronos 来自希腊语 Khronos，是希腊神话中拟人化的时间，关于“我们如何量化地衡量岁月与生命”，代表线性的、可计量的流逝——钟表上的分钟、日历上的年月——过去、现在、未来这样连续不断的流逝。“All-devouring”（吞噬一切）和“inexorable”（不可阻挡）是他的核心标签。古希腊人认为，时间就像一条河流，会带走一切——青春、生命、记忆、王国。\n\n资本主义继承并强化了 Chronos 的逻辑。在这套体系里，时间是一种资源，必须被有效利用；生命是一条轨道，必须按时前进——我们在既定的轨道读书、考研、就业、成家、积累，似乎每一步都有它应当发生的时刻，我们被困在线性的社会时间里，稍有停滞，便是落后；倒退或循环，则近乎失败。\n\nChronos 是一种规训，它内化进我们对自身的批判，将我们拽进被时间之神吞噬的恐惧里——对“我还没有……”的焦虑，对间隔、休息、“今天什么都没做”的羞耻，都是 Chronos 的声音。\n\nKairos：充盈的瞬间。与Chronos相对，希腊语还有另一个词：Kairos，指“确切或关键的时间”。\n\nKairos是希腊希腊神话中的机遇之神。他双脚长有翅膀，四处奔走；但如果你足够留心，就能抓住他光秃后脑勺上垂着的那一绺长发。\n\nKaiors不是均匀流逝的，而是“充盈的瞬间”——那些质感不同、无法被均分的时刻。正因为Kairos 是非均质的、有质地和密度的，它不能被计划，只能被遭遇。有些瞬间浓缩了无数时间，有些漫长的日子却几乎是空的。\n\nKairos 的时间观抵抗“时间是容器”的隐喻，主张时间是事件本身，是那个当下的质地与密度——读到让自己震动的理论是 kairos，同伴之间某个无需言说的对视是 kairos，那些让我感到“爱让人变成透明的泡泡 心透明澄净 身体轻盈随意在空中飞动”的时刻是 kairos。这些瞬间或许发生在线性时间的缝隙里，它们无法被纳入人生主线的进度条，却是生命里最真实的部分。\n\n酷儿时间：一种生存的伦理姿态\n\nJack Halberstam 认为酷儿时间（queer time）是一种拒绝按照异性恋-资本主义规范排布生命的时序。\n\n异性恋规范的生命叙事以一组被赞颂的里程碑为标志——出生、童年、青春期、成年、婚姻、生育、为人父母、纪念日、退休与死亡——并要求人以"适当"的速度穿过每个阶段。许多人将这种“生育时间”内化为理所应当。\n\n但酷儿性可以是一种时间上的偏离——“奇异（queer）时间性、想象性的生活日程，以及偏心的经济实践”。当一个人的生命以这种方式展开，本身就构成对规范秩序的威胁。\n\nFreeman 给了这套规训一个更精准的名字：“时间规范性”（chrononormativity）——即日程、日历、时区这些安排如何"看起来像是身体的事实"——我们以为朝九晚五是自然的，以为停滞是病态的，但这不过是历史上特定权力体制内化进身体的结果。\n\n当这种规训扩展到整个人口，就成了“时间生命政治”（chronobiopolitics）：国家通过出生登记、婚姻许可、死亡登记，定义什么叫“拥有一种生活”。没有登记栏位的生活——停滞的、绕路的、无产出的——在这套框架里根本不算存在。\n\n而在“斜向地生活”中，我们看到酷儿潜能：迂回、延宕、不同步、停滞，不是失败，而是瓦解规范性逻辑的方式，酷儿们不仅能动摇“正统的历史”，也动摇出柜、发展、家庭、谱系、身份、解放、现代性，以及进步与运动的逻辑。酷儿时间让我们能够“穿行于时间，并与时间同行”——不按常识理解当下，让过去与未来以意想不到的方式互相渗透。\n\n如果说 chronos 是规范，kairos 是裂缝，那么酷儿时间就是把裂缝扩展成一种生活方式的伦理选择。不是偶然地逃脱线性时间，而是有意识地拒绝它，并在拒绝中建立另一套评判生命价值的标准。\n\n酷儿性与不同步性相连，为与“时间规范性”、与“再生产的未来性”、与“再生产时间”、与“线性时间”，或与“美好生活”等规范性框架不同步。停滞、迂回、延宕、循环，不是失败，而是一种与时间规范性不同步的存在方式。这种不同步，正是抵抗的形状。\n\n对于我，对于大家，我想我们不要玩任何人的游戏，拒绝进入任何一套话语体系，拒绝成为任何一套宏大叙事的注脚。\n\n别把生活当作一场需要排练的演出，不要等待变厉害了才去生活。去碰撞，去遭遇，去让生命流经你——力量不是准备的结果，而是生活完美的结晶。\n\n我拒绝活在资本主义的线性时间里。去停滞，去倒退，去打结。允许自己愚蠢，允许自己毫无产出，允许自己仅仅是作为一个肉身存在，只是享受生命和一切不存在的意义。\n\n国家通过出生登记、婚姻许可、死亡登记来定义“拥有一种生活”的含义。但在那些表格的栏位之外，在那些无法被归档的时刻里——当我们无所事事，当我们只是单纯地呼吸与爱——这没有里程碑、没有“岸”、没有证书的日子，它正是时间生命政治视野之外的生活。它正是酷儿时间。\n\n对于抵抗，对于瓦解，对于时间，不向虚无索要意义，不向未来预支当下，只在乎当下——唯有爱，以及我们身体切实的痛痒与温热——这无意义的物质性，才是唯一的永恒。`
      }
    ]
  },


  cv: {
    en: [
      { school: "University of Chinese Academy of Social Sciences", major: "BA Sociology", period: "2022 ~ 2027" },
      { school: "University of California, Berkeley", major: "BISP Extension Student", period: "2024 Spring" }
    ],
    cn: [
      { school: "中国社会科学院大学", major: "社会学 本科", period: "2022 ~ 2027" },
      { school: "加州大学伯克利分校", major: "BISP 交换生", period: "2024 春季" }
    ]
  }
};

// --- 背景组件：均衡彩虹旗六色 ---
function FlagBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "#fff" }}>
      <style>{`
        @keyframes flow { 0% { transform: translate(-3%, -3%) rotate(0deg); } 50% { transform: translate(3%, 3%) rotate(1deg); } 100% { transform: translate(-3%, -3%) rotate(0deg); } }
        @keyframes flowReverse { 0% { transform: translate(3%, 3%) rotate(0deg); } 50% { transform: translate(-3%, -3%) rotate(-1deg); } 100% { transform: translate(3%, 3%) rotate(0deg); } }
      `}</style>
      {/* 顶部：红橙黄 */}
      <div style={{
        position: "absolute", width: "160vw", height: "55vh", top: "-10%", left: "-10%",
        background: "linear-gradient(135deg, rgba(228,3,3,0.18) 0%, rgba(255,140,0,0.18) 40%, rgba(255,237,0,0.16) 100%)",
        filter: "blur(65px)", animation: "flow 28s infinite ease-in-out"
      }} />
      {/* 좌下：绿 */}
      <div style={{
        position: "absolute", width: "70vw", height: "60vh", bottom: "0", left: "-5%",
        background: "radial-gradient(ellipse at center, rgba(0,128,38,0.16) 0%, rgba(0,128,38,0.04) 70%, transparent 100%)",
        filter: "blur(60px)", animation: "flowReverse 32s infinite ease-in-out"
      }} />
      {/* 右下：蓝紫 */}
      <div style={{
        position: "absolute", width: "70vw", height: "60vh", bottom: "0", right: "-5%",
        background: "linear-gradient(135deg, rgba(0,77,255,0.15) 0%, rgba(117,7,135,0.15) 100%)",
        filter: "blur(65px)", animation: "flow 26s infinite ease-in-out reverse"
      }} />
      {/* 中央柔化层，让六色自然融合 */}
      <div style={{
        position: "absolute", width: "100vw", height: "100vh", top: 0, left: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 80%)",
        pointerEvents: "none"
      }} />
      {/* 噪点纹理 */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

// --- 页面子组件 ---

function PageAbout({ lang }) {
  return (
    <section>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", marginBottom: "2rem" }}>
        <div style={{ flex: "1 1 500px" }}>
          <h1 style={{ fontFamily: theme.fontSerif, fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: 400, margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
            {lang === "cn" ? data.nameCN : data.name}
          </h1>
          <p style={{ fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#333", margin: 0 }}>
            {lang === "cn" ? data.taglineCN : data.tagline}
          </p>
          <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.4rem" }}>
            {lang === "cn" ? data.pronounsCN : data.pronouns}
          </p>
        </div>
        <div style={{ flex: "0 0 200px", margin: "0 auto" }}>
          <div style={{ width: "200px", height: "265px", border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            <img src="/profile.jpg" alt="Freya Tang" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.6rem", textAlign: "center", fontStyle: "italic", fontFamily: theme.fontSerif }}>Beijing, 2026</p>
        </div>
      </div>
      <div style={{ maxWidth: "850px" }}>
        {data.about[lang].split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: theme.colorText, marginBottom: "1.2rem", textAlign: "justify" }}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function PageResearch({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 850 }}>
      <p style={{ fontStyle: "italic", color: theme.colorDetail, marginBottom: "2.5rem", lineHeight: 1.6 }}>{lang === "cn" ? data.research.intro.cn : data.research.intro.en}</p>
      {data.research.items.map((r) => (
        <div key={r.id} style={{ padding: "1.5rem 0", borderBottom: theme.border, cursor: "pointer" }} onClick={() => setOpen(open === r.id ? null : r.id)}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.25rem", fontWeight: 400, margin: 0, color: "#000" }}>{lang === "cn" ? r.titleCN : r.title}</h4>
          </div>
          <p style={{ fontSize: 11, color: theme.colorDetail, marginTop: 8, fontWeight: 600 }}>{lang === "cn" ? r.statusCN : r.status}</p>
          {open === r.id && (
            <div style={{ marginTop: "1.2rem", animation: "fadeIn 0.3s ease" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub, marginBottom: "1rem", textAlign: "justify" }}><strong>Abstract: </strong>{lang === "cn" ? r.abstractCN : r.abstract}</p>
              <p style={{ fontSize: "0.9rem", color: theme.colorDetail }}><strong>Keywords: </strong>{lang === "cn" ? r.keywordsCN : r.keywords}</p>
              {r.fieldwork && (
                <div style={{ marginTop: "1.5rem", padding: "1.2rem", background: "rgba(0,0,0,0.03)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorText }}><strong>{lang === "cn" ? "田野调查经验" : "Fieldwork Experience"}</strong></p>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: theme.colorSub, whiteSpace: "pre-wrap" }}>{lang === "cn" ? r.fieldwork.cn : r.fieldwork.en}</p>
                  {r.fieldwork.link && <a href={r.fieldwork.link} target="_blank" style={{ fontSize: "0.85rem", color: "#000", marginTop: "0.5rem", display: "block" }}>{lang === "cn" ? "阅读出版物 ↗" : "Read Publication ↗"}</a>}
                </div>
              )}
              {r.link && <a href={r.link} target="_blank" style={{ fontSize: "0.9rem", color: "#000", textDecoration: "underline", display: "block", marginTop: "1.5rem" }} onClick={e => e.stopPropagation()}>{lang === "cn" ? "先晓书院个人主页 ↗" : "Xianxiao Academy Personal Page ↗"}</a>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PageEngagement({ lang }) {
  return (
    <div style={{ maxWidth: 850 }}>
      {data.engagement.map(item => (
        <div key={item.id} style={{ marginBottom: "2rem", borderBottom: theme.border, paddingBottom: "1.5rem" }}>
          <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.35rem", margin: "0 0 0.5rem", fontWeight: 500 }}>{lang === "cn" ? item.titleCN : item.title}</h4>
          <p style={{ fontSize: "11px", color: theme.colorDetail, textTransform: "uppercase", marginBottom: "0.8rem" }}>{item.year}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: theme.colorSub, textAlign: "justify" }}>{lang === "cn" ? item.descCN : item.desc}</p>
          {item.link && (
            <a href={item.link} target="_blank" style={{ fontSize: "0.85rem", color: "#000", textDecoration: "underline", display: "inline-block", marginTop: "0.5rem" }}>
              {lang === "cn" ? "访问链接 ↗" : "Visit Link ↗"}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

function PageBlog({ lang }) {
  const [openEssay, setOpenEssay] = useState(null);
  return (
    <div style={{ maxWidth: 850 }}>
      <section style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>{lang === "cn" ? "思考" : "Thinking"}</h3>
        <p style={{ fontStyle: "italic", color: theme.colorDetail, marginBottom: "2rem" }}>{lang === "cn" ? "'尚未定论的、正在形成的——我持续探索中的问题与研究想法。'" : "Unsettled questions, ideas in formation—things I keep returning to."}</p>
        {data.blog.thinking.map(t => (
          <div key={t.id} style={{ marginBottom: "2rem", padding: "1.2rem", border: theme.border, background: "rgba(255,255,255,0.3)" }}>
            <h5 style={{ fontFamily: theme.fontSerif, fontSize: "1.2rem", margin: "0 0 0.5rem" }}>{lang === "cn" ? t.titleCN : t.title}</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub, textAlign: "justify" }}>{lang === "cn" ? t.cn : t.en}</p>
          </div>
        ))}
      </section>
      <section>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "2rem" }}>{lang === "cn" ? "写作" : "Essays"}</h3>
        {data.blog.essays.map(essay => (
          <div key={essay.id} style={{ marginBottom: "1.5rem", borderBottom: "1px dashed #eee", paddingBottom: "1.5rem" }}>
            <h4 onClick={() => setOpenEssay(openEssay === essay.id ? null : essay.id)} style={{ cursor: "pointer", fontFamily: theme.fontSerif, fontSize: "1.4rem", fontWeight: 400, color: openEssay === essay.id ? "#000" : "#555" }}>
              {lang === "cn" ? essay.titleCN : essay.title} {openEssay === essay.id ? "↑" : "↓"}
            </h4>
            <p style={{ fontSize: 11, color: "#999", marginTop: 4 }}>{essay.date}</p>
            {openEssay === essay.id && (
              <div style={{ marginTop: "1.5rem", fontSize: "1.05rem", lineHeight: 1.9, color: theme.colorText, whiteSpace: "pre-wrap", animation: "fadeIn 0.4s ease", textAlign: "justify" }}>
                {essay.content}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

// --- App 主组件 ---

export default function App() {
  const [page, setPage] = useState("about");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@300;400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ minHeight: "100vh", fontFamily: theme.fontSans, color: theme.colorText, position: "relative" }}>
      <FlagBackground />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 950, margin: "0 auto", padding: "0 1.5rem" }}>
        <header style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 0 1.5rem", gap: "1rem" }}>
          {/* Nav + language toggle on the same row */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "1.2rem" }}>
            <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.2rem" }}>
              {["about", "research", "public engagement", "blog", "cv", "contact"].map(p => {
                const label = lang === "cn" ? {
                  "about": "关于", "research": "研究项目", "public engagement": "公共实践", "blog": "博客", "cv": "简历", "contact": "联系"
                }[p] : p;
                return (
                  <button key={p} onClick={() => setPage(p === "public engagement" ? "engagement" : p)} style={{
                    background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.08em",
                    color: (page === p || (page === "engagement" && p === "public engagement")) ? "#000" : "#888",
                    fontWeight: (page === p || (page === "engagement" && p === "public engagement")) ? 700 : 400,
                    textTransform: "uppercase", fontFamily: theme.fontSans
                  }}>{label}</button>
                );
              })}
            </nav>
            {/* Language toggle inline with nav */}
            <button onClick={() => setLang(lang === "en" ? "cn" : "en")} style={{
              background: "rgba(255,255,255,0.7)", color: "#1a1a1a", border: "1px solid #ddd",
              padding: "4px 14px", borderRadius: "20px", fontSize: "0.75rem", cursor: "pointer",
              backdropFilter: "blur(5px)", flexShrink: 0
            }}>{lang === "en" ? "中" : "EN"}</button>
          </div>
        </header>

        <main style={{ paddingBottom: "10rem" }}>
          {page !== "about" && (
            <h2 style={{ fontFamily: theme.fontSerif, fontSize: "2.5rem", fontWeight: 400, marginBottom: "3rem", textTransform: "capitalize" }}>
              {lang === "cn" ? { "engagement": "公共实践", "research": "研究项目", "blog": "博客", "cv": "简历", "contact": "联系" }[page] : page}
            </h2>
          )}
          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            {page === "about" && <PageAbout lang={lang} />}
            {page === "research" && <PageResearch lang={lang} />}
            {page === "engagement" && <PageEngagement lang={lang} />}
            {page === "blog" && <PageBlog lang={lang} />}
            {page === "cv" && (
              <div style={{ maxWidth: 850, lineHeight: 2.2 }}>
                <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #eee", marginBottom: "1.5rem" }}>{lang === "cn" ? "教育背景" : "Education"}</h3>
                {(lang === "cn" ? data.cv.cn : data.cv.en).map((item, i) => (
                  <p key={i}><strong>{item.school}</strong> · {item.major} ({item.period})</p>
                ))}
                <p style={{ color: theme.colorDetail, marginTop: "2rem", fontStyle: "italic" }}>
                  {lang === "cn" ? "如需完整学术作品集及简历，烦请通过邮件联系获取。" : "Full Academic Portfolio and CV available via email."}
                </p>
              </div>
            )}
            {page === "contact" && (
              <div style={{ maxWidth: 850 }}>
                <p style={{ fontSize: "1.1rem", color: theme.colorSub, lineHeight: 1.85, marginBottom: "3rem", whiteSpace: "pre-wrap", textAlign: "justify" }}>
                  {lang === "cn"
                    ? "欢迎在北京约一杯咖啡面谈，或通过邮件联系我。\n我非常欢迎与大家交流关于社会学、性与性别、酷儿生活、公共社会学或研究生申请等相关话题，也欢迎任何潜在的合作机会，或者就你正在思考的问题展开对话。"
                    : "I am open to coffee chats in Beijing, or feel free to reach out via email.\nI welcome conversations on sociology, gender and sexuality, queer life, public sociology, graduate study applications, or any ideas you are currently thinking through. I am also open to potential collaborations, or simply engaging in dialogue around questions that matter to you."}
                </p>
                <a href={`mailto:${data.email}`} style={{ textDecoration: "none", color: "#000", borderBottom: "2px solid #000", paddingBottom: 4, fontSize: "1.4rem", fontFamily: theme.fontSerif }}>{data.email} ↗</a>
              </div>
            )}
          </div>
        </main>

        <footer style={{ padding: "4rem 0", borderTop: theme.border, display: "flex", justifyContent: "flex-end", color: theme.colorDetail, fontSize: "0.8rem" }}>
          <span>© 2026 Freya Feiyue Tang</span>
        </footer>
      </div>
    </div>
  );
}