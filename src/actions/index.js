export const FETCH_WHISKIES = 'FETCH_WHISKYS';
export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';
export const FETCH_PHOTOS ='FETCH_PHOTOS';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchWhiskies = () => ({
    type: FETCH_WHISKIES,
});

export const fetchWhiskiesSuccess = (whiskies) => ({
    type: FETCH_WHISKIES_SUCCESS,
    payload: whiskies
});

export const fetchWhiskiesFailure = (message) => ({
    type: FETCH_WHISKIES_FAILURE,
    payload: message
});

export const fetchPhotos = () => ({
    type: FETCH_PHOTOS
});

export const fetchPhotosSuccess = ( photos ) => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload : photos
});

export const fetchPhotosFailure = (message) => ({
    type: FETCH_PHOTOS_FAILURE
});