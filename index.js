let typeList;
let selTVGenre;

let optionsListURL = ['https://raw.githubusercontent.com/apdev55/MyLatinTV/main/channels.json', '', '', '']
$(document).ready(function () {
    //Quita el click derecho a los iframes
    window.frames["hola"].contentDocument.oncontextmenu = function(){
        return false; 
    };
    $(".modal-header button").click(function () {
        $(".player-container iframe").remove();
    });
});

function getData(opt, url) {
    $.getJSON(url, function (jd) {
        typeList = jd;
        console.log(typeList);
        selTVGenre = chooseGenre('sports')
    });
}

function chooseGenre(genre) {
    for (let i = 0; i < typeList[genre].channel.length; i++) {
        let liveContent = "<button class='btn btn-danger mx-2' id='" + [i] + "' onclick=\"chooseChannel(" + [i] + ",'" + typeList[genre].channel[i].name + "')\" type='button' data-bs-toggle='modal' data-bs-target='#staticBackdrop'><img src='" + typeList[genre].channel[i].img + "' alt='" + typeList[genre].channel[i].name + "'></button>"
        $(".content").append(liveContent);
        console.log(typeList[genre].channel[i]);
    }
    return genre;
}
function chooseOption(url) {
    $(".player-container").html("<iframe id='player' src='" + url + "' allow='encrypted-media' allowfullscreen='yes' frameborder='0' sandbox='allow-same-origin allow-scripts' width='100%' height='100%'></iframe>");
}
function chooseChannel(index, name) {
    console.log(selTVGenre);
    $("#staticBackdropLabel").html(name);
    $(".modal-body .opt-container").html('');
    for (let i = 0; i < typeList[selTVGenre].channel[index].live.length; i++) {
        $(".modal-body .opt-container").append('<button class="btn btn-danger mx-2" id="opt' + [i] + '" onclick="chooseOption(\'' + typeList[selTVGenre].channel[index].live[i] + '\')" type="button">Opción ' + [i + 1] + '</button>');
    }
}
