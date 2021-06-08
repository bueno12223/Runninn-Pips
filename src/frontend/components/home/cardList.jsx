import React from 'react'
import { connect } from 'react-redux'
import Card from './card'
import './styles/cardList.scss'
function cardList ({ videos }) {
  return (
    <>
      <section className='cardList'>
        <div className='cardList-container'>

          {
            videos.map(PreVideo => {
              return (

                <Card key={PreVideo._id} {...PreVideo} keyID={PreVideo.key} />
              )
            })
            }
        </div>
      </section>
    </>
  )
}
const useStateToProps = state => {
  return {
    videos: state.videos
  }
}
export default connect(useStateToProps, null)(cardList)
