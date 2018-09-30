import React , { Component} from 'react';
import Button from '@material-ui/core/Button';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">

            <div class="mdl-grid">
              <div class="mdl-layout-spacer"></div>
              <div class="mdl-cell mdl-cell--4-col">
                <section id="buttons">
              <button id="previous" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handlePrevClick}>
                <span className="ion-skip-backward"></span>
              </button>
              <button id="play-pause" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handleSongClick}>
                <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
              </button>
              <button id="next" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" onClick={this.props.handleNextClick}>
                <span className="ion-skip-forward"></span>
              </button>
                </section>
              </div>
              <div class="mdl-layout-spacer"></div>
            </div>

            <div class="mdl-grid">
              <div class="mdl-layout-spacer"></div>
              <div class="mdl-cell mdl-cell--4-col">
                <section className="time-control">


                  <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max="1"
                min="0"
                step="0.01"
                onChange={this.props.handleTimeChange}
                  />
                </section>
              </div>
              <div class="mdl-layout-spacer"></div>
            </div>

            <div class="mdl-grid">
              <div class="mdl-layout-spacer"></div>
              <div class="mdl-cell mdl-cell--2-col">
                <div className="total-time">{this.props.duration}</div>
              </div>
              <div class="mdl-layout-spacer"></div>
            </div>

            <div class="mdl-grid">
              <div class="mdl-layout-spacer"></div>
              <div class="mdl-cell mdl-cell--12-col">
                <section className="volume-control">
                  <div className="current-volume">
                    {(this.props.currentVolume * 100 )  || 0 }
                    <input
                      type="range"
                      className="mdl-slider mdl-js-slider"
                      value={(this.props.currentVolume)}
                      max="1"
                      min="0"
                      step="0.01"
                      onChange={this.props.handleVolumeChange}
                    />
                  </div>
                </section>
              </div>
              <div class="mdl-layout-spacer"></div>
            </div>

          </section>
    )
  }
}

export default PlayerBar;
