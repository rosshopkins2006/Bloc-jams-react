import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: albumData,
      rowDistributer: 0
    }
    this.numCont = 1;
  }

  render() {
    return (
      <section className='library'>
      <div class="mdl-grid">
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-cell mdl-cell--4-col">
        {
          this.state.albums.map((album,index) =>
            <Link id="album-details" to={`/album/${album.slug}`} key={index}>
              <div class="mdl-grid">
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-cell mdl-cell--12-col">
                    <img className='img' src={album.albumCover} width="400px" height="400px" alt={album.title} />
                    <div className="library-detail-wrapper">
                      <div className="library-title">{album.title}</div>
                      <div className="library-artist">{album.artist}</div>
                      <div className="library-length">{album.songs.length} songs</div>
                    </div>
                </div>
                <div class="mdl-layout-spacer"></div>
              </div>
            </Link>
          )
        }
        </div>
        <div class="mdl-layout-spacer"></div>
      </div>

      </section>
    )
  }
}

export default Library;
