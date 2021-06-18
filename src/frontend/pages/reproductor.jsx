import React, { useState } from 'react'
import Comment from '../components/home/comment'
import { connect } from 'react-redux'
import { getVideo } from '../actions'
import Loader from 'react-loader-spinner'

import './styles/reproductor.scss'
function reproductor (props) {
  const { id } = props.match.params
  const { getVideo } = props
  const [video, setVideo] = useState({
    description: '',
    title: '',
    comments: []
  })
  getVideo(id).then(e => setVideo(e)).catch(e => console.log(e))
  if (!video) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: 60 + 'vh'
      }}
      >
        <Loader
          type='Puff'
          color='#e42421'
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    )
  }
  return (
    <section className='reproductor'>
      <article className='reproductor-video-container'>
        <h1 className='reproductor-video__title'>{video.title || ''}</h1>
        <iframe className='reproductor-video' src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} width='1212' height='720' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen />
      </article>
      <article className='reproductor-content-container'>
        <p className='reproductor-description'>{video.description || 'No hay descripción del video'}</p>
        <ul className='reproductor-comment'>
          {
             video.comments.map(e => (
               <Comment key={e} />
             )) ||
               <div />
}
        </ul>
      </article>
    </section>
  )
}
const mapStateToProps = {
  getVideo
}
export default connect(null, mapStateToProps)(reproductor)
