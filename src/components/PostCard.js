import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const PostCard = ({item}) => {

    const navigation = useNavigation()

    return(
        <View style={styles.body}>
            <TouchableOpacity onPress={()=>{navigation.navigate("UserComments", {id: item.id})}}>
                <Text>Id: {item.id}</Text>
                <Text>UserId: {item.user_id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>Body: {item.body}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        padding: 10,
        justifyContent: "center",
        borderRadius: 6,
        marginBottom: 10,
        backgroundColor: '#ddd'
    },
})


export default PostCard
