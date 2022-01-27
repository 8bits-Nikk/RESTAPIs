import React, {useEffect, useState} from "react";
import {View, StyleSheet, TextInput, Text, TouchableOpacity, FlatList, Alert} from "react-native";
import {addPostComment, getPostComments} from "../api/Requests";
import {ActivityIndicator} from "react-native-paper";
import CommentCard from "../components/CommentCard";

const UserComments = ({navigation ,route}) => {

    const post_id = route.params.id
    const [isLoading, setIsLoading] = useState(true)
    const [postComments, setPostComments] = useState([])

    const [comment, setComment] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        getPostComments(post_id).then(res => {
            setPostComments(res)
        }).catch((e) => console.log(e))

        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])


    const validateFields = () => {
        return !(name === '' || email === '' || comment === '');
    }
    const addComment = () => {
        if (validateFields()){
            addPostComment(post_id,name,email,comment).then(()=> {
                navigation.goBack()
            }).catch((e) => console.log(e))
        }else {
            Alert.alert("Warning.!","Fill All Fields.")
        }
    }

    return (
        <View style={styles.body}>
            {
                isLoading ?
                    <ActivityIndicator size={'large'}/>
                    :
                    <View style={styles.body}>
                        <View style={styles.upperContainer}>
                            <FlatList data={postComments} renderItem={({item}) => (
                                <CommentCard item={item}/>
                            )}/>
                        </View>
                        <View style={styles.lowerContainer}>
                            <TextInput style={styles.textInput}
                                       onChangeText={text => setName(text)}
                                       placeholder={"Name"}/>
                            <TextInput style={styles.textInput}
                                       onChangeText={text => setEmail(text)}
                                       placeholder={"Email"}/>
                            <TextInput style={styles.textInput}
                                       onChangeText={text => setComment(text)}
                                       placeholder={"Comments"}/>
                            <TouchableOpacity style={styles.button} onPress={addComment}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    upperContainer: {
        flex: 1,
    },
    lowerContainer: {
        backgroundColor: '#ccc',
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        backgroundColor: '#eee',
        borderWidth: 1,
        margin: 3,
        width: "94%"
    },
    button: {
        backgroundColor: '#66ccaa',
        padding: 12,
        margin: 3,
        width: "94%",
        borderRadius: 12,
        alignItems: "center"
    }
})

export default UserComments
