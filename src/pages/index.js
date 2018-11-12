import initHome from './home';
import initAbout from './about';
import './lending';

export default () => {
  console.log('init pages');
  initHome();
  initAbout();
};
