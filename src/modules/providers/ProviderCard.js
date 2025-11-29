import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ProviderCard({ item, onBook, onFav }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={onFav} style={styles.favButton}>
          <Ionicons 
            name={item.fav ? "heart" : "heart-outline"} 
            size={24} 
            color={item.fav ? "#e74c3c" : "#bdc3c7"} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.details}>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="#f39c12" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      
      <TouchableOpacity style={styles.bookButton} onPress={onBook}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  favButton: {
    padding: 4,
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  bookButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});