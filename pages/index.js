import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Search} from '../components';
import {connect} from 'react-redux';
import {fetchSearchResult,removeSearchData} from '../actions';
import RequireGeoLocation from '../hoc/requireGeoLocation';
import NearestLocation from '../utils/geolocation'

const compose = (...fns) => x =>  fns.reduce((acc,fn) => fn(acc), x)

const HomeContainer = styled.div`
  display:flex;
  min-height:100vh;
  .home-container__second-comp{
    flex:1;
    position:relative;
     & > div {
       box-shadow: 0px 2px 4px #000000;
     }
    &--center-button{
      position:absolute;
      top:1.5rem;
      right:1.5rem;
      z-index:100;
      padding:.3rem;
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
    }
    &--zoomIn-button{
      position:absolute;
      top:6.91rem;
      right:1.5rem;
      z-index:100;
      padding:.3rem;
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      img{
        width:2.4rem;
        height:2.4rem;
      }
    }
    &--zoomOut-button{
      position:absolute;
      top:10rem;
      right:1.5rem;
      z-index:100;
      padding:.3rem;
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      img{
        transform: rotate(90deg);
        width:2.4rem;
        height:2.4rem;
      }
    }
    &--who{
      box-sizing:border-box;
      position:absolute;
      top:15rem;
      right:1.5rem;
      z-index:100;
      padding:.3rem;
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      color:#1EBEA5;
      font-size:0.8rem;
      font-weight:bold;
      width:3rem;
    }
    &--who-answer{
      box-sizing:border-box;
      position:absolute;
      top:16.5rem;
      width:3rem;
      right:1.5rem;
      z-index:100;
      padding:.3rem;
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      font-weight:bold;
      font-size:0.8rem;
      color:lightgrey;
    }
    &--search-container{
      width:15rem;
      height:4rem;
      position:absolute;
      top:0;
      left:0;
      z-index:100;
    }
  }
  @media (max-width: 70rem) {
    flex-direction:column-reverse;
    .home-container__second-comp{
      #map{
        width:100vw !important;
      }
    }
  }
`;






class Index extends Component{
  state = {
    zoom:10
  }
  map = null
  marker = null;
  infowindow = null;

  componentDidMount(){
    //replace with this.props.location.latitude , this.props.location.longitude
    const position = new naver.maps.LatLng(37.3595704, 127.105399)
    //create map
    var mapOptions = {
	   center: position,
	   zoom: 10,
     mapTypeId: naver.maps.MapTypeId.NORMAL
	  };
    this.map = new naver.maps.Map('map', mapOptions);
    //create a marker
    this.marker = new naver.maps.Marker({
        position: position,
        map: this.map,
        icon: {
          url: '/static/center.svg',
          origin: new naver.maps.Point(0, 0)
      },
      animation: naver.maps.Animation.BOUNCE
    });
  


    axios.get('https://s3.ap-northeast-2.amazonaws.com/misemise-fine-dust-data/current-data/map-data/data.json')
    .then(({data}) => {
      const realData = data['data']
      //fetch the nearest station for dust data
      //replace with this.props.location.latitude , this.props.location.longitude
      const nearbyStation = NearestLocation(37.3595704, 127.105399 ,Object.values(realData))
      //create a info view
          var contentString = [
            '<div class="info_window">',
            '<div class="first-wrapper">',
            '<img src="/static/happy.svg">',
            "<div class='first-text-wrapper'>",
            ` <p>${nearbyStation.stationName}</p>`,
            ` <h3>좋음</h3>`,
            '</div>',
            '</div>',
            '<div class="second-wrapper">',
            '<p>mise dusty</p>',
            '<p>good 12 </p>',
            "</div>",
            '</div>'
        ].join('');
  
      this.infowindow = new naver.maps.InfoWindow({
        content: contentString,
        backgroundColor:"#0277BD",
        disableAnchor: true,
        borderWidth:"0",
        pixelOffset: new naver.maps.Point(0, -10)
      });
      this.infowindow.open(this.map, this.marker)
      
      Object.values(realData).forEach(value => {
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(value.latitude, value.longitude),
            map: this.map
        });

      })
    })



  }

  onCenter = () => {
    const center = new naver.maps.LatLng(37.3595704, 127.105399)
    this.map.setZoom(10, true);
    this.map.panTo(center)
  }
  componentDidUpdate(prevProp){
    if(this.props.location !== prevProp.location && Object.keys(this.props.location).length > 0){
      if(this.props.location.error !== ''){

      }
      else{
        const {latitude, longitude} =this.props.location
        const location = new naver.maps.LatLng(latitude, longitude);
        // this.map.setCenter(location);
        // this.map.setZoom(10);
      }
    }
  }

  onChange = searchText => {
    this.props.fetchSearchResult(searchText);
  }
  moveCenter = (lat,lng) => {
    const center = new naver.maps.LatLng(lat, lng)
      this.map.setZoom(10, true);
    this.map.panTo(center)
    this.props.removeSearchData()
  }
  onZoomIn = () => {
    this.setState({zoom: this.state.zoom + 1}, () => {
      this.map.setZoom(this.state.zoom, true);
    })
 
  }
  onZoomOut = () => {
    this.setState({zoom: this.state.zoom - 1}, () => {
      this.map.setZoom(this.state.zoom, true);
    })
  }
  render(){
    console.log(this.props.location)
      return(
        <HomeContainer>
            <div className="home-container__second-comp">
              <div className="home-container__second-comp--center-button" onClick={this.onCenter}>
                <img src='/static/mylocation.svg' alt='my-location'/>
              </div>
              <div className="home-container__second-comp--zoomIn-button" onClick={this.onZoomIn}>
                <img src='/static/zoomIn.svg' alt='zoom-in'/>
              </div>
              <div className="home-container__second-comp--zoomOut-button" onClick={this.onZoomOut}>
                <img src='/static/zoomOut.svg' alt='zoom-out'/>
              </div>
              <div className="home-container__second-comp--who">
                WHO
              </div>
              <div className="home-container__second-comp--who-answer">
                한국
              </div>
              <div className='home-container__second-comp--search-container'>
                <Search onChange={this.onChange} searchData={this.props.searchData} error={this.props.error} moveCenter={this.moveCenter}/>
              </div>
              <div id='map' style={{width:`100vw`, minHeight:'100vh'}}></div>
            </div>
        </HomeContainer>
      )
  }
}

const mapStateToProps = ({search}) => {
  const {searchData,error} = search
  return {
    searchData,
    error
  }
}


export default compose(
  connect(mapStateToProps, {fetchSearchResult,removeSearchData}),
  RequireGeoLocation
)(Index);
