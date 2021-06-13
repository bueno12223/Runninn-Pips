import React from 'react'
import axios from 'axios'
import FormData from 'form-data'
function transferencia () {
  const handleFileInput = async (file) => {
    const bodyFormData = new FormData()
    bodyFormData.append('image', file)
    const result = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload?expiration=604800&key=1b513c3ad873e32c0f610845b3ac9601',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(result)
  }
  return (
    <section>
      <h2>Transferencia</h2>
      <div className=''>
        <h4>banco general, ahorro</h4>
        <p>00000000000000000000</p>
        <p>Running Trader</p>
      </div>
      <input type='file' name='image' id='' onChange={(e) => handleFileInput(e.target.files[0])} />
    </section>
  )
}

export default transferencia
