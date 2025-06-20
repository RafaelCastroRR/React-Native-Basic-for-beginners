
import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Product 1', price: 100, image: 'https://picsum.photos/200/300?random=2' },
  { id: '2', name: 'Product 2', price: 200, image: 'https://picsum.photos/200/300?random=2' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 9,
  },
});

export default HomeScreen;
