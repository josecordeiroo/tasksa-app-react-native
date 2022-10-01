import React, { useState, useEffect } from "react";
import { databaseApp } from "../../config/firebaseconfig";
import {
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
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
    await addDoc(tasksRef, {
      text: "MAAAAAAAAIS UM!",
      createdAt: serverTimestamp(),
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(tasksRef, id);
  };

  return (
    <View style={styles.container}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={(item) => {
          return (
            <View style={styles.Tasks}>
              {console.log(item)}
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.item.id);
                }}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.descriptionTask}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.item.id,
                    description: item.item.text,
                  })
                }
              >
                {item.item.text}
              </Text>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

//<TextInput placeholder="teste"/>
//<Button title="teste" onPress={() => sendTask()}/>
