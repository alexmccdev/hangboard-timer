import React from 'react';

const Stats = ({ stats }) =>  {
  
  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - (minutes * 60);
  
    if (minutes < 10) {
      minutes = '0' + minutes;
    }   
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds; 
  }

    return (
      <div className="container">
        <div className="row">
          <div className="col s4">
            <p className="center-align">Time Elapsed</p>
            <h4 className="center-align">{formatTime(stats.totalElapsedTime)}</h4>
          </div>        
          <div className="col s4">
            <p className="center-align">Hang</p>
            <h4 className="center-align">{stats.currentHang}/{stats.settings.hangsPerSet}</h4>
          </div>        
          <div className="col s4">
            <p className="center-align">Set</p>
            <h4 className="center-align">{stats.currentSet}/{stats.settings.totalSets}</h4>
          </div>        
        </div>
      </div>
    )
}

export default Stats;