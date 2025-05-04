import "./header.css";

const Header = () => {
    return (
      <nav className="custom-navbar layout-padding">
      <div className="custom-container">
        <ul className="nav-left">
          <li className="nav-item"><a className="nav-link active" href="#">All</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Clothes</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Tech</a></li>
        </ul>

        
        <ul className="nav-right">
          <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-cart"></i></a></li>
        </ul>
      </div>
    </nav>    
    );
}

export default Header