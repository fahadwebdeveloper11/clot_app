import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Auth/SignIn';
import SignUp from './src/screens/Auth/SignUp';
import BootSplash from 'react-native-bootsplash';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({fade: true})}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
