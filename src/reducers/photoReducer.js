import {
    FETCH_PHOTOS,
    FETCH_PHOTOS_FAILURE,
    FETCH_PHOTOS_SUCCESS
} from '../actions';

const initialState = {
    photos: [],
    isLoading: false,
    error: null
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHOTOS:
            return {
                ...state,
                // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
                isLoading: true,
                error: null
            };
        case FETCH_PHOTOS_SUCCESS:
            return {
                photos: [...action.payload],
                // whenever the fetching finishes, we stop showing the spinner and then show the data
                isLoading: false,
                error: null
            };
        case FETCH_PHOTOS_FAILURE:
            return {
                photos: [],
                isLoading: false,
                // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
                error: action.payload
            };
        default:
            return state;
    }
}

export default photoReducer;