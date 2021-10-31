import React, { Component } from 'react'
import {Form,Button,Container } from 'react-bootstrap'

export default class AddTodo extends Component {
   
      constructor(){
         super();
         this.state={
                       title:"",
                       Des:""

                    }
                  }

         submit=(e)=>{
                        e.preventDefault();
                        if(!this.state.title||!this.state.Des){
                        alert("title and description is not blanck");
                      }
                        this.props.addtodo(this.state.title,this.state.Des);
  
                    }

   
         render() {
       
                   return (
                        <div>
                           <Container> 
                             <Form onSubmit={this.submit}>
                               <Form.Control type="text" placeholder="title" onChange={(e)=>{this.setState({title:e.target.value })}}/> <br />
                               <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>{this.setState({Des:e.target.value})}}/> <br />
                               <Button type="submit">Add Todo</Button>
                             </Form>
                           </Container>
                        </div>
                      )
                   }
                }
