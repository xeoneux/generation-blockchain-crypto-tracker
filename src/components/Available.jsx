import React from 'react';

class Available extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            {this.props.coins.map(coin => (
              <div
                key={coin.id}
                className="coin-select col-md-1"
                onClick={() => this.props.add(coin.id)}
              >
                <img
                  alt={coin.name}
                  src={require(`cryptocurrency-icons/dist/svg/color/${
                    coin.symbol
                  }.svg`)}
                />
                <p>{coin.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Available;
