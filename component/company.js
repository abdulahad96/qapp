import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Button, Container } from 'react-native';
const { width, height } = Dimensions.get('window');
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Ionicons } from '@expo/vector-icons';
import FloatingLabelInput from '../component/floatinginput';

export default class CompanyScreen extends Component {
    constructor() {
        super()
        this.addcompany = this.addcompany.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);

        this.state = {
            isDateTimePickerVisible: false,
            date: [],
            showForm: false,
            isFocused: false,
        };
    }
    static navigationOptions = {
        title: 'Add New Company',
    };
    addcompany() {
        this.setState({ showForm: true })
    }


    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        // console.log(this.date)
        const { showForm,isFocused} = this.state;
        return (
            <View style={{ height: '100%' }}>
                {!showForm && <TouchableOpacity onPress={this.addcompany}>
                    {<Ionicons name="md-add-circle" size={50} color="green" />}

                </TouchableOpacity>}
                {showForm &&
                <View>
                <FloatingLabelInput 
                label="Company Name"
                value={this.state.value}
                onChange={this.handleTextChange}
                />
                <FloatingLabelInput 
                label="since"
                value={this.state.value}
                onChange={this.handleTextChange}
                />
                <TouchableOpacity>
                    <Text>Take photo</Text>
                </TouchableOpacity>
                <FloatingLabelInput 
                label="Address"
                value={this.state.value}
                onChange={this.handleTextChange}
                />
                </View>
                }
              </View>
        )
                }
            }
            
const styles = StyleSheet.create({
                    container: {
                    flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },

        
});