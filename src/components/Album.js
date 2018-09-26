import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props){
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      currentVolume: 1,
      volume: 0,
      isPlaying: false,
      isHovered: null,
      title: null,
      isToggleOn: true
    };
    this.state.isHovered = false;
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.index = this.index;
    this.timeMode = false;
        /*clock variables*/
    this.createSecond = 0;
    this.seconds = 0;
    this.minutes = 0;
     /*time mode toggle*/
     this.toggleTime= this.toggleTime.bind(this);
     this.timeOutput = "time";
  }

play() {
  this.audioElement.play();
  this.setState({ isPlaying: true });

}

pause() {
  this.audioElement.pause();
  this.setState({ isPlaying: false });

}

componentDidMount() {
  this.eventListeners = {
    timeupdate: e => {
      this.setState({ currentTime: this.audioElement.currentTime });
    },
    durationchange: e => {
      this.setState({ duration: this.audioElement.duration });
    }
  };
  this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
  this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
}

componentWillUnmount() {
  this.audioElement.src = null;
  this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
  this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
}

setSong(song) {
  this.audioElement.src = song.audioSrc;
  this.setState({ currentSong: song });
}

handleSongClick(song) {
  const isSameSong = this.state.currentSong === song;
  if( this.state.isPlaying && isSameSong) {
    this.pause();
  }
  else {
    if (!isSameSong) { this.setSong(song); }
    this.play();
    this.setState({title: this.state.isHovered})
  }
}

handlePrevClick(song, index) {
  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  const newIndex = Math.max(0, currentIndex - 1);
  const newSong = this.state.album.songs[newIndex];
  this.setSong(newSong);
  this.play();
}

handleNextClick(song, index) {
  const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
  const newIndex = Math.max(0, currentIndex + 1);
  const newSong = this.state.album.songs[newIndex];
  const currentSong = this.state.album.songs[currentIndex];
  if(currentIndex < 4) {
    this.setSong(newSong);
    this.play();
  }
  else if(currentIndex === 4) {
    this.setSong(currentSong);
    this.play();
  }
}

handleMouseEnter(song, index) {
  this.setState({ isHovered: song.title })
}

handleMouseExit(song, index) {
  if(this.state.isPlaying === false) {
  this.setState({ isHovered: null})
  }
  else {
    this.setState({ isHovered: song.title})
  }
}

handleTimeChange(e) {
  const newTime = this.audioElement.duration * e.target.value;
  this.audioElement.currentTime = newTime;
  this.setState({ currentTime: this.formatTime(newTime) });
}

handleVolumeChange(f) {
  const newVolume = f.target.value;
  this.audioElement.volume = newVolume;
  this.setState({ currentVolume: newVolume });
}

formatTime(t) {
  var zeroRender = true;
  var zero = 0;
  var seconds = 0;
  var minutes = 0;
  var clock = '-:--';

if(this.state.isToggleOn === true) {
  for(var i = 0; i < t; i++) {
    seconds = i;
  }

  for(i = 0; i < t; i++) {
    if(seconds >= 60) {
      seconds = seconds - 60;
      minutes = minutes + 1;
    }
  }
  if(seconds >= 10) {zeroRender=false;}
  else{zeroRender=true;}
  if(zeroRender === true) {
    zero = 0;
    clock =  minutes + ":" + zero + seconds;
  }
  else{
    clock = minutes + ":" + seconds;
  }
}
else {
  clock = t;
}
  this.timeOutput =  clock.toString();
  return clock
}

toggleTime() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

renderIcons(song, index) {

    if(this.state.isHovered === null) {
      return  index + 1
  }

  if(this.state.isHovered === song.title && this.state.isPlaying === false) {
    return <span className="ion-play"></span>
  }
  else if(this.state.title === song.title && this.state.isPlaying === true) {
    return <span className="ion-pause"></span>
  }
  else if(this.state.isHovered != null){
    if(this.state.isHovered === song.title && this.state.isPlaying === true) {
      return <span className="ion-play"></span>
    }
    else {
      return index + 1
    }
  }
  else {
    return index + 1
  }
}

  render() {
    return(
      <section className="album">
        <section id="album-info" >
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id='album-title'>{this.state.album.title}</h1>
            <h2 className='artist'>{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {this.state.album.songs.map((song, index) =>
             <tr className="song" key={index}
             onClick={() => this.handleSongClick(song)}
             onMouseOver={() => this.handleMouseEnter(song, index)} onMouseOut={() => this.handleMouseExit(song, index)} >
                <td>{this.renderIcons(song, index)}</td>
                <td>{song.title}</td>
                <td>{this.formatTime(song.duration)}</td>
             </tr>
            )}
          </tbody>
        </table>
        <div>{this.formatTime(this.state.currentTime)}</div>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          isToggleOn={this.state.isToggleOn}
          currentTime={this.audioElement.currentTime}
          currentVolume={this.audioElement.volume}
          duration={this.formatTime(this.audioElement.duration)}
          volume={this.audioElement.volume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
          formatTime={() => this.formatTime()}
          toggleTime={() => this.toggleTime()}
          />
      </section>
    );
  }
}

export default Album;
