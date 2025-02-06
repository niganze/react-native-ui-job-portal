import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { 
  BellIcon, 
  MagnifyingGlassIcon, 
  BookmarkIcon, 
  HomeIcon, 
  HeartIcon, 
  UserIcon, 
  ClockIcon,
  ChartBarSquareIcon as ChartIcon 
} from 'react-native-heroicons/outline';

const jobs = [
  {
    id: 1,
    company: 'Pinterest, Inc.',
    location: 'California, USA',
    title: 'Motion Designer',
    level: 'Senior',
    type: 'Fulltime',
    remote: 'Remote',
    salary: '$7K',
    logo: require('../../assets/images/pinterest.png'),
  },
  {
    id: 2,
    company: 'Facebook',
    location: 'California, USA',
    title: 'UI Designer',
    level: 'Senior',
    type: 'Fulltime',
    remote: 'Remote',
    salary: '$8K',
    logo: require('../../assets/images/facebook.png'),
  },
  {
    id: 3,
    company: 'Google',
    location: 'California, USA',
    title: 'Product Designer',
    level: 'Senior',
    type: 'Fulltime',
    remote: 'Remote',
    salary: '$5K',
    timeAgo: '12 Minute Ago',
    logo: require('../../assets/images/google.png'),
  },
];

type Job = {
  id: number;
  company: string;
  location: string;
  title: string;
  level: string;
  type: string;
  remote: string;
  salary: string;
  logo: any;
  timeAgo?: string;
};

type RootStackParamList = {
  JobPage: { job: Job };
};

const Index = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.username}>Leslie Alexander</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <View style={styles.notificationBadge} />
            <BellIcon size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MagnifyingGlassIcon size={24} color="#9CA3AF" />
          <TextInput
            placeholder="Search job, company, etc.."
            style={styles.searchInput}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Recommendations */}
        <Text style={styles.sectionTitle}>Recomendation</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {jobs.slice(0, 2).map((job) => (
            <TouchableOpacity
              key={job.id}
              onPress={() => navigation.navigate('JobPage', { job })}
              style={styles.card}
            >
              <View style={styles.cardHeader}>
                <Image source={job.logo} style={styles.logo} />
                <TouchableOpacity>
                  <BookmarkIcon size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.companyInfo}>
                <Text style={styles.companyName}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
              </View>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobDetails}>{job.level} • {job.type} • {job.remote}</Text>
              <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyText}>Apply Now</Text>
                </TouchableOpacity>
                <View style={styles.salaryContainer}>
                  <Text style={styles.salary}>{job.salary}</Text>
                  <Text style={styles.salaryPeriod}>/Month</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recent Job List */}
        <Text style={styles.sectionTitle}>Recent Job List</Text>
        {jobs.map((job) => (
          <TouchableOpacity
            key={job.id}
            style={styles.recentJob}
          >
            <View style={styles.recentJobLeft}>
              <Image source={job.logo} style={styles.recentJobLogo} />
              <View style={styles.recentJobInfo}>
                <Text style={styles.recentJobTitle}>{job.title}</Text>
                <Text style={styles.recentJobDetails}>
                  {job.level} • {job.type} • {job.remote}
                </Text>
              </View>
            </View>
            <View style={styles.recentJobRight}>
              <View style={styles.recentJobSalary}>
                <Text style={styles.salary}>{job.salary}</Text>
                <Text style={styles.salaryPeriod}>/Month</Text>
              </View>
              {job.timeAgo && (
                <View style={styles.timeAgo}>
                  <ClockIcon size={16} color="#9CA3AF" />
                  <Text style={styles.timeAgoText}>{job.timeAgo}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon size={24} color="#4F46E5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ChartIcon size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <HeartIcon size={24} color="#9CA3AF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <UserIcon size={24} color="#9CA3AF" />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#4F46E5',
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    backgroundColor: '#EF4444',
    borderRadius: 4,
    zIndex: 1,
  },
  searchContainer: {
    marginTop: -20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    marginLeft: 12,
    fontSize: 16,
    flex: 1,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 24,
    marginHorizontal: 20,
  },
  scrollView: {
    marginTop: 16,
    paddingLeft: 20,
  },
  scrollViewContent: {
    paddingRight: 20,
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 16,
    width: 280,
    marginRight: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  companyInfo: {
    marginTop: 16,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 12,
  },
  jobDetails: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  applyButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  applyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  salaryContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  salaryPeriod: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 2,
  },
  recentJob: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentJobLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recentJobLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  recentJobInfo: {
    marginLeft: 12,
    flex: 1,
  },
  recentJobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  recentJobDetails: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  recentJobRight: {
    alignItems: 'flex-end',
  },
  recentJobSalary: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  timeAgo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timeAgoText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    padding: 8,
  },
});

export default Index;