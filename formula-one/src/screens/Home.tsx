import React from 'react'; 
import { Pressable, View, Text, Image} from 'react-native';
import { styles } from './HomeStyles';

export function Home({navigation}:any) {

function navToPilotos()
{ navigation.navigate('Pilotos'); } 

  return (
    <View style={styles.container}>
      <Image  source={require('../../assets/my-icon.jpg')} style={styles.img} />
      <View style={styles.main}>
      <View style={styles.containerButton}>
      <Pressable onPress={navToPilotos}>
      <Text>Pilotos</Text>
      </Pressable>
        </View>
      </View>
    </View>
  );
}

