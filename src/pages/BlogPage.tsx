import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_1 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/b4794e4a-4467-4249-bdd9-71dacd9a4bfc.jpg";
const IMG_2 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/3c1b5eb0-2211-4049-afcc-a54e479fa2d1.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/fc54a6f9-9ff3-44dc-a30b-953afa86629a.jpg";
const IMG_4 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/cbbf2f91-6371-4186-b4cc-f653ed5b2b9a.jpg";
const IMG_5 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/edde2ddc-7544-43fe-a21c-9098d343e42b.jpg";
const NECKLACE = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";

const ARTICLES = [
  { id: 1, img: IMG_2, category: "Уход", date: "15 мая 2026", title: "Как правильно чистить изумруд в домашних условиях", desc: "Изумруд — капризный камень, требующий особого ухода. Рассказываем, какие средства использовать безопасно, а каких лучше избегать.", slug: "clean-emerald" },
  { id: 2, img: IMG_3, category: "Стиль и образы", date: "10 мая 2026", title: "Как выбрать колье под тип лица: полное руководство", desc: "Длина цепочки, форма подвески и вырез платья — три кита идеального образа. Разбираем каждый тип лица подробно.", slug: "necklace-face-type" },
  { id: 3, img: IMG_1, category: "Изумруд и камни", date: "02 мая 2026", title: "5 мифов об изумруде, в которые многие до сих пор верят", desc: "Настоящий изумруд всегда без трещин? Чем тёмнее — тем дороже? Развеиваем самые распространённые заблуждения.", slug: "emerald-myths" },
  { id: 4, img: IMG_4, category: "О мастерской", date: "25 апреля 2026", title: "Один день из жизни нашего мастера: как рождается украшение", desc: "Мы провели целый день в мастерской вместе с Сергеем — ювелиром с 18-летним стажем. Рассказываем всё без прикрас.", slug: "master-day" },
  { id: 5, img: IMG_5, category: "Новости и акции", date: "18 апреля 2026", title: "Новая коллекция «Ночное небо»: первый взгляд", desc: "Сапфиры, бриллианты и чернёное золото. Весенняя коллекция уже доступна в нашем каталоге — спешите, тираж ограничен.", slug: "night-sky-collection" },
  { id: 6, img: IMG_3, category: "Уход", date: "10 апреля 2026", title: "Хранение ювелирных украшений: 7 правил, о которых мало кто знает", desc: "Бархатная коробочка — не единственный способ уберечь украшения от царапин и окисления. Делимся профессиональными секретами.", slug: "jewelry-storage" },
  { id: 7, img: IMG_1, category: "Стиль и образы", date: "01 апреля 2026", title: "Тренды ювелирных украшений 2026: что носят этим летом", desc: "Объёмные браслеты, асимметричные серьги и многослойные цепочки — главные тенденции сезона прямо с подиумов.", slug: "trends-2026" },
  { id: 8, img: IMG_4, category: "Изумруд и камни", date: "20 марта 2026", title: "Сертификат GIA: зачем он нужен и как его проверить", desc: "Покупая дорогой камень, всегда требуйте сертификат. Рассказываем, что означают все строки в документе и как не попасться на подделку.", slug: "gia-certificate" },
];

const CATEGORIES = [
  { label: "Уход за украшениями", count: 8 },
  { label: "Изумруд и камни", count: 6 },
  { label: "Стиль и образы", count: 12 },
  { label: "О мастерской", count: 4 },
  { label: "Новости и акции", count: 5 },
];

const RECENT = [
  { img: IMG_3, title: "Как выбрать колье под тип лица", date: "10 мая 2026" },
  { img: IMG_2, title: "Чистка изумруда в домашних условиях", date: "15 мая 2026" },
  { img: IMG_4, title: "Один день из жизни ювелира", date: "25 апреля 2026" },
];

const POPULAR = [
  { img: IMG_3, title: "5 ошибок при выборе колье", views: "2 500" },
  { img: IMG_2, title: "Как чистить изумруд дома", views: "1 800" },
  { img: IMG_1, title: "Тренды украшений 2026", views: "1 340" },
];

const INSTA = [NECKLACE, EARRINGS, IMG_1, IMG_2, IMG_3, IMG_4];

const PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(ARTICLES.length / PER_PAGE);

const NAV_LINKS = ["Каталог", "О магазине", "Доставка и оплата", "Блог", "Контакты"];

const INPUT_STYLE: React.CSSProperties = {
  width: "100%", height: "44px", background: "#1C1B1D", border: "1px solid #3D3B3E",
  borderRadius: "8px", color: "#E6E3DD", fontSize: "14px", padding: "0 14px",
  fontFamily: "'Golos Text', sans-serif", outline: "none", boxSizing: "border-box",
};

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const filtered = ARTICLES.filter(a =>
    (!activeCategory || a.category === activeCategory) &&
    (!searchVal || a.title.toLowerCase().includes(searchVal.toLowerCase()) || a.desc.toLowerCase().includes(searchVal.toLowerCase()))
  );
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  const handleCategory = (cat: string) => {
    setActiveCategory(prev => prev === cat ? null : cat);
    setPage(1);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif" }}>

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "80px" }} className="flex items-center justify-between px-10">
        <div style={{ flex: "0 0 200px" }}>
          <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", textDecoration: "none", whiteSpace: "nowrap" }}>
            Черный бархат
          </a>
        </div>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map(item => (
            <a
              key={item}
              href={item === "Блог" ? "/blog" : "#"}
              className="header-nav-link"
              style={item === "Блог" ? { color: "#C6A43F" } : undefined}
            >
              {item}
              {item === "Блог" && (
                <span style={{ position: "absolute", left: 0, bottom: "-3px", width: "100%", height: "1px", background: "#C6A43F" }} />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5" style={{ flex: "0 0 200px", justifyContent: "flex-end" }}>
          <button className="header-icon-btn"><Icon name="Search" size={22} /></button>
          <button className="header-icon-btn"><Icon name="Heart" size={22} /></button>
          <button className="header-icon-btn" style={{ position: "relative" }}>
            <Icon name="ShoppingBag" size={22} />
            <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "17px", height: "17px", background: "#E53935", borderRadius: "50%", fontSize: "10px", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>3</span>
          </button>
          <a href="/account" style={{ color: "#9A9690", display: "flex", alignItems: "center" }}>
            <Icon name="User" size={22} />
          </a>
        </div>
      </header>
      <div style={{ height: "1px", background: "#C6A43F" }} />

      {/* BREADCRUMBS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 32px" }}>
        <nav style={{ fontSize: "14px", color: "#9A9690" }}>
          <a href="/" style={{ color: "#9A9690", textDecoration: "none" }}>Главная</a>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span style={{ color: "#E6E3DD" }}>Блог</span>
        </nav>
      </div>

      {/* PAGE TITLE */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 32px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#E6E3DD", marginBottom: "10px", letterSpacing: "0.02em" }}>
          Блог / Журнал «Черный бархат»
        </h1>
        <p style={{ fontSize: "16px", color: "#9A9690" }}>
          Истории, советы и вдохновение для ценителей ювелирного искусства
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px", display: "flex", gap: "40px", alignItems: "flex-start" }}>

        {/* ARTICLES GRID */}
        <div style={{ flex: "1 1 70%", minWidth: 0 }}>
          {visible.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#9A9690", fontSize: "16px" }}>
              По вашему запросу ничего не найдено
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              {visible.map(article => (
                <article
                  key={article.id}
                  style={{ background: "#2F2E30", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)"; }}
                >
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <button
                        onClick={() => handleCategory(article.category)}
                        style={{ background: "none", border: "none", padding: 0, fontSize: "12px", fontWeight: 700, color: "#C6A43F", textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer" }}
                      >
                        {article.category}
                      </button>
                      <span style={{ fontSize: "12px", color: "#9A9690" }}>{article.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#E6E3DD", lineHeight: "1.3", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>
                      {article.desc}
                    </p>
                    <a
                      href={`/blog/${article.slug}`}
                      style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none", fontWeight: 600, transition: "opacity 0.2s", marginTop: "auto" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      Читать далее →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", marginTop: "48px" }}>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "20px", cursor: page === 1 ? "default" : "pointer", opacity: page === 1 ? 0.4 : 1 }}
              >←</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{ width: "36px", height: "36px", borderRadius: "6px", border: p === page ? "1px solid #C6A43F" : "1px solid transparent", background: "transparent", color: p === page ? "#C6A43F" : "#9A9690", fontWeight: p === page ? 700 : 400, cursor: "pointer", fontSize: "14px", transition: "all 0.15s" }}
                >{p}</button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "20px", cursor: page === totalPages ? "default" : "pointer", opacity: page === totalPages ? 0.4 : 1 }}
              >→</button>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside style={{ flex: "0 0 320px", display: "flex", flexDirection: "column", gap: "32px" }}>

          {/* SEARCH */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Icon name="Search" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Поиск по блогу</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                value={searchVal}
                onChange={e => { setSearchVal(e.target.value); setPage(1); }}
                placeholder="Поиск по статьям..."
                style={{ ...INPUT_STYLE, flex: 1 }}
              />
              <button style={{ width: "44px", height: "44px", background: "#C6A43F", border: "none", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="Search" size={18} style={{ color: "#1C1B1D" }} />
              </button>
            </div>
          </div>

          {/* CATEGORIES */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Icon name="FolderOpen" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Рубрики</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.label}
                  onClick={() => handleCategory(cat.label)}
                  style={{ background: "none", border: "none", padding: 0, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", transition: "color 0.15s", color: activeCategory === cat.label ? "#C6A43F" : "#9A9690", textAlign: "left" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.style.color = activeCategory === cat.label ? "#C6A43F" : "#9A9690")}
                >
                  <span style={{ fontSize: "14px" }}>{cat.label}</span>
                  <span style={{ fontSize: "12px", color: "#9A9690" }}>({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* RECENT */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Icon name="Clock" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Последние посты</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {RECENT.map((post, i) => (
                <a key={i} href="#" style={{ display: "flex", gap: "12px", textDecoration: "none", alignItems: "flex-start" }}
                  onMouseEnter={e => (e.currentTarget.querySelector("span")!.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.querySelector("span")!.style.color = "#E6E3DD")}
                >
                  <img src={post.img} alt={post.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px", flexShrink: 0, border: "1px solid #3D3B3E" }} />
                  <div>
                    <span style={{ fontSize: "14px", color: "#E6E3DD", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.4", transition: "color 0.15s" }}>{post.title}</span>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "4px" }}>{post.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* POPULAR */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Icon name="Flame" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Популярное</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {POPULAR.map((post, i) => (
                <a key={i} href="#" style={{ display: "flex", gap: "12px", textDecoration: "none", alignItems: "flex-start" }}
                  onMouseEnter={e => (e.currentTarget.querySelector("span")!.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.querySelector("span")!.style.color = "#E6E3DD")}
                >
                  <img src={post.img} alt={post.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px", flexShrink: 0, border: "1px solid #3D3B3E" }} />
                  <div>
                    <span style={{ fontSize: "14px", color: "#E6E3DD", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: "1.4", transition: "color 0.15s" }}>{post.title}</span>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "4px" }}>
                      <Icon name="Eye" size={11} style={{ display: "inline", marginRight: "4px" }} />
                      {post.views} просмотров
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* SUBSCRIBE */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Icon name="Mail" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Будьте в курсе</span>
            </div>
            <p style={{ fontSize: "14px", color: "#9A9690", marginBottom: "14px", lineHeight: "1.5" }}>
              Подпишитесь на новые статьи и анонсы коллекций
            </p>
            {subscribed ? (
              <div style={{ fontSize: "14px", color: "#00A86B", background: "rgba(0,168,107,0.1)", borderRadius: "8px", padding: "12px 16px", textAlign: "center" }}>
                Вы успешно подписались!
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="email" placeholder="Ваш email" style={INPUT_STYLE} />
                <button
                  onClick={() => setSubscribed(true)}
                  style={{ height: "44px", background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#d4b04a")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#C6A43F")}
                >
                  Подписаться
                </button>
                <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#C6A43F", marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", color: "#9A9690", lineHeight: "1.4" }}>Я согласен с условиями обработки данных</span>
                </label>
              </div>
            )}
          </div>

          {/* INSTAGRAM */}
          <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
              <Icon name="Camera" size={18} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Мы в Instagram</span>
            </div>
            <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "14px" }}>@blackvelvet.jewelry</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {INSTA.map((img, i) => (
                <a key={i} href="#" style={{ display: "block", overflow: "hidden", borderRadius: "8px", aspectRatio: "1" }}>
                  <img
                    src={img}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </a>
              ))}
            </div>
          </div>

        </aside>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#1C1B1D", borderTop: "1px solid #3D3B3E", padding: "48px 0 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "32px", marginBottom: "32px" }}>
            {/* Col 1 */}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: "#C6A43F", marginBottom: "12px" }}>Черный бархат</div>
              <p style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", marginBottom: "16px" }}>
                Украшения ручной работы. Сделано с любовью и изумрудом.
              </p>
              <div style={{ fontSize: "14px", color: "#9A9690" }}>© 2026 Черный бархат</div>
            </div>
            {/* Col 2 */}
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Каталог</div>
              {["Кольца", "Серьги", "Колье", "Браслеты"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: "14px", color: "#9A9690", textDecoration: "none", marginBottom: "10px", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
                >{l}</a>
              ))}
            </div>
            {/* Col 3 */}
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Помощь</div>
              {["Доставка и оплата", "Возврат", "Частые вопросы", "Политика конфиденциальности"].map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: "14px", color: "#9A9690", textDecoration: "none", marginBottom: "10px", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
                >{l}</a>
              ))}
            </div>
            {/* Col 4 */}
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Контакты</div>
              {["+7 (999) 123-45-67", "info@chernybarhat.ru", "Москва, ул. Тверская, 12"].map(c => (
                <div key={c} style={{ fontSize: "14px", color: "#9A9690", marginBottom: "10px" }}>{c}</div>
              ))}
              <div style={{ display: "flex", gap: "14px", marginTop: "16px" }}>
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Users", label: "VK" },
                  { icon: "MessageCircle", label: "WhatsApp" },
                ].map(s => (
                  <a key={s.label} href="#" title={s.label} style={{ color: "#9A9690", display: "flex", transition: "color 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
                  >
                    <Icon name={s.icon} size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Payment icons */}
          <div style={{ borderTop: "1px solid #3D3B3E", paddingTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            {["Visa", "Mastercard", "МИР", "SBP", "Оплата частями"].map(p => (
              <span key={p} style={{ fontSize: "13px", color: "#9A9690", background: "#2F2E30", padding: "4px 12px", borderRadius: "6px", border: "1px solid #3D3B3E" }}>{p}</span>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
