if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 // window.location.href = "http://p.udn.com.tw/upf/newmedia/2015_data/20150729_tv_data/udn_tv_data_m/index.html";
}

var selected_pic_num = 15;
var FBshare_pic_url = "http://udnmoon.herokuapp.com/img/";
var animation_status = "animate";


//-------------------------------------------------------------------------------------------------------

$(document).ready(function(){
	/*$("#stop-btn").click(function(){
		var randomInt = getRandomInt(1,15);
		$(".main-animation img").attr({"src": "img/p" + randomInt + ".jpg", "width": "500px"});
		selected_pic_num = randomInt;
	});

	$("#replay-btn").click(function(){
		$(".main-animation img").attr("src", "img/moon_00.gif");
	});*/

	/*$("#share-btn").click(function(){
		FB.ui({
		  method: 'feed',
		  name: '中秋節來囉！',
		  caption: '聯合報系新媒體部製作',
		  description: "測試測試",
		  link: 'http://udnmoon.herokuapp.com',
		  picture: FBshare_pic_url + "p" + selected_pic_num + "_fb.jpg",
		}, function(response){
			if(response && response.post_id){
				alert('你的結果已經成功分享到塗鴉牆！');
			}else{
				// alert('Post was not published.');
			}
		});
	});*/

	$("#stop-replay-btn").mousedown(function(){

		if(animation_status == "animate"){
			$("#stop-replay-btn img").attr("src", "img/stop_btn2.png");
		}
		else{
			$("#stop-replay-btn img").attr("src", "img/replay_btn2.png");
		}

	});

	$("#stop-replay-btn").mouseup(function(){

		if(animation_status == "animate"){
			$("#stop-replay-btn img").attr("src", "img/replay_btn1.png");
			var randomInt = getRandomInt(1,15);
			// $(".main-animation img").attr({"src": "img/p" + randomInt + ".jpg", "width": "500px"});
			$(".main-img img").attr({"src": "img/p" + randomInt + ".jpg", "width": "500px"});
			$(".main-img").css("display", "table");
			$(".main-animation").css("display", "none");

			selected_pic_num = randomInt;
			animation_status = "stopped";
		}
		else{
			$("#stop-replay-btn img").attr("src", "img/stop_btn1.png");
			animation_status = "animate";
			// $(".main-animation img").attr("src", "img/moon_00.gif");
			$(".main-img").css("display", "none");
			$(".main-animation").css("display", "table");
		}
		
	});

	$("#share-btn").mousedown(function(){
		$("#share-btn img").attr("src", "img/share_btn2.png");
	});

	$("#share-btn").mouseup(function(){
		$("#share-btn img").attr("src", "img/share_btn1.png");

		FB.ui({
		  method: 'feed',
		  name: '中秋節來囉！',
		  caption: '聯合報系新媒體部製作',
		  description: "測試測試",
		  link: 'http://udnmoon.herokuapp.com',
		  picture: FBshare_pic_url + "p" + selected_pic_num + "_fb.jpg",
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
