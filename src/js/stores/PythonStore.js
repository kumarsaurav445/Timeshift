import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PythonStore extends EventEmitter {
  constructor() {
    super()
    this.todos = "";
    this.list = [];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }
  listAll() {
    return this.list;
  }
  aboutPopup(){
    this.emit("showPopup");
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.data;
        this.emit("change");
        break;
      }
      case "List_Data": {
        this.list = action.data;
        this.emit("change");
        break;
      }
    }
  }

}

const pythonStore = new PythonStore;
dispatcher.register(pythonStore.handleActions.bind(pythonStore));

export default pythonStore;
