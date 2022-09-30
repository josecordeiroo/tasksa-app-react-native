import React, { useState, useEffect } from "react";
import { databaseApp } from "../../config/firebaseconfig";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

export default function Task({navigation}) {
  
  const tasksRef = collection(databaseApp, "Tasks");
  const QueryTasks = query(tasksRef, orderBy("createdAt"));
  const [messages] = useCollectionData(QueryTasks, { idField: "id" });
  
  return (
    <View style={styles.container}>
      <FlatList/>
      <TouchableOpacity
      style={styles.buttonNewTask}
      onPress={() => navigation.navigate("NewTask")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
