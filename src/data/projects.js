// Each project lists the folder holding its captures in src/images/projects/<folder>/:
// hero.(png|jpg|webp) is shown first, then image1, image2, ... in numeric order.
// Dropping a new capture in the folder is enough, no import needed.
const captures = require.context('../images/projects', true, /\.(png|jpe?g|webp|avif|gif)$/i);

const order = (file) => (/\/hero\.\w+$/i.test(file) ? -1 : parseInt(file.match(/(\d+)\.\w+$/)?.[1] ?? '9999', 10));

const imagesOf = (folder) =>
  captures
    .keys()
    .filter((key) => key.startsWith(`./${folder}/`))
    .sort((a, b) => order(a) - order(b))
    .map((key) => captures(key));

// `url` is optional: without it the modal hides the "visit" button.
// `title` and `description` are either a plain string or one text per language.
const projects = [
  {
    folder: 'projet1',
    url: 'https://lieupropre.ca/',
    title: 'Lieu Propre',
    description: {
      fr: "Site vitrine multilingue pour une entreprise de nettoyage professionnel au Canada : présentation des services (maisons, bureaux, commerces, cliniques, entrepôts), page À propos et formulaire de contact pour les demandes de devis.",
      en: 'Multilingual showcase website for a professional cleaning company in Canada: service pages (homes, offices, retail, clinics, warehouses), an about page and a contact form for quote requests.',
      ar: 'موقع تعريفي متعدد اللغات لشركة تنظيف احترافية في كندا: عرض الخدمات (منازل، مكاتب، محلات، عيادات، مستودعات)، صفحة من نحن، ونموذج تواصل لطلب عروض الأسعار.',
    },
  },
  {
    folder: 'projet2',
    url: 'https://lamine-bouchaib-site.vercel.app/',
    title: 'MERTA MED',
    description: {
      fr: "Site vitrine de MERTA MED, fabricant algérien de matériel médical et entreprise de travaux hospitaliers : activités, services et prise de contact.",
      en: 'Showcase website for MERTA MED, an Algerian manufacturer of medical equipment and hospital works contractor: activities, services and contact.',
      ar: 'موقع تعريفي لشركة MERTA MED الجزائرية المتخصصة في تصنيع المعدات الطبية وإنجاز الأشغال الاستشفائية: عرض النشاطات والخدمات ووسائل التواصل.',
    },
  },
  {
    folder: 'projet3',
    url: 'https://spl-dz.com/',
    title: 'SPL-it Informatique',
    description: {
      fr: 'Site institutionnel de SPL-it, société algérienne de distribution et de solutions informatiques, avec ses pôles logiciel (Yocto Soft) et matériel (Spotlight Hardware).',
      en: 'Corporate website for SPL-it, an Algerian IT distribution and solutions company, presenting its software (Yocto Soft) and hardware (Spotlight Hardware) divisions.',
      ar: 'الموقع المؤسسي لشركة SPL-it الجزائرية لتوزيع الحلول المعلوماتية، مع تقديم فرعيها للبرمجيات (Yocto Soft) والعتاد (Spotlight Hardware).',
    },
  },
  {
    folder: 'projet4',
    url: 'https://izzysouk.com/',
    title: 'Izzy Souk',
    description: {
      fr: 'Boutique en ligne de produits et équipements médicaux en Algérie : catalogue, recherche, panier, livraison dans les 58 wilayas et paiement à la livraison.',
      en: 'Online store for medical products and equipment in Algeria: catalogue, search, cart, delivery to all 58 provinces and cash on delivery.',
      ar: 'متجر إلكتروني للمنتجات والمعدات الطبية في الجزائر: كتالوج، بحث، سلة مشتريات، توصيل إلى 58 ولاية والدفع عند الاستلام.',
    },
  },
  {
    folder: 'projet5',
    url: 'https://plnog.com/',
    title: 'Pipeline Oil & Gas',
    description: {
      fr: "Site trilingue (français, anglais, arabe) de Pipeline Oil & Gas, entreprise de travaux pétroliers et gaziers : présentation de l'entreprise, de sa stratégie, de ses références et de son savoir-faire.",
      en: 'Trilingual website (French, English, Arabic) for Pipeline Oil & Gas, an oil and gas works company: company profile, strategy, references and expertise.',
      ar: 'موقع بثلاث لغات (الفرنسية، الإنجليزية، العربية) لشركة Pipeline Oil & Gas للأشغال البترولية والغازية: تقديم الشركة واستراتيجيتها ومراجعها وخبراتها.',
    },
  },
  {
    folder: 'projet6',
    url: 'https://www.catalyst-dz.com/',
    title: 'Catalyst',
    description: {
      fr: "Site de Catalyst, cabinet algérien de conseil et d'innovation : formations, consulting, bootcamps, open innovation et blog d'actualités.",
      en: 'Website for Catalyst, an Algerian consulting and innovation firm: training programs, consulting, bootcamps, open innovation and a news blog.',
      ar: 'موقع Catalyst، مكتب جزائري للاستشارات والابتكار: تكوينات، استشارات، معسكرات تدريبية، ابتكار مفتوح ومدونة أخبار.',
    },
  },
  {
    folder: 'projet7',
    url: 'https://pfe-master-front.vercel.app/',
    title: { fr: 'Plateforme de gestion des tâches', en: 'Task management platform', ar: 'منصة إدارة المهام' },
    description: {
      fr: "Projet de fin d'études réalisé chez TEKKOLAB : plateforme web de gestion des tâches pour les équipes (création, assignation, échéances, suivi de l'avancement), développée avec Next.js, Node.js, Express.js et MongoDB.",
      en: 'Final-year project built at TEKKOLAB: a web platform for team task management (create, assign, set due dates, track progress), built with Next.js, Node.js, Express.js and MongoDB.',
      ar: 'مشروع تخرّج أُنجز في TEKKOLAB: منصة ويب لإدارة مهام الفرق (إنشاء المهام، إسنادها، تحديد آجالها ومتابعة تقدّمها)، مطوّرة باستخدام Next.js وNode.js وExpress.js وMongoDB.',
    },
  },
  {
    folder: 'projet8',
    url: 'https://nour-al-quran-academie.vercel.app/',
    title: { fr: 'Nour Al Quran Académie', en: 'Nour Al Quran Academy', ar: 'أكاديمية نور القرآن' },
    description: {
      fr: "Plateforme de gestion des séances d'apprentissage du Coran : organisation des cours, suivi de la mémorisation et espace dédié aux parents pour suivre la progression de leurs enfants.",
      en: "Platform for managing Quran learning sessions: class organisation, memorisation tracking and a parent space to follow their children's progress.",
      ar: 'منصة متكاملة لإدارة حلقات تعليم القرآن الكريم: تنظيم الحصص، متابعة الحفظ، وفضاء خاص بالأولياء لمتابعة تقدّم أبنائهم.',
    },
  },
  {
    folder: 'projet9',
    url: 'https://cadnel-plateforme.vercel.app/',
    title: 'Check Time',
    description: {
      fr: 'Application RH : gestion des ressources humaines, suivi de la présence et rapports personnalisables, avec un espace personnel sécurisé pour chaque employé.',
      en: 'HR application: human resources management, attendance tracking and custom reports, with a secure personal space for each employee.',
      ar: 'تطبيق للموارد البشرية: تسيير الموارد البشرية، متابعة الحضور وتقارير قابلة للتخصيص، مع فضاء شخصي آمن لكل موظف.',
    },
  },
  {
    folder: 'projet10',
    url: 'https://marvel-quiz-kappa.vercel.app/',
    title: 'Marvel Quiz',
    description: {
      fr: "Quiz interactif sur l'univers Marvel développé avec React : inscription, connexion, plusieurs niveaux de difficulté et calcul du score.",
      en: 'Interactive Marvel universe quiz built with React: sign-up, login, several difficulty levels and scoring.',
      ar: 'اختبار تفاعلي حول عالم Marvel مطوَّر بـ React: تسجيل، دخول، عدة مستويات صعوبة واحتساب النتيجة.',
    },
  },
  {
    folder: 'projet11',
    url: 'http://burger-menu.rf.gd/',
    title: 'Burger Code',
    description: {
      fr: 'Carte de restaurant en ligne : menus par catégories (burgers, snacks, salades, boissons, desserts) avec prix et bouton de commande.',
      en: 'Online restaurant menu: dishes by category (burgers, snacks, salads, drinks, desserts) with prices and an order button.',
      ar: 'قائمة طعام إلكترونية لمطعم: وجبات مصنّفة (برغر، وجبات خفيفة، سلطات، مشروبات، حلويات) مع الأسعار وزر الطلب.',
    },
  },
  {
    folder: 'projet12',
    url: 'https://abdenourgarti.github.io/travel-agency/',
    title: { fr: 'Agence de voyage', en: 'Travel Agency', ar: 'وكالة سفر' },
    description: {
      fr: "Page d'accueil d'une agence de voyage : destinations, circuits et contact, intégrée en HTML et CSS.",
      en: 'Travel agency landing page: destinations, tours and contact, built with HTML and CSS.',
      ar: 'صفحة تعريفية لوكالة سفر: الوجهات، الجولات ووسائل التواصل، منجزة بـ HTML وCSS.',
    },
  },
  {
    folder: 'projet13',
    url: 'https://abdenourgarti.github.io/serpent-game/',
    title: { fr: 'Jeu du serpent', en: 'Snake game', ar: 'لعبة الثعبان' },
    description: {
      fr: 'Le jeu du serpent revisité en JavaScript sur un canvas HTML5 : contrôle au clavier et score affiché en direct.',
      en: 'The classic snake game rebuilt in JavaScript on an HTML5 canvas: keyboard controls and a live score.',
      ar: 'لعبة الثعبان الكلاسيكية بلغة JavaScript على لوحة HTML5 Canvas: تحكّم عبر لوحة المفاتيح وعرض النتيجة مباشرة.',
    },
  },
  {
    folder: 'projet14',
    url: 'https://abdenourgarti.github.io/actrices/',
    title: { fr: 'Top 5 des actrices', en: 'Top 5 actresses', ar: 'أفضل 5 ممثلات' },
    description: {
      fr: 'Page interactive présentant cinq actrices et leurs meilleurs films, avec une galerie animée en HTML, CSS et JavaScript.',
      en: 'Interactive page featuring five actresses and their best films, with an animated gallery in HTML, CSS and JavaScript.',
      ar: 'صفحة تفاعلية تعرض خمس ممثلات وأفضل أفلامهن، مع معرض صور متحرك بـ HTML وCSS وJavaScript.',
    },
  },
].map((project) => ({ ...project, images: imagesOf(project.folder) }));

export default projects;
