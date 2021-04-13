import {StyleSheet} from 'react-native';
import * as constant from '../../constants';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: constant.BACKGROUND_PRIMARY_COLOR,
  },
  wholeDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalListContainer: {
    backgroundColor: constant.PRIMARY_COLOR,
    // marginVertical: 5,
    borderRadius: 15,
    elevation: 4,
    padding: 20,
    paddingBottom: 0,
    shadowColor: constant.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  wrapListContainer: {
    marginVertical: 5,
  },
  flatlistContentContainer: {
    alignItems: 'center',
  },
  wrapListHeaderContainer: {
    height: 70,
    width: '100%',
    shadowColor: constant.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: constant.PRIMARY_COLOR,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  nameText: {
    fontWeight: 'bold',
    color: constant.SECONDARY_COLOR,
  },
  customerHeaderText: {
    fontSize: 13,
    color: constant.LIGHT_STEEL_BLUE,
  },
  requestIdText: {
    color: constant.BLUE_COLOR,
  },
  dataText: {
    color: constant.SECONDARY_COLOR,
  },
  notAssignedText: {
    fontSize: 12,
    color: constant.CHERRY_RED,
  },
  wrapNameContainer: {
    flex: 3,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailsInnerContainer: {
    marginBottom: 15,
  },
  statusContainer: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: constant.CHERRY_RED,
  },
  wrapStatusContainer: {
    flex: 2,
    paddingHorizontal: 2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapAssignedContainer: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderColor: constant.CHERRY_RED,
  },
  placeContainer: {
    backgroundColor: constant.BACKGROUND_PRIMARY_COLOR,
    paddingVertical: 10,
    alignSelf: 'center',
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  wrapPlaceContainer: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: '100%',
    backgroundColor: constant.BACKGROUND_PRIMARY_COLOR,
  },
  placeInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityText: {
    fontWeight: 'bold',
    color: constant.SECONDARY_COLOR,
  },
  countryText: {
    fontSize: 12,
    color: constant.SECONDARY_COLOR,
  },
  wrapCityText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: constant.SECONDARY_COLOR,
  },
  wrapCountryText: {
    fontSize: 7,
    color: constant.SECONDARY_COLOR,
  },
  wrapCustomerNameText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: constant.SECONDARY_COLOR,
  },
  wrapCustomerText: {
    fontSize: 6,
    color: constant.LIGHT_STEEL_BLUE,
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  dropDownContainer: {
    flex: 1,
    paddingHorizontal: 1.5,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  surveyTabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabContainer: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  surveyDetailsContainer: {
    shadowColor: constant.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: constant.PRIMARY_COLOR,
  },
  newAppointmentButtonContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: constant.GREY_COLOR,
  },
  surveyDetailsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    borderBottomColor: constant.GREY_COLOR,
    paddingVertical: 15,
  },
  surveyDetailsHeaderText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: constant.LIGHT_GREY,
  },
  surveyDateText: {
    fontSize: 12,
    color: constant.SECONDARY_COLOR,
  },
  centerAlign: {
    alignItems: 'center',
  },
  emptyData: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: constant.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 4,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: constant.PRIMARY_COLOR,
  },
  appointmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomWidth: 0.5,
    borderBottomColor: constant.GREY_COLOR,
    paddingVertical: 15,
  },
  documentsReqText: {
    color: constant.LIGHT_STEEL_BLUE,
  },
  wrapAssignedText: {
    fontSize: 8,
    color: constant.CHERRY_RED,
  },
  wrapAssignedStatusText: {
    fontSize: 6,
    color: constant.LIGHT_STEEL_BLUE,
  },
});