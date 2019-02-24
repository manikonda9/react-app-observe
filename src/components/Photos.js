import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../actions';
import PhotoGrid from './PhotoGrid';

class Photos extends React.Component {
    render() {
        const {
            fetchPhotos,
            isLoading,
            error,
            photos
        } = this.props;
        return (
            <div className="App">
                <button onClick={fetchPhotos} style={{ color: 'white', cursor: 'pointer', fontSize: '1.5rem', borderRadius: '0.8rem', border: '0.2rem solid blue', backgroundColor: 'green', padding: '0.5rem', margin: '1rem' }}>Fetch photos</button>
                {isLoading && <h1>Fetching data</h1>}
                {!isLoading && !error && <PhotoGrid photos={photos} />}
                {error && <h1>{error}</h1>}
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchPhotos
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Photos);