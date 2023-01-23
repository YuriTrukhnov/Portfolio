function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,behavior:"smooth"
    })
}

var homeNode = document.getElementById('js-home');

homeNode.addEventListener('click', ()=>{
    scrollTo(intro);
    console.log('Вы нажали на ссылку Home');
})

var servicesNode = document.getElementById('js-services');
servicesNode.addEventListener('click', ()=>{
    scrollTo(welcome);
    console.log('Вы нажали на ссылку Services');
})

var aboutUsNode = document.getElementById('js-about');

aboutUsNode.addEventListener('click', ()=>{
    scrollTo(works);
    console.log('Вы нажали на ссылку About Us');
});

var ourClientsNode = document.getElementById('js-clients')

ourClientsNode.addEventListener('click', ()=>{
    scrollTo(clients)
    console.log("Вы нажали на ссылку Our Clients");
})

var blogNode = document.getElementById('js-blog');

blogNode.addEventListener('click', ()=>{
    scrollTo(blog);
    console.log("Вы нажали на ссылку Blog");
})

var contactUsNode = document.getElementById('js-contact');

contactUsNode.addEventListener('click', ()=>{
    scrollTo(contact);
    console.log('Вы нажали на ссылку Contact Us');
})

var numberNode = document.getElementById('js-number');

numberNode.addEventListener('click', ()=>{
    window.open("index2.html","_blank","width=500px, height=500px,left=500,top=200px");
})

var btnIntroNode = document.getElementById('js-btn-intro');

btnIntroNode.addEventListener('click', ()=>{
    scrollTo(welcome);
    console.log("Стартуем");
})

var playVideoNode = document.getElementById('playVideo');

playVideoNode.addEventListener('click', ()=>{
    window.open('https://www.youtube.com/watch?v=G97kaAKMk9U');
    console.log("Видосик");
})
var videoContentNode = document.getElementById('videoContent');

videoContentNode.addEventListener('click', ()=>{
    window.open('https://www.youtube.com/watch?v=G97kaAKMk9U');
    console.log("Видосик");
})

var searchNode = document.getElementById('js-search');
searchNode.addEventListener('click', ()=>{
    window.open('https://www.google.com/');
    console.log('Найти')
})

var btnBlogNode = document.getElementById('btn-blog');
btnBlogNode.addEventListener('click', ()=>{
   let news =  window.confirm('Дальнейшее ознакомление с новостями вы можете на нашем официально сайте: https://www.youtube.com/watch?v=G97kaAKMk9U');
    if(news===true){
        window.open('https://www.youtube.com/watch?v=G97kaAKMk9U');
    }
    else{
        window.alert('Вы отменили действие');
    }
    console.log("Продолжить чтение");
})

var btnSubscribe = document.getElementById('btn-subscribe');
btnSubscribe.addEventListener('click', ()=>{
    let subscribe = window.confirm("Вы хотите подписаться на наши обновления?");
    if(subscribe===true){
        window.alert("Спасибо большое за подписку на наши новости");
    }else{
        window.alert("Отмена");
    }
    
    console.log("Подписька");
})

var twtitter = document.getElementById('js-twitter');

twtitter.addEventListener('click', ()=>{
    window.open('https://twitter.com/');
    console.log("Твиттер");
})
var facebook = document.getElementById('js-facebook');
facebook.addEventListener('click', ()=>{
    window.open("https://www.facebook.com/");
    console.log("Facebook");
})

var instagram = document.getElementById('js-instagram');

instagram.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/');
    console.log('Инстаграм');
})