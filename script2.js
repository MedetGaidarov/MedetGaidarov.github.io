function change(element){
	var a = element.innerHTML;
	switch(a){
		case "Wedding gowns":
		document.getElementById("img").src="https://www.daughtersofsimone.com/wp-content/uploads/2012/08/DSC06478.jpg";
		document.getElementById("text1").innerHTML="Wedding gowns";
		break;
		case "Evening dresses":
		document.getElementById("img").src="https://p.favim.com/orig/2018/11/09/princess-aesthetic-cute-Favim.com-6558541.jpg";
		document.getElementById("text1").innerHTML="Evening dresses";
		break;
		case "Accessories":
	    document.getElementById("img").src="https://s3.weddbook.com/t4/2/2/8/2281723/wreath-ivory-flower-head-piece-bridal-crown-whimsical-headband-wedding-accessories-diana.jpg";
		document.getElementById("text1").innerHTML="Accessories";
		break;
		case "About us":
	    document.getElementById("img").src="https://media-api.xogrp.com/images/dc8f439e-ac06-49ce-b8fa-9148130829ef~rs_515.h";
	    document.getElementById("text1").innerHTML="About us";
		break;
		}
		$("#img").animate({left: '+=100px', opacity: '0'},  "slow");
		$("#img").animate({left: '-=100px', opacity: '2'},  "slow");
	}
function popur(){
	alert("Thanks for submiting!")
}	

function big(element){
	element.style.fontSize = "35px";
}
function small(element){
element.style.fontSize="25px";
}

function load(){
	$(".text").animate({opacity: '1'}, "slow");
}
ymaps.ready(init);

      function init() {
         var myMap = new ymaps.Map("map", {
                  center: [47.128291, 51.957723],
                  zoom: 14
              }, {
                  searchControlProvider: 'yandex#search'
              });
              
              myGeoObject = new ymaps.GeoObject({
               geometry: {
                   type: "LineString",
                   coordinates: [
                       
                        [47.128291, 51.957723], 
                        [47.118965, 51.943268]
                   ]
               },
                  properties:{
                   hintContent: "Wedding dresses 'Gaukhar'",
                   balloonContent: "Welcome!"
               }
           }, {
               strokeColor: "#FF0000",
               strokeWidth: 5
           });
              MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
               '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
           ),
   
           myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
               hintContent: 'Our address',
               balloonContent: 'We work here'
           }, {
               iconLayout: 'default#image',
               iconImageHref: 'https://thumbs.dreamstime.com/b/map-pointer-heart-filled-outline-icon-map-pointer-heart-filled-outline-icon-valentines-day-romantic-love-pin-sign-107717662.jpg',
               iconImageSize: [35, 42],
               iconImageOffset: [-5, -38]
           }),
            myPlacemarkWithContent = new ymaps.Placemark([47.118965, 51.943268],{
               hintContent: 'Our second point',
               balloonContent: 'Wedding dresses Gaukhar',
               iconContent: '12'
           }, {
               iconLayout: 'default#imageWithContent',
               iconImageHref: 'https://cdn1.iconfinder.com/data/icons/wedding-love-4/128/wedding-location-512.png',
               iconImageSize: [40, 40],
               iconImageOffset: [-24, -24],
               iconContentOffset: [15, 15],
               iconContentLayout: MyIconContentLayout
           });
          myMap.geoObjects
              .add(myGeoObject)
              .add(myPlacemark)
              .add(myPlacemarkWithContent);
      };