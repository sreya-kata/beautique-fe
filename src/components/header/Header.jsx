import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div>
      <h1>Beautique</h1>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default Header;
