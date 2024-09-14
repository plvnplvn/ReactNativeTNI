import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";

import { ListItem, Avatar, Tile } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [detail, setDetail] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);



  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [route, navigation]);

  const getProductbyId = async () => {
    try {
      const response = await findProductbyId(route.params.id);
      //console.log(response.data.data);
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getProductbyId();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => (
    <>
      <Tile
        imageSrc={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUS4m65fzU80tJXBNnQOjQJtb1b4GJ9wfkw&s",
          cache: "force-cache",
        }}
        title={item.ch_title}
        titleStyle={styles.titleStyle}
        containerStyle={styles.tileContainer}
        caption={item.ch_dateadd}
        captionStyle={styles.captionStyle}
        featured
        activeOpacity={0.9}
        width={Dimensions.get("screen").width - 20}
      />
    </>
  );

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item: any) => item.ch_id.toString()}
        renderItem={_renderItem}
        onRefresh={() =>{
          getProductbyId();
        }}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
  },
  listContent: {
    paddingHorizontal: 10, 
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7c2e9c", 
  },
  tileContainer: {
    borderRadius: 10,
    overflow: "hidden", 
    marginBottom: 10, 
    elevation: 5,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    opacity: 0.5,
  },
  captionStyle: {
    fontSize: 14,
    color: "#584460", 
  },
});
