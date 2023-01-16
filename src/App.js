import react, {useState, useEffect} from 'react'; // Importing the React functions
import './App.css'; // Importing the stylesheet
import fanfares from "./utilities/fanfares"; // Importing the fanfares array
import {shuffle} from 'lodash' // Random mix function of an array
import exercicesList from "./utilities/exercices";
import includes from "./utilities/utilities" // Importing utility functions

// Importing components
import Title from "./components/Title";
import Exercices from "./components/Exercices";
import FanfaresFullList from "./components/FanfaresFullList";
import Recognize from "./components/Recognize";
import Lyrics from "./components/Lyrics";
import Melodies from "./components/Melodies";

function App() { // Declaration of the App component
  
  const [activeExercice, setActiveExercice] =  useState({}); // Set the active exercice
  const [randomFanfares, setrandomFanfares] =  useState(shuffle(fanfares)); // List of fafanres randomly mixed

  const handleClickedExercice = (exercice) => {
    setActiveExercice(exercice)
  }
  
  const handleBackToMenu = () => {
    setActiveExercice({})
  }

  return (
    <div className="app">
      <div className={"home " + (Object.keys(activeExercice).length === 0 ? "visible" : "hidden")}>
        <Title/>
        <Exercices
          handleClickedExercice={handleClickedExercice}
        />
      </div>
      <div className="exercices">
        <FanfaresFullList
          activeExercice={activeExercice}
          handleBackToMenu={handleBackToMenu}
        />
      </div>
    </div>
  );
}

export default App;
