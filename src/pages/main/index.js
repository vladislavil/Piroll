import './index.sass';
import './main.pug';
import initBanner from './banner';
import initAboutus from './aboutus';
import initSkills from'./skills';
import initNumbers from'./numbers';
import initWork from './work';
import initProcess from './process';
import initProject from'./need-project';
import initClients from './clients';
import initServices from './services';
import initSlider from './slider';

export default ($root) => {
  initProcess();
  initWork();
  initSlider();

  let $banner = $root.find('.banner');
  if($banner.length) {
    initBanner($banner)
  }

  let $aboutus = $root.find('.aboutus');
  if($aboutus.length) {
    initAboutus($aboutus)
  }

  let $skills = $root.find('.skills');
  if($skills.length) {
    initSkills($skills)
  }

  let $numbers = $root.find('.numbers');
  if($numbers.length) {
    initNumbers($numbers)
  }

  let $project = $root.find('.project');
  if($project.length) {
    initProject($project)
  }

  let $clients = $root.find('.clients');
  if($clients.length) {
    initClients($clients)
  }

  let $services = $root.find('.secvices');
  if($services.length) {
    initServices($services)
  }

};
