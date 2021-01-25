var txt="";
for (i=0;i<5;i++){
	txt += "★";
};
document.write(txt);

var txt="";
for (i=0;i<5;i++){
for(j=0;j<5;i++){
	if((i+J)%2 == 0){
		txt += "☆";
		}else{
			txt += "★";
			}
		};
	txt += "<br>";
};
document.write(txt);


	document.querySelector('#purchase').addEventListener('click',function(){
	let result=document.querySelector('#result');
	result.textContent="";
	let price=0;

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
