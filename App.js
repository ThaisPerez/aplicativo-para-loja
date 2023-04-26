import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Cards from './src/components/card';
import Header from './src/components/header';

export default function App() {
  return (
    < ScrollView style={styles.container}>
      <Header></Header>
      <Text style={styles.titulo}>Mais Vendidos</Text>
      <ScrollView horizontal style={styles.cards}>
        <Cards titulo='Controle Ps4' img={require('./src/components/card/image/produto1.png')} avaliacao={5} preco={'200,00'} />
        <Cards titulo='Iphone 14 Pro Max' img={require('./src/components/card/image/produto4.png')} avaliacao={5} preco={'80,00'} />
        <Cards titulo='Fone de Ouvido sem Fio' img={require('./src/components/card/image/produto2.png')} avaliacao={5} preco={'200,00'} />
      </ScrollView>
      <Text style={styles.titulo}>Categorias</Text>
      <ScrollView horizontal style={styles.containerFiltro}>
        <TouchableOpacity  style={styles.botaoFiltro} >
          <Text style={styles.textFiltro}>Todos</Text>
        </TouchableOpacity>
         <TouchableOpacity  style={styles.botaoFiltro} >
          <Text style={styles.textFiltro}>Eletrônicos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro} >
          <Text style={styles.textFiltro}>Imóveis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro} >
          <Text style={styles.textFiltro}>Peças</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro} >
          <Text style={styles.textFiltro}>Cosmetico</Text>
        </TouchableOpacity>
        
      </ScrollView>

      <StatusBar style="auto" />
      <ScrollView style={styles.scrollContainer}>
        <View horizontal style={styles.sectionContainer}>
          <Cards titulo='Controle Ps4' img={require('./src/components/card/image/produto1.png')} avaliacao={5} preco={'200,00'} />
          <Cards titulo='Fone de Ouvido sem Fio' img={require('./src/components/card/image/produto2.png')} avaliacao={5} preco={'80,00'} />
          <Cards titulo='PlayStation 5' img={require('./src/components/card/image/produto6.png')} avaliacao={5} preco={'200,00'} />
          <Cards titulo='Smart Tv' img={require('./src/components/card/image/produto5.png')} avaliacao={5} preco={'200,00'} />
          <Cards titulo='Fritadeira Elétrica' img={require('./src/components/card/image/produto7.png')} avaliacao={5} preco={'200,00'} />
          <Cards titulo='Notebook' img={require('./src/components/card/image/produto8.png')} avaliacao={5} preco={'200,00'} />
        </View>
      </ScrollView>
    </ ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
    paddingTop: 40,
    backgroundColor: '#F5F6FF',
  },
  titulo: {
    color: '#929194'
  },
  botaoFiltro: {
    width: 80,
    height: 24,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: "center",
    marginRight: 15,
    marginBottom: 2

  },
  textFiltro: {
    fontSize: 12,
    color:'#A2A2A2'

  },
  containerFiltro:{
    marginVertical: 24
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 120,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15
  },
  cards: {
    height: 200
  }
});
