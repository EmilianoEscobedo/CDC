function change(actual){
    if (actual=='-'){
        actual='+'
    }else {actual='-'}
    console.log('ajsj')
    return actual
    
 };

const services = document.getElementById('services');
const service1 = document.getElementById('service1');
const service2 = document.getElementById('service2');
const service3 = document.getElementById('service3');
const service4 = document.getElementById('service4');
const service5 = document.getElementById('service5');
const service6 = document.getElementById('service6');

services.addEventListener('click', e =>{
    if(e.target.classList.contains('btn1')){
        service1.innerHTML=change(service1.innerHTML);
    }
    if(e.target.classList.contains('btn2')){
        service2.innerHTML=change(service2.innerHTML);
    }
    if(e.target.classList.contains('btn3')){
        service3.innerHTML=change(service3.innerHTML);
    }
    if(e.target.classList.contains('btn4')){
        service4.innerHTML=change(service4.innerHTML);
    }
    if(e.target.classList.contains('btn5')){
        service5.innerHTML=change(service5.innerHTML);
    };
    if(e.target.classList.contains('btn6')){
        service6.innerHTML=change(service6.innerHTML);
    };;
});