import React from 'react'
// import Comment from '../components/general/comment'
import like from '../assets/icons/like.svg'
import './styles/reproductor.scss'
import { connect } from 'react-redux'
function reproductor (props) {
  const { id } = props.match.params
  // eslint-disable-next-line eqeqeq
  const video = props.videos.find(e => e.key == id)
  return (
    <section className='reproductor'>
      <article className='reproductor-video-container'>
        <h1 className='reproductor-video__title'>{video.title}</h1>
        <iframe className='reproductor-video' src='https://player.vimeo.com/video/560082465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' width='1212' height='720' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen title='TRADING INSTITUCIONAL (CONFIRMACION 7)CLASES DE FIBONACCI' />

        <p className='reproductor-likes'>{video.likes}{'   '}<img src={like} alt='me gusta' /></p>
      </article>
      <article className='reproductor-content-container'>
        <p className='reproductor-description'>No hay descripción del video</p>
        <h4 className='reproductor-content-title'>Comentarios</h4>
        <p className='reproductor-description'>No hay Comentarios del video</p>
        {/* <ul className='reproductor-comment'>
          {
            [1, 2, 3, 4, 5].map(e => (
              <Comment key={e} />
            ))
            }
        </ul> */}
      </article>
    </section>
  )
}
const mapStateToProps = state => {
  return {
    videos: state.videos
  }
}
export default connect(mapStateToProps, null)(reproductor)
