import { useState, useEffect } from "react";

// --- 主题配置 ---
const theme = {
  fontSerif: "'EB Garamond', serif",
  fontSans: "'Inter', -apple-system, sans-serif",
  colorText: "#1a1a1a",
  colorSub: "#333",
  colorDetail: "#666",
  border: "1px solid rgba(0,0,0,0.1)",
};

const data = {
  name: "freya feiyue tang",
  nameCN: "唐菲玥",
  tagline: "Gender & Sexuality · Queer Theory · Language & Power",
  taglineCN: "性别与性 · 酷儿理论 · 语言与权力",
  pronouns: "Any pronouns except “he/him” · Beijing",
  pronounsCN: "“他”以外的任何代词 · 北京",
  email: "feiyue.tang@outlook.com",
  about: {
    en: `I am an undergraduate sociology student at the University of Chinese Academy of Social Sciences, with a focus on gender, sexuality, and queer lives in contemporary China. My research interests lie at the intersection of gender sociology, queer theory, and sociolinguistics, with particular attention to the relationship between language, power, and identity.\n\nI am currently interested in feminist discursive activism in digital spaces in China, examining how individuals are influenced by online feminist movements, how they come to recognize gender-based violence embedded in language, and how they develop strategic forms of feminist expression and intervention.\n\nI am also interested in the question of queer “unspeakability” in the Chinese language, particularly the possibilities and social implications of gender-neutral pronouns and gender-inclusive linguistic practices.\n\nBeyond academic research, I am actively engaged in Chinese queer communities and am exploring modes of public sociology, seeking to bridge academic inquiry with broader public conversations.\n\nI am currently preparing applications for graduate study abroad (Fall 2027), with the long-term goal of pursuing a PhD in sociology of gender.`,
    cn: `我是中国社会科学院大学社会学本科生，关注当代中国语境下的性别、性与酷儿生活。我的研究兴趣位于性别社会学、酷儿理论与社会语言学的交叉领域，尤其关注语言、权力与身份之间的关系。\n\n目前，我主要关注中国女性主义中的网络话语行动主义，探讨个体如何在数字空间中受到女性主义思潮的影响，识别语言中的性别暴力，并发展出具有策略性的表达与回应方式。同时，我也关注中文语境中酷儿的“失语”问题，尤其是性别中立代词与性别包容性语言的可能性及其社会意义。\n\n学术研究之外，我也是中文酷儿社群的积极参与者，并在持续探索公共社会学的表达路径，尝试在学术研究与公共讨论之间建立连接。\n\n我目前正在准备2027年秋季的海外研究生申请，长期目标是攻读性别社会学方向的博士学位。`
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
        abstract: "This research examines the emergence of “gender reversal” short videos on social media, combining critical discourse analysis with semi-structure interviews, drawing on Bourdieu’s practice theory and framework of symbolic violence, Foucault’s discourse–power perspective, and Butler’s theory of gender performativity. It explores how audiences engage in the negotiation of gender discourse through viewing, interpreting, and reproducing “gender reversal” content. The findings show that “gender reversal” symbolically inverts social norms to render the latent and often hidden forms of everyday gendered violence visible. By producing “counter discourses,” these videos provide female audiences with emotional resonance and a sense of legitimacy for action, encouraging them to express dissatisfaction, voice objections, and challenge existing gender norms in daily interactions. However, the political efficacy of such narratives is constrained by the intrinsic tension of ironic structures and the limitations of the binary gender framework, restricting their capacity to fundamentally subvert gender hierarchies. The reaserch argues that “gender reversal” functions not only as a strategic practice resisting patriarchal discourse but also as a critical lens through which the complexities of gendered power relations in the digital era can be examined. It offers an important window into the interplay among media, affective politics, and social structures, revealing how symbols, language, and performance mediate the negotiation of identity and power.",
        abstractCN: "本研究以社交媒体上兴起的“性别倒转”类短视频为对象，结合批判性话语分析与半结构式访谈，借助布迪厄的实践理论与符号暴力框架、福柯的话语—权力视角以及巴特勒的性别操演理论，探讨受众如何通过观看、理解与再生产“性别倒转”内容参与性别话语的协商。研究发现，“性别倒转”通过象征性逆转，将日常生活中潜在而隐蔽的性别暴力直观呈现出来，同时以“反向话语”的方式为女性受众提供情感认同与行动正当性，使她们在日常互动中更敢于表达不满、提出异议并挑战既有性别规范。然而，这类叙 narratives 的政治效力仍受到反讽结构内在张力的限制，同时受制于性别二元框架的固有困境，使得其在颠覆性别秩序方面存在局限性。本文认为，“性别倒转”不仅是抵抗父权话语的策略性实践，它通过符号、语言与表演的微观操作揭示了数字时代性别权力关系的复杂性，也为理解媒体、情感政治与社会结构之间的交织提供了重要窗口。",
        keywords: "gender language; gender discourse; gender reversal; discursive power",
        keywordsCN: "性别语言；性别话语；性别倒转；话语权力"
      },
      {
        id: 2,
        title: "Entangled Lives: Time, Body, and Labor Strategies of Female Textile Workers",
        titleCN: "丝线缠绕的生命：纺织女工的时空、身体与劳动策略——基于浙苏两村的田野调查",
        status: "Sole Author | Fieldwork Report (2025)",
        statusCN: "独立作者｜田野调研报告（2025）",
        abstract: "This study is based on fieldwork conducted among female textile workers in Village Y (Zhejiang) and Village K (Jiangsu), examining how local industrial structures shape their temporal experiences, bodily conditions, and labor strategies in the process of rural industrialization. The findings show that the “home-factory integration” model in Village Y merges production and everyday life, while in Village K labor practices move between public and private, collective and individual domains. Despite these differences, women in both contexts face the dual burden of productive and reproductive labor, leaving lasting imprints on their bodies. The study argues that female workers are not passive subjects; rather, through diverse labor strategies and life narratives, they actively “weave” together industrial logic, family responsibilities, and personal experience, producing alternative forms of modernity.",
        abstractCN: "本文基于对浙江Y村与江苏K村两地女性纺织工人的田野调查，探讨了乡镇工业化进程中，不同地方性产业结构如何塑造纺织女工的时空、身体与劳动策略。研究发现，Y村的“家厂合一”模式将生产与生活完全融合；K村女工的劳动经验则在公共与私人、集体与个体之间流转。尽管路径各异，她们都承受着生产与家庭的“双重再生产”压力，并在身体上留下了深刻的劳动印记。文章最终指出，女工并非被动的承受者，她们通过多样的劳动策略与生命叙事，将工业逻辑、家庭责任与个人体验交织在一起，主动“编织”出一种多层次、另类的现代性。",
        keywords: "textile industry; female workers; gender and labor; rural industrialization",
        keywordsCN: "纺织业；女性工人；性别与劳动；农村工业化",
        extra: {
          en: "Fieldwork Experience: Conducted ethnographic fieldwork over three consecutive years in Village Y (Zhejiang) and Village K (Jiangsu). Independently completed more than 30 semi-structured interviews. Related works include 'After Selling the Looms' and 'Exploring the Forms and Causes of Two-sided Marriage'.",
          cn: "田野调查经验：连续三年赴浙江Y村与江苏K村开展田野调查，累计调研逾1个月，独立完成30余次半结构式访谈，独立撰写3篇调研报告。相关论文包括《卖掉织机之后》《浙北“两头婚”的实践形式与成因探讨》。",
          link: "http://www.cass.cn/keyandongtai/guoqingdiaoyan/202508/t20250815_5910869.shtml"
        }
      },
      {
        id: 3,
        title: "Gender Attitudes and Upward Intergenerational Relations: Evidence from CFPS 2020",
        titleCN: "性别观念对上行式代际关系的影响——基于CFPS2020的分析",
        status: "Sole Author | Course Paper (2025)",
        statusCN: "独立作者｜课程论文（2025）",
        abstract: "This study examines how gender attitudes influence intergenerational relationships between adult children and their parents. Using CFPS 2020 data and generalized ordered logit models, it analyzes how gender attitudes, age, and gender jointly shape relational closeness. The findings reveal a significant nonlinear relationship: moderately traditional gender attitudes are associated with higher intimacy, while extremely conservative or extremely egalitarian views may negatively affect closeness. Gender differences are particularly evident in relationships with mothers, where male respondents report lower levels of intimacy. This study provides new insights into the interaction between family structures and gender norms in contemporary China.",
        abstractCN: "本文旨在探讨个体性别观念对上行式代际关系，即成年子女与父母之间关系亲密度的影响。基于CFPS2020数据，本文采用广义有序Logit模型进行实证分析。实证结果表明，性别观念对代际关系的影响呈现显著的非线性特征：较为保守的性别观念与较高的亲密度显著相关，而极端保守或极端平等的性别观念则可能对亲密度产生负面影响。此外，性别差异在与母亲的关系中尤为显著，男性与母亲的亲密度明显较低。本文的研究为理解中国社会转型过程中家庭结构和性别因素的互动提供了新的理论视角。",
        keywords: "sociology of family; intergenerational relations; gender attitudes; generalized ordered logit model",
        keywordsCN: "家庭社会学；代际关系；性别观念；广义有序逻辑模型"
      },
      {
        id: 4,
        title: "Labor Participation, Marital Stability, and Family Structure: Evidence from CFPS",
        titleCN: "劳动参与、婚姻稳定与家庭人口结构 ——基于CFPS的实证研究",
        status: "Third Author | Published (2025)",
        statusCN: "第三作者｜项目论文（发表于2025）",
        abstract: "This study uses CFPS data for 2014, 2018, and 2020 to estimate the effects of both absolute and relative labor participation time on individual marital satisfaction. The study further examines mechanisms focusing on norms of family division of labor and domestic work. It also explores heterogeneity across gender, educational matching, and intergenerational childcare arrangements.",
        abstractCN: "本文使用2014、2018和2020年CFPS数据，运用Logit、Ordered Logit及面板模型，系统估计了劳动参与的绝对和相对时间对于个体婚姻满意度的影响。并从“家庭分工观念”、“家务劳动”两方面分析了影响机制，从性别、婚姻教育匹配、隔代抚养等维度考察了异质性作用。成果收录于《人文社会科学青年学子优秀论文选（2024）》ISBN:978-7-5228-4278-3。",
        keywords: "labor participation; marital satisfaction; domestic labor; intergenerational childcare",
        keywordsCN: "劳动参与；婚姻满意度；家务劳动；隔代抚养"
      }
    ]
  },
  engagement: [
    {
      id: 1,
      title: "Public Sociology Practice (Independent Platform) | 公共社会学实践（个人账号）",
      year: "2024 – Present",
      desc: "Independently run a public knowledge dissemination account “Xiaoze” (Xiaohongshu ID: 373619623), focusing on sociology and gender-related topics, and exploring ways to translate academic theories into public-facing expressions.",
      descCN: "独立运营公共知识传播账号“小沢”（小红书ID：373619623），以社会学与性别议题为核心，探索学术理论的公众化表达路径。",
      link: "https://xhslink.com/m/9ZuPKWMYuGs"
    },
    {
      id: 2,
      title: "Peer Health Education Society, UCASS | 中国社会科学院大学青春健康同伴社社长",
      year: "2025 – Present",
      desc: "Responsible for the overall management and recruitment training. Planned and led participatory workshops on topics such as sexual and reproductive health and gender equality, facilitating public discussion and knowledge dissemination on gender issues among youth.",
      descCN: "负责社团整体运营与招新培训，通过同伴教育与互动式研讨，在校园内推动性别友好的公共讨论空间。策划并主导以“性与生殖健康”“性别平等”为主题的参与式工作坊。",
      link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkyNDU4OTY1MQ=="
    },
    {
      id: 3,
      title: "Beijing Love Queer Cinema Week (LQCW) | 北京爱酷电影周志愿者",
      year: "Nov 2025",
      desc: "Participated in volunteer work for the 18th film festival, responsible for on-site operations and audience services, contributing to the practice and maintenance of queer cultural public spaces.",
      descCN: "参与第18届影展志愿服务工作，负责现场执行与观众接待，支持影展活动的顺利开展，并参与酷儿文化公共空间的实践与运作。"
    },
    {
      id: 4,
      title: "Student Journal 'Social Research and Discourse' | 学生刊物《社研社语》编辑部负责人",
      year: "2024 – Present",
      desc: "Oversaw the entire publication process of the journal, including topic selection, manuscript review, and editorial team coordination at the School of Sociology and Ethnology.",
      descCN: "中国社会科学院大学社会与民族学院学生刊物负责人。统筹刊物出版全流程，主导选题策划与稿件审核，建立标准化稿件审核与质量控制机制。",
      link: "https://mp.weixin.qq.com/s/lI2_d93PfVSaIfRtcGybAw"
    }
  ],
  blog: {
    thinking: {
      en: "Unsettled questions, ideas in formation—things I keep returning to. Not yet research, but not not-research either.",
      cn: "“还没成为研究的问题，但也不是不是研究的问题。”",
      items: [
        {
          id: 1,
          title: "“ta” as a Gendered / Gender-Neutral Signifier",
          titleCN: "关于“ta”作为性别中立代词的思考",
          content: "Chinese is a language where gender is not audible in speech but marked in writing. “Ta” (他/她/它) has been used in matchmaking ads (“come find your ta”) and by queer communities as a gender-neutral marker. Unlike English “they” or Swedish “hen,” Chinese does not offer a widely stabilized gender-neutral pronoun. I am interested in how people use it and whether it can carry the kinds of political and affective weight we ask it to bear.",
          contentCN: "中文是一种在口语中无法直接听出性别，但在书写中明确标记性别的语言。“ta”既被用在相亲广告中（“来找你的那个ta”），也被酷儿社群用作性别中立的表达。与英语中的“they”或瑞典语中的“hen”不同，中文并没有一个被广泛稳定接受的性别中立代词。我想理解人们如何使用它，以及它是否能够承载我们期待它所承载的政治与情感重量。"
        },
        {
          id: 2,
          title: "Muscles as Gender Signifiers",
          titleCN: "肌肉作为性别符号",
          content: "Muscularity in men is often read as masculinity. But when women develop visible muscle, what is it read as? Threatening? Cool? Transgressive? Or another form of disciplined body? I am still unsure whether this belongs to the sociology of the body, sports sociology, or perhaps both.",
          contentCN: "男性展示肌肉通常会被直接读作“男性气质”。但当女性展示肌肉时，这种身体会被如何理解？是威胁？是“很酷”？是越轨？还是另一种被规训的身体？这个问题究竟属于身体社会学还是运动社会学？"
        },
        {
          id: 3,
          title: "Women Smoking and Gendered Norms",
          titleCN: "女性吸烟与性别规范",
          content: "Why is women’s smoking still widely perceived as deviant? What kinds of gendered norms and expectations are at work in producing this perception?",
          contentCN: "为什么女性吸烟仍然常常被视为一种“越轨行为”？这种观念背后，运作的是怎样的性别规范与社会期待？"
        }
      ]
    },
    essays: [
      {
        id: 1,
        title: "Moments of Queerness: Sally Rooney and 'Normal People' | 我获得酷儿性的一些时刻",
        date: "Dec 2025",
        content: `2024冬天最低落的时候看了《正常人》剧集，读了原著后还是非常喜爱... 鲁尼被大家喜爱的原因之一在于她的“时代性”。她捡起了我们无数人共有的精神碎片，精巧的拼凑后展现在大家面前。如果说happyend告诉我们“友谊是一种非常酷儿的关系”，那么鲁尼则给了我更多关于“酷儿关系”的更具体的想象，我从她的讲述中汲取到了我的后现代性和酷儿性。在《聊天记录》里，Frances和Bobbi以一种“非常关系无政府主义”的方式共同生活。她们关心、依赖对方，却不试图占有。\n\n获得酷儿性的很多时刻发生在大半夜从北京城里打车回良乡的路途中... 我开始把“命运”从我的意志里剥离。我觉得人与人的相遇就是很简单很random的事情。换句话说，我的酷儿性就是我可以摆脱所有我可能要遵循的规范，发展路径、性别规范、生育选择.... 任何事物对我来说都不是命定之事，我要用我的身体我的聪明勇敢去做我任何想做的事。\n\n与酷儿伙伴们在一起的时刻，我实践、诠释、我也获得。身处酷儿社群中，我们彼此看见、拥抱、喝彩。2024年某日，在山顶小木屋里，念着便利贴上的一句话：“thank u for being queer, thank u for being incredible u”。2025年冬天，我想和大家一起复读purple小组的基本立场：“思辨的快感经常是独自的偷欢，但只有在伙伴中间我们才能成为同志”。`
      },
      {
        id: 2,
        title: "On Time: Chronos, Kairos, and Queer Time | 关于时间的思考：Chronos、Kairos、queertime",
        date: "Jan 2026",
        content: `随机波动最新一期节目分享了“凯罗斯时刻”。\n\nChronos：被规训的线性时间。希腊神话中拟人化的时间，代表可计量的流逝。资本主义继承并强化了Chronos的逻辑，生命被视为一条轨道。Chronos是一种规训，它内化进我们对自身的批判。\n\nKairos：充盈的瞬间。机遇之神，不是均匀流逝的，而是“充盈的瞬间”。Kairos 时间观主张时间是事件本身，是那个当下的质地与密度。\n\n酷儿时间（Queer Time）：Jack Halberstam 认为酷儿时间是一种拒绝按照异性恋-资本主义规范排布生命的时序。Freeman 给了这套规训一个名字：“时间规范性”（chrononormativity）——日程、日历、时区如何“看起来像是身体的事实”。\n\n我拒绝活在资本主义的线性时间里。去停滞，去倒退，去打结。允许自己愚蠢，允许自己毫无产出，允许自己仅仅是作为一个肉身存在。对于抵抗，不向虚无索要意义，不向未来预支当下，只在乎当下——唯有爱，以及我们身体切实的痛痒与温热——这无意义的物质性，才是唯一的永恒。`
      }
    ]
  },
  cv: {
    en: [
      { school: "University of Chinese Academy of Social Sciences", major: "BA Sociology", period: "2022-09 ~ 2027" },
      { school: "University of California, Berkeley", major: "BISP Extension Student", period: "2024 Spring" }
    ],
    cn: [
      { school: "中国社会科学院大学", major: "社会学 本科", period: "2022-09 ~ 2027" },
      { school: "加州大学伯克利分校", major: "BISP 交换生", period: "2024 春季" }
    ]
  }
};

// --- 背景组件：增强版彩虹旗 ---
function FlagBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "#fff" }}>
      <style>{`
        @keyframes flow { 0% { transform: translate(-3%, -3%) rotate(0deg); } 50% { transform: translate(3%, 3%) rotate(1.5deg); } 100% { transform: translate(-3%, -3%) rotate(0deg); } }
      `}</style>
      <div style={{ position: "absolute", width: "150vw", height: "60vh", top: "-10%", left: "-10%", background: "linear-gradient(180deg, rgba(228,3,3,0.22), rgba(255,140,0,0.22), rgba(255,237,0,0.2), rgba(0,128,38,0.18), rgba(0,77,255,0.18), rgba(117,7,135,0.2))", filter: "blur(60px)", animation: "flow 25s infinite ease-in-out" }} />
      <div style={{ position: "absolute", width: "90vw", height: "100vh", right: "-15%", top: "0", background: "linear-gradient(180deg, rgba(255,244,48,0.25) 0%, rgba(255,255,255,0.4) 25%, rgba(156,89,209,0.2) 50%, rgba(0,0,0,0.15) 100%)", filter: "blur(80px)", animation: "flow 30s infinite ease-in-out reverse" }} />
      <div style={{ position: "absolute", width: "110vw", height: "55vh", bottom: "-10%", left: "-5%", background: "linear-gradient(180deg, rgba(213,45,0,0.18) 0%, rgba(255,154,86,0.18) 25%, rgba(255,255,255,0.2) 50%, rgba(212,98,166,0.18) 75%, rgba(165,0,98,0.18) 100%)", filter: "blur(70px)", animation: "flow 28s infinite ease-in-out" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

// --- 页面组件 ---

function PageAbout({ lang }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "1.5rem", alignItems: "flex-start", marginTop: "0.5rem" }}>
      <div style={{ flex: "1 1 450px" }}>
        {data.about[lang].split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: theme.colorText, marginBottom: "1rem", textAlign: "justify" }}>{p}</p>
        ))}
      </div>
      <div style={{ flex: "0 0 200px", margin: "0 auto" }}>
        <div style={{ width: "200px", height: "265px", border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
          <img src="/profile.jpg" alt="Freya Tang" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.6rem", textAlign: "center", fontStyle: "italic", fontFamily: theme.fontSerif }}>Beijing, 2026</p>
      </div>
    </div>
  );
}

function PageResearch({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 800 }}>
      <p style={{ fontSize: "1rem", fontStyle: "italic", color: theme.colorDetail, marginBottom: "2rem", lineHeight: 1.6 }}>
        {lang === "cn" ? data.research.intro.cn : data.research.intro.en}
      </p>
      {data.research.items.map((r) => (
        <div key={r.id} style={{ padding: "1.5rem 0", borderBottom: theme.border, cursor: "pointer" }} onClick={() => setOpen(open === r.id ? null : r.id)}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.3rem", fontWeight: 500, margin: 0 }}>{lang === "cn" ? r.titleCN : r.title}</h4>
          </div>
          <p style={{ fontSize: 11, color: theme.colorDetail, marginTop: 8, fontWeight: 600 }}>{lang === "cn" ? r.statusCN : r.status}</p>
          {open === r.id && (
            <div style={{ marginTop: "1.2rem", animation: "fadeIn 0.3s ease" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub, marginBottom: "1rem" }}><strong>{lang === "cn" ? "摘要: " : "Abstract: "}</strong>{lang === "cn" ? r.abstractCN : r.abstract}</p>
              <p style={{ fontSize: "0.9rem", color: theme.colorDetail }}><strong>{lang === "cn" ? "关键词: " : "Keywords: "}</strong>{lang === "cn" ? r.keywordsCN : r.keywords}</p>
              {r.extra && (
                <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(0,0,0,0.02)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "0.85rem", color: theme.colorDetail, margin: 0 }}>{lang === "cn" ? r.extra.cn : r.extra.en}</p>
                  {r.extra.link && <a href={r.extra.link} target="_blank" style={{ fontSize: "0.8rem", color: "#000", marginTop: "0.5rem", display: "block" }}>{lang === "cn" ? "查看出版物 ↗" : "View Publication ↗"}</a>}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PageEngagement({ lang }) {
  return (
    <div style={{ maxWidth: 750 }}>
      {data.engagement.map(item => (
        <div key={item.id} style={{ marginBottom: "2rem", padding: "1.5rem", border: theme.border, background: "rgba(255,255,255,0.4)" }}>
          <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.3rem", margin: "0 0 0.8rem" }}>{item.title}</h4>
          <p style={{ fontSize: "11px", color: theme.colorDetail, textTransform: "uppercase", marginBottom: "0.5rem" }}>{item.year}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: theme.colorSub, marginBottom: "1rem" }}>{lang === "cn" ? item.descCN : item.desc}</p>
          {item.link && <a href={item.link} target="_blank" style={{ fontSize: "0.85rem", color: "#000", textDecoration: "underline" }}>{lang === "cn" ? "访问链接 ↗" : "Visit Link ↗"}</a>}
        </div>
      ))}
    </div>
  );
}

function PageBlog({ lang }) {
  return (
    <div style={{ maxWidth: 800 }}>
      <section style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>Thinking / 思考</h3>
        <p style={{ fontSize: "1rem", fontStyle: "italic", color: theme.colorDetail, marginBottom: "2rem" }}>{lang === "cn" ? data.blog.thinking.cn : data.blog.thinking.en}</p>
        {data.blog.thinking.items.map(t => (
          <div key={t.id} style={{ marginBottom: "2rem", padding: "1.2rem", border: theme.border, background: "rgba(255,255,255,0.3)" }}>
            <h5 style={{ fontFamily: theme.fontSerif, fontSize: "1.2rem", margin: "0 0 0.5rem" }}>{lang === "cn" ? t.titleCN : t.title}</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub, margin: 0 }}>{lang === "cn" ? t.contentCN : t.content}</p>
          </div>
        ))}
      </section>
      <section>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "2rem" }}>Essays / 写作</h3>
        {data.blog.essays.map(essay => (
          <div key={essay.id} style={{ marginBottom: "4rem" }}>
            <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.5rem", fontWeight: 400, margin: "0 0 0.5rem" }}>{essay.title}</h4>
            <p style={{ fontSize: "12px", color: theme.colorDetail, marginBottom: "1.5rem" }}>{essay.date}</p>
            <div style={{ fontSize: "1.05rem", lineHeight: 1.85, color: theme.colorText, whiteSpace: "pre-wrap", textAlign: "justify" }}>{essay.content}</div>
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
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
        <header style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 0 1.5rem", gap: "1.5rem" }}>
          <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", rowGap: "0.6rem" }}>
            {["about", "research", "public engagement", "blog", "cv", "contact"].map(p => (
              <button key={p} onClick={() => setPage(p === "public engagement" ? "engagement" : p)} style={{
                background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", letterSpacing: "0.08em",
                color: (page === p || (page === "engagement" && p === "public engagement")) ? "#000" : "#888", fontWeight: (page === p || (page === "engagement" && p === "public engagement")) ? 700 : 400, textTransform: "uppercase",
                whiteSpace: "nowrap", padding: "4px 8px"
              }}>{p}</button>
            ))}
          </nav>
          <button onClick={() => setLang(lang === "en" ? "cn" : "en")} style={{
            background: "rgba(255,255,255,0.7)", color: "#1a1a1a", border: "1px solid #ddd", padding: "4px 14px", borderRadius: "20px", fontSize: "0.75rem", cursor: "pointer", backdropFilter: "blur(5px)"
          }}>{lang === "en" ? "中" : "EN"}</button>
        </header>

        <main style={{ paddingBottom: "10rem" }}>
          {page === "about" && (
            <div style={{ marginBottom: "1.5rem", animation: "fadeIn 0.8s ease" }}>
              <h1 style={{ fontFamily: theme.fontSerif, fontSize: "clamp(2.2rem, 8vw, 3rem)", fontWeight: 400, margin: "0 0 0.4rem", letterSpacing: "-0.02em" }}>{lang === "cn" ? data.nameCN : data.name}</h1>
              <p style={{ fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#333", margin: 0 }}>{lang === "cn" ? data.taglineCN : data.tagline}</p>
              <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.4rem" }}>{lang === "cn" ? data.pronounsCN : data.pronouns}</p>
            </div>
          )}

          {page !== "about" && (
             <h2 style={{ fontFamily: theme.fontSerif, fontSize: "2.4rem", fontWeight: 400, marginBottom: "2.5rem", textTransform: "capitalize" }}>{page === "engagement" ? "Public Engagement" : page}</h2>
          )}

          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            {page === "about" && <PageAbout lang={lang} />}
            {page === "research" && <PageResearch lang={lang} />}
            {page === "engagement" && <PageEngagement lang={lang} />}
            {page === "blog" && <PageBlog lang={lang} />}
            {page === "cv" && (
              <div style={{ maxWidth: 700, lineHeight: 2 }}>
                 <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.6rem", borderBottom: "1px solid #eee", marginBottom: "1.5rem" }}>Education / 教育背景</h3>
                 {(lang === "cn" ? data.cv.cn : data.cv.en).map((item, i) => (
                   <p key={i}><strong>{item.school}</strong><br/>{item.major} ({item.period})</p>
                 ))}
                 <p style={{ color: theme.colorDetail, marginTop: "2rem" }}>Full Academic Portfolio and CV available via email.</p>
              </div>
            )}
            {page === "contact" && (
              <div style={{ maxWidth: 650 }}>
                <p style={{ fontSize: "1.1rem", color: theme.colorSub, lineHeight: 1.8, marginBottom: "2.5rem", whiteSpace: "pre-wrap", textAlign: "justify" }}>
                  {lang === "cn" ? "欢迎在北京约一杯咖啡面谈，或通过邮件联系我。\n我欢迎交流关于社会学、性与性别、酷儿生活、公共社会学或研究生申请等相关话题。" : "I am open to coffee chats in Beijing, or feel free to reach out via email.\nI welcome conversations on sociology, gender and sexuality, queer life, or graduate applications."}
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