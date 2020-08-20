import React, { Component } from 'react';
import {Row,Table,Card} from 'react-bootstrap'

export default class Projects extends Component {
   render (){
    return(
      
      <Row style={{width:"100%"}}>
              <Card>
          
          <Card.Body>
            
            <Card.Text>
            <tr>
               <th rowSpan="4" style={{width:"100px",height:"70px"}}>
               Projects
               </th>
               <td style={{height:"110px"}}>
                  <b>Corona virus tracking system</b><br/>
                  www.indiameter.live
                  Indiameter is a website which display live covid cases of different states  in <br/>India with their respective disticts. Python, django are the  technology stack.

               </td>
           </tr>
           <tr>
             <td style={{height:"110px"}}>
                <b>SetTube</b><br/>
                Made an youtube video downloader software that save the video directly  Into the computer.
                <br/> Python ,pytube and tkinter library are the technology  Stack.

             </td>
           </tr>
           <tr>
             <td style={{height:"110px"}}>
             <b>TreatmentBox</b><br/>
Treatment Box is a chatbot which provide basic treatment instruction in case
of any emergency.<br/>Made with the help dialogflow console platform.

             </td>
           </tr>
           <tr>
             <td>
             <b style={{height:"110px"}}>InTime application</b><br/>
https://m.apkpure.com/intime/com.intime_news/download/1048577-APK?  from=variants/version<br/>
InTime is a news app which shows latest news from authentic sources.  It is based on newsapi.org<br/>
 and currently available on apkpure website.


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


