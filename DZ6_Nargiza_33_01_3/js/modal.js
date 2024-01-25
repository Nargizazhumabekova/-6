//modal
/*const modal=document.querySelector('.modal')
const modalTriggerButton=document.querySelector('#btn-get')
const modalCloseButton=document.querySelector('.modal_close')




const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''
}

modalTriggerButton.onclick=()=>openModal()
modalCloseButton.onclick=()=>closeModal()
modal.onclick=(event)=>{
    if(event.target===modal){
          closeModal()
    }

}

const openModal = () => {
modal.style.display = 'block';
document.body.style.overflow = 'hidden';
window.removeEventListener('scroll', openModalOnScroll);
};*/

//событие скролл как сделать вызов по скроллу до конца страницы
//removeEventlistner
//setimeout 10 сек


// решение
const modal = document.querySelector('.modal');
const modalTriggerButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.removeEventListener('scroll', openModalOnScroll);
}

modalTriggerButton.onclick = openModal;
modalCloseButton.onclick = closeModal;
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

const openModalOnScroll = () => {
    openModal();
}

setTimeout(() => {
    openModal();
}, 10000);

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModalOnScroll();
    }
}

window.addEventListener('scroll', handleScroll);