import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://cs464p564-frontend-api.vercel.app/api/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {countries.map(country => (
          <li key={country.id}>
            <strong>{country.name}</strong> 
            <p><img src={country.flag_png} style={{ width: '30px', marginRight: '10px' }} /></p>
            <p>Official Languages: {country.official_languages}</p>
            <p>Population: {country.population}</p>
            <p>GDP_Billions: {country.gdp_billions}</p>
            <p>Flag_Alt: {country.flag_alt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;