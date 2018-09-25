import React , { Component} from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
          </button>
          <button id="time-mode" onClick={this.props.toggleTime}>
            <span className={this.props.isToggleOn ? "ion-clock" : "ion-star"}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
          </button>
        </section>
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
          <div className="total-time">{this.props.duration}</div>
        </section>
        <section className="volume-control">
          <div className="current-volume">{(this.props.currentVolume) || 0}
            <input
            type="range"
            className="volume-bar"
            value={(this.props.currentVolume)}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            />
          </div>
        </section>
      </section>
    )
  }
}

export default PlayerBar;
