import React, {Component} from 'react';
import * as UnsplashAPI from './UnsplashAPI'
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    UnsplashAPI.getRandom()
      .then( data => {
        console.log(data)
        let imageUrl = data.urls.small
        this.updateBgImage(imageUrl)
      })
  }

  updateBgImage = (imageUrl) => {
    document.body.style.backgroundImage = `url(${imageUrl})`
  }

  render () {
    return (
      <div>

        <div className='cody-bomb'></div>
      </div>
    );
  }
}

export default App;
