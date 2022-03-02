import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [work, setwork] = useState('');
  const [mainArray, setMainArray] = useState([]);
  const [stateAppearence, setstateAppearence] = useState(false);
  const addFunction = () => {
    if (work !== '') {
      setMainArray(prev => {
        return [...prev, {work, id: Math.floor(Math.random() * 10)}];
      });
    } else {
      alert('Fill all details');
    }
    setwork('');
  };

  const delFunction = (index, id) => {
    setMainArray(
      mainArray.filter(element => mainArray.indexOf(element) !== index),
    );
    // setMainArray(mainArray.filter(element => element.id !== id))
    // console.log('hello');
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.heading}>To Do List</Text>
      </View>
      <View style={style.body}>
        <TextInput
          style={style.input}
          placeholderTextColor="#313552"
          placeholder="Type your work"
          onChangeText={value => setwork(value)}
          value={work}
        />

        <TouchableOpacity onPress={addFunction} style={style.button}>
          <Text style={style.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
      {mainArray ? (
        <FlatList
          data={mainArray}
          renderItem={({item, index}) => (
            <View key={index} style={style.listBox}>
              <Text style={style.text}>
                {index + 1}.{item.work}
              </Text>
              <TouchableOpacity onPress={() => delFunction(index)}>
                <FontAwesomeIcon icon={faTrashCan} size={25} color="#313552" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <></>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE6CE',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontFamily: 'RobotoMono-Regular',
    fontWeight: '700',
    color: '#313552',
  },
  body: {
    marginTop: 20,
    height: 80,
    padding: 20,
    flexDirection: 'row',
  },
  input: {
    color: '#313552',
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#313552',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    textAlign: 'center',
    backgroundColor: '#313552',
    borderRadius: 100,
  },
  addButton: {
    color: '#2EB086',
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  listBox: {
    padding: 20,
    margin: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 27,
    textTransform: 'capitalize',
    color: '#313552',
    letterSpacing: 1.5,
    width: '75%',
  },
});
