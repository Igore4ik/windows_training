import './slider';
import modals from "./modules/modals";
import tab from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded',()=>{
    const state = {};
    changeModalState(state);
    modals();
    tab('.glazing_slider','.glazing_block','.glazing_content','active');
    tab('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
    tab('.balcon_icons','.balcon_icons_img','.big_img > img','do_image_more', 'inline');
    forms(state);
    timer('.container1','2021-06-30');
    images();
});


