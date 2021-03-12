import Naver from 'models/Naver'
import chance from 'chance'

const NaverFactory = async () => {
  const naver = await Naver.query().insert({
    name: chance().name(),
    job_role: chance().word(),
    birthdate: chance().date(),
    admission_date: chance().date()
  })

  const parsedNaver = naver.toJSON()

  return {
    ...parsedNaver,
  }
}

export default NaverFactory
