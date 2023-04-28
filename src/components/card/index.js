import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Cards(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgs}>
        <Image style={styles.img} source={props.img} />
      </View>
      <Text style={styles.titulo}>{props.titulo}</Text>
      <View style={{ alignItems: 'center' }}>
        <Stars
          default={props.avaliacao}
          count={5}
          half={false}
          disabled
          starSize={50}
          fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
          emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
        />
      </View>
      <View style={styles.linha}>
        <Text style={styles.preco}>R$ { props.preco}</Text>
        <TouchableOpacity>
          <Image source={require('./image/amei.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.navigation}>
          <Image source={require('./image/mais.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    width: 160,
    height: 120,
    marginTop: 50,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    justifyContent: 'space-between',
    elevation: 20,
    marginRight:13
  },
  imgs: {
    alignItems: 'center'
  },
  img: {
    marginTop: -35
  },
  titulo: {
    color: '#000000',
    textAlign: 'center'
  },
  preco: {
    color: '#8D7CE4',
    width:65
    
  },
  linha: {
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:5,
    gap:4
  },
  myStarStyle: {
    color: '#FFC75D',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
   
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
