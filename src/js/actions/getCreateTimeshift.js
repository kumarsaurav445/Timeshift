import dispatcher from "../dispatcher";
import $ from 'jquery';


export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function createSnapshot() {
  var response;
  var url= "http://" + window.location.hostname +":1212/create";
  $.ajax({
    url: url,
    cache: false,
    success: function (ret, textStatus, jqXHR) {
      if(jqXHR.status == 200 && ret!= undefined){
        response = ret;
      }        
    dispatcher.dispatch({type: "Create_Snapshot", data: response});
    }
  });
}

export function listAll() {
  var response;
  var url= "http://" + window.location.hostname +":1212/list";
  $.ajax({
      url: url,
      cache: false,
      success: function (ret, textStatus, jqXHR) {
				if(jqXHR.status == 200 && ret!= undefined){
          response = ret;
        }        
      dispatcher.dispatch({type: "List_Snapshot", data: response});
			}
    });       
}
