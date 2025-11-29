import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CategoriesScreen({ navigation }) {
  const categories = [
    { name: "Plumbing", icon: "water-outline", description: "Pipes, leaks, installations" },
    { name: "Electrical", icon: "flash-outline", description: "Wiring, repairs, installations" },
    { name: "Cleaning", icon: "sparkles-outline", description: "Deep cleaning, maintenance" },
    { name: "Appliance Repair", icon: "construct-outline", description: "Fix all home appliances" }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>FixIt Services</Text>
          <Text style={styles.subtitle}>Professional home services at your fingertips</Text>
        </View>
        
        <View style={styles.grid}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={styles.categoryCard}
              onPress={() => navigation.navigate("Providers", { category: cat.name })}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={cat.icon} size={32} color="#3498db" />
              </View>
              <Text style={styles.categoryText}>{cat.name}</Text>
              <Text style={styles.categoryDescription}>{cat.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>Why Choose FixIt?</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#27ae60" />
              <Text style={styles.featureText}>Verified professionals</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#27ae60" />
              <Text style={styles.featureText}>Transparent pricing</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#27ae60" />
              <Text style={styles.featureText}>24/7 support</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    minHeight: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#f8f9fa',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 6,
  },
  categoryDescription: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 16,
  },
  featuresSection: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
});