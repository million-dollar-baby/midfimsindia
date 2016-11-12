function initialiseWeb() {
    filmsClicked();
    $('#viewer').css('display', 'none');
    
}

function removeViewer() {
    $('#header').fadeIn("slow", function() {
                         $('#header').css('display', 'block');
                        $('body').removeClass('stop-scrolling');
                         });
    
    $('#viewer').fadeOut("slow", function() {
                          $('#viewer').css('display', 'none');
                         $('#viewer').html('');
                         });
    
}

function viewLink() {
    $('#header').fadeOut("slow", function() {
                         $('#header').css('display', 'none');
                         $('body').addClass('stop-scrolling');
                         });
    $('#viewer').fadeIn("slow", function() {
                         $('#viewer').css('display', 'initial');
                         });
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

function filmsClicked() {
    
    
    
    //Below is the code when the user clicks on Filmography link
    
    
    $('#nav-gallery-film a').css('color', 'red');
    $('#nav-gallery-ads a').css('color', 'black');
    $('#nav-gallery-clients a').css('color', 'black');
    $('#nav-gallery a').css('color', 'black');
    
    $('#img1').animate({
                       opacity: 0,
                       x: '-300px'
                       }, 700, function() {
                       $('#img1 img').attr('src', 'ft/1.png');
                       $('#img1 a').attr('href', 'javascript:void(0)');
                       $('#img1 a').attr('onclick', 'filmsImg1();');
                       $('#img1').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
					   
    $('#img2').animate({
                       opacity: 0,
                       x: '300px'
                       }, 700, function() {
                       $('#img2 img').attr('src', 'ft/2.png');
                       $('#img2 a').attr('href', 'javascript:void(0)');
                       $('#img2 a').attr('onclick', 'filmsImg2();');
                   
                       $('#img2').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img3').animate({
                       opacity: 0,
                       x: '-200px'
                       }, 700, function() {
                       $('#img3 img').attr('src', 'ft/3.png');
                       $('#img3 a').attr('href', 'javascript:void(0)');
                       $('#img3 a').attr('onclick', 'filmsImg3()');
                       
                       $('#img3').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img4').animate({
                       opacity: 0,
                       x: '200px'
                       }, 700, function() {
                       $('#img4 img').attr('src', 'ft/4.png');
                       $('#img4 a').attr('href', 'javascript:void(0)');
                       $('#img4 a').attr('onclick', 'filmsImg4();');
                       
                       $('#img4').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img5').animate({
                       opacity: 0,
                       x: '-100px'
                       }, 700, function() {
                       $('#img5 img').attr('src', 'ft/5.png');
                       $('#img5 a').attr('href', 'javascript:void(0)');
                       $('#img5 a').attr('onclick', 'filmsImg5();');
                       
                       $('#img5').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img6').animate({
                       opacity: 0,
                       x: '100px'
                       }, 700, function() {
                       $('#img6 img').attr('src', 'ft/6.jpg');
                       $('#img6 a').attr('href', 'javascript:void(0)');
                       $('#img6 a').attr('onclick', 'filmsImg6();');
                       
                       $('#img6').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
                       
}
	
function filmsImg1() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/4hYS1PoM4XM" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function filmsImg2() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KLAlKliRC7Q" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function filmsImg3() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/phW8jZfEISs" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function filmsImg4() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/U9kCY9psgOc" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function filmsImg5() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/3vygWI0XK4E" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function filmsImg6() {
	//viewLink();
    location.href = 'gallery-films/gallery.html';
	//$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' + '<iframe width="100%" height="100%" src="gallery-films/gallery.html"></iframe>' + '</div></div>');
}

function adsClicked() {
    
    
    
    //Below is the code when the user clicks on Advertisements link
    $('#nav-gallery-film a').css('color', 'black');
    $('#nav-gallery-ads a').css('color', 'red');
    $('#nav-gallery-clients a').css('color', 'black');
    $('#nav-gallery a').css('color', 'black');
    
    $('#img1').animate({
                       opacity: 0,
                       x: '-300px'
                       }, 700, function() {
                       $('#img1 img').attr('src', 'adt/1.png');
                       $('#img1 a').attr('href', 'javascript:void(0)');
                       $('#img1 a').attr('onclick', 'adsImg1();');
                       
                       $('#img1').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img2').animate({
                       opacity: 0,
                       x: '300px'
                       }, 700, function() {
                       $('#img2 img').attr('src', 'adt/2.png');
                       $('#img2 a').attr('href', 'javascript:void(0)');
                       $('#img2 a').attr('onclick', 'adsImg2();');
                       
                       $('#img2').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img3').animate({
                       opacity: 0,
                       x: '-200px'
                       }, 700, function() {
                       $('#img3 img').attr('src', 'adt/3.png');
                       $('#img3 a').attr('href', 'javascript:void(0)');
                       $('#img3 a').attr('onclick', 'adsImg3();');
                       
                       $('#img3').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img4').animate({
                       opacity: 0,
                       x: '200px'
                       }, 700, function() {
                       $('#img4 img').attr('src', 'adt/4.png');
                       $('#img4 a').attr('href', 'javascript:void(0)');
                       $('#img4 a').attr('onclick', 'adsImg4();');
                       
                       $('#img4').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img5').animate({
                       opacity: 0,
                       x: '-100px'
                       }, 700, function() {
                       $('#img5 img').attr('src', 'adt/5.png');
                       $('#img5 a').attr('href', 'javascript:void(0)');
                       $('#img5 a').attr('onclick', 'adsImg5();');
                       
                       $('#img5').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img6').animate({
                       opacity: 0,
                       x: '100px'
                       }, 700, function() {
                       $('#img6 img').attr('src', 'adt/6.png');
                       $('#img6 a').attr('href', 'javascript:void(0)');
                       $('#img6 a').attr('onclick', 'adsImg6();');
                       
                       $('#img6').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    
    
}

function adsImg1() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/8_TeurxpVgk" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function adsImg2() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bK4m4VmlJsc" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function adsImg3() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="420" height="315" src="https://www.youtube.com/embed/TvxF_aGxwMQ" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function adsImg4() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/a_k7tZ4DZJM" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function adsImg5() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wd4z7qwxSDg" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function adsImg6() {
    location.href = 'gallery-ads/gallery.html';
	//viewLink();
	//$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +'<iframe width="100%" height="100%" src="gallery-ads/gallery.html"></iframe>'+ '</div></div>');
}

function clientsClicked() {
    
    
    
    //Below is the code when the user clicks on Clients link
    $('#nav-gallery-film a').css('color', 'black');
    $('#nav-gallery-ads a').css('color', 'black');
    $('#nav-gallery-clients a').css('color', 'red');
    $('#nav-gallery a').css('color', 'black');
    
    $('#img1').animate({
                       opacity: 0,
                       x: '-300px'
                       }, 700, function() {
                       $('#img1 img').attr('src', 'ctm/1.png');
                       $('#img1 a').attr('href', 'javascript:void(0)');
                       $('#img1 a').attr('onclick', '');
                       
                       $('#img1').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img2').animate({
                       opacity: 0,
                       x: '300px'
                       }, 700, function() {
                       $('#img2 img').attr('src', 'ctm/2.jpg');
                       $('#img2 a').attr('href', 'javascript:void(0)');
                       $('#img2 a').attr('onclick', '');
                       
                       $('#img2').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img3').animate({
                       opacity: 0,
                       x: '-200px'
                       }, 700, function() {
                       $('#img3 img').attr('src', 'ctm/3.jpg');
                       $('#img3 a').attr('href', 'javascript:void(0)');
                       $('#img3 a').attr('onclick', '');
                       
                       $('#img3').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img4').animate({
                       opacity: 0,
                       x: '200px'
                       }, 700, function() {
                       $('#img4 img').attr('src', 'ctm/4.jpg');
                       $('#img4 a').attr('href', 'javascript:void(0)');
                       $('#img4 a').attr('onclick', '');
                       
                       $('#img4').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img5').animate({
                       opacity: 0,
                       x: '-100px'
                       }, 700, function() {
                       $('#img5 img').attr('src', 'ctm/5.jpg');
                       $('#img5 a').attr('href', 'javascript:void(0)');
                       $('#img5 a').attr('onclick', '');
                       
                       $('#img5').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img6').animate({
                       opacity: 0,
                       x: '100px'
                       }, 700, function() {
                       $('#img6 img').attr('src', 'ctm/6.jpg');
                       $('#img6 a').attr('href', 'javascript:void(0)');
                       $('#img6 a').attr('onclick', 'clientsImg6();');
                       
                       $('#img6').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    
    
}

function clientsImg6() {
    location.href = 'gallery-clients/gallery.html';
	//viewLink();
	//$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +'<iframe width="100%" height="100%" src="gallery-clients/gallery.html"></iframe>'+ '</div></div>');
}

function galleryClicked() {
    
    
    
    //Below is the code when the user clicks on Gallery link
    $('#nav-gallery-film a').css('color', 'black');
    $('#nav-gallery-ads a').css('color', 'black');
    $('#nav-gallery-clients a').css('color', 'black');
    $('#nav-gallery a').css('color', 'red');
    
    $('#img1').animate({
                       opacity: 0,
                       x: '-300px'
                       }, 700, function() {
                       $('#img1 img').attr('src', 'gt/1.png');
                       $('#img1 a').attr('href', 'javascript:void(0)');
                       $('#img1 a').attr('onclick', 'galleryImg1();');
                       
                       $('#img1').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img2').animate({
                       opacity: 0,
                       x: '300px'
                       }, 700, function() {
                       $('#img2 img').attr('src', 'gt/2.png');
                       $('#img2 a').attr('href', 'javascript:void(0)');
                       $('#img2 a').attr('onclick', 'galleryImg2();');
                       
                       $('#img2').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img3').animate({
                       opacity: 0,
                       x: '-200px'
                       }, 700, function() {
                       $('#img3 img').attr('src', 'gt/3.png');
                       $('#img3 a').attr('href', 'javascript:void(0)');
                       $('#img3 a').attr('onclick', 'galleryImg3();');
                       
                       $('#img3').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img4').animate({
                       opacity: 0,
                       x: '200px'
                       }, 700, function() {
                       $('#img4 img').attr('src', 'gt/6.png');
                       $('#img4 a').attr('href', 'javascript:void(0)');
                       $('#img4 a').attr('onclick', 'galleryImg4();');
                       
                       $('#img4').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img5').animate({
                       opacity: 0,
                       x: '-100px'
                       }, 700, function() {
                       $('#img5 img').attr('src', 'gt/5.png');
                       $('#img5 a').attr('href', 'javascript:void(0)');
                       $('#img5 a').attr('onclick', 'galleryImg5();');
                       
                       $('#img5').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    $('#img6').animate({
                       opacity: 0,
                       x: '100px'
                       }, 700, function() {
                       $('#img6 img').attr('src', 'gt/4.png');
                       $('#img6 a').attr('href', 'javascript:void(0)');
                       $('#img6 a').attr('onclick', 'galleryImg6();');
                       
                       $('#img6').animate({
                                          opacity: 1,
                                          x: '0px'
                                          }, 700, function() {
                                          });
                       });
    
    
}

function galleryImg1() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<img width="100%" height="100%" src="gt/1.png" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function galleryImg2() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="gt/2.png" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function galleryImg3() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="gt/3.png" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function galleryImg4() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="gt/6.png" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function galleryImg5() {
	viewLink();
	$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +
                                         '<iframe width="100%" height="100%" src="gt/5.png" frameborder="0" allowfullscreen></iframe>'
                                         + '</div></div>');
}

function galleryImg6() {
    location.href = 'gallery/gallery.html';
	//viewLink();
	//$('#viewer').html('<div style="position: relative;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;">' +'<iframe width="100%" height="100%" src="gallery/gallery.html"></iframe>'+ '</div></div>');
}