import initHome from './home'
import './about'
import './contact'
import initSingle from './single'
import initMain from './main'

export default () => {
  console.log('init pages');
  initHome();
  initMain();
  initSingle();
};
