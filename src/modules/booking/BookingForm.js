import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export default function BookingForm({ route, navigation }) {
  const { provider } = route.params;
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("Morning");
  const [notes, setNotes] = useState("");
} 

  const slots = ["Morning", "Afternoon", "Evening"];

const saveBooking = async () => {
    if (!date) {
      Alert.alert("Error", "Please select a date");
      return;
    }  

    try {
      let stored = await AsyncStorage.getItem("fixit_bookings");
      let bookings = stored ? JSON.parse(stored) : [];
      
      bookings.push({
        id: Date.now(),
        providerId: provider.id,
        providerName: provider.name,
        date,
        slot,
        notes,
        status: "Requested",
        price: provider.price
      });
      
      await AsyncStorage.setItem("fixit_bookings", JSON.stringify(bookings));
      Alert.alert("Success", "Booking confirmed!", [
        { text: "OK", onPress: () => navigation.navigate("MainTabs", { screen: "History" }) }
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to save booking");
    }
  };