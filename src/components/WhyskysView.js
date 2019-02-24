import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWhiskies } from '../actions';
import WhiskyGrid from './WhiskyGrid';

class WhyskysView extends Component {
  render() {
    const {
      isLoading,
      error,
      whiskies
    } = this.props.whyskies;
    const { fetchWhiskies } = this.props.fetchWhiskies;
    console.log(this.props.fetchWhiskies)
    return (
      <div className="App">
        <button onClick={fetchWhiskies} style={{color:'white',cursor:'pointer',fontSize:'1.5rem',borderRadius:'0.8rem',border:'0.2rem solid blue',backgroundColor:'green',padding:'0.5rem',margin:'1rem'}}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    whyskies : state.whysky
  }
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      fetchWhiskies
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WhyskysView);