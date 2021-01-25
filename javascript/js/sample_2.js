//読み込み時に文字の色を変える
$(function(){
	$("#change_color").css("color","blue");
});

//クリックされたときに文字の色を変える
$(function(){
	$("#change_button").click(function(){
		$("#click_change").css("color","red");
	});
});

//表示/非表示の切り替え
$(function(){
	$("#expand").click(function(){
		$(this).next().toggleClass("hidden")
	});
});

//ボタンホバー時にアニメーションを設定
$(function(){
	$("#change_button").hover(function(){
		$(this).animate({
			"height":"27px",
			"width":"86px"
		},200);
	},
	function(){
		$(this).animate({
			"height":"21px",
			"width":"66.41px"
		},200);
	});
});