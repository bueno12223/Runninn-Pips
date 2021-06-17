import React, { useState, useEffect } from 'react'
import Comment from '../components/home/comment'
import { connect } from 'react-redux'
import { getVideo } from '../actions'
import './styles/reproductor.scss'
function reproductor (props) {
  const { id } = props.match.params
  const { getVideo, video: videoSearch } = props
  const [video, setVideo] = useState(videoSearch)
  getVideo(id)
  useEffect(() => setVideo(video), [videoSearch])
  console.log(video)
  return (
    <section className='reproductor'>
      <article className='reproductor-video-container'>
        <h1 className='reproductor-video__title'>{video ? video.title : ''}</h1>
        <iframe className='reproductor-video' src={`https://player.vimeo.com/video/${id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} width='1212' height='720' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen />
      </article>
      <article className='reproductor-content-container'>
        <p className='reproductor-description'>{video ? video.description : 'No hay descripción del video'}</p>
        <ul className='reproductor-comment'>
          {video &&
            video.comments.map(e => (
              <Comment key={e} />
            ))}
        </ul>
      </article>
    </section>
  )
}
const mapDistpachToProps = state => {
  return {
    video: state.selectVideo
  }
}
const mapStateToProps = {
  getVideo
}
export default connect(mapDistpachToProps, mapStateToProps)(reproductor)
