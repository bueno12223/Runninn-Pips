import { configure } from 'enzyme'
import register from 'ignore-styles'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

register(['.css', '.sass', '.scss'])
configure({ adapter: new Adapter() })
