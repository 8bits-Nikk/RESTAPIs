import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import UserList from "./src/screens/UserList";
import UserPosts from "./src/screens/UserPosts";
import UserComments from "./src/screens/UserComments";

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"UserList"}
                              component={UserList}/>
                <Stack.Screen name={"UserPosts"}
                              component={UserPosts}/>
                <Stack.Screen name={"UserComments"}
                              component={UserComments}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
