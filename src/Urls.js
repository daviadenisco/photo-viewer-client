import React, { Component } from 'react';
// import Url from './Url';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Dropdown from 'react-dropdown';
import axios from 'axios';
import 'react-dropdown/style.css';

class Urls extends Component {
    state = {
        color: true,
    }

    // callAPI() {
    //     // fetch(baseUrl)
    //     axios.get(baseUrl)
    //       // .then(res => res.json())
    //       // .then(res => {
    //       //   console.log('RES[0]: ', res[0])
    //       //   console.log('CALLAPI this.state.color: ', this.state.color);
    //       //   this.setState({ apiResponse: res })
    //       // });
    //       .then((res) => {
    //         const urls = res.data;
    //         console.log('urls App.js: ', urls)
    //         let sz300x200 = urls.filter(url => {
    //           url.includes('300/200')
    //         });
    //         let sz100x100 = urls.filter(url => {
    //           url.inclues('100/100')
    //         });
    //         let sz250x250 = urls.filter(url => {
    //           url.inclues('250/250')
    //         });
    //         let sz400x200 = urls.filter(url => {
    //           url.inclues('400/200')
    //         });
    //         let sz300x300 = urls.filter(url => {
    //           url.inclues('300/300')
    //         });
    //         this.setState(urls);
    //       })
    //   }

    handleChange = () => e => {
        if (e.target.checked) {
          this.setState({ color: false })
        } else if (!e.target.checked) {
          this.setState({ color: true })
        }
    };

    render() {
        const { apiData } = this.props;
        console.log('URLS.JS: ', apiData)
        return (
            <div id='photos'>
                <div id='toggle'>
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
                </div>
                {/* <Url apiDataItem={apiData}/> */}
                <Grid container className="App" spacing={6}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={6}>
                            {Object.keys(apiData).map(key => (
                                <Grid key={key} item>

                                    {/* <Url key={key} apiDataItem={apiData[key]} /> */}
                                    <a 
                                        href={apiData[key].url}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <img key={key} src={apiData[key].url} className='image' />
                                    </a>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Urls;