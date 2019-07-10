import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LogInForm from './components/LogInForm';

console.disableYellowBox = true;

class App extends Component {

    state = {
        loggedIn: null,
    };

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={ () => firebase.auth().signOut() }>Log Out</Button>
                );
            case false:
                return <LogInForm />;
            default:
                return <Spinner size="large" />;
        }      
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
