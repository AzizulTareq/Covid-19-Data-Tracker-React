import React from 'react'
import './item.css'

const Item = ({ data }) => {
    
    const renderItem = data.map((d) => {
        return (
            <div key={d.country}>
                <div className="ui card">
  <div className="content every-card">
    <div className="header" style={{color: 'red'}}>{d.country}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">Total Cases:   <span className="second-word-formatting">{d.cases.total}</span></h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
          Total Deaths:   <span className="second-word-formatting">{d.deaths.total}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Recovered:   <span className="second-word-formatting">{d.cases.recovered}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Critical:   <span className="second-word-formatting">{d.cases.critical}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          New Cases:   <span className="second-word-formatting">{d.cases.new}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          New Deaths:   <span className="second-word-formatting">{d.deaths.new == '' ? '0' : d.deaths.new}</span>
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
