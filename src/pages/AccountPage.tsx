import { useState } from "react";
import Icon from "@/components/ui/icon";

const NECKLACE_IMG = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/1b7e4c0d-d337-4647-8e76-be500d3fe9fe.jpg";
const EARRINGS_IMG = "https://cdn.poehali.dev/projects/8049325e-c399-45a6-8b2e-39991e4aa03a/files/793e6332-4a70-4e80-ada9-eb1fcbcaf98c.jpg";

type Section = "overview" | "orders" | "favorites" | "reviews" | "profile" | "password" | "subscriptions";
type AuthMode = "login" | "register" | "reset";

const FAVORITES = [
  { id: 1, name: "Колье «Изумрудная ночь»", art: "EM-42", price: 12900, img: NECKLACE_IMG },
  { id: 2, name: "Серьги «Лесная фея»", art: "LF-07", price: 8500, img: EARRINGS_IMG },
  { id: 3, name: "Браслет «Тёмный янтарь»", art: "DA-19", price: 6200, img: NECKLACE_IMG },
  { id: 4, name: "Кольцо «Лунный свет»", art: "ML-33", price: 9800, img: EARRINGS_IMG },
  { id: 5, name: "Брошь «Ночная бабочка»", art: "NB-08", price: 7400, img: NECKLACE_IMG },
];

const ORDERS = [
  { id: "ЧБ-1234", date: "15.05.2026", sum: 12900, status: "Доставлен" },
  { id: "ЧБ-1230", date: "01.04.2026", sum: 8500, status: "Доставлен" },
  { id: "ЧБ-1218", date: "10.03.2026", sum: 21400, status: "Доставлен" },
  { id: "ЧБ-1205", date: "14.02.2026", sum: 6200, status: "Отменён" },
  { id: "ЧБ-1198", date: "25.01.2026", sum: 15800, status: "Доставлен" },
  { id: "ЧБ-1191", date: "12.01.2026", sum: 9200, status: "Доставлен" },
  { id: "ЧБ-1185", date: "28.12.2025", sum: 11700, status: "Доставлен" },
  { id: "ЧБ-1177", date: "05.12.2025", sum: 4900, status: "Доставлен" },
  { id: "ЧБ-1170", date: "19.11.2025", sum: 8500, status: "Доставлен" },
  { id: "ЧБ-1162", date: "01.11.2025", sum: 13200, status: "Доставлен" },
  { id: "ЧБ-1155", date: "15.10.2025", sum: 7800, status: "Доставлен" },
  { id: "ЧБ-1140", date: "02.09.2025", sum: 3700, status: "Доставлен" },
];

const REVIEWS = [
  { id: 1, product: "Колье «Изумрудная ночь»", rating: 5, date: "15 мая 2026", text: "Заказала колье в подарок подруге. Она была в восторге! Качество отменное, упаковка бережная.", img: NECKLACE_IMG },
  { id: 2, product: "Серьги «Лесная фея»", rating: 5, date: "01 апреля 2026", text: "Невероятно изящные серьги. Ношу каждый день уже месяц, выглядят как новые.", img: EARRINGS_IMG },
  { id: 3, product: "Браслет «Тёмный янтарь»", rating: 4, date: "10 марта 2026", text: "Очень понравился, но застёжка немного тугая. В остальном всё идеально.", img: null },
];

function statusColor(status: string) {
  if (status === "Доставлен" || status === "Отправлен") return "#00A86B";
  if (status === "В обработке") return "#C6A43F";
  return "#9A9690";
}

const INPUT_STYLE: React.CSSProperties = {
  width: "100%", height: "48px", background: "#2F2E30", border: "1px solid #3D3B3E",
  borderRadius: "8px", color: "#E6E3DD", fontSize: "15px", padding: "0 14px",
  fontFamily: "'Golos Text', sans-serif", outline: "none", boxSizing: "border-box",
};

const GOLD_BTN: React.CSSProperties = {
  background: "#C6A43F", color: "#1C1B1D", border: "none", borderRadius: "8px",
  fontWeight: 700, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s",
};

const OUTLINE_BTN: React.CSSProperties = {
  background: "transparent", color: "#C6A43F", border: "1px solid #C6A43F", borderRadius: "8px",
  fontWeight: 600, cursor: "pointer", fontFamily: "'Golos Text', sans-serif", transition: "background 0.2s",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 500, color: "#E6E3DD", marginBottom: "24px" }}>
      {children}
    </h2>
  );
}

function OverviewSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Widgets */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {[
          { icon: "Package", label: "Всего заказов", value: "12", sub: "на сумму 84 500 ₽" },
          { icon: "Clock", label: "Активных заказов", value: "2", sub: "в обработке / в доставке" },
          { icon: "Heart", label: "В избранном", value: "5", sub: "товаров" },
        ].map(w => (
          <div key={w.label} style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <Icon name={w.icon} size={32} style={{ color: "#C6A43F" }} />
            <div style={{ fontSize: "14px", color: "#9A9690" }}>{w.label}</div>
            <div style={{ fontSize: "28px", fontWeight: 700, color: "#E6E3DD", lineHeight: 1 }}>{w.value}</div>
            <div style={{ fontSize: "12px", color: "#9A9690" }}>{w.sub}</div>
          </div>
        ))}
      </div>

      {/* Last order */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <Icon name="Package" size={20} style={{ color: "#C6A43F" }} />
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Последний заказ</span>
        </div>
        <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#C6A43F" }}>№ЧБ-1234</span>
            <span style={{ fontSize: "14px", color: "#9A9690" }}>15 мая 2026</span>
          </div>
          <span style={{ fontSize: "14px", color: "#00A86B", fontWeight: 600 }}>Доставлен</span>
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>12 900 ₽</span>
          <button style={{ ...OUTLINE_BTN, padding: "8px 16px", fontSize: "14px" }}>Перейти к заказу →</button>
        </div>
      </div>

      {/* Favorites preview */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <Icon name="Heart" size={20} style={{ color: "#C6A43F" }} />
          <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Избранное</span>
        </div>
        <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "8px" }}>
          {FAVORITES.slice(0, 4).map(f => (
            <div key={f.id} style={{ minWidth: "140px", background: "#2F2E30", borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <img src={f.img} alt={f.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px", border: "1px solid #3D3B3E" }} />
              <div style={{ fontSize: "13px", color: "#E6E3DD", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#00A86B" }}>{f.price.toLocaleString("ru-RU")} ₽</div>
              <button style={{ ...GOLD_BTN, height: "28px", fontSize: "12px", padding: "0 10px" }}>В корзину</button>
            </div>
          ))}
        </div>
        <button style={{ ...OUTLINE_BTN, marginTop: "12px", padding: "8px 16px", fontSize: "14px" }}>Перейти в избранное →</button>
      </div>
    </div>
  );
}

function OrdersSection() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(ORDERS.length / perPage);
  const visible = ORDERS.slice((page - 1) * perPage, page * perPage);

  if (selectedOrder) {
    const order = ORDERS.find(o => o.id === selectedOrder)!;
    return (
      <div>
        <button onClick={() => setSelectedOrder(null)} style={{ ...OUTLINE_BTN, padding: "8px 16px", fontSize: "14px", marginBottom: "20px" }}>← Назад к заказам</button>
        <SectionTitle>Заказ №{order.id}</SectionTitle>
        <div style={{ background: "#2F2E30", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div><div style={{ fontSize: "12px", color: "#9A9690" }}>Дата</div><div style={{ fontSize: "15px", color: "#E6E3DD" }}>{order.date}</div></div>
            <div><div style={{ fontSize: "12px", color: "#9A9690" }}>Статус</div><div style={{ fontSize: "15px", color: statusColor(order.status), fontWeight: 600 }}>{order.status}</div></div>
          </div>
          <div style={{ borderTop: "1px solid #3D3B3E", paddingTop: "16px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#E6E3DD", marginBottom: "12px" }}>Состав заказа</div>
            {[{ name: "Колье «Изумрудная ночь»", qty: 1, price: 12900 }, { name: "Серьги «Лесная фея»", qty: 1, price: 8500 }].map(item => (
              <div key={item.name} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #3D3B3E" }}>
                <span style={{ fontSize: "14px", color: "#E6E3DD" }}>{item.name} — {item.qty} шт.</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#E6E3DD" }}>{item.price.toLocaleString("ru-RU")} ₽</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #3D3B3E", paddingTop: "16px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#E6E3DD", marginBottom: "12px" }}>Доставка</div>
            <div style={{ fontSize: "14px", color: "#9A9690" }}>Способ: Курьером по Москве — 350 ₽</div>
            <div style={{ fontSize: "14px", color: "#9A9690", marginTop: "4px" }}>Адрес: Москва, ул. Тверская, д. 12, кв. 45</div>
          </div>
          <div style={{ borderTop: "1px solid #3D3B3E", paddingTop: "16px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#E6E3DD", marginBottom: "12px" }}>Оплата</div>
            <div style={{ fontSize: "14px", color: "#9A9690" }}>Способ: Картой онлайн</div>
            <div style={{ fontSize: "14px", color: "#9A9690", marginTop: "4px" }}>Дата оплаты: {order.date}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #3D3B3E", paddingTop: "16px" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD" }}>Итого: {(order.sum + 350).toLocaleString("ru-RU")} ₽</span>
            <button style={{ ...GOLD_BTN, height: "44px", padding: "0 24px", fontSize: "15px" }}>Повторить заказ</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle>Мои заказы</SectionTitle>
      <div style={{ background: "#2F2E30", borderRadius: "12px", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr 1fr", background: "#3D3B3E", padding: "12px 20px" }}>
          {["№ заказа", "Дата", "Сумма", "Статус", "Действие"].map(h => (
            <span key={h} style={{ fontSize: "13px", color: "#9A9690", fontWeight: 600 }}>{h}</span>
          ))}
        </div>
        {visible.map((order, i) => (
          <div
            key={order.id}
            style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr 1fr", padding: "14px 20px", borderTop: i === 0 ? "none" : "1px solid #3D3B3E", transition: "background 0.15s", alignItems: "center" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#363535")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ fontSize: "14px", color: "#E6E3DD", fontWeight: 600 }}>№{order.id}</span>
            <span style={{ fontSize: "14px", color: "#9A9690" }}>{order.date}</span>
            <span style={{ fontSize: "14px", color: "#E6E3DD" }}>{order.sum.toLocaleString("ru-RU")} ₽</span>
            <span style={{ fontSize: "14px", color: statusColor(order.status), fontWeight: 600 }}>{order.status}</span>
            <button onClick={() => setSelectedOrder(order.id)} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0, textAlign: "left" }}>Подробнее</button>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "20px", justifyContent: "center" }}>
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "18px", cursor: "pointer" }}>←</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{ width: "32px", height: "32px", borderRadius: "6px", border: "none", background: p === page ? "#C6A43F" : "transparent", color: p === page ? "#1C1B1D" : "#C6A43F", fontWeight: 700, cursor: "pointer", fontSize: "14px" }}
            >{p}</button>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "18px", cursor: "pointer" }}>→</button>
        </div>
      )}
    </div>
  );
}

function FavoritesSection() {
  const [items, setItems] = useState(FAVORITES);
  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id));

  if (items.length === 0) {
    return (
      <div>
        <SectionTitle>Избранное</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "60px 0" }}>
          <Icon name="Heart" size={60} style={{ color: "#9A9690" }} />
          <div style={{ fontSize: "16px", color: "#E6E3DD", fontWeight: 600 }}>В избранном пока пусто</div>
          <div style={{ fontSize: "14px", color: "#9A9690" }}>Добавляйте товары, которые вам понравились</div>
          <button style={{ ...OUTLINE_BTN, height: "44px", padding: "0 24px", fontSize: "14px" }}>Перейти в каталог</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle>Избранное ({items.length} товаров)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {items.map(item => (
          <div key={item.id} style={{ background: "#2F2E30", borderRadius: "12px", padding: "16px", position: "relative", display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              onClick={() => remove(item.id)}
              style={{ position: "absolute", top: "12px", right: "12px", background: "none", border: "none", cursor: "pointer", color: "#9A9690", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
              onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
            ><Icon name="Trash2" size={16} /></button>
            <img src={item.img} alt={item.name} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "8px", border: "1px solid #3D3B3E" }} />
            <div style={{ fontSize: "15px", color: "#E6E3DD", fontWeight: 500 }}>{item.name}</div>
            <div style={{ fontSize: "12px", color: "#9A9690" }}>Арт. {item.art}</div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#00A86B" }}>{item.price.toLocaleString("ru-RU")} ₽</div>
            <button style={{ ...GOLD_BTN, height: "40px", fontSize: "14px" }}>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewsSection() {
  const [items, setItems] = useState(REVIEWS);
  return (
    <div>
      <SectionTitle>Мои отзывы ({items.length})</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {items.map(r => (
          <div key={r.id} style={{ background: "#2F2E30", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: "16px", color: "#E6E3DD", fontWeight: 600 }}>{r.product}</div>
                <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} style={{ color: i < r.rating ? "#C6A43F" : "#3D3B3E", fontSize: "18px" }}>★</span>
                  ))}
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#9A9690" }}>{r.date}</span>
            </div>
            <div style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6" }}>{r.text}</div>
            {r.img && <img src={r.img} alt="" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px", border: "1px solid #3D3B3E" }} />}
            <div style={{ display: "flex", gap: "16px" }}>
              <button style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0 }}>Редактировать</button>
              <button onClick={() => setItems(prev => prev.filter(x => x.id !== r.id))} style={{ background: "none", border: "none", color: "#9A9690", fontSize: "14px", cursor: "pointer", padding: 0 }}>Удалить</button>
            </div>
          </div>
        ))}
        <button style={{ ...OUTLINE_BTN, height: "44px", padding: "0 24px", fontSize: "14px", alignSelf: "flex-start" }}>Написать отзыв</button>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div>
      <SectionTitle>Мои данные</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
        {[
          { label: "Имя", value: "Анна", type: "text" },
          { label: "Фамилия", value: "Ковалёва", type: "text" },
          { label: "Email", value: "anna@example.ru", type: "email" },
          { label: "Телефон", value: "+7 (999) 123-45-67", type: "tel" },
        ].map(f => (
          <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", color: "#9A9690" }}>{f.label}</label>
            <input defaultValue={f.value} type={f.type} style={INPUT_STYLE} />
          </div>
        ))}
      </div>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "18px", fontWeight: 600, color: "#E6E3DD", marginBottom: "16px" }}>Сохранённые адреса</div>
        {[
          { addr: "Москва, ул. Тверская, д. 12, кв. 45", main: true },
          { addr: "Москва, ул. Арбат, д. 5, кв. 12", main: false },
        ].map((a, i) => (
          <div key={i} style={{ background: "#2F2E30", borderRadius: "8px", padding: "14px 16px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "14px", color: "#9A9690" }}>
              {a.addr} {a.main && <span style={{ color: "#C6A43F", fontSize: "12px" }}>(основной)</span>}
            </span>
            <div style={{ display: "flex", gap: "12px" }}>
              <button style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "13px", cursor: "pointer" }}>Редактировать</button>
              <button style={{ background: "none", border: "none", color: "#9A9690", fontSize: "13px", cursor: "pointer" }}>Удалить</button>
            </div>
          </div>
        ))}
        <button style={{ ...OUTLINE_BTN, height: "40px", padding: "0 16px", fontSize: "13px" }}>+ Добавить новый адрес</button>
      </div>
      <button style={{ ...GOLD_BTN, height: "48px", width: "200px", fontSize: "15px" }}>Сохранить изменения</button>
    </div>
  );
}

function PasswordSection() {
  return (
    <div>
      <SectionTitle>Смена пароля</SectionTitle>
      <div style={{ maxWidth: "440px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {["Текущий пароль", "Новый пароль", "Подтверждение нового пароля"].map(label => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontSize: "13px", color: "#9A9690" }}>{label}</label>
            <input type="password" placeholder="••••••••" style={INPUT_STYLE} />
          </div>
        ))}
        <div style={{ fontSize: "12px", color: "#9A9690", lineHeight: "1.5" }}>
          Пароль должен содержать минимум 8 символов, включать буквы и цифры.
        </div>
        <button style={{ ...GOLD_BTN, height: "48px", width: "200px", fontSize: "15px", marginTop: "8px" }}>Сменить пароль</button>
      </div>
    </div>
  );
}

function SubscriptionsSection() {
  const [subs, setSubs] = useState([
    { id: 1, label: "Получать новости о новых коллекциях", checked: true },
    { id: 2, label: "Получать скидочные промокоды", checked: true },
    { id: 3, label: "Получать новые статьи из блога", checked: false },
  ]);
  const toggle = (id: number) => setSubs(prev => prev.map(s => s.id === id ? { ...s, checked: !s.checked } : s));

  return (
    <div>
      <SectionTitle>Подписки</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
        {subs.map(s => (
          <label key={s.id} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={s.checked}
              onChange={() => toggle(s.id)}
              style={{ accentColor: "#C6A43F", width: "18px", height: "18px" }}
            />
            <span style={{ fontSize: "14px", color: "#E6E3DD" }}>{s.label}</span>
          </label>
        ))}
      </div>
      <div style={{ fontSize: "14px", color: "#9A9690", marginBottom: "6px" }}>
        Рассылка приходит на: <strong style={{ color: "#E6E3DD" }}>anna@example.ru</strong>
      </div>
      <button style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0, marginBottom: "24px" }}>
        Изменить email
      </button>
      <div>
        <button style={{ ...GOLD_BTN, height: "48px", width: "200px", fontSize: "15px" }}>Сохранить настройки</button>
      </div>
    </div>
  );
}

const MENU_ITEMS = [
  { id: "overview", label: "Обзор", icon: "LayoutDashboard" },
  { id: "orders", label: "Мои заказы", icon: "Package" },
  { id: "favorites", label: "Избранное", icon: "Heart" },
  { id: "reviews", label: "Мои отзывы", icon: "Star" },
  { id: "profile", label: "Мои данные", icon: "User" },
  { id: "password", label: "Смена пароля", icon: "Lock" },
  { id: "subscriptions", label: "Подписки", icon: "Mail" },
  { id: "logout", label: "Выйти", icon: "LogOut" },
] as const;

function LogoutModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <>
      <div onClick={onCancel} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200 }} />
      <div className="fav-popup" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 201, width: "380px", background: "#2F2E30", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", padding: "32px 28px", textAlign: "center" }}>
        <Icon name="LogOut" size={40} style={{ color: "#C6A43F", marginBottom: "16px" }} />
        <div style={{ fontSize: "18px", fontWeight: 700, color: "#E6E3DD", marginBottom: "12px" }}>Выйти из аккаунта?</div>
        <div style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.6", marginBottom: "24px" }}>
          Вы уверены, что хотите выйти? Вы можете вернуться в любой момент.
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button onClick={onCancel} style={{ ...OUTLINE_BTN, flex: 1, height: "44px", fontSize: "14px" }}>Отмена</button>
          <button onClick={onConfirm} style={{ ...GOLD_BTN, flex: 1, height: "44px", fontSize: "14px" }}>Да, выйти</button>
        </div>
      </div>
    </>
  );
}

function AuthModal({ onClose, isAuthed, onAuth }: { onClose: () => void; isAuthed: boolean; onAuth: () => void }) {
  const [mode, setMode] = useState<AuthMode>("login");
  const [resetSent, setResetSent] = useState(false);

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200 }} />
      <div className="fav-popup" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 201, width: "420px", background: "#2F2E30", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", padding: "36px 32px" }}>
        <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "18px", background: "none", border: "none", color: "#9A9690", fontSize: "20px", cursor: "pointer" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#C6A43F")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9A9690")}
        >✕</button>

        {mode === "login" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", marginBottom: "4px" }}>Вход в личный кабинет</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#9A9690" }}>Email</label>
              <input type="email" placeholder="anna@example.ru" style={INPUT_STYLE} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#9A9690" }}>Пароль</label>
              <input type="password" placeholder="••••••••" style={INPUT_STYLE} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input type="checkbox" style={{ accentColor: "#C6A43F" }} />
                <span style={{ fontSize: "13px", color: "#9A9690" }}>Запомнить меня</span>
              </label>
              <button onClick={() => setMode("reset")} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "13px", cursor: "pointer", padding: 0 }}>Забыли пароль?</button>
            </div>
            <button onClick={onAuth} style={{ ...GOLD_BTN, height: "48px", fontSize: "15px" }}>Войти</button>
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "13px", color: "#9A9690" }}>или войти с помощью</span>
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "10px" }}>
                {["Telegram", "VK"].map(s => (
                  <button key={s} style={{ background: "transparent", border: "1px solid #C6A43F", borderRadius: "8px", color: "#C6A43F", padding: "8px 20px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</button>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "14px", color: "#9A9690" }}>
              Нет аккаунта?{" "}
              <button onClick={() => setMode("register")} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0 }}>Зарегистрироваться</button>
            </div>
          </div>
        )}

        {mode === "register" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", marginBottom: "4px" }}>Регистрация</h2>
            {[
              { label: "Имя", type: "text", placeholder: "Анна" },
              { label: "Email", type: "email", placeholder: "anna@example.ru" },
              { label: "Телефон", type: "tel", placeholder: "+7 (999) 123-45-67" },
              { label: "Пароль", type: "password", placeholder: "••••••••" },
              { label: "Подтверждение пароля", type: "password", placeholder: "••••••••" },
            ].map(f => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <label style={{ fontSize: "12px", color: "#9A9690" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} style={{ ...INPUT_STYLE, height: "44px" }} />
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Я согласен с условиями публичной оферты", "Подписаться на новости и скидки"].map(l => (
                <label key={l} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#C6A43F" }} />
                  <span style={{ fontSize: "13px", color: "#9A9690" }}>{l}</span>
                </label>
              ))}
            </div>
            <button onClick={onAuth} style={{ ...GOLD_BTN, height: "48px", fontSize: "15px" }}>Зарегистрироваться</button>
            <div style={{ textAlign: "center", fontSize: "14px", color: "#9A9690" }}>
              Уже есть аккаунт?{" "}
              <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0 }}>Войти</button>
            </div>
          </div>
        )}

        {mode === "reset" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 500, color: "#E6E3DD", marginBottom: "4px" }}>Восстановление пароля</h2>
            <div style={{ fontSize: "14px", color: "#9A9690", lineHeight: "1.5" }}>
              Введите ваш email — мы отправим ссылку для сброса пароля.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "13px", color: "#9A9690" }}>Email</label>
              <input type="email" placeholder="anna@example.ru" style={INPUT_STYLE} />
            </div>
            {resetSent && (
              <div style={{ fontSize: "14px", color: "#00A86B", background: "rgba(0,168,107,0.1)", borderRadius: "8px", padding: "12px 16px" }}>
                Ссылка для сброса пароля отправлена на ваш email.
              </div>
            )}
            <button onClick={() => setResetSent(true)} style={{ ...GOLD_BTN, height: "48px", fontSize: "15px" }}>Отправить ссылку для сброса</button>
            <button onClick={() => setMode("login")} style={{ background: "none", border: "none", color: "#C6A43F", fontSize: "14px", cursor: "pointer", padding: 0, textAlign: "center" }}>← Вернуться ко входу</button>
          </div>
        )}
      </div>
    </>
  );
}

export default function AccountPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [section, setSection] = useState<Section>("overview");
  const [showLogout, setShowLogout] = useState(false);

  const handleAuth = () => {
    setIsAuthed(true);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsAuthed(false);
    setShowLogout(false);
    setSection("overview");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111010", color: "#E6E3DD", fontFamily: "'Golos Text', sans-serif" }}>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} isAuthed={isAuthed} onAuth={handleAuth} />}
      {showLogout && <LogoutModal onConfirm={handleLogout} onCancel={() => setShowLogout(false)} />}

      {/* HEADER */}
      <header style={{ background: "#1C1B1D", height: "80px", position: "relative", zIndex: 50 }} className="flex items-center justify-between px-10">
        <div style={{ flex: "0 0 200px" }}>
          <a href="/" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 600, color: "#C6A43F", letterSpacing: "0.08em", textDecoration: "none", whiteSpace: "nowrap" }}>
            Черный бархат
          </a>
        </div>
        <nav className="flex items-center gap-8">
          {["Каталог", "О магазине", "Доставка и оплата", "Блог", "Контакты"].map(item => (
            <a key={item} href="#" style={{ fontSize: "14px", color: "#E6E3DD", textDecoration: "none", letterSpacing: "0.04em" }}>{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-5" style={{ flex: "0 0 200px", justifyContent: "flex-end" }}>
          <button title="Поиск" style={{ background: "none", border: "none", color: "#9A9690", cursor: "pointer" }}><Icon name="Search" size={22} /></button>
          <button title="Избранное" style={{ background: "none", border: "none", color: "#9A9690", cursor: "pointer" }}><Icon name="Heart" size={22} /></button>
          <button title="Корзина" style={{ background: "none", border: "none", color: "#9A9690", cursor: "pointer" }}><Icon name="ShoppingBag" size={22} /></button>
          <button
            title={isAuthed ? "Личный кабинет" : "Войти"}
            onClick={() => !isAuthed && setShowAuth(true)}
            style={{ background: "none", border: "none", color: isAuthed ? "#C6A43F" : "#9A9690", cursor: "pointer" }}
          ><Icon name="User" size={22} /></button>
        </div>
      </header>
      <div style={{ height: "1px", background: "#C6A43F" }} />

      {/* BREADCRUMBS */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 32px" }}>
        <nav style={{ fontSize: "14px", color: "#9A9690" }}>
          <a href="/" style={{ color: "#9A9690", textDecoration: "none" }}>Главная</a>
          <span style={{ margin: "0 8px", color: "#C6A43F" }}>→</span>
          <span style={{ color: "#E6E3DD" }}>Личный кабинет</span>
        </nav>
      </div>

      {/* MAIN */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px 80px" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 500, color: "#E6E3DD", marginBottom: "8px" }}>
          Личный кабинет
        </h1>
        {isAuthed && (
          <div style={{ fontSize: "18px", color: "#9A9690", marginBottom: "32px" }}>Добро пожаловать, Анна!</div>
        )}

        {!isAuthed ? (
          /* NOT AUTHED */
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "80px 0", textAlign: "center" }}>
            <Icon name="User" size={64} style={{ color: "#9A9690" }} />
            <div style={{ fontSize: "20px", color: "#E6E3DD", fontWeight: 600 }}>Войдите или зарегистрируйтесь</div>
            <div style={{ fontSize: "15px", color: "#9A9690" }}>Чтобы управлять заказами, избранным и личными данными</div>
            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <button onClick={() => setShowAuth(true)} style={{ ...GOLD_BTN, height: "48px", padding: "0 32px", fontSize: "15px" }}>Войти</button>
              <button onClick={() => { setShowAuth(true); }} style={{ ...OUTLINE_BTN, height: "48px", padding: "0 32px", fontSize: "15px" }}>Зарегистрироваться</button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
            {/* SIDEBAR */}
            <div style={{ width: "280px", flexShrink: 0, background: "#2F2E30", borderRadius: "12px", padding: "16px" }}>
              {MENU_ITEMS.map(item => {
                const isActive = section === item.id;
                const isLogout = item.id === "logout";
                return (
                  <button
                    key={item.id}
                    onClick={() => isLogout ? setShowLogout(true) : setSection(item.id as Section)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", gap: "12px",
                      height: "48px", padding: "0 12px", borderRadius: "8px", border: "none", cursor: "pointer",
                      background: isActive ? "#3D3B3E" : "transparent",
                      color: isActive ? "#C6A43F" : (isLogout ? "#9A9690" : "#E6E3DD"),
                      marginBottom: "4px", fontFamily: "'Golos Text', sans-serif", fontSize: "15px",
                      transition: "background 0.15s, color 0.15s", textAlign: "left",
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = "#3D3B3E";
                        e.currentTarget.style.color = "#C6A43F";
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = isLogout ? "#9A9690" : "#E6E3DD";
                      }
                    }}
                  >
                    <Icon name={item.icon} size={20} style={{ flexShrink: 0 }} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CONTENT */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {section === "overview" && <OverviewSection />}
              {section === "orders" && <OrdersSection />}
              {section === "favorites" && <FavoritesSection />}
              {section === "reviews" && <ReviewsSection />}
              {section === "profile" && <ProfileSection />}
              {section === "password" && <PasswordSection />}
              {section === "subscriptions" && <SubscriptionsSection />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}