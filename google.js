


$('#button').click(function() {
  addmarker(events[0].latitude, events[0].longitude);
});




//document.write("coolevent").innerHTML = events[0].latitude;



function displayDetails() {
document.write(this.latitude);
}



$('#button2').click(function() {
  addmarker(events[1].latitude, events[1].longitude);
});
$('#button3').click(function() {
  addmarker(events[2].latitude, events[2].longitude);
});
$('#button4').click(function() {
  addmarker(events[3].latitude, events[3].longitude);
});


$("#accordion > li > span").click(function() {
    $(this).toggleClass("active").next('div').slideToggle(250)
    .closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
});





 let events = [
 	{ name: 'cool event' ,
      time: '12/1/2011 9:30',
      latitude: '40.7306' ,
      longitude: '-74.011185',
      cost: '50'


    },

    { name: 'lame event' ,
      time: '12/1/2012 9:30',
      latitude: '40.74727' ,
      longitude: '-73.9800645',
      cost: '10'


    },

    { name: 'ok event' ,
      time: '12/1/2013 9:30',
      latitude: '40.7056832469878' ,
      longitude: '-74.0017905060425',
      cost: 'free'


    }
    ];

