let element=document.getElementById("star");
let star_html='<span>★</span>'
for(let i=0;i<2;i++){
	element.insertAdjacentHTML("afterbegin",star_html);
	element.insertAdjacentHTML("beforeend",star_html);
}

o002=document.getElementById('002');
for(let i=0;i<5;i++){
	let s='';
for(let j=0;j<5;j++){
	s+=(i%2+j)%2==0?'☆':'★';
}
console.log(s);
o002.innerText+=s+'\n';
}

	document.querySelector('#purchase').addEventListener('click',function(){
	var result=document.querySelector('#result');
	result.textContent="";
	var price=0;

	amount=document.querySelector('#amount').value;
	product=document.querySelector('#product').value;

	if(product=='コーヒー'){
		price=150;
	}
	if(product=='お茶'){
		price=130;
	}
	if(product=='オレンジジュース'){
		price=160;
	}
	if(product=='水'){
		price=100;
	}

	if(amount>=price){
		result.innerHTML=product+'を購入しました<br>おつりは'+(amount-price)+'円です'
	}else{
		result.textContent='お金が足りません';
	}
});
