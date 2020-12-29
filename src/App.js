import React, {useState, useEffect} from 'react'
import Item from './components/Item'
import axios from 'axios'
import './app.css'


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
            {loading ? <p style={{color: '#fff'}}>Loading..</p> : <>

                <h1 className="title1">COVID-19 DATA TRACKER</h1>
                <h4 className="title1">( This page updates every 10 minutes )</h4>
                <h4 className="title1"> <span>Developed by  </span> <br/> 
                <a rel="noopener noreferrer" target="_blank" 
                href="https://www.linkedin.com/in/azizultareq/">&nbsp; Azizul Tareq</a></h4>

              <div className="search-bar">
                <input
                  type="text"
                  placeholder="  Search Countries or Regions"
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
