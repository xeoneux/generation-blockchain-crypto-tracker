import React from 'react';

import Data from '../data.json';
import Available from './Available';
import Favourites from './Favourites';

class App extends React.Component {
  state = {
    favourites: ['ethereum', 'stellar', 'bitcoin', 'ripple', 'monero']
  };

  addToFavourites = coinId => {
    this.setState({
      favourites: this.state.favourites.concat([coinId])
    });
  };

  removeFromFavourites = coinId => {
    this.setState({
      favourites: this.state.favourites.filter(
        favourite => favourite !== coinId
      )
    });
  };

  render() {
    const availableCoins = Data.filter(
      coin => !this.state.favourites.includes(coin.id)
    );

    const favouriteCoins = this.state.favourites.map(favourite =>
      Data.find(coin => coin.id === favourite)
    );

    return (
      <main>
        <Favourites coins={favouriteCoins} remove={this.removeFromFavourites} />
        <Available coins={availableCoins} add={this.addToFavourites} />
      </main>
    );
  }
}

export default App;
