if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 // window.location.href = "http://p.udn.com.tw/upf/newmedia/2015_data/20150729_tv_data/udn_tv_data_m/index.html";
}

original_x_dict = {};

x_padding = 8;
y_padding = 30;

regionList = [];

//-------------------------------------------------------------------------------------------------------

$(document).ready(function(){
	$('#first-highchart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '',
            style:{
                fontWeight: 'bold',
                    fontSize: '20px'
                }  
        },
        subtitle: {
            text:  ''
        },
        xAxis: {
            categories: ['蘭嶼鄉','綠島鄉','宜蘭縣','臺東縣','南投縣','基隆市','花蓮縣','屏東縣','雲林縣','苗栗縣','新北市','臺北市','彰化縣','桃園市','高雄市','台中市','新竹縣','高雄市','澎湖縣','新竹市','台南市','嘉義縣','嘉義市','連江縣','金門縣'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '天數',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' 天'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    color: 'gray'
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true,
            enabled: false
           
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '總計',
            data: [62,56,50,48,41,41,39,39,39,38,38,38,37,36,36,36,36,36,36,34,34,34,32,26,25],
            pointWidth:10,
            color:'#5998ac'
        }]
    });

    $('#second-highchart').highcharts({

        chart: {
            type: 'heatmap',

        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            style:{
                fontWeight: 'bold',
                    fontSize: '20px',
                
                } 
        },

        xAxis: {
            categories: ['一', '二', '三', '四', '五', '六', '日'],
            opposite:true
        },

        yAxis: {
            categories: ['蘭嶼鄉','綠島鄉','連江縣','金門縣','澎湖縣','臺東縣','花蓮縣','宜蘭縣','屏東縣','高雄市','台南市','嘉義市','嘉義縣','南投縣','雲林縣','彰化縣','台中市','苗栗縣','新竹市','新竹縣','桃園市','臺北市','新北市','基隆市'],
            title: null
        },

        colorAxis: {
            
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#c95454',
                       
        },
        plotOptions: {
           
			series: {
				states: {
				    
					hover: {
					    borderWidth: 2,
					    borderColor: '#262626',
						color: 'rgba(209,113,113,0.5)',
					}
				}
			}
		},

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 75,
            symbolHeight: 500
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.yAxis.categories[this.point.y] +'</b> 星期<b>' + this.series.xAxis.categories[this.point.x] + '<br>共'+
                    this.point.value + '</b> 天 <br><b>' +  '</b>';
            }
        },

        series: [{
            name: 'day',
            borderWidth: 0,
            borderColor: '#f2cfcf',
            data: [[0,0,6],[0,1,7],[0,2,4],[0,3,2],[0,4,4],[0,5,5],[0,6,2],[0,7,4],[0,8,5],[0,9,4],[0,10,5],[0,11,3],[0,12,4],[0,13,4],[0,14,3],[0,15,3],[0,16,3],[0,17,3],[0,18,3],[0,19,3],[0,20,3],[0,21,3],[0,22,3],[0,23,3],[1,0,3],[1,1,3],[1,2,2],[1,3,3],[1,4,2],[1,5,3],[1,6,3],[1,7,4],[1,8,2],[1,9,1],[1,10,0],[1,11,1],[1,12,1],[1,13,1],[1,14,1],[1,15,1],[1,16,1],[1,17,2],[1,18,1],[1,19,1],[1,20,1],[1,21,1],[1,22,1],[1,23,1], [2,0,5],[2,1,3],[2,2,3],[2,3,2],[2,4,3],[2,5,3],[2,6,4],[2,7,4],[2,8,3],[2,9,3],[2,10,3],[2,11,2],[2,12,2],[2,13,4],[2,14,2],[2,15,3],[2,16,3],[2,17,3],[2,18,4],[2,19,4],[2,20,3],[2,21,4],[2,22,4],[2,23,4],[3,0,5],[3,1,5],[3,2,2],[3,3,2],[3,4,4],[3,5,3],[3,6,5],[3,7,6],[3,8,2],[3,9,3],[3,10,3],[3,11,2],[3,12,2],[3,13,2],[3,14,4],[3,15,1],[3,16,1],[3,17,1],[3,18,1],[3,19,1],[3,20,2],[3,21,1],[3,22,1],[3,23,2], [4,0,9],[4,1,8],[4,2,2],[4,3,2],[4,4,6],[4,5,5],[4,6,5],[4,7,7],[4,8,4],[4,9,4],[4,10,3],[4,11,5],[4,12,5],[4,13,6],[4,14,6],[4,15,5],[4,16,5],[4,17,6],[4,18,5],[4,19,5],[4,20,6],[4,21,6],[4,22,6],[4,23,6], [5,0,10],[5,1,9],[5,2,4],[5,3,5],[5,4,5],[5,5,8],[5,6,7],[5,7,7],[5,8,8],[5,9,8],[5,10,8],[5,11,6],[5,12,7],[5,13,6],[5,14,7],[5,15,7],[5,16,7],[5,17,6],[5,18,6],[5,19,6],[5,20,6],
[5,21,6],[5,22,6],[5,23,6], [6,0,8],[6,1,7],[6,2,4],[6,3,4],[6,4,5],[6,5,7],[6,6,5],[6,7,5],[6,8,5],[6,9,5],[6,10,5],[6,11,5],[6,12,5],[6,13,5],[6,14,7],[6,15,6],[6,16,6],[6,17,5],[6,18,4],[6,19,4],[6,20,4],[6,21,5],[6,22,5],[6,23,5] ],
            dataLabels: {
                enabled: true,
                color: '#3a3a3a',
                style: {
                        textShadow: false
                    }
                
            }
        }]

    });

	d3.csv("data/typhoon_data.csv", function(data){
		for (var i in data){

			if(regionList.length < data[i]['station-num']){
				regionList.push(data[i]["station-region"]);
			}

			if (!(data[i]["station-region"] in original_x_dict )){
				original_x_dict[data[i]["station-region"]] = {};
			}

			original_x_dict[data[i]["station-region"]][data[i]["date"]] = (Object.size(original_x_dict[data[i]["station-region"]]) + 1) * x_padding + 80;
		}

		console.log(regionList);

		// console.log(original_x_dict);

		var w = "100%", h = 600;

		svg = d3.select("#third-chart").append("svg").attr({"width": w, "height": h});

		tip = d3.tip().offset([-10, 0]).attr('class', 'd3-tip')
				.html(function(d){
					return "<div class = 'tip-top'> <div class = 'fl-left tip-typhoonname-block'><div class = 'tip-titles'>颱風名稱</div><div class = 'tip-typhoon-name'>" + d["typhoon"] +"</div></div> <div class = 'fl-left tip-date-block'> <div class = 'tip-titles'>日期</div><div class = 'tip-date'>" + d["date"] +"</div> </div> </div> <div class = 'tip-mid top-border'><div class = 'fl-left tip-monent-wind-block'><div class = 'tip-titles'>瞬間最大風力</div><div class = 'tip-moment-wind'>" + d["wind-moment-strength"] +"</div></div> <div class = 'fl-left tip-avg-wind-block'> <div class = 'tip-titles'>平均最大風力</div><div class = 'tip-avg-wind'>" + d["wind-avg-strength"] +"</div> </div> </div> <div class = 'tip-bot top-border'><div class = 'tip-titles'>日雨量</div><div class = 'tip-rain'>" + d["daily-rain"] + "</div></div>"
				});

		svg.call(tip);

		svg.selectAll('rect').data(data).enter().append('rect')
		.attr({
			"x": function(d){
				return original_x_dict[d['station-region']][d['date']];
			},
			"y": function(d){
				return d['station-num'] * y_padding;
			},
			"width": 6,
			"height": 15,
			"fill": function(d){
				return getRectColor(d["type"]);
			},
			"stroke": "white",
			"stroke-width": "1"
		})
		.on("mouseover", function(d){
			$(this).css("stroke", "#7c7c7c");
			$(this).css("stroke-width", "1");
			tip.show(d);
		})
		.on("mouseout", function(d){
			$(this).css({"stroke": "white", "stroke-width": "1"});
			tip.hide(d);
		});

		for (var j in regionList){

			svg.append("text").text(regionList[j])
				.attr({
					'class': "region-text",
					'x': 20,
					'y': (regionList.indexOf(regionList[j])+1) * y_padding + 13,
					'fill': "#7c7c7c"
				});
		}

	});
});


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function getRectColor(type){
	switch(type){
		case '1':
			return "#c65454";
		case '2':
			return "#eacd71";
		case '3':
			return "#97d38c";
		case '4':
			return "#eaeaea";
	}
}
