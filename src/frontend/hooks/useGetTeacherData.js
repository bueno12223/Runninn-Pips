import omarPhoto from '../assets/images/home/omar.png'

const useGetTeacherData = (teacherID) => {
  const teacherData = [
    { img: omarPhoto, name: 'Omar Sosa', desc: 'Trader institucional' }
  ]
  switch (teacherID) {
    case 'Omar Sosa':
      return teacherData[0]

    default:
      return teacherData
  }
}
export default useGetTeacherData
