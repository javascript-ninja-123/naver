import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  render() {
    return (
      <Fragment>
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
        <div
          className="home-container__second-comp--who"
          onClick={this.onClickWho}
        >
          WHO
        </div>
        <div
          className="home-container__second-comp--who-answer"
          onClick={this.onClickKorea}
        >
          한국
        </div>
      </Fragment>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchData: PropTypes.array.isRequired,
  moveCenter: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default Search;
