/** Class representing a video player. */
class VideoPlayer {
    /**
     * Create a video player with settings.
     * @param {Object} settings - video player settings.
     */
    constructor(settings) {
        this._settings = Object.assign(VideoPlayer.DefaultSettings, settings);
    }

    /**
    * Initialize video player.
    */
    init() {
        if (!this._settings.videoUrl) return console.error('Provide video Url');
        if (!this._settings.videoPlayerContainer) return console.error('Please provide video player container');

        this._addTemplate();
        this._setElements();
        this._setEvents();
    }

    /**
     * Toggle video player play/pause.
     *  @param {Object} event - event leading to toggle.
     */
    toggle() {
        const method = this._video.paused ? 'play' : 'pause';

        // Homework
        this._toggleBtn.classList.toggle("is-active");
        this._video[method]();
    }

    /**
     * Toggle audio off/on.
     */
    audioToggle() {
        // Homework
        this._video.muted = !this._video.muted;
        this._audioBtn.classList.toggle("is-active");
    }

    /**
     * Show video player progress.
     */
    _videoProgressHandler() {
        const percent = (this._video.currentTime / this._video.duration) * 100;
        this._progress.style.flexBasis = `${percent}%`;
    }

    /**
     * Set the volume.
     */
    _volumeProgressHandler() {
        // Homework
        this._video.volume = this._rangeVolume.value;
        this._showInfo(this._rangeVolume.value);       
    }

    /**
     * Set the volume.
     */
    _rateProgressHandler() {
        // Homework
        this._video.playbackRate = this._rangeRate.value;
        this._showInfo(this._rangeRate.value);
    }

    /**
     * Show info block.
     * @param {String} value - Info value.
     */
    _showInfo(value = '') {
        // Homework
        this._infoBox.style.display = 'block';
        this._infoBox.value = value;
    }

     /**
     * Hide info block.
     */
    _hideInfo() {
        // Homework
        this._infoBox.style.display = 'none';
        this._infoBox.value = '';
    }

    /**
     * Rewind video.
     * @param {Object} event - event leading to rewind.
     */
    _rewindVideo(event) {
        this._video.currentTime = (event.offsetX / this._progressContainer.offsetWidth) * this._video.duration;
    }
    
     /**
     * Run rewind video.
     * @param {Object} event - event leading to rewind.
     */
    _runRewindVideo(event) {
        // Homework
        let isLeftSide = event.offsetX < (this._video.offsetWidth / 2);
        this._rewindToValue(isLeftSide, isLeftSide ? this._settings.skipPrev : this._settings.skipNext);
    }

    /**
     * Rewind video to value.
     * @param {Boolean} directionLeft - rewind to left.
     * @param {Number} time - quantity second to rewind.
     */
    _rewindToValue(directionLeft = true, time = 1) {
        // Homework
        if (directionLeft) {
            this._video.currentTime = this._video.currentTime + time > 0 ? this._video.currentTime + time : 0;
        } else {
            this._video.currentTime = this._video.currentTime + time < this._video.duration ? this._video.currentTime + time : this._video.duration;
        }
    }

    /**
    * Insert markup video player in the container.
    */
    _addTemplate() {
        const template = this._createVideoTemplate();
        const container = document.querySelector(this._settings.videoPlayerContainer);
        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('Video container was not found');
    }

    /**
    * Set properties from elements.
    */
    _setElements() {
        this._videoContainer = document.querySelector(this._settings.videoPlayerContainer);
        this._video = this._videoContainer.querySelector('video');
        this._toggleBtn = this._videoContainer.querySelector('.toggle');
        this._progress = this._videoContainer.querySelector('.progress__filled');
        this._progressContainer = this._videoContainer.querySelector('.progress');

        // Homework
        this._infoBox = this._videoContainer.querySelector('.info-setting');
        this._audioBtn = this._videoContainer.querySelector('.audio');
        this._rangeVolume = this._videoContainer.querySelector('.js-range-volume');
        this._rangeRate = this._videoContainer.querySelector('.js-range-rate');
        this._skipPrev = this._videoContainer.querySelector('.js-skip-prev');
        this._skipNext = this._videoContainer.querySelector('.js-skip-next');

        if (this._settings.muted !== VideoPlayer.DefaultSettings.muted) {
            this.audioToggle();
        }

        if (this._settings.autoplay !== VideoPlayer.DefaultSettings.autoplay) {
            this.toggle();
        }
    }

    /**
     * Set video player item events.
     */
    _setEvents() {
        this._video.addEventListener('click', () => {
            setTimeout(() => {
                this.toggle();
            }, 300);
        });

        this._toggleBtn.addEventListener('click', () => this.toggle());
        this._video.addEventListener('timeupdate', () => this._videoProgressHandler());
        this._progressContainer.addEventListener('click', (e) => this._rewindVideo(e));

        // Homework
        this._audioBtn.addEventListener('click', () => this.audioToggle());
        this._video.addEventListener('dblclick', (e) => this._runRewindVideo(e));
        this._video.onended = () => { 
            this._toggleBtn.classList.toggle("is-active"); 
        };

        this._rangeVolume.oninput = () => {
            this._volumeProgressHandler();
        };
        this._rangeVolume.addEventListener('mouseout', () => this._hideInfo());
        this._rangeRate.oninput = () => {
            this._rateProgressHandler();
        };
        this._rangeRate.addEventListener('mouseout', () => this._hideInfo());

        this._skipPrev.addEventListener('click', () => this._rewindToValue(true, this._settings.skipPrev));
        this._skipNext.addEventListener('click', () => this._rewindToValue(false, this._settings.skipNext));

        document.body.addEventListener("keydown", (event) => {
            if (event.keyCode === 32) {
                this.toggle();
            }
        });
    }

    /**
     * Get template video player.
     * @return {String} Template value.
     */
    _createVideoTemplate() {
        return `
        <div class="player">
            <video class="player__video viewer" src="${this._settings.videoUrl}"> </video>
            <input type="text" class="info-setting">
            <div class="player__controls">
              <div class="progress">
              <div class="progress__filled"></div>
              </div>
              <button class="player__button play toggle" title="Toggle Play"></button>
              <button class="player__button audio is-active" title="Toggle Audio">
                <svg viewBox="0 0 100 100">
                    <g transform="translate(342.000000, 1.000000)">
                        <path style="fill:none;stroke:currentColor;stroke-width:10.916;stroke-linecap:round;" d="M-303.1,66.5h-16.2
                            c-1.1,0-2-0.9-2-2V32.3c0-1.1,0.9-2,2-2h16.2c1.1,0,2,0.9,2,2v32.2C-301.1,65.6-302,66.5-303.1,66.5L-303.1,66.5z"></path>
                        
                            <polyline id="Stroke-166" style="fill:none;stroke:currentColor;stroke-width:10.916;stroke-linecap:round;stroke-linejoin:round;" points="
                            -299.1,28.5 -266.8,6.1 -266.8,90.7 -299.1,68.3 	"></polyline>
                    </g>
                    </svg>
                </button>
              <input type="range" name="volume" class="player__slider js-range-volume" min=0 max="1" step="0.05" value="${this._settings.volume}" title="Volume">
              <input type="range" name="playbackRate" class="player__slider js-range-rate" min="0.5" max="2" step="0.1" value="${this._settings.playbackRate}" title="Playback rate">
              <button data-skip="${this._settings.skipPrev}" class="player__button js-skip-prev">« ${this._settings.skipPrev}s</button>
              <button data-skip="${this._settings.skipNext}" class="player__button js-skip-next">${this._settings.skipNext}s »</button>
            </div>
        </div>
        `;
    }

    /**
     * Get default video player settings.
     * @return {Object} DefaultSettings value.
     */
    static get DefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: 'body',
            volume: 1,
            skipNext: 1,
            skipPrev: -1,
            muted: false,
            playbackRate: 1,
            autoplay: false
        }
    }
}


const playerInstance = new VideoPlayer({
     videoUrl: 'video/mov_bbb.mp4',
    videoPlayerContainer: 'body',
    skipNext: 2,
    skipPrev: -3,
    muted: true,
    playbackRate: 1,
    volume: 1,
    autoplay: false
});

playerInstance.init();