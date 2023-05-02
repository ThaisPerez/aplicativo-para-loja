import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Detalhe() {
  const [adicionar, setAdicionar] = useState(false)
  function adicionarCarrinho() {
    setAdicionar(!adicionar)
  }
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
      </View>
      <Image style={styles.img} source={require("./../../components/card/image/produtoControle.png")} />
      <View style={styles.containerProduto}>
        < TouchableOpacity style={styles.containerOpcao}>
          <Image source={require('./../../components/card/image/3.png')} />
        </ TouchableOpacity>
        <TouchableOpacity style={styles.containerOpcao}>
          <Image source={require('./../../components/card/image/1.png')} />
        </ TouchableOpacity>
        <TouchableOpacity style={styles.containerOpcao}>
          <Image source={require('./../../components/card/image/detalhePlay4.png')} />
        </ TouchableOpacity>
      </View>
      <Text style={styles.titulo}> Controle sem fio DUALSHOCK 5</Text>
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
        <View style={styles.containerText}>
          <Text style={styles.descricao}>(25 avaliações)</Text>
          <Text style={styles.preco}>R$400</Text>
        </View>
        <Text style={styles.subtitulo}>Sobre este item</Text>
        <Text style={styles.descricao} >Explore novas fronteiras dos games no seu PS5
          com o lançamento do controle sem fio DualSense Midnight Black. Parte de uma nova linha de cores com o tema galáxia, este elegante design foi inspirado em como vemos as maravilhas do espaço no céu noturno, com tons sutis de preto e detalhes em cinza-claro.
          Descubra uma experiência de jogo mais profunda e imersiva, que dá vida à ação nas palmas das suas mãos. O controle sem fio DualSense oferece efeitos de gatilho adaptáveis e um microfone embutido, tudo em um design icônico e confortável.
          Sinta suas ações no jogo e o ambiente simulado por meio da resposta tátil e experimente forças e tensões variadas na ponta dos dedos com os gatilhos adaptáveis.</Text>
        <View style={styles.containerCarrinho}>
          <View style={{
            width: 'auto',
            height: 50,
            elevation: 4,
            backgroundColor: adicionar ? '#7762FF' : '#C0C0C0',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: "center",
            marginRight: 10,
            margin: 'auto',
            paddingHorizontal: 10

          }}>
            <TouchableOpacity onPress={adicionarCarrinho} style={styles.imgCarrinho}>
              <MaterialCommunityIcons name="cart" color={'#000'} size={24} />
              <Text> {adicionar ? 'Adicionado no carrinho ' : 'Adicionar no carrinho'}</Text>

            </TouchableOpacity>
          </View>
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

  containerOpcao: {
    width: 56,
    height: 40,
    backgroundColor: '#ffffff28',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: -50,
    borderWidth: -1,
    justifyContent: 'center'

  },
  containerProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  titulo: {
    fontSize: 18,
    color: '#0E0E0E',
    fontWeight: 'bold',
    marginVertical: 70,
  },
  img: {
    marginTop: -340
  },
  myStarStyle: {
    color: '#FFC75D',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 20,
  },
  containerText: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
    paddingRight: 6
  },

  preco: {
    color: '#8D7CE4',
    fontSize: 20
  },
  subtitulo: {
    fontSize: 14,
    color: '#0E0E0E',
    fontWeight: 'bold'
  },

  star: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: -50,
    paddingHorizontal: 25
  },
  descricao: {
    marginVertical: 10,
    textAlign: 'justify',
    fontSize: 12,
  },

  myEmptyStarStyle: {
    color: 'white',
  },
  imgCarrinho: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'

  },
  containerCarrinho: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },

});
