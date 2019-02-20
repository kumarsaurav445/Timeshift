import React from "react";
import { IndexLink, Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: false,
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closePopup= this.closePopup.bind(this);
  }

componentWillMount() {
  $(document).ready(function(){
    $("#refresh").click(function(){
      $(this).hide();
    });
  });
}

  toggleCollapse() {
    var collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  showAbout(){
    $(document).ready(function(){

      $("#popup").css({
        "display":"block"
      });
    })
  }

  closePopup(){
    $(document).ready(function(){
      $("#popup").css({
        "display":"none"
      });
    })
    this.setState({
      showMenu:false 
    });
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true
    });
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname.match(/^\/createSnapshot/) ? "active" : "";
    const archivesClass = location.pathname.match(/^\/listSnapshot/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const deleteClass = location.pathname.match(/^\/deleteSnapshot/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div>
        <div class="row">
          <div class="col-md-3">
            <h1 style={{"paddingLeft": "100px"}}>QTIMESHIFT</h1>
          </div>
          <div class="col-md-6"></div>
            <div class="col-md-2"style={{"marginTop":"33px"}}>
                <button  style={{"fontSize":"25px", "backgroundColor":"white", "border":"none"}}><i id="refresh" class="fa fa-refresh" style={{"color":"black"}}></i></button>           
            </div>
            <div class="col-md-1" >
              <div class="container" style={{"marginTop": "33px", "marginLeft":"-170px" }}>
                <button  onClick={this.showMenu} style={{"fontSize":"25px","transform": "rotate(90deg)","backgroundColor":"white", "border":"none"}}><i class="fa fa-ellipsis-h"></i></button>            
            </div>
          </div>
        </div>

        <div id="popup" class="modal-dialog modal-sm" role="document" style={{"display":"none"}}>
          <div class="modal-content" style={{"padding":"200px","marginTop":"100px"}}>
            <div class="modal-header">
              <h4 style={{"marginTop":"-200px", "marginLeft":"-180px"}}>About</h4>
              <button onClick={this.closePopup} style={{"marginTop":"-190px", "marginRight":"-180px", "fontSize": "xx-large"}} type="button" class="close">&times;</button>              
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>

          <nav class="navbar navbar-inverse navbar-fixed-top " style={{"marginTop": "70px"}} role="navigation">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1" >
                <ul class="nav navbar-nav" style={{"marginLeft":"-300px"}}>
                  <li class={featuredClass}>
                    <Link to="createSnapshot" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-square-o" aria-hidden="true" style={{"fontSize":"30px"}}></i><i class="fa fa-long-arrow-down" style={{"fontSize":"30px"}} aria-hidden="true"></i><h4>Create</h4></Link>
                  </li>
                  <li class={archivesClass}>
                    <Link to="listSnapshot" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-clock-o" aria-hidden="true" style={{"fontSize":"30px"}}></i><h4>List</h4></Link>
                  </li>
                  <li class={settingsClass}>
                    <Link to="settings" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-wrench" aria-hidden="true" style={{"fontSize":"30px"}}></i><h4>Settings</h4></Link>
                  </li>
                  <li class={deleteClass}>
                    <Link to="deleteSnapshot" onClick={this.toggleCollapse.bind(this)}><i class="fa fa-times" aria-hidden="true" style={{"fontSize":"30px"}}></i><h4>Delete</h4></Link>
                  </li>
                </ul>
                {
                  this.state.showMenu
                    ? (
                      <div style={{"backgroundColor": "lightgrey", "height":"70px", "width":"70px", "marginLeft":"1200px"}}>
                        <button style={{"backgroundColor": "white", "border":"none", "height":"35px", "width":"70px"}}><i class="fa fa-question-circle-o" aria-hidden="true"></i>Help</button>
                        <button onClick={this.showAbout} style={{"backgroundColor": "white", "border":"none", "height":"35px", "width":"70px"}}><i class="fa fa-info-circle" aria-hidden="true"></i>About</button>
                      </div>
                    )
                    : (
                      null
                    )
                }
              </div>
            </div>
          </nav>
      </div>
     
    );
  }
}
