import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import DigitalExperience from './digitalexperience';
import Skills from './skills';
import leancv2 from './img/leancv2.jpg';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={leancv2} alt="Leandro Fulco" style={{height: '250px', borderRadius: '90px'}} />
                        </div>

                        <h2 style={{padingTop: '2em'}}>Leandro Matías Fulco</h2>
                        <h4 style={{color: 'grey'}}>Programador Web Full Stack</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Soy un jóven programador web full stack, mi objetivo es la búsqueda de experiencia laboral para crecer tanto personal como profesionalmente, me destaco por mi capacidad de aprendizaje, la comunicación interpersonal y el trabajo en equipo.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Localidad</h5>
                        <p>Gerli, Lanús Oeste, Buenos Aires</p>
                        <h5>Teléfono</h5>
                        <p>1165200153</p>
                        <h5>Email</h5>
                        <p>leandro.fulco@gmail.com</p>
                        <h5>Fecha de nacimiento</h5>
                        <p>03/02/2000</p>
                        <h5>Sitios Web</h5>
                        <p>https://github.com/leandrofulco03</p>
                        <p>https://www.linkedin.com/in/leandrofulco/</p>
                        <p>https://www.behance.net/leandrofulco00</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Formación Académica</h2>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName= "Digital House"
                            schoolDescription= "Capacitación Desarrollo Web Full Stack"
                            schoolThemes= "HTML/CSS - Bootstrap - JavaScript - PHP - Laravel V 5.X - React JS - MySQL - Programación orientada a objetos - Repositorios GIT - SCRUM"
                        />

                        <Education
                            startYear={2020}
                            endYear={"Actualidad"}
                            schoolName= "Udemy"
                            schoolDescription= "Formación a traves de cursos online"
                            schoolThemes= "JavaScript - NodeJS - ReactJS"
                        />

                        <Education
                            startYear={2012}
                            endYear={2017}
                            schoolName= "Instituto San Juan Bautista"
                            schoolDescription= "Secundario"
                            schoolThemes= "Bachiller en Economía y Administración"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experiencia Digital</h2>
                        
                        <DigitalExperience 
                            startYear= {"Noviembre 2020"}
                            endYear= {"Noviembre 2020"}
                            jobName= "Lean's Todo List"
                            jobDescription= "Proyecto autónomo mediante curso online"
                            jobThemes= "Lista de tareas utlizando JavaScript"
                        />

                        <DigitalExperience
                            startYear= {"Abril 2020"}
                            endYear={"Mayo 2020"}
                            jobName= "MouthApp - By Leandro Fulco"
                            jobDescription= "Proyecto autónomo"
                            jobThemes= "Task Application utilizando Laravel - PHP - HTML/CSS - JavaScript - MySQL"
                        />

                        <DigitalExperience
                            startYear= {"Septiembre 2019"}
                            endYear={"Marzo 2020"}
                            jobName= "SimpsonsTrivia - Digital House"
                            jobDescription= "Creación, desarrollo y diseño realizado bajo el marco de Digital House"
                            jobThemes= "Juego de trivia utilizando Laravel - PHP - HTML/CSS - JavaScript - MySQL"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={60}
                        />
                        <Skills
                            skill="PHP"
                            progress={50}
                        />
                        <Skills
                            skill="Laravel"
                            progress={55}
                        />
                        <Skills
                            skill="React JS"
                            progress={50}
                        />
                        <Skills
                            skill="MySQL"
                            progress={40}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={30}
                        />

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;