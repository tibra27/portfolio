import './Portfolio.css';

function Portfolio(props) {
    let portfolio_json = props.value.value;
    let userface = require('./images/'+portfolio_json.usericon)
  return (
    <div className="Portfolio container bg-dark">
    <div className="row" style={{height:"100%"}}>
        <div className='col-md-6 bg-dark text-center text-info text-center d-flex flex-column justify-content-center'>
        <div><img src={userface} className="Portfolio-logo rounded border border-3 border-light rounded-circle img-fluid" alt={portfolio_json.firstname} /></div>
        </div>
        <div className='col-md-1  custom-rule d-sm-none d-md-block'>
        </div>
        <div className='col-md-1  custom-rule-hr d-sm-block d-md-none'>
        </div>
        <div className='col-md-6 bg-black text-info text-center d-flex flex-column justify-content-md-center justify-content-sm-start'>
            <h3><small className="text-warning">I'm</small> </h3>
            <div className='fs-1'>{portfolio_json.firstname + ' ' + portfolio_json.middlename + ' ' + portfolio_json.lastname}</div>
            <div className='fs-4 text-muted'>{portfolio_json.headerinfo.designationinfo.jobtitle + ' @ ' + portfolio_json.headerinfo.designationinfo.currentcompany}</div>
            <div className='col-12 row mt-5 mb-3'>
                <div className='col-2'></div>
                <div className='col-8 align-self-center'>
                Have a look on my work profile, who I am, and what I do(did) &#128522;
                </div>
                <div className='col-1'>
                    <button type="button" onClick={props.onClick} className="btn btn-outline-warning">
                    <span className="fas fa-circle-chevron-right float-end lh-base">
                    </span>
                    </button>
                </div>
              </div>
        </div>
        <div className='col-12 text-info text-center text-light bg-black bg-gradient d-flex flex-column justify-content-md-center'>
            <p>
              Copyright © 2022 &nbsp;
              {portfolio_json.firstname + ' ' + portfolio_json.middlename + ' ' + portfolio_json.lastname}
            </p>
        </div>
    </div>
        
    </div>
  );
}

export default Portfolio;