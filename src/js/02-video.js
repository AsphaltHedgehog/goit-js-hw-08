import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// =============================================

const refs = {
  playerVimeo: document.getElementById('vimeo-player'),
  CURRENT_TIME: 'videoplayer-current-time',
};

// ====================================================

const player = new Player(refs.playerVimeo);

const saveCurrentTime = function (ev) {
  localStorage.setItem(refs.CURRENT_TIME, ev.seconds)
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));


// ===================================================


player.setCurrentTime(localStorage.getItem(refs.CURRENT_TIME) || 0);

// =====================================================

player.getEnded().then(ev => 
  localStorage.removeItem(refs.CURRENT_TIME))


