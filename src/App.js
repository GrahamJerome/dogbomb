import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    fetch(`https://api.unsplash.com/search/photos?client_id=15bf48e3b6c618e86ba481c00d7ee8d1a2d69e9ab9402ed84299ea765a8d0d14&page=1&query=coffee`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ images: data })
      console.log(data)
    })
    .catch(console.log)
  }

  render () {
    return (
      <h2>Insert a Dog</h2>
    );
  }
}

export default App;
