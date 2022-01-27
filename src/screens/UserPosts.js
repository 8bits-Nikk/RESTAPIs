import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";
import {getUsersPost} from "../api/Requests";
import {ActivityIndicator} from "react-native-paper";
import PostCard from "../components/PostCard";

const UserPosts = ({route}) => {

    const user_id = route.params.id
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getUsersPost(user_id).then( res => {
            setPosts(res)
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    },[])

    return(
        <View>
            {isLoading ?
            <ActivityIndicator size={'large'}/>
            :
                <FlatList data={posts} renderItem={({item}) => (
                    <PostCard item={item}/>
                )}/>
            }
        </View>
    )
}

export default UserPosts
