import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 10,
    elevation: 2, // for shadow effect
  },
  webview: {
    width: 400,
    height: 200,
    borderRadius: 5,
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
    textAlign: 'center',
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
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  comparisonTable: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
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
    color: '#555',
  },
  tableCell: {
    width: '33%',
    textAlign: 'center',
    color: '#333',
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
  removeButtonInner: {
    backgroundColor: '#dc3545', // Red color background
    paddingHorizontal: 15, // Adjust horizontal padding
    paddingVertical: 5, // Adjust vertical padding
    borderRadius: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  featuresHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 15,
  },
  feature: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  specsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 15,
  },
  spec: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  modelWebview: {
    width: '100%',
    height: 300,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default styles;
