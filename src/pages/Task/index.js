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
  onSnapshot,
} from "firebase/firestore";
import {
  useCollectionData,
  useCollection,
  useCollectionOnce,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";

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
  const [task, setTask] = useState([]);
  const db = query(collection(databaseApp, "Tasks"));

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, id));
  };

  //fetch all docs from database on firebase and put in const task
  useEffect(() => {
    onSnapshot(db, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={(item) => {
          return (
            <View key={item.index} style={styles.Tasks}>
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

// const tasksRef = collection(databaseApp, "Tasks");
// const QueryTasks = query(tasksRef);
// const [tasks] = useCollectionData(QueryTasks);

// const sendTask = async () => {
//   await addDoc(tasksRef, {
//     text: "MAAAAAAAAIS UM!",
//     createdAt: serverTimestamp(),
//   });
// };

//<TextInput placeholder="teste"/>
//<Button title="teste" onPress={() => sendTask()}/>

{
  /* {tasks ? (
        tasks.map((task) => {
          return <View style={styles.Tasks}>
            {console.log(tasksteste)}
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(task);
              }}
            >
              <FontAwesome name="star" size={23} color="#F92e6A"></FontAwesome>
            </TouchableOpacity>
            <Text
              style={styles.descriptionTask}
              onPress={() =>
                navigation.navigate("Details", {
                  id: task.id,
                  description: task.text,
                })
              }
            >
              {task.text}
            </Text>
          </View>;
        })
      ) : (
        <Text>piriri</Text>
      )} */
}
{
  /* {console.log(task)} */
}

// tasksRef.onSnapshot((query) => {
//   const list = [];
//   query.forEach((doc) => {
//     list.push({ ...doc.data(), id: doc.id });
//   });
//   setTask(list);
// });
