import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up!</h1>
    <section className="selling-points">
      <div className="point1">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-discription">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point2">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-discription">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point1">
        <h2 className="point-title">Moblie enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
      <div className="addspace">
        <h2 className="point-title">Addspace</h2>
        <p className="point-description">Put your advertisement here!</p>
      </div>
    </section>
  </section>
);

export default Landing;
