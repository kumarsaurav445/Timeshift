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
      $("#popup").hide();
      window.location.href = "http://localhost:8080";
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

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  button(){ 
      nav.toggleCollapse();    
  }

  render() {
    const  todos  = this.state.todos;

    return (
        <div>
            <table class="table table-bordered" style={{"marginTop":"80px", "marginLeft":"-200px"}}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Snapshot</th>
                    <th scope="col">System</th>
                    <th scope="col">Status</th>
                    <th scope="col">Backup Time</th>
                    <th scope="col">Comments</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
  }
}
