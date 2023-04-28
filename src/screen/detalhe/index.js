import { StyleSheet, View, Image,Text} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Detalhe() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
      </View>
      <Image style={styles.img} source={require("./../../components/card/image/produtoControle.png")} /> 
      <View style={styles.star}>
        <Stars
          default={5}
          count={5}
          half={false}
          disabled
          starSize={50}
          fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
          emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
        />
        <Text>Controle sem fio DUALSHOCK 4</Text>
        <View >
          
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  container2: {
    backgroundColor: '#D1CBFF',
    height: 700,
    width: 700,
    marginTop: -350,
    transform: [{ rotate: '45deg' }],
    borderBottomRightRadius: 350,
  },
  img: {
    marginTop: -300
  },
  myStarStyle: {
    color: '#FFC75D',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 20,
  },
  star: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 25,
    paddingHorizontal: 25
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});