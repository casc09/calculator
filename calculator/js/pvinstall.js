/**
 * Created by Administrator on 2017/4/20.
 */
/**
 * 使用Highcharts框架绘图
 * @author zhengwu
 */

Highcharts.theme = {

    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 250, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(255, 255, 255)']
            ]
        },
        borderWidth: 2,
        plotBackgroundColor: 'rgba(255, 255, 255, .9)',
        plotShadow: false,
        plotBorderWidth: 1

    },
    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    xAxis: {
        gridLineWidth: 1,
        lineColor: '#000',
        tickColor: '#000',
        labels: {
            style: {
                color: '#000',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        },
        title: {
            style: {
                color: '#333',
                fontWeight: 'bold',
                fontSize: '12px',
                fontFamily: 'Trebuchet MS, Verdana, sans-serif'

            }
        }
    },
    yAxis: {
        minorTickInterval: 'auto',
        lineColor: '#000',
        lineWidth: 1,
        tickWidth: 1,
        tickColor: '#000',
        labels: {
            style: {
                color: '#000',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        },
        title: {
            style: {
                color: '#333',
                fontWeight: 'bold',
                fontSize: '12px',
                fontFamily: 'Trebuchet MS, Verdana, sans-serif'
            }
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'

        },
        itemHoverStyle: {
            color: '#039'
        },
        itemHiddenStyle: {
            color: 'gray'
        }
    },
    labels: {
        style: {
            color: '#99b'
        }
    },
    //版权信息
    credits: {
        // enabled:true,                    // 默认值，如果想去掉版权信息，设置为false即可
        text: 'www.comtecrenew.cn',             // 显示的文字
        href: 'www.comtecrenew.cn',      // 链接地址

    }
};
// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);


function createChart(jsonObject){

    var chart;
    //var jsonObject = eval(" (" + data + ") ");
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartDiv',
            type: 'column'
        },
        title: {
            text:jsonObject.title,
            x: -20 //center
        },
        subtitle: {
            text: 'COMTEC',
            x: -20
        },
        xAxis: {

            labels: {rotation: -50,	align: 'right',	style: { font: 'normal 12px Verdana, sans-serif'}

            },
            categories:jsonObject.categories
        },
        yAxis: {
            title: {
                text: '安装量MW'
            },

            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            crosshairs: true,
            //shared: true,
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y +'MW';
            }

        },
        series: jsonObject.series
    });
}

function createStack(jsonObject,divId){
    if(typeof(jsonObject)=="undefined")
        return;
    var chart;
//var jsonObject = eval(" (" + jsonObject + ") ");
    chart = new Highcharts.Chart({
        chart: {
            renderTo: divId,
            type: 'column'
        },
        title: {
            text:"还款现金流分配",
            //x: -20 //center
        },
        subtitle: {
            text: 'COMTEC',
            //x: -20
        },
        xAxis: {

            labels: {rotation: -50,	align: 'right',	style: { font: 'normal 12px Verdana, sans-serif'}

            },
            categories:jsonObject.categories
        },
        yAxis: {
            title: {
                text: '万元'
            },

            stackLabels: {
                enabled: true,
                formatter:function(){return this.total.toFixed(2);},
                rotation: -50,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'red'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',

                dataLabels: {
                    rotation: -90,
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        tooltip: {
            crosshairs: true,

            //shared: true,
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y +'万元';
            }

        },
        series:jsonObject.series
    });
}

function createChart2(maxY,unit,title,xSeries,seriesOptions){

    //var jsonObject = eval(" (" + data + ") ");
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartDiv2'

        },
        title: {
            text:title,
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {

            labels: {rotation: -50,	align: 'right',	style: { font: 'normal 12px Verdana, sans-serif'}

            },
            categories:xSeries
        },
        yAxis:[{
            title: {text: '万元',style: {color: '#89A54E'}},

            offset:20,
            //min:100,
            //max:900,
        },
            {
                title: {text: '万度',style: {color: '#4572A7'}},

                lineColor :'#990000',
                offset:20,
                min:0,
                //max:600,
                opposite: true
            }
        ],
        plotOptions: {
            column: {
                stacking: 'normal',

                dataLabels: {
                    rotation: -90,
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: seriesOptions
    });
}