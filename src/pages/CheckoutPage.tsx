import { useState } from "react";
import Icon from "@/components/ui/icon";

const NECKLACE_IMG_FAV = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS_IMG_FAV = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";

const INITIAL_FAVORITES = [
  { id: 1, name: "Колье «Изумрудная ночь»", art: "EM-42", price: 12900, img: NECKLACE_IMG_FAV },
  { id: 2, name: "Серьги «Лесная фея»", art: "LF-07", price: 8500, img: EARRINGS_IMG_FAV },
  { id: 3, name: "Браслет «Тёмный янтарь»", art: "DA-19", price: 6200, img: NECKLACE_IMG_FAV },
];

function FavoritesPopup({ onClose }: { onClose: () => void }) {
  const [items, setItems] = useState(INITIAL_FAVORITES);

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100 }}
      />

      {/* POPUP */}
      <div className="fav-popup" style={{ position: "fixed", top: "88px", right: "40px", zIndex: 101, width: "380px", background: "#2F2E30", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)", overflow: "hidden" }}>

        {/* HEADER */}
        <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #3D3B3E", display: "flex", alignItems: "center", gap: "10px" }}>
          <Icon name="Heart" size={20} style={{ color: "#C6A43F" }} />
          <span style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "18px", fontWeight: 700, color: "#E6E3DD", flex: 1 }}>
            Избранное
          </span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "#9A9690", cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: "4px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
          >✕</button>
        </div>

        {items.length === 0 ? (
          /* EMPTY STATE */
          <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
            <Icon name="Heart" size={60} style={{ color: "#9A9690" }} />
            <div style={{ fontSize: "16px", color: "#E6E3DD", fontWeight: 600 }}>В избранном пока пусто</div>
            <div style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.5" }}>
              Добавляйте товары, которые вам понравились, и они появятся здесь.
            </div>
            <button
              onClick={onClose}
              style={{ marginTop: "8px", height: "40px", width: "200px", background: "transparent", border: "1px solid #C6A43F", borderRadius: "8px", color: "#C6A43F", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(198,164,63,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <>
            {/* ITEMS LIST */}
            <div style={{ maxHeight: "340px", overflowY: "auto" }}>
              {items.map(item => (
                <div
                  key={item.id}
                  className="fav-item"
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", borderBottom: "1px solid #3D3B3E", transition: "background 0.2s", cursor: "default" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#3D3B3E")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "60px", height: "60px", borderRadius: "8px", objectFit: "cover", flexShrink: 0, border: "1px solid #3D3B3E" }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "14px", color: "#E6E3DD", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>Арт. {item.art}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "6px" }}>
                      <span style={{ fontSize: "16px", fontWeight: 700, color: "#00A86B" }}>
                        {item.price.toLocaleString("ru-RU")} ₽
                      </span>
                      <button style={{ height: "32px", padding: "0 12px", background: "#00A86B", color: "#1C1B1D", border: "none", borderRadius: "6px", fontSize: "12px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", transition: "background 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#009960")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#00A86B")}
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    title="Убрать из избранного"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", flexShrink: 0, color: "#C6A43F", transition: "color 0.2s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ff6b6b"; e.currentTarget.style.transform = "scale(1.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#C6A43F"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <Icon name="Heart" size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div style={{ padding: "14px 20px", borderTop: "1px solid #3D3B3E" }}>
              <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "10px" }}>
                Всего в избранном: <strong style={{ color: "#E6E3DD" }}>{items.length} {items.length === 1 ? "товар" : items.length < 5 ? "товара" : "товаров"}</strong>
              </div>
              <button
                style={{ width: "100%", height: "44px", background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s, transform 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#d4b04a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#C6A43F"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Перейти в избранное
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const NECKLACE_IMG = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS_IMG = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";

const INITIAL_CART = [
  { id: 1, name: "Колье «Изумрудная ночь»", art: "EM-42", price: 12900, qty: 1, img: NECKLACE_IMG },
  { id: 2, name: "Серьги «Лесная фея»", art: "LF-07", price: 8500, qty: 2, img: EARRINGS_IMG },
];

function pluralItems(n: number) {
  if (n === 1) return "товар";
  if (n >= 2 && n <= 4) return "товара";
  return "товаров";
}

function CartPopup({ onClose }: { onClose: () => void }) {
  const [items, setItems] = useState(INITIAL_CART);

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id));
  const changeQty = (id: number, delta: number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      {/* OVERLAY */}
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100 }} />

      {/* POPUP */}
      <div className="fav-popup" style={{ position: "fixed", top: "88px", right: "40px", zIndex: 101, width: "400px", background: "#2F2E30", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)", overflow: "hidden" }}>

        {/* HEADER */}
        <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid #3D3B3E", display: "flex", alignItems: "center", gap: "10px" }}>
          <Icon name="ShoppingBag" size={20} style={{ color: "#C6A43F" }} />
          <span style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "18px", fontWeight: 700, color: "#E6E3DD", flex: 1 }}>
            Корзина
          </span>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", color: "#9A9690", cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: "4px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
          >✕</button>
        </div>

        {items.length === 0 ? (
          /* EMPTY STATE */
          <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", textAlign: "center" }}>
            <Icon name="ShoppingBag" size={60} style={{ color: "#9A9690" }} />
            <div style={{ fontSize: "16px", color: "#E6E3DD", fontWeight: 600 }}>Корзина пуста</div>
            <div style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.5" }}>
              Добавьте товары из каталога, чтобы оформить заказ.
            </div>
            <button
              onClick={onClose}
              style={{ marginTop: "8px", height: "40px", width: "200px", background: "transparent", border: "1px solid #C6A43F", borderRadius: "8px", color: "#C6A43F", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(198,164,63,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Перейти в каталог
            </button>
          </div>
        ) : (
          <>
            {/* ITEMS */}
            <div style={{ maxHeight: "360px", overflowY: "auto" }}>
              {items.map(item => (
                <div
                  key={item.id}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 20px", borderBottom: "1px solid #3D3B3E", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#3D3B3E")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ width: "64px", height: "64px", borderRadius: "8px", objectFit: "cover", flexShrink: 0, border: "1px solid #3D3B3E" }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "14px", color: "#E6E3DD", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>Арт. {item.art}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "8px" }}>
                      {/* QTY CONTROLS */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0", border: "1px solid #4A4848", borderRadius: "6px", overflow: "hidden" }}>
                        <button
                          onClick={() => changeQty(item.id, -1)}
                          style={{ width: "28px", height: "28px", background: "transparent", border: "none", color: "#E6E3DD", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#4A4848")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >−</button>
                        <span style={{ minWidth: "28px", textAlign: "center", fontSize: "14px", color: "#E6E3DD", fontWeight: 600 }}>{item.qty}</span>
                        <button
                          onClick={() => changeQty(item.id, +1)}
                          style={{ width: "28px", height: "28px", background: "transparent", border: "none", color: "#E6E3DD", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.15s" }}
                          onMouseEnter={e => (e.currentTarget.style.background = "#4A4848")}
                          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >+</button>
                      </div>
                      <span style={{ fontSize: "16px", fontWeight: 700, color: "#00A86B" }}>
                        {(item.price * item.qty).toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    title="Удалить"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", flexShrink: 0, color: "#9A9690", transition: "color 0.2s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#ff6b6b"; e.currentTarget.style.transform = "scale(1.15)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#9A9690"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div style={{ padding: "16px 20px", borderTop: "1px solid #3D3B3E" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ fontSize: "14px", color: "#9A9690" }}>
                  Товаров: <strong style={{ color: "#E6E3DD" }}>{totalQty} {pluralItems(totalQty)}</strong>
                </span>
                <span style={{ fontSize: "14px", color: "#9A9690" }}>Итого:</span>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "14px" }}>
                <span style={{ fontSize: "22px", fontWeight: 700, color: "#E6E3DD" }}>
                  {subtotal.toLocaleString("ru-RU")} ₽
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={onClose}
                  style={{ flex: 1, height: "44px", background: "transparent", border: "1px solid #C6A43F", borderRadius: "8px", color: "#C6A43F", fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(198,164,63,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  В корзину
                </button>
                <button
                  style={{ flex: 2, height: "44px", background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s, transform 0.15s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#d4b04a"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#C6A43F"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

const deliveryOptions = [
  { id: "courier_moscow", label: "Курьером по Москве", price: 350, days: "1-2 дня" },
  { id: "cdek_pickup", label: "СДЭК до пункта выдачи", price: 450, days: "2-4 дня" },
  { id: "cdek_courier", label: "СДЭК курьером", price: 550, days: "2-4 дня" },
  { id: "post_russia", label: "Почта России", price: 290, days: "5-10 дней" },
  { id: "self", label: "Самовывоз", price: 0, days: "сегодня, после 14:00" },
];

const paymentOptions = [
  { id: "card_online", label: "Картой онлайн", sub: "Visa, Mastercard, МИР (безопасный платёж)" },
  { id: "cash", label: "Наличными при получении", sub: "" },
  { id: "card_on_delivery", label: "Картой при получении", sub: "" },
  { id: "installment", label: "Оплата частями", sub: "Долями / SplitPay (без переплаты)" },
];

export default function CheckoutPage() {
  const [delivery, setDelivery] = useState("courier_moscow");
  const [payment, setPayment] = useState("card_online");
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [selfPickup, setSelfPickup] = useState(false);
  const [agreeOffer, setAgreeOffer] = useState(false);
  const [agreeData, setAgreeData] = useState(false);
  const [comment, setComment] = useState("");
  const [favOpen, setFavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const favCount = INITIAL_FAVORITES.length;
  const cartCount = INITIAL_CART.reduce((s, i) => s + i.qty, 0);

  const deliveryCost = deliveryOptions.find(d => d.id === delivery)?.price ?? 350;
  const total = 21400 + deliveryCost;

  return (
    <div className="min-h-screen" style={{ background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif" }}>

      {/* FAVORITES POPUP */}
      {favOpen && <FavoritesPopup onClose={() => setFavOpen(false)} />}

      {/* CART POPUP */}
      {cartOpen && <CartPopup onClose={() => setCartOpen(false)} />}

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "80px", position: "relative", zIndex: 50 }} className="flex items-center justify-between px-10">
        {/* LOGO */}
        <div style={{ flex: "0 0 200px" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
            Черный бархат
          </span>
        </div>

        {/* NAV CENTER */}
        <nav className="flex items-center gap-8">
          {["Каталог", "О магазине", "Доставка и оплата", "Блог", "Контакты"].map(item => (
            <a key={item} href="#" className="header-nav-link">{item}</a>
          ))}
        </nav>

        {/* ICONS RIGHT */}
        <div className="flex items-center gap-5" style={{ flex: "0 0 200px", justifyContent: "flex-end" }}>
          {/* Search */}
          <button title="Поиск" className="header-icon-btn">
            <Icon name="Search" size={22} />
          </button>

          {/* Favorites */}
          <button
            title="Избранное"
            className="header-icon-btn"
            onClick={() => { setFavOpen(v => !v); setCartOpen(false); }}
            style={{ position: "relative", color: favCount > 0 ? "#C6A43F" : "#9A9690" }}
          >
            <Icon name="Heart" size={22} />
            {favCount > 0 && (
              <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "17px", height: "17px", background: "#E53935", borderRadius: "50%", fontSize: "10px", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
                {favCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            title="Корзина"
            className="header-icon-btn"
            onClick={() => { setCartOpen(v => !v); setFavOpen(false); }}
            style={{ position: "relative", color: cartCount > 0 ? "#C6A43F" : "#9A9690" }}
          >
            <Icon name="ShoppingBag" size={22} />
            {cartCount > 0 && (
              <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "17px", height: "17px", background: "#E53935", borderRadius: "50%", fontSize: "10px", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>
      <div style={{ height: "1px", background: "#C6A43F" }} />

      {/* BREADCRUMBS */}
      <div className="px-8 py-4" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <nav style={{ fontSize: "14px", color: "#9A9690" }}>
          <span>Главная</span>
          <span className="mx-2" style={{ color: "#C6A43F" }}>→</span>
          <span>Корзина</span>
          <span className="mx-2" style={{ color: "#C6A43F" }}>→</span>
          <span style={{ color: "#E6E3DD" }}>Оформление заказа</span>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 500, color: "#E6E3DD", marginBottom: "40px", letterSpacing: "0.02em" }}>
          Оформление заказа
        </h1>

        <div className="flex gap-8" style={{ alignItems: "flex-start" }}>

          {/* LEFT COLUMN — FORM */}
          <div style={{ flex: "0 0 60%", display: "flex", flexDirection: "column", gap: "32px" }}>

            {/* STEP 1 */}
            <section className="checkout-section">
              <h2 className="step-title">1. Контактные данные</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input className="checkout-input" placeholder="Имя *" type="text" />
                <input className="checkout-input" placeholder="Email *" type="email" />
                <input className="checkout-input" placeholder="Телефон *" type="tel" />
              </div>
              <label className="checkout-checkbox">
                <input type="checkbox" checked={subscribe} onChange={e => setSubscribe(e.target.checked)} />
                <span>Подписаться на новости и скидки</span>
              </label>
            </section>

            {/* STEP 2 */}
            <section className="checkout-section">
              <h2 className="step-title">2. Адрес доставки</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <select className="checkout-input checkout-select">
                  <option>Россия</option>
                  <option>Беларусь</option>
                  <option>Казахстан</option>
                  <option>Другое</option>
                </select>
                <input className="checkout-input" placeholder="Город *" type="text" />
                <input className="checkout-input" placeholder="Улица *" type="text" />
                <div className="flex gap-3">
                  <input className="checkout-input" placeholder="Дом *" type="text" style={{ flex: 1 }} />
                  <input className="checkout-input" placeholder="Квартира / офис" type="text" style={{ flex: 1 }} />
                </div>
                <input className="checkout-input" placeholder="Индекс" type="text" />
              </div>
              <label className="checkout-checkbox">
                <input type="checkbox" checked={selfPickup} onChange={e => setSelfPickup(e.target.checked)} />
                <span>Самовывоз (бесплатно) — Москва, ул. Тверская, 12</span>
              </label>
            </section>

            {/* STEP 3 */}
            <section className="checkout-section">
              <h2 className="step-title">3. Способ доставки</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {deliveryOptions.map(opt => (
                  <label
                    key={opt.id}
                    className="radio-option"
                    style={{ borderColor: delivery === opt.id ? "#C6A43F" : "#3D3B3E", background: delivery === opt.id ? "rgba(198,164,63,0.07)" : "#2F2E30" }}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={opt.id}
                      checked={delivery === opt.id}
                      onChange={() => setDelivery(opt.id)}
                      style={{ accentColor: "#C6A43F" }}
                    />
                    <div style={{ flex: 1 }}>
                      <div className="flex justify-between items-center">
                        <span style={{ color: "#E6E3DD", fontWeight: 500 }}>{opt.label}</span>
                        <span style={{ color: "#C6A43F", fontWeight: 600 }}>
                          {opt.price === 0 ? "Бесплатно" : `${opt.price} ₽`}
                        </span>
                      </div>
                      <div style={{ fontSize: "13px", color: "#9A9690", marginTop: "2px" }}>{opt.days}</div>
                    </div>
                  </label>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "#9A9690", marginTop: "12px" }}>
                * Стоимость доставки за пределы МКАД может отличаться.
              </p>
            </section>

            {/* STEP 4 */}
            <section className="checkout-section">
              <h2 className="step-title">4. Способ оплаты</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {paymentOptions.map(opt => (
                  <label
                    key={opt.id}
                    className="radio-option"
                    style={{ borderColor: payment === opt.id ? "#C6A43F" : "#3D3B3E", background: payment === opt.id ? "rgba(198,164,63,0.07)" : "#2F2E30" }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={opt.id}
                      checked={payment === opt.id}
                      onChange={() => setPayment(opt.id)}
                      style={{ accentColor: "#C6A43F" }}
                    />
                    <div>
                      <div style={{ color: "#E6E3DD", fontWeight: 500 }}>{opt.label}</div>
                      {opt.sub && <div style={{ fontSize: "13px", color: "#9A9690", marginTop: "2px" }}>{opt.sub}</div>}
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex gap-3 mt-4 flex-wrap">
                {["Visa", "MC", "МИР", "СБП", "Долями"].map(ico => (
                  <div key={ico} style={{ height: "28px", padding: "0 10px", background: "#2F2E30", border: "1px solid #3D3B3E", borderRadius: "6px", display: "flex", alignItems: "center", fontSize: "11px", color: "#9A9690", fontWeight: 600 }}>
                    {ico}
                  </div>
                ))}
              </div>
            </section>

            {/* STEP 5 */}
            <section className="checkout-section">
              <h2 className="step-title">5. Комментарий к заказу</h2>
              <textarea
                className="checkout-input"
                style={{ height: "100px", resize: "none", paddingTop: "14px", lineHeight: "1.5" }}
                placeholder="Напишите что-то важное для мастера (например, пожелания по упаковке, гравировке и т.д.)"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
            </section>

            {/* STEP 6 */}
            <section className="checkout-section">
              <h2 className="step-title">6. Согласие</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label className="checkout-checkbox">
                  <input type="checkbox" checked={agreeOffer} onChange={e => setAgreeOffer(e.target.checked)} />
                  <span>
                    Я согласен с условиями{" "}
                    <a href="#" style={{ color: "#C6A43F", textDecoration: "underline" }}>публичной оферты</a>
                  </span>
                </label>
                <label className="checkout-checkbox">
                  <input type="checkbox" checked={agreeData} onChange={e => setAgreeData(e.target.checked)} />
                  <span>
                    Я даю согласие на{" "}
                    <a href="#" style={{ color: "#C6A43F", textDecoration: "underline" }}>обработку персональных данных</a>
                  </span>
                </label>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN — ORDER SUMMARY */}
          <div style={{ flex: "0 0 40%", position: "sticky", top: "24px" }}>
            <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "24px", border: "1px solid #3D3B3E" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#E6E3DD", marginBottom: "20px" }}>Ваш заказ</h2>

              {/* Products */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="flex gap-3 items-center">
                  <img src={NECKLACE_IMG} alt="Колье" style={{ width: "56px", height: "56px", borderRadius: "8px", objectFit: "cover", border: "1px solid #3D3B3E" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "14px", color: "#E6E3DD", fontWeight: 500, lineHeight: "1.3" }}>Колье «Изумрудная ночь»</div>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>Арт. EM-42</div>
                    <div className="flex justify-between items-center mt-1">
                      <span style={{ fontSize: "12px", color: "#9A9690" }}>1 шт.</span>
                      <span style={{ fontSize: "14px", color: "#C6A43F", fontWeight: 600 }}>12 900 ₽</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={EARRINGS_IMG} alt="Серьги" style={{ width: "56px", height: "56px", borderRadius: "8px", objectFit: "cover", border: "1px solid #3D3B3E" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "14px", color: "#E6E3DD", fontWeight: 500, lineHeight: "1.3" }}>Серьги «Лесная фея»</div>
                    <div style={{ fontSize: "12px", color: "#9A9690", marginTop: "2px" }}>Арт. LF-07</div>
                    <div className="flex justify-between items-center mt-1">
                      <span style={{ fontSize: "12px", color: "#9A9690" }}>1 шт.</span>
                      <span style={{ fontSize: "14px", color: "#C6A43F", fontWeight: 600 }}>8 500 ₽</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: "1px", background: "#3D3B3E", margin: "20px 0" }} />

              {/* PROMO */}
              <div>
                <button
                  onClick={() => setPromoOpen(!promoOpen)}
                  style={{ background: "none", border: "none", color: "#9A9690", fontSize: "14px", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  Есть промокод?
                  <span style={{ transition: "transform 0.2s", display: "inline-block", transform: promoOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                </button>
                {promoOpen && (
                  <div className="flex gap-2 mt-3">
                    <input
                      className="checkout-input"
                      style={{ flex: 1, height: "40px", fontSize: "14px" }}
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                    />
                    <button style={{ background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px", padding: "0 16px", fontWeight: 600, cursor: "pointer", fontSize: "14px" }}>
                      Применить
                    </button>
                  </div>
                )}
              </div>

              <div style={{ height: "1px", background: "#3D3B3E", margin: "20px 0" }} />

              {/* TOTALS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="flex justify-between" style={{ fontSize: "14px", color: "#9A9690" }}>
                  <span>Товары (2 шт)</span>
                  <span>21 400 ₽</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: "14px", color: "#9A9690" }}>
                  <span>Скидка</span>
                  <span>–0 ₽</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: "14px", color: "#9A9690" }}>
                  <span>Доставка</span>
                  <span>{deliveryCost === 0 ? "Бесплатно" : `${deliveryCost} ₽`}</span>
                </div>
              </div>

              <div style={{ height: "1px", background: "#3D3B3E", margin: "16px 0" }} />

              <div className="flex justify-between items-center">
                <span style={{ fontSize: "16px", color: "#E6E3DD", fontWeight: 600 }}>Итого к оплате</span>
                <span style={{ fontSize: "24px", fontWeight: 700, color: "#00A86B" }}>
                  {total.toLocaleString("ru-RU")} ₽
                </span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <button
              className="checkout-btn"
              style={{ width: "100%", marginTop: "16px" }}
            >
              Оформить заказ на {total.toLocaleString("ru-RU")} ₽
            </button>

            {/* SECURITY BLOCK */}
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Lock" size={16} style={{ color: "#C6A43F" }} />
                <span style={{ fontSize: "13px", color: "#E6E3DD", fontWeight: 500 }}>Безопасная оплата</span>
              </div>
              <p style={{ fontSize: "12px", color: "#9A9690", lineHeight: "1.5" }}>
                Ваши данные защищены. Платёж проходит через защищённый шлюз.
              </p>
              <div className="flex gap-2 justify-center mt-3 flex-wrap">
                {["SSL", "Visa Secure", "MC ID Check", "3D Secure"].map(b => (
                  <div key={b} style={{ height: "24px", padding: "0 8px", background: "#2F2E30", border: "1px solid #3D3B3E", borderRadius: "4px", display: "flex", alignItems: "center", fontSize: "10px", color: "#9A9690", fontWeight: 600 }}>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACTS */}
            <div style={{ textAlign: "center", marginTop: "24px", padding: "16px", background: "#1C1B1D", borderRadius: "8px", border: "1px solid #3D3B3E" }}>
              <p style={{ fontSize: "14px", color: "#9A9690", marginBottom: "8px" }}>Остались вопросы? Напишите нам</p>
              <div className="flex flex-col gap-1">
                <a href="mailto:info@chernybarhat.ru" style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none" }}>
                  ✉️ info@chernybarhat.ru
                </a>
                <a href="tel:+79991234567" style={{ fontSize: "14px", color: "#C6A43F", textDecoration: "none" }}>
                  📞 +7 (999) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#1C1B1D", borderTop: "1px solid #3D3B3E", paddingTop: "48px", paddingBottom: "24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", marginBottom: "40px" }}>

            {/* Col 1 */}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#C6A43F", fontWeight: 600, marginBottom: "8px" }}>
                Черный бархат
              </div>
              <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "4px" }}>Украшения ручной работы</div>
              <div style={{ fontSize: "14px", color: "#9A9690" }}>© 2026 Все права защищены</div>
            </div>

            {/* Col 2 */}
            <div>
              <div className="footer-col-title">Каталог</div>
              {["Кольца", "Серьги", "Колье", "Браслеты"].map(item => (
                <a key={item} href="#" className="footer-link">{item}</a>
              ))}
            </div>

            {/* Col 3 */}
            <div>
              <div className="footer-col-title">Помощь</div>
              {["Доставка и оплата", "Возврат", "Частые вопросы", "Политика конфиденциальности"].map(item => (
                <a key={item} href="#" className="footer-link">{item}</a>
              ))}
            </div>

            {/* Col 4 */}
            <div>
              <div className="footer-col-title">Контакты</div>
              <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "4px" }}>+7 (999) 123-45-67</div>
              <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "4px" }}>info@chernybarhat.ru</div>
              <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "16px" }}>Москва, ул. Тверская, 12</div>
              <div className="flex gap-3">
                {[
                  { name: "Send", label: "TG" },
                  { name: "Instagram", label: "IG" },
                  { name: "MessageCircle", label: "VK" },
                  { name: "Phone", label: "WA" },
                ].map(s => (
                  <a
                    key={s.label}
                    href="#"
                    className="social-icon"
                    title={s.label}
                  >
                    <Icon name={s.name} fallback="Circle" size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Payment icons row */}
          <div style={{ borderTop: "1px solid #3D3B3E", paddingTop: "24px" }}>
            <div className="flex gap-3 justify-center flex-wrap">
              {["Visa", "Mastercard", "МИР", "СБП", "Оплата частями"].map(ico => (
                <div key={ico} style={{ height: "28px", padding: "0 12px", background: "#2F2E30", border: "1px solid #3D3B3E", borderRadius: "6px", display: "flex", alignItems: "center", fontSize: "11px", color: "#9A9690", fontWeight: 600 }}>
                  {ico}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}