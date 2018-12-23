import React from 'react';
import { StyleSheet, Text, View, Button, Alert,TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
this.company = this.company.bind(this);
}
    static navigationOptions = {
        title: 'Home',
    };
    company(){
        this.props.navigation.navigate('Company');
    }
    
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.companyBtn}
                    onPress={this.company}
                >
                <Text style={styles.comTxt}>Comapany</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.homeBtn}
                    onPress={this.user}
                >
                <Text style={styles.userTxt}>User</Text>
                </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyBtn:{
        width:'80%',
        height:56,
        backgroundColor:'#d254e8',
        color:'white',
        margin:20


    },
    homeBtn:{
        width:'80%',
        height:56,
        backgroundColor:'#d293e4',
        color:'white',
        margin:20
    },
    userTxt:{
color:'white',
fontSize:20,
textAlign:'center'
    },
    comTxt:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    }

});