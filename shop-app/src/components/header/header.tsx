const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kids</a>
              </li>
            </ul>
  
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <a className="nav-link" href="#"><i className="bi bi-bag"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Header