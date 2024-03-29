import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SuperCardRail from '../components/home/superCardRail'
import Hero from '../components/home/hero'
import './styles/reproductor.scss'
function reproductor (props) {
  const { id, teacher } = props.match.params
  const location = useLocation()
  const search = useSelector(state => state.search)
  const [video, setVideo] = useState({})
  const [videos, setVideos] = useState([])
  const sortVideos = () => {
    const profesorVideos = props.profesorsVideos.find(({ profesor_id: profesorId }) => teacher === profesorId)
    setVideo(profesorVideos.videos.find(({ key }) => key == id))
    setVideos(profesorVideos.videos.slice(0, 9))
  }
  useEffect(sortVideos, [])
  useEffect(sortVideos, [location])
  return (
    <>
      <Hero />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <>
          <section className='reproductor' id='video'>
            <h1 className='reproductor-video__title'>{video.title}</h1>
            <article className='reproductor-video-container'>
              <iframe className='reproductor-video' src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} width='1212' height='720' frameBorder='0' allow='autoplay; fullscreen; picture-in-picture' allowFullScreen />
            </article>
            <article className='reproductor-content-container'>
              <p className='reproductor-description'>{video.description || ''}</p>
            </article>
          </section>
          <h4 className='title'>Mas de este educador</h4>
          <SuperCardRail cardData={videos} />
        </>}
    </>
  )
}
const mapStateToProps = state => ({
  profesorsVideos: state.videos
})
export default connect(mapStateToProps, null)(reproductor)
