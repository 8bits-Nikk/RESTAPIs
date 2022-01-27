import React from "react";
import {StyleSheet, Text, View} from "react-native";

const CommentCard = ({item}) => {

    return (
        <View style={styles.body}>
            <Text>Id: {item.id}</Text>
            <Text>PostId: {item.post_id}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Body: {item.body}</Text>
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

export default CommentCard
