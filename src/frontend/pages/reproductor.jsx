import React from 'react'
import Comment from '../components/general/comment'
import like from '../assets/icons/like.svg'
import './styles/reproductor.scss'
function reproductor (props) {
  const { id } = props.match.params
  return (
    <section className='reproductor'>
      <article className='reproductor-video-container'>
        <h1 className='reproductor-video__title'>{id}</h1>
        <iframe className='reproductor-video' src='https://player.vimeo.com/video/559670939' width='640' height='360' frameborder='0' allow='autoplay; fullscreen; picture-in-picture' allowfullscreen />
        <p className='reproductor-likes'>20{'   '}<img src={like} alt='me gusta' /></p>
      </article>
      <article className='reproductor-content-container'>
        <h4 className='reproductor-content-title'>Descripción</h4>
        <p className='reproductor-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores tempora sed harum sapiente deserunt quisquam, rerum dicta! Minima, provident. Neque fugit atque aliquid, molestiae exercitationem aspernatur qui. Itaque, iste?</p>
        <h4 className='reproductor-content-title'>Descripción</h4>
        <ul className='reproductor-comment'>
          {
            [1, 2, 3, 4, 5].map(e => (
              <Comment key={e} />
            ))
            }
        </ul>
      </article>
    </section>
  )
}

export default reproductor
