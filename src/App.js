import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside = evt => {

  }

  render() {
    return (
      <div className="App">
        <header>
          <div  className="centerContainer">
            <img className="logo" src={'/assets/images/bloc_jams_logo.png'} width={'400'} height={'200'} alt={"The Bloc Jams logo"}/>
          </div>
          <nav>
            <section className="menu">
              <div className="dd-wrapper">
                <div className="dd-header">
                  <div className="dd-header-title"></div>
                </div>
                <ul className="dd-list">
                  <li className="dd-list-item"><Link to='/'>Landing</Link></li>
                  <li className="dd-list-item"><Link to='/library'>Library</Link></li>
                </ul>
              </div>
            </section>

          </nav>
        </header>
        <main className="route-container">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
