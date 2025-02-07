import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import {
  BellIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  ClockIcon,
} from "react-native-heroicons/outline";
import { router } from "expo-router";

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
  Home: undefined;
};

const jobs = [
  {
    id: 1,
    company: "Pinterest, Inc.",
    location: "California, USA",
    title: "Motion Designer",
    level: "Senior",
    type: "Fulltime",
    remote: "Remote",
    salary: "$7K",
    logo: require("../../assets/images/pinterest.png"),
  },
  {
    id: 2,
    company: "Facebook",
    location: "California, USA",
    title: "UI Designer",
    level: "Senior",
    type: "Fulltime",
    remote: "Remote",
    salary: "$8K",
    logo: require("../../assets/images/facebook.png"),
  },
  {
    id: 3,
    company: "Google",
    location: "California, USA",
    title: "Product Designer",
    level: "Senior",
    type: "Fulltime",
    remote: "Remote",
    salary: "$5K",
    timeAgo: "12 Minute Ago",
    logo: require("../../assets/images/google.png"),
  },
];

const Index = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Hello</Text>
              <Text style={styles.username}>Leslie Alexander</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <View style={styles.notificationBadge} />
              <BellIcon size={24} color="#fff" strokeWidth={2} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <MagnifyingGlassIcon size={24} color="#9CA3AF" strokeWidth={2} />
            <TextInput
              placeholder="Search job, company, etc.."
              style={styles.searchInput}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
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
                onPress={() => router.push("/(jobs)/Job")}
                style={styles.card}
              >
                <View style={styles.cardHeader}>
                  <Image source={job.logo} style={styles.logo} />
                  <View style={styles.companyInfo}>
                  <Text style={styles.companyName}>{job.company}</Text>
                  <Text style={styles.location}>{job.location}</Text>
                </View>
                  <TouchableOpacity>
                    <BookmarkIcon size={24} color="#000" strokeWidth={2} />
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobDetails}>
                  {job.level} • {job.type} • {job.remote}
                </Text>
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
          {jobs
            .filter((job) => job.title === "Product Designer")
            .map((job) => (
              <TouchableOpacity
                key={job.id}
                onPress={() => router.push("/(jobs)/Job")}
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
                  <TouchableOpacity>
                    <BookmarkIcon size={24} color="#000" strokeWidth={2} />
                  </TouchableOpacity>
                </View>
                <View style={styles.recentJobRight}>
                  <View style={styles.recentJobSalary}>
                    <Text style={styles.salary}>{job.salary}</Text>
                    <Text style={styles.salaryPeriod}>/Month</Text>
                  </View>
                  {job.timeAgo && (
                    <View style={styles.timeAgo}>
                      <Text style={styles.timeAgoText}>{job.timeAgo}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
        </View>
        
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon size={24} color="#3F6CDF" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ChartBarIcon size={24} color="#9CA3AF" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <HeartIcon size={24} color="#9CA3AF" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <UserIcon size={24} color="#9CA3AF" strokeWidth={2} />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#3F6CDF",
    paddingBottom: 45,
    // marginBottom:26
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 20 : 40,
  },
  greeting: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.8,
    fontWeight: "400",
  },
  username: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    marginTop: 4,
  },
  notificationButton: {
    position: "relative",
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: "#EF4444",
    borderRadius: 4,
    zIndex: 1,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    marginBottom: -33,
    shadowRadius: 8,
    elevation: 8,
  },
  searchInput: {
    marginLeft: 12,
    fontSize: 16,
    flex: 1,
    color: "#000",
  },
  mainContent: {
    flex: 1,
    marginTop: -25,
    backgroundColor: "#fff",

    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
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
    backgroundColor: "#ECF0FC",
    padding: 16,
    borderRadius: 16,
    width: 280,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  companyInfo: {
    marginTop: 16,
    marginLeft: -20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  location: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginTop: 12,
  },
  jobDetails: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  applyButton: {
    backgroundColor: "#3F6CDF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  salaryContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  salary: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  salaryPeriod: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 2,
  },
  recentJob: {
    marginHorizontal: 20,
    marginTop: 16,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    flexDirection: "column",
    gap: 12,
    justifyContent: "space-between",
    
  },
  recentJobLeft: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontWeight: "600",
    color: "#000",
  },
  recentJobDetails: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  recentJobRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 50,
  },
  recentJobSalary: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  timeAgo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  timeAgoText: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    padding: 8,
  },
});

export default Index;
