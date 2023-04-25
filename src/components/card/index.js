import { View, Image, Text } from "react-native";
export default function Cards() {
  return (
    <View>
      <Image source={require('./image/produto1.png')} />
      <Text>Controle ps4</Text>      
      <View>
        <Text>R$ 400,00</Text>
      </View>
    </View>
  )
}