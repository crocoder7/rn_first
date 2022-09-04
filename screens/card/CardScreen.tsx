import { StyleSheet, Text, View } from 'react-native';

function CardScreen() {
    return (
    <View style={styles.rootContainer}>
        <Text>This is main card</Text>
    </View>);
}

export default CardScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 32,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
    },
  });
  