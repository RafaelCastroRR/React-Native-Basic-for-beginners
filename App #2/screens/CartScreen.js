
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CartScreen = ({ route, navigation }) => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }, [route.params?.product]);

  const placeOrder = () => {
    alert('Order placed with Cash on Delivery!');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <Button title="Place Order (COD)" onPress={placeOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
