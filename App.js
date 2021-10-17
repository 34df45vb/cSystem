import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Dropdown } from 'react-native-material-dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

LocaleConfig.locales['in'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};
LocaleConfig.defaultLocale = 'in';

const { width, height } = Dimensions.get('window')

const App = () => {

  const [markedDates, setMarkedDates] = useState({
    [moment().format('YYYY-MM-DD')]: { selected: true, selectedColor: '#78ba3e' }
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e3ebed" />
      <ScrollView showsVerticalScrollIndicator={false}
        style={styles.content}>

        <View style={styles.CalMainView}>
          <Calendar
            style={styles.CalView}
            onDayPress={(date) => setMarkedDates({
              [date.dateString]: { selected: true, selectedColor: '#78ba3e' }
            })}
            markedDates={markedDates}
            monthFormat={'MMMM'}
            theme={{
              calendarBackground: '#f6f6f6',
              textSectionTitleColor: '#323232',
              dayTextColor: '#323232',
              textDayHeaderFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              monthTextColor: '#323232',
              arrowColor: '#323232'
            }}
          />
        </View>

        <View style={styles.CalMainView}>
          <View style={{ marginTop: 10 }}>
            <View style={{
              ...styles.fieldSty, flex: 1,
            }}>
              <Dropdown
                fontSize={width * 0.03}
                data={[]}
                value={''}
                label="Nurse"
                dropdownOffset={{ top: 8, left: 0 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput
              style={styles.fieldSty}
              value="John"
              editable={false} />
          </View>
          <View style={styles.rowView}>
            <View style={{
              ...styles.fieldSty, flex: 1,
            }}>
              <TextInput
                value="Bangalore"
                editable={false} />
            </View>
            <TouchableOpacity style={styles.editView}>
              <EvilIcons name="pencil" size={35} color="#817f7f" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.CalMainView}>
          <View style={{ marginTop: 10 }}>
            <View style={{
              ...styles.fieldSty, flex: 1,
            }}>
              <Dropdown
                fontSize={width * 0.03}
                data={[]}
                value={''}
                label="Coose Care Givers"
                dropdownOffset={{ top: 8, left: 0 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInput
              style={styles.fieldSty}
              value="Enter Patient Name" />
          </View>
          <View style={styles.rowView}>
            <View style={{
              ...styles.fieldSty, flex: 1,
            }}>
              <TextInput
                value="Enter Patient Location" />
            </View>
            <TouchableOpacity style={styles.editView}>
              <Entypo name="plus" size={30} color="#817f7f" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3ebed',
    paddingVertical: 15
  },
  content: {
    padding: 10,
    height: height,
  },
  CalView: {
    borderWidth: 7,
    borderColor: '#e9e9e9',
  },
  CalMainView: {
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  fieldSty: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbc7c7',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40
  },
  editView: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: '#d0d0d0',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    elevation: 2
  },
  buttonStyle: {
    borderRadius: 10,
    width: 150,
    alignSelf: 'center',
    backgroundColor: '#78ba3e',
    marginBottom: 15
  },
  buttonText: {
    fontSize: width * 0.033,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
