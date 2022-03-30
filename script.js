console.log("welcome to Musify");
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let mastersongname=document.getElementById('mastersongname');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Tumhe Apna Banane Ka", filepath:"songs/1.mp3",coverpath:""},
    {songName:"Tum Hi Ho", filepath:"songs/2.mp3",coverpath:""},
    {songName:"Ek-Villain", filepath:"songs/3.mp3",coverpath:""},
    {songName:"Kar Gayi Chull", filepath:"songs/4.mp3",coverpath:""},
    {songName:"Jumme Ki Raat", filepath:"songs/5.mp3",coverpath:""},
    {songName:"Mujhko Barsat Banalo", filepath:"songs/6.mp3",coverpath:""},
    {songName:"Saanson Ko", filepath:"songs/7.mp3",coverpath:""},
    {songName:"Sanam Re", filepath:"songs/8.mp3",coverpath:""},
    {songName:"Khamoshiyan", filepath:"songs/9.mp3",coverpath:""},
    {songName:"Dil tu Hi Bataa", filepath:"songs/10.mp3",coverpath:""}
]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100; 
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplays();
        mastersongname.innerText=songs[songindex].songName;
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 10) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=1) {
        songindex = 10;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})