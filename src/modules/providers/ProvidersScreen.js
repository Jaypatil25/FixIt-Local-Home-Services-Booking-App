import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { providers } from "../../data/providers";
import ProviderCard from "./ProviderCard";

export default function ProvidersScreen({ route, navigation }) {
  const { category } = route.params;
  const [favorites, setFavorites] = useState([]);
  const filtered = providers.filter((p) => p.category === category);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("fixit_favorites");
      setFavorites(stored ? JSON.parse(stored) : []);
    } catch (error) {
      console.log("Error loading favorites:", error);
    }
  };

  const toggleFavorite = async (providerId) => {
    try {
      let updatedFavorites;
      if (favorites.includes(providerId)) {
        updatedFavorites = favorites.filter(id => id !== providerId);
      } else {
        updatedFavorites = [...favorites, providerId];
      }
      
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("fixit_favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.log("Error saving favorites:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{category} Services</Text>
      <Text style={styles.subtitle}>{filtered.length} providers available</Text>
      
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProviderCard
            item={{...item, fav: favorites.includes(item.id)}}
            onBook={() => navigation.navigate("BookingForm", { provider: item })}
            onFav={() => toggleFavorite(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
  },
});