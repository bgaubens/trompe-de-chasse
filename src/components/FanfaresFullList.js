import react, { useState } from 'react'; // Importing the React functions
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark, faArrowDown, faArrowUp, faPlus, faMinus, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import BackToMenu from './BackToMenu'
import fanfaresList from '../utilities/fanfares'

function FanfaresFullList( {handleBackToMenu, activeExercice} ) {

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function filterFanfare(term, arr) {
  const filteredData = arr.filter((item) => {
    return Object.values(item.name).join('').toLowerCase().includes(term.toLowerCase())
  })
  return filteredData
}

  const [activeFanfare, setActiveFanfare] =  useState({}); // Set the active fanfare
  const [isPlaying, setIsPlaying] = useState(false);
  const [fanfares, setFanfares] = useState(fanfaresList.sort(dynamicSort('name')));
  const [activeSort, setActiveSort] = useState('alphabetical')
  const [searchTerm, setSearchTerm] = useState('')

  const handleClickedFanfare = (fanfare) => {
    Object.keys(activeFanfare).length === 0 ? setActiveFanfare(fanfare) : setActiveFanfare({})
    fanfare.audio.pause()
    fanfare.audio.currentTime = 0
    setIsPlaying(false)
  }
  
  const handlePlay = (fanfare) => {
    if (!isPlaying) {
      fanfare.audio.play()
      setIsPlaying(true)
    } else {
      fanfare.audio.pause();
      setIsPlaying(false)
    }
  }

  const handleAlphabeticalSort = () => {
    let fanfaresCopy = JSON.parse(JSON.stringify(fanfares))
    if (activeSort === 'alphabetical') {
      setActiveSort('-alphabetical')
      setFanfares(fanfaresCopy.sort(dynamicSort('-name')))
    } else {
      setActiveSort('alphabetical')
      setFanfares(fanfaresCopy.sort(dynamicSort('name')))
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e)
    let fanfaresCopy = JSON.parse(JSON.stringify(fanfaresList))
      if (activeSort === 'alphabetical') {
        setFanfares(filterFanfare(e, fanfaresCopy).sort(dynamicSort('name')))
      } else {
        setFanfares(filterFanfare(e, fanfaresCopy).sort(dynamicSort('-name')))
      }
  }

  const handleDeleteSearch = () => {
    setSearchTerm('')
    let fanfaresCopy = JSON.parse(JSON.stringify(fanfaresList))
      if (activeSort === 'alphabetical') {
        setFanfares(fanfaresCopy.sort(dynamicSort('name')))
      } else {
        setFanfares(fanfaresCopy.sort(dynamicSort('-name')))
      }
  }

  return (
    <div className={"full-list-exercice " + (activeExercice === "fullList" ? "visible" : "hidden")}>
      
      <BackToMenu
        handleBackToMenu={handleBackToMenu}
      />
        <div className={"searchbar " + (Object.keys(activeFanfare).length === 0 ? "" : "hidden")}>
          <FontAwesomeIcon className='searchbar-icon search' icon={faSearch}/>
          <input
            placeholder='Chercher une fanfare'
            type='text'
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          ></input>
          <FontAwesomeIcon
            className='searchbar-icon delete'
            icon={faXmark}
            onClick={() => handleDeleteSearch()}
          />
        </div>

        <p className={"instructions " + (Object.keys(activeFanfare).length === 0 ? "" : "hidden")}>Retrouvez ici les détails des fanfares</p>
        
        <div className='fanfares-list-section'>
          <div
            className={'command sort-alphabetical ' + (Object.keys(activeFanfare).length === 0 ? "" : "hidden")}
            onClick={() => handleAlphabeticalSort()}
          >
            <p>Trié par ordre alphabétique</p>
            <FontAwesomeIcon
              className='searchbar-icon sort'
              icon={activeSort === "alphabetical" ? faArrowDown : faArrowUp}
            />
          </div>

          <div className='fanfares-list'>
            {fanfares.map((fanfare) => {
              return (
                <div
                  className={"fanfare " + ((activeFanfare === fanfare || Object.keys(activeFanfare).length === 0) ? "" : "hidden")
                   + ((Object.keys(activeFanfare).length === 0) ? 'minimized' : '')}
                >
                  <div
                    className='fanfare-navigation'
                    onClick={() => handleClickedFanfare(fanfare)}
                  >
                    <h3>{fanfare.name}</h3>
                    <FontAwesomeIcon className='nav-icon' icon={(Object.keys(activeFanfare).length === 0) ? faPlus : faMinus} />
                  </div>
                  <div className={"fanfare-content " + ((Object.keys(activeFanfare).length !== 0) ? "" : "hidden")}>
                    <p className='fanfare-type'>{fanfare.type}</p>
                    <div className='tabs'>
                      <button className='lyrics-button'>Paroles</button>
                      <button className='musicsheet-button'>Partition</button>
                    </div>
                    <p className='fanfare-lyrics'>{fanfare.lyrics}</p>
                    <FontAwesomeIcon
                      className='play-icon play'
                      icon={isPlaying ? faPause : faPlay}
                      onClick={() => handlePlay(fanfare)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
  );
};

export default FanfaresFullList;