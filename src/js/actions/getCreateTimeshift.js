import dispatcher from "../dispatcher";
import $ from 'jquery';
export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("get","http://10.24.64.62:1212/create",true);
  xhttp.setRequestHeader("Content-type","application/json"); 
  xhttp.send();
  xhttp.onreadystatechange = function(){
      if(this.readyState == 4 ){
          var response = JSON.parse(xhttp.responseText);
          console.log("data", response);
      dispatcher.dispatch({type: "RECEIVE_TODOS", data: response});
      }
    }  
}

export function listAll() {
  var response;
  $.ajax({
      url: "http://10.24.64.62:1212/list",
      cache: false,
      success: function (ret, textStatus, jqXHR) {
				if(jqXHR.status == 200 && ret!= undefined){
          response = ret;
        }        
      dispatcher.dispatch({type: "List_Data", data: response});
			}
    });       
}
