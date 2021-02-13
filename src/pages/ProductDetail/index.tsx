import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store';
import { addProductToCart } from '../../store/modules/cart/actions';
import { ICartItem } from '../../store/modules/cart/types';

import priceFormatter from '../../utils/priceFormatter';

import api from '../../services/apiClient';

import Header from '../../components/Header';

import {
  Container,
  ProductDetailContent,
  ProductDetailScrollView,
  ProductImageContent,
  DiscountTagItem,
  DiscountTagText,
  ProductImageHorizontalScrollView,
  ProductImage,
  ProductName,
  ProductDescriptionText,
  Separator,
  ProductValue,
  ProductDiscountValuesContent,
  ProductOriginalValue,
  ProductWithDiscountValue,
  FooterButtonsContent,
  AddCartButton,
} from './styles';

import { MAIN_COLOR } from '../../styles/variables';

import { ProductResponse } from '../ProductList/types';
import { Button } from '../../components/Form';

interface RouteParams {
  productId: number;
}

const ProductDetail: React.FC = () => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const { productId } = params as RouteParams;

  const [product, setProduct] = useState<ProductResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get<ProductResponse>(`items/${productId}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch(() => {
        Alert.alert(
          'Erro ao buscar produto',
          'ocorreu um erro ao tentar buscar esse produto, tente novamente',
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  const hasDiscount = useMemo(() => {
    if (product) {
      return product.price.dealPrice && product.price.percentage;
    }

    return false;
  }, [product]);

  const originalPriceFormatted = useMemo(
    () => priceFormatter(product?.price.originalPrice || 0),
    [product?.price.originalPrice],
  );

  const dealPriceFormatted = useMemo(
    () => priceFormatter(product?.price.dealPrice || 0),
    [product?.price.dealPrice],
  );

  const handleAddToCart = useCallback(() => {
    if (product === null) return;

    const alreadyInCart = cartItems.find(
      ({ product: { id: cartItemId } }) => cartItemId === product.id,
    );

    if (alreadyInCart) {
      Alert.alert(
        'Erro ao adicionar produto ao carrinho',
        'parece que esse produto ja esta no seu carrinho.',
        [
          { text: 'Ver carrinho', onPress: () => navigate('CartList') },
          { text: 'Ok' },
        ],
      );

      return;
    }

    const { id, price, name, images } = product;

    dispatch(addProductToCart({ id, image: images[0], name, price }));
  }, [cartItems, dispatch, product, navigate]);

  return (
    <Container>
      <Header showCartButton />

      <ProductDetailContent>
        <ProductDetailScrollView>
          {product !== null && !isLoading && (
            <>
              <ProductImageContent>
                {product?.price.percentage && (
                  <DiscountTagItem>
                    <DiscountTagText>{`${product?.price.percentage}% OFF`}</DiscountTagText>
                  </DiscountTagItem>
                )}

                {product?.images.length > 0 && (
                  <ProductImageHorizontalScrollView>
                    {product?.images.map(uri => (
                      <ProductImage
                        key={uri}
                        resizeMode="contain"
                        source={{ uri }}
                      />
                    ))}
                  </ProductImageHorizontalScrollView>
                )}
              </ProductImageContent>

              <ProductName>{product.name}</ProductName>

              <ProductDescriptionText>
                {product?.description}
              </ProductDescriptionText>

              <Separator />

              {!hasDiscount ? (
                <ProductValue>{originalPriceFormatted}</ProductValue>
              ) : (
                <ProductDiscountValuesContent>
                  <ProductOriginalValue numberOfLines={1}>
                    {`De: ${originalPriceFormatted} `}
                  </ProductOriginalValue>

                  {!!product.price.dealPrice && (
                    <ProductWithDiscountValue numberOfLines={1}>
                      {`Por: ${dealPriceFormatted}`}
                    </ProductWithDiscountValue>
                  )}
                </ProductDiscountValuesContent>
              )}

              <FooterButtonsContent>
                <AddCartButton activeOpacity={0.5} onPress={handleAddToCart}>
                  <Icon name="cart-outline" color={MAIN_COLOR} size={22} />
                </AddCartButton>

                <Button customStyle={{ borderRadius: 12 }}>Comprar</Button>
              </FooterButtonsContent>
            </>
          )}
        </ProductDetailScrollView>
      </ProductDetailContent>
    </Container>
  );
};

export default ProductDetail;
