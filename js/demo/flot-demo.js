$(function() {
    var barOptions = {
        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 0.0
                    }, {
                        opacity: 0.0
                    }]
                }
            }
        },
		xaxis : { mode: 'time', timeformat: '%d %b', min: 1468578976507 , max: 1469270176507 },
        colors: ["#1ab394"],
        grid: {
            color: "#999999",
            hoverable: true,
            clickable: true,
            tickColor: "#D4D4D4",
            borderWidth:0
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = [
		{label: 'Прибыль', data:[[1468627200000,1],[1468713600000,2],[1468800000000,1],[1468886400000,2],[1468972800000,0],[1469059200000,0],[1469145600000,0]]}];
	
    $.plot($("#flot-line-chart"), barData ,  barOptions);

});