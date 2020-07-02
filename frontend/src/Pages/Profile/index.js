import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'


export default function Profile() {

  const [incidents, setIncidents] = useState([])
  const history = useHistory()
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  useEffect(() => {
    api.get('Profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])
  
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`caso/${id}`, {
        headers: {
          Authorization: ongId,
        }
      })
      
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <span> Bem-vinda, {ongName} </span>

        <Link className="button" to="/Caso/Novo"> Cadastrar novo caso </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="e02041" />
        </button>
      </header>
      <h1> Casos Cadastrados </h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong> CASO: </strong>
            <p> {incident.title} </p>
    
            <strong> DESCRIÇÃO: </strong>
            <p> {incident.description} </p>
    
               
            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#e02041" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}