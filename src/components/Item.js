import React from 'react'

const Item = ({ data }) => {
    
    const renderItem = data.map((d) => {
        return (
            <div key={d.country}>
                <div className="ui card">
  <div className="content" style={{display: 'flex'}}>
    <div className="header">{d.country}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">Activity</h4>
    <div className="ui small feed">
      <div className="event">
        <div className="content">
          <div className="summary">
            deaths
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

    return <div>{renderItem}</div>
}

export default Item
