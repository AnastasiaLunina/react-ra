import React from 'react'

export default function Samples() {

const now = new Date();
const gmtTime = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'GMT',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(now);

  return (
    <div className="samples-timezone-container">
        <h2>Current GMT time: {gmtTime}</h2>
        <h4>London <span>GMT</span></h4>
        <h4>New York <span>GMT-5</span></h4>
        <h4>Moscow <span>GMT+3</span></h4>
        <h4>Melbourne <span>GMT+11</span></h4>
    </div>
  )
}
