import React from 'react'
import './item.css'

const Item = ({ data }) => {
    
    const renderItem = data.map((d) => {
        return (
            <div key={d.country}>
                <div className="ui card">
  <div className="content">
    <div className="header" style={{color: 'blue'}}>{d.country}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">Total Cases:   <span className="second-word-formatting">{d.cases.total ? d.cases.total : '0'}</span></h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
          Total Deaths:   <span className="second-word-formatting">{d.deaths.total ? d.deaths.total : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Recovered:   <span className="second-word-formatting">{d.cases.recovered ? d.cases.recovered : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          Critical:   <span className="second-word-formatting">{d.cases.critical? d.cases.critical : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
          New Cases:   <span className="second-word-formatting">{d.cases.new? d.cases.new : '0'}</span>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
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

