// landing-page.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  const recommendedJobs = [
    {
      id: 1,
      company: 'Pinterest, Inc.',
      logo: ('../../assets/images/pinterest-logo.png'),
      position: 'Motion Designer',
      location: 'California, USA',
      type: 'Senior • Fulltime • Remote',
      salary: '$7K/Month'
    },
    {
      id: 2,
      company: 'Google',
      logo: ('../../assets/images/google-logo.png'),
      position: 'Product Designer',
      location: 'California, USA',
      type: 'Senior • Fulltime • Remote',
      salary: '$5K/Month'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={styles.name}>Leslie Alexander</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image source={require('../../assets/images/notification.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search job, company, etc..</Text>
      </View>

      <Text style={styles.sectionTitle}>Recomendation</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.jobCards}>
        {recommendedJobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.jobCard}
            onPress={() => navigation.navigate('JobPage', { jobId: job.id })}
          >
            <View style={styles.cardHeader}>
              <Image source={job.logo} style={styles.companyLogo} />
              <TouchableOpacity style={styles.bookmarkButton}>
                <Image source={require('../../assets/images/bookmark.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.position}>{job.position}</Text>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.jobType}>{job.type}</Text>
            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
              <Text style={styles.salary}>{job.salary}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recent Job List</Text>
      {/* Recent job list implementation similar to cards above */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    color: '#666',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  jobCards: {
    marginBottom: 24,
  },
  jobCard: {
    backgroundColor: '#f8f9ff',
    padding: 16,
    borderRadius: 16,
    marginRight: 16,
    width: 280,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  bookmarkButton: {
    padding: 8,
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  company: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  jobType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#4169e1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  salary: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default LandingPage;