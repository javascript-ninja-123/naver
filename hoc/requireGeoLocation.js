import React, {Component} from 'react';
import axios from 'axios';

const RequireGeoLocation = BaseComponent => {
  class RequireGoLocationClass extends Component{
    state = {
      latitude:'',
      longitude:'',
      count:0
    }
    componentDidMount(){
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
    componentDidUpdate(){
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    }
    success = ({coords}) => {
      const latitude  = coords.latitude;
      const longitude = coords.longitude;
      this.setState({
        latitude,
        longitude
      })
    }
    error = async () => {
        if(this.state.count == 0){
            const {data} = await axios.get('http://www.geoplugin.net/json.gp')
            const {geoplugin_latitude, geoplugin_longitude} = data;
            this.setState({
                latitude:Number(geoplugin_latitude),
                longitude:Number(geoplugin_longitude),
                count:1
            })
        }
        else{
            return;
        }
    }

    render(){
      return(
        <BaseComponent {...this.props} location={this.state}/>
      )
    }
  }

  return RequireGoLocationClass;
}

export default RequireGeoLocation
