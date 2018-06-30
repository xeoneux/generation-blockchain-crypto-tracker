import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main>
        <section class="jumbotron">
          <h1 class="jumbotron-heading">
            Generation Blockchain Crypto Tracker
          </h1>

          <p class="lead text-muted">Track your favourite cryptocurrencies</p>

          <div class="row">
            <ul>
              <li class="coin-item">
                <div class="coin-image">
                  <img
                    alt="Placeholder"
                    src="http://placeholder.pics/svg/300"
                  />
                </div>

                <div class="coin-name">
                  <p>BITCOIN</p>
                </div>

                <div class="coin-info">
                  <h4>$5914.68</h4>
                  <p>33 mins ago</p>
                </div>

                <div class="coin-rank">
                  <p>1</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
