import React from 'react'
import Serpent from '../../images/serpent.png'
import Voyage from '../../images/voyage.png'
import Articles from '../../images/actrices.png'
import TaskManagment from '../../images/task managment.png'
import MarvelQuiz from '../../images/marvel-quiz.png'
//import FootApp from '../../images/foot-app.png'
import BurgerMenu from '../../images/burger-menu.png'
import './portfolio.css'


const projects = [
    {
        lien: 'https://pfe-master-front.vercel.app/',
        image: TaskManagment,
        alt: 'Task-managment-platforme'
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
]

const Project = ({lien, image, alt}) => {
    return(
        <div className="projet">
            <a href={lien} target="_blank">
                <img src={image} className="img-thumbnail" alt={alt} />
            </a>
        </div>
    )
}

const Portfolio = () => {
  return (
    <section id="portfolio">            
        <h2>Projects</h2>
        <div className="projets">
            {projects.map((projet, index) => (
                <Project key={index} lien={projet.lien} image={projet.image} alt={projet.alt}/>
            ))}
        </div>
    </section>
  )
}

export default Portfolio
