import React from 'react';

class Favourites extends React.Component {
  render() {
    return (
      <section className="jumbotron">
        <h1 className="jumbotron-heading">
          Generation Blockchain Crypto Tracker
        </h1>

        <p className="lead text-muted">Track your favourite cryptocurrencies</p>

        <div className="row">
          <ul>
            {this.props.coins.map(coin => (
              <li key={coin.id} className="coin-item">
                <div className="coin-image">
                  <div
                    className="coin-remove"
                    onClick={() => this.props.remove(coin.id)}
                  />
                  <img
                    alt={coin.name}
                    src={require(`cryptocurrency-icons/dist/svg/color/${
                      coin.symbol
                    }.svg`)}
                  />
                </div>

                <div className="coin-name">
                  <p>{coin.name}</p>
                </div>

                <div className="coin-info">
                  <h4>${coin.price_usd}</h4>
                  <p>{coin.price_btc}</p>
                </div>

                <div className="coin-rank">
                  <p>{coin.rank}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Favourites;
