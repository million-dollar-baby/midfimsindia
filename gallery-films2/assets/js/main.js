function initialize() {
    $('#container').fadeOut("fast", function(){
                            $('#container').html('<section id="photos"></section>');
                            loadImages();
                            });
    $('#container').fadeIn("slow");
}

function loadImages() {
    var t = 100; //Change this to Number of Images in the folder
    var i = 1;
    for(var i=1; i<t;i++){
        $('#photos').append('<div id="img-container"><img id="' + i + '" onmouseleave="hideInfo(' + i + ')"  onmouseover="showInfo(' + i +')" onmousedown="showImg(' + i + ')"src="gallery-films2/images/' + i + '.jpg" onError="this.remove();" /></div>');
    }
}

function showInfo(id) {
    var divID = '#' + id;
    $(divID).animate({opacity: 0.5}, 100);
}

getElementById('img-container').addEventListener("mouseleave", hideInfo);

function hideInfo(id) {
    var divID = '#' + id;
    $(divID).animate({opacity: 1}, 300);
}

function showImg(id) {
    $('#container').fadeOut("fast", function(){
                            $('#container').html('<div onmousedown="initialize()" style="position: fixed; top:0; bottom:0; left:0; right:0;"><div style="position:fixed; top:10%; bottom:10%; left:10%; right:10%;"><iframe width="100%" height="100%" src="gallery-films2/images/' + id + '.html"></iframe></div></div>');
                            $('#photos').css('display', 'none');
                            });
    $('#container').fadeIn("slow");
}