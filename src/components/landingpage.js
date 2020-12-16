import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://mysalonsoftware.co.za/wp-content/uploads/2019/08/avatar-user-hacker-3830b32ad9e0802c-512x512.png"
                            alt="Avatar"
                            className="avatar-img" 
                        />

                        <div className="banner-text">
                            <h1>Programador Web Full Stack</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | ReactJS | NodeJS | PHP | Laravel | MySQL</p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/leandrofulco/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/leandrofulco03" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/* Behace */}
                                <a href="https://www.behance.net/leandrofulco00" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-behance-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;