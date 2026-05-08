import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/88b35f88-1208-406b-b1b0-612b6b04e355.jpg";
const BOTTLES_IMG = "https://cdn.poehali.dev/projects/8d5f49a0-3a30-46eb-afbd-0c64976b871b/files/d639ca5e-c39d-4929-b610-36d576063a84.jpg";

const products = [
  { volume: "5 л", name: "Малыш", price: "89", desc: "Идеально для офиса", tag: "Хит" },
  { volume: "12 л", name: "Стандарт", price: "149", desc: "Для семьи на неделю", tag: "" },
  { volume: "19 л", name: "Большой", price: "249", desc: "Кулер / диспенсер", tag: "Выгодно" },
  { volume: "Абонемент", name: "10 бутылей 19 л", price: "1 990", desc: "Экономия 490 ₽", tag: "Лучшая цена" },
];

const reviews = [
  {
    name: "Марина К.",
    city: "Москва",
    rating: 5,
    text: "Заказываю уже полгода. Вода действительно чистая — не надо кипятить. Доставляют всегда вовремя, курьеры вежливые.",
    date: "2 дня назад",
  },
  {
    name: "Алексей Д.",
    city: "Подмосковье",
    rating: 5,
    text: "Попробовал по совету соседа и не пожалел. Вкус у воды мягкий, без посторонних запахов. Оформил абонемент.",
    date: "неделю назад",
  },
  {
    name: "Светлана Р.",
    city: "Химки",
    rating: 5,
    text: "Очень удобный сайт и быстрая доставка. Могу заказать с вечера — привезут утром. Сертификаты качества прикладывают.",
    date: "2 недели назад",
  },
];

const services = [
  {
    icon: "Droplets",
    title: "Горный источник",
    desc: "Вода добывается из артезианских скважин на глубине 200+ метров в экологически чистых районах.",
  },
  {
    icon: "Truck",
    title: "Доставка за 2 часа",
    desc: "Работаем ежедневно с 8:00 до 22:00. Подъём на этаж бесплатно при заказе от 2 бутылей.",
  },
  {
    icon: "ShieldCheck",
    title: "Сертифицированное качество",
    desc: "Вода проходит 7-ступенчатую очистку и регулярно проверяется в независимых лабораториях.",
  },
  {
    icon: "RefreshCw",
    title: "Аренда кулера",
    desc: "Бесплатно предоставляем кулер при оформлении абонемента. Обслуживание входит в стоимость.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f7f9f4] overflow-x-hidden">

      {/* TOP BAR */}
      <div className="bg-[hsl(var(--moss))] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm font-body">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 opacity-90">
              <Icon name="Clock" size={14} />
              Пн–Вс 8:00–22:00
            </span>
            <span className="hidden sm:flex items-center gap-1.5 opacity-90">
              <Icon name="MapPin" size={14} />
              Доставка по всему городу
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-[hsl(var(--water))] text-white text-xs px-3 py-0.5 rounded-full font-medium">
              🎁 Первая доставка — бесплатно!
            </span>
            <a href="tel:+74951234567" className="flex items-center gap-1.5 font-semibold hover:opacity-80 transition-opacity">
              <Icon name="Phone" size={14} />
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 glass border-b border-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--forest))] flex items-center justify-center">
              <span className="text-lg">💧</span>
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-[hsl(var(--moss))] leading-none">АкваЛес</div>
              <div className="text-[10px] text-[hsl(var(--forest-light))] tracking-wider uppercase font-body">Чистая горная вода</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-[hsl(var(--moss))]">
            <a href="#services" className="hover:text-[hsl(var(--forest))] transition-colors">Услуги</a>
            <a href="#catalog" className="hover:text-[hsl(var(--forest))] transition-colors">Каталог</a>
            <a href="#reviews" className="hover:text-[hsl(var(--forest))] transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-[hsl(var(--forest))] transition-colors">Контакты</a>
          </nav>

          <button className="bg-[hsl(var(--forest))] text-white px-5 py-2.5 rounded-full text-sm font-medium font-body hover:bg-[hsl(var(--moss))] transition-colors shadow-md">
            Заказать воду
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Чистая вода" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--moss)/0.88)] via-[hsl(var(--moss)/0.55)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--moss)/0.4)] to-transparent" />
        </div>

        <div className="absolute top-24 right-[15%] w-4 h-4 rounded-full bg-white/30 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-[25%] w-6 h-6 rounded-full bg-white/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-white/25 animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-6 border border-white/25 font-body">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Доставляем сейчас — 47 заказов в пути
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-6">
              Вода
              <br />
              <em className="italic font-semibold">из сердца</em>
              <br />
              природы
            </h1>

            <p className="font-body text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
              Артезианская вода из экологически чистых источников. Доставим прямо домой или в офис — сегодня, в удобное для вас время.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[hsl(var(--forest))] px-8 py-4 rounded-full font-semibold font-body text-base hover:bg-[hsl(var(--cream))] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform">
                Заказать доставку
              </button>
              <button className="border-2 border-white/60 text-white px-8 py-4 rounded-full font-medium font-body text-base hover:bg-white/10 transition-all">
                Смотреть каталог →
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[["5 000+", "Клиентов"], ["200 м", "Глубина скважины"], ["2 часа", "Доставка"]].map(([val, label]) => (
                <div key={label} className="text-white">
                  <div className="font-display text-3xl font-semibold">{val}</div>
                  <div className="text-white/60 text-sm font-body">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L48 69.3C96 58.7 192 37.3 288 32C384 26.7 480 37.3 576 48C672 58.7 768 69.3 864 64C960 58.7 1056 37.3 1152 32C1248 26.7 1344 37.3 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#f7f9f4"/>
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-[hsl(var(--forest-light))] text-sm tracking-widest uppercase mb-3">Почему выбирают нас</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[hsl(var(--moss))] font-light">
              Наши <em className="italic">услуги</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[hsl(var(--border))]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--forest)/0.1)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--forest))] transition-colors">
                  <Icon name={s.icon} fallback="Droplets" size={24} className="text-[hsl(var(--forest))] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-[hsl(var(--moss))] mb-3 font-semibold">{s.title}</h3>
                <p className="font-body text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blob-1 bg-[hsl(195_55%_75%/0.15)] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 blob-2 bg-[hsl(120_20%_70%/0.2)] translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-body text-[hsl(var(--forest-light))] text-sm tracking-widest uppercase mb-3">Каталог продукции</p>
              <h2 className="font-display text-5xl sm:text-6xl text-[hsl(var(--moss))] font-light">
                Выберите <em className="italic">объём</em>
              </h2>
            </div>
            <p className="font-body text-[hsl(var(--muted-foreground))] max-w-xs text-sm leading-relaxed">
              Все ёмкости изготовлены из пищевого пластика BPA-free. Многоразовые бутыли принимаем обратно.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="relative group rounded-3xl border-2 border-[hsl(var(--border))] p-8 hover:border-[hsl(var(--forest))] transition-all duration-300 hover:shadow-xl bg-[hsl(var(--cream))] flex flex-col"
              >
                {p.tag && (
                  <div className="absolute -top-3 left-6 bg-[hsl(var(--forest))] text-white text-xs font-medium font-body px-3 py-1 rounded-full">
                    {p.tag}
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="font-display text-6xl text-[hsl(var(--water))] font-light mb-1">{p.volume}</div>
                  <div className="font-body text-[hsl(var(--muted-foreground))] text-sm">{p.desc}</div>
                </div>
                <div className="flex-1" />
                <div className="text-center">
                  <div className="font-display text-4xl text-[hsl(var(--moss))] font-semibold mb-1">{p.price} <span className="text-2xl">₽</span></div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))] font-body mb-5">за ёмкость</div>
                  <button className="w-full bg-[hsl(var(--forest))] text-white rounded-2xl py-3 font-medium font-body hover:bg-[hsl(var(--moss))] transition-colors text-sm">
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG LOGO SECTION */}
      <section className="relative py-20 px-4 overflow-hidden bg-[hsl(var(--forest))]">
        <div className="absolute inset-0 opacity-10">
          <img src={BOTTLES_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <div className="flex animate-wave" style={{ width: '200%' }}>
            <svg viewBox="0 0 1440 80" fill="none" className="w-1/2">
              <path d="M0 40C360 0 720 80 1440 40V80H0V40Z" fill="white"/>
            </svg>
            <svg viewBox="0 0 1440 80" fill="none" className="w-1/2">
              <path d="M0 40C360 0 720 80 1440 40V80H0V40Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-white/30 w-24" />
            <span className="text-white/60 text-sm font-body tracking-widest uppercase">С 2012 года</span>
            <div className="h-px bg-white/30 w-24" />
          </div>
          <h2 className="font-display text-8xl sm:text-[10rem] lg:text-[14rem] font-light text-white/15 leading-none select-none tracking-tight">
            АкваЛес
          </h2>
          <p className="font-display text-3xl sm:text-4xl text-white italic font-light -mt-8 sm:-mt-14 relative z-10">
            Природа в каждой капле
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            {[["12 лет", "на рынке"], ["100%", "натуральная"], ["7 ступеней", "очистки"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-4xl text-white font-semibold">{v}</div>
                <div className="text-white/60 font-body text-sm mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-4 sm:px-6 bg-[hsl(var(--cream))]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-[hsl(var(--forest-light))] text-sm tracking-widest uppercase mb-3">Мнения покупателей</p>
            <h2 className="font-display text-5xl sm:text-6xl text-[hsl(var(--moss))] font-light">
              Отзывы <em className="italic">клиентов</em>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xl">★</span>)}
              <span className="font-body text-[hsl(var(--muted-foreground))] ml-2 text-sm">4.9 из 5 на основе 318 отзывов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-3xl p-8 shadow-sm border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[hsl(148_45%_28%/0.12)] flex items-center justify-center font-display text-lg text-[hsl(var(--forest))] font-semibold">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-[hsl(var(--moss))] text-sm">{r.name}</div>
                      <div className="text-xs text-[hsl(var(--muted-foreground))] font-body">{r.city}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[hsl(var(--muted-foreground))] font-body">{r.date}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array(r.rating).fill(0).map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="font-body text-sm text-[hsl(var(--foreground))] leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacts" className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195_40%_88%)] via-[hsl(60_20%_97%)] to-[hsl(195_55%_75%/0.3)]" />
        <div className="absolute top-0 right-0 w-80 h-80 blob-1 bg-[hsl(148_45%_28%/0.06)]" />
        <div className="absolute bottom-0 left-10 w-56 h-56 blob-2 bg-[hsl(195_60%_40%/0.1)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="font-body text-[hsl(var(--forest-light))] text-sm tracking-widest uppercase mb-4">Начните прямо сейчас</p>
          <h2 className="font-display text-5xl sm:text-7xl text-[hsl(var(--moss))] font-light mb-6 leading-tight">
            Закажите воду
            <br />
            <em className="italic">сегодня</em>
          </h2>
          <p className="font-body text-[hsl(var(--muted-foreground))] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Первая доставка — бесплатно. Привезём в течение 2 часов или в удобное время.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="bg-[hsl(var(--forest))] text-white px-10 py-4 rounded-full font-semibold font-body text-base hover:bg-[hsl(var(--moss))] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform">
              Заказать доставку
            </button>
            <a href="tel:+74951234567" className="flex items-center justify-center gap-2 border-2 border-[hsl(var(--forest))] text-[hsl(var(--forest))] px-10 py-4 rounded-full font-medium font-body text-base hover:bg-[hsl(148_45%_28%/0.05)] transition-all">
              <Icon name="Phone" size={18} />
              +7 (495) 123-45-67
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-body text-[hsl(var(--muted-foreground))]">
            <span className="flex items-center gap-1.5"><Icon name="Check" size={16} className="text-[hsl(var(--forest))]" /> Без предоплаты</span>
            <span className="flex items-center gap-1.5"><Icon name="Check" size={16} className="text-[hsl(var(--forest))]" /> Подъём на этаж</span>
            <span className="flex items-center gap-1.5"><Icon name="Check" size={16} className="text-[hsl(var(--forest))]" /> Сертификаты качества</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--moss))] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💧</span>
            <div className="font-display text-2xl font-light">АкваЛес</div>
          </div>
          <div className="text-white/50 text-sm font-body text-center">
            © 2024 АкваЛес. Доставка чистой воды
          </div>
          <div className="flex gap-6 text-sm font-body text-white/70">
            <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
            <a href="mailto:info@akvalos.ru" className="hover:text-white transition-colors">info@akvalos.ru</a>
          </div>
        </div>
      </footer>
    </div>
  );
}