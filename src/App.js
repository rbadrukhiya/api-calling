import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './box';

function App() {
  const [getchar, setchar] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response);
        setchar(response.data.results)
        console.log(getchar)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (

    <div className="App">
      {/* <div className="set"> */}
      <ul className='d-flex list-unstyled justify-content-end main-menu '>
            <li className='me-5'>Docs</li>
            <li className='me-5'>About</li>
            <li className='me-3 bor ps-3 pe-3'>Support</li>
          </ul>
          <h1 className='p-5 text-center heading'>The Rick and Morty API</h1>
      <div className="set">
      <div className="container ">
        <div className="row">
          
          {getchar.map((i) => {
            return (
              <>
                <Box img={i.image}
                  id={i.id}
                  name={i.name}
                  gender={i.gender}
                  species={i.species}
                />
              </>
            )
          })}
          <div className="footer text-center">
            <ul className='d-flex justify-content-center list-unstyled align-items-center '>
              <li className='me-4 mt-5 '>CHARACTERS: 826</li>
              <li className='me-4 mt-5'>LOCATIONS: 126</li>
              <li className='me-4 mt-5'>EPISODES: 51</li>
            </ul>
            <ul className='text-center list-unstyled'>
              <li>SERVER STATUS
              </li>
            </ul>
            <ul className='list-unstyled d-flex justify-content-center mt-5'>
              <li className='me-4'><i class="fa-brands fa-github "></i></li>
              <li className='me-4'><i class="fa-brands fa-twitter"></i></li>
              <li className='me-4'><i class="fa-solid fa-heart"></i></li>
            </ul>
            <ul className=' copy mt-4'>
              <i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-angle-right"></i> by <a href="#">Axel Fuhrmann</a> 2022
            </ul>
          </div>

        </div>
      </div>
      </div>


    </div>
  );
}

export default App;
