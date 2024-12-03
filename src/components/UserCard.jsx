import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourites, removeFromFavourites} from '../store/useActions';
import {colors} from '../utils/colors';

const UserCard = ({item, index}) => {
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.loginData.favourites);
  // console.log(favourites);

  const [isFavourite, setIsFavourite] = useState(favourites.includes(item));

  const handleFavourite = () => {
    console.log(item);

    if (!isFavourite) {
      setIsFavourite(true);
      dispatch(addToFavourites(item));
    } else {
      setIsFavourite(false);
      dispatch(removeFromFavourites(item));
    }
  };

  return (
    <View style={styles.cardContainer} key={index}>
      <Image style={styles.image} source={{uri: item.picture?.thumbnail}} />
      <View style={styles.details}>
        <Text>{item.name?.first + ' ' + item.name?.last}</Text>
        <View style={styles.location}>
          <Ionicons
            name={'location-outline'}
            color={colors.buttonDiable}
            size={18}
          />
          <Text style={styles.locationText}>
            {item.location?.city + ', ' + item.location?.state}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleFavourite}>
        <Ionicons
          name={isFavourite ? 'star' : 'star-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
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
