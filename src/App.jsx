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
  name: "freya feiyue tang",
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
        abstractCN: "本研究以社交媒体上兴起的“性别倒转”类短视频为对象，结合批判性话语分析与半结构式访谈，借助布迪厄的实践理论与符号暴力框架、福柯的话语—权力视角以及巴特勒的性别操演理论，探讨受众如何通过观看、理解与再生产“性别倒转”内容参与性别话语的协商。研究发现，“性别倒转”通过象征性逆转，将日常生活中潜在而隐蔽的性别暴力直观呈现出来，同时以“反向话语” 的方式为女性受众提供情感认同与行动正当性，使她们在日常互动中更敢于表达不满、提出异议并挑战既有性别规范。然而，这类叙事的政治效力仍受到反讽结构内在张力的限制，同时受制于性别二元框架的固有困境，使得其在颠覆性别秩序方面存在局限性。本文认为，“性别倒转”不仅是抵抗父权话语的策略性实践，它通过符号、语言与表演的微观操作揭示了数字时代性别权力关系的复杂性，也为理解媒体、情感政治与社会结构之间的交织提供了重要窗口。",
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
      desc: "Responsible for the overall management and recruitment training of the organization. Promote gender-friendly public discussion spaces on campus through peer education and interactive seminars. Planned and led participatory workshops and peer education activities on topics such as sexual and reproductive health and gender equality, facilitating public discussion and knowledge dissemination on gender issues among youth.",
      descCN: "负责社团整体运营与招新培训，通过同伴教育与互动式研讨，在校园内推动性别友好的公共讨论空间。策划并主导以'性与生殖健康'和'性别平等'为主题的参与式工作坊与同伴教育活动，促进性别议题在青年群体中的公共讨论与知识传播。",
      qr: "peer-health"
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
        title: '"ta" as a Gendered / Gender-Neutral Signifier',
        titleCN: "关于'ta'作为性别中立代词的思考",
        en: `Chinese is a language where gender is not audible in speech but marked in writing. "Ta" has been used in matchmaking ads ("come find your ta") and by queer communities as a gender-neutral marker. Yet these uses point to very different claims on the same character. Unlike English "they" or Swedish "hen," Chinese does not offer a widely stabilized gender-neutral pronoun. I am interested in how people use it, what meanings they attach to it, and whether it can carry the kinds of political and affective weight we ask it to bear.`,
        cn: `中文是一种在口语中无法直接听出性别，但在书写中明确标记性别的语言。"ta"既被用在相亲广告中（"来找你的那个ta"），也被酷儿社群用作性别中立的表达，但这两种用法其实指向的是对同一个字的不同主张。与英语中的"they"或瑞典语中的"hen"不同，中文并没有一个被广泛稳定接受的性别中立代词。我想理解人们如何使用它、它被赋予了什么意义，以及它是否能够承载我们期待它所承载的政治与情感重量。`
      },
      {
        id: 2,
        title: "Muscles as Gender Signifiers",
        titleCN: "作为性别符号的肌肉身体",
        en: `Muscularity in men is often read as masculinity—it requires little explanation. But when women engage in strength training and develop visible muscle, what is it read as? Threatening? Cool? Transgressive? Or another form of disciplined, regulated body? I am still unsure whether this belongs to the sociology of the body, sports sociology, or perhaps both.`,
        cn: `男性展示肌肉通常会被直接读作"男性气质"，几乎不需要额外解释。但当女性进行力量训练并展示肌肉时，这种身体会被如何理解？是威胁？是"很酷"？是越轨？还是另一种被规训的身体？我还没有完全确定，这个问题究竟属于身体社会学、运动社会学，还是两者的交叉。`
      },
      {
        id: 3,
        title: "Women Smoking and Gendered Norms",
        titleCN: "女性吸烟与性别规范",
        en: `Why is women's smoking still widely perceived as deviant? What kinds of gendered norms and expectations are at work in producing this perception?`,
        cn: `为什么女性吸烟仍然常常被视为一种"越轨行为"？这种观念背后，运作的是怎样的性别规范与社会期待？`
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
 
// --- 二维码弹窗 ---
function QRModal({ src, title, onClose }) {
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 8, padding: "2rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
        maxWidth: 320, width: "90%"
      }}>
        <p style={{ fontSize: "0.85rem", color: "#666", margin: 0, textAlign: "center" }}>{title}</p>
        <img src={src} alt="QR Code" style={{ width: 220, height: 220, objectFit: "contain" }} />
        <button onClick={onClose} style={{
          background: "none", border: "1px solid #ddd", borderRadius: 4,
          padding: "6px 20px", cursor: "pointer", fontSize: "0.85rem", color: "#666"
        }}>Close</button>
      </div>
    </div>
  );
}

function FlagBackground() {
  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none",
      // 这里是彩虹旗背景，通过 background-size 放大，background-position 移动来创造飘扬感
      background: `linear-gradient(135deg, 
        #E40303 0%, #FF8C00 16%, #FFED00 33%, 
        #008026 50%, #004DFF 66%, #750785 100%)`,
      backgroundSize: "200% 200%",
      animation: "floatBackground 20s ease infinite alternate"
    }}>
      <style>{`
        @keyframes floatBackground {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>
      {/* 叠加一层白色柔光，降低彩虹的对比度，使其更像背景而非色块 */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(255, 255, 255, 0.85)"
      }} />
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
          <p style={{ fontSize: "1rem", letterSpacing: "0.08em", textTransform: "none", color: "#333", margin: 0 }}>
            {lang === "cn" ? data.taglineCN : data.tagline}
          </p>
          <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.4rem" }}>
            {lang === "cn" ? data.pronounsCN : data.pronouns}
          </p>
        </div>
        <div style={{ flex: "0 0 120px", margin: "0 auto" }}>
          <div style={{ width: "120px", height: "160px", border: "5px solid white", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            <img src="/profile.jpg" alt="Freya Tang" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.6rem", textAlign: "center", fontStyle: "italic", fontFamily: theme.fontSerif }}>Beijing,2026</p>
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
  const [qrModal, setQrModal] = useState(null);
  return (
    <div style={{ maxWidth: 850 }}>
      {qrModal === "peer-health" && <QRModal src={qrPeerHealth} title={lang === "cn" ? "青春健康同伴社公众号" : "Peer Health Education Society WeChat"} onClose={() => setQrModal(null)} />}
      {data.engagement.map(item => (
        <div key={item.id} style={{ marginBottom: "2rem", borderBottom: theme.border, paddingBottom: "1.5rem" }}>
          <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.35rem", margin: "0 0 0.5rem", fontWeight: 500 }}>{lang === "cn" ? item.titleCN : item.title}</h4>
          <p style={{ fontSize: "11px", color: theme.colorDetail, textTransform: "uppercase", marginBottom: "0.8rem" }}>{item.year}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: theme.colorSub, textAlign: "justify" }}>{lang === "cn" ? item.descCN : item.desc}</p>
          {item.link && <a href={item.link} target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", color: "#000", textDecoration: "underline", display: "inline-block", marginTop: "0.5rem" }}>{lang === "cn" ? "访问链接 ↗" : "Visit Link ↗"}</a>}
          {item.qr && (
            <button onClick={() => setQrModal(item.qr)} style={{
              marginTop: "0.5rem", display: "inline-block", background: "none",
              border: "1px solid rgba(0,0,0,0.2)", borderRadius: 4, padding: "4px 14px",
              cursor: "pointer", fontSize: "0.85rem", color: "#333"
            }}>{lang === "cn" ? "查看公众号二维码" : "WeChat QR Code"}</button>
          )}
        </div>
      ))}
    </div>
  );
}

function PageBlog({ lang }) {
  const [qrModal, setQrModal] = useState(false);
  return (
    <div style={{ maxWidth: 850 }}>
      {qrModal && <QRModal src={qrXinan} title={lang === "cn" ? "西南美味蘑菇公众号" : "WeChat: 西南美味蘑菇"} onClose={() => setQrModal(false)} />}
 
      <section style={{ marginBottom: "4rem" }}>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>{lang === "cn" ? "思考" : "Thinking"}</h3>
        <p style={{ fontStyle: "italic", color: theme.colorDetail, marginBottom: "2rem" }}>{lang === "cn" ? "尚未定论的、正在形成的——我持续探索中的问题与研究想法。" : "Unsettled questions, ideas in formation—things I keep returning to."}</p>
        {data.blog.thinking.map(t => (
          <div key={t.id} style={{ marginBottom: "2rem", padding: "1.2rem", border: theme.border, background: "rgba(255,255,255,0.3)" }}>
            <h5 style={{ fontFamily: theme.fontSerif, fontSize: "1.2rem", margin: "0 0 0.5rem" }}>{lang === "cn" ? t.titleCN : t.title}</h5>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub, textAlign: "justify" }}>{lang === "cn" ? t.cn : t.en}</p>
          </div>
        ))}
      </section>
 
      <section>
        <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.8rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>{lang === "cn" ? "写作" : "Essays"}</h3>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: theme.colorSub, marginBottom: "2rem" }}>
          {lang === "cn" ? "我的写作发布在两个平台：微信公众号'西南美味蘑菇'与 Substack。" : "My essays are published on two platforms: WeChat (西南美味蘑菇) and Substack."}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <button onClick={() => setQrModal(true)} style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 6,
            padding: "0.8rem 1.5rem", cursor: "pointer", fontSize: "0.95rem",
            color: "#1a1a1a", fontFamily: theme.fontSerif, boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}>{lang === "cn" ? "微信公众号 · 西南美味蘑菇 →" : "WeChat · 西南美味蘑菇 →"}</button>
          <a href="https://substack.com/@inciduntcoruscus719490/notes?utm_campaign=profile&utm_medium=profile-page" target="_blank" rel="noreferrer" style={{
            background: "#fff", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 6,
            padding: "0.8rem 1.5rem", fontSize: "0.95rem", color: "#1a1a1a",
            fontFamily: theme.fontSerif, textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)", display: "inline-flex", alignItems: "center"
          }}>Substack →</a>
        </div>
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