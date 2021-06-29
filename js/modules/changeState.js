import checkNupInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const form = document.querySelectorAll('.balcon_icons_img '),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          type = document.querySelectorAll('#view_type'),
          profile = document.querySelectorAll('.checkbox');
    //check that width and height accept only numbers
    checkNupInputs('#width');
    checkNupInputs('#height');

    const getProps = (event, node, prop) => {
        node.forEach((item, i)=>{
           item.addEventListener(event,()=>{
               switch(item.nodeName){
                   case "SPAN":
                       state[prop] = i;
                       break;
                   case "INPUT":
                       if(item.getAttribute('type') === 'checkbox'){
                           profile.forEach((el,index)=>{
                               el.checked = i === index;
                           });
                           state[prop] = i === 0 ? 'cold' : 'warm';
                       }else{
                           if(item.value.trim() !== '')state[prop] = item.value;
                       }
                       break;
                   case "SELECT":
                       state[prop] = item.value;
                       break;
               }
               console.log(state)
           })
        })
    };
    getProps('click',form, 'window');
    getProps('input',windowWidth,'width');
    getProps('input',windowHeight, 'height');
    getProps('change',type,'type');
    getProps('change',profile,'profile');
};

export default changeModalState;