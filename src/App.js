import './App.css';
import FortnitePicturesB5Kfcchwazwiz3Cs1 from './Images/FortnitePicturesB5Kfcchwazwiz3Cs1.jpeg'
import s2 from './Images/s2.jpg'
import s3 from './Images/s3.jpg'
import s5 from './Images/s5.jpg'

function App() {
  return (
    <div className="container">
      <div className="header">Epic Games: An American Video Game And Software Developer <br/>
         And Publisher Based In Cary, North Carolina.</div>
      <div className="image-container">
        <img src={FortnitePicturesB5Kfcchwazwiz3Cs1} alt="Fortnite" className="fortnite-image" />
      </div>
      <div className="description">
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br/>
         live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br/>
          an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
      </div>
      <a href="https://www.epicgames.com" className="visit-button">Visit Website</a>

      <div className="image-section">
        <div className="image-card1">
          <img src={s3} alt="Environment" className="card-image" />
          <p className="card-text">Explore Large, Destructible <br/> Environments Where No Two Games<br/>  Are Ever The Same.</p>
        </div>
        <div className="image-card2">
          <img src={s2} alt="Team Up" className="card-image" />
          <p className="card-text">Team Up With Friends By Sprinting,<br/>  Climbing And Smashing Your Way To<br/>  Earn Your Victory Royale</p>
        </div>
        <div className="image-card3">
          <img src={s5} alt="Ways to Play" className="card-image" />
          <p className="card-text">Discover Even More Ways To Play<br/>  Across Thousands Of Creator-Made<br/>  Game Genres</p>
        </div>
      </div>
      <div className="contribution-section">
        <h2>Our Contribution</h2>
        <p>
          Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user <br/>
          community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing <br/>
          distinctive digital interactions guarantees unparalleled benefits for our clientele.
        </p>
        <div className="stats">
          <div className="stat1">
            <h3>5M</h3>
            <p>Daily User <br/> Engagements</p>
          </div>
          <div className="stat2">
            <h3>$500K</h3>
            <p>Revenue Surge for an <br/> Platform</p>
          </div>
          <div className="stat3">
            <h3>10X</h3>
            <p>ROAS on all our<br/> marketing campaigns</p>
          </div>
        </div>
      </div>
      <div className="contact-container">
      <h2>Interested In Delving Deeper Into The Project?</h2>
      <p>
        If you'd like to explore further details about our initiatives or any of our <br/> affiliated brands, don't hesitate to connect.
        You can reach out to us via <br/> email at <strong>hello@abc.com</strong> or give us a call at <strong>+91 480 20802730</strong>.
      </p>
      <div className="buttons">
        <button className="skype-button">Ring us on Skype</button>
        <button className="contact-button">Contact Us</button>
      </div>
      <footer>
        &copy; 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
      </footer>
    </div>
    </div>
    
  );
}

export default App;
