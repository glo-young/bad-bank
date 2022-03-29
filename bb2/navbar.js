function NavBar(){
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand" href="#"> BADBANK </a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <a className="nav-link active" aria-current="page" href="#/createaccount/"> <abbr title="Get started here">CREATE ACCOUNT </abbr></a>
        <a className="nav-link" href="#/deposit/"> <abbr title="Make a deposit">DEPOSIT </abbr></a>
        <a className="nav-link" href="#/withdraw/"> <abbr title="Make a withdraw">WITHDRAW </abbr></a>
        <a className="nav-link" href="#/alldata/"> <abbr title="Review Data">ALL DATA</abbr></a>
      </div>
      </div>
      </div>
      </nav>
      </>
    );
    }