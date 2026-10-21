import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react';
import seo from './seo.json';

export const LANGS = [
  { code: 'fr', short: 'FR', label: 'Français' },
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'ar', short: 'ع', label: 'العربية' },
];

const ui = {
  fr: {
    nav: { home: 'Accueil', about: 'À propos', experience: 'Expérience', education: 'Formation', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    menu: { open: 'Ouvrir le menu', close: 'Fermer le menu' },
    language: 'Langue',
    hero: {
      role: 'Ingénieur logiciel Full Stack, Alger',
      title: "D'une simple idée à un produit en ligne.",
      lead: "Je conçois et développe des applications web complètes, chez M2I Services et en freelance pour des clients en Algérie et à l'international, avec Laravel, Vue.js, React, Next.js et Node.js.",
      projects: 'Voir mes projets',
      contact: 'Me contacter',
      status: 'Disponible pour des missions freelance',
      story: {
        label: "Le cycle d'un projet, de l'idée au client satisfait",
        steps: ['Idée', 'Contact', 'Conception', 'Développement', 'Mise en ligne', 'Client satisfait'],
        idea: "J'ai une idée d'application\u00a0!",
        mail: 'Nouveau message',
        to: 'À',
        subject: 'Objet',
        subjectText: 'Mon projet web',
        message: "Bonjour Abdenour, j'aimerais créer une application pour mon activité.",
        send: 'Envoyer',
        sent: 'Envoyé',
        wireframe: 'Maquette',
        schema: 'Base de données',
        approved: 'Validé',
        domain: 'votre-projet.com',
        site: 'Votre projet en ligne',
        nav: ['Accueil', 'Services', 'Contact'],
        toast: 'Demande envoyée',
        review: 'Résultat parfait, merci\u00a0!',
      },
    },
    about: {
      title: 'À propos',
      text: [
        "Ingénieur logiciel chez M2I Services, je travaille en parallèle comme développeur freelance pour des clients en Algérie et à l'international. Spécialisé en développement web Full Stack, je conçois des solutions modernes, robustes et intuitives qui respectent les standards et les bonnes pratiques du métier.",
        "Jeune diplômé passionné par les technologies du web, j'apprends vite et je m'engage sérieusement sur chaque projet. Je cherche en permanence de nouveaux défis techniques pour progresser et apporter une vraie valeur aux équipes avec lesquelles je travaille.",
        'Mon objectif : des applications web performantes et accessibles, qui répondent précisément aux besoins des clients et de leurs utilisateurs.',
      ],
      facts: [
        ['Basé à', 'Alger, Algérie'],
        ['Poste actuel', 'Ingénieur Full Stack chez M2I Services'],
        ['Freelance', "Depuis 2022, en Algérie et à l'international"],
        ['Diplôme', 'Master en ingénierie des logiciels, USTHB'],
      ],
    },
    experience: { title: 'Expérience', lead: 'Mon parcours professionnel, du plus récent au plus ancien.' },
    education: {
      title: 'Formation',
      lead: 'Diplômes universitaires et formations suivies en continu.',
      degrees: 'Diplômes',
      certs: 'Certifications',
      see: 'Voir le certificat',
    },
    skills: {
      title: 'Compétences',
      lead: "Les technologies que j'utilise pour concevoir, développer et mettre en ligne.",
      cats: { frontend: 'Frontend', backend: 'Backend', data: 'Bases de données', tools: 'Langages et outils' },
    },
    projects: {
      title: 'Projets',
      lead: 'Sites vitrines, e-commerce et applications métier réalisés pour des clients, plus quelques projets personnels.',
      open: 'Voir le projet',
      hint: 'Cliquez sur un écran pour ouvrir le projet',
      more: 'Voir tous les projets',
      less: 'Afficher moins',
      visit: 'Visiter le site',
      close: 'Fermer',
      prev: 'Image précédente',
      prevProject: 'Projet précédent',
      nextProject: 'Projet suivant',
      next: 'Image suivante',
      goTo: "Aller à l'image",
      capture: 'Capture',
    },
    contact: {
      title: 'Parlons de votre projet',
      lead: 'Une mission, un poste ou une question ? Laissez-moi un message et je vous réponds rapidement.',
      name: 'Nom',
      email: 'Adresse e-mail',
      tel: 'Téléphone (facultatif)',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      sent: 'Message envoyé. Je vous réponds rapidement.',
      error: "Le message n'est pas parti. Vérifiez votre connexion et réessayez, ou écrivez-moi directement par e-mail.",
      phone: {
        notif: 'Nouveau message',
        from: 'Nouveau client',
        online: 'en ligne',
        m1: "Bonjour\u00a0! J'ai un projet de site web.",
        m2: 'Vous êtes disponible\u00a0?',
        reply: 'Oui, avec plaisir\u00a0! Parlons-en.',
        input: 'Message',
      },
    },
    footer: { rights: 'Tous droits réservés.', top: 'Retour en haut' },
  },

  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', education: 'Education', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    menu: { open: 'Open menu', close: 'Close menu' },
    language: 'Language',
    hero: {
      role: 'Full Stack software engineer, Algiers',
      title: 'From a simple idea to a live product.',
      lead: 'I design and build complete web applications, at M2I Services and as a freelancer for clients in Algeria and abroad, with Laravel, Vue.js, React, Next.js and Node.js.',
      projects: 'See my projects',
      contact: 'Contact me',
      status: 'Available for freelance work',
      story: {
        label: 'The life of a project, from idea to happy client',
        steps: ['Idea', 'Contact', 'Design', 'Development', 'Launch', 'Happy client'],
        idea: "I've got an app idea!",
        mail: 'New message',
        to: 'To',
        subject: 'Subject',
        subjectText: 'My web project',
        message: "Hi Abdenour, I'd like to build an app for my business.",
        send: 'Send',
        sent: 'Sent',
        wireframe: 'Wireframe',
        schema: 'Database',
        approved: 'Approved',
        domain: 'your-project.com',
        site: 'Your project, live',
        nav: ['Home', 'Services', 'Contact'],
        toast: 'Request sent',
        review: 'Perfect result, thank you!',
      },
    },
    about: {
      title: 'About me',
      text: [
        "I'm a software engineer at M2I Services and a freelance developer for clients in Algeria and abroad. Specialised in Full Stack web development, I design and build modern, robust and intuitive digital products that follow industry standards and best practices.",
        'As a recent graduate with a passion for web technologies, I learn fast and take every project seriously. I keep looking for new technical challenges that help me grow and add real value to the teams I work with.',
        'My goal: high-performance, accessible web applications that precisely meet the needs of clients and their users.',
      ],
      facts: [
        ['Based in', 'Algiers, Algeria'],
        ['Current role', 'Full Stack Engineer at M2I Services'],
        ['Freelance', 'Since 2022, in Algeria and abroad'],
        ['Degree', "Master's in Software Engineering, USTHB"],
      ],
    },
    experience: { title: 'Experience', lead: 'My professional path, most recent first.' },
    education: {
      title: 'Education',
      lead: 'University degrees and the courses I keep taking.',
      degrees: 'Degrees',
      certs: 'Certifications',
      see: 'View certificate',
    },
    skills: {
      title: 'Skills',
      lead: 'The technologies I use to design, build and ship.',
      cats: { frontend: 'Frontend', backend: 'Backend', data: 'Databases', tools: 'Languages and tools' },
    },
    projects: {
      title: 'Projects',
      lead: 'Showcase sites, online stores and business apps built for clients, plus a few personal projects.',
      open: 'View project',
      hint: 'Click a screen to open the project',
      more: 'Show all projects',
      less: 'Show fewer',
      visit: 'Visit website',
      close: 'Close',
      prev: 'Previous image',
      prevProject: 'Previous project',
      nextProject: 'Next project',
      next: 'Next image',
      goTo: 'Go to image',
      capture: 'Screenshot',
    },
    contact: {
      title: "Let's talk about your project",
      lead: "A project, a role or a question? Leave me a message and I'll get back to you quickly.",
      name: 'Name',
      email: 'Email address',
      tel: 'Phone number (optional)',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: "Message sent. I'll get back to you soon.",
      error: "The message wasn't sent. Check your connection and try again, or email me directly.",
      phone: {
        notif: 'New message',
        from: 'New client',
        online: 'online',
        m1: 'Hi! I have a website project.',
        m2: 'Are you available?',
        reply: "Yes, gladly! Let's talk.",
        input: 'Message',
      },
    },
    footer: { rights: 'All rights reserved.', top: 'Back to top' },
  },

  ar: {
    nav: { home: 'الرئيسية', about: 'من أنا', experience: 'الخبرة', education: 'التكوين', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل' },
    menu: { open: 'فتح القائمة', close: 'إغلاق القائمة' },
    language: 'اللغة',
    hero: {
      role: 'مهندس برمجيات Full Stack، الجزائر العاصمة',
      title: 'من فكرة بسيطة إلى منتج على الإنترنت.',
      lead: 'أصمّم وأطوّر تطبيقات ويب متكاملة، في M2I Services وكمطوّر مستقل لعملاء في الجزائر وخارجها، باستخدام Laravel وVue.js وReact وNext.js وNode.js.',
      projects: 'شاهد مشاريعي',
      contact: 'تواصل معي',
      status: 'متاح لمهام العمل الحر',
      story: {
        label: 'دورة حياة المشروع، من الفكرة إلى عميل راضٍ',
        steps: ['الفكرة', 'التواصل', 'التصميم', 'التطوير', 'الإطلاق', 'عميل راضٍ'],
        idea: 'لديّ فكرة تطبيق!',
        mail: 'رسالة جديدة',
        to: 'إلى',
        subject: 'الموضوع',
        subjectText: 'مشروعي على الويب',
        message: 'مرحباً، أودّ إنشاء تطبيق لنشاطي التجاري.',
        send: 'إرسال',
        sent: 'تم الإرسال',
        wireframe: 'النموذج',
        schema: 'قاعدة البيانات',
        approved: 'تمت الموافقة',
        domain: 'your-project.com',
        site: 'مشروعك على الإنترنت',
        nav: ['الرئيسية', 'الخدمات', 'تواصل'],
        toast: 'تم إرسال الطلب',
        review: 'نتيجة رائعة، شكراً!',
      },
    },
    about: {
      title: 'من أنا',
      text: [
        'مهندس برمجيات في M2I Services، وأعمل بالتوازي كمطوّر مستقل لعملاء في الجزائر وخارجها. متخصص في تطوير الويب الشامل (Full Stack)، أصمّم وأطوّر حلولاً رقمية حديثة ومتينة وسهلة الاستخدام وفق معايير المهنة وأفضل ممارساتها.',
        'خرّيج حديث شغوف بتقنيات الويب، أتعلّم بسرعة وألتزم بجدية في كل مشروع. أبحث دائماً عن تحديات تقنية جديدة تساعدني على التطور وتقديم قيمة حقيقية للفرق التي أعمل معها.',
        'هدفي: تطبيقات ويب عالية الأداء وسهلة الوصول، تلبّي بدقة احتياجات العملاء ومستخدميهم.',
      ],
      facts: [
        ['مقيم في', 'الجزائر العاصمة، الجزائر'],
        ['المنصب الحالي', 'مهندس Full Stack في M2I Services'],
        ['العمل الحر', 'منذ 2022، في الجزائر وخارجها'],
        ['الشهادة', 'ماستر في هندسة البرمجيات، USTHB'],
      ],
    },
    experience: { title: 'الخبرة المهنية', lead: 'مساري المهني، من الأحدث إلى الأقدم.' },
    education: {
      title: 'التكوين',
      lead: 'الشهادات الجامعية والدورات التكوينية التي أتابعها باستمرار.',
      degrees: 'الشهادات الجامعية',
      certs: 'الدورات المعتمدة',
      see: 'عرض الشهادة',
    },
    skills: {
      title: 'المهارات',
      lead: 'التقنيات التي أستخدمها في التصميم والتطوير والنشر.',
      cats: { frontend: 'الواجهة الأمامية', backend: 'الواجهة الخلفية', data: 'قواعد البيانات', tools: 'لغات وأدوات' },
    },
    projects: {
      title: 'المشاريع',
      lead: 'مواقع تعريفية ومتاجر إلكترونية وتطبيقات أعمال أنجزتها لعملائي، إضافة إلى بعض المشاريع الشخصية.',
      open: 'عرض المشروع',
      hint: 'انقر على شاشة لفتح المشروع',
      more: 'عرض كل المشاريع',
      less: 'عرض أقل',
      visit: 'زيارة الموقع',
      close: 'إغلاق',
      prev: 'الصورة السابقة',
      prevProject: 'المشروع السابق',
      nextProject: 'المشروع التالي',
      next: 'الصورة التالية',
      goTo: 'الانتقال إلى الصورة',
      capture: 'لقطة شاشة',
    },
    contact: {
      title: 'لنتحدث عن مشروعك',
      lead: 'مشروع، وظيفة أو مجرد سؤال؟ اترك لي رسالة وسأرد عليك في أقرب وقت.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      tel: 'رقم الهاتف (اختياري)',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      sent: 'تم إرسال الرسالة. سأرد عليك قريباً.',
      error: 'لم تُرسل الرسالة. تحقق من اتصالك وأعد المحاولة، أو راسلني مباشرة عبر البريد الإلكتروني.',
      phone: {
        notif: 'رسالة جديدة',
        from: 'عميل جديد',
        online: 'متصل',
        m1: 'مرحباً! لديّ مشروع موقع ويب.',
        m2: 'هل أنت متاح؟',
        reply: 'نعم، بكل سرور! لنتحدث.',
        input: 'رسالة',
      },
    },
    footer: { rights: 'جميع الحقوق محفوظة.', top: 'العودة إلى الأعلى' },
  },
};

const LangContext = createContext(null);

// Each language has its own URL (/, /en, /ar) so search engines index all three. A visitor landing
// on / gets the language they picked last time; an explicit /en or /ar always wins.
const langFromPath = () => {
  const code = window.location.pathname.split('/')[1];
  return code !== 'fr' && ui[code] ? code : null;
};

const initialLang = () => {
  const fromPath = langFromPath();
  if (fromPath) return fromPath;
  try {
    const saved = localStorage.getItem('lang');
    return ui[saved] ? saved : 'fr';
  } catch {
    return 'fr';
  }
};

// Keeps the URL and the head in step with the language picked in the app.
const syncPage = (lang) => {
  const page = seo.langs[lang];
  const { pathname, search, hash } = window.location;
  if (pathname !== page.path) window.history.replaceState(null, '', page.path + search + hash);
  document.title = page.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.site + page.path);
};

// First text block fully visible under the fixed navbar: it is put back at the same
// height after the switch, so a longer or shorter translation never moves the reader.
const NAVBAR_BOTTOM = 90;
const readingAnchor = () => {
  const el = [...document.querySelectorAll('main h2, main h3, main p, main li, main img')].find(
    (node) => node.getBoundingClientRect().top >= NAVBAR_BOTTOM
  );
  return el && { el, top: el.getBoundingClientRect().top };
};

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const anchor = useRef(null);

  const setLang = (next) => {
    if (next === lang) return;
    anchor.current = readingAnchor();
    setLangState(next);
  };

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    syncPage(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch {}

    const saved = anchor.current;
    anchor.current = null;
    if (!saved) return;
    const restore = () => window.scrollBy(0, saved.el.getBoundingClientRect().top - saved.top);
    restore();
    // The Arabic font can arrive after this frame and change line heights: realign once loaded.
    document.fonts?.ready.then(restore);
  }, [lang]);

  // t() picks the current language from a { fr, en, ar } value; plain strings pass through.
  const t = (value) => (value == null || typeof value === 'string' ? value : value[lang] ?? value.fr);

  return <LangContext.Provider value={{ lang, setLang, ui: ui[lang], t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
