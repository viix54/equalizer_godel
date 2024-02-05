// document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
let songPath = document.getElementById('songPath');
let songController = document.getElementsByClassName('song_controller')[0];
let sourceSong = document.getElementById('source_song');
let audioTag = document.getElementsByTagName('audio')[0];
songPath.onchange = ()=>{
    songController.style.display = 'block';
    let pathAddedFromUser = songPath.value.split('\\')[2];
    sourceSong.src = `./songs/${pathAddedFromUser}`;
    audioTag.load();
    // let songController = document.createElement('audio');
    // songController.controls = 'true';

    // let songPath = document.createElement('source');

    // songPath.setAttribute('src','D:\\Подготовка к собеседованиям\\godel_task\\songs\\avicii-theNights.mp3');
    // songPath.type = 'audio/mpeg';
    // songController.appendChild(songPath);

    // document.body.appendChild = songController;
};

