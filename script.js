
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '460',
        width: '540',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'key': 'AIzaSyCBKuf209NvxVMzEV158-8SW8WvN-ZewKc',
        },
    });
}

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            setTimeout(() => {
                loadVideo();
            }, 1000);
        }
    } else {
        alert('Please enter a valid YouTube Video ID.');
    }
}
