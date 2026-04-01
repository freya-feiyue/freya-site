import { useState, useEffect, useRef } from "react";
 
const data = {
  name: "freya feiyue tang",
  nameCN: "唐菲玥",
  title: "Sociologist in formation",
  tagline: "Gender · Sexuality · Queer Theory · Language & Power",
  taglineCN: "性别 · 性 · 酷儿理论 · 语言与权力",
  affiliation: "University of Chinese Academy of Social Sciences, Sociology, Class of 2027",
  affiliationCN: "中国社会科学院大学 社会学，2027届",
  email: "feiyue.tang@outlook.com",
  about: {
    en: `I'm an undergraduate sociology student at the University of Chinese Academy of Social Sciences, where I research gender, sexuality, and queer life in contemporary China. My work sits at the intersection of the sociology of gender, queer theory, and sociolinguistics—I'm interested in how norms reproduce themselves, how bodies are made to signify, and where everyday practice disrupts that reproduction.\n\nCurrently I'm developing a paper on symbolic violence embedded in gendered language—asking whether people can recognize it, and what they do when they do. I'm also thinking about queer methodology, the politics of fieldwork, and what it means to do research about communities you belong to.\n\nI'm preparing to apply for graduate programs (Fall 2027) in gender studies and sociology, with a long-term interest in pursuing a PhD.\n\nPronouns: she/they (not he/him). Based in Beijing.`,
    cn: `我是中国社会科学院大学社会学系的本科生，研究当代中国的性别、性、与酷儿生活。我的工作处于性别社会学、酷儿理论与社会语言学的交叉地带——我关心规范如何自我再生产，身体如何被赋予意义，以及日常实践在哪里打断了这一过程。\n\n目前我在写一篇关于性别化语言中的符号暴力的论文：公众能识别这种无处不在的暴力吗？识别之后，又会生发出什么样的反抗？我同时在思考酷儿方法论、田野调查的政治，以及在自己所属的社群中做研究意味着什么。\n\n我正在准备申请2027年秋季的海外硕士项目（性别研究/社会学方向），长期有读博的打算。\n\n代词：she/they（非he/him）。常驻北京。`
  },
  interests: {
    en: ["Sociology of Gender", "Sociology of Sexuality", "Queer Theory", "sociolinguistics"],
    cn: ["性别社会学", "性社会学", "酷儿理论", "社会语言学"]
  },
  research: [
    {
      id: 1,
      title: "Symbolic Violence in Gendered Language: Recognition, Resistance, and Everyday Practice",
      titleCN: "性别化语言中的符号暴力：识别、反抗与日常实践",
      status: "under revision",
      statusCN: "修改中",
      year: "2025-2026",
      type: "journal submission",
      typeCN: "期刊投稿",
      abstract: "Do people recognize the symbolic violence embedded in the gendered language that surrounds them? And when they do, what forms of resistance and action emerge in daily life? This paper examines public awareness of gendered linguistic norms and the small-scale practices through which people push back.",
      abstractCN: "公众能识别日常语言中无处不在的符号暴力吗？识别之后，又会在日常实践中生发出怎样的反抗与行动？本文考察公众对性别化语言规范的意识，以及人们据此展开的微观抵抗实践。",
      tags: ["Language & Power", "Gender", "Bourdieu", "Qualitative"]
    },
    {
      id: 2,
      title: "The Influence of Gender Attitudes on Upward Intergenerational Relations",
      titleCN: "性别观念对上行式代际关系的影响",
      status: "completed",
      statusCN: "已完成",
      year: "2025",
      type: "quantitative course paper",
      typeCN: "定量课程论文",
      note: "Based on CFPS 2020. Received high evaluation.",
      noteCN: "基于CFPS 2020数据，获得较高评价。",
      abstract: "A quantitative analysis examining how gender attitudes shape the quality and dynamics of adult children's relationships with their parents, drawing on China Family Panel Studies (CFPS) 2020 data.",
      abstractCN: "基于中国家庭追踪调查（CFPS）2020年数据，定量分析性别观念如何影响成年子女与父母的代际关系质量与互动模式。",
      tags: ["Gender Attitudes", "Intergenerational", "CFPS", "Quantitative"]
    },
    {
      id: 3,
      title: "After the Loom: Gender Division of Labor in Northern Zhejiang's Domestic Industry",
      titleCN: "卖掉织机之后：浙北家庭工业发展中的性别分工变迁",
      status: "completed",
      statusCN: "已完成",
      year: "2023-2026",
      type: "ethnographic paper",
      typeCN: "民族志论文",
      abstract: "An ethnographic account of how the decline of household textile production in northern Zhejiang reshaped gender divisions of labor in rural families, drawing on fieldwork with female workers.",
      abstractCN: "以民族志方法考察浙北家庭纺织业衰落如何重塑农村家庭的性别分工，基于对女性工人的田野调查。",
      tags: ["Labor", "Gender", "Rural China", "Ethnography"]
    },
    {
      id: 4,
      title: "Queer Space and Sense of Safety in Beijing",
      titleCN: "北京酷儿群体空间体验与安全感生产",
      status: "completed",
      statusCN: "已完成",
      year: "2026",
      type: "urban sociology paper",
      typeCN: "城市社会学论文",
      abstract: "An exploration of how queer people in Beijing navigate, claim, and are excluded from urban space, and how safety is constructed through spatial practice and collective knowledge.",
      abstractCN: "探究北京酷儿群体如何在城市空间中穿行、主张与被排斥，以及安全感如何通过空间实践与集体知识得以建构。",
      tags: ["Queer", "Urban Space", "Beijing", "Safety"]
    },
    {
      id: 5,
      title: "Intergenerational Negotiation at Beijing's Marriage Markets",
      titleCN: "代际关系的张力与协商：基于北京相亲角的质性研究",
      status: "completed",
      statusCN: "已完成",
      year: "2025",
      type: "qualitative fieldwork",
      typeCN: "质性田野研究",
      abstract: "Fieldwork at Beijing's public marriage corners, examining how parents and adult children negotiate competing visions of marriage, gender, and generational authority.",
      abstractCN: "基于北京相亲角的田野调查，考察父母与成年子女如何围绕婚姻、性别与代际权威展开协商。",
      tags: ["Marriage", "Intergenerational", "Fieldwork", "Beijing"]
    }
  ],
  blog: [
    {
      id: 2,
      title: "On 'ta': gender-neutral pronouns in a language that hears no gender",
      titleCN: "关于'ta'：一种听不出性别的语言里的性别中立代词",
      body: "Chinese is a language where gender is invisible in speech but visible in writing. 'Ta' has been used on matchmaking ads ('come find your ta') and by queer friends as a gender-neutral marker—but these are very different claims on the same character. Unlike 'they' or Swedish 'hen,' Chinese offers only 'ta' or his/her. I want to understand how people use it, what they mean by it, and whether it can hold the weight we are asking it to carry.",
      bodyCN: "中文是一种在对话中听不出性别、但在文字里有性别的语言。'ta'被用在相亲广告里（'来找你的那个ta'），也被酷儿朋友们用作性别中立的表达——但这是对同一个字的截然不同的主张。不像'they'或瑞典语'hen'，中文只有'ta'或'他/她'。我想了解人们怎么使用它、用它意味着什么，以及它能否承载我们赋予它的重量。",
      date: "Spring 2026"
    },
  ]
};
 
const statusColor = {
  "under revision": { bg: "#faeeda", text: "#633806" },
  "completed": { bg: "#e1f5ee", text: "#085041" },
  "in progress": { bg: "#eeedfe", text: "#3c3489" }
};
 
function Tag({ label }) {
  return (
    <span style={{
      fontSize: 11,
      padding: "2px 8px",
      borderRadius: 20,
      border: "0.5px solid var(--color-border-secondary)",
      color: "var(--color-text-secondary)",
      whiteSpace: "nowrap"
    }}>{label}</span>
  );
}
 
function StatusBadge({ status, statusCN, lang }) {
  const c = statusColor[status] || statusColor["in progress"];
  return (
    <span style={{
      fontSize: 11,
      padding: "2px 9px",
      borderRadius: 20,
      background: c.bg,
      color: c.text,
      fontWeight: 500
    }}>{lang === "cn" && statusCN ? statusCN : status}</span>
  );
}
 
function AnimatedBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <style>{`
        @keyframes drift1 {
          0%,100%{transform:translate(0,0) scale(1)}
          33%{transform:translate(60px,-80px) scale(1.1)}
          66%{transform:translate(-40px,60px) scale(0.95)}
        }
        @keyframes drift2 {
          0%,100%{transform:translate(0,0) scale(1)}
          33%{transform:translate(-70px,50px) scale(1.05)}
          66%{transform:translate(80px,-60px) scale(1.1)}
        }
        @keyframes drift3 {
          0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(50px,70px) scale(0.9)}
        }
        @keyframes drift4 {
          0%,100%{transform:translate(0,0) scale(1)}
          40%{transform:translate(-60px,-50px) scale(1.08)}
          80%{transform:translate(40px,30px) scale(0.95)}
        }
      `}</style>
      <div style={{ position:"absolute", width:600, height:600, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,182,193,0.35) 0%,transparent 70%)", top:"-10%", left:"-10%", animation:"drift1 18s ease-in-out infinite" }} />
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(179,136,255,0.3) 0%,transparent 70%)", top:"10%", right:"-5%", animation:"drift2 22s ease-in-out infinite" }} />
      <div style={{ position:"absolute", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle,rgba(135,206,250,0.28) 0%,transparent 70%)", bottom:"5%", left:"20%", animation:"drift3 20s ease-in-out infinite" }} />
      <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(255,218,185,0.32) 0%,transparent 70%)", bottom:"-5%", right:"10%", animation:"drift4 25s ease-in-out infinite" }} />
      <div style={{ position:"absolute", width:350, height:350, borderRadius:"50%", background:"radial-gradient(circle,rgba(152,251,152,0.2) 0%,transparent 70%)", top:"40%", left:"40%", animation:"drift2 30s ease-in-out infinite reverse" }} />
    </div>
  );
}
 
function PageAbout({ lang }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = data.about[lang].split("\n\n");
  const interests = data.interests[lang] || data.interests.en;
 
  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ position: "relative" }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{
            fontSize: 15, lineHeight: 1.8, color: "var(--color-text-primary)", marginBottom: "1.2rem",
            display: (!expanded && i > 0) ? "none" : "block"
          }}>{p}</p>
        ))}
        {!expanded && (
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:60, background:"linear-gradient(transparent,rgba(255,255,255,0.85))" }} />
        )}
      </div>
      <button onClick={() => setExpanded(!expanded)} style={{
        marginTop: expanded ? "0.5rem" : "0.25rem", fontSize:13,
        color:"var(--color-text-secondary)", background:"none", border:"none",
        padding:0, cursor:"pointer", textDecoration:"underline", textDecorationStyle:"dotted"
      }}>
        {expanded ? (lang==="cn" ? "收起" : "show less") : (lang==="cn" ? "展开" : "read more")}
      </button>
 
      <div style={{ marginTop: "2.5rem" }}>
        <p style={{ fontSize:12, color:"var(--color-text-tertiary)", marginBottom:"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase" }}>
          {lang==="cn" ? "研究兴趣" : "research interests"}
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {interests.map(i => <Tag key={i} label={i} />)}
        </div>
      </div>
 
      <div style={{ marginTop:"2.5rem", padding:"1.2rem", borderLeft:"2px solid var(--color-border-secondary)", borderRadius:"0 var(--border-radius-md) var(--border-radius-md) 0", background:"rgba(255,255,255,0.5)" }}>
        <p style={{ fontSize:13, color:"var(--color-text-secondary)", margin:"0 0 4px" }}>
          {lang==="cn" ? data.affiliationCN : data.affiliation}
        </p>
        <p style={{ fontSize:13, color:"var(--color-text-tertiary)", margin:0 }}>
          {lang==="cn" ? "申请2027年秋季硕士项目 · 有读博打算" : "Applying for MA/MSc programs, Fall 2027 · PhD track"}
        </p>
      </div>
    </div>
  );
}
 
function PageResearch({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 680 }}>
      {data.research.map((r, i) => (
        <div key={r.id} style={{ borderTop: i===0 ? "0.5px solid var(--color-border-tertiary)" : "none", borderBottom:"0.5px solid var(--color-border-tertiary)", padding:"1.2rem 0" }}>
          <div onClick={() => setOpen(open===r.id ? null : r.id)} style={{ cursor:"pointer" }}>
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
              <div style={{ flex:1 }}>
                <p style={{ fontSize:14, fontWeight:500, margin:"0 0 4px", color:"var(--color-text-primary)", lineHeight:1.5 }}>
                  {lang==="cn" ? r.titleCN : r.title}
                </p>
                <p style={{ fontSize:12, color:"var(--color-text-tertiary)", margin:0 }}>
                  {lang==="cn" ? r.title : r.titleCN}
                </p>
              </div>
              <span style={{ fontSize:11, color:"var(--color-text-tertiary)", whiteSpace:"nowrap", marginTop:3 }}>{r.year}</span>
            </div>
            <div style={{ display:"flex", gap:6, marginTop:"0.7rem", flexWrap:"wrap", alignItems:"center" }}>
              <StatusBadge status={r.status} statusCN={r.statusCN} lang={lang} />
              <span style={{ fontSize:11, color:"var(--color-text-tertiary)" }}>{lang==="cn" ? r.typeCN : r.type}</span>
            </div>
          </div>
          {open===r.id && (
            <div style={{ marginTop:"1rem" }}>
              <p style={{ fontSize:13, lineHeight:1.7, color:"var(--color-text-secondary)", margin:"0 0 0.8rem" }}>
                {lang==="cn" ? r.abstractCN : r.abstract}
              </p>
              {r.note && (
                <p style={{ fontSize:12, color:"var(--color-text-tertiary)", fontStyle:"italic", margin:"0 0 0.8rem" }}>
                  {lang==="cn" && r.noteCN ? r.noteCN : r.note}
                </p>
              )}
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {r.tags.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
 
function PageBlog({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 640 }}>
      <p style={{ fontSize:13, color:"var(--color-text-tertiary)", marginBottom:"2rem", lineHeight:1.7 }}>
        {lang==="cn" ? "还没成为研究的问题，但也不是不是研究的问题。" : "Unsettled questions, ideas in formation, things I keep returning to. Not yet research—but not not-research either."}
      </p>
      {data.blog.map((item) => (
        <div key={item.id} style={{
          marginBottom:"1.5rem", padding:"1.2rem",
          borderRadius:"var(--border-radius-lg)",
          border:"0.5px solid var(--color-border-tertiary)",
          background:"rgba(255,255,255,0.55)",
          cursor:"pointer", transition:"border-color 0.15s"
        }}
          onClick={() => setOpen(open===item.id ? null : item.id)}
          onMouseEnter={e => e.currentTarget.style.borderColor="var(--color-border-secondary)"}
          onMouseLeave={e => e.currentTarget.style.borderColor="var(--color-border-tertiary)"}
        >
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12 }}>
            <p style={{ fontSize:14, fontWeight:500, margin:0, lineHeight:1.5, color:"var(--color-text-primary)", flex:1 }}>
              {lang==="cn" ? item.titleCN : item.title}
            </p>
            <span style={{ fontSize:11, color:"var(--color-text-tertiary)", whiteSpace:"nowrap", marginTop:2 }}>{item.date}</span>
          </div>
          {open===item.id && (
            <p style={{ fontSize:13, lineHeight:1.75, color:"var(--color-text-secondary)", margin:"0.8rem 0 0" }}>
              {lang==="cn" ? item.bodyCN : item.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
 
function PageCV({ lang }) {
  const sections = [
    {
      label: lang==="cn" ? "教育背景" : "Education",
      items: [
        { left:"2023-2027", main: lang==="cn" ? "社会学学士" : "BA Sociology", sub: lang==="cn" ? "中国社会科学院大学" : "University of Chinese Academy of Social Sciences" },
        { left:"2024-2025", main: lang==="cn" ? "交换生，加州大学伯克利分校" : "Exchange, UC Berkeley", sub: lang==="cn" ? "访问学生，社会学系" : "Visiting student, Sociology" }
      ]
    },
    {
      label: lang==="cn" ? "研究与写作" : "Research & Writing",
      items: data.research.map(r => ({
        left: r.year,
        main: lang==="cn" ? r.titleCN : r.title,
        sub: `${lang==="cn" ? r.typeCN : r.type} · ${lang==="cn" ? r.statusCN : r.status}`
      }))
    },
    {
      label: lang==="cn" ? "研究方法" : "Methods",
      items: [
        { left:"", main: lang==="cn" ? "质性研究" : "Qualitative", sub: lang==="cn" ? "民族志田野调查、深度访谈、参与观察" : "Ethnographic fieldwork, in-depth interview, participant observation" },
        { left:"", main: lang==="cn" ? "定量研究" : "Quantitative", sub: lang==="cn" ? "问卷数据分析、回归（CFPS、CGSS）" : "Survey data analysis, regression (CFPS, CGSS)" },
        { left:"", main: lang==="cn" ? "语言能力" : "Languages", sub: lang==="cn" ? "中文（母语）· 英文（雅思7.0）" : "Mandarin (native) · English (IELTS 7.0)" }
      ]
    },
    {
      label: lang==="cn" ? "研究生申请" : "Graduate Applications",
      items: [
        { left: lang==="cn" ? "目标" : "Target", main: lang==="cn" ? "性别研究或社会学硕士" : "MA/MSc in Gender Studies or Sociology", sub: "LSE · Manchester · UvA · Utrecht · CUHK MPhil · UT Austin MA" },
        { left: lang==="cn" ? "时间线" : "Timeline", main: lang==="cn" ? "2027年秋季入学" : "Fall 2027 entry", sub: lang==="cn" ? "长期目标：性别社会学/酷儿研究方向博士" : "Long-term: PhD in sociology of gender / queer studies" }
      ]
    }
  ];
 
  return (
    <div style={{ maxWidth: 660 }}>
      {sections.map((sec, si) => (
        <div key={si} style={{ marginBottom:"2.5rem" }}>
          <p style={{ fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--color-text-tertiary)", margin:"0 0 1rem", fontWeight:500 }}>{sec.label}</p>
          {sec.items.map((item, ii) => (
            <div key={ii} style={{ display:"grid", gridTemplateColumns:"100px 1fr", gap:"0 1.5rem", padding:"0.6rem 0", borderTop:"0.5px solid var(--color-border-tertiary)" }}>
              <span style={{ fontSize:12, color:"var(--color-text-tertiary)", paddingTop:2 }}>{item.left}</span>
              <div>
                <p style={{ fontSize:13, fontWeight:500, margin:"0 0 2px", color:"var(--color-text-primary)" }}>{item.main}</p>
                <p style={{ fontSize:12, color:"var(--color-text-secondary)", margin:0 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <p style={{ fontSize:12, color:"var(--color-text-tertiary)", marginTop:"1rem" }}>
        {lang==="cn" ? "完整简历可邮件索取 — " : "Full CV available on request — "}
        <a href={`mailto:${data.email}`} style={{ color:"var(--color-text-info)" }}>{data.email}</a>
      </p>
    </div>
  );
}
 
function PageContact({ lang }) {
  return (
    <div style={{ maxWidth: 480 }}>
      <p style={{ fontSize:15, lineHeight:1.8, color:"var(--color-text-primary)", marginBottom:"2rem" }}>
        {lang==="cn" ? "欢迎就中国性别与酷儿研究、研究生申请、潜在合作，或者任何你正在思考的问题展开对话。" : "I'm open to conversations about gender and queer research in China, graduate school applications, potential collaboration, or just ideas you're turning over."}
      </p>
      <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
        <div style={{ padding:"1rem 1.25rem", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", display:"flex", alignItems:"center", gap:12, background:"rgba(255,255,255,0.55)" }}>
          <div style={{ width:32, height:32, borderRadius:"50%", background:"var(--color-background-secondary)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>@</div>
          <div>
            <p style={{ fontSize:11, color:"var(--color-text-tertiary)", margin:"0 0 2px", textTransform:"uppercase", letterSpacing:"0.07em" }}>Email</p>
            <a href={`mailto:${data.email}`} style={{ fontSize:14, color:"var(--color-text-info)", textDecoration:"none" }}>{data.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
const pages = [
  { id:"about", labelEN:"About", labelCN:"关于" },
  { id:"research", labelEN:"Research", labelCN:"研究" },
  { id:"blog", labelEN:"Blog", labelCN:"博客" },
  { id:"cv", labelEN:"CV", labelCN:"简历" },
  { id:"contact", labelEN:"Contact", labelCN:"联系" }
];
 
export default function App() {
  const [page, setPage] = useState("about");
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useRef(null);
 
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);
 
  const currentPage = pages.find(p => p.id === page);
  const pageLabel = lang==="cn" ? currentPage?.labelCN : currentPage?.labelEN;
 
  return (
    <div ref={containerRef} style={{ minHeight:"100vh", fontFamily:"var(--font-sans)", background:"transparent", overflowY:"auto", position:"relative" }}>
      <AnimatedBackground />
      <div style={{ position:"relative", zIndex:1 }}>
        <header style={{
          position:"sticky", top:0, zIndex:10,
          background: scrolled ? "rgba(255,255,255,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "0.5px solid var(--color-border-tertiary)" : "0.5px solid transparent",
          transition:"all 0.3s", padding:"0 2rem"
        }}>
          <div style={{ maxWidth:800, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:56 }}>
            <div style={{ width:80 }} />
            <nav style={{ display:"flex", gap:"0.25rem" }}>
              {pages.map(p => (
                <button key={p.id} onClick={() => setPage(p.id)} style={{
                  fontSize:13, padding:"4px 10px", borderRadius:6, border:"none",
                  background: page===p.id ? "rgba(0,0,0,0.08)" : "transparent",
                  color: page===p.id ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  cursor:"pointer", fontWeight: page===p.id ? 500 : 400, transition:"all 0.15s"
                }}>{lang==="cn" ? p.labelCN : p.labelEN}</button>
              ))}
            </nav>
            <div style={{ display:"flex", gap:4, width:80, justifyContent:"flex-end" }}>
              {["en","cn"].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  fontSize:12, padding:"3px 10px", borderRadius:20,
                  border: `0.5px solid ${lang===l ? "var(--color-text-primary)" : "var(--color-border-tertiary)"}`,
                  background: lang===l ? "var(--color-text-primary)" : "transparent",
                  color: lang===l ? "var(--color-background-primary)" : "var(--color-text-secondary)",
                  cursor:"pointer", transition:"all 0.15s"
                }}>{l==="en" ? "EN" : "中"}</button>
              ))}
            </div>
          </div>
        </header>
 
        {page==="about" && (
          <div style={{ maxWidth:800, margin:"0 auto", padding:"4rem 2rem 2rem" }}>
            <div style={{ marginBottom:"2rem" }}>
              <h1 style={{ fontSize:"clamp(2.2rem,6vw,3.5rem)", fontWeight:400, margin:"0 0 0.3rem", color:"var(--color-text-primary)", letterSpacing:"-0.02em", lineHeight:1.1, fontFamily:"var(--font-serif)" }}>
                {data.name}
              </h1>
              <p style={{ fontSize:15, color:"var(--color-text-secondary)", margin:"0.5rem 0 0", letterSpacing:"0.01em" }}>
                {lang==="cn" ? data.taglineCN : data.tagline}
              </p>
            </div>
            <div style={{ width:40, height:1, background:"var(--color-border-secondary)", margin:"2rem 0" }} />
          </div>
        )}
 
        <main style={{ maxWidth:800, margin:"0 auto", padding: page==="about" ? "0 2rem 4rem" : "3rem 2rem 4rem" }}>
          {page!=="about" && (
            <h2 style={{ fontSize:"clamp(1.5rem,4vw,2rem)", fontWeight:400, fontFamily:"var(--font-serif)", margin:"0 0 2.5rem", color:"var(--color-text-primary)", letterSpacing:"-0.01em" }}>
              {pageLabel}
            </h2>
          )}
          {page==="about" && <PageAbout lang={lang} />}
          {page==="research" && <PageResearch lang={lang} />}
          {page==="blog" && <PageBlog lang={lang} />}
          {page==="cv" && <PageCV lang={lang} />}
          {page==="contact" && <PageContact lang={lang} />}
        </main>
 
        <footer style={{ borderTop:"0.5px solid var(--color-border-tertiary)", padding:"1.5rem 2rem", maxWidth:800, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center" }}>
            <div style={{ display:"flex", gap:6, alignItems:"center" }}>
              {pages.map(p => (
                <span key={p.id} onClick={() => setPage(p.id)} style={{ cursor:"pointer" }}>
                  <span style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background: page===p.id ? "var(--color-text-primary)" : "var(--color-border-secondary)", transition:"background 0.2s" }} />
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}