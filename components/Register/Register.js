import React, {useState}from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const Register=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <View style={styles.head}>
                <Text style={styles.textHead}>Crear Cuenta</Text>
                <Text style={styles.textHeadsecond}>Listo Para Registrarte?</Text>
            </View>
            <View style={styles.formRegister}>
              <Text style={{ color:'#858A96' }} >Ingrese su nombre por favor</Text>
                <TextInput 
                        onChangeText={(val) => setName(val)}
                        style={styles.inputRegister}
                        />
              <Text style={{ color:'#858A96' }} >Ingrese su correo por favor</Text>
                <TextInput 
                        onChangeText={(val) => setEmail(val)}
                        style={styles.inputRegister}
                        />
              <Text style={{ color:'#858A96' }}>Ingrese su contraseña por favor</Text>
                <TextInput 
                        onChangeText={(val) => setPassword(val)}
                        style={styles.inputRegister}
                        />
            </View>
            <View style={styles.footerRegister}>
              <TouchableHighlight
                style={styles.buttonRegister}>
                  <Text style={styles.textButtonRegister}>SIGN UP</Text>
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
    formRegister:{
      position: 'relative',
      flexDirection: 'column',
      height: "45%",
      padding: 20,
      paddingTop: 40,
      flexDirection: 'column',
    },
    inputRegister: {
      paddingLeft: 20,
      width:'100%',
      height: 50,
      marginBottom: 20,
      borderColor: '#C4C4C4',
      borderWidth: 2,
      borderRadius: 10,
      fontSize: 15,
    },
    footerRegister:{
      backgroundColor: "#D5B9FF",
      position: 'relative',
      bottom: '0%',
      width: '100%',
      height: '20%',
      fontFamily: 'Roboto',
      alignItems: 'center',
    },
    buttonRegister:{
      top: '20%',
      width:'50%',
      height: 80,
      backgroundColor: '#A970FF',
      borderRadius: 10,
      alignItems: 'center',
    },
    textButtonRegister:{
      top: 10,
      color: '#FFFFFF',
      fontSize: 35,
    }
  });

  export default Register;