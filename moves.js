// ----------- Services ----------- 

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

// ----------- Counter ----------- 

addEventListener('DOMContentLoaded', () => {
    const counters = document.getElementsByClassName('number');

    const animateCounters = () => {
        for (const counter of counters) {
            let max_quantity = +counter.dataset.total,
                actual_value = +counter.innerText
                let time = setInterval(()=> {
                    counter.innerText = (actual_value +=1);
                    if (actual_value === max_quantity){
                        clearInterval(time)
                        counter.style.color='#BBA14F';
                    }
                },150);
            }
    }
    const showCounters = elements => {
        elements.forEach(element => {
            if(element.isIntersecting) {
                element.target.classList.add('animate');
                element.target.classList.remove('dontShow');
                setTimeout(animateCounters,300)
            }
        });
    }
    const observer = new IntersectionObserver(showCounters, {
        threshold: 0.75
    })
    const elementHTML = document.getElementById('counters')
    observer.observe(elementHTML)

})

