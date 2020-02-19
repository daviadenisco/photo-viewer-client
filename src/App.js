import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Dropdown from 'react-dropdown';
import './App.css';

const baseUrl = 'http://localhost:5000/urls';

const filteredOptions = [  
    { value: '300/200', label: '300 x 200' },
    { value: '100/100', label: '100 x 100' },
    { value: '250/250', label: '250 x 250' },
    { value: '400/200', label: '400 x 200' },
    { value: '300/300', label: '300 x 300' },
    { value: 'viewAll', label: 'View All'}
  ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: null,
      color: true,
      selectedFilter: 'viewAll',
    };
  }

  callAPI() {
    fetch(baseUrl+`?dimension=${this.state.selectedFilter}`)
      .then(res => res.json())
      .then(res => {
        const urls = res;
        this.setState({ urls: urls });
      });
  }

  handleChange = () => e => {
    this.setState({ color: e.target.checked })
  };

  handleFilterSelect = (option) => {
    this.setState({ selectedFilter: option.value }, ()=>{
      this.callAPI();
    });
  };

  componentDidMount() {
    this.callAPI();
  }

  render () {
    if (!this.state.urls) return <p>Loading...</p>
    console.log('SELECTED FILTER', this.state.selectedFilter)
    return (
      <div className="App">
        <div id='header-title'>
          <div id='header-image-div'>
            <img src={require('./FAVPNG_cartoon-camera-svg_kAH5YXE5.png')} alt='camera' />
          </div>
          <div id='header-h1-div'>
            <h1>Photo Viewer</h1> 
          </div>
        </div>
        <div id='photos'>
          <Grid container className='actions'>
            <div className='filter-title'>Filter by dimensions: </div>
          <Grid item xs={2} className='filter'>
            <Dropdown 
              options={filteredOptions} 
              onChange={(e) => this.handleFilterSelect(e)} 
              value={this.state.selectedFilter} 
              placeholder="Select an option" 
            />
          </Grid>
          <Grid item xs={3} id='toggle'>
          <span id='grayscale'>
              Grayscale
            </span>
            <Switch
              id='toggle'
              defaultChecked
              checked={this.state.color}
              value="checkedF"
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
              onChange={this.handleChange()}
            />
            <span id='color'>
              Color
            </span>
          </Grid>
          </Grid>
          <Grid container className="App" spacing={6}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={6}>
                {Object.keys(this.state.urls).map(key => (
                  <Grid key={key} item>
                    <a 
                      href={this.state.urls[key].url}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <img key={key} src={this.state.urls[key].url+(this.state.color ? '' : '?grayscale')} className='image' alt='image' />
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;