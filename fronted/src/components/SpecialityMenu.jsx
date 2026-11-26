import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
        <h1>Busca Por Especialidad</h1>
        <p>Simplemente navegue por la lista de medicos. Programe si cita sin complicaciones</p>
        <div>
          {specialityData.map((item,index) => (
            <Link key={index} to={`/doctors/${item.speciality}`}>
            <img src={item.image} alt="" />
            <p>{item.speciality}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default SpecialityMenu