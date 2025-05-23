
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {  View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import LoginScreen from './Login';
// Sample Bikes data with 3 more bikes
const bikes = [
  {
    id: '1',
    name: 'RX100',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
    price: 1299,
    features: [
      'Carbon Fiber Frame',
      'Full Suspension',
      '21-speed Shimano Gears',
      'Hydraulic Disc Brakes'
    ],
    specs: {
      frame: 'Carbon Fiber Frame',
      suspension: 'Full Suspension System',
      gears: '21-speed Shimano',
      brakes: 'Hydraulic Disc Brakes',
      tires: '29-inch All-Terrain',
      weight: '12.5 kg'
    }
  },
  {
    id: '2',
    name: 'Yamaha YZF R6',
    modelURI: 'https://sketchfab.com/models/e719fb6717804dcd969e5679511b03f3/embed?autostart=1&ui_controls=0',
    price: 899,
    features: [
      'Aluminum Alloy Frame',
      '7-speed Internal Hub',
      'Comfortable Upright Position',
      'Mechanical Disc Brakes'
    ],
    specs: {
      frame: 'Aluminum Alloy',
      suspension: 'Front Suspension',
      gears: '7-speed Internal Hub',
      brakes: 'Mechanical Disc Brakes',
      tires: '27.5-inch Urban',
      weight: '11.8 kg'
    }
  },
  {
    id: '3',
    name: 'Yamaha 500',
    modelURI: 'https://sketchfab.com/models/48919202c90e4a4096714eaadf6769a3/embed?autostart=1&ui_controls=0',
    price: 1499,
    features: [
      'Aerodynamic Frame',
      'Carbon Fiber Wheels',
      '11-speed Shimano Gears',
      'Hydraulic Disc Brakes'
    ],
    specs: {
      frame: 'Aerodynamic Carbon',
      suspension: 'None',
      gears: '11-speed Shimano',
      brakes: 'Hydraulic Disc Brakes',
      tires: '700C Road',
      weight: '8.5 kg'
    }
  },
  {
    id: '4',
    name: 'Yamaha YZF600R',
    modelURI: 'https://sketchfab.com/models/7511320c578f4d60b6592e4d983da560/embed?autostart=1&ui_controls=0',
    price: 799,
    features: [
      'Lightweight Aluminum Frame',
      'Front Suspension',
      'Shimano 7-speed Gears',
      'Disc Brakes'
    ],
    specs: {
      frame: 'Lightweight Aluminum',
      suspension: 'Front Suspension',
      gears: 'Shimano 7-speed',
      brakes: 'Disc Brakes',
      tires: '26-inch Urban',
      weight: '10.5 kg'
    }
  },
  {
    id: '5',
    name: 'Yamaha FZ8',
    modelURI: 'https://sketchfab.com/models/b37cf30c7c56443dad4a3860c708f98d/embed?autostart=1&ui_controls=0',
    price: 1399,
    features: [
      'Heavy-Duty Frame',
      'Full Suspension',
      'Shimano 24-speed Gears',
      'Hydraulic Disc Brakes'
    ],
    specs: {
      frame: 'Heavy-Duty Steel Frame',
      suspension: 'Full Suspension',
      gears: 'Shimano 24-speed',
      brakes: 'Hydraulic Disc Brakes',
      tires: '27.5-inch Off-Road',
      weight: '14.2 kg'
    }
  }
  
  
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBikes, setSelectedBikes] = useState([]);

  const filteredBikes = bikes.filter((bike) =>
    bike.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCompare = (bike) => {
    if (selectedBikes.length < 2 && !selectedBikes.includes(bike)) {
      setSelectedBikes((prevBikes) => [...prevBikes, bike]);
    }
  };

  const removeFromCompare = (bikeId) => {
    setSelectedBikes(selectedBikes.filter(bike => bike.id !== bikeId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Bikes..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredBikes}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <WebView
              style={styles.webview}
              source={{ uri: item.modelURI }}
              javaScriptEnabled={true}
              allowsFullscreenVideo={true}
            />
            <Text style={styles.bikeName}>{item.name}</Text>
            {selectedBikes.includes(item) ? (
              <TouchableOpacity
                style={styles.removeButtonInner}
                onPress={() => removeFromCompare(item.id)}
              >
                <Text style={styles.removeButtonInner}>Remove</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.compareButton}
                onPress={() => addToCompare(item)}
              >
                <Text style={styles.compareButtonText}>Add to Compare</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => navigation.navigate('Bike Details', { bike: item })}
            >
              <Text style={styles.detailButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.compareButton}
        onPress={() => navigation.navigate('Compare', { selectedBikes })}
        disabled={selectedBikes.length !== 2}
      >
        <Text style={styles.compareButtonText}>Compare Bikes</Text>
      </TouchableOpacity>
    </View>
  );
};

const BikeDetailScreen = ({ route }) => {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{bike.name}</Text>
      <WebView
        style={styles.webview}
        source={{ uri: bike.modelURI }}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
      />
      <Text style={styles.price}>Price: ${bike.price}</Text>
      <Text style={styles.featuresHeader}>Features:</Text>
      {bike.features.map((feature, index) => (
        <Text key={index} style={styles.feature}>
          - {feature}
        </Text>
      ))}
      <Text style={styles.specsHeader}>Specifications:</Text>
      {Object.entries(bike.specs).map(([key, value]) => (
        <Text key={key} style={styles.spec}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

const CompareScreen = ({ route, navigation }) => {
  const [selectedBikes, setSelectedBikes] = useState(route.params.selectedBikes);

  const removeBike = (bikeId) => {
    const updatedBikes = selectedBikes.filter(bike => bike.id !== bikeId);
    setSelectedBikes(updatedBikes); // Update the state to reflect the removal
  };

  if (selectedBikes.length !== 2) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Please select exactly 2 bikes to compare.</Text>
      </View>
    );
  }

  const [bike1, bike2] = selectedBikes;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Compare Bikes</Text>
      <View style={styles.comparisonTable}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>Attribute</Text>
          <Text style={styles.tableHeader}>{bike1.name}</Text>
          <Text style={styles.tableHeader}>{bike2.name}</Text>
        </View>
        {Object.keys(bike1.specs).map((key) => (
          <View style={styles.tableRow} key={key}>
            <Text style={styles.tableCell}>{key}</Text>
            <Text style={styles.tableCell}>{bike1.specs[key]}</Text>
            <Text style={styles.tableCell}>{bike2.specs[key]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
  <Stack.Screen 
    name="Login" 
    component={LoginScreen} 
    options={{ headerShown: false }} // Hides the header for the Login screen
  />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Bike Details" component={BikeDetailScreen} />
    <Stack.Screen name="Compare" component={CompareScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
