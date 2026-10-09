const benefits = [
  'ارسال سریع به سراسر ایران',
  'محصولات اصل و تأییدشده',
  'پشتیبانی حرفه‌ای ۲۴/۷',
  'بازگشت کالا در ۷ روز',
];

const categories = [
  { title: 'مراقبت پوست', count: '۲۵ محصول', color: 'from-pink-100 to-rose-100' },
  { title: 'مراقبت مو', count: '۱۸ محصول', color: 'from-rose-100 to-orange-50' },
  { title: 'زیبایی', count: '۱۴ محصول', color: 'from-fuchsia-100 to-pink-50' },
];

const products = [
  {
    name: 'سرم ویتامین C روشن‌کننده',
    price: 1450000,
    tag: 'پرفروش',
    description: 'روشن‌کننده، ضد لک و مناسب پوست‌های چرب و مختلط.',
  },
  {
    name: 'ژل شستشوی صورت',
    price: 980000,
    tag: 'جدید',
    description: 'پاک‌کننده ملایم و مناسب پوست حساس با عصاره آلوئه‌ورا.',
  },
  {
    name: 'روغن مو ویتامینه',
    price: 1180000,
    tag: 'محبوب',
    description: 'برای موهای خشک و آسیب‌دیده با حالت‌دادن و درخشش بالا.',
  },
  {
    name: 'بالم لب مرطوب‌کننده',
    price: 540000,
    tag: 'ویژه',
    description: 'حفظ رطوبت و نرم‌کنندگی لب‌ها با فرمول گیاهی.',
  },
];

const faPrice = (n: number) =>
  new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 0 }).format(n) + ' تومان';

export default function HomePage() {
  return (
    <main className="bg-cream text-plum min-h-screen" dir="rtl">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-rose-100 bg-white/80 px-6 py-3 shadow-soft backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-200 text-lg font-bold text-white">ن</div>
            <div>
              <p className="text-xl font-black tracking-tight text-plum">نور شاپ</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#products" className="text-plum/80 hover:text-rose-500">محصولات</a>
            <a href="#categories" className="text-plum/80 hover:text-rose-500">دسته‌بندی</a>
            <a href="#about" className="text-plum/80 hover:text-rose-500">درباره ما</a>
            <a href="#faq" className="text-plum/80 hover:text-rose-500">سوالات متداول</a>
          </div>
          <button className="rounded-full bg-gradient-to-r from-rose-500 to-pink-400 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:opacity-95">
            سفارش آنلاین
          </button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-600">
            زیبایی و مراقبت شخصی
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-plum md:text-6xl">
            زیبایی شما،<span className="block text-rose-500">اولویت ما</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-plum/70">
            محصولات مراقبت پوست، مو و زیبایی اصل با فرمول‌های روز دنیا، برای داشتن پوستی شفاف‌تر و ظاهری درخشان‌تر.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-rose-500 to-pink-400 px-6 py-3 text-base font-bold text-white shadow-lg shadow-rose-200 transition hover:opacity-95">
              مشاهده محصولات
            </button>
            <button className="rounded-full border border-rose-200 bg-white px-6 py-3 text-base font-bold text-plum transition hover:border-rose-300 hover:text-rose-500">
              مشاوره رایگان
            </button>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl border border-rose-100 bg-white/80 px-3 py-4 text-center text-sm font-medium text-plum/75 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-6 h-40 w-40 rounded-full bg-rose-200/70 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-48 w-48 rounded-full bg-pink-200/80 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-rose-100 bg-white p-6 shadow-soft">
            <div className="rounded-[28px] bg-gradient-to-br from-rose-50 via-pink-50 to-white p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-plum/60">پرفروش امروز</p>
                  <h2 className="text-2xl font-black text-plum">رژ لب و سرم طلایی</h2>
                </div>
                <span className="rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white">-۲۰٪</span>
              </div>

              <div className="h-72 rounded-[26px] bg-gradient-to-br from-rose-200 via-pink-100 to-amber-100 p-4">
                <div className="flex h-full items-end justify-between">
                  <div className="space-y-2">
                    <div className="h-16 w-16 rounded-2xl bg-white/70 shadow-inner" />
                    <div className="h-10 w-20 rounded-xl bg-white/70 shadow-inner" />
                  </div>
                  <div className="mb-8 ml-4 flex h-40 w-28 items-center justify-center rounded-[30px] bg-gradient-to-b from-rose-400 to-pink-600 text-3xl shadow-soft">
                    ✨
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm text-plum/60">قیمت</p>
                  <p className="text-3xl font-black text-plum">{faPrice(1450000)}</p>
                </div>
                <button className="rounded-full bg-plum px-5 py-3 text-sm font-bold text-white">افزودن به سبد</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-rose-500">دسته‌بندی‌ها</p>
            <h2 className="text-3xl font-black text-plum">چه چیزی برای شما مناسب است؟</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.title} className={`rounded-[28px] border border-rose-100 bg-gradient-to-br ${category.color} p-6 shadow-sm`}>
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">✦</div>
              <p className="text-2xl font-black text-plum">{category.title}</p>
              <p className="mt-2 text-sm text-plum/70">{category.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-rose-500">محصولات ویژه</p>
            <h2 className="text-3xl font-black text-plum">پرفروش‌ترین‌ها</h2>
          </div>
          <button className="text-sm font-bold text-rose-500">نمایش همه</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[28px] border border-rose-100 bg-white p-4 shadow-sm">
              <div className="flex h-52 items-center justify-center rounded-[22px] bg-gradient-to-br from-rose-100 to-pink-50 text-5xl shadow-inner">
                ✨
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-rose-100 px-2 py-1 text-[10px] font-bold text-rose-600">{product.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-black text-plum">{product.name}</h3>
              <p className="mt-2 text-sm leading-7 text-plum/70">{product.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-2xl font-black text-plum">{faPrice(product.price)}</div>
                <button className="rounded-full bg-rose-500 px-4 py-2 text-sm font-bold text-white">افزودن</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 rounded-[32px] border border-rose-100 bg-white p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-bold text-rose-500">درباره نور شاپ</p>
            <h2 className="mt-3 text-3xl font-black text-plum">برای زیبایی روزمره، با محصولات اصل و مناسب</h2>
            <p className="mt-5 text-lg leading-8 text-plum/70">
              نور شاپ با تمرکز روی مراقبت پوست، مو و زیبایی، مجموعه‌ای از محصولات شست‌وشو، سرم، روغن و محصولات آرایشی را با فرمول‌های متعادل و ایمن برای شما فراهم می‌کند.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[26px] bg-gradient-to-br from-rose-50 to-pink-50 p-6">
              <div className="text-3xl">✅</div>
              <p className="mt-4 text-xl font-black text-plum">محصولات تضمین‌شده</p>
            </div>
            <div className="rounded-[26px] bg-gradient-to-br from-pink-50 to-orange-50 p-6">
              <div className="text-3xl">🚚</div>
              <p className="mt-4 text-xl font-black text-plum">تحویل سریع</p>
            </div>
            <div className="rounded-[26px] bg-gradient-to-br from-orange-50 to-amber-50 p-6">
              <div className="text-3xl">🩺</div>
              <p className="mt-4 text-xl font-black text-plum">مشاوره تخصصی</p>
            </div>
            <div className="rounded-[26px] bg-gradient-to-br from-rose-100 to-fuchsia-50 p-6">
              <div className="text-3xl">💬</div>
              <p className="mt-4 text-xl font-black text-plum">پشتیبانی ۲۴/۷</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold text-rose-500">سوالات متداول</p>
          <h2 className="mt-3 text-3xl font-black text-plum">پاسخ به پرسش‌های شما</h2>
        </div>

        <div className="space-y-4">
          {[
            'زمان ارسال سفارش چقدر است؟',
            'آیا محصولات اصل هستند؟',
            'روش پرداخت چگونه است؟',
            'اگر محصول مناسب من نبود چه می‌شود؟',
          ].map((question, index) => (
            <div key={question} className="rounded-2xl border border-rose-100 bg-white px-5 py-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="font-bold text-plum">{question}</p>
                <span className="text-xl text-rose-500">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-rose-100 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center text-sm text-plum/70 md:flex-row md:items-center md:justify-between md:text-right">
          <p>© ۱۴۰۳ نور شاپ | تمامی حقوق محفوظ است.</p>
          <div className="flex items-center justify-center gap-5 md:justify-end">
            <span>اینستاگرام</span>
            <span>واتساپ</span>
            <span>تلگرام</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
