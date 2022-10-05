import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import {} from '@expo/vector-icons'

import { Background } from "../../components/Background";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";


export function Games() {
  
  const route = useRoute();
  const games = route.params as GameParams


  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>

          </TouchableOpacity>
        </View>        
      </SafeAreaView>
    </Background>
  );
}
