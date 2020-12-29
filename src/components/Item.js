import React from 'react'
import './item.css'

const Item = ({ filteredCountries }) => {
    const renderItem = filteredCountries.map((d) => {
        return (
            <div key={d.country}>
                <div className="ui card">
  <div className="content">
    <div className="header" style={{color: '#C41C77', fontSize: '20px'}}>{d.country}</div>
  </div>
 
  <div className="content">
    <div className="ui small feed">
    <div className="event">
        <div className="content">
          <div className="ui header" style={{color : '#D91B56'}}>
          Total Cases:   <span className="second-word-formatting" style={{fontSize: '15px', color: '#D91B56'}}>{d.cases.total ? d.cases.total : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="ui header" style={{color : '#14289F', paddingTop: '5px', paddingBottom: '5px'}}>
          Total Deaths:   <span className="second-word-formatting" style={{fontSize: '15px', color: '#14289F'}}>{d.deaths.total ? d.deaths.total : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="ui header" style={{color: '#1FB628'}}>
          Recovered:   <span className="second-word-formatting" style={{fontSize: '15px', color: '#2CD91B'}}>{d.cases.recovered ? d.cases.recovered : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary small-text" style={{fontWeight : 'bold', color: '#2980B9'}}>
          Critical:   <span className="second-word-formatting">{d.cases.critical? d.cases.critical : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary small-text" style={{fontWeight : 'bold', color: '#2980B9'}}>
          New Cases:   <span className="second-word-formatting">{d.cases.new? d.cases.new : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary small-text" style={{fontWeight : 'bold', color: '#2980B9'}}>
          New Deaths:   <span className="second-word-formatting">{d.deaths.new? d.deaths.new : '0'}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
</div>
            
        )
    
    })

    return <div className="grid">{renderItem}</div>
      
}

export default Item

