import React, {Component} from 'react';
import * as UnsplashAPI from './UnsplashAPI'
import './App.css';

class App extends Component {
  // Sets a default values on first load.
  state = {
    dogImageUrl: 'https://i.imgur.com/8d7y9fp.png',
    imageQuery: 'family'
  }

  // Fire up the first random image on component mount.
  componentDidMount() {
    document.body.querySelector('.dog-bomb').style.backgroundImage = `url(${this.state.dogImageUrl})`
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

  updateDogImage = (url = this.state.dogImageUrl) => {
    document.body.querySelector('.dog-bomb').style.backgroundImage = `url(${this.state.dogImageUrl})`
  }

  // When a search is triggered, it triggers an update of the background and dog image.
  // I have allowed the same query to be searched multiple times as it
  // will probably produce different results each query.
  handleSearchSubmit = (event) => {
    event.preventDefault();

    let imageQuery = document.body.querySelector("input[name='image-query']").value
    this.setState({imageQuery: imageQuery})
    this.updateBgImage()

    let dogImageUrl = document.body.querySelector("input[name='dog-image-url']").value
    if (dogImageUrl !== this.state.dogImageUrl) {
      this.setState({dogImageUrl: dogImageUrl})
      this.updateDogImage()
    }
  }

  // Update the imageQuery state value as the user types.
  handleQueryChange = (event) => {
    this.setState({imageSearchValue: event.target.value})
  }

  render () {
    return (
      <div>
        <form className="dog-bomb-search form-inline p-3 bg-white" onSubmit={this.handleSearchSubmit}>
          <div className="form-group mb-2 mb-md-0">
            <label for="dog-image-url">Dog Image Url</label>
            <input type="url" className="form-control mx-3" name="dog-image-url" value={this.state.dogImageUrl} placeholder="Dog image url" />
          </div>
          <div className="form-group mb-2 mb-md-0">
            <label for="image-query">Category</label>
            <input type="text" className="form-control mx-3" name="image-query" value={this.state.imageQuery} placeholder="Image category" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Bombs away!</button>
        </form>
        <div className='dog-bomb'></div>
      </div>
    );
  }
}

export default App;
