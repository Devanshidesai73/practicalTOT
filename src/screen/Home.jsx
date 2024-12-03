import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {colors} from '../utils/colors';
import UserCard from '../components/UserCard';

const Home = () => {
  const baseURL = 'https://randomuser.me/api';

  const [users, setUsers] = useState([
    {
      userList: [],
      totalPage: null,
      loading: true,
      refreshing: false,
    },
  ]);

  const [pagination, setPagination] = useState({
    page: 1,
    seed: 1,
    isLoading: false,
    results: 10,
  });

  const onRefresh = () => {
    setUsers({...users, refreshing: true, loading: true});
    setPagination({...pagination, page: 1, results: 10});
    setTimeout(() => {
      setUsers({...users, refreshing: false, loading: true});
    }, 2000);
  };

  const footerHandler = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: colors.secondary,
        }}>
        <ActivityIndicator animating size={'large'} />
      </View>
    );
  };

  const endReachedHandler = useCallback(() => {
    if (pagination.page < users.totalPage) {
      pagination.page++;
      console.log(pagination.page, users.totalPage);
      setPagination({
        ...pagination,
        page: pagination.page,
        seed: 1,
        results: 10,
        isLoading: true,
      });
      setUsers({...users, loading: true});
      getData();
    }
  }, [pagination]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(async () => {
    console.log('===========================');
    console.log(pagination);
    console.log('===========================');

    const options = {
      method: 'get',
      url: `${baseURL}/?seed=${pagination.seed}&page=${pagination.page}&results=${pagination.results}`,
      responseType: 'json',
    };
    const {data} = await axios(options);
    setUsers({
      userList:
        pagination.page == 1 ? data.results : [...data.results, users.userList],
      totalPage: 30,
      loading: false,
    });
  }, [pagination]);

  return (
    <View style={styles.container}>
      <FlatList
        data={users.userList}
        refreshControl={
          <RefreshControl refreshing={users.refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item, index}) => {
          return <UserCard item={item} index={index} key={index} />;
        }}
        keyExtractor={({item, index}) => index}
        ListFooterComponent={footerHandler}
        onEndReached={endReachedHandler}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});
