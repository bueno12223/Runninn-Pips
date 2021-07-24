import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import SuperCardRail from '../components/home/superCardRail'
import Hero from '../components/home/hero'
import './styles/reproductor.scss'
function reproductor (props) {
  const { id, teacher } = props.match.params
  const search = useSelector(state => state.search)
  const key = id.substring(0, id.length - 1)
  const [video, setVideo] = useState({})
  const [videos, setVideos] = useState([])
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const prevideo = props.videos[teacher].find((data) => data.key == key)
    setVideo(prevideo)
    setVideos(props.videos[teacher].slice(0, 9))
  }, [])
  return (
    <>
      <Hero />
      {search
        ? <SuperCardRail cardData={search.length ? search : 'error'} />
        : <>
          <section className='reproductor' id='video'>
            <h1 className='reproductor-video__title'>{video.title}</h1>
            <article className='reproductor-video-container'>
              <iframe className='reproductor-video' src={`https://player.vimeo.com/video/${key}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} width='1212' height='720' frameBorder='0' allow='autoplay; fullscreen; picture-in-picture' allowFullScreen />
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
  videos: state.videos
})
export default connect(mapStateToProps, null)(reproductor)
