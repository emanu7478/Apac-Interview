import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import * as constant from './constants';
import AppNavigator from './navigation';
import {fetchAllTrips} from './redux/trip/tripActions';

function ApacIndex(props) {
  // Initial Page Fetch
  useEffect(() => {
    props.fetchAllRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.isLoading) {
    return (
      <View style={style.container}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return <AppNavigator />;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllRestaurants: () => dispatch(fetchAllTrips()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApacIndex);
