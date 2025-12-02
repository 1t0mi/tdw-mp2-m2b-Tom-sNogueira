import { Link } from "react-router-dom";

export default function Nav () {

    return(
        <nav id="nav-bar-custom" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark data-bs-toggle data-bs-target">
    <a className="navbar-brand" href="Beers_API.html" title="Home"> <img src="Assets/logomenumobile-scaled.webp" alt="" id="Beer-Icone"/> </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
              <Link className="nav-link" to="/"> Stout's Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/beers"> Cervejas </Link>
        </li> 
        <li className="nav-item active">
          <Link className="nav-link" to="/sugestões"> Sugestões </Link>
        </li>
      </ul>
      <div id="search-bar">
      <form className="form-inline mt-2 mt-md-0" id="search-bar-form">
        <input className="form-control mr-sm-2" id="search-bar-input" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" id="search-btn-nav">Search</button>
      </form>
          <div id="dropdown-container"></div>
      </div>
    </div>
  </nav>
    );
}

