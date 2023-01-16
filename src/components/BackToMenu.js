import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackToMenu ( {handleBackToMenu} ) {

  return (
    <div
      className="back-to-menu"
      onClick={() => handleBackToMenu()}
    >
      <FontAwesomeIcon className='nav-icon' icon={faArrowLeft} />
      <h3 className="nav-title">Menu</h3>
    </div>
  );
};

export default BackToMenu;