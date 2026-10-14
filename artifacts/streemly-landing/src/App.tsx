import type { ReactNode } from 'react';
import { ArrowDown, ArrowUp, MessageCircle, ShieldCheck, Ticket } from 'lucide-react';
import { generalMessage, plans, policyDestinations, whatsappNumber, whatsappUrl } from './config';

const FAQ = [
  { question: 'شحال ثمن اشتراك 3 أشهر؟', answer: 'ثمن اشتراك 3 أشهر هو 180 درهم بجودة FULL HD.' },
  { question: 'شحال ثمن اشتراك 6 أشهر؟', answer: 'ثمن اشتراك 6 أشهر هو 350 درهم بجودة FULL HD.' },
  { question: 'شحال ثمن الاشتراك السنوي؟', answer: 'ثمن اشتراك سنة كاملة هو 650 درهم بجودة FULL HD.' },
  { question: 'كيفاش نطلب الاشتراك؟', answer: 'اختار العرض المناسب ليك واضغط على «طلب الاشتراك» باش تتواصل معانا مباشرة فالواتساب وتعرف التفاصيل قبل ما تأكد الطلب.' },
  { question: 'شنو الأجهزة المتوافقة؟', answer: 'التوافق كيتعلق بالجهاز وطريقة الاستعمال. تواصل معانا عبر واتساب وذكر لينا الجهاز ديالك باش نعطيوك معلومات قبل تأكيد الطلب.' },
  { question: 'شنو شروط الاشتراك والتفعيل؟', answer: 'تفاصيل وشروط الاشتراك والتفعيل خاصها تتأكد معانا مباشرة قبل إتمام الطلب. تواصل معنا عبر واتساب باش تعرف المعلومات المتوفرة.' },
  { question: 'واش كاين استرجاع للفلوس؟', answer: 'ما كايناش هنا سياسة استرجاع مؤكدة. سولنا على الشروط المتاحة قبل الطلب، وغادي نوضحوها ليك قبل ما تأكد.' },
];

function WhatsAppLink({ message = generalMessage, children, className, label }: { message?: string; children: ReactNode; className: string; label?: string }) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" aria-label={label} data-testid="link-whatsapp">{children}</a>;
}

function Header() {
  return <header className="site-header"><div className="wrap header-inner">
    <a href="#top" className="brand" aria-label="Streemly+ - الصفحة الرئيسية" data-testid="link-home">
      <span className="brand-mark">S</span><span><span className="brand-name">Streemly<b>+</b></span><span className="brand-chip">مستقل</span><span className="brand-caption" style={{ display: 'block' }}>اختيارات اشتراك واضحة بالمغرب</span></span>
    </a>
    <nav className="main-nav" aria-label="التنقل الرئيسي">
      <a href="#top" data-testid="link-nav-home">الرئيسية</a><a href="#pricing" className="active" data-testid="link-nav-pricing">العروض</a><a href="#faq" data-testid="link-nav-faq">الأسئلة الشائعة</a><a href={whatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer" data-testid="link-nav-contact">تواصل معانا</a>
    </nav>
    <WhatsAppLink className="button button-primary header-cta" label="تواصل معانا عبر واتساب"><MessageCircle size={17} aria-hidden="true" />تواصل فالواتساب</WhatsAppLink>
  </div></header>;
}

function Hero() {
  return <section className="hero" id="top"><div className="wrap hero-inner">
    <div className="hero-copy">
      <div className="badges"><span className="badge gold"><span className="badge-dot" />جودة FULL HD</span><span className="badge"><ShieldCheck size={15} color="#ffd500" aria-hidden="true" />تواصل عبر الواتساب</span></div>
      <h1>الفرجة اللي كتعشق،<br /><span>اختار ليها الاشتراك المناسب!</span></h1>
      <p className="hero-lede">اختار المدة اللي تناسبك، تعرّف على الأثمنة، وتواصل معانا بسهولة عبر واتساب.</p>
      <div className="hero-actions"><a className="button button-primary" href="#pricing" data-testid="link-hero-pricing">شوف العروض <ArrowDown size={18} aria-hidden="true" /></a><WhatsAppLink className="button button-outline"><MessageCircle size={20} aria-hidden="true" />تواصل معانا</WhatsAppLink></div>
      <div className="quick-stats" aria-label="معلومات على العروض"><div className="stat"><strong>3</strong><span>اختيارات للمدة</span></div><div className="stat"><strong>FULL HD</strong><span>جودة الباقات</span></div><div className="stat"><strong>WhatsApp</strong><span>للاستفسار والطلب</span></div></div>
    </div>
    <div className="poster-wrap"><div className="poster-frame"><img src="/images/streemly-hero-poster.png" alt="ملصق كروي لموسم جديد يعرض لاعبي كرة القدم وأجهزة المشاهدة" width="683" height="1024" fetchPriority="high" /></div></div>
  </div></section>;
}

function Pricing() {
  return <section className="section" id="pricing"><div className="wrap"><div className="section-heading"><span className="eyebrow">عروض واضحة للمشاهد المغربي</span><h2>اختار الاشتراك المناسب ليك</h2><p>ثلاث اختيارات لمدة الاشتراك، والأثمنة مبينة بوضوح. سولنا على التفاصيل قبل تأكيد الطلب.</p></div>
    <div className="plans">{plans.map((plan, index) => <article className={`plan-card${index === 2 ? ' featured' : ''}`} key={plan.id} data-testid={`card-plan-${plan.id}`}>
      <div><div className="plan-meta"><span className="quality">{plan.quality}</span><span className="duration">{plan.displayDuration}</span></div><h3>{plan.title}</h3><p className="plan-desc">اختار هاد المدة إلا كانت مناسبة ليك، وتواصل معانا باش تعرف التفاصيل قبل تأكيد الطلب.</p><div className="price-box"><span className="price">{plan.price}</span><span className="price-unit">درهم / {plan.duration}</span></div><p className="plan-note">الثمن والمدة واضحين. تفاصيل الاشتراك كتتأكد مباشرة قبل الطلب.</p></div>
      <WhatsAppLink message={plan.message} className="button button-primary"><MessageCircle size={19} aria-hidden="true" />طلب الاشتراك</WhatsAppLink>
    </article>)}</div>
  </div></section>;
}

function WhyUs() {
  const items = [
    ['أثمنة واضحة', 'كل باقة عندها المدة والثمن ديالها مبينين بلا مصاريف مخفية.'],
    ['اختار المدة اللي تناسبك', 'اختار بين 3 أشهر، 6 أشهر، أو سنة كاملة على حساب اللي مناسب ليك.'],
    ['تواصل ساهل عبر واتساب', 'تواصل معانا مباشرة باش تسول على العرض وتفاصيل الطلب.'],
    ['معلومات قبل تأكيد الطلب', 'سول على التوافق والشروط والتفاصيل قبل ما تأكد أي طلب.'],
  ];
  return <section className="section" id="why-us"><div className="wrap"><div className="section-heading"><span className="eyebrow">المصداقية والوضوح</span><h2>علاش تختار العرض المناسب معانا؟</h2><p>كنخليو الاختيار واضح، وكنجاوبو على أسئلتك قبل ما تأكد الطلب.</p></div>
    <div className="reasons">{items.map(([title, text], index) => <article className="reason" key={title}><div className="reason-icon" aria-hidden="true">{index === 0 ? 'د.م' : index === 1 ? '↔' : index === 2 ? '↗' : 'i'}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

function HowToOrder() {
  const steps = [
    ['اختار المدة', 'شوف العروض واختار الاشتراك اللي مناسب ليك.'],
    ['تواصل معانا', 'ضغط على زر الطلب باش تتواصل معانا عبر واتساب.'],
    ['أكد التفاصيل', 'تأكد من شروط الاشتراك والتفعيل قبل إتمام الطلب.'],
  ];
  return <section className="section" id="how-to-order"><div className="wrap"><div className="section-heading"><span className="eyebrow">خطوات بسيطة وواضحة</span><h2>كيفاش تطلب الاشتراك؟</h2><p>ثلاث خطوات للتواصل ومعرفة التفاصيل قبل تأكيد الطلب.</p></div>
    <div className="steps">{steps.map(([title, text], i) => <article className="step" key={title}><div className="step-number">{i + 1}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    <div className="step-action"><a className="button button-outline" href="#pricing">اختار باقتك <ArrowUp size={17} aria-hidden="true" /></a></div>
  </div></section>;
}

function Faq() {
  return <section className="section" id="faq"><div className="wrap" style={{ maxWidth: 880 }}><div className="section-heading"><span className="eyebrow">إجابات واضحة</span><h2>الأسئلة الشائعة</h2><p>معلومات على الأثمنة وطريقة الطلب، وأسئلة تقدر تسولنا عليها قبل التأكيد.</p></div>
    <div className="faq-list">{FAQ.map((item, i) => <details className="faq-item" key={item.question} data-testid={`faq-item-${i + 1}`}><summary>{item.question}</summary><p className="faq-answer">{item.answer}</p></details>)}</div>
  </div></section>;
}

function FinalCallout() {
  return <section className="section" id="contact" aria-labelledby="final-title"><div className="wrap"><div className="final-cta"><h2 id="final-title">اختار العرض ديالك وبدا الطلب!</h2><p>إلى بغيتي تعرف تفاصيل شي باقة أو عندك سؤال، تواصل معانا عبر واتساب قبل ما تأكد الطلب.</p><WhatsAppLink className="button button-primary"><MessageCircle size={21} aria-hidden="true" />تواصل معانا فالواتساب</WhatsAppLink></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="wrap"><div className="footer-grid">
    <div><a href="#top" className="brand"><span className="brand-name">Streemly<b>+</b></span><span className="brand-chip">المغرب</span></a><p>Streemly+ خدمة مستقلة كتقدم اختيارات اشتراك واضحة، والتواصل والطلبات كيدوزو عبر واتساب.</p><p><MessageCircle size={14} style={{ verticalAlign: 'middle', marginInlineEnd: 5 }} aria-hidden="true" />واتساب: +{whatsappNumber}</p></div>
    <div><h3>روابط سريعة</h3><nav className="footer-links" aria-label="روابط سريعة"><a href="#pricing">عروض الاشتراكات</a><a href="#why-us">علاش تختارنا</a><a href="#how-to-order">طريقة الطلب</a><a href="#faq">الأسئلة الشائعة</a></nav></div>
    <div><h3>السياسات والشروط</h3><nav className="footer-links" aria-label="السياسات"><a href={policyDestinations.terms} data-testid="link-policy-terms">الشروط والأحكام <small>(تتضاف)</small></a><a href={policyDestinations.privacy} data-testid="link-policy-privacy">سياسة الخصوصية <small>(تتضاف)</small></a><a href={policyDestinations.refunds} data-testid="link-policy-refunds">سياسة الاسترجاع <small>(تتضاف)</small></a></nav></div>
  </div><div className="policy-placeholders" aria-label="معلومات مؤقتة حول السياسات"><p id="terms"><strong>الشروط والأحكام:</strong> تفاصيل الشروط غادي تتضاف هنا. تواصل معانا عبر واتساب لمعرفة المعلومات الحالية قبل الطلب.</p><p id="privacy"><strong>سياسة الخصوصية:</strong> تفاصيل الخصوصية غادي تتضاف هنا. تواصل معانا عبر واتساب لأي سؤال قبل مشاركة معلوماتك.</p><p id="refunds"><strong>سياسة الاسترجاع:</strong> تفاصيل الاسترجاع غادي تتضاف هنا. سولنا على الشروط المتاحة قبل تأكيد الطلب.</p></div><div className="disclosure"><p>إخلاء مسؤولية: Streemly+ خدمة مستقلة، وما عندها حتى انتساب رسمي بـ TOD. العلامات التجارية كتعود لمالكيها.</p><span>© {new Date().getFullYear()} Streemly+</span></div></div>
  </footer>;
}

function MobileBar() {
  return <nav className="mobile-cta" aria-label="إجراءات سريعة"><a href="#pricing" className="button button-outline" data-testid="link-mobile-pricing"><Ticket size={17} aria-hidden="true" />شوف العروض</a><WhatsAppLink className="button button-primary"><MessageCircle size={17} aria-hidden="true" />واتساب</WhatsAppLink></nav>;
}

function App() {
  return <div dir="rtl"><Header /><main><Hero /><Pricing /><WhyUs /><HowToOrder /><Faq /><FinalCallout /></main><Footer /><MobileBar /></div>;
}

export default App;
