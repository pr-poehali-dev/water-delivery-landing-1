import Icon from "@/components/ui/icon";

const VAN_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/d50f17af-a32f-46ac-bebd-5ee157ff4bbc.jpg";
const MOUNTAIN_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/9c94f8d7-fe81-48cd-85f1-e6b9fc178090.jpg";

const products = [
  { volume: "20 л", label: "Питьевая", price: "389", tag: "Хит продаж", color: "from-[#e8f5ee] to-[#c8e6d4]", accent: "#2d7a4f", img: "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/d544ceae-ef2d-4b41-8ddb-f8dce4ba438d.jpg" },
  { volume: "10 л", label: "Питьевая", price: "199", tag: "",            color: "from-[#e3f0fb] to-[#bbd8f5]", accent: "#2667a8", img: "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/a29e2ce1-6b4e-4ae4-9497-49c265c1ecca.jpg" },
  { volume: "5 л",  label: "Питьевая", price: "95",  tag: "",            color: "from-[#eef7ed] to-[#cde9c8]", accent: "#3a8c42", img: "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/5c3cbe93-e6b0-4603-8f92-9ae309dadae4.jpg" },
  { volume: "0,5 л",label: "Питьевая", price: "55",  tag: "",            color: "from-[#fef9ec] to-[#fde9b3]", accent: "#b07d10", img: "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/feac483c-066c-428a-9366-0dba43da8ceb.jpg" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">

      {/* ── TOP BAR ── */}
      <div className="bg-[hsl(var(--moss))] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="opacity-80">Бесплатная доставка домой и в офис</span>
          <div className="flex items-center gap-4">
            <a href="tel:83433" className="font-semibold hover:opacity-80 transition-opacity">83433</a>
            <span className="opacity-60">·</span>
            <a href="mailto:info@voda-sin.ru" className="opacity-80 hover:opacity-100 transition-opacity">info@voda-sin.ru</a>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="border-b border-[hsl(var(--border))] bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--forest))] flex items-center justify-center">
              <span className="text-white text-lg">💧</span>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-[hsl(var(--moss))] leading-tight tracking-wide">
                СИНЕГОРСКАЯ
              </div>
              <div className="text-[9px] tracking-widest text-[hsl(var(--forest-light))] uppercase font-body">
                100% природная питьевая вода
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[hsl(var(--moss))]">
            <a href="#services" className="hover:text-[hsl(var(--forest))] transition-colors">Услуги</a>
            <a href="#catalog"  className="hover:text-[hsl(var(--forest))] transition-colors">Каталог</a>
            <a href="#about"    className="hover:text-[hsl(var(--forest))] transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-[hsl(var(--forest))] transition-colors">Контакты</a>
          </nav>

          <a href="tel:83433" className="flex items-center gap-2 bg-[hsl(var(--forest))] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[hsl(var(--moss))] transition-colors shadow">
            <Icon name="Phone" size={15} />
            Позвонить
          </a>
        </div>
      </header>

      {/* ── HERO: "Куда попал" ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-[hsl(var(--moss))] text-center mb-8 font-light">
          Родниковая вода в <em className="italic font-semibold text-[hsl(var(--water))]">миллитонном</em> балансе
        </h1>

        {/* Hero split image block — van + mountain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl overflow-hidden shadow-lg">
          <div className="relative h-56 sm:h-72 overflow-hidden">
            <img src={VAN_IMG} alt="Доставка Синегорская" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--moss)/0.5)] to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="font-display text-xl font-semibold">Доставка</div>
              <div className="text-xs opacity-80 font-body">домой и в офис</div>
            </div>
          </div>
          <div className="relative h-56 sm:h-72 overflow-hidden bg-[hsl(var(--forest)/0.05)] flex flex-col items-center justify-center gap-4 p-6">
            <img src={MOUNTAIN_IMG} alt="Синегорская" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="relative z-10 text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-[hsl(var(--moss))] tracking-widest leading-none mb-2">
                СИНЕГОРСКАЯ
              </div>
              <div className="inline-block border-2 border-[hsl(var(--forest))] text-[hsl(var(--forest))] text-xs font-body font-semibold px-4 py-1.5 rounded-full tracking-wider bg-white/70">
                100% природная питьевая вода
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES: "Есть ли то, что нам нужно" ── */}
      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-display text-3xl sm:text-4xl text-[hsl(var(--moss))] mb-8 font-light">
          Наши услуги:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: "Home", title: "Бесплатная доставка воды домой", desc: "Привезём в удобное время прямо до вашей двери. Подъём на этаж включён." },
            { icon: "Building2", title: "Бесплатная доставка воды в офис", desc: "Обслуживаем предприятия любого размера. Регулярные поставки по графику." },
            { icon: "PackageOpen", title: "Оптовые поставки для организаций", desc: "Специальные условия и скидки для юридических лиц и крупных заказчиков." },
          ].map((s) => (
            <div key={s.title} className="flex gap-4 p-6 rounded-2xl border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--forest))] hover:shadow-md transition-all bg-white group">
              <div className="w-12 h-12 rounded-xl bg-[hsl(var(--forest)/0.08)] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--forest))] transition-colors">
                <Icon name={s.icon} fallback="Package" size={22} className="text-[hsl(var(--forest))] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-body font-semibold text-[hsl(var(--moss))] text-sm leading-snug mb-1">— {s.title}</div>
                <div className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATALOG: "Какие условия покупки продукции" ── */}
      <section id="catalog" className="bg-[hsl(var(--cream))] py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[hsl(var(--forest-light))] text-xs tracking-widest uppercase font-body mb-2">Каталог продукции</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[hsl(var(--moss))] font-light">Выберите объём</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => {
              // Высота изображения пропорциональна объёму: 20л — высокая, 0.5л — маленькая
              const imgHeights = ["h-44", "h-36", "h-28", "h-20"];
              return (
                <div key={p.volume} className="relative group flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-white border border-white">
                  {/* Gradient top area */}
                  <div className={`relative bg-gradient-to-b ${p.color} pt-5 pb-3 px-4 flex flex-col items-center min-h-[180px] justify-end`}>
                    {p.tag && (
                      <span className="absolute top-3 left-3 text-white text-[10px] font-body font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap" style={{ backgroundColor: p.accent }}>
                        {p.tag}
                      </span>
                    )}
                    {/* Bottle image — масштаб по объёму */}
                    <img
                      src={p.img}
                      alt={`${p.label} ${p.volume}`}
                      className={`${imgHeights[i]} w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105`}
                    />
                  </div>

                  {/* Bottom content */}
                  <div className="flex flex-col flex-1 p-5 items-center">
                    <div className="font-display text-3xl font-bold leading-none mb-0.5" style={{ color: p.accent }}>{p.volume}</div>
                    <div className="font-body text-xs mb-3 font-medium" style={{ color: p.accent + "99" }}>{p.label}</div>
                    <div className="flex items-end gap-1 mb-1">
                      <span className="font-display text-4xl font-bold text-[hsl(var(--moss))] leading-none">{p.price}</span>
                      <span className="font-body text-lg text-[hsl(var(--muted-foreground))] mb-0.5">₽</span>
                    </div>
                    <div className="text-[10px] text-[hsl(var(--muted-foreground))] font-body mb-4">за бутыль</div>

                    <button className="w-full py-2.5 rounded-xl text-sm font-semibold font-body text-white transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95" style={{ backgroundColor: p.accent }}>
                      Заказать
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT: "Почему нам доверять" — big brand section ── */}
      <section id="about" className="relative py-20 px-4 overflow-hidden bg-[hsl(var(--forest))]">
        <div className="absolute inset-0 opacity-15">
          <img src={MOUNTAIN_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full rotate-180">
            <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="hsl(var(--cream))"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Big logo */}
          <h2 className="font-display text-7xl sm:text-9xl lg:text-[11rem] font-bold text-white/10 leading-none select-none tracking-tighter">
            СИНЕГОРСКАЯ
          </h2>
          <div className="-mt-6 sm:-mt-10 lg:-mt-16 relative z-10">
            <p className="font-display text-2xl sm:text-3xl text-white italic font-light mb-2">
              Мы доставляем чистую воду много лет
            </p>
            <p className="font-body text-white/60 text-sm">Мы для вас · Мы для вас · Мы хорошие</p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            {[["12+", "лет на рынке"], ["50 000+", "довольных клиентов"], ["24/7", "поддержка"], ["2 часа", "срок доставки"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-4xl text-white font-bold">{v}</div>
                <div className="text-white/50 font-body text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 30C360 60 1080 0 1440 30V60H0V30Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contacts" className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--forest)/0.08)] border border-[hsl(var(--forest)/0.2)] text-[hsl(var(--forest))] text-sm font-body font-semibold px-5 py-2 rounded-full mb-6">
              <Icon name="Star" size={15} />
              Бесплатная доставка!
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--moss))] font-light mb-3">
              Закажите прямо сейчас
            </h2>
            <p className="font-body text-[hsl(var(--muted-foreground))] text-sm">
              Первая доставка — бесплатно. Работаем ежедневно с 8:00 до 22:00.
            </p>
          </div>

          {/* Кнопки: слева — Быстрый заказ + Связь с менеджером, справа — Акции */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            {/* Левая колонка */}
            <div className="flex flex-col gap-3 flex-1">
              <button className="flex items-center justify-center gap-3 bg-[hsl(var(--forest))] text-white px-8 py-4 rounded-2xl font-semibold font-body text-base hover:bg-[hsl(var(--moss))] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
                <Icon name="Zap" size={20} />
                Быстрый заказ
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-[hsl(var(--border))] text-[hsl(var(--moss))] px-8 py-4 rounded-2xl font-medium font-body text-base hover:border-[hsl(var(--forest))] hover:text-[hsl(var(--forest))] transition-all">
                <Icon name="MessageCircle" size={18} />
                Связь с менеджером
              </button>
            </div>
            {/* Правая колонка — Акции */}
            <button className="flex flex-col items-center justify-center gap-2 border-2 border-[hsl(var(--forest))] text-[hsl(var(--forest))] px-10 py-4 rounded-2xl font-semibold font-body text-base hover:bg-[hsl(var(--forest)/0.05)] transition-all sm:w-48">
              <Icon name="Tag" size={24} />
              <span>Акции</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[hsl(var(--moss))] text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💧</span>
              <div className="font-display text-2xl font-bold tracking-wider">СИНЕГОРСКАЯ</div>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm text-white/70 font-body">
              <a href="#services" className="hover:text-white transition-colors">Услуги</a>
              <a href="#catalog"  className="hover:text-white transition-colors">Каталог</a>
              <a href="#about"    className="hover:text-white transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
            </nav>
            <div className="flex flex-col gap-1 text-sm font-body">
              <a href="tel:83433" className="text-white font-semibold hover:opacity-80 transition-opacity">83433</a>
              <a href="mailto:info@voda-sin.ru" className="text-white/60 hover:text-white transition-colors">info@voda-sin.ru</a>
            </div>
          </div>
          <div className="border-t border-white/15 pt-5 text-center text-white/40 text-xs font-body">
            © 2024 Синегорская. 100% природная питьевая вода
          </div>
        </div>
      </footer>
    </div>
  );
}