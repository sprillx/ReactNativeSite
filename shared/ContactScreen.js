import { ScrollView } from "react-native-gesture-handler"
import { Card } from "react-native-elements"
import { Text } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const ContactScreen = () => {

        return (
        <ScrollView>
                <Card wrapperStyle={{ margin: 20 }}>
                        <Card.Title> Contact Information </Card.Title>
                        <Card.Divider/>
                        <Text>  1 Nucamp Way </Text>
                        <Text>  Seattle, WA 98001 </Text>
                        <Text style={{margin: 10}}> U.S.A.</Text>
                        
                        <Text> Phone: 1-206-555-1234 </Text>
                        <Text>Email: campsites@nucamp.co </Text>
                </Card>
        </ScrollView>
        )
       
}
const ContactNavigator = () => {
        const Stack = createStackNavigator()
        return (
                <Stack.Navigator>
                        <Stack.Screen
                                name='Contact'
                                options={{ title: 'Contact Us' }}
                        />
                </Stack.Navigator>
        )
}

<Drawer.Navigator
        initialRouteName="Contact"
        drawerStyle={{ backgroundColor: '#CEC8FF' }}
>
        <Drawer.Screen
                name='Contact'
                component={ContactNavigator}
                options={{ title: 'Contact Us' }}

        />




</Drawer.Navigator>


export default ContactScreen