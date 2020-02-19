import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

class Url extends Component {

    render() {
        const { apiDataItem } = this.props;
        console.log('apiDataItem: ', apiDataItem);
        console.log('URL: ', apiDataItem.url);
        // this.state.apiDataItemUrl = apiDataItem.url.split('/');
        // console.log('this.state.apiDataItemUrl: ', this.state.apiDataItemUrl);
        // this.state.id = this.state.apiDataItemUrl[4];
        // console.log('this.state.id: ', this.state.id);
        // this.state.width = this.state.apiDataItemUrl[5];
        // console.log('this.state.width: ', this.state.width);
        // this.state.height = this.state.apiDataItemUrl[6];
        // console.log('this.state.height: ', this.state.height);

        return (
            <div>
                <a 
                    href={apiDataItem.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        className='image'
                        src={apiDataItem.url} 
                    />
                </a>
            </div>
        )
    }
}

export default Url;