import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";
import {getUsers} from "../api/Requests";
import UserCard from "../components/UserCard";
import {ActivityIndicator} from "react-native-paper";

const UserList = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUsers.then((res) => {
           setUsers(res)
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    return (
        <View>
            {isLoading ?
                <View>
                    <ActivityIndicator size={'large'}/>
                </View>
                :
                <FlatList data={users}
                          renderItem={({item}) => (
                              <UserCard item={item}/>
                          )}/>
            }
        </View>
    )
}

export default UserList
