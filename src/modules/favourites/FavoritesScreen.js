import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { providers } from "../../data/providers";
import ProviderCard from "../providers/ProviderCard";

export default function FavoritesScreen({ navigation }) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteProviders, setFavoriteProviders] = useState([]);

  useEffect(() => {
    loadFavorites();
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("fixit_favorites");
      const ids = stored ? JSON.parse(stored) : [];
      setFavoriteIds(ids);
      
      const favProviders = providers.filter(p => ids.includes(p.id));
      setFavoriteProviders(favProviders);
    } catch (error) {
      console.log("Error loading favorites:", error);
    }
  };

  const handleBook = (provider) => {
    navigation.navigate("BookingForm", { provider });
  };

  const toggleFavorite = async (providerId) => {
    try {
      let updatedFavorites;
      if (favoriteIds.includes(providerId)) {
        updatedFavorites = favoriteIds.filter(id => id !== providerId);
      } else {
        updatedFavorites = [...favoriteIds, providerId];
      }
      
      setFavoriteIds(updatedFavorites);
      await AsyncStorage.setItem("fixit_favorites", JSON.stringify(updatedFavorites));
      
      const favProviders = providers.filter(p => updatedFavorites.includes(p.id));
      setFavoriteProviders(favProviders);
    } catch (error) {
      console.log("Error saving favorites:", error);
    }
  };

    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorite Providers</Text>
      
      {favoriteProviders.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>
            Add providers to favorites by tapping the star icon
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.subtitle}>{favoriteProviders.length} favorite providers</Text>
          <FlatList
            data={favoriteProviders}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ProviderCard
                item={{...item, fav: favoriteIds.includes(item.id)}}
                onBook={() => handleBook(item)}
                onFav={() => toggleFavorite(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bdc3c7',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});