import React, { Component } from 'react';

import {Row,Table,Card} from 'react-bootstrap'
export default class Skills extends Component{
   render (){
    return(
        
        <Row className="skills_container" style={{width:"100%"}}>
        <Card>
          
                <Card.Body>
                    <Card.Text>
                    <tr style={{height:"70px"}}>
                        <th>
                        Objective
                        </th>
                        <td colspan="6">
                            To work for an organization which provide me the opportunity to improve my skills and 
                            knowledge to grow along with the organization objective.<br/>
                        </td>
                    </tr>
                    <tr >
                        <th style={{width:"100px"}}>Skills</th>
                        <td>Python</td>
                        <td>C</td>
                        <td>Html</td>
                        <td>Css</td>
                        <td>Javascript</td>
                        <td>React Native</td>
                    </tr>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
         <Table>
             
             
         </Table>
         
        </Row>


      
        
    
    );
   }
}


