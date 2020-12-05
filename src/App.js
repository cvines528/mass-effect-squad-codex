import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './components/ui/Header'
// import Search from './components/ui/Search'
import CharacterGrid from './components/Characters/CharacterGrid'

import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      let result = await axios(`https://mass-effect-api.herokuapp.com/characters/`)
      // for(let i = 0; i < result.data.squadmates.length; i++){
      //   console.log(result.data.squadmates[i].name)
      //   setItems(result.data.squadmates[i])
      // }
      setItems(result.data.squadmates)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

    return (
      <div className="container">
         <Header />
         {/* <Search getQuery={(q) => setQuery(q)} /> */}
         <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    );
}

export default App;
