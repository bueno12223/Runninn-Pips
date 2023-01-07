import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home ({ profesorsVideos, search }) {
  if (!profesorsVideos[0].videos) {
    setTimeout(() => { window.location = '/pagos' }, 3000)
    return <h2 className='redirectTitle'>Lo sentimos, aún no tienes acceso a la academia, serás redirigido a pagos</h2>
  }
  const homeVideos = profesorsVideos.map(({ videos }) => videos[0])
  if (!homeVideos) {
    return (<h1>cargando</h1>)
  }
  return (
    <>
      <Hero profesorsVideos={profesorsVideos} />
      <EducatorList profesorsVideos={profesorsVideos} />
      {search
        ? <SuperCardRail cardData={search.length > 0 ? search : 'error'} />
        : <SuperCardRail cardData={homeVideos} title='Videos mas vistos' />}
    </>
  )
}
const mapDispatchToProps = state => ({
  profesorsVideos: state.videos,
  search: state.search
})
export default connect(mapDispatchToProps, null)(home)
