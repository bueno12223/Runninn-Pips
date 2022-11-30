import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home ({ profesorsVideos, search }) {
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
