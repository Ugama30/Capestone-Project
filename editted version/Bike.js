// import React, { useState } from 'react';
// import 'react-native-gesture-handler';

// import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const models = [
//   { id: '1', name: 'Bike 1', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '2', name: 'Bike 2', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '3', name: 'Bike 3', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '4', name: 'Bike 4', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
// ];

// const HomeScreen = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const filteredModels = models.filter((model) =>
//     model.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Bikes..."
//         value={searchQuery}
//         onChangeText={(text) => setSearchQuery(text)}
//       />
//       <FlatList
//         data={filteredModels}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <WebView
//               style={styles.webview}
//               source={{ uri: item.uri }}
//               javaScriptEnabled={true}
//               allowsFullscreenVideo={true}
//             />
//             <Text style={styles.bikeName}>{item.name}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.listContainer}
//       />
//       <TouchableOpacity
//         style={styles.compareButton}
//         onPress={() => navigation.navigate('Compare')}
//       >
//         <Text style={styles.compareButtonText}>Compare Bikes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CompareScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Compare Bikes</Text>
//       {/* Add your bike comparison logic here */}
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Compare" component={CompareScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   listContainer: {
//     alignItems: 'center',
//   },
//   card: {
//     margin: 10,
//     width: 180,
//     height: 220,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     elevation: 3,
//   },
//   webview: {
//     flex: 1,
//   },
//   bikeName: {
//     textAlign: 'center',
//     padding: 5,
//     fontWeight: 'bold',
//   },
//   compareButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   compareButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


// import React, { useState } from 'react';
// import 'react-native-gesture-handler';

// import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const bikes = [
//   {
//     id: '1',
//     name: 'Mountain Explorer Pro',
//     image: '/placeholder.svg?height=300&width=300',
//     price: 1299,
//     features: [
//       'Carbon Fiber Frame',
//       'Full Suspension',
//       '21-speed Shimano Gears',
//       'Hydraulic Disc Brakes'
//     ],
//     specs: {
//       frame: 'Carbon Fiber Frame',
//       suspension: 'Full Suspension System',
//       gears: '21-speed Shimano',
//       brakes: 'Hydraulic Disc Brakes',
//       tires: '29-inch All-Terrain',
//       weight: '12.5 kg'
//     }
//   },
//   {
//     id: '2',
//     name: 'City Cruiser Elite',
//     image: '/placeholder.svg?height=300&width=300',
//     price: 899,
//     features: [
//       'Aluminum Alloy Frame',
//       '7-speed Internal Hub',
//       'Comfortable Upright Position',
//       'Mechanical Disc Brakes'
//     ],
//     specs: {
//       frame: 'Aluminum Alloy Frame',
//       suspension: 'Front Suspension',
//       gears: '7-speed Internal Hub',
//       brakes: 'Mechanical Disc Brakes',
//       tires: '27.5-inch Urban',
//       weight: '11.8 kg'
//     }
//   },
//   // Add more bike objects as needed
// ];

// const models = [
//   { id: '1', name: 'Bike 1', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '2', name: 'Bike 2', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '3', name: 'Bike 3', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
//   { id: '4', name: 'Bike 4', uri: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0' },
// ];

// const HomeScreen = ({ navigation }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const filteredModels = models.filter((model) =>
//     model.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Bikes..."
//         value={searchQuery}
//         onChangeText={(text) => setSearchQuery(text)}
//       />
//       <FlatList
//         data={filteredModels}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <WebView
//               style={styles.webview}
//               source={{ uri: item.uri }}
//               javaScriptEnabled={true}
//               allowsFullscreenVideo={true}
//             />
//             <Text style={styles.bikeName}>{item.name}</Text>
//           </View>
//         )}
//         contentContainerStyle={styles.listContainer}
//       />
//       <TouchableOpacity
//         style={styles.compareButton}
//         onPress={() => navigation.navigate('Compare')}
//       >
//         <Text style={styles.compareButtonText}>Compare Bikes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const CompareScreen = () => {
//   const [selectedBikes, setSelectedBikes] = useState([]);

//   const handleBikeSelect = (bike) => {
//     if (selectedBikes.length < 2 && !selectedBikes.includes(bike)) {
//       setSelectedBikes([...selectedBikes, bike]);
//     }
//   };

//   const renderComparisonTable = () => {
//     if (selectedBikes.length !== 2) return null;
    
//     const [bike1, bike2] = selectedBikes;

//     return (
//       <View style={styles.table}>
//         <View style={styles.row}>
//           <Text style={styles.tableHeader}>Feature</Text>
//           <Text style={styles.tableHeader}>{bike1.name}</Text>
//           <Text style={styles.tableHeader}>{bike2.name}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.tableCell}>Frame</Text>
//           <Text style={styles.tableCell}>{bike1.specs?.frame || 'N/A'}</Text>
//           <Text style={styles.tableCell}>{bike2.specs?.frame || 'N/A'}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.tableCell}>Suspension</Text>
//           <Text style={styles.tableCell}>{bike1.specs?.suspension || 'N/A'}</Text>
//           <Text style={styles.tableCell}>{bike2.specs?.suspension || 'N/A'}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.tableCell}>Brakes</Text>
//           <Text style={styles.tableCell}>{bike1.specs?.brakes || 'N/A'}</Text>
//           <Text style={styles.tableCell}>{bike2.specs?.brakes || 'N/A'}</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.tableCell}>Tires</Text>
//           <Text style={styles.tableCell}>{bike1.specs?.tires || 'N/A'}</Text>
//           <Text style={styles.tableCell}>{bike2.specs?.tires || 'N/A'}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Select Bikes for Comparison</Text>
//       <FlatList
//         data={bikes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.card} onPress={() => handleBikeSelect(item)}>
//             <Text style={styles.bikeName}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         contentContainerStyle={styles.listContainer}
//       />
//       {selectedBikes.length === 2 && renderComparisonTable()}
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Compare" component={CompareScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   listContainer: {
//     alignItems: 'center',
//   },
//   card: {
//     margin: 10,
//     width: 180,
//     height: 220,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//     elevation: 3,
//   },
//   webview: {
//     flex: 1,
//   },
//   bikeName: {
//     textAlign: 'center',
//     padding: 5,
//     fontWeight: 'bold',
//   },
//   compareButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   compareButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   table: {
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 5,
//   },
//   tableHeader: {
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//   },
// });



import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Sample Bikes data with 3 more bikes
const bikes = [
  {
    id: '1',
    name: 'Mountain Explorer',
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
    name: 'City Cruiser Elite',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
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
    name: 'Road Racer X',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
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
    name: 'Commuter Pro 2.0',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
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
    name: 'All-Terrain Beast',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
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
  },
  {
    id: '6',
    name: 'Urban Cyclist S',
    modelURI: 'https://sketchfab.com/models/7615fba3db6e4e1ebd0d11eac80a0050/embed?autostart=1&ui_controls=0',
    price: 999,
    features: [
      'Lightweight Frame',
      'Comfortable Riding Position',
      'Shimano 9-speed Gears',
      'Mechanical Disc Brakes'
    ],
    specs: {
      frame: 'Lightweight Aluminum Frame',
      suspension: 'No Suspension',
      gears: 'Shimano 9-speed',
      brakes: 'Mechanical Disc Brakes',
      tires: '700C Urban',
      weight: '9.8 kg'
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

const tailScreen = ({ route }) => {
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

      {/* Render Models in Comparison */}
      {/* <Text style={styles.heading}>Models:</Text>
      <WebView
        style={styles.modelWebview}
        source={{ uri: bike1.modelURI }}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
      />
      <WebView
        style={styles.modelWebview}
        source={{ uri: bike2.modelURI }}
        javaScriptEnabled={true}
        allowsFullscreenVideo={true}
      /> */}

      {/* <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeBike(bike1.id)}
      >
        <Text style={styles.removeButtonText}>Remove {bike1.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeBike(bike2.id)}
      >
        <Text style={styles.removeButtonText}>Remove {bike2.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.compareButton}
        onPress={() => navigation.goBack()}
      > */}
        {/* <Text style={styles.compareButtonText}>Go Back</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bike Details" component={BikeDetailScreen} />
        <Stack.Screen name="Compare" component={CompareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  removeButtonInner: {
    backgroundColor: '#dc3545', // Red color background
    paddingHorizontal: 15,  // Adjust horizontal padding to make the button wider
    paddingVertical: 5,     // Adjust vertical padding
    borderRadius: 5,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 10,
  },
  webview: {
    width: 400,
    height: 200,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  compareButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  compareButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  comparisonTable: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 10,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    fontWeight: 'bold',
    width: '33%',
    textAlign: 'center',
  },
  tableCell: {
    width: '33%',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modelWebview: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  }
});
