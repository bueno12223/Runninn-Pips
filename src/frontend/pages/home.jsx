import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home ({ ranked, search }) {
  const [all, setAll] = useState(ranked)
  useEffect(() => {
    setAll(ranked)
  }, [all])
  if (ranked === []) {
    return (
      <>
        <h1 className='title'>Tu cuenta no esta activa</h1>
        <p className='text'>Por favor dirigete a  <Link to='/pagos'> pagos</Link> para volver a acceder a todos los videos</p>
      </>
    )
  }
  if (!all) {
    return (<h1>cargando</h1>)
  }
  return (
    <>
      <Hero />
      <EducatorList />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <SuperCardRail cardData={all} title='Videos mas vistos' />}
    </>
  )
}
const mapDispatchToProps = state => {
  return {
    ranked: state.ranked,
    search: state.search
  }
}
export default connect(mapDispatchToProps, null)(home)
