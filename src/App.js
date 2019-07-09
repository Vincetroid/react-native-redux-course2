import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LogInForm from './components/LogInForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC2Qae0DyS8oOPdvS5UKKBktb8J98MkmEM',
            authDomain: 'authentication-4644d.firebaseapp.com',
            databaseURL: 'https://authentication-4644d.firebaseio.com',
            projectId: 'authentication-4644d',
            storageBucket: '',
            messagingSenderId: '256657603069',
            appId: '1:256657603069:web:edc267b4521b2ddd'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LogInForm />
            </View>
        );
    }
}

export default App;
