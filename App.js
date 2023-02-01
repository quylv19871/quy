import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  FlatList,
  Text,
} from "react-native";

export default function App() {
  const data = [
    {
      id: 1,
      name: "iphone 11",
      price: 1000000,
    },
    {
      id: 2,
      name: "iphone 12",
      price: 15551111,
    },
  ];
  const [productList, setProductList] = useState(data);
  const [isShowAdd, setShowAdd] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);

  const handleAdd = () => {
    // khi bấm lưu sẽ gọi hàm này
    //1. định nghĩa obj moi se đc them vào mảng dữ liệu
    const newItem = {
      id: productList[productList.length - 1].id + 1,
      name: nameValue,
      price: priceValue,
    };
    //2. thêm phan tu mới vao mang sau do cap nhat lại danh sách
    // .. se lấy ra toàn bộ phan tử của mang sau đó ghep cùng 1 phần tử mới
    const newProductList = [...productList, newItem]; //...productList lấy tất cả các phần tử cũ và newitem phần tử mới tạo
    //3. cập nhật ds moi de hien thi
    setProductList(newProductList);
    //4. cập nhật input ve ds mac dinh va dong modal
    setNameValue("");
    setPriceValue(0);
    setShowAdd(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> PH12345</Text>
      <Text style={styles.text}> PH12345</Text>
      <Text style={styles.text}> PH12345</Text>
      {isShowAdd ? null : (
        <Button title="Them moi" onPress={() => setShowAdd(true)} />
      )}

      {/* visible của Modal se th hien trang thai an hien // thay thế cho cách
      dùng toán tử 3 ngôi ẩn hiện giao diện */}
      <Modal visible={isShowAdd} animationType="slide">
        <View>
          {/* <Button title="Them moi" onPress={() => setShowAdd(true)} /> */}
          {/* <Text>{nameValue}</Text> */}
          <TextInput
            placeholder="Ten san pham"
            value={nameValue}
            onChangeText={(text) => setNameValue(text)}
          />
          <TextInput
            placeholder="Gia san pham "
            keyboardType="numeric"
            value={priceValue}
            onChangeText={(text) => setPriceValue(text)}
          />
          <Button title="Huy" onPress={() => setShowAdd(false)} />
          <Button title="Luu" onPress={() => handleAdd()} />
        </View>
      </Modal>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <View>
            <Text> Ten SP: {item.name}</Text>
            <Text> Gia SP: {item.price} VND</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
