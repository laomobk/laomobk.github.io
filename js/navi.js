
const NAVI_BAR_HEIGHT = 66;

let navi_box_state = 0;

window.onload = () => {
    initNaviBox();
}

window.onresize = () => {
    initNaviBox();
}

function initNaviBox() {
    console.log('init navi box');

    var navi_box = document.getElementById('__navi_box');
    var navi_bar = document.getElementById('__navi_bar');
    var frame = document.getElementById('__menu_panel_frame');
    
    var windowHeight = window.innerHeight;

    frame.style.height = windowHeight + 'px';
    navi_box.style.height = window.innerHeight + 'px';
    navi_box.style.top = '' + (-(windowHeight - NAVI_BAR_HEIGHT)) + 'px';
    navi_bar.style.top = '' + (windowHeight - NAVI_BAR_HEIGHT) + 'px';

    // switchNaviBox();  // comment it if not in debugging
}

function getNaviBoxFrameDocument() {
    return document.getElementById('__menu_panel_frame').contentDocument;
}

function switchNaviBox(target) {
    var navi_box = document.getElementById('__navi_box');
    var navi_bar = document.getElementById('__navi_bar');
    var more_text = document.getElementById('__more_text');

    var windowHeight = window.innerHeight;

    if (navi_box_state == 0) {
        console.log('drop navi box');

        navi_box.style.top = '0px';
        navi_box.style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
        more_text.innerText = '收起';

        navi_box_state = 1;
        
        if (target == 0) {
            var frame_document = getNaviBoxFrameDocument();
            frame_document.getElementById('__video_char_demo').play();
            
            var bgm = document.getElementById('__main_bgm');
            bgm.pause();
        }
    } else {
        console.log('collapse navi box');

        navi_box.style.top = '' + (-(windowHeight - NAVI_BAR_HEIGHT)) + 'px';
        more_text.innerText = '演示';
        navi_box.style.backgroundColor = 'rgb(1, 1, 1, 0.6)';

        navi_box_state = 0;

        if (target == 0) {
            var frame_document = getNaviBoxFrameDocument();
            frame_document.getElementById('__video_char_demo').pause();
            
            var bgm = document.getElementById('__main_bgm');
            bgm.play();
        }
    }
}