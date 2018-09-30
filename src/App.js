import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  <Link id="menu-link" to='/library'>Library</Link>,
  <Link id="menu-link" to='/'>Landing</Link>,
];

const ITEM_HEIGHT = 48;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  render() {
    return (

    <body>
      <div className="App">
        <div className="Head">
          <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
          <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-teal.min.css"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </div>

            <LongMenu/>

          <div class="mdl-grid">
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-cell mdl-cell--5-col">
              <div class="mdl-grid">
                <div class="mdl-layout-spacer"></div>
                <div class="mdl-cell mdl-cell--7-col">
                  <img className="bloc-logo" src={'/assets/images/bloc_jams_logo.png'} width={'300'} height={'150'} alt={"The Bloc Jams logo"}/>
                </div>
                <div class="mdl-layout-spacer"></div>
              </div>
            </div>
            <div class="mdl-layout-spacer"></div>
          </div>

          <div class="mdl-grid">
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-cell mdl-cell--12-col">
              <main className="route-container">
                <Route exact path="/" component={Landing} />
                <Route path="/library" component={Library} />
                <Route path="/album/:slug" component={Album} />
              </main>
            </div>
            <div class="mdl-layout-spacer"></div>
          </div>

      </div>
  </body>
    );
  }
}



class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}



export default App;
