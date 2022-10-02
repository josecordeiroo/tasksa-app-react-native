import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { databaseApp } from "../../config/firebaseconfig";
import styles from "./style";

import {
  collection,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

export default function Details({ navigation, route }) {
  const db = query(collection(databaseApp, "Tasks"));

  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const idTask = route.params.id;
  const createdAt = route.params.createdAt

  const editTask = async () => {
    await setDoc(doc(db, idTask), {
      text: descriptionEdit,
      status: false,
      createdAt: createdAt,
      updatedAt: serverTimestamp(),
    });
    navigation.navigate("Lista de Tarefas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Atualizar a tarefa:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova tarefa"
        value={descriptionEdit}
        onChangeText={setDescriptionEdit}
      />
      <TouchableOpacity style={styles.buttonNewTask} onPress={() => editTask()}>
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
