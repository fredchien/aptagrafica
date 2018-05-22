$(document).ready(function(){

    function vcPlayPause(video){
        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    }

    $(".video-wrapper").each(function(){
        var $overlay = $(this).find(".video-overlay").first();
        var $video = $(this).find("video").first();
        var video = $video.get(0);
        if (!video) return false;

        var nocontrols = $video.attr("data-nocontrols");
        if (!nocontrols) video.removeAttribute("controls");

        $video.click(function(){
            vcPlayPause(video)
        })
        .bind("play", function(){
            if (!nocontrols) video.setAttribute("controls","controls");
            $overlay.addClass("playing");
        })
        .bind("pause", function(){
            if (!video.seeking) {
                if (!nocontrols) video.removeAttribute("controls");
                $overlay.removeClass("playing");
            }
        });

        $overlay.click(function(){
            video.play();
        })
    });

});