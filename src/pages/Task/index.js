import React, { useState, useEffect } from "react";
import { databaseApp } from "../../config/firebaseconfig";
import { collection, query, orderBy, addDoc, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation }) {
  const tasksRef = collection(databaseApp, "Tasks");
  const QueryTasks = query(tasksRef, orderBy("createdAt"));
  const [tasks] = useCollectionData(QueryTasks);

  const sendTask = async () => {
    // e.preventDefault();

    await addDoc(tasksRef, {
      text: "teste2",
      createdAt: serverTimestamp(),
    });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="teste"/>
      <Button title="teste" onPress={() => sendTask()}/>
      <FlatList />

      {console.log(tasks)}
      {tasks &&
        tasks.map((task, index) => {
          return <Text>{task.text}</Text>;
        })}

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

//
