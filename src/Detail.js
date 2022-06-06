import React from 'react';
import './Detail.css';
import $ from 'jquery';

class Detail extends React.Component {
    constructor(props){
      super(props);
      this.portfolio_json = props.value.value;
      this.onClickFn = props.onClick;
      this.userface = require('./images/'+this.portfolio_json.usericon);
      this.aboutmeparas = [];
      for(var i=0; i<this.portfolio_json.aboutme.length; i++){
        this.aboutmeparas.push(<p key={i} className='fs-5'>{this.portfolio_json.aboutme[i]}</p>);
      }
      this.experienceArray = [];
      for(var i=0; i<this.portfolio_json.experience.length; i++){
          let keyLearnings = [];
          for(var j=0; j<this.portfolio_json.experience[i].workexp.length; j++){
              keyLearnings.push(
                  <li key={'work_'+i+j}>{this.portfolio_json.experience[i].workexp[j]}</li>
              );
          }
          let logo = require('./images/'+this.portfolio_json.experience[i].logo);
        this.experienceArray.push(
            <div key={'exp_'+i} className='border  d-flex flex-row border-start col-12 rounded-3 shadow m-3 experience-div pt-2 pb-2'>
            <div key={'exp_img_'+i} className="d-inline me-2 mt-2">
          <img src={logo} width="48" height="48" alt={this.portfolio_json.experience[i].organisation} title={this.portfolio_json.experience[i].organisation}/>
          </div>
          <div key={'exp_content_'+i}>
            <span className='d-block fs-5 text-uppercase text-info' style={{fontWeight: 600}}>{this.portfolio_json.experience[i].organisation}</span>
            <span className='d-block fs-6 text-muted'>
            <span className='fas fa-id-badge me-2'></span>
            {this.portfolio_json.experience[i].designation}</span>
            <span className='d-block fs-6 text-muted'>
            <span className='fas fa-business-time me-2'></span>
            {this.portfolio_json.experience[i].durationdisplay}</span>
            <span className='d-block fs-6 text-muted'>
            <span className='fas fa-location-dot me-2'></span>
            {this.portfolio_json.experience[i].joblocation}</span>
            <h6 className='mt-2'>Work Experience and Key Learnings</h6>
            <ul>
                {keyLearnings}
            </ul>
            </div>
            </div>
            
        ); 
      }
      this.educationArray = [];
      for(var i=0; i<this.portfolio_json.education.length; i++){
        let achievements = [];
          for(var j=0; j<this.portfolio_json.education[i].achievements.length; j++){
            achievements.push(
                  <li key={'work_'+i+j}>{this.portfolio_json.education[i].achievements[j]}</li>
              );
          }
        let logo = require('./images/'+this.portfolio_json.education[i].logo);
        this.educationArray.push(
          
          <div key={'edu_'+i} className='border d-flex flex-row border-start col-12 rounded-3 shadow m-3 skills-div pt-2 pb-2'>
          <div key={'edu_img_'+i} className="d-inline me-2 mt-2">
          <img src={logo} width="48" height="48" alt={this.portfolio_json.education[i].organisation} title={this.portfolio_json.education[i].organisation}/>
          </div>
          <div key={'edu_content_'+i}>
          <span className='d-block fs-5 text-uppercase text-warning' style={{fontWeight: 600}}>{this.portfolio_json.education[i].organisation}</span>
          <span className='d-block fs-6 text-muted'>
          <span className='fas fa-id-badge me-2'></span>
          {this.portfolio_json.education[i].designation}</span>
          <span className='d-block fs-6 text-muted'>
          <span className='fas fa-business-time me-2'></span>
          {this.portfolio_json.education[i].durationdisplay}</span>
          <span className='d-block fs-6 text-muted'>
          <span className='fas fa-location-dot me-2'></span>
          {this.portfolio_json.education[i].joblocation}</span>
          <span className='d-block fs-6 text-muted'>
          <span className='fas fa-square-poll-vertical me-2'></span>
          {this.portfolio_json.education[i].grade}</span>
          <h6 className='mt-2'>Scholastic Achievements</h6>
            <ul>
                {achievements}
            </ul>
          </div>
          </div>
          
      );
      }
      this.skillsArray = [];
        for(var i=0; i<this.portfolio_json.skills.length; i++){
            this.skillsArray.push(
                <div key={'skill_'+i} className="card shadow m-3 ms-0 col-md-2 skills-div">
                    <div className="card-body">
                        <h5 className="card-title">{this.portfolio_json.skills[i].name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.portfolio_json.skills[i].selfrating}</h6>
                        <p className="card-text">{this.portfolio_json.skills[i].comments}</p>
                    </div>
                </div>
            );
        }
        this.projectArray = [];
        for(var i=0; i<this.portfolio_json.projects.length; i++){
          this.tags=[];
          if(this.portfolio_json.projects[i].tags != undefined){
            for(var j=0; j<this.portfolio_json.projects[i].tags.length; j++){
              this.tags.push(
                <span key={'tags_'+i+j} className="badge bg-primary ms-1 me-2 mb-1 badge-pill badge-info">{this.portfolio_json.projects[i].tags[j]}</span>
              );
            }
          }
          
          this.projectArray.push(
            <div key={'project_'+i} className="card text-center shadow m-3 col-md-3 project-div">
             <div class="card-body">
              <h5 className="card-title text-uppercase text-info">{this.portfolio_json.projects[i].projecttitle}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.portfolio_json.projects[i].subtitle}</h6>
              <p className="card-text">{this.portfolio_json.projects[i].description}<a href={this.portfolio_json.projects[i].projectlink} target="_blank" title='View Project' className="card-link stretched-link">
              <span className='fas fa-up-right-from-square ms-1'></span></a></p>
              
              </div>
              <div className="card-footer bg-white">
              
              <div>
                {this.tags}
              </div>
              
              </div>
            </div>
        );
        }
    };
    
    componentDidMount() {
        $(window).scroll(function () {
            var distance = $(window).scrollTop();
            $('section').each(function (i) {

                if ($(this).position().top 
                    <= distance + 450) {
                      
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
          <a className="navbar-brand fa-2x text-warning text-uppercase" href="#" onClick={this.onClickFn}>
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
      <section id="experience-section" className="row container-fluid bg-light m-0">
      
      <h2>Experience</h2>
        {this.experienceArray}
     
      </section>
      <section id="skills-section" className="row container-fluid m-0">
      <h2>My Skills</h2>
      <div className='justify-content-center ps-5 row'>
        {this.skillsArray}
      </div>
      
      </section>
      <section id="projects-section" className="row container-fluid bg-light m-0">
      <h2 className='mb-4'>Projects</h2>
      <div className='justify-content-center row ps-4'>
      
      {this.projectArray}
      </div>
      </section>
      <section id="education-section" className="row container-fluid m-0">
      <h2 className='mb-4'>Education</h2>
      {this.educationArray}
      </section>
      <section id="contact-section" className="row container-fluid bg-light p-0 m-0">
      <div className='col-12 text-info text-center text-light bg-dark bg-gradient d-flex flex-column justify-content-md-center'>
        <h2 className='mb-4'>Contact me</h2>
            <p>
                <a className='text-white text-decoration-none' href={'mailto:' + this.portfolio_json.contactinfo.email}>
                    <span className='fas fa-envelope me-2 text-info'></span>
                    <span>{this.portfolio_json.contactinfo.email}</span>
                </a>
            </p>
            <p className='mt-1'>
                <a className='text-white text-decoration-none me-2' href={'tel:' + this.portfolio_json.contactinfo.phoneno}>
                    <span className='fas fa-phone me-2 text-info'></span>
                    <span>{this.portfolio_json.contactinfo.phoneno}</span>
                </a>
                <a className='text-white text-decoration-none' href={'tel:' + this.portfolio_json.contactinfo.phoneno}>
                    <span className='fa-brands fa-whatsapp me-2 text-info'></span>
                    <span>{this.portfolio_json.contactinfo.phoneno}</span>
                </a>
            </p>
            <div className='m-5'>
               
                <a className='text-info fs-2 m-3' href={this.portfolio_json.contactinfo.linkedin} target="_blank">
                    <span className='fa-brands fa-linkedin'></span>
                </a>
                <a className='text-info fs-2 m-3' href={this.portfolio_json.contactinfo.github} target="_blank">
                    <span className='fa-brands fa-github'></span>
                </a>
                <a className='text-info fs-2 m-3' href={this.portfolio_json.contactinfo.instagram} target="_blank">
                    <span className='fa-brands fa-instagram'></span>
                </a>
                <a className='text-info fs-2 m-3' href={this.portfolio_json.contactinfo.facebook} target="_blank">
                    <span className='fa-brands fa-facebook'></span>
                </a>
            </div>
            <p className='mb-5'>
              Copyright © 2022 &nbsp;
              {this.portfolio_json.firstname + ' ' + this.portfolio_json.middlename + ' ' + this.portfolio_json.lastname}
            </p>
        </div>
      </section>
      </div>
     );
      
    }
  
}

export default Detail;