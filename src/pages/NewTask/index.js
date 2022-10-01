import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";

import {
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { databaseApp } from "../../config/firebaseconfig";
import styles from "./style";

export default function NewTask({ navigation }) {
  const db = query(collection(databaseApp, "Tasks"));
  const [description, setDescription] = useState(null);

  const addTask = async () => {
    await addDoc(db, {
      text: description,
      status: false,
      createdAt: serverTimestamp(),
    });
    navigation.navigate("Task")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Criar:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova tarefa"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => addTask()}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
