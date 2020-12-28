import React, {useState, useEffect} from 'react'
import Item from './components/Item'
import axios from 'axios'
import './components/app.css'

const App = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {

    setLoading(true);

    const options = {
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        headers: {
          'x-rapidapi-key': '7e8c93a99dmshdb4caa5345e9438p134a81jsne98d117e9e91',
          'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setLoading(false);  
        setData(response.data.response);
      }).catch(function (error) {
          console.error(error);
      });

    }, [])

    useEffect(() => {
      setFilteredCountries(
        data.filter((da) =>
          da.country.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, data]);

 
    return (
        <div style={{padding: '30px'}}>
            {loading ? <p>Loading..</p> : <>

                <h1>Data</h1>

              <div className="search-bar">
                <input
                  type="text"
                  placeholder="  Search Countries E.g. Bangladesh"
                  onChange={(e) => setSearch(e.target.value)}
                />
                </div>

                <Item filteredCountries={filteredCountries} />
            </>
        }
        </div>
    )
}

export default App
