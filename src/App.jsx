import { useState, useEffect, useRef } from "react";

const data = {
  name: "Freya Tang",
  nameCN: "唐菲玥",
  title: "Sociologist in formation",
  tagline: "Gender · Sexuality · Queer Theory · Language & Power",
  affiliation: "UCASS (中国社会科学院大学), Sociology, Class of 2027",
  email: "feiyuetang@example.com",
  about: {
    en: `I'm an undergraduate sociologist at the University of Chinese Academy of Social Sciences, where I research gender, sexuality, and queer life in contemporary China. My work sits at the intersection of the sociology of gender, queer theory, and the sociology of language—I'm interested in how norms reproduce themselves, how bodies are made to signify, and where everyday practice disrupts that reproduction.\n\nCurrently I'm developing a paper on symbolic violence embedded in gendered language—asking whether people can recognize it, and what they do when they do. I'm also thinking about queer methodology, the politics of fieldwork, and what it means to do research about communities you belong to.\n\nI'm preparing to apply for graduate programs (Fall 2027) in gender studies and sociology, with a long-term interest in pursuing a PhD.`,
    cn: `我是中国社会科学院大学社会学系的本科生，研究当代中国的性别、性、与酷儿生活。我的工作处于性别社会学、酷儿理论与语言社会学的交叉地带——我关心规范如何自我再生产，身体如何被赋予意义，以及日常实践在哪里打断了这一过程。\n\n目前我在写一篇关于性别化语言中的符号暴力的论文：公众能识别这种无处不在的暴力吗？识别之后，又会生发出什么样的反抗？我同时在思考酷儿方法论、田野调查的政治，以及在自己所属的社群中做研究意味着什么。`
  },
  interests: ["Sociology of Gender", "Sociology of Sexuality", "Queer Theory", "Sociology of Language", "Feminist Methodology", "Embodiment & Body Politics"],
  research: [
    {
      id: 1,
      title: "Symbolic Violence in Gendered Language: Recognition, Resistance, and Everyday Practice",
      titleCN: "性别化语言中的符号暴力",
      status: "under revision",
      year: "2024–2025",
      type: "journal submission",
      abstract: "Do people recognize the symbolic violence embedded in the gendered language that surrounds them? And when they do, what forms of resistance and action emerge in daily life? This paper examines public awareness of gendered linguistic norms and the small-scale practices through which people push back.",
      tags: ["Language & Power", "Gender", "Bourdieu", "Qualitative"]
    },
    {
      id: 2,
      title: "The Influence of Gender Attitudes on Upward Intergenerational Relations",
      titleCN: "性别观念对上行式代际关系的影响",
      status: "completed",
      year: "2024",
      type: "quantitative course paper",
      note: "Based on CFPS 2020. Received high evaluation.",
      abstract: "A quantitative analysis examining how gender attitudes shape the quality and dynamics of adult children's relationships with their parents, drawing on China Family Panel Studies (CFPS) 2020 data.",
      tags: ["Gender Attitudes", "Intergenerational", "CFPS", "Quantitative"]
    },
    {
      id: 3,
      title: "After the Loom: Gender Division of Labor in Northern Zhejiang's Domestic Industry",
      titleCN: "卖掉织机之后：浙北家庭工业发展中的性别分工变迁",
      status: "completed",
      year: "2023–2024",
      type: "ethnographic paper",
      abstract: "An ethnographic account of how the decline of household textile production in northern Zhejiang reshaped gender divisions of labor in rural families, drawing on fieldwork with female workers.",
      tags: ["Labor", "Gender", "Rural China", "Ethnography"]
    },
    {
      id: 4,
      title: "Queer Space and Sense of Safety in Beijing",
      titleCN: "北京酷儿群体空间体验与安全感生产",
      status: "completed",
      year: "2023",
      type: "urban sociology paper",
      abstract: "An exploration of how queer people in Beijing navigate, claim, and are excluded from urban space, and how safety is constructed through spatial practice and collective knowledge.",
      tags: ["Queer", "Urban Space", "Beijing", "Safety"]
    },
    {
      id: 5,
      title: "Intergenerational Negotiation at Beijing's Marriage Markets",
      titleCN: "代际关系的张力与协商：基于北京相亲角的质性研究",
      status: "completed",
      year: "2023",
      type: "qualitative fieldwork",
      abstract: "Fieldwork at Beijing's public marriage corners, examining how parents and adult children negotiate competing visions of marriage, gender, and generational authority.",
      tags: ["Marriage", "Intergenerational", "Fieldwork", "Beijing"]
    }
  ],
  thinking: [
    {
      id: 1,
      title: "Why is the lesbian absent from sexual health discourse?",
      body: "In discussions of sexual and reproductive health, gay men—especially in the context of HIV—receive the most sustained attention among LGBTQ+ groups. I keep returning to a simple question: why is the lesbian so consistently absent from this conversation? What does that absence produce?",
      date: "Spring 2025"
    },
    {
            id: 2,
      title: "On 'ta' (ta/她/他): gender-neutral pronouns in a language that hears no gender",
      body: "Chinese is a language where gender is invisible in speech but visible in writing. 'Ta' has been used on matchmaking ads ('come find your ta') and by queer friends as a gender-neutral marker—but these are very different claims on the same character. Unlike 'they' or Swedish 'hen,' Chinese offers only 'ta' or '他/她.' I want to understand how people use it, what they mean by it, and whether it can hold the weight we're asking it to carry.",
      date: "Winter 2024"
    },
    {
      id: 3,
      title: "Muscle as gender symbol: strength training and the female body",
      body: "Masculine musculature signals masculinity; we take that for granted. But when women strength-train, when women display muscle—what is being read, by whom, and how? This sits somewhere between body sociology, sports sociology, and the sociology of gender.",
      date: "Ongoing"
    },
    {
      id: 4,
      title: "Emotional labor in trans-cis interaction",
      body: "A set of observations from my own encounters with trans women who haven't yet passed—on what I experience as a cis woman in those interactions, the sense of being referenced, the asymmetry of ease. Is what I'm experiencing emotional labor? And what would it mean if it is?",
      date: "Ongoing"
    }
  ]
};

const statusColor = {
  "under revision": { bg: "#faeeda", text: "#633806" },
  "completed": { bg: "#e1f5ee", text: "#085041" },
  "in progress": { bg: "#eeedfe", text: "#3c3489" }
};

function NavDot({ active }) {
  return (
    <span style={{
      display: "inline-block",
      width: 6, height: 6,
      borderRadius: "50%",
      background: active ? "var(--color-text-primary)" : "var(--color-border-secondary)",
      transition: "background 0.2s"
    }} />
  );
}

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

function StatusBadge({ status }) {
  const c = statusColor[status] || statusColor["in progress"];
  return (
    <span style={{
      fontSize: 11,
      padding: "2px 9px",
      borderRadius: 20,
      background: c.bg,
      color: c.text,
      fontWeight: 500
    }}>{status}</span>
  );
}

function PageAbout({ lang, setLang }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = data.about[lang].split("\n\n");

  return (
    <div style={{ maxWidth: 640 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: "2rem" }}>
        {["en", "cn"].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{
            fontSize: 12,
            padding: "3px 12px",
            borderRadius: 20,
            border: `0.5px solid ${lang === l ? "var(--color-text-primary)" : "var(--color-border-tertiary)"}`,
            background: lang === l ? "var(--color-text-primary)" : "transparent",
            color: lang === l ? "var(--color-background-primary)" : "var(--color-text-secondary)",
            cursor: "pointer",
            transition: "all 0.15s"
          }}>{l === "en" ? "EN" : "中文"}</button>
        ))}
      </div>

      <div style={{ position: "relative" }}>
        {paragraphs.map((p, i) => (
          <p key={i} style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "var(--color-text-primary)",
            marginBottom: "1.2rem",
            display: (!expanded && i > 0) ? "none" : "block"
          }}>{p}</p>
        ))}
        {!expanded && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: 60,
            background: "linear-gradient(transparent, var(--color-background-primary))"
          }} />
        )}
      </div>

      <button onClick={() => setExpanded(!expanded)} style={{
        marginTop: expanded ? "0.5rem" : "0.25rem",
        fontSize: 13,
        color: "var(--color-text-secondary)",
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        textDecoration: "underline",
        textDecorationStyle: "dotted"
      }}>
        {expanded ? "show less" : "read more"}
      </button>

      <div style={{ marginTop: "2.5rem" }}>
        <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginBottom: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>research interests</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {data.interests.map(i => <Tag key={i} label={i} />)}
        </div>
      </div>

      <div style={{
        marginTop: "2.5rem",
        padding: "1.2rem",
        borderLeft: "2px solid var(--color-border-secondary)",
        borderRadius: "0 var(--border-radius-md) var(--border-radius-md) 0"
      }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>{data.affiliation}</p>
        <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>Applying for MA/MSc programs, Fall 2027 · PhD track</p>
      </div>
    </div>
  );
}

function PageResearch() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ maxWidth: 680 }}>
      {data.research.map((r, i) => (
        <div key={r.id} style={{
          borderTop: i === 0 ? "0.5px solid var(--color-border-tertiary)" : "none",
          borderBottom: "0.5px solid var(--color-border-tertiary)",
          padding: "1.2rem 0"
        }}>
          <div
            onClick={() => setOpen(open === r.id ? null : r.id)}
            style={{ cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 4px", color: "var(--color-text-primary)", lineHeight: 1.5 }}>
                  {r.title}
                </p>
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0 }}>{r.titleCN}</p>
              </div>
              <span style={{
                fontSize: 11,
                color: "var(--color-text-tertiary)",
                whiteSpace: "nowrap",
                marginTop: 3
              }}>{r.year}</span>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: "0.7rem", flexWrap: "wrap", alignItems: "center" }}>
              <StatusBadge status={r.status} />
              <span style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{r.type}</span>
            </div>
          </div>

          {open === r.id && (
            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--color-text-secondary)", margin: "0 0 0.8rem" }}>
                {r.abstract}
              </p>
              {r.note && (
                <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", fontStyle: "italic", margin: "0 0 0.8rem" }}>
                  {r.note}
                </p>
              )}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {r.tags.map(t => <Tag key={t} label={t} />)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PageThinking() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ maxWidth: 640 }}>
      <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", marginBottom: "2rem", lineHeight: 1.7 }}>
        Unsettled questions, ideas in formation, things I keep returning to. Not yet research—but not not-research either.
      </p>
      {data.thinking.map((item, i) => (
        <div key={item.id} style={{
          marginBottom: "1.5rem",
          padding: "1.2rem",
          borderRadius: "var(--border-radius-lg)",
          border: "0.5px solid var(--color-border-tertiary)",
          background: "var(--color-background-primary)",
          cursor: "pointer",
          transition: "border-color 0.15s"
        }}
          onClick={() => setOpen(open === item.id ? null : item.id)}
          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--color-border-secondary)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-tertiary)"}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 500, margin: 0, lineHeight: 1.5, color: "var(--color-text-primary)", flex: 1 }}>
              {item.title}
            </p>
            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)", whiteSpace: "nowrap", marginTop: 2 }}>{item.date}</span>
          </div>
          {open === item.id && (
            <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--color-text-secondary)", margin: "0.8rem 0 0" }}>
              {item.body}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function PageCV() {
  const sections = [
    {
      label: "Education",
      items: [
        { left: "2023–2027", main: "BA Sociology", sub: "University of Chinese Academy of Social Sciences (中国社会科学院大学)" },
        { left: "2024–2025", main: "Exchange, UC Berkeley", sub: "Visiting student, Sociology" }
      ]
    },
    {
      label: "Research & Writing",
      items: data.research.map(r => ({
        left: r.year,
        main: r.title,
        sub: `${r.type} · ${r.status}`
      }))
    },
    {
      label: "Methods",
      items: [
        { left: "", main: "Qualitative", sub: "Ethnographic fieldwork, in-depth interview, participant observation" },
        { left: "", main: "Quantitative", sub: "Survey data analysis, regression (CFPS, CGSS)" },
        { left: "", main: "Languages", sub: "Mandarin (native) · English (IELTS 7.0)" }
      ]
    },
    {
      label: "Graduate Applications",
      items: [
        { left: "Target", main: "MA/MSc in Gender Studies or Sociology", sub: "LSE · Manchester · UvA · Utrecht · CUHK MPhil · UT Austin MA" },
        { left: "Timeline", main: "Fall 2027 entry", sub: "Long-term: PhD in sociology of gender / queer studies" }
      ]
    }
  ];

  return (
    <div style={{ maxWidth: 660 }}>
      {sections.map((sec, si) => (
        <div key={si} style={{ marginBottom: "2.5rem" }}>
          <p style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-text-tertiary)",
            margin: "0 0 1rem",
            fontWeight: 500
          }}>{sec.label}</p>
          {sec.items.map((item, ii) => (
            <div key={ii} style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "0 1.5rem",
              padding: "0.6rem 0",
              borderTop: ii === 0 ? "0.5px solid var(--color-border-tertiary)" : "0.5px solid var(--color-border-tertiary)"
            }}>
              <span style={{ fontSize: 12, color: "var(--color-text-tertiary)", paddingTop: 2 }}>{item.left}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 2px", color: "var(--color-text-primary)" }}>{item.main}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: "1rem" }}>
        Full CV available on request — <a href={`mailto:${data.email}`} style={{ color: "var(--color-text-info)" }}>{data.email}</a>
      </p>
    </div>
  );
}

function PageContact() {
  return (
    <div style={{ maxWidth: 480 }}>
      <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-primary)", marginBottom: "2rem" }}>
        I'm open to conversations about gender and queer research in China, graduate school applications, potential collaboration, or just ideas you're turning over.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{
          padding: "1rem 1.25rem",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: "var(--border-radius-lg)",
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          <div style={{
            width: 32, height: 32,
            borderRadius: "50%",
            background: "var(--color-background-secondary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14
          }}>@</div>
          <div>
            <p style={{ fontSize: 11, color: "var(--color-text-tertiary)", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Email</p>
            <a href={`mailto:${data.email}`} style={{ fontSize: 14, color: "var(--color-text-info)", textDecoration: "none" }}>{data.email}</a>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", marginTop: "2.5rem", lineHeight: 1.7 }}>
        Pronouns: she/they (not he/him). Based in Beijing.
      </p>
    </div>
  );
}

const pages = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "thinking", label: "Thinking" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" }
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

  return (
    <div ref={containerRef} style={{
      minHeight: "100vh",
      fontFamily: "var(--font-sans)",
      background: "var(--color-background-primary)",
      overflowY: "auto"
    }}>
      {/* Header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "var(--color-background-primary)",
        borderBottom: scrolled ? "0.5px solid var(--color-border-tertiary)" : "0.5px solid transparent",
        transition: "border-color 0.2s",
        padding: "0 2rem"
      }}>
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56
        }}>
          <button
            onClick={() => setPage("about")}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              display: "flex", flexDirection: "column", alignItems: "flex-start"
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", letterSpacing: "0.01em" }}>
              {data.name}
            </span>
            <span style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{data.nameCN}</span>
          </button>
          <nav style={{ display: "flex", gap: "0.25rem" }}>
            {pages.map(p => (
              <button
                key={p.id}
                onClick={() => setPage(p.id)}
                style={{
                  fontSize: 13,
                  padding: "4px 10px",
                  borderRadius: 6,
                  border: "none",
                  background: page === p.id ? "var(--color-background-secondary)" : "transparent",
                  color: page === p.id ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  cursor: "pointer",
                  fontWeight: page === p.id ? 500 : 400,
                  transition: "all 0.15s"
                }}
              >{p.label}</button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero area — only on About */}
      {page === "about" && (
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "4rem 2rem 2rem"
        }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{
              fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
              fontWeight: 400,
              margin: "0 0 0.3rem",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontFamily: "var(--font-serif)"
            }}>{data.name}</h1>
            <p style={{
              fontSize: 15,
              color: "var(--color-text-secondary)",
              margin: "0.5rem 0 0",
              letterSpacing: "0.01em"
            }}>{data.tagline}</p>
          </div>
          <div style={{
            width: 40,
            height: 1,
            background: "var(--color-border-secondary)",
            margin: "2rem 0"
          }} />
        </div>
      )}

      {/* Page content */}
      <main style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: page === "about" ? "0 2rem 4rem" : "3rem 2rem 4rem"
      }}>
        {page !== "about" && (
          <h2 style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 400,
            fontFamily: "var(--font-serif)",
            margin: "0 0 2.5rem",
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em"
          }}>
            {pages.find(p => p.id === page)?.label}
          </h2>
        )}

        {page === "about" && <PageAbout lang={lang} setLang={setLang} />}
        {page === "research" && <PageResearch />}
        {page === "thinking" && <PageThinking />}
        {page === "cv" && <PageCV />}
        {page === "contact" && <PageContact />}
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "0.5px solid var(--color-border-tertiary)",
        padding: "1.5rem 2rem",
        maxWidth: 800,
        margin: "0 auto"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>Freya Tang · 唐菲玥</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {pages.map(p => (
              <span key={p.id} onClick={() => setPage(p.id)} style={{ cursor: "pointer" }}>
                <NavDot active={page === p.id} />
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}