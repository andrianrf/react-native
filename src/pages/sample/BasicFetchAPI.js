import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function BasicFetchAPI() {

    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    })

    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setDataUser(json.data)
        })
    }

    const postData = () => {
        const dataForAPI = {
            name: "Andrian",
            job: "leader"
        }

        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
        .then(response => response.json())
        .then(json => {
            console.log('post response: ',json)
            setDataPost(json)
        })
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
            <Image source={{uri: dataUser.avatar}} style={styles.image} />
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
