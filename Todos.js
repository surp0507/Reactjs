import React, { Component } from 'react'
import TodoItem from './TodoItem';
import {Alert} from 'react-bootstrap'


export default class Todos extends Component {
  
render() {
        
        return (
                <div className="container">
                   <h3 className="text-center">Todo List</h3>
                   {this.props.todos.length===0? <Alert className="text-center" variant="primary">No todos to display</Alert>  :
                    this.props.todos.map((item)=> {
                      return (
                               <>
                                 <TodoItem data={item} key={item.sno}onDelete={this.props.onDelete}  />  <hr />
                               </>
                              )
                            }
                          )                  
                        }
                 </div>
                )
              }
           }
