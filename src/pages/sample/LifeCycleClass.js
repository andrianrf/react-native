import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class LifeCycleClass extends Component {

    constructor(props){
        super(props);
        console.log('==> constructor');
        this.state = {
            subscriber: 200,
        };
    }

    componentDidMount(){
        console.log('==> component did mount');
        setTimeout(() => {
            this.setState({
                subscriber: 400,
            })
        }, 2000);
    }

    componentDidUpdate(){
        console.log('==> component did update');
    }

    componentWillUnmount(){
        console.log('==> component will unmount');
    }

    render() {
        return (
            <View>
                <Text> LifeCycleClass {this.state.subscriber} </Text>
            </View>
        )
    }
}
