import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title"><img className="lorem-picsum" src="https://picsum.photos/125/50"/> Turn the music up! <img className="lorem-picsum" src="https://picsum.photos/125/50"/></h1>
    <section className="selling-points">
      <div className="point1">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-discription">The world is full of music; why should you have to listen to music that someone else chose?</p>
        <img className="lorem-picsum" src="https://picsum.photos/700/260"/>
      </div>
      <div className="point2">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-discription-2">No arbitrary limits. No distractions.</p>
        <img className="lorem-picsum" src="https://picsum.photos/350/260"/><img className="lorem-picsum" src="https://picsum.photos/350/260"/>
      </div>
      <div className="point1">
        <h2 className="point-title">Moblie enabled</h2>
        <p className="point-discription">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        <img className="lorem-picsum" src="https://picsum.photos/700/260"/>
      </div>
      <div className="addspace">
        <h2 className="addspace-title">Addspace</h2>
        <p className="point-discription-2">Put your advertisement here!</p>
        <img className="lorem-picsum" src="https://picsum.photos/350/260"/><img className="lorem-picsum" src="https://picsum.photos/350/260"/>
      </div>
    </section>
  </section>
);

export default Landing;
