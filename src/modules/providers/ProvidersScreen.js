import { useState } from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import { providers } from "../../data/providers";
import ProviderCard from "./ProviderCard";

export default function ProvidersScreen({ route, navigation }) {
  const { category } = route.params;
  const filtered = providers.filter((p) => p.category === category);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{category} Services</Text>
      <Text style={styles.subtitle}>{filtered.length} providers available</Text>
      
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProviderCard
            item={item}
            onBook={() => navigation.navigate("BookingForm", { provider: item })}
            onFav={() => console.log("fav toggled")}
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