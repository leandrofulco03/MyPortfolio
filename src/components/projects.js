import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/* Project 1 */ }
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>LBooks</CardTitle>
                    <CardText>
                    Aplicación para poder guardar libros y agregarle una calificación.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/leandrofulco03/LBooks">GitHub</a></Button>
                        <Button colored><a href="https://www.behance.net/gallery/109730391/LBooks" target="_blank" rel="noreferrer">Behance</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */ }
              {/*  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center / cover'}}>React Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }else if (this.state.activeTab === 1) {
            return (
            <div className="projects-grid"> */}
                {/* Project 1 */ }
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.secret-source.eu/wp-content/uploads/2017/11/Laravel-logo.jpg) center / cover'}}>MouthApp</CardTitle>
                    <CardText>
                    Aplicación de tareas realizado con el framework Laravel, con la utilización de HTML, CSS, PHP, JavaScript y MySQL.
                    </CardText>
                    <CardActions border>
                        <Button colored><a href="https://github.com/leandrofulco03/MouthApp">GitHub</a></Button>
                        <Button colored><a href="https://www.behance.net/gallery/106543505/MouthApp">Behance</a></Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

               {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.secret-source.eu/wp-content/uploads/2017/11/Laravel-logo.jpg) center / cover'}}>Laravel Project #2</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
            </Card> */}

                </div>
            )
        }else if (this.state.activeTab === 2) {
           return (
            <div className="projects-grid">
            {/* Project 1 */ }
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://programacion.net/files/article/20160727120738_javascript.png) center / cover'}}>Lean's Todo List</CardTitle>
                <CardText>
                Aplicación de tareas utilizando JavaScript
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/leandrofulco03/ToDo-App" target="_blank" rel="noreferrer">GitHub</a></Button>
                    <Button colored><a href="https://www.behance.net/gallery/108986887/ToDo-List" target="_blank" rel="noreferrer">Behance</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
           ) 
        }else if (this.state.activeTab === 3) {
            return (
                <div><h1>Empty</h1></div>
            )
        }
    }

    render() {
        return (
            <div classname="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Projects;