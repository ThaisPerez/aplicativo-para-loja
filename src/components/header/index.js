import { View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="menu" size={32} color="#B2B2B2" />
      <View style={{position:'relative'}}>
        <Ionicons name="notifications-outline" size={32} color="#B2B2B2" />
        <View style={ styles.notificacao} />  
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  notificacao: {
    backgroundColor: '#6E56FD',
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    right:0
    
  
  }
});
