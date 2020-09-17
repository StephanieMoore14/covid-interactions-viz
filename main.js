Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Carbon emissions around the world (2014)'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
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
        		name: 'Europe',
            value: 76.1
        }]},
        {
        
        data: [{
            name: 'Germany',
            value: 567.1
        }]},
        {
        
        data: [{
            name: 'Croatia',
            value: 767.1
        }]},
        {
        data: [{
        		name: 'Spain',
            value: 100.1
        }]},
        {
        
        data: [{
            name: 'Denmark',
            value: 200.1
        }]},
        {
        
        data: [{
            name: 'Portugal',
            value: 444.1
        }]},
        {
        
        data: [{
            name: 'USA',
            value: 1000.1
        }]},
        {
        data: [{
            name: 'India',
            value: 20.1
        }]},
        {
        
        data: [{
            name: 'China',
            value: 788.1
        }]},
        {
        
        data: [{
            name: 'Japan',
            value: 150.1
        }]}
        ]

});
