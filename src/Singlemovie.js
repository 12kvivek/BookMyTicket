import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovie = () => {
  const { id } = useParams();
  return (
  <div>
    Our Single Movie {id}
  </div>
  )
}

export default Singlemovie