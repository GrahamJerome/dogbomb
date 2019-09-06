import React, {Component} from 'react';
import * as UnsplashAPI from './UnsplashAPI'
import './App.css';

class App extends Component {
  state = {
    imageCategory: 'family',
    imageSearchValue: null
  }
  componentDidMount() {
    this.updateBgImage()
  }

  updateBgImage = (category = this.state.imageCategory) => {
    UnsplashAPI.getRandom(category)
      .then(imageUrl => {
        document.body.style.backgroundImage = `url(${imageUrl})`
      })
      .catch(err => console.log(err))
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.updateBgImage(this.state.imageSearchValue)
  }

  handleChange = (event) => {
    this.setState({imageSearchValue: event.target.value})
  }

  render () {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSearchSubmit}>
          <div className="row p-3">
            <input type="text" className="form-control form-control-lg col-4" onChange={this.handleChange} name="image-category" placeholder="Enter a category ..." />
            <input type="submit" className="btn btn-primary ml-3" value="Bomb!" />
          </div>
        </form>
        <div className='cody-bomb'></div>
      </div>
    );
  }
}

export default App;
