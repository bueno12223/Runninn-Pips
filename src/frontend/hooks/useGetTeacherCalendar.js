const useGetTeacherData = () => {
  const teacherData = {
    OmarSosa: ['', '', '', '9:00 PM EST', '', '', '9:00 PM EST'],
    OmarSosaFx: ['', '', '9:00 PM EST', '', '', '', ''],
    JairPowell: ['3:00 PM EST', '9:00 PM EST', '', '10:00 AM EST', '', '', ''],
    NormaQuintero: ['8:00 PM EST', '', '6:00 AM EST', '', '8:00 PM EST', '8:00 PM EST', ''],
    IsmaelOrtega: ['', '8:00 AM EST', '8:00 AM EST', '', '3:00 PM EST', '', '3:00 PM EST'],
    CoraliaPinzon: ['', '10:30 PM EST', '', '', '', '10:30 PM EST', '10:30 PM EST']
  }
  return (teacherID) => teacherData[teacherID]
}
export default useGetTeacherData
