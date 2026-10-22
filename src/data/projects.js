// Each project lists the folder holding its captures in src/images/projects/<folder>/:
// hero.(png|jpg|webp) is shown first, then image1, image2, ... in numeric order.
// Dropping a new capture in the folder is enough, no import needed.
const captures = require.context(
  "../images/projects",
  true,
  /\.(png|jpe?g|webp|avif|gif)$/i,
);

const order = (file) =>
  /\/hero\.\w+$/i.test(file)
    ? -1
    : parseInt(file.match(/(\d+)\.\w+$/)?.[1] ?? "9999", 10);

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
    folder: "projet15",
    url: "https://guidz.net/",
    title: "GUIDZ",
    description: {
      fr: "Plateforme web de promotion du tourisme en Algérie, avec un back-office d'administration centralisé pour la gestion globale des contenus et des services touristiques. L'interface permet d'administrer les guides locaux, les circuits touristiques, les destinations, les hôtels, les restaurants et les événements dans les différentes wilayas, ainsi que les utilisateurs, les comptes et les informations liées aux établissements et aux activités. Le back-office facilite la supervision des données, la mise à jour des informations et le contrôle des contenus publiés, afin de garantir leur cohérence et la valorisation de l'offre touristique algérienne. Réalisé au sein de M2I Services et déployé chez Icosnet. Technologies : Laravel, Filament, Vue.js.",
      en: "Web platform promoting tourism in Algeria, with a centralised admin back-office for the global management of tourism content and services. The interface lets administrators manage local guides, tours, destinations, hotels, restaurants and tourist events across the different provinces, as well as users, accounts and the information tied to establishments and activities. The back-office simplifies data supervision, information updates and control of published content, ensuring consistency and showcasing the Algerian tourism offering. Built at M2I Services and deployed at Icosnet. Technologies: Laravel, Filament, Vue.js.",
      ar: "منصة ويب للترويج للسياحة في الجزائر مع لوحة تحكم إدارية مركزية للتسيير الشامل للمحتويات والخدمات السياحية. تتيح الواجهة إدارة المرشدين المحليين، الجولات السياحية، الوجهات، الفنادق، المطاعم والفعاليات السياحية عبر مختلف الولايات، إضافة إلى المستخدمين والحسابات والمعلومات المرتبطة بالمؤسسات والأنشطة. تسهّل لوحة التحكم مراقبة البيانات وتحديث المعلومات والتحكم في المحتويات المنشورة، بما يضمن اتساقها وتثمين العرض السياحي الجزائري. أُنجز في M2I Services وتم نشره لدى Icosnet. التقنيات: Laravel، Filament، Vue.js.",
    },
  },
  {
    folder: "projet16",
    url: null,
    title: "EvRP",
    description: {
      fr: "Plateforme web d'Évaluation des Risques Professionnels (EvRP) pour Sonatrach, destinée aux services HSE des unités et installations à l'échelle nationale. Elle permet d'identifier, d'évaluer et de suivre les risques professionnels liés aux activités et aux postes de travail, avec une gestion multi-rôles, des workflows de validation et des notifications automatisées. Un module de plans d'action permet de définir les mesures préventives et correctives, d'affecter les responsabilités et de suivre l'avancement. Des tableaux de bord facilitent le pilotage des évaluations et le suivi des indicateurs HSE, et un module de gestion des référentiels harmonise les données et les méthodes d'évaluation au sein de Sonatrach. Réalisé chez M2I Services et déployé sur les serveurs locaux de Sonatrach. Technologies : Laravel, Vue.js.",
      en: "Occupational Risk Assessment (EvRP) web platform for Sonatrach, designed for the HSE departments of units and facilities nationwide. It identifies, assesses and tracks occupational risks related to activities and workstations, with multi-role management, validation workflows and automated notifications. An action plan module defines preventive and corrective measures, assigns responsibilities and tracks progress. Dashboards support the steering of assessments and HSE indicator monitoring, and a reference data module harmonises data and assessment methods across Sonatrach. Built at M2I Services and deployed on Sonatrach local servers. Technologies: Laravel, Vue.js.",
      ar: "منصة ويب لتقييم المخاطر المهنية (EvRP) لصالح سوناطراك، موجهة لمصالح الصحة والسلامة والبيئة (HSE) بالوحدات والمنشآت على المستوى الوطني. تتيح تحديد المخاطر المهنية المرتبطة بالأنشطة ومناصب العمل وتقييمها ومتابعتها، مع إدارة متعددة الأدوار ومسارات اعتماد وإشعارات آلية. يتيح مديول خطط العمل تحديد التدابير الوقائية والتصحيحية وإسناد المسؤوليات ومتابعة التقدم. وتساعد لوحات القيادة على توجيه التقييمات ومتابعة مؤشرات HSE، كما يضمن مديول المراجع توحيد البيانات وطرق التقييم داخل سوناطراك. أُنجز في M2I Services وتم نشره على الخوادم المحلية لسوناطراك. التقنيات: Laravel، Vue.js.",
    },
  },
  {
    folder: "projet17",
    url: null,
    title: "PARC-AUTO",
    description: {
      fr: "Plateforme web de gestion du PARC-AUTO de Sonatrach, couvrant l'ensemble du cycle de vie des véhicules et des activités associées. Elle intègre plusieurs modules : véhicules et chauffeurs, demandes de déplacement, transport du personnel, entretien et maintenance, contrats avec les prestataires, assurances, vignettes, mise à la réforme des véhicules, etc. Elle centralise les données, suit les opérations et gère les échéances administratives et techniques du parc. Gestion multi-rôles, workflows de traitement, notifications et alertes automatisées, ainsi que des tableaux de bord personnalisés selon les profils, contribuent à améliorer la traçabilité, le suivi opérationnel et la maîtrise du patrimoine automobile de Sonatrach. Réalisé chez M2I Services et déployé sur les serveurs locaux de Sonatrach. Technologies : Laravel, Vue.js.",
      en: "Web platform for managing Sonatrach's vehicle fleet (PARC-AUTO), covering the full vehicle lifecycle and related activities. It includes several modules: vehicles and drivers, travel requests, staff transport, servicing and maintenance, supplier contracts, insurance, vehicle tax stickers, vehicle decommissioning, and more. It centralises data, tracks operations and manages the fleet's administrative and technical deadlines. Multi-role management, processing workflows, automated notifications and alerts, and role-based dashboards improve traceability, operational follow-up and control of Sonatrach's vehicle assets. Built at M2I Services and deployed on Sonatrach local servers. Technologies: Laravel, Vue.js.",
      ar: "منصة ويب لتسيير حظيرة سيارات سوناطراك (PARC-AUTO)، تغطي كامل دورة حياة المركبات والأنشطة المرتبطة بها. تضم عدة مديولات: المركبات والسائقين، طلبات التنقل، نقل المستخدمين، الصيانة، العقود مع المقاولين، التأمينات، القسيمة، إخراج المركبات من الخدمة وغيرها. تركّز البيانات وتتابع العمليات وتدير الآجال الإدارية والتقنية للحظيرة. ومع إدارة متعددة الأدوار ومسارات معالجة وإشعارات وتنبيهات آلية ولوحات قيادة مخصصة حسب الصلاحيات، تساهم المنصة في تحسين التتبع والمتابعة العملياتية والتحكم في الممتلكات من المركبات لدى سوناطراك. أُنجز في M2I Services وتم نشره على الخوادم المحلية لسوناطراك. التقنيات: Laravel، Vue.js.",
    },
  },
  {
    folder: "projet18",
    url: "https://tetralis-solutions.com/",
    title: "Tetralis Solutions",
    description: {
      fr: "Site vitrine de Tetralis Solutions, société dont je fais partie de l'équipe : présentation de l'entreprise, de ses services et prise de contact.",
      en: "Showcase website for Tetralis Solutions, the company whose team I am part of: company presentation, services and contact.",
      ar: "موقع تعريفي لشركة Tetralis Solutions التي أنتمي إلى فريقها: تقديم الشركة وخدماتها ووسائل التواصل.",
    },
  },
  {
    folder: "projet19",
    url: "https://accessoires-by-jas.vercel.app/",
    title: "Accessoires by Jas",
    description: {
      fr: "Boutique en ligne dédiée à la vente d'accessoires en acier, avec un panneau d'administration pour la gestion des commandes, des produits et du suivi de la boutique. Projet réalisé en freelance avec Supabase.",
      en: "Online store selling steel accessories, with an admin panel to manage orders, products and day-to-day store operations. Freelance project built with Supabase.",
      ar: "متجر إلكتروني لبيع الإكسسوارات المصنوعة من الفولاذ، مع لوحة إدارة لتسيير الطلبات والمنتجات ومتابعة المتجر. مشروع مُنجز بصفة مستقلة (Freelance) باستخدام Supabase.",
    },
  },
  // {
  //   folder: 'projet20',
  //   url: 'https://mirayaliss.vercel.app/fr',
  //   title: 'Mirayaliss',
  //   description: {
  //     fr: "Site vitrine d'un salon de beauté situé à El Achour, avec un espace d'administration pour la gestion des rendez-vous et des commandes de press-on nails. Projet réalisé en freelance avec Supabase.",
  //     en: 'Showcase website for a beauty salon in El Achour, with an admin area to manage appointments and press-on nails orders. Freelance project built with Supabase.',
  //     ar: 'موقع تعريفي لصالون تجميل يقع في الأبيار (العاشور)، مع فضاء إداري لتسيير المواعيد وطلبات الأظافر الاصطناعية (press-on nails). مشروع مُنجز بصفة مستقلة (Freelance) باستخدام Supabase.',
  //   },
  // },
  // {
  //   folder: 'projet21',
  //   url: 'https://os-tech-dz.vercel.app/',
  //   title: 'OS-Tech',
  //   description: {
  //     fr: 'Boutique en ligne de vente de smartphones et de leurs accessoires : catalogue, panier et commande. Projet réalisé en freelance avec Supabase.',
  //     en: 'Online store selling smartphones and their accessories: catalogue, cart and ordering. Freelance project built with Supabase.',
  //     ar: 'متجر إلكتروني لبيع الهواتف الذكية وملحقاتها: كتالوج، سلة مشتريات وطلب الشراء. مشروع مُنجز بصفة مستقلة (Freelance) باستخدام Supabase.',
  //   },
  // },
  // {
  //   folder: 'projet22',
  //   url: 'https://dark-furniture.vercel.app/fr',
  //   title: 'Dark Furniture',
  //   description: {
  //     fr: "Site vitrine d'un showroom de meubles sur mesure situé à Bouira : présentation des réalisations et prise de contact. Projet réalisé en freelance.",
  //     en: 'Showcase website for a custom furniture showroom in Bouira: portfolio of creations and contact. Freelance project.',
  //     ar: 'موقع تعريفي لمعرض أثاث حسب الطلب يقع في البويرة: عرض الإنجازات ووسائل التواصل. مشروع مُنجز بصفة مستقلة (Freelance).',
  //   },
  // },
  {
    folder: "projet1",
    url: "https://lieupropre.ca/",
    title: "Lieu Propre",
    description: {
      fr: "Site vitrine multilingue pour une entreprise de nettoyage professionnel au Canada : présentation des services (maisons, bureaux, commerces, cliniques, entrepôts), page À propos et formulaire de contact pour les demandes de devis.",
      en: "Multilingual showcase website for a professional cleaning company in Canada: service pages (homes, offices, retail, clinics, warehouses), an about page and a contact form for quote requests.",
      ar: "موقع تعريفي متعدد اللغات لشركة تنظيف احترافية في كندا: عرض الخدمات (منازل، مكاتب، محلات، عيادات، مستودعات)، صفحة من نحن، ونموذج تواصل لطلب عروض الأسعار.",
    },
  },
  {
    folder: "projet2",
    url: "https://lamine-bouchaib-site.vercel.app/",
    title: "MERTA MED",
    description: {
      fr: "Site vitrine de MERTA MED, fabricant algérien de matériel médical et entreprise de travaux hospitaliers : activités, services et prise de contact.",
      en: "Showcase website for MERTA MED, an Algerian manufacturer of medical equipment and hospital works contractor: activities, services and contact.",
      ar: "موقع تعريفي لشركة MERTA MED الجزائرية المتخصصة في تصنيع المعدات الطبية وإنجاز الأشغال الاستشفائية: عرض النشاطات والخدمات ووسائل التواصل.",
    },
  },
  {
    folder: "projet3",
    url: "https://spl-dz.com/",
    title: "SPL-it Informatique",
    description: {
      fr: "Site institutionnel de SPL-it, société algérienne de distribution et de solutions informatiques, avec ses pôles logiciel (Yocto Soft) et matériel (Spotlight Hardware).",
      en: "Corporate website for SPL-it, an Algerian IT distribution and solutions company, presenting its software (Yocto Soft) and hardware (Spotlight Hardware) divisions.",
      ar: "الموقع المؤسسي لشركة SPL-it الجزائرية لتوزيع الحلول المعلوماتية، مع تقديم فرعيها للبرمجيات (Yocto Soft) والعتاد (Spotlight Hardware).",
    },
  },
  {
    folder: "projet4",
    url: "https://izzysouk.com/",
    title: "Izzy Souk",
    description: {
      fr: "Boutique en ligne de produits et équipements médicaux en Algérie : catalogue, recherche, panier, livraison dans les 58 wilayas et paiement à la livraison.",
      en: "Online store for medical products and equipment in Algeria: catalogue, search, cart, delivery to all 58 provinces and cash on delivery.",
      ar: "متجر إلكتروني للمنتجات والمعدات الطبية في الجزائر: كتالوج، بحث، سلة مشتريات، توصيل إلى 58 ولاية والدفع عند الاستلام.",
    },
  },
  {
    folder: "projet5",
    url: "https://plnog.com/",
    title: "Pipeline Oil & Gas",
    description: {
      fr: "Site trilingue (français, anglais, arabe) de Pipeline Oil & Gas, entreprise de travaux pétroliers et gaziers : présentation de l'entreprise, de sa stratégie, de ses références et de son savoir-faire.",
      en: "Trilingual website (French, English, Arabic) for Pipeline Oil & Gas, an oil and gas works company: company profile, strategy, references and expertise.",
      ar: "موقع بثلاث لغات (الفرنسية، الإنجليزية، العربية) لشركة Pipeline Oil & Gas للأشغال البترولية والغازية: تقديم الشركة واستراتيجيتها ومراجعها وخبراتها.",
    },
  },
  {
    folder: "projet6",
    url: "https://www.catalyst-dz.com/",
    title: "Catalyst",
    description: {
      fr: "Site de Catalyst, cabinet algérien de conseil et d'innovation : formations, consulting, bootcamps, open innovation et blog d'actualités.",
      en: "Website for Catalyst, an Algerian consulting and innovation firm: training programs, consulting, bootcamps, open innovation and a news blog.",
      ar: "موقع Catalyst، مكتب جزائري للاستشارات والابتكار: تكوينات، استشارات، معسكرات تدريبية، ابتكار مفتوح ومدونة أخبار.",
    },
  },
  {
    folder: "projet7",
    url: "https://pfe-master-front.vercel.app/",
    title: {
      fr: "Plateforme de gestion des tâches",
      en: "Task management platform",
      ar: "منصة إدارة المهام",
    },
    description: {
      fr: "Projet de fin d'études réalisé chez TEKKOLAB : plateforme web de gestion des tâches pour les équipes (création, assignation, échéances, suivi de l'avancement), développée avec Next.js, Node.js, Express.js et MongoDB.",
      en: "Final-year project built at TEKKOLAB: a web platform for team task management (create, assign, set due dates, track progress), built with Next.js, Node.js, Express.js and MongoDB.",
      ar: "مشروع تخرّج أُنجز في TEKKOLAB: منصة ويب لإدارة مهام الفرق (إنشاء المهام، إسنادها، تحديد آجالها ومتابعة تقدّمها)، مطوّرة باستخدام Next.js وNode.js وExpress.js وMongoDB.",
    },
  },
  {
    folder: "projet8",
    url: "https://nour-al-quran-academie.vercel.app/",
    title: {
      fr: "Nour Al Quran Académie",
      en: "Nour Al Quran Academy",
      ar: "أكاديمية نور القرآن",
    },
    description: {
      fr: "Plateforme de gestion des séances d'apprentissage du Coran : organisation des cours, suivi de la mémorisation et espace dédié aux parents pour suivre la progression de leurs enfants.",
      en: "Platform for managing Quran learning sessions: class organisation, memorisation tracking and a parent space to follow their children's progress.",
      ar: "منصة متكاملة لإدارة حلقات تعليم القرآن الكريم: تنظيم الحصص، متابعة الحفظ، وفضاء خاص بالأولياء لمتابعة تقدّم أبنائهم.",
    },
  },
  {
    folder: "projet9",
    url: "https://cadnel-plateforme.vercel.app/",
    title: "Check Time",
    description: {
      fr: "Application RH : gestion des ressources humaines, suivi de la présence et rapports personnalisables, avec un espace personnel sécurisé pour chaque employé.",
      en: "HR application: human resources management, attendance tracking and custom reports, with a secure personal space for each employee.",
      ar: "تطبيق للموارد البشرية: تسيير الموارد البشرية، متابعة الحضور وتقارير قابلة للتخصيص، مع فضاء شخصي آمن لكل موظف.",
    },
  },
  {
    folder: "projet10",
    url: "https://marvel-quiz-kappa.vercel.app/",
    title: "Marvel Quiz",
    description: {
      fr: "Quiz interactif sur l'univers Marvel développé avec React : inscription, connexion, plusieurs niveaux de difficulté et calcul du score.",
      en: "Interactive Marvel universe quiz built with React: sign-up, login, several difficulty levels and scoring.",
      ar: "اختبار تفاعلي حول عالم Marvel مطوَّر بـ React: تسجيل، دخول، عدة مستويات صعوبة واحتساب النتيجة.",
    },
  },
  {
    folder: "projet11",
    url: "http://burger-menu.rf.gd/",
    title: "Burger Code",
    description: {
      fr: "Carte de restaurant en ligne : menus par catégories (burgers, snacks, salades, boissons, desserts) avec prix et bouton de commande.",
      en: "Online restaurant menu: dishes by category (burgers, snacks, salads, drinks, desserts) with prices and an order button.",
      ar: "قائمة طعام إلكترونية لمطعم: وجبات مصنّفة (برغر، وجبات خفيفة، سلطات، مشروبات، حلويات) مع الأسعار وزر الطلب.",
    },
  },
  {
    folder: "projet12",
    url: "https://abdenourgarti.github.io/travel-agency/",
    title: { fr: "Agence de voyage", en: "Travel Agency", ar: "وكالة سفر" },
    description: {
      fr: "Page d'accueil d'une agence de voyage : destinations, circuits et contact, intégrée en HTML et CSS.",
      en: "Travel agency landing page: destinations, tours and contact, built with HTML and CSS.",
      ar: "صفحة تعريفية لوكالة سفر: الوجهات، الجولات ووسائل التواصل، منجزة بـ HTML وCSS.",
    },
  },
  {
    folder: "projet13",
    url: "https://abdenourgarti.github.io/serpent-game/",
    title: { fr: "Jeu du serpent", en: "Snake game", ar: "لعبة الثعبان" },
    description: {
      fr: "Le jeu du serpent revisité en JavaScript sur un canvas HTML5 : contrôle au clavier et score affiché en direct.",
      en: "The classic snake game rebuilt in JavaScript on an HTML5 canvas: keyboard controls and a live score.",
      ar: "لعبة الثعبان الكلاسيكية بلغة JavaScript على لوحة HTML5 Canvas: تحكّم عبر لوحة المفاتيح وعرض النتيجة مباشرة.",
    },
  },
  {
    folder: "projet14",
    url: "https://abdenourgarti.github.io/actrices/",
    title: {
      fr: "Top 5 des actrices",
      en: "Top 5 actresses",
      ar: "أفضل 5 ممثلات",
    },
    description: {
      fr: "Page interactive présentant cinq actrices et leurs meilleurs films, avec une galerie animée en HTML, CSS et JavaScript.",
      en: "Interactive page featuring five actresses and their best films, with an animated gallery in HTML, CSS and JavaScript.",
      ar: "صفحة تفاعلية تعرض خمس ممثلات وأفضل أفلامهن، مع معرض صور متحرك بـ HTML وCSS وJavaScript.",
    },
  },
].map((project) => ({ ...project, images: imagesOf(project.folder) }));

export default projects;
