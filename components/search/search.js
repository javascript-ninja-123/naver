import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const SearchContainer = styled.div`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    .subtle-enter {
      opacity: 0.01;
    }

    .subtle-enter.subtle-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }

    .subtle-leave {
      opacity: 1;
    }

    .subtle-leave.subtle-leave-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }
  `,
  InputContainer = styled.div`
    display: flex;
    width: 419px;
    height: 51px;
    position: relative;
    div:first-child {
      background-color: #1ebea5;
      flex: 0 0 79px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      caret-color: #1ebea5;
      flex: 1;
      font-size: 2rem;
      padding-left: 1rem;
    }
    input + img {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  `,
  StyledInput = styled.input`
    box-sizing: border-box;
    padding: 0 0.5rem;
    border: 2px solid #1ebea5;
    :focus {
      outline: none;
    }
  `,
  StyledSearchResult = styled.ul`
    display: ${({ display }) => (display ? 'block' : 'none')};
    box-sizing: border-box;
    width: 340px;
    list-style: none;
    padding: 1rem 1.5rem;
    background-color: white;
    border: 2px solid #1ebea5;
    margin: 0;
    margin-left: 79px;
    li {
      padding: 1rem 0;
      cursor: pointer;
      p {
        padding: 0 !important;
        color: #d8d8d8;
        font-size: 1rem;
        margin-left: 1.9rem;
        margin-top: 0;
        margin-bottom: 0;
      }
      div {
        display: flex;
        align-items: center;
        justfiy-content: flex-start;
        p {
          font-size: 1.2rem;
          color: black;
          margin-left: 0.8rem;
        }
      }
    }
  `,
  StyledLi = styled.li`
    background-color: ${({ hover }) => (hover ? 'rgba(30,190,165,.3)' : '')};
  `,
  SearchLoadingContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    min-height:100vh;
    background-color:white;
    z-index:10000;
  `

class Search extends PureComponent {
  state = {
    searchText: '',
    index: -1
  };
  cache = new Map();
  componentWillUnmount() {
    this.cache.clear();
  }

  onChange = ({ target }) => {
    this.setState({ searchText: target.value }, () => {
      this.props.onChange(this.state.searchText);
    });
  };


  getCachedClickHanlder = (...args) => {
    const jsonStringified = JSON.stringify(args);
    const cached = this.cache.get(jsonStringified);
    if (cached !== undefined) {
      console.log('from caache');
      return cached;
    } else {
      const a = () => {
        this.setState({ searchText: '', index: -1 }, () => {
          this.props.updateZoom();
          this.props.reset()
          this.props.moveCenter(args[0], args[1]);
        });
      };
      this.cache.set(jsonStringified, a);
      return a;
    }
  };

  onKeyDown =  e => {
    if (this.props.searchData.length > 0) {
      if (e.keyCode === 13) {

      this.props.updateZoom();
      this.props.reset()
        const value = this.props.searchData[this.state.index];
        this.getCachedClickHanlder(
          value['renderInNaver']['latitude'],
          value['renderInNaver']['longitude']
        )();
      } else if (e.keyCode === 40) {
        if (this.state.index !== this.props.searchData.length - 1) {
          this.setState({ index: this.state.index + 1 });
        }
      } else if (e.keyCode === 38) {
        if (this.state.index !== 0) {
          this.setState({ index: this.state.index - 1 });
        }
      }
    }
  };

  onClick = () => {
    if (this.props.searchData.length > 0) {
  
      this.props.updateZoom();
      this.props.reset()
      const finalIndex = this.state.index === -1 ? 0 : this.state.index;
      const value = this.props.searchData[finalIndex];
      this.getCachedClickHanlder(
        value['renderInNaver']['latitude'],
        value['renderInNaver']['longitude']
      )();

    }
  };

  renderList = () => {
    if (this.state.searchText.trim() === '') {
      return;
    } else if (this.props.error !== null) {
      return (
        <StyledSearchResult display={this.props.error !== null}>
          {<li>{this.props.error.message}</li>}
        </StyledSearchResult>
      );
    } else {
      return (
        <StyledSearchResult display={this.props.searchData.length > 0}>
          {this.props.searchData.map((value, i) => {
            return (
              <StyledLi
                key={i}
                hover={this.state.index === i}
                onClick={this.getCachedClickHanlder(
                  value['renderInNaver']['latitude'],
                  value['renderInNaver']['longitude']
                )}
              >
                <div>
                  <img src="/static/pin.svg" alt="pin-image" />
                  <p>{value.name}</p>
                </div>
                <p>{value.jibun_address}</p>
              </StyledLi>
            );
          })}
        </StyledSearchResult>
      );
    }
  };

  render() {
    return (
      <SearchContainer>
        <InputContainer>
          <div>
            <img src="/static/logo.svg" alt="logo-image" />
          </div>
          <StyledInput
            type="text"
            name="searchText"
            onChange={this.onChange}
            value={this.state.searchText}
            onKeyDown={this.onKeyDown}
          />
          <img
            src="/static/search.svg"
            alt="search-image"
            onClick={this.onClick}
          />
        </InputContainer>
        <ReactCSSTransitionGroup
          transitionName="subtle"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.renderList()}
        </ReactCSSTransitionGroup>
      </SearchContainer>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchData: PropTypes.array.isRequired,
  moveCenter: PropTypes.func.isRequired,
  error: PropTypes.object,
  reset:PropTypes.func.isRequired,
  updateZoom:PropTypes.func.isRequired
};

export default Search;
