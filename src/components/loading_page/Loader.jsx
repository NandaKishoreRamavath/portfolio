import React from "react";
import "./loader.css";

import illustration from "../../assets/images/loader/footer illustration.svg";
import logo from "../../assets/images/loader/logo.svg";

function Loader({ loaderSection }) {
  return (
    <section className="loader">
      <img
        src={logo}
        alt="Nanda Kishore Ramavath from soft matter"
        className="logo"
      />
      <img src={illustration} alt="Soft Matter by nanda kishore's identity element" className="illustration" />

      {loaderSection === "home" ? (
        <div className="loader_content">
          <h1>Hey!</h1>
          <h3>So U R here!</h3>
          <p>
            Good to see U, I will be here in a moment - just hang on to the slow
            network
          </p>
        </div>
      ) : (
        <div className="loader_content">
          <h1>Hello again!</h1>
          <h3>Onto see my work huh?</h3>
          <p>
            Bet U will love it, just a sec - the network is being a bit slow.
            Also after u review.. do hit me up!
          </p>
        </div>
      )}
    </section>
  );
}

export default Loader;
