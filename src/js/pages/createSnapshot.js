import React from "react";

import Todo from "../components/create";
import * as TodoActions from "../actions/getCreateTimeshift";
import PythonStore from "../stores/PythonStore";
import nav from "../components/layout/Nav";
import $ from 'jquery';


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.buttonUpdate = this.button.bind(this);
    this.state = {
      todos: PythonStore.getAll(),
    };
  }

  componentWillMount() {
    PythonStore.on("change", this.getTodos);
   // PythonStore.on("change", this.buttonUpdate);
   $(document).ready(function(){
    $("#close").click(function(){
      window.location.href = "http://" + window.location.hostname +":8080";
    });
  })
  }

  componentWillUnmount() {
    PythonStore.removeListener("change", this.getTodos);
    //PythonStore.removeListener("change", this.buttonUpdate);
  }

  getTodos() {
    this.setState({
      todos: PythonStore.getAll(),
    });
  }

  createSnapshot() {
    TodoActions.createSnapshot();
  }

  button(){ 
      nav.toggleCollapse();    
  }

  render() {
    const  todos  = this.state.todos;

    return (
      <div id="popup" class="modal-dialog modal-sm" role="document">
        <div class="modal-content" style={{"padding":"200px","margin-top":"100px"}}>
          <div class="modal-header">
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer" >
            <button id="close" style={{"margin-bottom":"-350px","margin-left":"-200px"}} onClick={this.button.bind(this)} type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    );
  }
}
