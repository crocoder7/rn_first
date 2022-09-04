import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CardScreen from '../../screens/card/CardScreen';
import { Colors } from '../../styles/Styles';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary100 },
                headerTintColor: 'black',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen
                name="Welcome"
                component={CardScreen}
            />
        </Stack.Navigator>
    );
}