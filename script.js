let songPath = document.getElementById('songPath');
let songController = document.getElementsByClassName('song_controller')[0];
let sourceSong = document.getElementById('source_song');
let audioTag = document.getElementsByTagName('audio')[0];
let reader = new FileReader();

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
reader.addEventListener('load',(e)=>{
    audioContext.decodeAudioData(e.target.result,(buffer)=> console.log(buffer.getChannelData(0)))
})
songPath.onchange = (e)=>{
    songController.style.display = 'block';
    let pathAddedFromUser = songPath.value.split('\\')[2];
    sourceSong.src = `./songs/${pathAddedFromUser}`;
    audioTag.load();
    console.log(e.target.files[0]);
    let buffedSong = reader.readAsArrayBuffer(e.target.files[0])
    
    // let songController = document.createElement('audio');
    // songController.controls = 'true';

    // let songPath = document.createElement('source');

    // songPath.setAttribute('src','D:\\Подготовка к собеседованиям\\godel_task\\songs\\avicii-theNights.mp3');
    // songPath.type = 'audio/mpeg';
    // songController.appendChild(songPath);

    // document.body.appendChild = songController;
};

