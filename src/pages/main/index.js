import './index.sass'
import './main.pug'
import './banner'
import  './aboutus'
import './skills'
import 'blocks/numbers'
import './work'
import initProcess from './process'
import './need-project'
import './clients'
import './services'
import initSlider from './slider'

export default ($root) => {
  initProcess();
  initSlider();
};
