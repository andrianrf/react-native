import axios from 'axios';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function JsonServerFetchAPI() {

    // npm install -g json-server
    // json-server --watch "json-server/db.json" --port 3000

    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    })

    const getData = () => {
        axios.get('http://localhost:3000/users/2')
        .then(result => {
            console.log(result.data)
            setDataUser(result.data)
        })
        .catch(err => console.log('err: ', err))
    }

    const postData = () => {
        const dataForAPI = {
            name: "Andrian",
            job: "leader"
        }

        axios.post('https://reqres.in/api/users', dataForAPI)
        .then(result => {
            setDataPost(result.data)
        })
        .catch(err => console.log('err: ', err))
    }

    const [dataPost, setDataPost] = useState({
        name: '',
        job: '',
        createdAt: '',
        id: ''
    })

    return (
        <View style={{borderWidth: 1}}>
            <Text>GET DATA</Text>
            <Button title="GET DATA" onPress={getData} />
            {
                dataUser.avatar.length > 0 && (
                    <Image source={{uri: dataUser.avatar}} style={styles.image} />
                )
            }
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>

            <Text>POST DATA</Text>
            <Button title="POST DATA" onPress={postData} />
            <Text>createdAt : {dataPost.createdAt}</Text>
            <Text>id : {dataPost.id}</Text>
            <Text>name : {dataPost.name}</Text>
            <Text>job : {dataPost.job}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:50/2
    }
})
