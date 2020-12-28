import React from 'react'
import './item.css'

const Item = ({ data }) => {
    
    const renderItem = data.map((d) => {
        return (
            <div key={d.country}>
                <div className="ui card">
  <div className="content every-card">
    <div className="header">{d.country}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">Activity</h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
            xyz
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
            critical
          </div>
        </div>
      </div>
      <div className="event">
        <div className="content">
          <div className="summary">
             new cases
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
