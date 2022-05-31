import React from 'react'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'

const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    search: '',
  })

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName('Algo por awui');
  
  const handleSearch = (e) => {
    e.preventDefault();


  }

  return (
    <>
        <h1>Search Screen</h1>
        <hr />

        <div className="row">
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={handleSearch}>
              <input
              type="text"
              placeholder='Buscar un heroe'
              className='form-control'
              name='search'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
              />

              <button 
              type="submit"
              className='btn bt-outline-primary mt-2 btn-block'
              >
                Buscar...
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultado</h4>
            <hr />

            {
              heroesFiltered.map(hero => (
                <HeroCard 
                key={hero.id}
                {...hero}
                />
              ))
            }
          </div>

        </div>
    </>
  )
}

export default SearchScreen