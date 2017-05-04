$(function() {

//	function getChart(id){
//		 Highcharts.chart(id, {
//      chart: {
//          type: 'column',
//          zoomType: 'x',//x轴是否允许拉伸
//          plotBackgroundImage: 'img/center_bj_can.png' //加入背景图片
//      },
//       legend:false,//是否允许有图例出现
//       credits:{
//       enabled: false,//隐藏highchart网址
//       },
//       exporting: {// exporting 是否隐藏print标签
//          enabled:false
//          },
//		labels:{//在
//          items:[{  
//              html:'<span>4905</span>',  
//              style:{left:'240px',top:'30px',color:'#ffffff',fontSize:'30px'}  
//          }, {  
//              html:'步数',  
//              style:{left:'30px',top:'30px',color:'#ffffff',fontSize:'30px'}  
//          }]  
//      },  
//      title:false,
//      subtitle: {
//              text: document.ontouchstart === undefined ?
//              '' : ''
//           },
//      xAxis: {
//      	lineWidth:0,//x轴横坐标的横线的显示度
//      	tickWidth:0, //x轴横坐标下面的刻度的显示度
//      	minRange:1,
//          categories: ['2月1', '2', '3', '4', '5','6','7',],
//          labels: { y: -12, //横坐标向上或者向下移动；
//                      style: {
//                          color: '#ffffff',
//                          fontSize:'2vh'  
//                      }
//                  },
//      },
//      yAxis:{
//      	gridLineColor: 'white',
//          allowDecimals: true,
//          min: 0,
//          max: 5000,
//          title:false,
//          gridLineWidth:0,
//          labels:false,
//          tickPositions: [0,5000,10000,15000,20000,25000,30000,35000,40000,45000]
//      },
//      series: [ 
//      {
//          type: 'area',//折线的类型
//          color:'#48bea8',
//          lineColor:'#fff',
//          lineWidth: 1,
//          name: '步数:',
//          series:false,
//          data: [8500, 12352, 24111, 8000, 14000,15000,15241],
//          marker:{
//              lineWidth: 1,
//              fillColor: '#fff'
//              }
//          }
//      ]
//  });
//
//		
//	}


//d4



////d3
//getChart('d3');
//
////d2
//getChart('d2');
//
////d1
//getChart('d1');

});


//getChart('d0');


function getChart(o){
    Highcharts.chart(o.id,{

        navigation:{menuItemHoverStyle:{'color':'red'}},

        chart: {
            alignTicks:false,
            type: 'column',
            zoomType: 'none',//x轴是否允许拉伸
            height:o.height + 'px',
            width:o.width,
            margin:[0,0,0,0],

            // spacingRight:20,
            //spacingLeft:90,
            //plotBackgroundImage: 'img/bj.png' //加入背景图片
            backgroundColor: 'rgba(0,0,0,0)'
        },
        legend:false,//是否允许有图例出现
        credits:{
            enabled: false,//隐藏highchart网址
        },
        exporting: {// exporting 是否隐藏print标签
            enabled:false
        },
        labels:{//在这里可以进行图标样式设置
            items:[{
                html:'<span></span>',
                style:{left:'240px',top:'30px',color:'#ffffff',fontSize:'30px'}
            }, {
                html:'',
                style:{left:'30px',top:'30px',color:'#ffffff',fontSize:'15px'}
            }]
        },
        title:{
            text: '',
            align:'center',
            y:7,
            style:{'color':'#5cd9d1','font-size':'13px','font-family':'arial',}



        },
        subtitle: { //副标题
            text: document.ontouchstart === undefined ?
                '' : ''
        },
        xAxis: {
            lineWidth:0,//x轴横坐标的横线的显示度
            tickWidth:0, //x轴横坐标下面的刻度的显示度
            minRange:6, //控制x方向刻度个数

            categories:o.days,//['2月1', '2', '3', '4', '5','6','7'],
            labels: { y: -6, //横坐标向上或者向下移动；
                style: {
                    color: '#5cd9d1', //x轴刻度值颜色
                    fontSize:'11px' // 字体大小
                }
            }


        },
        yAxis:{
            gridLineColor: 'white',
            allowDecimals: true,    //是否允许小数
            min: 0,
            max: 11.5,
            title:false,
            gridLineWidth:0,
            labels:false,
            tickPositions: [-1.4,-1,-0.5,0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.4]
        },

        plotOptions: { //情节选项
            series: {
                animation: {
                    duration: 1300  //动画时间

                },
                fillOpacity: 0.2,  //默认是0.75
                //className: 'main-color',
                // negativeColor: false,
//          threshold: 2
            },
//      spline:{
//      	events:{//监听点的鼠标事件
//                    click: function() {
//                    	alert(11)
//                    }
//                },
//
//      }




        },
        //折线部分
        series: [   //系列
            {
                type: 'area',
                connectNulls:false,
                color:'#8cfff6',
                dashStyle:'solid', //折线的类型
                lineColor:'#8cfff6',  //折线的颜色
                lineWidth: 1,
                name: ' ',
                negativeColor: '#8cfff6',
                trackByArea:true,
                series:false,
                data:o.moods,//[0,1,2,3,5,7,9],
                zones:[{
                    color:'#8cfff6',

                    value:5,
                    dashStyle:'solid' //dot
                }],



                states:{
                    hover:{
                        enabled:true,//鼠标放上去线的状态控制
                        lineWidth:1
                    }
                },

                marker:{
                    lineWidth: 0,
                    radius:3,
                    fillColor: '#8cfff6', //标记点的颜色
                    states:{
                        hover:{
                            fillColor:'#8cfff6',
                            lineWidth:0
                        }
                    },



                }
            }
        ],

        tooltip: {//鼠标移到图形上时显示的提示框
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            shadow: false,
            backgroundColor: 'rgba(0,0,0,0)',
            enabled: true,
            animation: true,
            style: {                      // 文字内容相关样式
                color: "#8cfff6",
                fontSize: "14px",
                fontWeight: "blod"
             }

            ,formatter: function() {
                $(".highcharts-xaxis-labels  text ").css("fill","#5cd9d1");
                var index = this.point.index;
                $(".highcharts-xaxis-labels  text ").each(function (i) {
                     $(".highcharts-xaxis-labels  text ").each(function (j) {
                        if($(".highcharts-xaxis-labels  text ").length-1==j){
                            $(this).css("fill","#8cfff6")
                        }
                    });
                    if(index==i){
                        $(this).css("fill","#8cfff6")
                    }
                });

                return '<b>'+this.y+'</b>'
            }


        }


    });


}