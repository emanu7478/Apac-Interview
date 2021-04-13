import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  useWindowDimensions,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
import RNStatusBar from '../../components/RNStatusBar';
import RNButton from '../../components/RNButton';
import EmptyDataContainer from '../../components/EmptyDataContainer';
import * as constant from '../../constants';
import style from './style';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function Home(props) {
  const {width} = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [trips, updateTrips] = useState([]);
  // Initial Mounting
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Initial function when mounting
  const fetch = () => {
    let tempArr = [];
    props.trips.map((item) => {
      tempArr.push({data: item, expandStatus: false, selectedDetail: 'survey'});
    });
    updateTrips(tempArr);
    setLoading(false);
  };

  const onExpandItem = (item) => {
    let tempArr = [...trips];
    tempArr.map((data) => {
      if (item.data.id === data.data.id) {
        item.expandStatus = !item.expandStatus;
      }
    });
    updateTrips(tempArr);
  };

  const onChangeDetail = (item, status) => {
    let tempArr = [...trips];
    tempArr.map((data) => {
      if (item.data.id === data.data.id) {
        item.selectedDetail = status;
      }
    });
    updateTrips(tempArr);
  };

  const renderAppointments = ({item}) => {
    return (
      <View style={style.appointmentContainer}>
        <View style={{...style.centerAlign, flex: 3}}>
          <Text style={style.surveyDateText}>
            {new Date(item.date).getDate()}{' '}
            {months[new Date(item.date).getMonth()]}{' '}
            {new Date(item.date).getFullYear()}
            {'  '}
            {new Date(item.date).getHours()}
            {':'}
            {new Date(item.date).getMinutes()}
          </Text>
        </View>
        <View style={{...style.centerAlign, flex: 2}}>
          <Text
            style={{
              color:
                item.status === true
                  ? constant.LIME_GREEN
                  : constant.CHERRY_RED,
              fontSize: 10,
            }}>
            {item.status === true ? 'Accepted' : 'Customer Rejected'}
          </Text>
        </View>
        <View style={{...style.centerAlign, flex: 3}}>
          <TouchableHighlight>
            <Icon name="edit" type="feather" size={15} />
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const renderQuotations = ({item}) => {
    return (
      <View style={style.appointmentContainer}>
        <View style={{...style.centerAlign, flex: 3}}>
          <Text style={style.surveyDateText}>
            {new Date(item.date).getDate()}{' '}
            {months[new Date(item.date).getMonth()]}{' '}
            {new Date(item.date).getFullYear()}
            {'  '}
            {new Date(item.date).getHours()}
            {':'}
            {new Date(item.date).getMinutes()}
          </Text>
        </View>
        <View style={{...style.centerAlign, flex: 2}}>
          <Text
            style={{
              color:
                item.status === true
                  ? constant.LIME_GREEN
                  : constant.CHERRY_RED,
              fontSize: 10,
            }}>
            {item.status === true ? 'Accepted' : 'Customer Rejected'}
          </Text>
        </View>
        <View style={{...style.centerAlign, flex: 3}}>
          <TouchableHighlight>
            <Icon name="edit" type="feather" size={15} />
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const renderData = ({item}) => {
    return (
      <View style={{...style.wrapListContainer, width: width - 10}}>
        {item.expandStatus ? (
          <View>
            <View style={style.wrapListHeaderContainer}>
              <View style={style.wrapNameContainer}>
                <Icon
                  name="user-tie"
                  type="font-awesome-5"
                  size={15}
                  color={constant.SECONDARY_COLOR}
                  marginRight={2}
                />
                <View>
                  <Text style={style.wrapCustomerNameText}>
                    {item.data.name}
                  </Text>
                  <Text style={style.wrapCustomerText}>Customer Name</Text>
                </View>
              </View>
              <View style={style.wrapStatusContainer}>
                <View>
                  <View style={style.wrapAssignedContainer}>
                    <Text style={style.wrapAssignedText}>Not Assigned</Text>
                  </View>
                  <Text style={style.wrapAssignedStatusText}>Status</Text>
                </View>
              </View>
              <View style={style.wrapPlaceContainer}>
                <View style={style.placeInnerContainer}>
                  <Icon
                    name="radio-button-on-outline"
                    type="ionicon"
                    color="#36296e"
                    size={15}
                    marginRight={3}
                  />
                  <View style={style.placeInnerContainer}>
                    <Text style={style.wrapCityText}>
                      {item.data.from_place}
                    </Text>
                    <Text style={style.wrapCountryText}>
                      , {item.data.from_country}
                    </Text>
                  </View>
                </View>
                <Icon
                  name="ellipsis-vertical-outline"
                  type="ionicon"
                  size={10}
                  marginLeft={2}
                />
                <View style={style.placeInnerContainer}>
                  <Icon
                    name="radio-button-off-outline"
                    type="ionicon"
                    color="#36296e"
                    size={15}
                    marginRight={3}
                  />
                  <View style={style.placeInnerContainer}>
                    <Text style={style.wrapCityText}>{item.data.to_place}</Text>
                    <Text style={style.wrapCountryText}>
                      , {item.data.to_country}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableHighlight
                underlayColor="transparent"
                style={style.dropDownContainer}
                onPress={() => onExpandItem(item)}>
                <Icon
                  name="down"
                  type="antdesign"
                  size={15}
                  backgroundColor={constant.BACKGROUND_PRIMARY_COLOR}
                  padding={5}
                  borderRadius={30}
                />
              </TouchableHighlight>
            </View>
            <View>
              <View style={style.surveyTabsContainer}>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={{
                    ...style.tabContainer,
                    borderBottomWidth: item.selectedDetail === 'survey' ? 5 : 0,
                  }}
                  onPress={() => onChangeDetail(item, 'survey')}>
                  <Text
                    style={{
                      fontWeight:
                        item.selectedDetail === 'survey' ? 'bold' : '100',
                    }}>
                    Survey Appointments
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="transparent"
                  style={{
                    ...style.tabContainer,
                    borderBottomWidth:
                      item.selectedDetail === 'quotations' ? 5 : 0,
                  }}
                  onPress={() => onChangeDetail(item, 'quotations')}>
                  <Text
                    style={{
                      fontWeight:
                        item.selectedDetail === 'quotations' ? 'bold' : '100',
                    }}>
                    Customer Quotations
                  </Text>
                </TouchableHighlight>
              </View>
              {item.selectedDetail === 'survey' ? (
                <View style={style.surveyDetailsContainer}>
                  <View style={style.newAppointmentButtonContainer}>
                    <RNButton
                      title="Send New Appointment Request"
                      height={30}
                      fontSize={10}
                    />
                  </View>
                  <View style={style.surveyDetailsHeader}>
                    <View style={{...style.centerAlign, flex: 3}}>
                      <Text style={style.surveyDetailsHeaderText}>
                        Appointment Date & Time
                      </Text>
                    </View>
                    <View style={{...style.centerAlign, flex: 2}}>
                      <Text style={style.surveyDetailsHeaderText}>
                        Request Status
                      </Text>
                    </View>
                    <View style={{...style.centerAlign, flex: 3}}>
                      <Text style={style.surveyDetailsHeaderText}>
                        Log Survey Details
                      </Text>
                    </View>
                  </View>
                  {item.data.survey_appointments.length !== 0 ? (
                    <FlatList
                      data={item.data.survey_appointments}
                      renderItem={renderAppointments}
                      // keyExtractor={(data) => data.id.toString()}
                    />
                  ) : (
                    <View style={style.emptyData}>
                      <Text>No appointment available now</Text>
                    </View>
                  )}
                </View>
              ) : (
                <View>
                  {item.data.customer_quotation.length !== 0 ? (
                    <FlatList
                      data={item.data.customer_quotation}
                      renderItem={renderQuotations}
                      keyExtractor={(data) => data.id.toString()}
                    />
                  ) : (
                    <View style={style.emptyData}>
                      <Text>No quotation available now</Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>
        ) : (
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => onExpandItem(item)}>
            <View
              style={{
                ...style.verticalListContainer,
                width: item.expandStatus ? width - 50 : width - 10,
              }}>
              <View style={style.nameContainer}>
                <Icon
                  name="user-tie"
                  type="font-awesome-5"
                  color={constant.SECONDARY_COLOR}
                  marginRight={15}
                />
                <View>
                  <Text style={style.nameText}>{item.data.name}</Text>
                  <Text style={style.customerHeaderText}>Customer Name</Text>
                </View>
              </View>
              <View style={style.detailsContainer}>
                <View>
                  <View style={style.detailsInnerContainer}>
                    <Text style={style.requestIdText}>
                      {item.data.request_id}
                    </Text>
                    <Text style={style.customerHeaderText}>Request ID</Text>
                  </View>
                  <View>
                    <Text style={style.dataText}>LCL</Text>
                    <Text style={style.customerHeaderText}>Shipment Mode</Text>
                  </View>
                </View>
                <View>
                  <View style={style.detailsInnerContainer}>
                    <Text style={style.dataText}>
                      {new Date(item.data.moving_date).getDate()}{' '}
                      {months[new Date(item.data.moving_date).getMonth()]}{' '}
                      {new Date(item.data.moving_date).getFullYear()}
                    </Text>
                    <Text style={style.customerHeaderText}>Moving Date</Text>
                  </View>
                  <View>
                    <View style={style.statusContainer}>
                      <Text style={style.notAssignedText}>Not Assigned</Text>
                    </View>
                    <Text style={style.customerHeaderText}>Status</Text>
                  </View>
                </View>
              </View>
              <View style={{...style.placeContainer, width: width - 10}}>
                <View style={style.placeInnerContainer}>
                  <Icon
                    name="radio-button-on-outline"
                    type="ionicon"
                    color={constant.SECONDARY_COLOR}
                    size={20}
                    marginRight={10}
                  />
                  <View style={style.placeInnerContainer}>
                    <Text style={style.cityText}>{item.data.from_place}</Text>
                    <Text style={style.countryText}>
                      , {item.data.from_country}
                    </Text>
                  </View>
                </View>
                <Icon
                  name="ellipsis-vertical-outline"
                  type="ionicon"
                  size={15}
                  marginLeft={2}
                  color={constant.SECONDARY_COLOR}
                />
                <View style={style.placeInnerContainer}>
                  <Icon
                    name="radio-button-off-outline"
                    type="ionicon"
                    color={constant.SECONDARY_COLOR}
                    size={20}
                    marginRight={10}
                  />
                  <View style={style.placeInnerContainer}>
                    <Text style={style.cityText}>{item.data.to_place}</Text>
                    <Text style={style.countryText}>
                      , {item.data.to_country}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={style.documentContainer}>
                <Icon
                  name="ios-document-text-outline"
                  type="ionicon"
                  marginRight={10}
                  color={constant.BLUE_COLOR}
                />
                <Text style={style.documentsReqText}>Documents Required</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <RNStatusBar />
      <View style={style.container}>
        {loading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={style.wholeDataContainer}>
            {trips.length !== 0 ? (
              <FlatList
                contentContainerStyle={style.flatlistContentContainer}
                data={trips}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.data.id.toString()}
                renderItem={renderData}
              />
            ) : (
              <EmptyDataContainer
                image={require('../../assets/images/search.png')}
                title="Oh! Sorry. Empty Data"
                desc="No data is available now"
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const MapStateToProps = (state) => {
  return {
    trips: state.trips,
  };
};

export default connect(MapStateToProps)(Home);
