if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 // window.location.href = "http://p.udn.com.tw/upf/newmedia/2015_data/20150729_tv_data/udn_tv_data_m/index.html";
}

var selected_pic = "p1.jpg";
var FBshare_pic_url = "http://udnmoon.herokuapp.com/img/";


//-------------------------------------------------------------------------------------------------------

$(document).ready(function(){
	$("#stop-btn").click(function(){
		var randomInt = getRandomInt(1,15);
		$(".main-animation img").attr({"src": "img/p" + randomInt + ".jpg", "width": "500px"});
		selected_pic = "p" + randomInt + ".jpg";
	});

	$("#replay-btn").click(function(){
		$(".main-animation img").attr("src", "img/moon_00.gif");
	});

	$("#share-btn").click(function(){
		FB.ui({
		  method: 'feed',
		  name: '中秋節來囉！',
		  caption: '聯合報系新媒體部製作',
		  description: "測試測試",
		  link: 'http://udnmoon.herokuapp.com',
		  picture: FBshare_pic_url + selected_pic,
		}, function(response){
			if(response && response.post_id){
				alert('你的結果已經成功分享到塗鴉牆！');
			}else{
				// alert('Post was not published.');
			}
		});
	});
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
