import React from 'react'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../hooks/useForm'
import HeroCard from '../hero/HeroCard'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  console.log(q)

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  })

  

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(q);
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);

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
              value={handleInputChange}
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
                (q === '')
                  ? <div className="alert alert-info">Buscar un héroe</div>
                  : (heroesFiltered === 0)
                    && <div className="alert alert-danger">No hay resultados: {q}</div> 
              }

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