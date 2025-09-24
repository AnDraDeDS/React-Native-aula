import { createStackNavigator } from '@react-navigation/stack'; 
import {Home} from '../screens/Home'; 
import {Equipes} from '../screens/Equipes'; 
import {Campeonato} from '../screens/Campeonato'; 
import {Pilotos} from '../screens/Pilotos'; 

const {Navigator, Screen} = createStackNavigator();


export function StackRoutes() { 
  
  return ( 
    <Navigator initialRouteName="Home">
    <Screen name="Home" component={Home} />
    {/* <Screen name="Equipes" component={Equipes} />
    <Screen name="Campeonato" component={Campeonato} />
    <Screen name="Pilotos" component={Pilotos} /> */}
    </Navigator>

); }