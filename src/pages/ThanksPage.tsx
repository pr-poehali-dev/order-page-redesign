import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SharedFooter } from "./NotFoundPage";

const NECKLACE = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";
const IMG_3 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/fc54a6f9-9ff3-44dc-a30b-953afa86629a.jpg";
const IMG_5 = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/edde2ddc-7544-43fe-a21c-9098d343e42b.jpg";

const ORDER_ITEMS = [
  { name: "Колье «Изумрудная ночь»", qty: 1, price: 12900 },
  { name: "Серьги «Лесная фея»", qty: 1, price: 8500 },
];
const DELIVERY = 350;
const TOTAL = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0) + DELIVERY;

const CROSS_SELL = [
  { id: 1, name: "Браслет «Тёмный янтарь»", price: 6200, img: IMG_5 },
  { id: 2, name: "Кольцо «Лунный свет»", price: 9800, img: IMG_3 },
  { id: 3, name: "Брошь «Ночная бабочка»", price: 7400, img: IMG_3 },
  { id: 4, name: "Подвеска «Утренняя звезда»", price: 5600, img: IMG_5 },
];

const GOLD_BTN: React.CSSProperties = {
  background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px",
  fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif",
  transition: "background 0.2s",
};

export default function ThanksPage() {
  const [slide, setSlide] = useState(0);
  const maxSlide = CROSS_SELL.length - 3;

  return (
    <div style={{ minHeight: "100vh", background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "70px" }} className="flex items-center justify-between px-10">
        <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", textDecoration: "none" }}>
          Черный бархат
        </a>
        <div className="flex items-center gap-5">
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
          <span>Корзина</span>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span>Оформление</span>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span style={{ color: "#E6E3DD" }}>Спасибо</span>
        </nav>
      </div>

      {/* MAIN */}
      <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px", width: "100%", boxSizing: "border-box" }}>

        {/* SUCCESS BLOCK */}
        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start", marginTop: "40px", flexWrap: "wrap" }}>

          {/* LEFT: success info */}
          <div style={{ flex: "1 1 480px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>

            {/* Icon */}
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(0,168,107,0.12)", border: "2px solid #00A86B", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Check" size={36} style={{ color: "#00A86B" }} />
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#E6E3DD", margin: 0, lineHeight: "1.2" }}>
              Спасибо за заказ!
            </h1>

            {/* Order number */}
            <div style={{ fontSize: "18px", color: "#C6A43F", fontWeight: 600 }}>
              Номер вашего заказа: #ЧБ-1245
            </div>

            {/* Confirmation text */}
            <p style={{ fontSize: "16px", color: "#9A9690", lineHeight: "1.75", maxWidth: "500px", margin: 0 }}>
              Письмо с подтверждением отправлено на ваш email.<br />
              Мы свяжемся с вами в ближайшее время для уточнения деталей доставки.
            </p>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
              {[
                { icon: "CheckCircle", text: "Заказ принят в обработку", done: true },
                { icon: "Package", text: "Сборка и упаковка украшений", done: false },
                { icon: "Truck", text: "Передача курьерской службе", done: false },
                { icon: "Home", text: "Доставка по адресу", done: false },
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Icon name={step.icon} size={18} style={{ color: step.done ? "#00A86B" : "#3D3B3E", flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", color: step.done ? "#E6E3DD" : "#9A9690" }}>{step.text}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
              <a href="/" style={{ textDecoration: "none" }}>
                <button
                  style={{ ...GOLD_BTN, height: "48px", width: "240px", fontSize: "15px" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#d4b04a")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#C6A43F")}
                >
                  Вернуться в каталог
                </button>
              </a>
              <a href="/account" style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Отслеживать заказ в личном кабинете →
              </a>
            </div>
          </div>

          {/* RIGHT: order summary */}
          <div style={{ flex: "0 0 380px", background: "#2F2E30", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <Icon name="Package" size={20} style={{ color: "#C6A43F" }} />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Состав заказа</span>
            </div>

            {/* Items */}
            {ORDER_ITEMS.map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid #3D3B3E" }}>
                <div>
                  <div style={{ fontSize: "14px", color: "#E6E3DD" }}>{item.name}</div>
                  <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>{item.qty} шт.</div>
                </div>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#E6E3DD" }}>{(item.price * item.qty).toLocaleString("ru-RU")} ₽</span>
              </div>
            ))}

            {/* Delivery */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "1px solid #3D3B3E" }}>
              <div>
                <div style={{ fontSize: "14px", color: "#E6E3DD" }}>Доставка</div>
                <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>Курьером по Москве</div>
              </div>
              <span style={{ fontSize: "14px", color: "#E6E3DD" }}>{DELIVERY} ₽</span>
            </div>

            {/* Total */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#E6E3DD" }}>Итого</span>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#E6E3DD" }}>{TOTAL.toLocaleString("ru-RU")} ₽</span>
            </div>

            {/* Payment & status */}
            <div style={{ background: "#1C1B1D", borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "13px", color: "#9A9690" }}>Способ оплаты</span>
                <span style={{ fontSize: "13px", color: "#E6E3DD" }}>Картой онлайн</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#9A9690" }}>Статус заказа</span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#C6A43F", background: "rgba(198,164,63,0.1)", padding: "2px 10px", borderRadius: "20px" }}>В обработке</span>
              </div>
            </div>

            {/* Delivery img preview */}
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={NECKLACE} alt="Колье" style={{ width: "56px", height: "56px", objectFit: "cover", borderRadius: "6px", border: "1px solid #3D3B3E" }} />
              <img src={EARRINGS} alt="Серьги" style={{ width: "56px", height: "56px", objectFit: "cover", borderRadius: "6px", border: "1px solid #3D3B3E" }} />
            </div>
          </div>
        </div>

        {/* CROSS-SELL */}
        <div style={{ marginTop: "80px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: "#E6E3DD", marginBottom: "32px" }}>
            Вы можете полюбить
          </h3>
          <div style={{ position: "relative", padding: "0 24px" }}>
            <button
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              disabled={slide === 0}
              style={{ position: "absolute", left: "-4px", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "none", border: "none", color: slide === 0 ? "#3D3B3E" : "#C6A43F", fontSize: "24px", cursor: slide === 0 ? "default" : "pointer", padding: "8px", lineHeight: 1 }}
            >←</button>
            <div style={{ overflow: "hidden" }}>
              <div style={{ display: "flex", gap: "20px", transition: "transform 0.35s ease", transform: `translateX(calc(-${slide} * (calc(100% / 3 + 7px))))` }}>
                {CROSS_SELL.map(p => (
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
