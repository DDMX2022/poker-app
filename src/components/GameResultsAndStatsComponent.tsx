import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const GameResultsAndStatsComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Icon name="trophy" size={20} color="#FFF" />
        <Text style={styles.sectionTitle}>Game Results</Text>
        <Text style={styles.description}>
          Results will be available after the next hand
        </Text>
      </View>
      <View style={styles.section}>
        <Icon name="chart-bar" size={20} color="#FFF" />
        <Text style={styles.sectionTitle}>My Session Stats</Text>
        <Text style={styles.description}>No Stats Available</Text>
        <Text style={styles.footerText}>
          Your session statistics will be available after your first hand
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10242d',
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height,
  },
  section: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#163746',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default GameResultsAndStatsComponent;
