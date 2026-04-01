import { useState, useEffect, useRef } from "react";

// --- 样式配置与主题 ---
const theme = {
  fontSerif: "'EB Garamond', serif",
  fontSans: "'Inter', -apple-system, sans-serif",
  colorText: "#1a1a1a",
  colorSub: "#444",
  colorDetail: "#888",
  border: "0.5px solid rgba(0,0,0,0.1)",
};

const data = {
  name: "freya feiyue tang",
  nameCN: "唐菲玥",
  title: "Sociologist in formation",
  tagline: "Gender & Sexuality · Queer Theory · Language & Power",
  taglineCN: "性别与性 · 酷儿理论 · 语言与权力",
  pronouns: "she/they · not he/him · Beijing",
  affiliation: "University of Chinese Academy of Social Sciences, Class of 2027",
  email: "feiyue.tang@outlook.com",
  about: {
    en: `I'm an undergraduate sociology student at the University of Chinese Academy of Social Sciences, researching gender, sexuality, and queer life in contemporary China. My work sits at the intersection of the sociology of gender, queer theory, and sociolinguistics.\n\nCurrently, I'm developing a paper on symbolic violence embedded in gendered language. I'm preparing for graduate programs (Fall 2027) in gender studies and sociology, with a long-term interest in pursuing a PhD.`,
    cn: `我是中国社会科学院大学社会学系的本科生，研究焦点为当代中国的性别、性与酷儿生活。我的工作处于性别社会学、酷儿理论与社会语言学的交叉地带。\n\n目前，我正在撰写关于性别化语言中符号暴力的论文。我正在准备2027年秋季的海外研究生申请（性别研究/社会学方向），长期有读博的打算。`
  },
  interests: {
    en: ["Sociology of Gender", "Sociology of Sexuality", "Queer Theory", "Sociolinguistics"],
    cn: ["性别社会学", "性社会学", "酷儿理论", "社会语言学"]
  },
  research: [
    {
      id: 1,
      title: "Symbolic Violence in Gendered Language: Recognition, Resistance, and Everyday Practice",
      titleCN: "性别化语言中的符号暴力：识别、反抗与日常实践",
      status: "under revision",
      year: "2025-2026",
      type: "Journal Submission",
      abstract: "Do people recognize the symbolic violence embedded in gendered language? This paper examines public awareness and the small-scale practices through which people push back.",
      abstractCN: "公众能识别日常语言中无处不在的符号暴力吗？本文考察公众对性别化语言规范的意识及其微观抵抗实践。",
      tags: ["Language & Power", "Bourdieu", "Qualitative"]
    },
    {
      id: 2,
      title: "The Influence of Gender Attitudes on Upward Intergenerational Relations",
      titleCN: "性别观念对上行式代际关系的影响",
      status: "completed",
      year: "2025",
      type: "Quantitative (CFPS 2020)",
      abstract: "A quantitative analysis examining how gender attitudes shape the quality of adult children's relationships with their parents.",
      abstractCN: "基于CFPS 2020数据，定量分析性别观念如何影响成年子女与父母的代际关系质量。",
      tags: ["Gender", "Intergenerational", "CFPS"]
    },
    {
      id: 3,
      title: "After the Loom: Gender Division of Labor in Northern Zhejiang",
      titleCN: "卖掉织机之后：浙北家庭工业发展中的性别分工变迁",
      status: "completed",
      year: "2023-2026",
      type: "Ethnography",
      abstract: "How the decline of household textile production reshaped gender divisions in rural families.",
      abstractCN: "以民族志方法考察浙北家庭纺织业衰落如何重塑农村家庭的性别分工。",
      tags: ["Labor", "Rural China", "Ethnography"]
    }
  ],
  blog: [
    {
      id: 1,
      title: "On 'ta': gender-neutral pronouns in a language that hears no gender",
      titleCN: "关于'ta'：一种听不出性别的语言里的性别中立代词",
      body: "Chinese is a language where gender is invisible in speech but visible in writing. I want to understand how 'ta' is used by queer communities versus commercial ads.",
      bodyCN: "中文是一种在对话中听不出性别、但在文字里有性别的语言。我想了解酷儿群体与商业广告对'ta'的不同使用逻辑。",
      date: "Spring 2026"
    }
  ]
};

const statusColor = {
  "under revision": { bg: "#faeeda", text: "#633806" },
  "completed": { bg: "#e1f5ee", text: "#085041" },
  "in progress": { bg: "#eeedfe", text: "#3c3489" }
};

// --- 子组件 ---

function FlagBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", background: "#fff" }}>
      <style>{`
        @keyframes drift { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(2%, 2%) scale(1.02); } }
      `}</style>
      
      {/* 彩虹旗 Pride Flag - 左上角倾斜流动 */}
      <div style={{
        position: "absolute", width: "100vw", height: "40vh", top: "-10%", left: "-10%",
        background: "linear-gradient(180deg, rgba(228,3,3,0.08), rgba(255,140,0,0.08), rgba(255,237,0,0.08), rgba(0,128,38,0.06), rgba(0,77,255,0.06), rgba(117,7,135,0.06))",
        filter: "blur(60px)", transform: "rotate(-15deg)", animation: "drift 15s infinite ease-in-out"
      }} />

      {/* 非二元旗 Non-binary Flag (黄白紫黑) - 右侧 */}
      <div style={{
        position: "absolute", width: "60vw", height: "80vh", right: "-10%", top: "10%",
        background: "linear-gradient(180deg, rgba(255,244,48,0.08) 0%, rgba(255,255,255,0.1) 25%, rgba(156,89,209,0.08) 50%, rgba(0,0,0,0.05) 100%)",
        filter: "blur(70px)", animation: "drift 20s infinite ease-in-out reverse"
      }} />

      {/* 女同旗 Lesbian Flag (橙红白粉) - 左下角 */}
      <div style={{
        position: "absolute", width: "80vw", height: "50vh", bottom: "-10%", left: "-10%",
        background: "linear-gradient(180deg, rgba(213,45,0,0.07) 0%, rgba(255,154,86,0.07) 25%, rgba(255,255,255,0.1) 50%, rgba(212,98,166,0.07) 75%, rgba(165,0,98,0.07) 100%)",
        filter: "blur(60px)", transform: "rotate(10deg)", animation: "drift 18s infinite ease-in-out"
      }} />

      {/* 噪点纹理 */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

function Tag({ label }) {
  return (
    <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 20, border: theme.border, color: theme.colorDetail, letterSpacing: "0.02em" }}>{label}</span>
  );
}

function StatusBadge({ status, lang }) {
  const c = statusColor[status] || statusColor["in progress"];
  return (
    <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: c.bg, color: c.text, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{status}</span>
  );
}

// --- 主要页面渲染 ---

function PageAbout({ lang }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "3rem", alignItems: "flex-start" }}>
      <div style={{ flex: "1 1 400px" }}>
        {data.about[lang].split("\n\n").map((p, i) => (
          <p key={i} style={{ fontSize: "1.05rem", lineHeight: 1.85, color: theme.colorText, marginBottom: "1.5rem", textAlign: "justify" }}>{p}</p>
        ))}
      </div>
      <div style={{ flex: "0 0 220px", margin: "0 auto" }}>
        <div style={{ width: "220px", height: "280px", borderRadius: "2px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "6px solid white" }}>
           {/* 替换照片路径: /profile.jpg */}
          <img src="profile.jpg" alt="Freya Tang" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <p style={{ fontSize: "0.8rem", color: theme.colorDetail, marginTop: "1rem", textAlign: "center", fontStyle: "italic", fontFamily: theme.fontSerif }}>Beijing, 2024</p>
      </div>
    </div>
  );
}

function PageResearch({ lang }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 700 }}>
      {data.research.map((r, i) => (
        <div key={r.id} style={{ padding: "1.5rem 0", borderBottom: theme.border, cursor: "pointer" }} onClick={() => setOpen(open === r.id ? null : r.id)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
            <h4 style={{ fontFamily: theme.fontSerif, fontSize: "1.25rem", fontWeight: 400, margin: 0, color: "#000" }}>{lang === "cn" ? r.titleCN : r.title}</h4>
            <span style={{ fontSize: 12, color: theme.colorDetail, marginTop: 5 }}>{r.year}</span>
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center" }}>
            <StatusBadge status={r.status} />
            <span style={{ fontSize: 11, color: theme.colorDetail }}>{r.type}</span>
          </div>
          {open === r.id && (
            <div style={{ marginTop: "1rem", animation: "fadeIn 0.3s ease" }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: theme.colorSub }}>{lang === "cn" ? r.abstractCN : r.abstract}</p>
              <div style={{ display: "flex", gap: 6, marginTop: 15 }}>{r.tags.map(t => <Tag key={t} label={t} />)}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PageCV({ lang }) {
  return (
    <div style={{ maxWidth: 700, lineHeight: 1.8 }}>
       <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: theme.fontSerif, fontSize: "1.5rem", borderBottom: "1px solid #000", paddingBottom: "0.5rem" }}>Education</h3>
          <p><strong>University of Chinese Academy of Social Sciences</strong> · BA Sociology (2023-2027)</p>
          <p><strong>UC Berkeley</strong> · Exchange Student (2024-2025)</p>
       </section>
       <p style={{ color: theme.colorDetail }}>Full CV available upon request.</p>
    </div>
  );
}

function PageContact({ lang }) {
  return (
    <div style={{ maxWidth: 600, marginTop: "2rem" }}>
      <p style={{ fontSize: "1.2rem", color: theme.colorSub, lineHeight: 1.8, marginBottom: "3rem" }}>
        {lang === "cn" ? "保持联系。欢迎就性别研究、研究生申请或学术合作进行交流。" : "Let's connect. I'm open to conversations about gender and sexuality research, graduate applications, or collaborations."}
      </p>
      <a href={`mailto:${data.email}`} style={{ textDecoration: "none", color: "#000", borderBottom: "1.5px solid #000", paddingBottom: 4, fontSize: "1.4rem", fontFamily: theme.fontSerif }}>
        {data.email} ↗
      </a>
    </div>
  );
}

// --- 主程序 ---

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
    <div style={{ minHeight: "100vh", fontFamily: theme.fontSans, color: theme.colorText, backgroundColor: "#fff", position: "relative" }}>
      <FlagBackground />
      
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "120px" }}>
          <div onClick={() => setPage("about")} style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: 500, letterSpacing: "0.05em" }}>F.T.</div>
          <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {["about", "research", "cv", "contact"].map(p => (
              <button key={p} onClick={() => setPage(p)} style={{
                background: "none", border: "none", cursor: "pointer", fontSize: "0.85rem", letterSpacing: "0.1em",
                color: page === p ? "#000" : "#999", fontWeight: page === p ? 600 : 400, textTransform: "uppercase"
              }}>{p}</button>
            ))}
            <button onClick={() => setLang(lang === "en" ? "cn" : "en")} style={{
              background: "#1a1a1a", color: "#fff", border: "none", padding: "3px 10px", borderRadius: "2px", fontSize: "0.7rem", cursor: "pointer"
            }}>{lang === "en" ? "中" : "EN"}</button>
          </nav>
        </header>

        <main style={{ paddingBottom: "10rem" }}>
          {page === "about" && (
            <div style={{ marginBottom: "4rem", animation: "fadeIn 0.8s ease" }}>
              <h1 style={{ fontFamily: theme.fontSerif, fontSize: "clamp(3.5rem, 10vw, 5rem)", fontWeight: 400, margin: "0 0 0.5rem", letterSpacing: "-0.03em" }}>
                {lang === "cn" ? data.nameCN : data.name}
              </h1>
              <p style={{ fontSize: "1.1rem", letterSpacing: "0.15em", textTransform: "uppercase", color: theme.colorSub, marginBottom: "0.5rem" }}>
                {lang === "cn" ? data.taglineCN : data.tagline}
              </p>
              <p style={{ fontSize: "0.9rem", color: theme.colorDetail }}>{data.pronouns}</p>
            </div>
          )}

          {page !== "about" && (
             <h2 style={{ fontFamily: theme.fontSerif, fontSize: "2.5rem", fontWeight: 400, marginBottom: "3rem", textTransform: "capitalize" }}>{page}</h2>
          )}

          <div style={{ animation: "fadeIn 0.5s ease-out" }}>
            <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            {page === "about" && <PageAbout lang={lang} />}
            {page === "research" && <PageResearch lang={lang} />}
            {page === "cv" && <PageCV lang={lang} />}
            {page === "contact" && <PageContact lang={lang} />}
          </div>
        </main>

        <footer style={{ padding: "4rem 0", borderTop: theme.border, display: "flex", justifyContent: "space-between", color: theme.colorDetail, fontSize: "0.8rem" }}>
          <span>© 2024 Freya Feiyue Tang</span>
          <span>Sociology in formation</span>
        </footer>
      </div>
    </div>
  );
}