// Couple
$(function() {
  $('#couple').highcharts({
    chart: {
        type: 'bar',
        backgroundColor : null
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Living together couple', 'Living apart couple', 'Not in a couple but has been', 'Has never been in a couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Not at all satisfied',
      data: [5, 3, 19, 16]

    }, {
      name: 'Little satisfied',
      data: [16, 11, 29, 29]
    }]
  });
});

// Highcharts1
(function(){
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non religious people', 'non attending catholic', 'other religious people','attending catholic'], // categories
                ["Never sucked or licked his/her partner's genitals", 11, 12, 21,23], // first series
                ["Never sodomized his/her partner", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },

    });
});
})();

// Nombre
(function(){
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : null
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Between 2 and 3','Between 4 and 5','Between 6 and 10','More than 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Not at all satisfied',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Little satisfied',
            data: [18,18,21,20,20]
        }]
    });
});
})();

//Polsodo
$(function () {
    $('#polsodo').highcharts({ 
        chart : {
            backgroundColor : null
        },
        colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Have had sex with more than two people at the same time',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Have had an homosexual sex intercourse',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Has performed anal sex',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});


// Treemap
$(function () {
    $('#treemap').highcharts({
    		chart : {
        	   type : 'treemap',
                backgroundColor : null
            },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Graduated from college',
            }, {
                id: 'R',
                name: 'Did not graduated from college',
            },{
            		id: 'DH',
                name: 'Men',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Women',
                parent : 'D'
            },{
                name: 'Often : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Never"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Often : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Never"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});

// vieillir
$(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area',
            backgroundColor : null
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            title : {
                text: "Age category"
            },
            categories: ['Less than 35','Between 35 and 50','More than 50']
        },
        yAxis: {
            title: {
                text: "Percentage among age category"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'At least twice a week',
            data: [33,31,21]
        },{
            name: 'About once a week',
            data: [46,46,46],
            visible : false
        },{
            name: 'Never',
            data: [21,23,33]
        }]
    });
});

// cathos
(function(){
    // test 

var imagesCathos = document.getElementById('imagesCathos'),     // Récupération des div contenant les iamges
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),     // Récupération de la div contenant les chiffres
    // Remplissage variables de texte contenant les chiffres
    texteDepart = "How many catholic people have already had an homosexual intercourse ?",
 
    cathoOui = "<img src='Images/cathoOui.png' width='15p' height='30'/>" ,
    cathoNon = "<img src='Images/cathoNon.png' width='15p' height='30'/>",
    atheeOui = "<img src='Images/atheeOui.png' width='15p' height='30'/>" ,
    atheeNon = "<img src='Images/atheeNon.png' width='15p' height='30'/>";
    
var petitBloc , autreReligion ; // Variables utilisées dans la boucle initialisées ici

// On va faire la même chose pour les deux lignes de bonhommes, donc on fait une fonction
var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
    // Les deux boucles for ajoutent en ligne les images en utilisant des span
    for (i=0;i<nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','oui') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageOui ;
    }

    for (i=0;i<20-nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','non') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageNon ;
    }


chiffre.innerHTML = texteDepart ; // remplissage par le texte de départ à l'ouverture de la page

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;
})();