const question1 = document.querySelector('#question1');

const img1 = './assets/images/icon-plus.svg';
const img2 = './assets/images/icon-minus.svg';

question1.addEventListener('click', (e)=> {
    // const image = question1.getElementsByTagName('img')[0];
    question1.children[1].classList.toggle('hidden');
    // console.log(image.src)
    // console.log(image.src == img2)
    // image.src = img2
    // image.src = image.src == img2 ? img1 : img2
    
     
})