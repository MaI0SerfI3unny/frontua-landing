const select = document.querySelector('select');
const scroll = document.querySelector('.scroll');
const alerte = document.querySelector('.alert-drone');
const toper = document.querySelector('#top');
const hiddenElement = document.getElementById("donate");
const btn = document.querySelector('.donate-button-scroll');
const btnTwo = document.querySelector('.donate-button-scroll-two');
const en_item = document.querySelector('.en');
const ua_item = document.querySelector('.ua');
const policy = document.getElementById('policy')
const cookies = document.getElementById('cookies')
const offer = document.getElementById('offer')

const allLang = ['en','ua','de'];

select.addEventListener('change', changeUrlLanguage);

function changeUrlLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    if(hash == 'en'){
        ua_item.classList.add('language_item-non-select')
        policy.href="privacy_policy_en.pdf"
        cookies.href="cookie_en.pdf"
        offer.href="offert_en.pdf"
    }else{
        en_item.classList.add('language_item-non-select')
        policy.href="privacy_policy_ua.pdf"
        cookies.href="cookie_ua.pdf"
        offer.href="offert_ua.pdf"
    }
    select.value = hash;
   // document.querySelector('.lng-title').innerHTML = arrLang['title'][hash];
   for(let key in arrLang){
    document.querySelector('.lng-'+key).innerHTML = arrLang[key][hash];
   }
}

function changeLanguageClick(lang){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for(let key in arrLang){
        document.querySelector('.lng-'+key).innerHTML = arrLang[key][hash];
    }
}

function sayHi(){
    alerte.style.left = "-180px";
}

function closeDialog(){
    alerte.style.left = "-680px";
}

setTimeout(sayHi, 4000);

changeLang();

function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', () => {
    //console.log(window.pageYOffset)
    if(window.pageYOffset >= 1000){
        scroll.style.display = 'block';
    }else{
        scroll.style.display = 'none';
    }
})

scroll.addEventListener('click', () => {scrollTo(toper)})

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);
btnTwo.addEventListener('click', handleButtonClick);