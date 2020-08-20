import React, { Component } from 'react';
import profile_pic from '../images/profile.jpg';

import {Row,Table,Card} from 'react-bootstrap'

 class Intro extends Component{
   render (){
    return(
        
        <Row className="intro_row">

            <Card style={{ width: '13rem',height:'17rem',justifyItems:"inherit" }}>
                        <Card.Img variant="top" src={profile_pic} style={{ width: '100%',height:'12rem' }}/>
                        
                        <Card.Body>
                            <Card.Title style={{ fontSize:'16px'}}>Jannat Kumar Pradhan</Card.Title>
                            <Card.Link href="#" style={{ fontSize:'15px'}}>Github</Card.Link>
                            <Card.Link href="#" style={{ fontSize:'15px',marginLeft:'50px'}}>LinkedIn</Card.Link>
                        </Card.Body>
                   
                        </Card>
                        <Card className="text-center">
            
            <Card.Body style={{ width: '29em',marginTop:'40px' }}>
                <Card.Title>Resume</Card.Title>
                <Table>
                <tr>
                    <td>
                    <Card.Text>
                    Jannat Kumar Pradhan<br/>
                     jannatpradhan777@gmail.com<br/>
                        7008086877
                </Card.Text>
                    
                    </td>

                </tr>
            
            </Table>

            
            </Card.Body>
            
            </Card>

        </Row>

     
        
        
    
    );
   }
}

export default Intro;
