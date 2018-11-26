import initHome from './home';
import initAbout from './about';
import initLending from './main';

export default () => {
  console.log('init pages');
  initHome();
  initAbout();
  initLending();
};
