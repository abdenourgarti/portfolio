import React from 'react';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiUdemy } from 'react-icons/si';
import { useLang } from '../../i18n';
import Reveal from '../Reveal';
import './education.css';

const degrees = [
  {
    period: '2022 – 2024',
    title: { fr: 'Diplôme en ingénierie informatique', en: 'Computer Engineering Degree', ar: 'شهادة في هندسة الإعلام الآلي' },
    school: {
      fr: 'Université des Sciences et de la Technologie Houari Boumediene (USTHB), Alger',
      en: 'University of Science and Technology Houari Boumediene (USTHB), Algiers',
      ar: 'جامعة العلوم والتكنولوجيا هواري بومدين (USTHB)، الجزائر العاصمة',
    },
    detail: { fr: 'Spécialité génie logiciel', en: 'Specialization in Software Engineering', ar: 'تخصص هندسة البرمجيات' },
  },
  {
    period: '2019 – 2022',
    title: { fr: 'Licence en informatique', en: "Bachelor's Degree in Computer Science", ar: 'ليسانس في الإعلام الآلي' },
    school: {
      fr: 'Université des Sciences et de la Technologie Houari Boumediene (USTHB), Alger',
      en: 'University of Science and Technology Houari Boumediene (USTHB), Algiers',
      ar: 'جامعة العلوم والتكنولوجيا هواري بومدين (USTHB)، الجزائر العاصمة',
    },
    detail: {
      fr: 'Spécialité informatique générale (ACAD)',
      en: 'Specialization in General Computer Science (ACAD)',
      ar: 'تخصص الإعلام الآلي العام (ACAD)',
    },
  },
  {
    period: '2018',
    title: { fr: 'Baccalauréat', en: 'Baccalaureate Diploma', ar: 'شهادة البكالوريا' },
    school: { fr: 'Lycée Hamza, Bouira', en: 'Hamza High School, Bouira', ar: 'ثانوية حمزة، البويرة' },
    detail: {
      fr: 'Série technique mathématique, option génie civil',
      en: 'Technical Mathematics Series, Civil Engineering Option',
      ar: 'شعبة تقني رياضي، خيار الهندسة المدنية',
    },
  },
];

// date is YYYY-MM, displayed with the month name of the current language.
const certifications = [
  {
    date: '2024-04',
    title: { fr: "React JS pour tous : l'ultime formation", en: 'React JS for everyone: the ultimate course', ar: 'React JS للجميع: الدورة الشاملة' },
    url: 'https://www.udemy.com/certificate/UC-f5f92c33-9438-4f71-a217-438ac500b7f7/',
  },
  {
    date: '2024-04',
    title: { fr: 'Maîtriser Node.js et son écosystème', en: 'Mastering Node.js and its ecosystem', ar: 'إتقان Node.js ومنظومته' },
    url: 'https://www.udemy.com/certificate/UC-abc171ea-e609-415e-8d47-e0ccef189694/',
  },
  {
    date: '2023-04',
    title: { fr: 'Cours SQL avancé', en: 'The Advanced SQL Course', ar: 'دورة SQL المتقدمة' },
    url: 'https://www.udemy.com/certificate/UC-f0c7dd1d-ce17-4c01-9dc3-849ca43db537',
  },
  {
    date: '2023-04',
    title: { fr: 'JavaScript : le guide ultime', en: 'JavaScript Ultimate Guide', ar: 'الدليل الشامل لـ JavaScript' },
    url: 'https://www.udemy.com/certificate/UC-4e52bffb-3dc8-45bf-b54a-6aee2758880e',
  },
  {
    date: '2022-11',
    title: 'WordPress Express',
    url: 'https://www.udemy.com/certificate/UC-aca66b72-3b4d-488a-af39-cf27c0ceab18/',
  },
  {
    date: '2022-09',
    title: { fr: 'Formation complète développeur web', en: 'Complete Web Developer Course', ar: 'الدورة الشاملة لمطوّر الويب' },
    url: 'https://www.udemy.com/certificate/UC-9b25ad73-924e-4b3d-90cc-942d29881f69',
  },
  {
    date: '2022-09',
    title: { fr: 'Programmation en C', en: 'C Programming', ar: 'البرمجة بلغة C' },
    url: 'https://www.udemy.com/certificate/UC-f168f572-27ae-4963-8557-c71c4275429d/',
  },
];

// ar-DZ gives the Algerian month names (جانفي، فيفري…) with Latin digits.
const LOCALES = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-DZ' };

const Education = () => {
  const { lang, ui, t } = useLang();
  const month = new Intl.DateTimeFormat(LOCALES[lang], { month: 'long', year: 'numeric' });

  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <h2>{ui.education.title}</h2>
          <p>{ui.education.lead}</p>
        </Reveal>

        <div className="edu-grid">
          <Reveal>
            <h3 className="edu-subtitle">{ui.education.degrees}</h3>
            <ol className="degrees">
              {degrees.map((degree, i) => (
                <li key={i}>
                  <p className="degree-period">{degree.period}</p>
                  <h4>{t(degree.title)}</h4>
                  <p className="degree-detail">{t(degree.detail)}</p>
                  <p className="degree-school">{t(degree.school)}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="edu-subtitle">{ui.education.certs}</h3>
            <ul className="certs">
              {certifications.map((cert) => (
                <li key={cert.url}>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert">
                    <SiUdemy className="cert-icon" aria-hidden="true" />
                    <span className="cert-body">
                      <span className="cert-title">{t(cert.title)}</span>
                      <span className="cert-meta">
                        Udemy{lang === 'ar' ? '، ' : ', '}
                        <time dateTime={cert.date}>{month.format(new Date(`${cert.date}-01T12:00:00`))}</time>
                      </span>
                    </span>
                    <HiArrowTopRightOnSquare className="cert-open" aria-hidden="true" />
                    <span className="visually-hidden">{ui.education.see}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
