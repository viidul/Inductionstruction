let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: '5_IFz7FEZ9E', // Replace with your video ID
    playerVars: {
      'controls': 0,
      'disablekb': 1,
      'modestbranding': 1,
      'rel': 0,
      'fs': 0,
      'playsinline': 1
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    const btn = document.getElementById('continueBtn');
    btn.disabled = false;
    btn.classList.add('enabled');
    btn.onclick = () => {
      window.location.href = 'https://forms.office.com/r/sp0PCvLwWZ?origin=lprLink'; // Replace with your next link
    };
  }
}
