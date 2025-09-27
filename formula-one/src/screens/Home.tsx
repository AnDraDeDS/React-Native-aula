import React from 'react'; 
import { Pressable, View, Text, Image} from 'react-native';
import { styles } from './HomeStyles';

export function Home({navigation}:any) {

function navToPilotos()
{ navigation.navigate('Pilotos'); } 

function navToEquipes()
{ navigation.navigate('Equipes'); } 

function navToCampeonato()
{ navigation.navigate('Campeonato'); }  


  return (
    <View style={styles.container}>
      <Image  source={require('../../assets/my-icon.jpg')} style={styles.img} />
      <View style={styles.main}>
      <View style={styles.containerButton}>
      <Pressable style ={styles.styleButton}onPress={navToPilotos}>
      <Text style={styles.button}>Pilotos</Text>
      </Pressable>
        <Pressable style={styles.styleButton}onPress={navToEquipes}>
      <Text style={styles.button}>Equipes</Text>
      </Pressable>
        <Pressable style={styles.styleButton}onPress={navToCampeonato}>
      <Text style={styles.button}>Campeonato</Text>
      </Pressable>
        </View>
      </View>
    </View>
  );
}

