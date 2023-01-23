function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop, behavior: 'smooth'
	})
}

const btnAboutUsNode = document.getElementById('js-AboutUs');

btnAboutUsNode.addEventListener('click', ()=>{
	console.log("О нас");
	scrollTo(shop__about);
})

const btnDescriptionNode = document.getElementById('js-OurStrength');

btnDescriptionNode.addEventListener('click', ()=>{
	console.log('Наши преимущества');
	scrollTo(shop__title);
})

const btnInstagramNode = document.getElementById('js-Inst');

btnInstagramNode.addEventListener('click', ()=>{
	console.log("Мы в Instagram");
	scrollTo(Social);
})

const btnContactsNode = document.getElementById('js-Contacts');

btnContactsNode.addEventListener('click', ()=>{
	console.log('Наши контакты: ');
	scrollTo(Contacts);
})