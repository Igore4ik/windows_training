const images = () => {
    const workSpace = document.querySelector('.works'),
        imgModal = document.createElement('div'),
        bigModalImg = document.createElement('img');

    imgModal.classList.add('popup');
    workSpace.appendChild(imgModal);
    imgModal.style.display = 'none';
    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.appendChild(bigModalImg);

    workSpace.addEventListener('click',(e)=>{
        e.preventDefault();
        const target = e.target;
        if(target && target.classList.contains('preview')){
            imgModal.style.display = 'flex';
            bigModalImg.src = target.parentNode.getAttribute("href");
        }
        if(target && target.matches('div.popup')){
            imgModal.style.display = 'none';
        }
    })
};

export default images;