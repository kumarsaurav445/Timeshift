import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PythonStore extends EventEmitter {
  constructor() {
    super()
    this.todos = "";
    this.list = [];
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
      case "Create_Snapshot": {
        this.todos = action.data;
        this.emit("change");
        break;
      }
      case "List_Snapshot": {
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
