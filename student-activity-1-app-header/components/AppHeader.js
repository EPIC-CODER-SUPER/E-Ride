import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class AppHeader extends React.Component {
   render() {
    return (<View style={styles.textContainer}> 
    <Text style={styles.text}>RED ALERT 
    
    
    </Text> 
     
      </View>)
   }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    width: 350,
    height: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  }
});


export default AppHeader;