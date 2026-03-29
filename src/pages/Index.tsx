import { useState } from "react";
import Icon from "@/components/ui/icon";

const BABY_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/3bcc81f3-9286-46f1-9c7f-72f0126d781d.jpg";
const VEGGIES_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/98bb5a82-4f9b-42e8-939b-5a1d5cb6af10.jpg";
const BOWL_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/ed070bb8-16cb-4e66-a8d2-f5e83e5d709d.jpg";

function CheckItem({ text }: { text: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <label className="check-item" onClick={() => setChecked(!checked)}>
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span className="check-box">
        {checked && <Icon name="Check" size={13} color="white" />}
      </span>
      <span
        className="check-text font-body text-[15px] leading-relaxed"
        style={{
          color: checked ? "var(--text-light)" : "var(--text-dark)",
          textDecoration: checked ? "line-through" : "none",
          transition: "all 0.2s",
        }}
      >
        {text}
      </span>
    </label>
  );
}

const veggieTable = [
  { emoji: "🥕", name: "Морковь", age: "6 мес.", taste: "Сладкий", pair: "Тыква, кабачок", tip: "Варить 20 мин" },
  { emoji: "🥦", name: "Брокколи", age: "6 мес.", taste: "Нейтральный", pair: "Кабачок, картофель", tip: "На пару 12 мин" },
  { emoji: "🎃", name: "Тыква", age: "6 мес.", taste: "Сладкий", pair: "Морковь, яблоко", tip: "Запечь 25 мин" },
  { emoji: "🫑", name: "Кабачок", age: "6 мес.", taste: "Нежный", pair: "Брокколи, цв. капуста", tip: "На пару 10 мин" },
  { emoji: "🥔", name: "Картофель", age: "7 мес.", taste: "Нейтральный", pair: "Морковь, брокколи", tip: "Варить 20 мин" },
  { emoji: "🌽", name: "Кукуруза", age: "8 мес.", taste: "Сладкий", pair: "Тыква, морковь", tip: "Варить 30 мин" },
  { emoji: "🥬", name: "Цв. капуста", age: "7 мес.", taste: "Нежный", pair: "Кабачок, картофель", tip: "На пару 15 мин" },
  { emoji: "🫛", name: "Горошек", age: "8 мес.", taste: "Мягкий", pair: "Кабачок, морковь", tip: "Свежий / заморож." },
];

const recipes = [
  {
    emoji: "🥕",
    name: "Морковное пюре",
    color: "#FEF0D8",
    border: "#F5C87A",
    ingredients: ["2 средние моркови", "30–50 мл грудного молока / смеси", "чуть воды для варки"],
    steps: [
      "Морковь очистить и нарезать кружочками",
      "Варить в небольшом кол-ве воды 20 мин до мягкости",
      "Слить воду, пробить блендером",
      "Разбавить молоком до нужной консистенции",
    ],
    note: "С 6 месяцев. Хранить в холодильнике 24 ч.",
  },
  {
    emoji: "🎃",
    name: "Тыквенное пюре",
    color: "#FDE8D8",
    border: "#F0A070",
    ingredients: ["300 г тыквы (мякоть)", "вода для запекания"],
    steps: [
      "Тыкву нарезать кубиками, выложить на противень",
      "Запечь при 180°C 25–30 мин",
      "Остудить, пробить блендером до однородности",
      "При необходимости добавить немного воды",
    ],
    note: "Идеально замораживать порционно в формочках.",
  },
  {
    emoji: "🥦",
    name: "Пюре из брокколи",
    color: "#D8F0E0",
    border: "#70C090",
    ingredients: ["200 г брокколи (соцветия)", "50 мл воды"],
    steps: [
      "Разобрать брокколи на соцветия, промыть",
      "Готовить на пару 12 минут",
      "Пробить блендером с небольшим кол-вом воды",
      "Протереть через сито для однородности",
    ],
    note: "Хранить в холодильнике 24 ч или замораживать.",
  },
  {
    emoji: "🫑",
    name: "Кабачок + морковь",
    color: "#E0F4E8",
    border: "#78C090",
    ingredients: ["1 небольшой кабачок", "1 морковь", "вода"],
    steps: [
      "Овощи очистить и нарезать кубиками",
      "Готовить на пару 15 минут",
      "Пробить блендером до однородности",
      "Развести водой от варки по необходимости",
    ],
    note: "Первое комбинированное пюре — с 7 мес.",
  },
  {
    emoji: "🌽",
    name: "Тыква + яблоко",
    color: "#FFF0D0",
    border: "#F5C060",
    ingredients: ["200 г тыквы", "1 яблоко (сладкое)", "корица — на кончике ножа (с 8 мес.)"],
    steps: [
      "Тыкву запечь 20 мин при 180°C",
      "Яблоко очистить, нарезать, запечь рядом 15 мин",
      "Пробить всё вместе блендером",
      "Подать тёплым",
    ],
    note: "Любимый десерт малышей! С 7 месяцев.",
  },
  {
    emoji: "🥔",
    name: "Картофельное пюре",
    color: "#EEE8F8",
    border: "#A090D0",
    ingredients: ["2 картофелины", "50 мл грудного молока / смеси", "вода для варки"],
    steps: [
      "Картофель очистить, нарезать кубиками",
      "Варить в воде 20 мин",
      "Слить воду, растолочь или пробить блендером",
      "Добавить тёплое молоко, взбить до пышности",
    ],
    note: "Не вводить как первый прикорм — крахмалистый.",
  },
];

const quickIdeas = [
  "🥕 Морковь + кабачок (50/50)",
  "🎃 Тыква + яблоко (фрукт + овощ)",
  "🥦 Брокколи + картофель",
  "🫑 Кабачок + цветная капуста",
  "🥕 Морковь + тыква (яркий микс)",
  "🥬 Горошек + кабачок",
  "🎃 Тыква + морковь + кабачок",
  "🥦 Брокколи + горошек",
  "🥔 Картофель + морковь",
  "🌽 Кукуруза + тыква",
];

const freezeSteps = [
  "Приготовить и остудить пюре до комнатной температуры",
  "Разложить по силиконовым формочкам (кубики ~30 мл)",
  "Накрыть пищевой плёнкой и поставить в морозильник",
  "Через 4–6 часов извлечь кубики и переложить в пакет",
  "Подписать пакет: название + дата",
  "Хранить при −18°C до 3 месяцев",
  "Размораживать только в холодильнике или на водяной бане",
  "Повторная заморозка — запрещена!",
];

const mistakes = [
  "Добавлять соль и сахар в пюре для малышей",
  "Вводить сразу несколько новых продуктов",
  "Давать слишком горячее или холодное пюре",
  "Пропускать этап знакомства (начинать с 0.5–1 ч.л.)",
  "Использовать микроволновку для разогрева",
  "Хранить замороженное пюре дольше 3 месяцев",
  "Повторно замораживать уже размороженное пюре",
  "Сравнивать малыша с другими — каждый ребёнок уникален 🌟",
];

const principles = [
  { emoji: "🌱", text: "Начинать с одного нового продукта в 3–5 дней" },
  { emoji: "🥄", text: "Первая порция — 0.5–1 чайная ложка" },
  { emoji: "👀", text: "Наблюдать за реакцией 2–3 дня после введения" },
  { emoji: "❤️", text: "Не заставлять — еда должна быть радостью" },
  { emoji: "🌡️", text: "Температура пюре — 37–40°C (как молоко)" },
  { emoji: "⏰", text: "Прикорм — первая половина дня" },
  { emoji: "🫙", text: "Только свежие или правильно замороженные овощи" },
];

const cookRules = [
  "Мыть руки и все инструменты перед приготовлением",
  "Использовать только свежие, без дефектов, овощи",
  "Варить на пару — максимум витаминов",
  "Отвар от варки можно использовать для разбавления",
  "Не добавлять соль, сахар и масло до 1 года",
  "Блендер и сито промывать кипятком",
  "Готовое пюре хранить в стерилизованных баночках",
  "Холодильник — не более 24 часов",
  "Разогревать на водяной бане, не в микроволновке",
  "Консистенция — однородная, без комочков",
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--sky-light)" }}>
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">

        {/* ── ОБЛОЖКА ── */}
        <section id="cover" className="guide-page rounded-[32px] overflow-hidden relative" style={{ background: "linear-gradient(160deg, #B8D8F0 0%, #E8F4FB 45%, #C5E8E0 100%)" }}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-25" style={{ background: "var(--peach)", transform: "translate(35%, -35%)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{ background: "var(--lavender)", transform: "translate(-30%, 30%)" }} />
          <div className="relative z-10 px-8 pt-14 pb-12 text-center">
            <div className="font-handwritten text-lg mb-4" style={{ color: "var(--sky-deep)" }}>digital guide</div>
            <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-1" style={{ color: "var(--text-dark)" }}>
              Овощные<br /><em>заготовки</em>
            </h1>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-mid)" }}>для малышей</h2>
            <div className="mt-2 font-body text-base font-medium" style={{ color: "var(--sky-deep)" }}>с 6+ месяцев</div>
            <div className="mt-8 mx-auto w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img src={BABY_IMG} alt="Малыш" className="w-full h-full object-cover" />
            </div>
            <div className="mt-8 flex justify-center gap-5 text-3xl">
              <span>🥕</span><span>🥦</span><span>🎃</span><span>🫑</span><span>🥬</span>
            </div>
            <p className="mt-8 font-body text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Полный гайд по приготовлению и хранению<br />первого прикорма — с любовью
            </p>
            <div className="mt-6 inline-block px-7 py-2.5 rounded-full font-handwritten text-xl" style={{ background: "white", color: "var(--sky-deep)", boxShadow: "0 4px 24px rgba(100,160,200,0.22)" }}>
              @mmdianamama
            </div>
          </div>
        </section>

        {/* ── ВВЕДЕНИЕ ── */}
        <section id="intro" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "var(--sky-light)" }}>👋</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Привет, мамочка!</h2>
          </div>
          <img src={VEGGIES_IMG} alt="Овощи" className="w-full h-44 object-cover rounded-2xl mb-6" />
          <div className="space-y-3 font-body text-[15px] leading-relaxed" style={{ color: "var(--text-mid)" }}>
            <p>Этот гайд создан для тех, кто хочет <strong style={{ color: "var(--text-dark)" }}>кормить малыша вкусно, безопасно и без стресса.</strong></p>
            <p>Здесь всё — от первого знакомства с овощами до заморозки и готовых рецептов. Только проверенная информация, никакой воды.</p>
            <p>Начни с раздела «Принципы» и двигайся в своём темпе 🌿</p>
          </div>
          <div className="mt-6 p-5 rounded-2xl" style={{ background: "var(--sky-light)" }}>
            <div className="font-handwritten text-lg mb-2" style={{ color: "var(--sky-deep)" }}>В гайде ты найдёшь:</div>
            <ul className="space-y-1.5 font-body text-[14px]" style={{ color: "var(--text-mid)" }}>
              {["Таблицу овощей с возрастом введения", "Правила приготовления и хранения", "Гайд по заморозке пошагово", "10 идей для первых заготовок", "6 рецептов — каждый на своей карточке", "Интерактивные чек-листы"].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "var(--sky-deep)" }}>✦</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── ПРИНЦИПЫ ── */}
        <section id="principles" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "#FDE8D8" }}>🌱</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Основные принципы</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Запомни раз и навсегда</p>
          <div className="space-y-3">
            {principles.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: i % 2 === 0 ? "var(--sky-light)" : "#FEF6EE" }}>
                <span className="text-2xl">{p.emoji}</span>
                <p className="font-body text-[15px] leading-snug" style={{ color: "var(--text-dark)" }}>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, var(--mint), var(--sky-light))" }}>
            <div className="font-display text-xl italic" style={{ color: "var(--text-dark)" }}>«Прикорм — это знакомство,</div>
            <div className="font-display text-xl italic" style={{ color: "var(--text-mid)" }}>а не кормление»</div>
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── ПРАВИЛА ── */}
        <section id="rules" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "var(--mint)" }}>🍳</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Правила приготовления</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Отмечай по мере готовности</p>
          <img src={BOWL_IMG} alt="Приготовление" className="w-full h-40 object-cover rounded-2xl mb-6" />
          <div className="space-y-3">
            {cookRules.map((rule, i) => (
              <CheckItem key={i} text={rule} />
            ))}
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── ЗАМОРОЗКА ── */}
        <section id="freeze" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "#DCF0F8" }}>❄️</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Заморозка</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Пошаговая инструкция</p>
          <div className="space-y-3">
            {freezeSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center font-body text-sm font-semibold"
                  style={{ background: "var(--sky-deep)", color: "white" }}>
                  {i + 1}
                </div>
                <div className="flex-1 pt-0.5">
                  <CheckItem text={step} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl flex items-start gap-3" style={{ background: "#DCF0F8" }}>
            <span className="text-xl">💡</span>
            <p className="font-body text-sm" style={{ color: "var(--text-dark)" }}>
              <strong>Лайфхак:</strong> Заморозь 2–3 вида пюре в один день — сэкономишь время на всю неделю!
            </p>
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── ЧАСТЫЕ ОШИБКИ ── */}
        <section id="mistakes" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "#FDE8E8" }}>⚠️</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Частые ошибки</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Эти ошибки совершают 9 из 10 мам — ты уже знаешь!</p>
          <div className="space-y-3">
            {mistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: "#FFF5F5", border: "1.5px solid #FFD5D5" }}>
                <span className="text-lg">🚫</span>
                <p className="font-body text-[15px]" style={{ color: "var(--text-dark)" }}>{m}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl flex items-start gap-3" style={{ background: "#E8F8EE" }}>
            <span className="text-xl">✅</span>
            <p className="font-body text-sm" style={{ color: "var(--text-dark)" }}>
              <strong>Помни:</strong> Ошибаться — это нормально. Главное — замечать и корректировать. Ты уже молодец! 💛
            </p>
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── 10 ИДЕЙ ── */}
        <section id="ideas" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "var(--peach)" }}>💡</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>10 быстрых заготовок</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Сохрани как план на неделю</p>
          <div className="space-y-3">
            {quickIdeas.map((idea, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: i % 3 === 0 ? "var(--sky-light)" : i % 3 === 1 ? "#FEF6EE" : "var(--mint)" }}>
                <div className="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-sm font-body font-semibold"
                  style={{ background: "white", color: "var(--sky-deep)" }}>
                  {i + 1}
                </div>
                <p className="font-body text-[15px]" style={{ color: "var(--text-dark)" }}>{idea}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="font-handwritten text-xl" style={{ color: "var(--sky-deep)" }}>Один новый продукт = одна неделя</div>
            <div className="font-body text-sm mt-1" style={{ color: "var(--text-light)" }}>не торопись, малыш всё успеет попробовать 🌿</div>
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── РЕЦЕПТЫ ── */}
        <section id="recipes">
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl font-light" style={{ color: "var(--text-dark)" }}>Рецепты</h2>
            <p className="font-body text-sm mt-1" style={{ color: "var(--text-light)" }}>Каждый — отдельная карточка</p>
          </div>
          <div className="space-y-6">
            {recipes.map((r, i) => (
              <div key={i} className="recipe-card p-7" style={{ borderColor: r.border }}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: r.color }}>
                    {r.emoji}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold" style={{ color: "var(--text-dark)" }}>{r.name}</h3>
                    <span className="font-body text-xs px-3 py-1 rounded-full" style={{ background: r.color, color: "var(--text-mid)" }}>
                      {r.note.split(".")[0]}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-body text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--text-light)" }}>Ингредиенты</div>
                  <div className="p-3 rounded-xl space-y-1" style={{ background: r.color }}>
                    {r.ingredients.map((ing, j) => (
                      <div key={j} className="flex items-center gap-2 font-body text-[14px]" style={{ color: "var(--text-dark)" }}>
                        <span style={{ color: r.border }}>•</span>{ing}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-body text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--text-light)" }}>Приготовление</div>
                  <div className="space-y-2">
                    {r.steps.map((step, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <div className="w-6 h-6 min-w-[24px] rounded-full flex items-center justify-center text-xs font-body"
                          style={{ background: r.border, color: "white" }}>
                          {j + 1}
                        </div>
                        <p className="font-body text-[14px] leading-snug" style={{ color: "var(--text-mid)" }}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2 p-3 rounded-xl" style={{ background: "var(--sky-light)" }}>
                  <span>💛</span>
                  <p className="font-body text-[13px]" style={{ color: "var(--text-mid)" }}>{r.note}</p>
                </div>
                <div className="mt-4 text-right font-handwritten text-sm" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ТАБЛИЦА ── */}
        <section id="table" className="guide-page rounded-[32px] p-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{ background: "var(--lavender)" }}>📋</div>
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-dark)" }}>Таблица овощей</h2>
          </div>
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Когда вводить и с чем сочетать</p>
          <div className="overflow-hidden rounded-2xl" style={{ border: "1.5px solid var(--sky)" }}>
            <div className="grid grid-cols-5 p-3" style={{ background: "var(--sky-deep)" }}>
              {["Овощ", "Возраст", "Вкус", "Сочетание", "Совет"].map(h => (
                <div key={h} className="font-body text-xs font-medium text-white text-center">{h}</div>
              ))}
            </div>
            {veggieTable.map((v, i) => (
              <div key={i} className="grid grid-cols-5 p-3 veggie-row transition-colors"
                style={{ background: i % 2 === 0 ? "white" : "var(--sky-light)", borderTop: "1px solid #E0EFF8" }}>
                <div className="flex items-center gap-1 font-body text-[13px] font-medium" style={{ color: "var(--text-dark)" }}>
                  <span>{v.emoji}</span>
                  <span className="hidden sm:inline truncate">{v.name}</span>
                </div>
                <div className="font-body text-[12px] text-center self-center" style={{ color: "var(--sky-deep)" }}>{v.age}</div>
                <div className="font-body text-[12px] text-center self-center" style={{ color: "var(--text-mid)" }}>{v.taste}</div>
                <div className="font-body text-[11px] text-center self-center" style={{ color: "var(--text-mid)" }}>{v.pair}</div>
                <div className="font-body text-[11px] text-center self-center" style={{ color: "var(--text-light)" }}>{v.tip}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
        </section>

        {/* ── ФИНАЛ ── */}
        <section className="guide-page rounded-[32px] p-8 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #B8D8F0, #C5E8E0)" }}>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
            style={{ background: "var(--peach)", transform: "translate(30%, -30%)" }} />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="font-display text-3xl font-light mb-3" style={{ color: "var(--text-dark)" }}>Ты справишься!</h2>
            <p className="font-body text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
              Прикорм — это приключение, а не экзамен.<br />
              Доверяй своей интуиции и своему малышу. 💛
            </p>
            <div className="inline-block px-7 py-3 rounded-full font-handwritten text-xl"
              style={{ background: "white", color: "var(--sky-deep)", boxShadow: "0 4px 20px rgba(100,160,200,0.2)" }}>
              @mmdianamama
            </div>
            <div className="mt-4 font-body text-xs" style={{ color: "var(--text-light)" }}>
              Если гайд был полезен — поделись с подругами 🤍
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
