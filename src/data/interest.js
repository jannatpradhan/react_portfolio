import React, { Component } from 'react';
import {Row,Table,Card} from 'react-bootstrap'

export default class interest extends Component {
   render (){
    return(
      <Row >
      <Card style={{width:"96%"}}>
  
  <Card.Body>
    
    <Card.Text>
    <tr>
       <th rowSpan="4" style={{width:"100px",height:"70px"}}>
       Hobby
       </th>
       <td >
         Gardening <br/>Playing video games
         

       </td>
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


