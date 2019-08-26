import React, { Component } from 'react';
import Slideshow from 'react-native-image-slider-show';

export default class SlideshowTest extends Component {
    constructor(props) {
      super(props);
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          {
            title: 'Otomotif',
            url: 'https://static.republika.co.id/uploads/images/inpicture_slide/mekanik-melakukan-perawatan-berkala-mobil-di-bengkel-honda-megatama-_140714165906-903.jpg',
          }, {
            title: 'Elektronik',
            url: 'http://www.digitalrighttorepair.org/wp-content/uploads/2019/02/Info-Biaya-Jasa-Perbaikan.jpg',
          }, {
            title: 'Builders',
            url: 'https://s.kaskus.id/r480x480/images/fjb/2018/03/23/jasa_tukang_cat_ahli_murah_malang_10097096_1521789531.png',
          },{
            title: 'Emergency',
            url: 'https://cdn2.tstatic.net/bali/foto/bank/images/tambal-ban_20151030_115010.jpg',
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 5000)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <Slideshow 
          overlay={true}
          height={160}
          arrowSize={12}
          titleStyle={{color:'white'}}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      );
    }
  }