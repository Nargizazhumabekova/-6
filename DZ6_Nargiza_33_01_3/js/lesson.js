//tab slider
/*const tabContents=document.querySelectorAll('.tab_content_block')
const tabItems=document.querySelectorAll('.tab_content_item')
const tabsParent=document.querySelector('.tab_content_items')
const hideTabContent=()=>{
 tabContents.forEach((tabContent)=>{
      tabContent.style.display='none'
    })
    tabItems.forEach((tabItem)=>{
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent =(index=0)=>{
    tabContents[index].style.display='block'
    tabItems[index].classList.add('tab_content_item_active')
}



hideTabContent()
showTabContent(0)


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
                let i = 0;
                setInterval(() => {
                    i++;
                    if (i > tabItems.length - 1) {
                        i = 0;
                    }
                    hideSlide();
                    showSlide(i);
                }, 5000);
            }
        });
    }
};*/
// 1вариант

const tabContents = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

let autoSwitchTabsInterval; // Declare a variable for the interval

const hideTabContent = () => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none';
    });
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

const autoSwitchTabs = () => {
    let currentIndex = 0;

    return () => {
        hideTabContent();
        showTabContent(currentIndex);

        currentIndex = (currentIndex + 1) % tabItems.length;
    };
};

const startAutoSwitchTabs = () => {
    clearInterval(autoSwitchTabsInterval);

    const switchTabs = autoSwitchTabs();
    autoSwitchTabsInterval = setInterval(switchTabs, 3000);
};

hideTabContent();
showTabContent(0);
startAutoSwitchTabs(); // Start automatic tab switching

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
                startAutoSwitchTabs(); // Restart automatic tab switching
            }
        });
    }
};


//converter
//converter variant1 на уроке делали
/*const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')


const converter=(element,targetElement,currentValue)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload=()=>{
            const data=JSON.parse(request.response)
            switch (currentValue){
                case'som':
                    targetElement.value=(element.value/data.usd).toFixed(2)
                    break
                case 'usd':
                    targetElement.value=(element.value*data.usd).toFixed(2)
                    break
                default:
                    break
            }

        }
    }
}

converter(somInput,usdInput,'som')
converter(usdInput,somInput,'usd')*/

//вариант1

/*const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')
const eurInput=document.querySelector('#eur')

const converter=(element,targetElement,currentValue)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()

        request.onload=()=>{
            const data=JSON.parse(request.response)
            switch (currentValue){
                case'som':
                    targetElement.value=(element.value/data.usd).toFixed(2)
                    break
                case 'usd':
                    targetElement.value=(element.value*data.usd).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    break
                default:
                    break
            }

        }
    }
}

converter(somInput,usdInput,'som')
converter(usdInput,somInput,'usd')
converter(eurInput,somInput,'eur')
converter(eurInput,usdInput,'eur')*/




const somInput=document.querySelector('#som')
const usdInput=document.querySelector('#usd')
const eurInput=document.querySelector('#eur')
const converter=(element,targetElement, additionalElement, currentValue)=>{
    element.oninput=()=>{
        const request=new XMLHttpRequest()
        request.open('GET','../data/converter.json')
        request.setRequestHeader('Content-type','application/json')
        request.send()
        request.onload=()=>{
            const data=JSON.parse(request.response)
            switch (currentValue){
                case'som':
                    targetElement.value=(element.value/data.usd).toFixed(2)
                    additionalElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value=(element.value*data.usd).toFixed(2)
                    additionalElement.value = (element.value * 0.91).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    additionalElement.value = (element.value * 1.10).toFixed(2)
                    break
                default:
                    break
            }
        }    }
}
converter(somInput,usdInput, eurInput,'som')
converter(usdInput,eurInput, somInput,'usd')
converter(eurInput,usdInput, somInput,'eur')

//урок6 card switcher
/*const card=document.querySelector('card')
const btnPrev=document.querySelector('#btnPrev' )
const BtnNext=document.querySelector(' #BtnNext')

let count=1

BtnNext.onclick=()=> {
    count++
    fetch(`#https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response=>response.json())
        .then(data=>{
            card.innerHTML
            <p>${data.title}</p>
            <p
                style"color:${data.completed ?'green' 'red'}">
                ${data.completed}
            </p>
                <span>${data.id}</span>

        })
}*/

const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let count = 1;

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    fetchData(count);
};

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    fetchData(count);
};

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color:${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}


//вторая часть дз
fetch('https://jsonplaceholder.typicode.com/posts ')
   .then((response) => response.json())
    .then((data) =>
        console.log(data))
