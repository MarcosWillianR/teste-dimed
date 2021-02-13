import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { MAIN_COLOR, PLACEHOLDER_COLOR } from '../../styles/variables';

import { Container, Input, SearchButton } from './styles';

interface SearchProps {
  searchText(currentTextValue: string): void;
}

const Search: React.FC<SearchProps> = ({ searchText }) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback((focused: boolean) => {
    setIsFocused(focused);
  }, []);

  const handleSearch = useCallback(() => {
    searchText(text);
  }, [text, searchText]);

  return (
    <Container>
      <SearchButton onPress={handleSearch}>
        <Icon
          name="search-outline"
          color={isFocused ? MAIN_COLOR : PLACEHOLDER_COLOR}
          size={27}
        />
      </SearchButton>

      <Input
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        placeholderTextColor={PLACEHOLDER_COLOR}
        placeholder="Buscar por produto"
        onChangeText={textValue => setText(textValue)}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
    </Container>
  );
};

export default Search;
