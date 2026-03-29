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
  { emoji: "🫑", name: "Кабачок", age: "8 мес.", taste: "Нежный", pair: "Сыр, зелень, манка", tip: "Палочки, оладьи" },
  { emoji: "🥕", name: "Морковь", age: "8 мес.", taste: "Сладкий", pair: "Манка, яйцо, сыр", tip: "Котлетки, запеканка" },
  { emoji: "🥦", name: "Брокколи", age: "9 мес.", taste: "Нейтральный", pair: "Картофель, яйцо", tip: "Шарики, котлетки" },
  { emoji: "🎃", name: "Тыква", age: "8 мес.", taste: "Сладкий", pair: "Рис, яблоко, корица", tip: "Оладьи, запеканка" },
  { emoji: "🥔", name: "Картофель", age: "9 мес.", taste: "Нейтральный", pair: "Укроп, яйцо, сыр", tip: "Зразы, котлетки" },
  { emoji: "🌿", name: "Шпинат", age: "9 мес.", taste: "Травяной", pair: "Рикотта, яйцо", tip: "Шарики, оладьи" },
  { emoji: "🥬", name: "Цв. капуста", age: "8 мес.", taste: "Нежный", pair: "Сыр, манка", tip: "Котлетки на пару" },
  { emoji: "🍆", name: "Баклажан", age: "10 мес.", taste: "Насыщ.", pair: "Томат, сыр", tip: "Запечённые дольки" },
];

const recipes = [
  {
    emoji: "🫑",
    name: "Кабачковые палочки с сыром",
    color: "#E0F4E8",
    border: "#78C090",
    tag: "Запекание • с 9 мес.",
    ingredients: ["1 небольшой кабачок", "30 г твёрдого сыра (тёртый)", "1 яйцо", "2 ст.л. манной крупы", "пучок укропа"],
    steps: [
      "Кабачок натереть на крупной тёрке, отжать лишнюю жидкость",
      "Добавить яйцо, сыр, манку, мелко нарезанный укроп — перемешать",
      "Дать постоять 10 мин, чтобы манка набухла",
      "Сформировать палочки, выложить на пергамент",
      "Запечь при 180°C 20–25 мин до золотистости",
    ],
    note: "Замораживать готовыми. Разогреть в духовке 10 мин — и готово!",
  },
  {
    emoji: "🥕",
    name: "Морковные котлетки с манкой",
    color: "#FEF0D8",
    border: "#F5C87A",
    tag: "Жарка / пар • с 9 мес.",
    ingredients: ["2 средние моркови", "1 яйцо", "3 ст.л. манной крупы", "1 ст.л. сметаны (по желанию)"],
    steps: [
      "Морковь натереть на мелкой тёрке",
      "Добавить яйцо, манку, перемешать",
      "Дать постоять 15 мин — манка загустит массу",
      "Сформировать котлетки влажными руками",
      "Обжарить на сухой сковороде 3–4 мин с каждой стороны или запечь 180°C / 20 мин",
    ],
    note: "Сладковатые и мягкие — малыши обожают! Хранить в холодильнике 2 дня.",
  },
  {
    emoji: "🥦",
    name: "Брокколи-шарики с картошкой",
    color: "#D8F0E0",
    border: "#70C090",
    tag: "Запекание • с 9 мес.",
    ingredients: ["150 г брокколи", "1 картофелина (отварная)", "1 яйцо", "20 г сыра", "1 ст.л. муки"],
    steps: [
      "Брокколи отварить на пару 10 мин, мелко порубить",
      "Картофель размять в пюре, смешать с брокколи",
      "Добавить яйцо, тёртый сыр, муку — вымешать",
      "Скатать шарики размером с грецкий орех",
      "Запечь при 190°C 18–20 мин",
    ],
    note: "Удобный размер для самостоятельного захвата — отлично для BLW.",
  },
  {
    emoji: "🎃",
    name: "Тыквенные оладьи",
    color: "#FDE8D8",
    border: "#F0A070",
    tag: "Жарка • с 9 мес.",
    ingredients: ["200 г тыквы (запечённой)", "1 яйцо", "3 ст.л. муки (или овсяной)", "щепотка корицы"],
    steps: [
      "Запечённую тыкву размять вилкой до однородности",
      "Добавить яйцо, муку, корицу — перемешать",
      "Выложить ложкой на разогретую сухую сковороду",
      "Жарить на минимальном огне 3 мин с каждой стороны",
    ],
    note: "Красивый оранжевый цвет — дети едят с удовольствием! С 9 мес.",
  },
  {
    emoji: "🥬",
    name: "Котлетки из цветной капусты",
    color: "#EEF8F0",
    border: "#88C8A0",
    tag: "Пар / духовка • с 9 мес.",
    ingredients: ["200 г цветной капусты", "1 яйцо", "2 ст.л. манки или панировочных сухарей", "20 г сыра"],
    steps: [
      "Цветную капусту отварить на пару 12 мин до мягкости",
      "Измельчить блендером до крупной крошки (не в пюре!)",
      "Добавить яйцо, манку, сыр — перемешать",
      "Дать постоять 10 мин, сформировать котлетки",
      "Запечь 180°C / 20 мин или приготовить на пару",
    ],
    note: "Нежная текстура — идеально для первых кусочков.",
  },
  {
    emoji: "🥔",
    name: "Картофельные зразы с укропом",
    color: "#EEE8F8",
    border: "#A090D0",
    tag: "Запекание • с 10 мес.",
    ingredients: ["2 картофелины (отварные)", "1 яйцо", "пучок укропа", "1 ст.л. муки", "20 г сыра для начинки"],
    steps: [
      "Картофель размять в пюре, добавить яйцо и муку",
      "Сформировать лепёшку, в центр положить тёртый сыр с укропом",
      "Сложить края, придать форму котлетки",
      "Выложить на пергамент, смазать чуть маслом",
      "Запечь при 180°C 25 мин до румяности",
    ],
    note: "Можно заморозить до запекания — удобно готовить впрок.",
  },
];

const quickIdeas = [
  "🫑 Кабачок + сыр + зелень → палочки",
  "🥕 Морковь + манка + яйцо → котлетки",
  "🥦 Брокколи + картофель + яйцо → шарики",
  "🎃 Тыква + мука + корица → оладьи",
  "🥬 Цветная капуста + сыр → котлетки на пару",
  "🥔 Картофель + укроп + сыр → зразы",
  "🌿 Шпинат + рикотта + яйцо → шарики",
  "🥕 Морковь + яблоко + овсянка → оладьи",
  "🫑 Кабачок + рис + яйцо → биточки",
  "🥦 Брокколи + сыр + манка → запеканка",
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