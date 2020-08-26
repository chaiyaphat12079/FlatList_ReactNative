import React, { useState, useRef,useEffect } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afewfxvxccccd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-esrewrd72",
    title: "Third Item",
  },
  {
    id: "58694rewfdsfdsf96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3rwedsfdsfz6-145571e29d72",
    title: "Third Item",
  },
  {
    id: "586rda1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58erda1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3wqd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "5869re471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3dw71e29d72",
    title: "Third Item",
  },
  {
    id: "58694afs145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694fdbd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  useEffect(()=>{
    console.log(scrollRef.current.scrollToEnd);
  },[])
  const scrollRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{width:150,height:50,backgroundColor:'red'}} onPress={()=>{scrollRef.current.scrollToEnd()}}>
        <Text>GO TO BOTTOM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:150,height:50,backgroundColor:'green'}} onPress={()=>{scrollRef.current.scrollToOffset({ animated: true, offset: 200 })}}>
        <Text>GO TO TOP</Text>
      </TouchableOpacity>
      <FlatList
        
        ref={scrollRef}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
