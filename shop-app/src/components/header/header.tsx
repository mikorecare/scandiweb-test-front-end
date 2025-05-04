const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom justify-content-between">
        <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clothes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tech</a>
              </li>
            </ul>
  
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
              </li>
            </ul>
        </div>
      </nav>
    );
}

export default Header