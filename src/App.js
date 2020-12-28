import React, {useState, useEffect} from 'react'
import Item from './components/Item'
import axios from 'axios'

const App = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

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



    return (
        <div style={{padding: '30px'}}>
            {loading ? <p>Loading..</p> : <>
                <h1>Data</h1>
                <Item data={data} />
            </>
        }
        </div>
    )
}

export default App
