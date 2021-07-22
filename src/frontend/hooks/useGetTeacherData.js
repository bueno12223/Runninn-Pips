import omarPhoto from '../assets/images/home/omar.jpg'
import omarjrPhoto from '../assets/images/home/omarjr.jpg'
import NormaImg from '../assets/images/layout/norma.jpg'
import IsmaelImg from '../assets/images/home/ismael.jpg'
import JulioImg from '../assets/images/home/julio.jpg'
import JairImg from '../assets/images/home/jair.jpg'
const useGetTeacherData = (teacherID) => {
  const teacherData = [
    { img: omarPhoto, name: 'Omar Sosa', desc: 'Trader institucional (avanzado)' },
    { img: NormaImg, name: 'Norma Quintero', desc: 'Trader institucional (básico)' },
    { img: IsmaelImg, name: 'Ismael Ortega', desc: 'Trader institucional (intermedio)' },
    { img: JulioImg, name: 'Julio Ortiz', desc: 'Trading de criptomonedas' },
    { img: JairImg, name: 'Jair Powell', desc: 'Trader institucional (intermedio)' },
    { img: omarjrPhoto, name: 'Omar Sosa jr', desc: 'Trader institucional' }
  ]
  switch (teacherID) {
    case 'Omar Sosa':
      return teacherData[0]

    default:
      return teacherData
  }
}
export default useGetTeacherData
