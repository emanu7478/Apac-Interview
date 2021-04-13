export const fetchAllTrips = () => {
  return async function (dispatch) {
    try {
      let data = require('../../assets/json/trip.json');
      dispatch({type: 'FETCH_ALL_TRIPS', payload: data.trips});
    } catch (err) {
      console.log(err);
    }
  };
};
