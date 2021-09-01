import React, {useState}from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const Login=()=>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <View style={styles.head}>
                <Text style={styles.textHead}>Login</Text>
                <Text style={styles.textHeadsecond}>Inicie sesion para continuar...</Text>
            </View>
            <View style={styles.formLogin}>
              <Text style={{ color:'#858A96' }} >Ingrese su nombre por favor</Text>
                <TextInput 
                        onChangeText={(val) => setName(val)}
                        style={styles.inputLogin}
                        />
              <Text style={{ color:'#858A96' }}>Ingrese su contraseña por favor</Text>
                <TextInput 
                        onChangeText={(val) => setPassword(val)}
                        style={styles.inputLogin}
                        />
            </View>
            <View style={styles.footerLogin}>
              <TouchableHighlight
                style={styles.buttonLogin}>
                  <Text style={styles.textButtonLogin}>LOGIN</Text>
              </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
      backgroundColor: "#A970FF",
      position: 'relative',
      left: 0,
      top: "0%",
      height: "35%",
      fontFamily: 'Roboto',
    },
    textHead: {
      position: 'relative',
      top: '30.81%',
      textAlign: 'center',
      fontSize: 38,
      color: '#FFFFFF',
    },
    textHeadsecond: {
      position: 'relative',
      top: '30.81%',
      textAlign: 'center',
      fontSize: 21,
      color: '#FFFFFF',
  
    },
    formLogin:{
      position: 'relative',
      flexDirection: 'column',
      height: "45%",
      padding: 20,
      paddingTop: 65,
      flexDirection: 'column',
    },
    inputLogin: {
      width:'100%',
      height: 50,
      marginBottom: 60,
      borderColor: '#C4C4C4',
      borderWidth: 2,
      borderRadius: 10,
      fontSize: 15,
    },
    footerLogin:{
      backgroundColor: "#D5B9FF",
      position: 'relative',
      bottom: '0%',
      width: '100%',
      height: '20%',
      fontFamily: 'Roboto',
      alignItems: 'center',
    },
    buttonLogin:{
      top: '20%',
      width:'50%',
      height: 80,
      backgroundColor: '#A970FF',
      borderRadius: 10,
      alignItems: 'center',
    },
    textButtonLogin:{
      top: 10,
      color: '#FFFFFF',
      fontSize: 35,
    }
  });
  
  export default Login;