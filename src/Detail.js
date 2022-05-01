import React from 'react';
import './Detail.css';
import $ from 'jquery';

class Detail extends React.Component {
    constructor(props){
      super(props);
      this.portfolio_json = props.value.value;
      this.userface = require('./images/'+this.portfolio_json.usericon);
      this.aboutmeparas = [];
      for(var i=0; i<this.portfolio_json.aboutme.length; i++){
        this.aboutmeparas.push(<p className='fs-5'>{this.portfolio_json.aboutme[i]}</p>);
      }
    };
    componentDidMount() {
        $(window).scroll(function () {
            var distance = $(window).scrollTop();
            $('section').each(function (i) {

                if ($(this).position().top 
                    <= distance + 250) {
                      
                        $('.navbar-nav a.active')
                            .removeClass('active');

                        $('.navbar-nav a').eq(i)
                            .addClass('active');
                }
            });
        }).scroll();
      }
    render(){
     return (
        <div className="Portfolio container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top bg-opacity-75">
        <div className="container-fluid">
          <a className="navbar-brand fa-2x text-warning text-uppercase" href="#">
          {this.portfolio_json.firstname}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#aboutme-section">
                <span className="fas fa-user m-1"></span>
                About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#experience-section">
                <span className="fas fa-briefcase m-1"></span>
                Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#skills-section">
                <span className="fas fa-cogs m-1"></span>
                Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#projects-section">
                <span className="fas fa-laptop-file m-1"></span>
                Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#education-section">
                <span className="fas fa-graduation-cap m-1"></span>
                Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contact-section">
                <span className="fas fa-address-card m-1"></span>
                Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="aboutme-section" className="row container-fluid section-top">
      <div className='col-md-4 text-center align-items-center text-info text-center d-flex flex-column justify-content-center'>
        <div className='col-12 bg-warning Portfolio-logo-detail bg-opacity-25'>
        <img src={this.userface} className="Portfolio-logo img-fluid m-5" alt={this.portfolio_json.firstname} /></div>

            {/* <div className='col-12 d-flex justify-content-around'>
            <AssociatedLinks value={portfolio_json}/>
            </div> */}
   
        </div>
        {/* <div className='col-md-1  custom-rule d-sm-none d-md-block'>
        </div>
        <div className='col-md-1  custom-rule-hr d-sm-block d-md-none'>
        </div> */}
        <div className='col-md-8 text-info text-center d-flex flex-column justify-content-md-center justify-content-sm-start'>
            <h3><small className="text-warning">Hello, I'm</small> </h3>
            <div className='fs-1 text-uppercase'>{this.portfolio_json.firstname + ' ' + this.portfolio_json.middlename + ' ' + this.portfolio_json.lastname}</div>
            <div className='fs-3 text-muted font-monospace'>{this.portfolio_json.headerinfo.extraheader}</div>
            <div className='fs-4 text-muted font-monospace'>{this.portfolio_json.headerinfo.designationinfo.jobtitle + ' @ ' + this.portfolio_json.headerinfo.designationinfo.currentcompany}</div>
            <div className='text-start text-black mt-5'>
            <h2>About Me</h2>
            {this.aboutmeparas}
            </div>
        </div>
      </section>
      <section id="experience-section" className="row container-fluid p-0 m-0 bg-light">
      
      </section>
      <section id="skills-section" className="row container-fluid p-0 m-0">
      
      </section>
      <section id="projects-section" className="row container-fluid p-0 m-0 bg-light">
      
      </section>
      <section id="education-section" className="row container-fluid p-0 m-0">
      
      </section>
      <section id="contact-section" className="row container-fluid p-0 m-0 bg-light">
      
      </section>
      </div>
     );
      
    }
  
}

export default Detail;