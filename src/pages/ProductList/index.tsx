import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

import { ICartItem } from '../../store/modules/cart/types';
import { IState } from '../../store';

import api from '../../services/apiClient';

import Search from '../../components/Search';

import Product from './Product';

import { WHITE_TEXT } from '../../styles/variables';

import {
  Container,
  Header,
  TitleContent,
  Title,
  CartButton,
  CartHasContentIcon,
  ProductFlatList,
} from './styles';

import { ProductState, ProductListResponse, ProductResponse } from './types';

const ProductList: React.FC = () => {
  const { navigate } = useNavigation();

  const cartItems = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const [refreshing, setRefreshing] = useState(false);

  const [products, setProducts] = useState<ProductState[]>([]);

  const handleNavigateToCart = useCallback(() => navigate('CartList'), [
    navigate,
  ]);

  const cartHasContent = useMemo(() => {
    return cartItems.length > 0;
  }, [cartItems.length]);

  const formatProducts = useCallback((productsResponse: ProductResponse[]) => {
    return productsResponse.map(({ id, images, name, price, ean }) => ({
      id,
      name,
      image: images[0],
      price,
      ean,
    }));
  }, []);

  const handleRefresh = useCallback(async () => {
    try {
      setRefreshing(true);

      const { data } = await api.get<ProductListResponse>('items');

      const productsFormatted = formatProducts(data.payload);

      setProducts(productsFormatted);
    } catch {
      Alert.alert(
        'Erro ao recarregar produtos',
        'ocorreu um erro ao tentar recarregar os produtos, tente novamente',
      );
    } finally {
      setRefreshing(false);
    }
  }, [formatProducts]);

  const handleSearch = useCallback(
    (text: string) => {
      if (text.length <= 0) {
        handleRefresh();
      } else {
        setProducts(state =>
          state.filter(
            product =>
              String(product.ean).indexOf(text) !== -1 ||
              product.name.indexOf(text) !== -1,
          ),
        );
      }
    },
    [handleRefresh],
  );

  useEffect(() => {
    api
      .get<ProductListResponse>('items')
      .then(({ data }) => {
        const productsFormatted = formatProducts(data.payload);

        setProducts(productsFormatted);
      })
      .catch(() => {
        Alert.alert(
          'Erro ao listar produtos',
          'ocorreu um erro ao tentar listar os produtos, tente novamente',
        );
      });
  }, [formatProducts]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <TitleContent>
            <View style={{ width: 47, paddingHorizontal: 12 }} />

            <Title>YourShop</Title>

            <CartButton onPress={handleNavigateToCart}>
              {cartHasContent && <CartHasContentIcon />}
              <Icon name="cart-outline" color={WHITE_TEXT} size={22} />
            </CartButton>
          </TitleContent>

          <Search searchText={handleSearch} />
        </Header>

        <ProductFlatList
          data={products}
          initialNumToRender={products.length}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          keyboardShouldPersistTaps="handled"
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <Product data={item} />}
          contentContainerStyle={{ marginHorizontal: 12 }}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ProductList;
