import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Dropdown from 'react-dropdown';
import './App.css';

const baseUrl = 'http://localhost:5000/urls';

const filteredOptions = [  
    { value: '300 x 200', label: '300 x 200' },
    { value: '100 x 100', label: '100 x 100' },
    { value: '250 x 250', label: '250 x 250' },
    { value: '400 x 200', label: '400 x 200' },
    { value: '300 x 300', label: '300 x 300' },
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
    fetch(baseUrl)
      .then(res => res.json())
      .then(res => {
        // console.log('res: ', res);
        const urls = res;
        console.log('urls: ', urls)
        // let urlArr = []
        // res.map(url => {
        //   console.log('url.url: ', url.url)
        //   if (url.url.slice(-7) === '300/200') {
        //     urlArr.push(url)
        //   }
        //   console.log('urlArr: ', urlArr)
        //   this.setState({ sz300x200: urlArr })
        // })
        // console.log('this.state.sz300x200: ', this.state.sz300x200);

        // let sz300x200 = urls.filter(url => {
        //   return url.url.slice(-7) === '300/200'
        // })
        // let sz100x100 = urls.filter(url => {
        //   return url.url.slice(-7) === '100/100'
        // });
        // let sz250x250 = urls.filter(url => {
        //   return url.url.slice(-7) === '250/250'
        // });
        // let sz400x200 = urls.filter(url => {
        //   return url.url.slice(-7) === '400/200'
        // });
        // let sz300x300 = urls.filter(url => {
        //   return url.url.slice(-7) === '300/300'
        // });
        this.setState({ urls: urls });
      });
  }

  handleChange = () => e => {
    if (e.target.checked) {
      this.setState({ color: false })
    } else if (!e.target.checked) {
      this.setState({ color: true })
    }
  };

  filteredUrls = () => {
    let urlsArr = [];
    console.log('this.state.selectedFilter: ', this.state.selectedFilter)
    this.state.urls.filter(url => {
    if (this.state.selectedFilter === '300 x 200') {
      console.log('URL: ', url)
      urlsArr.push(url);
      this.setState({ urls: urlsArr })
      console.log('urlsArr: ', urlsArr)
    };
    if (this.state.selectedFilter === '100 x 100') {
      urlsArr.push(url);
      this.setState({ urls: urlsArr })
      console.log('urlsArr: ', urlsArr)    };
    if (this.state.selectedFilter === '250 x 250') {
      urlsArr.push(url);
      this.setState({ urls: urlsArr })
      console.log('urlsArr: ', urlsArr)    };
    if (this.state.selectedFilter === '400 x 200') {
      urlsArr.push(url);
      this.setState({ urls: urlsArr })
      console.log('urlsArr: ', urlsArr)    };
    if (this.state.selectedFilter === '300 x 300') {
      urlsArr.push(url);
      this.setState({ urls: urlsArr })
      console.log('urlsArr: ', urlsArr)    };
    return true;
  })};

  handleFilterSelect = (option) => {
    this.setState({ selectedFilter: option.value });
    this.filteredUrls();
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
          <Grid item xs={2} className='filter'>
            <Dropdown 
              options={filteredOptions} 
              onChange={this.handleFilterSelect && this.filteredUrls} 
              value={this.state.selectedFilter} 
              placeholder="Select an option" 

            />
          </Grid>
          <Grid item xs={2} id='toggle'>
            <span id='grayscale'>
              Grayscale
            </span>
            <Switch
              id='toggle'
              defaultChecked
              value="checkedF"
              color="default"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
              onClick={this.handleChange()}
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
                      <img key={key} src={this.state.urls[key].url} className='image' alt='image' />
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