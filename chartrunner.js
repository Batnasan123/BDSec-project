$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#menu a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){   
        window.location.hash = hash;
      });
    }
  });
});

/** Акив **/
const labels = [

	'2019',
	'2020',
	'2021',
];

const data = {
	labels: labels,
	datasets: [{
		barThickness: 40,
        maxBarThickness: 30,
		backgroundColor: [
	      'rgb(0, 76, 152)',
	      'rgb(0, 76, 152)',
	      'rgb(0, 120, 239)'
	    ],
	    colors: '#fff',
	    borderRadius: 5,
		data: [10194, 12111, 13463]
	}],

};

const config1 = {
	type: 'bar',
	data: data,	
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ АКТИВ',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const chart1 = new Chart(
    document.getElementById('chart1'),
    config1
);

/** Харилцах, хадгалах**/

const labels2 = [
	'2019',
	'2020',
	'2021',
];

const data2 = {
	labels: labels2,
	datasets: [{
		label: 'НИЙТ ӨӨРИЙН ХӨРӨНГӨ ',
		barThickness: 60,
        maxBarThickness: 60,
		backgroundColor: [
	      'rgb(0, 76, 152)',
	      'rgb(0, 76, 152)',
	      'rgb(0, 120, 239)'
	    ],		
	    borderRadius: 5,
		data: [1193,1229,1285]
	}]
};
const config2 = {
	type: 'bar',
	data: data2,
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ ӨӨРИЙН ХӨРӨНГӨ ',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const chart2 = new Chart(
    document.getElementById('chart2'),
    config2
);

/** Цэвэр ашиг, алдагдал **/

const labels3 = [
	'2019',
	'2020',
	'2021',
];

const data3 = {
	labels: labels2,
	datasets: [{
		label: 'НИЙТ ЦЭВЭР АШИГ',
		barThickness: 60,
        maxBarThickness: 60,
		backgroundColor: [
	      'rgb(0, 68, 135)',
	      'rgb(0, 68, 135)',
	      'rgb(0, 120, 239)'
	    ],
	    borderRadius: 5,
		data: [192,161,292]				
	}]
};
const config3 = {
	type: 'bar',
	data: data3,
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ ЦЭВЭР АШИГ',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const chart3 = new Chart(
    document.getElementById('chart3'),
    config3
);

/** Нийт зээл **/

const labels4 = [
	'2019',
	'2020',
	'2021',
];

const data4 = {
	labels: labels4,
	datasets: [{
		label: 'НИЙТ ХАРИЛЦАХ ХАДГАЛАМЖ',				
		barThickness: 60,
        maxBarThickness: 60,
		backgroundColor: [
	      'rgb(0, 68, 135)',
	      'rgb(0, 68, 135)',
	      'rgb(0, 120, 239)'
	    ],
	    borderRadius: 5,
		data: [8833,10755,12060]				
	}]
};

const config4 = {
	type: 'bar',
	data: data4,
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ ЗЭЭЛ',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const myChart4 = new Chart(
    document.getElementById('chart4'),
    config4
);

const labels5 = [
	'2019',
	'2020',
	'2021',
];

const data5 = {
	labels: labels5,
	datasets: [{
		label: 'НИЙТ ЗЭЭЛ',
		barThickness: 60,
        maxBarThickness: 60,
		backgroundColor: [
	      'rgb(0, 68, 135)',
	      'rgb(0, 68, 135)',
	      'rgb(0, 120, 239)'
	    ],
	    borderRadius: 5,
		data: [4941,5290,7018]				
	}]
};
const config5 = {
	type: 'bar',
	data: data5,
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ ЗЭЭЛ',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const chart5 = new Chart(
    document.getElementById('chart5'),
    config5
);

/** Нийт зээл **/

const labels6 = [
	'2019',
	'2020',
	'2021',
];

const data6 = {
	labels: labels6,
	datasets: [{
		label: 'НИЙТ ХҮҮГИЙН ОРЛОГО',				
		barThickness: 60,
        maxBarThickness: 60,
		backgroundColor: [
	      'rgb(0, 68, 135)',
	      'rgb(0, 68, 135)',
	      'rgb(0, 120, 239)'
	    ],
	    borderRadius: 5,
		data: [1087,1070,1140]				
	}]
};

const config6 = {
	type: 'bar',
	data: data6,
	options: {
		plugins: {
            legend: false,
            title: {
                display: true,
                text: 'НИЙТ ХҮҮГИЙН ОРЛОГО',
                color: 'black',
                font: {
                    size: 18
                }
            }
        },
	    scales: {
		    y: {
		      ticks: { color: 'black'}
		    },
		    x: {
		      ticks: { color: 'black'}
		    }
		}
	}
};

const myChart6 = new Chart(
    document.getElementById('chart6'),
    config6
);
// /** Татварын төлөлт - нийт зээл**/

// const labels5 = [
// 	'2019.12.31',
// 	'2020.12.31',
// 	'2021.12.31',
// ];

// const data5 = {
// 	labels: labels5,
// 	datasets: [{
// 		label: 'НИЙТ ЗЭЭЛ',
// 		barThickness: 60,
//         maxBarThickness: 60,
// 		backgroundColor: [
// 	      'rgb(0, 76, 152)',
// 	      'rgb(0, 76, 152)',
// 	      'rgb(0, 120, 240)'
// 	    ],
// 	    borderRadius: 5,
// 		data: [5000,10000,15000,20000,25000]

// 	}]
// };

// const config5 = {
// 	type: 'bar',
// 	data: data5,
// 	options: {
// 	    plugins: {
// 	        legend: {
// 	            labels: {
// 	                font: {
// 	                    style: 'bold',
// 	                    weight: '600',
// 	                    size: '20px'
// 	                }
// 	            }
// 	        }
// 	    }
// 	}
// };

// const myChart5 = new Chart(
//     document.getElementById('chart5'),
//     config5
// );

/** 2019- 2021 онд төлсөн татвар **/
// const labels6 = [
// 	'Хувь хүний орлогын албан татвар',
// 	'Аж ахуй нэгжийн орлогын албан татвар',
// 	'Үл хөдлөх хөнгийн татвар',
// 	'Бусад',
// ];

// const data6 = {
// 	labels: labels6,
// 	datasets: [{
// 		label: 'АКТИВ',
// 		barThickness: 60,
//         maxBarThickness: 60,
// 		backgroundColor: [
// 	      'rgb(50, 197, 251)',
// 	      'rgb(54, 179, 227)',
// 	      'rgb(0, 76, 152)',
// 	      'rgb(0, 120, 240)'
// 	    ],
// 	    hoverOffset: 8,
// 		data: [5.3,3.2,42.8,48.7]
// 	}],

// };

// const config6 = {
// 	type: 'doughnut',
// 	data: data6,
// 	options: {}
// };

// const myChart6 = new Chart(
//     document.getElementById('chart6'),
//     config6
// );

/** Хөрөнгийн хэмжээ, сая.төгрөг **/
const labels7 = [
	'2016.06.30',
	'2016.12.31',
	'2017.06.30',
	'2017.12.31',
	'2018.06.30',
	'2018.12.31',
	'2019.06.30',
	'2019.12.31',
	'2020.06.30',
	'2020.12.31',
	'2021.06.30',
	'2021.12.31',
	'2022.06.30'
];

const data7 = {
	labels: labels7,
	datasets: [
	{

        label: "Өөрийн хөрөнгийн өгөөж /ROE/",
        type: "line",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        fill: false,
        tension: 0.5,
        data: [2.34,5.87,4.58,6.43,0.35,0.77,1.76,8.41,7.74,12.08,8.18,13.06,15.60],
        yAxisID: 'percent'
    },
	{
      label: 'Өөрийн хөрөнгө',
      type: "bar",
      data: [181000,188000,200000,206000,207000,212000,215000,270000,300000,350000,410000,460000,475000],
      backgroundColor: 'rgb(0, 120, 239)',
      borderRadius: 3
    },
    {
      label: 'Өмнөх үеийн ашиг /алдагдал/',
      type: "bar",
      data: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
      backgroundColor: 'rgb(98, 176, 254)',
      borderRadius: 3
    }]
};

const config7 = {
	type: 'bar',
	data: data7,
	options: {
		plugins: {			
            legend: false
        },
		scales: {
		    y: {
		    	position: 'left',
		    	ticks: { color: '#4f4f4f'}
		    },
		    percent:{
		    	position: 'right',
		    	ticks: { color: '#4f4f4f'}
		    },
		    x: {
		      ticks: { color: '#4f4f4f'}
		    }
		}
    }
};

const myChart7 = new Chart(
    document.getElementById('chart7'),
    config7
);