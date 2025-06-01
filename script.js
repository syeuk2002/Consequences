document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const videos = [
        'videos/video1.mp4',
        'videos/video2.mp4',
        'videos/video3.mp4',
        'videos/video4.mp4',
        'videos/video5.mp4',
        'videos/video6.mp4'
    ];
    const transitionVideo = 'videos/transition.mp4';

    function playTransitionVideo() {
        console.log('Playing transition video');
        videoPlayer.src = transitionVideo;
        videoPlayer.play().catch(error => {
            console.error('Error playing transition video:', error);
        });
        videoPlayer.addEventListener('ended', playRandomVideo, { once: true });
    }

    function playRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videos.length);
        console.log(`Playing random video: ${videos[randomIndex]}`);
        videoPlayer.src = videos[randomIndex];
        videoPlayer.play().catch(error => {
            console.error('Error playing random video:', error);
        });
        videoPlayer.addEventListener('click', handleVideoClick, { once: true });
    }

    function handleVideoClick() {
        console.log('Video clicked');
        videoPlayer.pause();
        playTransitionVideo();
    }

    // Initial playback
    playTransitionVideo();
});