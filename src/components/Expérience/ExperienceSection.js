import React, { useRef } from 'react';
import tekkolabLogo from '../../images/logo tekkolab.png';
import m2iLogo from '../../images/m2i-logo.png';
import freelanceLogo from '../../images/freelance.png';
import { useLang } from '../../i18n';
import { gsap, reducedMotion, scrubIn, useGSAP } from '../../scroll';
import Reveal from '../Reveal';
import './expérience.css';

const experiences = [
  {
    logo: m2iLogo,
    company: 'M2I Services',
    title: { fr: 'Ingénieur web Full Stack', en: 'Full Stack Web Engineer', ar: 'مهندس ويب Full Stack' },
    period: { fr: 'Déc. 2024 – aujourd’hui', en: 'Dec 2024 – Present', ar: 'ديسمبر 2024 – حتى الآن' },
    context: {
      fr: 'Chez M2I Services, je travaille sur des projets variés et exigeants avec des technologies web modernes :',
      en: 'As a Full Stack Web Engineer at M2I Services, I work on a variety of challenging projects using modern web technologies:',
      ar: 'بصفتي مهندس ويب Full Stack في M2I Services، أعمل على مشاريع متنوعة وطموحة باستخدام تقنيات الويب الحديثة:',
    },
    points: {
      fr: [
        "Développement et maintenance d'applications web d'entreprise avec Laravel (PHP) et Vue.js",
        'Collaboration avec des équipes pluridisciplinaires pour traduire les besoins métier en solutions techniques',
        'Rédaction de propositions techniques en réponse aux cahiers des charges des clients, planning et architecture compris',
        'Application des bonnes pratiques de qualité de code, de performance et de sécurité',
        "Participation à la conception des systèmes, à la modélisation des bases de données et au développement d'API pour des applications évolutives",
        'Implication sur tout le cycle de vie des projets, du recueil des besoins au déploiement et à la maintenance',
      ],
      en: [
        'Developing and maintaining enterprise-level web applications using Laravel (PHP) and Vue.js',
        'Collaborating with cross-functional teams to analyze business requirements and transform them into technical solutions',
        'Creating comprehensive technical proposals in response to client specifications, including planning and solution architecture',
        'Implementing best practices for code quality, performance optimization, and security standards',
        'Contributing to system design, database modeling, and API development for scalable web applications',
        'Participating in project lifecycle from requirements gathering to deployment and maintenance',
      ],
      ar: [
        'تطوير وصيانة تطبيقات ويب للمؤسسات باستخدام Laravel (PHP) وVue.js',
        'التعاون مع فرق متعددة التخصصات لتحليل احتياجات العمل وتحويلها إلى حلول تقنية',
        'إعداد عروض تقنية شاملة استجابةً لدفاتر شروط العملاء، تتضمن التخطيط وهندسة الحل',
        'تطبيق أفضل الممارسات في جودة الشيفرة وتحسين الأداء ومعايير الأمان',
        'المساهمة في تصميم الأنظمة ونمذجة قواعد البيانات وتطوير واجهات API لتطبيقات قابلة للتوسع',
        'المشاركة في دورة حياة المشروع كاملةً، من جمع المتطلبات إلى النشر والصيانة',
      ],
    },
  },
  {
    logo: freelanceLogo,
    company: { fr: 'Freelance', en: 'Freelance', ar: 'عمل حر' },
    title: { fr: 'Développeur web freelance', en: 'Freelance Web Developer', ar: 'مطوّر ويب مستقل' },
    period: { fr: '2022 – aujourd’hui', en: '2022 – Present', ar: '2022 – حتى الآن' },
    context: {
      fr: "En freelance, j'ai livré un large éventail de projets web pour des clients internationaux :",
      en: 'As a freelance web developer, I have successfully delivered a wide range of web projects for international clients:',
      ar: 'بصفتي مطوّراً مستقلاً، أنجزت مجموعة واسعة من مشاريع الويب لعملاء دوليين:',
    },
    points: {
      fr: [
        "Conception et développement d'applications web sur mesure avec React.js, Next.js, Node.js et MongoDB",
        'Création de plateformes e-commerce responsives avec paiement sécurisé, gestion des stocks et authentification des utilisateurs',
        'Réalisation de sites professionnels optimisés pour le référencement, avec formulaires de contact et gestion de contenu',
        "Intégration de designs responsives qui s'adaptent à tous les appareils et à toutes les tailles d'écran",
        'Accompagnement de bout en bout : analyse des besoins, design UI/UX, développement, tests et mise en ligne',
        'Gestion de la relation client et livraison des projets dans les délais et le budget',
      ],
      en: [
        'Designing and developing custom web applications using modern technologies including React.js, Next.js, Node.js, and MongoDB',
        'Building responsive e-commerce platforms with secure payment gateways, inventory management, and user authentication systems',
        'Creating professional business websites with SEO optimization, contact forms, and content management systems',
        'Implementing responsive designs that work flawlessly across all devices and screen sizes',
        'Providing end-to-end services including requirements analysis, UI/UX design, development, testing, and deployment',
        'Managing client relationships and delivering projects on time and within budget requirements',
      ],
      ar: [
        'تصميم وتطوير تطبيقات ويب مخصّصة باستخدام React.js وNext.js وNode.js وMongoDB',
        'إنشاء منصات تجارة إلكترونية متجاوبة مع بوابات دفع آمنة وإدارة المخزون ومصادقة المستخدمين',
        'إنجاز مواقع احترافية محسّنة لمحركات البحث (SEO) مع نماذج تواصل وأنظمة لإدارة المحتوى',
        'تنفيذ تصاميم متجاوبة تعمل بسلاسة على جميع الأجهزة وأحجام الشاشات',
        'مرافقة شاملة: تحليل المتطلبات، تصميم UI/UX، التطوير، الاختبار والنشر',
        'إدارة العلاقة مع العملاء وتسليم المشاريع في الآجال وضمن الميزانية',
      ],
    },
  },
  {
    logo: tekkolabLogo,
    company: 'SARL TEKKOLAB',
    title: { fr: 'Développeur web Full Stack', en: 'Full Stack Web Developer', ar: 'مطوّر ويب Full Stack' },
    period: { fr: 'Déc. 2023 – juil. 2024', en: 'Dec 2023 – Jul 2024', ar: 'ديسمبر 2023 – جويلية 2024' },
    context: {
      fr: "Projet de fin d'études : « Conception et réalisation d'une plateforme web/mobile de gestion des tâches ». Les compétences acquises et les réalisations dont je suis le plus fier :",
      en: 'I worked on an end-of-studies project entitled "Design and creation of a web/mobile task management platform". Here are the skills I developed and the accomplishments I\'m particularly proud of:',
      ar: 'مشروع تخرّج بعنوان «تصميم وإنجاز منصة ويب/موبايل لإدارة المهام». إليك المهارات التي اكتسبتها والإنجازات التي أفخر بها:',
    },
    points: {
      fr: [
        'Recueil des besoins et rédaction du cahier des charges',
        'Proposition et présentation d’une solution adaptée aux besoins recueillis',
        "Analyse et conception approfondies de l'architecture de la plateforme",
        "Développement d'une plateforme web de gestion des tâches avec Next.js, Node.js et Express.js",
        'Gestion de la base de données avec MongoDB et Mongoose',
        'Gestion de versions et collaboration avec GitHub',
        'Application des principes de conception logicielle et des méthodes de gestion de projet',
        'Participation active à la gestion des tâches et à la planification du projet',
      ],
      en: [
        'Conducted requirements gathering and created the project specifications document',
        'Proposed and presented a solution based on the gathered requirements',
        "Performed thorough analysis and design for the platform's architecture",
        'Developed a web task management platform using Next.js, Node.js, Express.js',
        'Managed the database with MongoDB and Mongoose',
        'Used GitHub for version control and collaboration',
        'Applied software design principles and project management methodologies',
        'Actively participated in task management and project planning',
      ],
      ar: [
        'جمع المتطلبات وإعداد دفتر الشروط',
        'اقتراح حلّ مناسب للمتطلبات وتقديمه',
        'تحليل وتصميم معمّق لهندسة المنصة',
        'تطوير منصة ويب لإدارة المهام باستخدام Next.js وNode.js وExpress.js',
        'إدارة قاعدة البيانات باستخدام MongoDB وMongoose',
        'استخدام GitHub لإدارة النسخ والعمل التعاوني',
        'تطبيق مبادئ تصميم البرمجيات ومنهجيات إدارة المشاريع',
        'المشاركة الفعّالة في إدارة المهام وتخطيط المشروع',
      ],
    },
  },
];

const ExperienceSection = () => {
  const { ui, t } = useLang();
  const section = useRef(null);

  useGSAP(
    () => {
      scrubIn('.xp-item', { autoAlpha: 0, y: 80, z: -140, rotateX: 22, rotateY: -10 });
      // The rail fills as you read down the timeline.
      if (!reducedMotion) {
        gsap.fromTo(
          '.xp-list',
          { '--fill': 0 },
          { '--fill': 1, ease: 'none', scrollTrigger: { trigger: '.xp-list', start: 'top 70%', end: 'bottom 60%', scrub: true } }
        );
      }
    },
    { scope: section }
  );

  return (
    <section id="experience" className="section" ref={section}>
      <div className="container">
        <Reveal className="section-head">
          <h2>{ui.experience.title}</h2>
          <p>{ui.experience.lead}</p>
        </Reveal>

        <ol className="xp-list">
          {experiences.map((xp, i) => (
            <li key={i} className="xp-item">
              <div className="xp-logo">
                <img src={xp.logo} alt="" />
              </div>
              <article className="xp-card">
                <header className="xp-head">
                  <div>
                    <h3>{t(xp.title)}</h3>
                    <p className="xp-company">{t(xp.company)}</p>
                  </div>
                  <p className="xp-period">{t(xp.period)}</p>
                </header>
                <p className="xp-context">{t(xp.context)}</p>
                <ul className="xp-points">
                  {t(xp.points).map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
