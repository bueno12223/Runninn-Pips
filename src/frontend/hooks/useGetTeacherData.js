import omarPhoto from '../assets/images/home/omar.jpg'
import omarjrPhoto from '../assets/images/home/omarjr.jpg'
import NormaImg from '../assets/images/layout/norma.jpg'
import IsmaelImg from '../assets/images/home/ismael.jpg'
import JairImg from '../assets/images/home/jair.jpg'
import CoraliaImg from '../assets/images/home/coralia.jpg'
import ruthImg from '../assets/images/home/ruth.jpg'

const useGetTeacherData = (teacherID) => {
  const teacherData = {
    OmarSosa: { img: omarPhoto, desc: 'Trader institucional (avanzado)' },
    NormaQuintero: { img: NormaImg, desc: 'Trader institucional (básico)' },
    IsmaelOrtega: { img: IsmaelImg, desc: 'Trader institucional (intermedio)' },
    JairPowell: { img: JairImg, desc: 'Trader institucional (intermedio)' },
    OmarSosaFx: { img: omarjrPhoto, desc: 'Trader institucional' },
    CoraliaPinzon: { img: CoraliaImg, desc: 'Presentadora de Running trader en español' },
    RuthYessenia: { img: ruthImg, desc: 'Presentazione Runnintrader italiano' }
  }
  const arrayOfTeacher = () => {
    const result = []
    for (const name in teacherData) {
      result.push({ ...teacherData[name], name })
    }
    return result
  }
  if (!teacherID) {
    return arrayOfTeacher()
  }
  return { ...teacherData[teacherID], name: teacherID }
}
export default useGetTeacherData
