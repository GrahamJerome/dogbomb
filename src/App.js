import React, {Component} from 'react';
import * as UnsplashAPI from './UnsplashAPI'
import './App.css';

class App extends Component {
  // Sets a default value on imageQuery for first load.
  state = {
    imageQuery: 'family'
  }

  // Fire up the first random image on component mount.
  componentDidMount() {
    this.updateBgImage()
  }

  // Use the UnsplashAPI to query the random image, return the image url,
  // and adjusts the body background image style tag.
  updateBgImage = (query = this.state.imageQuery) => {
    UnsplashAPI.getRandom(query)
      .then(imageUrl => {
        document.body.style.backgroundImage = `url(${imageUrl})`
      })
      .catch(err => console.log(err))
  }

  // When a search is triggered, it triggers an update of the background image.
  // I have allowed the same query to be searched multiple times as it
  // will probably produce different results each query.
  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.updateBgImage(this.state.imageQuery)
  }

  // Update the imageQuery state value as the user types.
  handleChange = (event) => {
    this.setState({imageSearchValue: event.target.value})
  }

  render () {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSearchSubmit}>
          <div className="row p-3">
            <input type="text" className="form-control form-control-lg col-4" onChange={this.handleChange} name="image-query" placeholder="Enter a category ..." />
            <input type="submit" className="btn btn-primary ml-3" value="Bomb!" />
          </div>
        </form>
        <div className='cody-bomb'></div>
      </div>
    );
  }
}

export default App;
