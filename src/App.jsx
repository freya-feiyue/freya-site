import { useState, useEffect } from "react";

// --- 主题配置 ---
const theme = {
  fontSerif: "'EB Garamond', serif",
  fontSans: "'Inter', -apple-system, sans-serif",
  colorText: "#1a1a1a",
  colorSub: "#444",
  colorDetail: "#666",
  border: "1px solid rgba(0,0,0,0.08)",
};

const data = {
  name: "freya feiyue tang",
  nameCN: "唐菲玥",
  tagline: "Gender & Sexuality · Queer Theory · Language & Power",
  taglineCN: "性别与性 · 酷儿理论 · 语言与权力",
  pronouns: "she/they · not he/him · Beijing",
  email: "feiyue.tang@outlook.com",
  about: {
    en: `I am an undergraduate sociology student at UCASS, researching gender, sexuality, and queer life in contemporary China. My work sits at the intersection of the sociology of gender, queer theory, and sociolinguistics.\n\nI focus on how symbolic violence is embedded in language and how everyday practices disrupt normative reproduction. Currently preparing for graduate programs (Fall 2027) with a long-term goal of a PhD.`,
    cn: `我是中国社会科学院大学社会学系的本科生，研究焦点为当代中国的性别、性与酷儿生活。我的工作处于性别社会学、酷儿理论与社会语言学的交叉地带。\n\n我关注语言中潜藏的符号暴力，以及日常实践如何干扰规范的再生产。目前我正在准备2027年秋季的海外研究生申请，长期目标是攻读性别社会学方向的博士。`
  },
  research: [
    {
      id: 1,
      title: "Symbolic Violence in 'Gender Reversal' Short Videos",
      titleCN: "性别化语言中的符号暴力：以“性别倒转”短视频为例",
      status: "Outstanding Award",
      year: "2025",
      type: "Academic Research (New Bud Program)",
      abstract: "Examining how gendered linguistic norms are reproduced or challenged through 'reverse discourse' on platforms like Douyin.",
      abstractCN: "考察短视频平台上的“性别倒转”内容如何通过话语挪用与互文性策略，挑战或再生产既有的性别权力关系。",
      tags: ["Foucault", "Bourdieu", "Discourse Analysis"]
    },
    {
      id: 2,
      title: "Labor and Marriage Practice of Female Textile Workers",
      titleCN: "长三角纺织女工生命经验与婚姻实践研究",
      status: "Fieldwork in progress",
      year: "2023-2025",
      type: "Ethnography (3-Year Fieldwork)",
      abstract: "A 3-year longitudinal study in Zhejiang and Jiangsu focusing on rural industry decline and its impact on gender division of labor.",
      abstractCN: "连续三年深入浙苏村落，通过30余次访谈与田野观察，考察产业变迁下农村女性的劳动经验与主体韧性。",
      tags: ["Rural China", "Labor", "Agency"]
    },
    {
      id: 3,
      title: "Gender Attitudes and Intergenerational Relations (CFPS)",
      titleCN: "劳动参与、婚姻稳定与家庭人口结构——基于CFPS的实证研究",
      status: "Completed",
      year: "2023",
      type: "Quantitative Analysis",
      abstract: "Analyzing the relationship between labor participation and marital satisfaction using CFPS data.",
      abstractCN: "运用Logit回归模型，分析劳动参与时间对婚姻满意度的负相关影响及其在女性群体中的显著性。",
      tags: ["Quantitative", "CFPS", "Family"]
    }
  ],
  blog: [
    {
      id: 1,
      title: "Queer Moments: Beyond Definitions",
      titleCN: "我获得酷儿性的一些时刻",
      body: "Queerness is not just a definition, but concrete, perceptible moments where we find each other in the crowd.",
      bodyCN: "酷儿性不仅是定义，更是具体的、可感知的瞬间。在社群中彼此看见、拥抱，在疯狂生长中确认自我。",
      date: "Oct 2024 · 小红书@小沢"
    },
    {
      id: 2,
      title: "Queer Time: Refusing Linear Narratives",
      titleCN: "酷儿时间：拒绝被线性人生绑架",
      body: "Refusing the 'chrononormativity' of capital and tradition. Synchronization with our own bodies instead of calendars.",
      bodyCN: "探讨如何通过拒绝资本主义的线性人生叙事，利用“时间规范性”展开抵抗，在当下的痛痒与温热中寻找永恒。",
      date: "Nov 2024 · 小红书@小沢"
    }
  ]
};

// --- 背景组件（颜色加深，识别度更高） ---
function FlagBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "#fff" }}>
      <style>{`
        @keyframes flow { 0% { transform: translate(-5%, -5%) rotate(0deg); } 50% { transform: translate(5%, 5%) rotate(3deg); } 100% { transform: translate(-5%, -5%) rotate(0deg); } }
      `}</style>
      
      {/* 六色彩虹旗 - 顶部区域 */}
      <div style={{
        position: "absolute", width: "120vw", height: "45vh", top: "-10%", left: "-10%",
        background: "linear-gradient(180deg, rgba(228,3,3,0.18), rgba(255,140,0,0.18), rgba(255,237,0,0.18), rgba(0,128,38,0.15), rgba(0,77,255,0.15), rgba(117,7,135,0.15))",
        filter: "blur(60px)", animation: "flow 25s infinite ease-in-out"
      }} />

      {/* 非二元旗 (黄白紫黑) - 右侧区域 */}
      <div style={{
        position: "absolute", width: "80vw", height: "100vh", right: "-20%", top: "0",
        background: "linear-gradient(180deg, rgba(255,244,48,0.2) 0%, rgba(255,255,255,0.3) 25%, rgba(156,89,209,0.2) 50%, rgba(0,0,0,0.12) 100%)",
        filter: "blur(80px)", animation: "flow 30s infinite ease-in-out reverse"
      }} />

      {/* 女同旗 (橙红白粉) - 左下区域 */}
      <div style={{
        position: "absolute", width: "100vw", height: "60vh", bottom: "-15%", left: "-10%",
        background: "linear-gradient(180deg, rgba(213,45,0,0.15) 0%, rgba(255,154,86,0.15) 25%, rgba(255,255,255,0.2) 50%, rgba(212,98,166,0.15) 75%, rgba(165,0,98,0.15) 100%)",
        filter: "blur(70px)", animation: "flow 28s infinite ease-in-out"
      }} />
      
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

// --- 主要页面组件 ---

function PageAbout({ lang }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "2.5rem", alignItems: "flex-start" }}>
      <div style={{ flex: "1 1 400px" }}>
        {data.about[lang].split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.8, color: theme.colorText, marginBottom: "1.2rem" }}>{p}</p>
        ))}
      </div>
      <div style={{ flex: "0 0 220px", margin: "0 auto" }}>
        <div style={{ width: "220px", height: "290px", borderRadius: "2px", overflow: "hidden", border: "5px solid white", boxShadow: "0 15px 35px rgba(0,0,0,0.06)" }}>
          <img src="/profile.jpg" alt="Freya Tang" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.8rem", textAlign: "center", fontStyle: "italic", fontFamily: theme.fontSerif }}>Beijing, 2026</p>
      </div>
    </div>
  );
}

function PageResearch({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 750 }}>
      {data.research.map((r) => (
        <div key={r.id} style={{ padding: "1.2rem 0", borderBottom: theme.border, cursor: "pointer" }} onClick={() => setOpen(open === r.id ? null : r.id)}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.2rem", fontWeight: 400, margin: 0 }}>{lang === "cn" ? r.titleCN : r.title}</h4>
            <span style={{ fontSize: 12, color: theme.colorDetail }}>{r.year}</span>
          </div>
          <p style={{ fontSize: 11, color: theme.colorDetail, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{r.status} · {r.type}</p>
          {open === r.id && (
            <div style={{ marginTop: "1rem", animation: "fadeIn 0.3s ease" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: theme.colorSub }}>{lang === "cn" ? r.abstractCN : r.abstract}</p>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                {r.tags.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, border: theme.border, color: theme.colorDetail }}>{t}</span>)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PageBlog({ lang }) {
  return (
    <div style={{ maxWidth: 700 }}>
      {data.blog.map(post => (
        <div key={post.id} style={{ marginBottom: "2.5rem", padding: "1.5rem", background: "rgba(255,255,255,0.4)", borderRadius: "4px", border: theme.border }}>
          <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.3rem", fontWeight: 400, marginBottom: "0.8rem" }}>{lang === "cn" ? post.titleCN : post.title}</h4>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: theme.colorSub }}>{lang === "cn" ? post.bodyCN : post.body}</p>
          <p style={{ fontSize: "0.8rem", color: theme.colorDetail, marginTop: "1rem" }}>{post.date}</p>
        </div>
      ))}
    </div>
  );
}

function PageCV({ lang }) {
  return (
    <div style={{ maxWidth: 700, lineHeight: 1.8 }}>
       <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.5rem", borderBottom: "1px solid #eee", marginBottom: "1rem" }}>{lang === "cn" ? "教育经历" : "Education"}</h3>
          <p><strong>University of Chinese Academy of Social Sciences</strong> · BA Sociology (2022-2027)</p>
          <p><strong>UC Berkeley</strong> · BISP Exchange (2024-2025)</p>
          <p style={{ fontSize: "0.9rem", color: theme.colorDetail }}>GPA 3.75/5 (Top 30%)</p>
       </section>
       <p style={{ color: theme.colorDetail }}>Full CV available upon request via email.</p>
    </div>
  );
}

function PageContact({ lang }) {
  return (
    <div style={{ maxWidth: 600 }}>
      <p style={{ fontSize: "1.1rem", color: theme.colorSub, lineHeight: 1.8, marginBottom: "2.5rem" }}>
        {lang === "cn" ? "期待与你交流关于性别研究、公共社会学或研究生申请的任何话题。" : "Open to conversations regarding gender research, public sociology, or graduate applications."}
      </p>
      <a href={`mailto:${data.email}`} style={{ textDecoration: "none", color: "#000", borderBottom: "1.5px solid #000", paddingBottom: 4, fontSize: "1.3rem", fontFamily: theme.fontSerif }}>
        {data.email} ↗
      </a>
    </div>
  );
}

// --- App 主组件 ---

export default function App() {
  const [page, setPage] = useState("about");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ minHeight: "100vh", fontFamily: theme.fontSans, color: theme.colorText, position: "relative" }}>
      <FlagBackground />
      
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>
        <header style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "100px", gap: "2rem" }}>
          <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {["about", "research", "blog", "cv", "contact"].map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.08em",
                color: page === p ? "#000" : "#888", fontWeight: page === p ? 600 : 400, textTransform: "uppercase"
              }}>{p}</button>
            ))}
            <button onClick={() => setLang(lang === "en" ? "cn" : "en")} style={{
              background: "rgba(255,255,255,0.5)", color: "#333", border: "1px solid rgba(0,0,0,0.1)", 
              padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", cursor: "pointer", backdropFilter: "blur(5px)"
            }}>{lang === "en" ? "中" : "EN"}</button>
          </nav>
        </header>

        <main style={{ paddingBottom: "10rem" }}>
          {page === "about" && (
            <div style={{ marginBottom: "2rem", animation: "fadeIn 0.8s ease" }}>
              <h1 style={{ fontFamily: theme.fontSerif, fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 400, margin: "0 0 0.8rem", letterSpacing: "-0.02em" }}>
                {lang === "cn" ? data.nameCN : data.name}
              </h1>
              <p style={{ fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", color: theme.colorSub }}>
                {lang === "cn" ? data.taglineCN : data.tagline}
              </p>
              <p style={{ fontSize: "0.85rem", color: theme.colorDetail, marginTop: "0.5rem" }}>{data.pronouns}</p>
            </div>
          )}

          {page !== "about" && (
             <h2 style={{ fontFamily: theme.fontSerif, fontSize: "2.2rem", fontWeight: 400, marginBottom: "2rem", textTransform: "capitalize" }}>{page}</h2>
          )}

          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            {page === "about" && <PageAbout lang={lang} />}
            {page === "research" && <PageResearch lang={lang} />}
            {page === "blog" && <PageBlog lang={lang} />}
            {page === "cv" && <PageCV lang={lang} />}
            {page === "contact" && <PageContact lang={lang} />}
          </div>
        </main>

        <footer style={{ padding: "4rem 0", borderTop: theme.border, display: "flex", justifyContent: "flex-end", color: theme.colorDetail, fontSize: "0.8rem" }}>
          <span>© 2026 Freya Feiyue Tang</span>
        </footer>
      </div>
    </div>
  );
}