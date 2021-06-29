const modals = () => {
    //function that take selectors and open (close) modal
    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            allModals = document.querySelectorAll('[data-modal]');
        trigger.forEach(item => {
            item.addEventListener('click',(e)=>{
                if(e.target){
                    e.preventDefault();
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            })
        });
        close.addEventListener('click',()=>{
            //closing all opening modals
            allModals.forEach(item=>{
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
        //if click was not on modal - it will be close
        modal.addEventListener('click',(e)=>{
            if(e.target === modal && closeOverlay){
                allModals.forEach(item=>{
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    //function that open modal with timer
    function showModalWithTime(modalSelector, time){
        setTimeout(()=>{
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';

        },time)
    }
    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link','.popup','.popup_close');
    bindModal('.popup_calc_btn','.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);
    // showModalWithTime('.popup',60000);
};

export default modals;