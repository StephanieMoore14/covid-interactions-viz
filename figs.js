document.addEventListener('DOMContentLoaded', function () {
    var mychart1 = Highcharts.chart('container1', {
        chart: {
            type: 'column',
            height: '40%',
            width: 1000,
            offset: '33%'
        },
        title: {
            text: 'Top 5 Industries'
        },
        subtitle: {
            text: 'Source: <a href="https://www.linkedin.com/" target="_blank">LinkedIn.com</a>'
        },
        accessibility: {
            announceNewData: {
            enabled: true
            }
        },
        colors: ['#ff9900'],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text:'Industries'
            },
            type: 'category'
        },
        yAxis: {
            title: {
            text: 'Count'
            }
        },
        legend: {
            enabled: false
            // verticalAlign:'top'
        },
        plotOptions: {
            series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: '{point.y:.2f}'
            }
            }
        },
        series: [
            {
            name: "Industries",
            colorByPoint: true,
            data: [
                {
                name: 'Information Technology & Services',
                y: 3556,
                },
                {
                name: 'Financial Services',
                y: 3031,
                },
                {
                name: 'Computer Software',
                y: 2338,
                },
                {
                name: 'Internet',
                y: 1886,
                },
                {
                name: 'Higher Education',
                y: 1877,
                }
            ]
            }
        ],
        // 
        })
    });

var chart1; // globally available
document.addEventListener('DOMContentLoaded', function() {
    chart1 = Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        series: mychart1.series // predefined JavaScript array
    
    });  
});

document.addEventListener('DOMContentLoaded', function () {
    var mychart2 = Highcharts.chart('container2', {
        chart: {
            type: 'column',
            height: '40%',
            width: 1000,
            scales: {
                xAxes: [{
                  maxBarThickness: 100,
                }],
              }
              
        },
        title: {
            text: 'Top 5 Cities For Data Scientists'
        },
        subtitle: {
            text: 'Source: <a href="https://www.LinkedIn.com" target="_blank">LinkedIn.com</a>'
        },
        accessibility: {
            announceNewData: {
            enabled: true
            }
        },
        colors: ['#ffcc00'],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text:'Cities'
            },
            type: 'category'
        },
        yAxis: {
            title: {
            text: 'Count'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: '{point.y:.2f}'
            }
            }
        },
        series: [
            {
            name: "Industries",
            colorByPoint: true,
            data: [
                {
                name: "San Francisco",
                y: 3519,
                },
                {
                name: "New York City",
                y: 2477,
                },
                {
                name: "Boston",
                y: 1096,
                },
                {
                name: "Austin",
                y: 787,
                },
                {
                name: "Atlanta",
                y: 700,
                }
            ]
            }
        ],
        });
    });


var chart2; // globally available
    document.addEventListener('DOMContentLoaded', function() {
        chart2 = Highcharts.stockChart('container', {
            rangeSelector: {
                selected: 1
            },
            series: mychart2.series 
        
       });  
    });
    


document.addEventListener('DOMContentLoaded', function () {
    var mychart3 = Highcharts.chart('container3', {
        chart: {
            type: 'packedbubble',
            height: '60%',
            width: 1000,
        },
        title: {
            text: 'Top 10 Data Science Industries'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}</sub>'
        },
        legend: {
            enabled: false
        },
        exporting: { enabled: false }, // take away download button
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            data: [{
                    name: 'Data Scientist',
                value: 9855
            }]},
            {
            
            data: [{
                name: 'Software Engineer',
                value: 526
            }]},
            {
            
            data: [{
                name: 'Data Engineer',
                value: 296
            }]},
            {
            data: [{
                    name: 'Machine Learning Engineer',
                value: 184
            }]},
            {
            
            data: [{
                name: 'Engineer',
                value: 115
            }]},
            {
            
            data: [{
                name: 'Analyst',
                value: 101
            }]},
            {
            
            data: [{
                name: 'Business Analyst',
                value: 98
            }]},
            {
            data: [{
                name: 'Business Intelligence Analyst',
                value: 79
            }]},
            {
            
            data: [{
                name: 'Software Developer',
                value: 68
            }]}
            ]
    });
});


var chart3; // globally available
    document.addEventListener('DOMContentLoaded', function() {
        chart3 = Highcharts.stockChart('container', {
            rangeSelector: {
                selected: 1
            },
            series: mychart3.series // predefined JavaScript array
        
       });  
    });