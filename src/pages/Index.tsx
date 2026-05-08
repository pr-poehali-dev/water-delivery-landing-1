import Icon from "@/components/ui/icon";

const VAN_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/326a6b8e-09bc-4c02-aff9-f49e03faa8ae.jpg";
const MOUNTAIN_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/9c94f8d7-fe81-48cd-85f1-e6b9fc178090.jpg";
const BOTTLES_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/31a42452-5fc7-4fb8-b652-038f291da871.jpg";

const products = [
  { volume: "20 л", label: "Питьевая 20л", price: "389", tag: "Популярное" },
  { volume: "10 л", label: "Питьевая 10л", price: "199", tag: "" },
  { volume: "5 л",  label: "Питьевая 5л",  price: "95",  tag: "" },
  { volume: "0,5 л",label: "Питьевая 0,5л",price: "55",  tag: "" },
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
            {products.map((p) => (
              <div key={p.label} className="relative bg-white rounded-3xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-[hsl(var(--forest))] hover:shadow-xl transition-all duration-300 group">
                {p.tag && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[hsl(var(--forest))] text-white text-[10px] font-body font-semibold px-3 py-0.5 rounded-full whitespace-nowrap">
                    {p.tag}
                  </span>
                )}
                {/* Bottle illustration */}
                <div className="w-20 h-28 mb-4 relative">
                  <img src={BOTTLES_IMG} alt={p.label} className="w-full h-full object-contain" />
                </div>
                <div className="font-body text-xs text-[hsl(var(--muted-foreground))] mb-1">{p.label}</div>
                <div className="font-display text-4xl text-[hsl(var(--moss))] font-bold leading-none">{p.price}</div>
                <div className="font-body text-sm text-[hsl(var(--muted-foreground))] mb-5">₽</div>
                <button className="w-full bg-[hsl(var(--forest))] text-white rounded-xl py-2.5 text-sm font-medium font-body hover:bg-[hsl(var(--moss))] transition-colors opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  Заказать
                </button>
              </div>
            ))}
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

      {/* ── CTA: "Как стоять с вашим клиентом" — Быстрый заказ + Акции ── */}
      <section id="contacts" className="bg-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-body font-medium px-5 py-2 rounded-full mb-6">
            <Icon name="Star" size={15} />
            Бесплатная доставка!
          </div>

          <h2 className="font-display text-4xl sm:text-5xl text-[hsl(var(--moss))] font-light mb-3">
            Закажите прямо сейчас
          </h2>
          <p className="font-body text-[hsl(var(--muted-foreground))] mb-10 text-sm">
            Первая доставка — бесплатно. Работаем ежедневно с 8:00 до 22:00.
          </p>

          {/* CTA Buttons — по эскизу: Быстрый заказ (большая), Акции (рядом), Связь с менеджером (под) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-[hsl(var(--forest))] text-white px-10 py-5 rounded-2xl font-semibold font-body text-lg hover:bg-[hsl(var(--moss))] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
              <Icon name="Zap" size={20} />
              Быстрый заказ
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-[hsl(var(--forest))] text-[hsl(var(--forest))] px-8 py-5 rounded-2xl font-semibold font-body text-base hover:bg-[hsl(var(--forest)/0.05)] transition-all">
              <Icon name="Tag" size={18} />
              Акции
            </button>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-[hsl(var(--border))] text-[hsl(var(--moss))] px-10 py-4 rounded-2xl font-medium font-body text-base hover:border-[hsl(var(--forest))] hover:text-[hsl(var(--forest))] transition-all mx-auto">
            <Icon name="MessageCircle" size={18} />
            Связь с менеджером
          </button>
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
