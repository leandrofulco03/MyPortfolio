import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to= "/">Leandro Matías Fulco</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resumen</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/Contact">Contacto</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to= "/">Leandro Matías Fulco</Link>}>
            <Navigation>
                <Link to="/resume">Resumen</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/Contact">Contacto</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
