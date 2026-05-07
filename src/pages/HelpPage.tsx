import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SharedFooter } from "./NotFoundPage";

const NAV_LINKS = ["Каталог", "О магазине", "Доставка и оплата", "Блог", "Контакты", "Помощь"];

const CATEGORIES = [
  { icon: "📦", title: "Заказ и доставка", text: "Как оформить заказ, способы доставки, сроки, отслеживание" },
  { icon: "💳", title: "Оплата", text: "Способы оплаты, безопасность, рассрочка, возврат средств" },
  { icon: "📏", title: "Размеры и примерка", text: "Как определить размер кольца, регулировка браслетов, длина цепочек" },
  { icon: "✨", title: "Уход за украшениями", text: "Чистка, хранение, полировка, что нельзя делать" },
  { icon: "🔄", title: "Возврат и обмен", text: "Условия возврата, сроки, как оформить, гарантия" },
  { icon: "❓", title: "Частые вопросы", text: "Краткие ответы на самые популярные вопросы" },
];

const FAQS = [
  {
    q: "Как узнать свой размер кольца?",
    a: "Измерьте диаметр пальца в миллиметрах в самом широком месте. Мы подготовили подробный гайд с таблицей размеров.",
    link: { text: "Скачать таблицу размеров", href: "#" },
  },
  {
    q: "Из какого металла сделаны украшения?",
    a: "Только серебро 925 пробы, золото 585 и 750 пробы с родиевым покрытием. Все изделия проходят пробу в Пробирной палате.",
  },
  {
    q: "Как ухаживать за изумрудом?",
    a: "Изумруд — деликатный камень. Не используйте ультразвук, кислоты и абразивы. Только мягкая салфетка и мыльный раствор. Подробнее — в нашем гайде по уходу.",
  },
  {
    q: "Как долго длится доставка?",
    a: "По Москве — 1–2 дня, по России — 2–7 дней в зависимости от региона. Срочную доставку обсуждаем индивидуально.",
  },
  {
    q: "Могу ли я вернуть украшение, если оно не подошло?",
    a: "Да, в течение 14 дней с момента получения. Украшение должно быть в исходном виде, с бирками и упаковкой.",
  },
];

const GUIDES = [
  {
    icon: "📏",
    title: "Как определить размер кольца",
    text: "Пошаговая инструкция с таблицей размеров и советами",
  },
  {
    icon: "✨",
    title: "Уход за украшениями с камнями",
    text: "Чистка, хранение, полировка — продлеваем жизнь вашему украшению",
  },
  {
    icon: "🎁",
    title: "Как подарить украшение",
    text: "Идеи упаковки, послания, сюрпризы — делаем подарок особенным",
  },
];

function AccordionItem({ q, a, link }: { q: string; a: string; link?: { text: string; href: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        background: "#2F2E30",
        borderRadius: "12px",
        padding: "20px 24px",
        marginBottom: "12px",
        cursor: "pointer",
        border: `1px solid ${open ? "#C6A43F" : "transparent"}`,
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "17px", fontWeight: 600, color: "#E6E3DD", lineHeight: "1.4" }}>{q}</span>
        <span style={{
          fontSize: "18px", color: "#C6A43F", flexShrink: 0,
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s",
          display: "inline-block",
        }}>▾</span>
      </div>
      {open && (
        <div style={{ marginTop: "14px", fontSize: "15px", color: "#9A9690", lineHeight: "1.75", borderTop: "1px solid #3D3B3E", paddingTop: "14px" }}>
          {a}
          {link && (
            <>
              {" "}
              <a
                href={link.href}
                onClick={e => e.stopPropagation()}
                style={{ color: "#C6A43F", textDecoration: "none", fontWeight: 600 }}
              >
                {link.text} →
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "80px", display: "flex", alignItems: "center", padding: "0 40px", gap: "40px" }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", textDecoration: "none", flexShrink: 0 }}>
          Черный бархат
        </a>
        <nav style={{ flex: 1, display: "flex", justifyContent: "center", gap: "28px" }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "14px",
                textDecoration: "none",
                color: link === "Помощь" ? "#C6A43F" : "#9A9690",
                fontWeight: link === "Помощь" ? 600 : 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={e => { if (link !== "Помощь") e.currentTarget.style.color = "#E6E3DD"; }}
              onMouseLeave={e => { if (link !== "Помощь") e.currentTarget.style.color = "#9A9690"; }}
            >
              {link}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "18px", flexShrink: 0 }}>
          {[{ name: "Search" }, { name: "Heart" }, { name: "ShoppingBag" }].map(ic => (
            <button key={ic.name} style={{ background: "none", border: "none", color: "#C6A43F", cursor: "pointer", padding: "4px", display: "flex" }}>
              <Icon name={ic.name} size={22} />
            </button>
          ))}
        </div>
      </header>
      <div style={{ height: "1px", background: "#C6A43F" }} />

      {/* BREADCRUMBS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "14px 32px", width: "100%", boxSizing: "border-box" }}>
        <nav style={{ fontSize: "14px", color: "#9A9690" }}>
          <a href="/" style={{ color: "#9A9690", textDecoration: "none" }}>Главная</a>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span style={{ color: "#E6E3DD" }}>Помощь</span>
        </nav>
      </div>

      <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px", width: "100%", boxSizing: "border-box" }}>

        {/* PAGE TITLE */}
        <div style={{ textAlign: "center", padding: "48px 0 0" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#E6E3DD", marginBottom: "14px" }}>
            Чем мы можем помочь?
          </h1>
          <p style={{ fontSize: "16px", color: "#9A9690", maxWidth: "600px", margin: "0 auto 48px", lineHeight: "1.7" }}>
            Ответы на частые вопросы, гайды по уходу и инструкции — всё в одном месте
          </p>
        </div>

        {/* SEARCH */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", width: "600px", maxWidth: "100%", gap: "0" }}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Напишите вопрос, например: как выбрать размер кольца..."
              style={{
                flex: 1, height: "48px", background: "#2F2E30", border: "1px solid #3D3B3E",
                borderRight: "none", borderRadius: "8px 0 0 8px", padding: "0 16px",
                fontSize: "14px", color: "#E6E3DD", outline: "none",
                fontFamily: "'Golos Text', sans-serif",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "#C6A43F")}
              onBlur={e => (e.currentTarget.style.borderColor = "#3D3B3E")}
            />
            <button style={{ width: "48px", height: "48px", background: "#C6A43F", border: "none", borderRadius: "0 8px 8px 0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s", flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d4b04a")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C6A43F")}
            >
              <Icon name="Search" size={20} style={{ color: "#1C1B1D" }} />
            </button>
          </div>
        </div>

        {/* CATEGORY CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }}>
          {CATEGORIES.map(cat => (
            <div
              key={cat.title}
              style={{ background: "#2F2E30", borderRadius: "12px", padding: "32px 24px", textAlign: "center", cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s", border: "1px solid transparent" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(198,164,63,0.15)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#C6A43F33";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "transparent";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "44px", marginBottom: "16px", lineHeight: 1 }}>{cat.icon}</div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD", marginBottom: "10px" }}>{cat.title}</div>
              <p style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", margin: 0 }}>{cat.text}</p>
            </div>
          ))}
        </div>

        {/* FAQ ACCORDION */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", textAlign: "center", marginBottom: "36px" }}>
            Популярные вопросы
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} link={faq.link} />
            ))}
          </div>
        </div>

        {/* GUIDES */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", textAlign: "center", marginBottom: "36px" }}>
            Гайды и инструкции
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {GUIDES.map(guide => (
              <div key={guide.title} style={{ background: "#2F2E30", borderRadius: "12px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ fontSize: "38px", lineHeight: 1 }}>{guide.icon}</div>
                <div style={{ fontSize: "17px", fontWeight: 700, color: "#E6E3DD", lineHeight: "1.3" }}>{guide.title}</div>
                <p style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", margin: 0, flex: 1 }}>{guide.text}</p>
                <a
                  href="#"
                  style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none", fontWeight: 600, marginTop: "4px", transition: "opacity 0.2s", display: "inline-block" }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Смотреть гайд →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT CTA */}
        <div style={{ background: "#2F2E30", borderRadius: "16px", padding: "64px 24px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", marginBottom: "12px" }}>
            Не нашли ответ?
          </h3>
          <p style={{ fontSize: "16px", color: "#9A9690", marginBottom: "32px" }}>
            Напишите нам, и мы поможем в течение 24 часов
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
            <a href="https://t.me/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button
                style={{ height: "48px", padding: "0 28px", background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#d4b04a")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C6A43F")}
              >
                <Icon name="Send" size={18} />
                Написать в Telegram
              </button>
            </a>
            <a href="mailto:info@chernybarhat.ru" style={{ textDecoration: "none" }}>
              <button
                style={{ height: "48px", padding: "0 28px", background: "transparent", color: "#C6A43F", border: "1.5px solid #C6A43F", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s" }}
                onMouseEnter={e => { (e.currentTarget.style.background = "rgba(198,164,63,0.08)"); }}
                onMouseLeave={e => { (e.currentTarget.style.background = "transparent"); }}
              >
                <Icon name="Mail" size={18} />
                Задать вопрос по email
              </button>
            </a>
          </div>
          <div style={{ fontSize: "12px", color: "#9A9690" }}>
            Пн–Пт: 10:00–20:00, Сб–Вс: 12:00–18:00
          </div>
        </div>

      </main>

      <SharedFooter />
    </div>
  );
}
