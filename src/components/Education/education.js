import React from 'react'
import "./education.css"
import { FaBriefcase, FaClock } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education">
            <div className="container">
                <div className="divider white"></div>
                <h2>Education</h2>
                
                <ul className="timeline">
                    <li>
                        <div className="timeline-badge"><FaBriefcase /></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Diplôme d'ingénieur informatique</h3>
                                    <h4>Université -USTHB- Alger</h4>
                                    <p className="text-muted"><FaClock className='icon'/>2022-2024</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Spécialité ingénirié des logiciels</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge"><FaBriefcase /></div>
                        <div className="timeline-panel-container-inverted">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Diplôme de licence informatique</h3>
                                    <h4>Université -USTHB- Alger</h4>
                                    <p className="text-muted"><FaClock className='icon'/>2019-2022</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Spécialité informatique générale - ACAD -</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge"><FaBriefcase /></div>
                        <div className="timeline-panel-container">
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h3>Diplôme de baccalauréat</h3>
                                    <h4>Lycée Hamza - Bouira</h4>
                                    <p className="text-muted"><FaClock className='icon'/>2018</p>
                                </div>
                                <div className="timeline-body">
                                    <p>Série math technique, option génie civil</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
  )
}

export default Education
