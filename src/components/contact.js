import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
import leancv1 from './img/leancv1.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>LEANDRO FULCO</h2>
                        <img src={leancv1} alt="Avatar" style={{height: '250px', borderRadius: '90px'}} />
                        
                    </Cell>

                    <Cell col={6}>
                        <h2>CONTACTAME</h2>
                        <hr />

                        <div className="contact-list">
                        <List>
                           <ListItem>
                             <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}><i className="fa fa-phone-square" aria-hidden="true"/>(+54) 1165200153</ListItemContent>
                           </ListItem>

                           <ListItem>
                             <ListItemContent style={{fontSize: '25px', fontFamily: 'Oxygen'}}><i className="fa fa-envelope" aria-hidden="true"/>leandro.fulco@gmail.com</ListItemContent>
                           </ListItem>
                           
                       </List>
                       </div>

                    </Cell>
                    
                </Grid>
            </div>
        );
    }
}

export default Contact;