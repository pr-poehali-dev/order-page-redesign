import { useState } from "react";
import Icon from "@/components/ui/icon";

const NECKLACE = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/fc54a6f9-9ff3-44dc-a30b-953afa86629a.jpg";
const IMG_5 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/edde2ddc-7544-43fe-a21c-9098d343e42b.jpg";

const PRODUCTS = [
  { id: 1, name: "Колье «Изумрудная ночь»", price: 12900, img: NECKLACE },
  { id: 2, name: "Серьги «Лесная фея»", price: 8500, img: EARRINGS },
  { id: 3, name: "Кольцо «Лунный свет»", price: 9800, img: IMG_3 },
  { id: 4, name: "Браслет «Тёмный янтарь»", price: 6200, img: IMG_5 },
];

const GOLD_BTN: React.CSSProperties = {
  background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px",
  fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif",
  transition: "background 0.2s",
};

export function SharedFooter() {
  return (
    <footer style={{ background: "#1C1B1D", borderTop: "1px solid #3D3B3E", padding: "48px 0 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 600, color: "#C6A43F", marginBottom: "12px" }}>Черный бархат</div>
            <p style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", marginBottom: "16px" }}>Украшения ручной работы. Сделано с любовью и изумрудом.</p>
            <div style={{ fontSize: "14px", color: "#9A9690" }}>© 2026 Черный бархат</div>
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Каталог</div>
            {["Кольца", "Серьги", "Колье", "Браслеты"].map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: "14px", color: "#9A9690", textDecoration: "none", marginBottom: "10px", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Помощь</div>
            {["Доставка и оплата", "Возврат", "Частые вопросы", "Политика конфиденциальности"].map(l => (
              <a key={l} href="#" style={{ display: "block", fontSize: "14px", color: "#9A9690", textDecoration: "none", marginBottom: "10px", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#E6E3DD", marginBottom: "16px" }}>Контакты</div>
            {["+7 (999) 123-45-67", "info@chernybarhat.ru", "Москва, ул. Тверская, 12"].map(c => (
              <div key={c} style={{ fontSize: "14px", color: "#9A9690", marginBottom: "10px" }}>{c}</div>
            ))}
            <div style={{ display: "flex", gap: "14px", marginTop: "16px", flexWrap: "wrap" }}>
              {[{ icon: "Send", label: "Telegram" }, { icon: "Instagram", label: "Instagram" }, { icon: "Users", label: "VK" }, { icon: "MessageCircle", label: "WhatsApp" }].map(s => (
                <a key={s.label} href="#" title={s.label} style={{ color: "#9A9690", display: "flex", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
                ><Icon name={s.icon} size={22} /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-payments">
          {["Visa", "Mastercard", "МИР", "SBP", "Оплата частями"].map(p => (
            <span key={p} style={{ fontSize: "13px", color: "#9A9690", background: "#2F2E30", padding: "4px 12px", borderRadius: "6px", border: "1px solid #3D3B3E" }}>{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function NotFoundPage() {
  const [slide, setSlide] = useState(0);
  const maxSlide = PRODUCTS.length - 3;

  return (
    <div style={{ minHeight: "100vh", background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "70px" }} className="flex items-center justify-between px-10">
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", textDecoration: "none" }}>
          Черный бархат
        </a>
        <div className="flex items-center gap-5">
          <a href="/" style={{ fontSize: "14px", color: "#9A9690", textDecoration: "none", marginRight: "8px", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
          >← На главную</a>
          <button className="header-icon-btn"><Icon name="Search" size={22} /></button>
          <button className="header-icon-btn"><Icon name="Heart" size={22} /></button>
          <button className="header-icon-btn"><Icon name="ShoppingBag" size={22} /></button>
        </div>
      </header>
      <div style={{ height: "1px", background: "#C6A43F" }} />

      {/* BREADCRUMBS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 32px", width: "100%", boxSizing: "border-box" }}>
        <nav style={{ fontSize: "14px", color: "#9A9690" }}>
          <a href="/" style={{ color: "#9A9690", textDecoration: "none" }}>Главная</a>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span>404</span>
        </nav>
      </div>

      {/* MAIN */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 32px 120px" }}>

        {/* Velvet pillow visual */}
        <div style={{ position: "relative", width: "120px", height: "120px", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "80px", lineHeight: 1, filter: "drop-shadow(0 0 16px rgba(198,164,63,0.3))", userSelect: "none" }}>💎</div>
          {[
            { top: "4px", right: "6px", bottom: undefined, left: undefined, fontSize: "22px" },
            { bottom: "4px", left: "8px", top: undefined, right: undefined, fontSize: "16px" },
            { top: "12px", left: "2px", bottom: undefined, right: undefined, fontSize: "12px" },
          ].map((s, i) => (
            <span key={i} style={{ position: "absolute", top: s.top, right: s.right, bottom: s.bottom, left: s.left, fontSize: s.fontSize, opacity: 0.35, userSelect: "none" }}>💎</span>
          ))}
        </div>

        {/* 404 */}
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "100px", fontWeight: 700, lineHeight: 0.9, marginBottom: "24px", letterSpacing: "0.06em", background: "linear-gradient(180deg, #C6A43F 0%, #2F2E30 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          404
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#E6E3DD", textAlign: "center", marginBottom: "20px", maxWidth: "600px", lineHeight: "1.35" }}>
          О нет... Кажется, это украшение уже кто-то купил.
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: "16px", color: "#9A9690", textAlign: "center", maxWidth: "600px", lineHeight: "1.75", marginBottom: "40px" }}>
          Страница, которую вы ищете, не существует или была перемещена.<br />
          Но у нас есть и другие сокровища — загляните в каталог.
        </p>

        {/* CTA */}
        <a href="/" style={{ textDecoration: "none" }}>
          <button
            style={{ ...GOLD_BTN, height: "48px", width: "240px", fontSize: "15px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#d4b04a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#C6A43F")}
          >
            Вернуться на главную
          </button>
        </a>
        <a href="#" style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none", marginTop: "20px", transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Или перейти в каталог →
        </a>

        {/* PRODUCTS SLIDER */}
        <div style={{ width: "100%", maxWidth: "880px", marginTop: "80px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: "#E6E3DD", textAlign: "center", marginBottom: "32px" }}>
            А вот эти украшения точно в наличии
          </h3>
          <div style={{ position: "relative", padding: "0 24px" }}>
            <button
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              disabled={slide === 0}
              style={{ position: "absolute", left: "-4px", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "none", border: "none", color: slide === 0 ? "#3D3B3E" : "#C6A43F", fontSize: "24px", cursor: slide === 0 ? "default" : "pointer", padding: "8px", lineHeight: 1 }}
            >←</button>
            <div style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "20px", transition: "transform 0.35s ease", transform: `translateX(calc(-${slide} * (calc(100% / 3 + 7px))))` }}>
                {PRODUCTS.map(p => (
                  <div key={p.id} style={{ flex: "0 0 calc(33.333% - 14px)", background: "#2F2E30", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                    <img src={p.img} alt={p.name} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px", border: "1px solid #3D3B3E" }} />
                    <div style={{ fontSize: "14px", color: "#E6E3DD", textAlign: "center", lineHeight: "1.4" }}>{p.name}</div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#00A86B" }}>{p.price.toLocaleString("ru-RU")} ₽</div>
                    <button style={{ background: "#00A86B", color: "#fff", border: "none", borderRadius: "6px", height: "32px", padding: "0 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#009660")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#00A86B")}
                    >В корзину</button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSlide(s => Math.min(maxSlide, s + 1))}
              disabled={slide >= maxSlide}
              style={{ position: "absolute", right: "-4px", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "none", border: "none", color: slide >= maxSlide ? "#3D3B3E" : "#C6A43F", fontSize: "24px", cursor: slide >= maxSlide ? "default" : "pointer", padding: "8px", lineHeight: 1 }}
            >→</button>
          </div>
        </div>
      </main>

      <SharedFooter />
    </div>
  );
}