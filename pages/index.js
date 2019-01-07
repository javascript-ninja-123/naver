import React, { Component, Fragment } from 'react';
import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import { Search } from '../components';
import { connect } from 'react-redux';
import { fetchSearchResult, removeSearchData } from '../actions';
import RequireGeoLocation from '../hoc/requireGeoLocation';
import NearestLocation from '../utils/geolocation';
import { compose } from '../utils';
import $ from 'jquery';
import { HomeContainer,StandardContaienr } from '../styles';

let CustomOverlay;

class Index extends Component {
  state = {
    zoom: 10,
    realData: [],
    standard:'who'
  };
  map = null;
  marker = null;
  infowindow = null;

  componentDidMount() {
    let position = new naver.maps.LatLng(37.3595704, 127.105399);
    if (publicRuntimeConfig.mode === 'production') {
      position = new naver.maps.LatLng(
        this.props.location.latitude,
        this.props.location.longitude
      );
    }
    //create map
    var mapOptions = {
      center: position,
      zoom: 10,
      mapTypeId: naver.maps.MapTypeId.NORMAL,
      draggable: true,
      scrollWheel: false,
      keyboardShortcuts: false,
      disableDoubleTapZoom: false,
      disableDoubleClickZoom: false,
      disableTwoFingerTapZoom: false,
      //zoom from naver
      //   zoomControl: true,
      // zoomControlOptions: {
      //   style: naver.maps.ZoomControlStyle.LARGE,
      //   position: naver.maps.Position.TOP_RIGHT
      // }
    };
    this.map = new naver.maps.Map('map', mapOptions);
    //create a marker
    this.marker = new naver.maps.Marker({
      position: position,
      map: this.map,
      icon: {
        url: '/static/center.svg',
        origin: new naver.maps.Point(0, 0),
      },
      animation: naver.maps.Animation.BOUNCE,
    });
    this.fetchData();
  }

  reset = () => {
    Object.values(this.state.realData).forEach((value, i) => {
      if(this.state[i] !== undefined && this.state[i + 'overlay'] !== undefined){
        this.state[i + 'overlay'].setMap(null)
        this.state[i].setMap(null)
      }
      this.setState({
        [i + 'overlay']: new CustomOverlay(null,{
          position: new naver.maps.LatLng(
            value.latitude,
            value.longitude
          ),
          map: this.map,
        }),
      });

      this.setState(
        {
          [i]: new naver.maps.Marker({
            position: new naver.maps.LatLng(
              value.latitude,
              value.longitude
            ),
            map: this.map,
            icon: {
              url: '/static/good.png',
              origin: new naver.maps.Point(0, 0),
            },
          }),
        },
        () => {
          naver.maps.Event.addListener(this.state[i], 'click', e => {
            this.state[i + 'overlay'].setMap(null);
            const element = $(
              `
                <div class="overlay">
                  this is clicked
                </div>
              `
            );
            console.log('clicked')
            this.setState({
              [i + 'overlay']: new CustomOverlay(element,{
                position: new naver.maps.LatLng(
                  value.latitude,
                  value.longitude
                ),
                map: this.map,
              })
            })
          });
        }
      );
    });
  }


  fetchData = async () => {
    console.log('called')
    axios
      .get(
        'https://s3.ap-northeast-2.amazonaws.com/misemise-fine-dust-data/current-data/map-data/data.json'
      )
      .then(({ data }) => {
        const realData = data['data'];
        let nearbyStation = NearestLocation(
          37.3595704,
          127.105399,
          Object.values(realData)
        );
        if (publicRuntimeConfig.mode === 'production') {
          nearbyStation = NearestLocation(
            this.props.location.latitude,
            this.props.location.longitude,
            Object.values(realData)
          );
        }

        // //create a info view
        // var contentString = [
        //   '<div class="info_window">',
        //   '<div class="first-wrapper">',
        //   '<img src="/static/happy.svg">',
        //   "<div class='first-text-wrapper'>",
        //   ` <p>${nearbyStation.stationName}</p>`,
        //   ` <h3>좋음</h3>`,
        //   '</div>',
        //   '</div>',
        //   '<div class="second-wrapper">',
        //   '<p>mise dusty</p>',
        //   '<p>good 12 </p>',
        //   '</div>',
        //   '</div>',
        // ].join('');

        // this.infowindow = new naver.maps.InfoWindow({
        //   content: contentString,
        //   backgroundColor: '#0277BD',
        //   disableAnchor: true,
        //   borderWidth: '0',
        //   pixelOffset: new naver.maps.Point(0, -10),
        // });
        // // this.infowindow.open(this.map, this.marker)

        CustomOverlay = function(element = null, options) {
          if(element == null){
            this._element = $(
              `
                <div class="overlay">
                  this is not clicked yet
                </div>
              `
            );
          }else{
            this._element = element;
          }
       

          this.setPosition(options.position);
          this.setMap(options.map || null);
        };
        CustomOverlay.prototype = new naver.maps.OverlayView();

        CustomOverlay.prototype.constructor = CustomOverlay;
        CustomOverlay.prototype.setPosition = function(position) {
          this._position = position;
          this.draw();
        };
        CustomOverlay.prototype.getPosition = function() {
          return this._position;
        };
        CustomOverlay.prototype.onAdd = function() {
          var overlayLayer = this.getPanes().overlayLayer;

          this._element.appendTo(overlayLayer);
        };
        CustomOverlay.prototype.onRemove = function() {
          this._element.remove();

          // 이벤트 핸들러를 설정했다면 정리합니다.
          this._element.off();
        };
        CustomOverlay.prototype.draw = function() {
          // 지도 객체가 설정되지 않았으면 draw 기능을 하지 않습니다.
          if (!this.getMap()) {
            return;
          }

          // projection 객체를 통해 LatLng 좌표를 화면 좌표로 변경합니다.
          var projection = this.getProjection(),
            position = this.getPosition();

          var pixelPosition = projection.fromCoordToOffset(position);

          this._element.css('left', pixelPosition.x);
          this._element.css('top', pixelPosition.y);
        };

        this.setState({ realData }, () => {
          Object.values(realData).forEach((value, i) => {
            if(this.state[i] !== undefined && this.state[i + 'overlay'] !== undefined){
              this.state[i + 'overlay'].setMap(null)
              this.state[i].setMap(null)
            }
            this.setState({
              [i + 'overlay']: new CustomOverlay(null,{
                position: new naver.maps.LatLng(
                  value.latitude,
                  value.longitude
                ),
                map: this.map,
              }),
            });

            this.setState(
              {
                [i]: new naver.maps.Marker({
                  position: new naver.maps.LatLng(
                    value.latitude,
                    value.longitude
                  ),
                  map: this.map,
                  icon: {
                    url: '/static/good.png',
                    origin: new naver.maps.Point(0, 0),
                  },
                }),
              },
              () => {
                naver.maps.Event.addListener(this.state[i], 'click', e => {
                  this.state[i + 'overlay'].setMap(null);
                  const element = $(
                    `
                      <div class="overlay">
                        this is clicked
                      </div>
                    `
                  );
                  console.log('clicked')
                  this.setState({
                    [i + 'overlay']: new CustomOverlay(element,{
                      position: new naver.maps.LatLng(
                        value.latitude,
                        value.longitude
                      ),
                      map: this.map,
                    })
                  })
                });
              }
            );
          });
        });
      });
  };

  onCenter = () => {
    const center = new naver.maps.LatLng(37.3595704, 127.105399);
    this.map.setZoom(10, true);
    this.map.panTo(center);
    Object.values(this.state.realData).map((value, i) => {
      this.state[i].setMap(null);
      this.state[i + 'overlay'].setMap(null);
    });
    this.setState({ zoom: 10 }, () => {
      this.fetchData();
    });
  };

  onChange = searchText => {
    this.props.fetchSearchResult(searchText);
  };
  moveCenter = (lat, lng) => {
    const center = new naver.maps.LatLng(lat, lng);
    this.map.setZoom(10, true);
    this.map.panTo(center);
    this.props.removeSearchData();
  };
  onZoomIn = () => {
    this.setState({ zoom: this.state.zoom + 1 }, () => {
      if (this.state.zoom === 8) {
        Object.values(this.state.realData).forEach((value, i) => {
          this.state[i].setMap(null);
          this.setState({
            [i + 'overlay']: new CustomOverlay(null,{
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: this.map,
            }),
          });
          this.setState({
            [i]: new naver.maps.Marker({
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: this.map,
              icon: {
                url: '/static/good.png',
                origin: new naver.maps.Point(0, 0),
              },
            }),
          }, () => {
            naver.maps.Event.addListener(this.state[i], 'click', e => {
              this.state[i + 'overlay'].setMap(null);
              const element = $(
                `
                  <div class="overlay">
                    this is not clicked
                  </div>
                `
              );
              console.log('clicked')
              this.setState({
                [i + 'overlay']: new CustomOverlay(element,{
                  position: new naver.maps.LatLng(
                    value.latitude,
                    value.longitude
                  ),
                  map: this.map,
                })
              })
            })
          });
        });
      }
      this.map.setZoom(this.state.zoom, true);
    });
  };
  onZoomOut = () => {
    this.setState({ zoom: this.state.zoom - 1 }, () => {
      if (this.state.zoom === 5) {
        Object.values(this.state.realData).forEach((value, i) => {
            this.state[i + 'overlay'].setMap(null);
            this.state[i].setMap(null);
          this.setState({
            [i]: new naver.maps.Marker({
              position: new naver.maps.LatLng(value.latitude, value.longitude),
              map: this.map,
              icon: {
                url: '/static/bad.png',
                origin: new naver.maps.Point(0, 0),
              },
            }),
          });
        });
      }
      this.map.setZoom(this.state.zoom, true);
    });
  };

  onClickWho = () => {
    this.setState({standard:'who'})
  };

  onClickKorea = () => {
    this.setState({standard:'korea'})
  };

  updateZoom = () => {this.setState({zoom:10})}

  render() {
    return (
      <HomeContainer>
        <div className="home-container__second-comp">
          <div
            className="home-container__second-comp--center-button"
            onClick={this.onCenter}
          >
            <img src="/static/mylocation.svg" alt="my-location" />
          </div>
          <div
            className="home-container__second-comp--zoomIn-button"
            onClick={this.onZoomIn}
          >
            <img src="/static/zoomIn.svg" alt="zoom-in" />
          </div>
          <div
            className="home-container__second-comp--zoomOut-button"
            onClick={this.onZoomOut}
          >
            <img src="/static/zoomOut.svg" alt="zoom-out" />
          </div>
          <StandardContaienr
            className="home-container__second-comp--who"
            onClick={this.onClickWho}
            standard={this.state.standard === 'who'}
          >
            WHO
          </StandardContaienr>
          <StandardContaienr
            className="home-container__second-comp--who-answer"
            onClick={this.onClickKorea}
            standard={this.state.standard === "korea"}
          >
            한국
          </StandardContaienr>
          <div className="home-container__second-comp--search-container">
            <Search
              onChange={this.onChange}
              searchData={this.props.searchData}
              error={this.props.error}
              moveCenter={this.moveCenter}
              reset={this.reset}
              updateZoom={this.updateZoom}
            />
          </div>
          <div id="map" style={{ width: `100vw`, minHeight: '100vh' }} />
        </div>
      </HomeContainer>
    );
  }
}

const mapStateToProps = ({ search }) => {
  const { searchData, error } = search;
  return {
    searchData,
    error,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { fetchSearchResult, removeSearchData }
  ),
  RequireGeoLocation
)(Index);
