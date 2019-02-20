import React from "react";
import nav from "../components/layout/Nav";
import $ from 'jquery';

export default class Settings extends React.Component {
  constructor() {
    super();   
  }

  componentWillMount() {
    $(document).ready(function(){
    $('.btn-minuse').on('click', function(){
      $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
    })

    $('.btn-pluss').on('click', function(){
      $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
    })

    $('.close').on('click',function(){
      window.location.href = window.location.href = "http://" + window.location.hostname +":8080";
    });
  })
  }

  button(){ 
    $(document).ready(function(){
      $('#header').css({"display":"block"})
      $('#input').css({"display":"none"})
      $('#config').css({"display":"none"})
      $('#filter').css({"display":"none"})
    })   
  }

  configuration(){ 
    $(document).ready(function(){
      $('#header').css({"display":"none"})
      $('#input').css({"display":"none"})
      $('#config').css({"display":"block"})
      $('#filter').css({"display":"none"})
    })   
  }

  schedule(){ 
    $(document).ready(function(){
      $('#input').css({"display":"block"})
      $('#header').css({"display":"none"})
      $('#config').css({"display":"none"})
      $('#filter').css({"display":"none"})
    })   
  }

  filter(){ 
    $(document).ready(function(){
      $('#input').css({"display":"none"})
      $('#header').css({"display":"none"})
      $('#config').css({"display":"none"})
      $('#filter').css({"display":"block"})
    })   
  }

  closePopup(){ 
    $(document).ready(function(){
      $('#myModal').modal('hide');
    })   
  }

 addImage(pk) {
    alert("addImage: " + pk);
 }

  render() {
    return (
      <div id="myModal" class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h1>Settings</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">          
          <div class="container">
          
            <ul class="nav nav-pills">
              <li><button  id="home" class="active" onClick={this.button.bind(this)}>Home</button></li>
              <li><button id="schedule" class="active" onClick={this.schedule.bind(this)}>Schedule</button></li>
              <li><button id="filt" class="active" onClick={this.filter.bind(this)}>Filter</button></li>
              <li><button id="configuration" class="active" onClick={this.configuration.bind(this)}>Configuration</button></li>
              
            </ul>

            <h2 id="header" style={{"display":"none"}}>Show stuff</h2>

            <h2 id="config" style={{"display":"none"}}>Configuration</h2>

            <h2 id="filter" style={{"display":"none"}}>filter</h2>

            <div id="input" class="class="input-group mb-3  style={{"display":"none"}}>
									            
									                  	<div>
                                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                      <label class="custom-control-label" for="defaultUnchecked">Monthly  </label>

                                      <span><button class="btn btn-white btn-minuse" type="button">-</button> </span>
                                      <input id="number" type="number" placeholder="0" />       
                                      
									                  	<span><button class="btn btn-red btn-pluss" type="button">+</button></span></div>

                                      <div>
                                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                      <label class="custom-control-label" for="defaultUnchecked">Weekly   </label>

                                      <span><button class="btn btn-white btn-minuse" type="button">-</button> </span>
                                      <input id="number" type="number" placeholder="0" />       
                                      
									                  	<span><button class="btn btn-red btn-pluss" type="button">+</button></span></div>

                                      <div>
                                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                      <label class="custom-control-label" for="defaultUnchecked">Daily    </label>

                                      <span><button class="btn btn-white btn-minuse" type="button">-</button> </span>
                                      <input id="number" type="number" placeholder="0" />       
                                      
									                  	<span><button class="btn btn-red btn-pluss" type="button">+</button></span></div>

                                      <div>
                                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                      <label class="custom-control-label" for="defaultUnchecked">Hourly   </label>

                                      <span><button class="btn btn-white btn-minuse" type="button">-</button> </span>
                                      <input id="number" type="number" placeholder="0" />       
                                      
									                  	<span><button class="btn btn-red btn-pluss" type="button">+</button></span></div>

                                      <div>
                                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                      <label class="custom-control-label" for="defaultUnchecked">Boot     </label>

                                      <span><button class="btn btn-white btn-minuse" type="button">-</button> </span>
                                      <input id="number" type="number" placeholder="0" />       
                                      
									                  	<span><button class="btn btn-red btn-pluss" type="button">+</button></span></div>                              
									               	
						</div>

          </div>
          </div>
        </div>
      </div>
    )
  }    
}
