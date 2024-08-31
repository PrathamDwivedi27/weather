import React from 'react'

const Weathericon = ({iconNumber,summary}) => {
  return (
    <img
    src={`${process.env.PUBLIC_URL}/weather_icons/set04/big/${iconNumber}.png`}
    alt={summary}
    ></img>
  )
}

export default Weathericon
