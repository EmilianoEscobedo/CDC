// ----------- Services ----------- 

const services = document.getElementsByClassName('services');

let service = Array.from(services);
service.forEach(el => {
    el.addEventListener('click', () => {
    let actual = el.children[2].innerHTML;
    (actual=='+') ? (el.children[2].innerHTML='-', el.children[1].style.fontWeight='500') : (el.children[2].innerHTML='+', el.children[1].style.fontWeight='normal');
    });
});

// ----------- Counter ----------- 

addEventListener('DOMContentLoaded', () => {
    const counters = document.getElementsByClassName('number');

    const animateCounters = () => {
        for (const counter of counters) {
            let max_quantity = +counter.dataset.total,
                actual_value = +counter.innerText
                if (actual_value != max_quantity){
                    let time = setInterval(()=> {
                    counter.innerText = (actual_value +=1);
                    if (actual_value === max_quantity){
                        clearInterval(time)
                        counter.style.color='#BBA14F';
                    }
                },150);
            }}
    }
    //API intersectionObserver
    const showCounters = elements => {
        elements.forEach(element => {
            if(element.isIntersecting) {
                element.target.classList.add('animate');
                element.target.classList.remove('dontShow');
                setTimeout(animateCounters,300);
            }
        });
    }
    const observer = new IntersectionObserver(showCounters, {
        threshold: 0.75
    })
    const elementHTML = document.getElementById('counters')
    observer.observe(elementHTML)
    

})

