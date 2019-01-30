import { PixelRatio, Dimensions } from 'react-native'
const ratio = PixelRatio.get()
const { width, height } = Dimensions.get('window')
export { ratio, width, height }
