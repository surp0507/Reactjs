import React, { Component } from 'react'
import {Button} from 'react-bootstrap'


export default class TodoItem extends Component {

    constructor(){
                   super();
                   this.state={
                     title:"",
                     Des:"" 
                 }
               }
    
    update=(data)=>{
     console.log(data)           
    }
    compeleteTodo=()=>{
                        alert("mark as done");
                      }
    render(){
              return (
                       <div>
                
                          <h3> {this.props.data.title}</h3>
                          <p>{this.props.data.Des}</p>
                          <Button variant="danger btn-sm" onClick={()=>this.props.onDelete(this.props.data)}>Delete</Button>
                          <Button className="btn btn-sm mx-3"  onClick={()=>this.compeleteTodo()}>mark done</Button>
                          <Button  variant="warning" className="btn-sm mx-2" onClick={()=>this.update(this.props.data)}>Update</Button>
                     
            
                       </div>
                     )
                  }
              }