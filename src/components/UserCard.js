import React from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

const UserCard = ({item}) => {

    const navigation = useNavigation()

    return (
        <View style={styles.body}>
            <TouchableOpacity onPress={()=> navigation.navigate("UserPosts", {id: item.id})}>
                <Text>Id: {item.id}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Gender: {item.gender}</Text>
                <Text>Status: {item.status}</Text>
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

export default UserCard
