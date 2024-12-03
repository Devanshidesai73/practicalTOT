import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {useSelector} from 'react-redux';
import UserCard from '../components/UserCard';

const Favourite = () => {
  const favouritesList = useSelector(state => state.loginData.favourites);
  const filteredItems =
    favouritesList.filter(item => item !== null && item.gender !== undefined) ??
    [];
  const [favourites, setFavourites] = useState(filteredItems);

  console.log(favourites);

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        renderItem={({item, index}) => {
          return <UserCard item={item} index={index} key={index} />;
        }}
        keyExtractor={({item, index}) => index}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  cardContainer: {
    backgroundColor: colors.white,
    marginBottom: 12,
    borderRadius: 7,
    flexDirection: 'row',
    padding: 7,
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  details: {
    flex: 1,
    paddingHorizontal: 12,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 2,
  },
  locationText: {
    flex: 1,
    paddingHorizontal: 5,
    color: colors.buttonDiable,
  },
});
