import React from "react";
import * as TodoActions from "../actions/getCreateTimeshift";
import PythonStore from "../stores/PythonStore";
import Todo from "../components/create";
import loader from "../images/ajaxloader.gif";
import $ from 'jquery';

export default class Archives extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: PythonStore.listAll(),
    };
  }

  componentWillMount() {
    PythonStore.on("change", this.getTodos);
   // PythonStore.on("listChange", this.getTodos);
    $(document).ready(function(){

      $("#list").css({
        "background-color": "#4CAF50", /* Green */
        "border": "none",
        "color": "white",
        "padding": "15px 32px",
        "text-align": "center",
        "text-decoration": "none",
        "font-size": "16px"
      });     
    });   
  }

  componentWillUnmount() {
    PythonStore.removeListener("change", this.getTodos);
    //PythonStore.removeListener("listChange", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: PythonStore.listAll(),
    });

    $(document).ready(function(){
      $("#loading").hide();
    })

  }

  list() { 
    $(document).ready(function(){
      
      $("#loading").css({
        "width": "100%",
        "height": "100%",
        "top": "0",
        "left": "0",
        "position": "fixed",
        "display": "block",
        "opacity": "0.7",
        "background-color": "#fff",
        "z-index": "99",
        "text-align": "center"
      });      
    })  
    $(document).ready(function(){

      $("#loading-image").css({
        "top": "450px",
        "height":"50px",
        "width":"50px",
        "left": "540px",
        "position": "absolute",
        "z-index": "100",
        "display":"block"
      });
    })  
    TodoActions.listAll();  
  }
  render() {

    const  todos  = this.state.todos;
    
    return (
      <div>
        <h1>List Snapshot</h1>
        <div id="loading">
          <img id="loading-image" src={loader} style = {{display:"none"}} alt="Loading..." />
        </div> 
        <button id = "list" onClick={this.list.bind(this)}>List Snapshot</button>
        <Todo data={todos} />        
      </div>
    );
  }
}
