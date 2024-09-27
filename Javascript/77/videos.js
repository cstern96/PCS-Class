/* global $*/
// I couldn't get it to work but I'm goint to watch the video and see how you got it to work. I will also try to go to lab tonight. 
(async function () {
    'use strict';
    try {
        const r = await fetch('videos.json');
        if (!r.ok) {
            throw new Error(`${r.status} - ${r.statusText}`);
        }
        const loadedVideos = await r.json();
        const videoDisplay = document.querySelector('#videos');
        loadedVideos.forEach(video => {
            videoDisplay.innerHTML += `<div class="video-item" data-value="${video.value}">
                    <h2>${video.name}</h2>
                    <img src="${video.image}" alt="${video.name}" style="max-width: 300px; height: auto;">
                </div>`;
        });
    } catch (e) {
        console.error(e);
    }
    $(document).on('click', '.video-item', async function () {
        try {
            const clickedVideoValue = $(this).data('value');
            const r = await fetch(`${clickedVideoValue}.json`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const videoDisplay = await r.json();
            displayVideo(videoDisplay);
        }
        catch (e) {
            console.error(e);
        }


    });
    function displayVideo(video) {
        const videoDisplay = document.querySelector('#videoDisplay');

        videoDisplay.innerHTML = `<h2>${video.name}</h2>
                            <video controls autoplay width="500">
                            <source src="${video.url}" type="video/mp4">
                            </video>`;
    }




}());
