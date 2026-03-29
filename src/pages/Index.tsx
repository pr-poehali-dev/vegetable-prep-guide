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
  { emoji: "🫑", name: "Кабачок", age: "7 мес.", pair: "Творог + мята", tip: "Запечённые лодочки" },
  { emoji: "🥕", name: "Морковь", age: "7 мес.", pair: "Апельсин + имбирь*", tip: "Карамельные дольки" },
  { emoji: "🥦", name: "Брокколи", age: "7 мес.", pair: "Пармезан + лимон", tip: "Хрустящие розочки" },
  { emoji: "🎃", name: "Тыква", age: "7 мес.", pair: "Кокосовое молоко", tip: "Сырники-тыквята" },
  { emoji: "🥔", name: "Картофель", age: "7 мес.", pair: "Лосось + укроп", tip: "Рыбные зразы" },
  { emoji: "🌿", name: "Шпинат", age: "7 мес.", pair: "Банан + овсянка", tip: "Зелёные оладьи" },
  { emoji: "🥬", name: "Цв. капуста", age: "7 мес.", pair: "Куркума + сыр", tip: "Золотые биточки" },
  { emoji: "🍅", name: "Томат", age: "10 мес.", pair: "Рикотта + базилик*", tip: "Начинка в котлетки" },
];

const recipes = [
  {
    emoji: "🥕",
    name: "Морковно-яблочные оладьи",
    color: "#FEF0D8",
    border: "#F5C87A",
    tag: "Сковорода • с 7 мес.",
    ingredients: ["1 морковь", "½ сладкого яблока", "1 яйцо", "3 ст.л. овсяных хлопьев (мелких)", "1 ч.л. сливочного масла"],
    steps: [
      "Морковь и яблоко натереть на мелкой тёрке, отжать сок",
      "Смешать с яйцом и овсянкой, дать постоять 10 мин",
      "Выкладывать ложкой на сковороду с маслом",
      "Жарить на слабом огне под крышкой 3 мин, перевернуть",
      "Довести до готовности ещё 2–3 мин",
    ],
    note: "Натуральная сладость яблока — никакого сахара.",
    freeze: { how: "Остудить, сложить стопкой через пергамент → в зип-пакет", reheat: "Сковорода без масла 2 мин или духовка 160°C / 8 мин", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🥦",
    name: "Брокколи-творожные кусочки",
    color: "#D8F0E0",
    border: "#70C090",
    tag: "Духовка • с 7 мес.",
    ingredients: ["150 г брокколи", "100 г детского творога (5%)", "1 яйцо", "2 ст.л. манки", "20 г мягкого сыра"],
    steps: [
      "Брокколи приготовить на пару 10 мин, мелко порубить ножом",
      "Смешать творог, яйцо, манку, сыр до однородности",
      "Добавить брокколи, перемешать, дать настояться 10 мин",
      "Выложить в силиконовые формочки для маффинов",
      "Запечь при 175°C 22–25 мин до пружинистости",
    ],
    note: "Порционные кубики удобно держать в ручке.",
    freeze: { how: "Полностью остудить → заморозить в формочках → вынуть и в пакет", reheat: "Прямо из морозилки в духовку 175°C / 15 мин", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🎃",
    name: "Тыквенно-рисовые биточки",
    color: "#FDE8D8",
    border: "#F0A070",
    tag: "Духовка • с 7 мес.",
    ingredients: ["150 г тыквы (запечённой)", "4 ст.л. варёного риса", "1 яйцо", "1 ст.л. муки"],
    steps: [
      "Тыкву размять вилкой, рис немного размять — оставить текстуру",
      "Смешать всё вместе, добавить яйцо и муку",
      "Слепить плоские биточки диаметром 4–5 см",
      "Выложить на пергамент",
      "Запечь при 185°C 20 мин, перевернуть, ещё 5 мин",
    ],
    note: "Красивый оранжевый цвет — идеально для самостоятельной еды.",
    freeze: { how: "Слепить сырыми → заморозить в один слой на доске → в пакет", reheat: "Прямо из заморозки в духовку 185°C / 28–30 мин", shelf: "до 3 месяцев" },
  },
  {
    emoji: "🌿",
    name: "Шпинатно-сырные шарики",
    color: "#E8F5E0",
    border: "#88BB70",
    tag: "Духовка • с 7 мес.",
    ingredients: ["80 г свежего шпината", "100 г детского творога", "30 г тёртого сыра", "1 яйцо", "2 ст.л. манки"],
    steps: [
      "Шпинат залить кипятком на 1 мин, отжать и мелко нарубить",
      "Смешать с творогом, сыром, яйцом и манкой",
      "Дать постоять 15 мин, пока манка набухнет",
      "Влажными руками скатать шарики размером с виноградину",
      "Запечь при 180°C 18–20 мин до золотистой корочки",
    ],
    note: "Зелёный цвет — не пугай малыша, сам удивится как вкусно!",
    freeze: { how: "Скатать сырыми → заморозить в один слой → ссыпать в пакет", reheat: "Из заморозки в духовку 180°C / 22–25 мин, не размораживая", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🥔",
    name: "Картофельно-кукурузные палочки",
    color: "#EEE8F8",
    border: "#A090D0",
    tag: "Духовка • с 7 мес.",
    ingredients: ["2 картофелины (отварные)", "3 ст.л. консервированной кукурузы", "1 яйцо", "1 ст.л. кукурузной муки", "петрушка"],
    steps: [
      "Картофель размять, кукурузу слегка размять вилкой",
      "Смешать всё с яйцом, мукой и мелкой зеленью",
      "Руками, смоченными в воде, сформировать палочки 8–10 см",
      "Выложить на пергамент, слегка прижать",
      "Запечь при 190°C 25 мин — должны держать форму",
    ],
    note: "Удобно держать в кулаке — тренирует пинцетный захват.",
    freeze: { how: "Слепить сырыми → заморозить на доске 3 ч → переложить в пакет", reheat: "Прямо из заморозки в духовку 190°C / 30 мин, перевернуть в середине", shelf: "до 3 месяцев" },
  },
  {
    emoji: "🍅",
    name: "Кабачок-фета в мини-маффинах",
    color: "#FFE8E8",
    border: "#E89090",
    tag: "Духовка • с 10 мес.",
    ingredients: ["1 кабачок", "50 г феты (малосольной, обсушить)", "2 яйца", "3 ст.л. муки", "1 ч.л. оливкового масла"],
    steps: [
      "Кабачок натереть, хорошо отжать через полотенце",
      "Фету размять вилкой, смешать с кабачком",
      "Добавить яйца, муку, масло — вымешать",
      "Распределить по силиконовым формочкам для мини-маффинов",
      "Запечь при 180°C 20–22 мин",
    ],
    note: "Фета — с 10 мес., выбирай с минимальным содержанием соли.",
    freeze: { how: "Остудить в формочках → вынуть, сложить в контейнер с крышкой", reheat: "Духовка 175°C / 12–15 мин или микроволновка 1 мин (только разогрев!)", shelf: "до 2 месяцев" },
  },
];

const quickIdeas = [
  { idea: "Свёкла + творог + овсянка", result: "розовые оладьи 💗" },
  { idea: "Горошек + мята + рикотта", result: "нежные шарики 💚" },
  { idea: "Тыква + гречка + яйцо", result: "сытные биточки 🟠" },
  { idea: "Морковь + кокос + банан", result: "сладкие мини-панкейки 🥥" },
  { idea: "Шпинат + творог + чеснок*", result: "зелёные крокеты 🌿" },
  { idea: "Кабачок + лосось + рис", result: "рыбно-овощные котлетки 🐟" },
  { idea: "Картофель + кукуруза + укроп", result: "золотые палочки 🌽" },
  { idea: "Брокколи + яблоко + овсянка", result: "необычные оладьи 🍏" },
  { idea: "Цв. капуста + куркума + яйцо", result: "яркие солнечные шарики ☀️" },
  { idea: "Тыква + сыр + орегано*", result: "итальянские фокаччины 🇮🇹" },
];

const freezeSteps = [
  "Приготовить массу (натереть + отжать + смешать)",
  "Слепить котлетки / палочки / шарики — всю партию сразу",
  "Разложить в один слой на доске, накрыть плёнкой",
  "Заморозить 2–3 часа до твёрдого состояния",
  "Переложить в зип-пакет, подписать: название + дата",
  "Хранить при −18°C до 2 месяцев",
  "Готовить прямо из заморозки: духовка 180°C / 25–30 мин",
  "Не размораживать перед запеканием — так лучше держат форму",
];

const mistakes = [
  "Делать кусочки слишком большими — ребёнок может подавиться",
  "Давать твёрдые сырые овощи — только термически обработанные",
  "Добавлять соль и специи — почки малыша не справятся",
  "Оставлять ребёнка есть без присмотра",
  "Паниковать, если малыш давится — это нормальный рефлекс",
  "Торопить — если отказывается, попробуй другую форму подачи",
  "Жарить на большом кол-ве масла — лучше запекание или пар",
  "Замораживать уже разогретые котлетки — только свежие",
];

const principles = [
  { emoji: "🤌", text: "Кусочки — мягкие, легко давятся двумя пальцами" },
  { emoji: "📏", text: "Размер — с палец малыша, чтобы легко держать" },
  { emoji: "👀", text: "Всегда быть рядом во время еды — без исключений" },
  { emoji: "❤️", text: "Не торопить — переход к кусочкам у каждого свой темп" },
  { emoji: "🔄", text: "Чередовать: сегодня палочки, завтра котлетки" },
  { emoji: "🧂", text: "Соль, сахар, специи — не добавляем до 1 года" },
  { emoji: "❄️", text: "Заготовки замораживать до запекания — экономит время" },
];

const cookRules = [
  "Мыть руки и инструменты перед приготовлением",
  "Овощи отжать от лишней жидкости — масса не расплывётся",
  "Дать манке/муке набухнуть 10–15 мин перед лепкой",
  "Формировать изделия влажными руками — не прилипают",
  "Не добавлять соль и специи детям до 1 года",
  "Для запекания использовать пергамент — без масла",
  "Проверять готовность зубочисткой — выходит сухой",
  "Готовые котлетки остудить перед подачей",
  "Холодильник — не более 2 суток",
  "Замораживать порционно в один слой, потом в пакет",
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
            <h2 className="font-display text-3xl font-light" style={{ color: "var(--text-mid)" }}>палочки, котлетки, оладьи</h2>
            <div className="mt-2 font-body text-base font-medium" style={{ color: "var(--sky-deep)" }}>переход к кусочкам • 8–12 мес.</div>
            <div className="mt-8 mx-auto w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img src={BABY_IMG} alt="Малыш" className="w-full h-full object-cover" />
            </div>
            <div className="mt-8 flex justify-center gap-5 text-3xl">
              <span>🥕</span><span>🥦</span><span>🎃</span><span>🫑</span><span>🥬</span>
            </div>
            <p className="mt-8 font-body text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              Гайд по заготовкам для малышей на этапе<br />перехода к кусочкам — с любовью
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
            <p>Этот гайд — для мам, чей малыш уже готов к <strong style={{ color: "var(--text-dark)" }}>кусочкам, но пюре ещё рано сдавать в архив.</strong></p>
            <p>Здесь — простые заготовки: палочки, котлетки и оладьи из овощей. Готовятся быстро, замораживаются легко, едятся с удовольствием!</p>
            <p>Начни с раздела «Принципы» и двигайся в своём темпе 🌿</p>
          </div>
          <div className="mt-6 p-5 rounded-2xl" style={{ background: "var(--sky-light)" }}>
            <div className="font-handwritten text-lg mb-2" style={{ color: "var(--sky-deep)" }}>В гайде ты найдёшь:</div>
            <ul className="space-y-1.5 font-body text-[14px]" style={{ color: "var(--text-mid)" }}>
              {["Таблицу овощей: с чем сочетать и что приготовить", "Правила приготовления кусочков", "Гайд по заморозке заготовок пошагово", "10 идей комбинаций для быстрого меню", "6 рецептов — каждый на своей карточке", "Интерактивные чек-листы"].map(item => (
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
              <strong>Лайфхак:</strong> В один вечер слепи сразу 3 вида заготовок — хватит на 2 недели питания!
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
            {quickIdeas.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: i % 3 === 0 ? "var(--sky-light)" : i % 3 === 1 ? "#FEF6EE" : "var(--mint)" }}>
                <div className="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-sm font-body font-semibold"
                  style={{ background: "white", color: "var(--sky-deep)" }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-body text-[15px] font-medium" style={{ color: "var(--text-dark)" }}>{item.idea}</p>
                  <p className="font-body text-[13px]" style={{ color: "var(--text-mid)" }}>{item.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="font-handwritten text-xl" style={{ color: "var(--sky-deep)" }}>Одна партия заготовок = спокойная неделя</div>
            <div className="font-body text-sm mt-1" style={{ color: "var(--text-light)" }}>готовь впрок, а не каждый день с нуля 🌿</div>
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
                      {r.tag}
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
                {/* Блок заморозки */}
                <div className="mt-3 rounded-xl overflow-hidden" style={{ border: "1.5px solid #B8D8F0" }}>
                  <div className="flex items-center gap-2 px-4 py-2" style={{ background: "var(--sky-deep)" }}>
                    <span className="text-base">❄️</span>
                    <span className="font-body text-xs font-semibold text-white uppercase tracking-wider">Заморозка</span>
                    <span className="ml-auto font-body text-xs text-white opacity-80">{r.freeze.shelf}</span>
                  </div>
                  <div className="px-4 py-3 space-y-2" style={{ background: "#EEF7FD" }}>
                    <div className="flex items-start gap-2">
                      <span className="font-body text-xs font-medium min-w-fit" style={{ color: "var(--sky-deep)" }}>Как:</span>
                      <p className="font-body text-[13px]" style={{ color: "var(--text-dark)" }}>{r.freeze.how}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-body text-xs font-medium min-w-fit" style={{ color: "var(--sky-deep)" }}>Разогрев:</span>
                      <p className="font-body text-[13px]" style={{ color: "var(--text-dark)" }}>{r.freeze.reheat}</p>
                    </div>
                  </div>
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
            <div className="grid grid-cols-4 p-3" style={{ background: "var(--sky-deep)" }}>
              {["Овощ", "С 7 мес. +", "Сочетание", "Идея блюда"].map(h => (
                <div key={h} className="font-body text-xs font-medium text-white text-center">{h}</div>
              ))}
            </div>
            {veggieTable.map((v, i) => (
              <div key={i} className="grid grid-cols-4 p-3 veggie-row transition-colors"
                style={{ background: i % 2 === 0 ? "white" : "var(--sky-light)", borderTop: "1px solid #E0EFF8" }}>
                <div className="flex items-center gap-1 font-body text-[13px] font-medium" style={{ color: "var(--text-dark)" }}>
                  <span>{v.emoji}</span>
                  <span className="truncate">{v.name}</span>
                </div>
                <div className="font-body text-[12px] text-center self-center" style={{ color: "var(--sky-deep)" }}>{v.age}</div>
                <div className="font-body text-[11px] text-center self-center" style={{ color: "var(--text-mid)" }}>{v.pair}</div>
                <div className="font-body text-[11px] text-center self-center font-medium" style={{ color: "var(--text-dark)" }}>{v.tip}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 font-body text-[12px]" style={{ color: "var(--text-light)" }}>
            * Специи и цитрусовые вводить с осторожностью после 10 мес., при отсутствии аллергии
          </div>
          <div className="mt-4 text-right font-handwritten text-base" style={{ color: "var(--text-light)" }}>@mmdianamama</div>
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