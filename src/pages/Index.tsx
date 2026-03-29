const BABY_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/3bcc81f3-9286-46f1-9c7f-72f0126d781d.jpg";
const VEGGIES_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/98bb5a82-4f9b-42e8-939b-5a1d5cb6af10.jpg";
const BOWL_IMG = "https://cdn.poehali.dev/projects/73408c4c-00a7-4da5-98ff-9b31434716a3/files/ed070bb8-16cb-4e66-a8d2-f5e83e5d709d.jpg";

const veggieTable = [
  { emoji: "🫑", name: "Кабачок", age: "7 мес.", pair: "Творог + укроп", tip: "Запечённые котлетки" },
  { emoji: "🥕", name: "Морковь", age: "7 мес.", pair: "Яблоко + овсянка", tip: "Сладкие оладьи" },
  { emoji: "🥦", name: "Брокколи", age: "7 мес.", pair: "Сыр + яйцо", tip: "Шарики на пару" },
  { emoji: "🎃", name: "Тыква", age: "7 мес.", pair: "Рис + яйцо", tip: "Биточки в духовке" },
  { emoji: "🥔", name: "Картофель", age: "7 мес.", pair: "Укроп + яйцо", tip: "Палочки в духовке" },
  { emoji: "🌿", name: "Шпинат", age: "7 мес.", pair: "Творог + яйцо", tip: "Зелёные шарики" },
  { emoji: "🥬", name: "Цв. капуста", age: "7 мес.", pair: "Манка + сыр", tip: "Котлетки на пару" },
  { emoji: "🍆", name: "Баклажан", age: "9 мес.", pair: "Сыр + яйцо", tip: "Запечённые дольки" },
];

const recipes = [
  {
    emoji: "🥕",
    name: "Морковно-яблочные оладьи",
    color: "#FEF0D8",
    border: "#F5C87A",
    tag: "Пар / сковорода • с 7 мес.",
    ingredients: ["1 морковь (отварная)", "½ сладкого яблока (отварное)", "1 яйцо", "3 ст.л. овсяных хлопьев (мелких)"],
    steps: [
      "Морковь и яблоко отварить до мягкости, остудить",
      "Натереть на мелкой тёрке или размять вилкой",
      "Смешать с яйцом и овсянкой, дать постоять 10 мин",
      "Разложить по силиконовым формам — заморозить",
      "Готовить из заморозки: на пару 15 мин или сковорода без масла 3 мин с каждой стороны",
    ],
    note: "Натуральная сладость яблока — никакого сахара.",
    freeze: { how: "Разложить сырую массу по силиконовым формам → в морозилку", reheat: "Пар 15 мин или сковорода без масла 3+3 мин на слабом огне", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🥦",
    name: "Брокколи-творожные кусочки",
    color: "#D8F0E0",
    border: "#70C090",
    tag: "Пар / духовка • с 7 мес.",
    ingredients: ["150 г брокколи (отварная на пару)", "100 г детского творога (5%)", "1 яйцо", "2 ст.л. манки", "20 г мягкого сыра"],
    steps: [
      "Брокколи отварить на пару 12 мин, остудить, мелко порубить",
      "Смешать творог, яйцо, манку, сыр — дать набухнуть 10 мин",
      "Добавить брокколи, перемешать",
      "Разложить по силиконовым формам для маффинов — в морозилку",
      "Готовить из заморозки: пар 20 мин или духовка 175°C / 20 мин",
    ],
    note: "Порционные кусочки удобно держать в ручке.",
    freeze: { how: "Разложить массу по формам для маффинов → заморозить → вынуть в пакет", reheat: "Пар 20 мин или духовка 175°C / 20 мин прямо из заморозки", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🎃",
    name: "Тыквенно-рисовые биточки",
    color: "#FDE8D8",
    border: "#F0A070",
    tag: "Пар / духовка • с 7 мес.",
    ingredients: ["150 г тыквы (отварная)", "4 ст.л. варёного риса", "1 яйцо", "1 ст.л. муки"],
    steps: [
      "Тыкву отварить на пару, остудить, размять вилкой",
      "Рис немного размять — сохранить текстуру",
      "Смешать тыкву, рис, яйцо, муку",
      "Слепить биточки 4–5 см, разложить по силиконовым формам",
      "Заморозить → готовить: пар 18 мин или духовка 185°C / 25 мин",
    ],
    note: "Красивый оранжевый цвет — идеально для самостоятельной еды.",
    freeze: { how: "Слепить биточки → разложить по формам → заморозить → в пакет", reheat: "Пар 18 мин или духовка 185°C / 25 мин прямо из заморозки", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🌿",
    name: "Шпинатно-творожные шарики",
    color: "#E8F5E0",
    border: "#88BB70",
    tag: "Пар / духовка • с 7 мес.",
    ingredients: ["80 г шпината (отварной)", "100 г детского творога", "30 г тёртого сыра", "1 яйцо", "2 ст.л. манки"],
    steps: [
      "Шпинат отварить 2 мин, отжать, мелко нарубить, остудить",
      "Смешать творог, сыр, яйцо, манку — дать набухнуть 15 мин",
      "Добавить шпинат, вымешать",
      "Влажными руками скатать шарики, разложить по силиконовым формам",
      "Заморозить → готовить: пар 18 мин или духовка 180°C / 20 мин",
    ],
    note: "Зелёный цвет — не пугай малыша, сам удивится как вкусно!",
    freeze: { how: "Шарики в силиконовые формы → морозилка → вынуть в зип-пакет", reheat: "Пар 18 мин или духовка 180°C / 20 мин, не размораживая", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🥔",
    name: "Картофельно-кабачковые палочки",
    color: "#EEE8F8",
    border: "#A090D0",
    tag: "Пар / духовка • с 7 мес.",
    ingredients: ["2 картофелины (отварные)", "½ кабачка (отварной, отжатый)", "1 яйцо", "2 ст.л. манки", "укроп"],
    steps: [
      "Картофель и кабачок отварить, остудить",
      "Картофель размять, кабачок натереть и отжать",
      "Смешать с яйцом, манкой, укропом — дать набухнуть 10 мин",
      "Влажными руками сформировать палочки 7–8 см",
      "Разложить по силиконовым формам → заморозить → готовить на пару 20 мин или духовка 180°C / 25 мин",
    ],
    note: "Удобно держать в кулаке — тренирует самостоятельную еду.",
    freeze: { how: "Палочки в силиконовые формы → морозилка → в зип-пакет", reheat: "Пар 20 мин или духовка 180°C / 25 мин прямо из заморозки", shelf: "до 2 месяцев" },
  },
  {
    emoji: "🫑",
    name: "Кабачок-сыр в мини-маффинах",
    color: "#E0F4E8",
    border: "#78C090",
    tag: "Пар / духовка • с 7 мес.",
    ingredients: ["1 кабачок (отварной)", "50 г творога", "30 г тёртого сыра", "2 яйца", "2 ст.л. манки", "укроп"],
    steps: [
      "Кабачок отварить на пару, остудить, натереть и хорошо отжать",
      "Смешать творог, сыр, яйца, манку, укроп",
      "Добавить кабачок, перемешать — дать постоять 10 мин",
      "Разложить по силиконовым формам для мини-маффинов",
      "Заморозить → готовить: пар 20 мин или духовка 175°C / 20 мин",
    ],
    note: "Сочные и нежные — одни из первых любимчиков малышей.",
    freeze: { how: "Масса в силиконовые формы → морозилка → вынуть в контейнер", reheat: "Пар 20 мин или духовка 175°C / 20 мин прямо из заморозки", shelf: "до 2 месяцев" },
  },
];

const quickIdeas = [
  { idea: "Свёкла + творог + овсянка", result: "розовые оладьи 💗" },
  { idea: "Горошек + картофель + яйцо", result: "нежные шарики 💚" },
  { idea: "Тыква + гречка + яйцо", result: "сытные биточки 🟠" },
  { idea: "Морковь + банан + овсянка", result: "сладкие мини-панкейки 🍌" },
  { idea: "Шпинат + творог + манка", result: "зелёные котлетки 🌿" },
  { idea: "Кабачок + рис + укроп", result: "нежные рисовые котлетки 🫑" },
  { idea: "Картофель + кукуруза + укроп", result: "золотые палочки 🌽" },
  { idea: "Брокколи + яблоко + овсянка", result: "необычные оладьи 🍏" },
  { idea: "Цв. капуста + сыр + яйцо", result: "сырные шарики ☀️" },
  { idea: "Тыква + сыр + манка", result: "тыквенные сырники 🎃" },
];

const freezeSteps = [
  "Отварить овощи на пару или в воде до полной мягкости",
  "Остудить, смешать с остальными ингредиентами по рецепту",
  "Слепить котлетки / палочки / шарики — всю партию сразу",
  "Разложить по силиконовым формам в один слой",
  "Убрать в морозильник на 3–4 часа до твёрдости",
  "Вынуть из форм, сложить в зип-пакет, подписать: название + дата",
  "Хранить при −18°C до 2 месяцев",
  "Готовить прямо из заморозки: пар 20 мин или духовка 180°C / 25 мин",
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
  "Все овощи варим до мягкости — на пару или в небольшом кол-ве воды",
  "Остужаем перед смешиванием — горячие крошат массу",
  "Тёртые овощи (кабачок, морковь) — хорошо отжать руками",
  "Даём манке набухнуть 10–15 мин после замешивания",
  "Лепим влажными руками — масса не прилипает",
  "Раскладываем по силиконовым формам и — сразу в морозилку",
  "Не добавляем соль, сахар и специи до 1 года",
  "Готовим из заморозки: пар 18–20 мин или духовка 180°C / 25 мин",
  "Можно поджарить на сухой сковороде — но предпочтительно пар/духовка",
  "Подаём остывшим до тёплого — не горячим",
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
          <p className="font-body text-sm mb-6 ml-14" style={{ color: "var(--text-light)" }}>Главное — запомнить один раз</p>
          <img src={BOWL_IMG} alt="Приготовление" className="w-full h-40 object-cover rounded-2xl mb-6" />
          <div className="space-y-3">
            {cookRules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-2xl" style={{ background: i % 2 === 0 ? "var(--sky-light)" : "#F5FBF8" }}>
                <span className="font-body text-sm font-semibold min-w-[24px] mt-0.5" style={{ color: "var(--sky-deep)" }}>{i + 1}.</span>
                <p className="font-body text-[15px] leading-snug" style={{ color: "var(--text-dark)" }}>{rule}</p>
              </div>
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
              <div key={i} className="flex gap-4 items-start p-4 rounded-2xl" style={{ background: i % 2 === 0 ? "#EEF7FD" : "white", border: "1px solid #D8EEF8" }}>
                <div className="w-8 h-8 min-w-[32px] rounded-full flex items-center justify-center font-body text-sm font-semibold"
                  style={{ background: "var(--sky-deep)", color: "white" }}>
                  {i + 1}
                </div>
                <p className="font-body text-[15px] leading-snug self-center" style={{ color: "var(--text-dark)" }}>{step}</p>
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