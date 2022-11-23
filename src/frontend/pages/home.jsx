import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Hero from '../components/home/hero'
import EducatorList from '../components/home/EducatorList'
import SuperCardRail from '../components/home/superCardRail'
import './styles/home.scss'
function home ({ profesorsVideos, search }) {
  const homeVideos = profesorsVideos.map(({ videos }) => videos[0])
  const profesors = profesorsVideos.map(({ profesor_id: profesorId }) => profesorId)
  if (!homeVideos) {
    return (<h1>cargando</h1>)
  }
  return (
    <>
      <Hero profesorsVideos={profesorsVideos} />
      {/*
      <EducatorList profesors={profesors} />
   {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <SuperCardRail cardData={homeVideos} title='Videos mas vistos' />} */}
    </>
  )
}
const mapDispatchToProps = state => ({
  profesorsVideos: state.videos,
  search: state.search
})
export default connect(mapDispatchToProps, null)(home)
