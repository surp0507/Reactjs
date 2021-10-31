
import Header from './Component/Header';

import Todos from './Component/Todos';

import { useState } from 'react';
import AddTodo from './Component/AddTodo';





 function App() {
        
  const onDelete=(data)=>{
                           console.log("i am deleting",data)
  setTodos(todos.filter((e)=>{
                               return e!==data;
                          }
                        )
                      )
                    }
  const addtodo=(title,Des) => {

                                    console.log("i am adding todo",title,Des);
                                    let sno;
                                    if(todos.length===0){
                                                          sno=0;
                                                          }
                                      else{
                                            sno=todos[todos.length-1].sno+1;
                                          }
              
                                    const myTodo={
                
                                                    sno:sno,
                                                    title:title,
                                                    Des:Des,
                                                  }
                                  setTodos([...todos, myTodo]);
                                  console.log(myTodo)
                              }
  const [todos, setTodos]=useState( [

                                        {
                                                sno:1,
                                                title:"books",
                                                Des:"this is a book"
                                        },
                                        {
                                          sno:2,
                                          title:"pen",
                                          Des:"this is a book"

                                        },
                                        {
                                          sno:3,
                                          title:"copy",
                                          Des:"this is a book"

                                        }

                                   ] );
       
   return (
            <div className="App">
              <header className="App-header">
                <Header title="Todo Application" Form="false" />  <br />
                <AddTodo addtodo={addtodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </header>
            </div>
          );
      }


export default App;
