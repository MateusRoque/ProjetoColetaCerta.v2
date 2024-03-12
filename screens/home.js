import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
  return(
    <View style={styles.container}>

      <Text>
        Cheguei aqui!
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})