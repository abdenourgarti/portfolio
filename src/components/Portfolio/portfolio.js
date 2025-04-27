import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Serpent from '../../images/serpent.png';
import Voyage from '../../images/voyage.png';
import Articles from '../../images/actrices.png';
import TaskManagment from '../../images/task managment.png';
import MarvelQuiz from '../../images/marvel-quiz.png';
import NourAlQuraan from '../../images/nour-al-quran-academie.png';
import EntretienMenager from '../../images/entretien-menager.png';
import Spl from '../../images/spl.png';
import Plnog from '../../images/plnog.png';
import MertaMED from '../../images/merta.png';
import Checktime from '../../images/checktime.png';
import Catalyst from '../../images/catalyst.png';
import Izzysouk from '../../images/izzysouk.png';
import BurgerMenu from '../../images/burger-menu.png';
import './portfolio.css';

const projects = [
    {
        lien: 'https://lieupropre.ca/',
        image: EntretienMenager,
        alt: 'Entretien-Ménager'
    },
    {
        lien: 'https://lamine-bouchaib-site.vercel.app/',
        image: MertaMED,
        alt: 'merta-med'
    },
    {
        lien: 'https://spl-dz.com/',
        image: Spl,
        alt: 'spl-dz'
    },
    {
        lien: 'https://izzysouk.com/',
        image: Izzysouk,
        alt: 'izzy-souk'
    },
    {
        lien: 'https://plnog.com/',
        image: Plnog,
        alt: 'plnog'
    },
    {
        lien: 'https://www.catalyst-dz.com/',
        image: Catalyst,
        alt: 'Task-managment-platforme'
    },
    {
        lien: 'https://pfe-master-front.vercel.app/',
        image: TaskManagment,
        alt: 'Task-managment-platforme'
    },
    {
        lien: 'https://nour-al-quran-academie.vercel.app/',
        image: NourAlQuraan,
        alt: 'nour-al-quran'
    },
    {
        lien: 'https://cadnel-plateforme.vercel.app/',
        image: Checktime,
        alt: 'checktime-platforme'
    },
    {
        lien: 'https://marvel-quiz-kappa.vercel.app/',
        image: MarvelQuiz,
        alt: 'Marvel-quiz'
    },
    {
        lien: 'http://burger-menu.rf.gd/',
        image: BurgerMenu,
        alt: 'Burger menu'
    },
    {
        lien: 'https://abdenourgarti.github.io/travel-agency/',
        image: Voyage,
        alt: 'Travel-agency'
    },
    {
        lien: 'https://abdenourgarti.github.io/serpent-game/',
        image: Serpent,
        alt: 'Serpent-game'
    },
    {
        lien: 'https://abdenourgarti.github.io/actrices/',
        image: Articles,
        alt: 'Top 5 actrices'
    },
];

const Project = ({ lien, image, alt }) => {
    return (
        <div className="projet">
            <a href={lien} target="_blank" rel="noopener noreferrer">
                <img src={image} className="img-thumbnail" alt={alt} />
            </a>
        </div>
    );
};

const Portfolio = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [projectsPerPage, setProjectsPerPage] = useState(4);
    const [totalPages, setTotalPages] = useState(Math.ceil(projects.length / projectsPerPage));

    useEffect(() => {
        const handleResize = () => {
            // Adapter le nombre de projets par page en fonction de la taille de l'écran
            if (window.innerWidth < 768) {
                setProjectsPerPage(1);
            } else {
                setProjectsPerPage(4);
            }
        };

        // Appel initial
        handleResize();
        
        // Ajouter l'écouteur d'événements
        window.addEventListener('resize', handleResize);
        
        // Nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Recalculer le nombre total de pages lorsque projectsPerPage change
    useEffect(() => {
        setTotalPages(Math.ceil(projects.length / projectsPerPage));
        // Réinitialiser la page courante si nécessaire
        if (currentPage >= Math.ceil(projects.length / projectsPerPage)) {
            setCurrentPage(0);
        }
    }, [projectsPerPage, projects.length, currentPage]);

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    // Calculer l'indice de début et de fin pour les projets à afficher
    const startIndex = currentPage * projectsPerPage;
    const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

    return (
        <section id="portfolio">            
            <h2>Projects</h2>
            
            <div className="portfolio-container">
                <button 
                    className="pagination-btn prev-btn" 
                    onClick={prevPage}
                    aria-label="Previous projects"
                >
                    <FaChevronLeft />
                </button>
                
                <div className="projets">
                    {visibleProjects.map((projet, index) => (
                        <Project 
                            key={`${currentPage}-${index}`} 
                            lien={projet.lien} 
                            image={projet.image} 
                            alt={projet.alt}
                        />
                    ))}
                </div>
                
                <button 
                    className="pagination-btn next-btn" 
                    onClick={nextPage}
                    aria-label="Next projects"
                >
                    <FaChevronRight />
                </button>
            </div>
            
            <div className="pagination-indicators">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <span 
                        key={index} 
                        className={`pagination-dot ${currentPage === index ? 'active' : ''}`} 
                        onClick={() => setCurrentPage(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;