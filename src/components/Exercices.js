import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import exercices from '../utilities/exercices'

function Exercices( {handleClickedExercice} ) {

  return (
    <div className="exercices-list">
      <h2>Exercices</h2>
      {exercices.map((exercice) => {
        return (
          <div
            className= {"exercice " + exercice.class}
            onClick={() => handleClickedExercice(exercice.class)}
          >
            <img src={exercice.imgSrc}></img>
            <div className='exercice-title'>
              <h3>{exercice.name}</h3>
              <FontAwesomeIcon className='nav-icon' icon={faArrowRight} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Exercices;