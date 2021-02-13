import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from '../pages/Intro';

import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

import CartList from '../pages/CartList';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Intro" component={Intro} />

        <Screen name="ProductList" component={ProductList} />
        <Screen name="ProductDetail" component={ProductDetail} />

        <Screen name="CartList" component={CartList} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
