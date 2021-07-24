import omarPhoto from '../assets/images/home/omar.jpg'
import omarjrPhoto from '../assets/images/home/omarjr.jpg'
import NormaImg from '../assets/images/layout/norma.jpg'
import IsmaelImg from '../assets/images/home/ismael.jpg'
import JulioImg from '../assets/images/home/julio.jpg'
import JairImg from '../assets/images/home/jair.jpg'
import CoraliaImg from '../assets/images/home/coralia.jpg'
const useGetTeacherData = (teacherID) => {
  const teacherData = [
    { img: omarPhoto, name: 'OmarSosa', desc: 'Trader institucional (avanzado)' },
    { img: NormaImg, name: 'NormaQuintero', desc: 'Trader institucional (básico)' },
    { img: IsmaelImg, name: 'IsmaelOrtega', desc: 'Trader institucional (intermedio)' },
    { img: JulioImg, name: 'JulioOrtiz', desc: 'Trading de criptomonedas' },
    { img: JairImg, name: 'JairPowell', desc: 'Trader institucional (intermedio)' },
    { img: omarjrPhoto, name: 'OmarSosaFx', desc: 'Trader institucional' },
    { img: CoraliaImg, name: 'CoraliaPinzon', desc: 'Referidos' }
  ]
  switch (teacherID) {
    case 'OmarSosa':
      return teacherData[0]
    case 'NormaQuintero':
      return teacherData[1]
    case 'IsmaelOrtega':
      return teacherData[2]
    case 'JulioOrtiz':
      return teacherData[3]
    case 'JairPowell':
      return teacherData[4]
    case 'OmarSosaFx':
      return teacherData[5]
    case 'CoraliaPinzon':
      return teacherData[6]

    default:
      return teacherData
  }
}
export default useGetTeacherData
