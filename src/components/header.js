import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faCubes, faBook, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> 
            </Link>
          </li>
          <li>
            <Link to="/news">
              <FontAwesomeIcon icon={faNewspaper} /> 
            </Link>
          </li>
          <li>
            <Link to="/sets">
              <FontAwesomeIcon icon={faCubes} /> 
            </Link>
          </li>
          <li>
            <Link to="/books">
              <FontAwesomeIcon icon={faBook} /> 
            </Link>
          </li>
          <li>
            <Link to="/qna">
              <FontAwesomeIcon icon={faQuestionCircle} /> 
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
