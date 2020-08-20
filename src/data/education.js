import React, { Component } from 'react';
import {Row,Table,Card} from 'react-bootstrap'

export default class Education extends Component {
   render (){
    return(
      <Row >
      <Card style={{width:"96%"}}>
  
  <Card.Body>
    
    <Card.Text>
    <tr>
       <th rowSpan="4" style={{width:"100px",height:"70px"}}>
       Education
       </th>
       <td style={{height:"110px"}}>
         <b>2014 - 10th</b><br/>
         Daniel Public School (ICSE)<br/>
         Percentage - 68

       </td>
   </tr>
   <tr>
   <td style={{height:"110px"}}>
         <b>2016 - 12th</b><br/>
         Daniel Public School (ISC)<br/>
         Percentage - 74

       </td>
   </tr>
   <tr>
   <td>
         <b>2017 - 10th</b><br/>
         Trident Academy Of Technology (BPUT)<br/>
         Percentage - NA

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


