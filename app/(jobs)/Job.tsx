import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MessageCircle } from 'lucide-react-native';

export default function JobPage() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTransparent: true,
          headerTintColor: '#000',
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Image */}
          <Image
            source={require('../../assets/images/product-designer.jpg')}
            style={styles.headerImage}
            resizeMode="cover"
          />
          
          <View style={styles.content}>
            {/* Company Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={require('../../assets/images/google.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
            
            {/* Job Title & Location */}
            <Text style={styles.title}>Product Designer</Text>
            <Text style={styles.location}>California, USA</Text>
            
            {/* Navigation Tabs */}
            <View style={styles.tabsContainer}>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabs}
              >
                <Text style={[styles.tab, styles.activeTab]}>Description</Text>
                <Text style={styles.tab}>Company</Text>
                <Text style={styles.tab}>Aplicant</Text>
                <Text style={styles.tab}>Salary</Text>
              </ScrollView>
            </View>
            
            {/* Job Responsibilities */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Job Responsibilities</Text>
              <View style={styles.responsibilitiesList}>
                <Text style={styles.responsibility}>
                  • Deliver a well-crafted design that follows standard for consistency in quality and experience.
                </Text>
                <Text style={styles.responsibility}>
                  • Design creative solutions that deliver not only value customer but also solve business objectives.
                </Text>
                <Text style={styles.responsibility}>
                  • You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system.
                </Text>
              </View>
            </View>
            
            {/* Skills Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills Needed</Text>
              <View style={styles.skillsContainer}>
                <View style={styles.skillWrapper}>
                  <Text style={styles.skill}>Lead</Text>
                </View>
                <Text style={styles.skillDot}>•</Text>
                <View style={styles.skillWrapper}>
                  <Text style={styles.skill}>UX Design</Text>
                </View>
                <Text style={styles.skillDot}>•</Text>
                <View style={styles.skillWrapper}>
                  <Text style={styles.skill}>Problem Solving</Text>
                </View>
                <Text style={styles.skillDot}>•</Text>
                <View style={styles.skillWrapper}>
                  <Text style={styles.skill}>Critical</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        
        {/* Footer Buttons */}
        <View style={styles.footer}>
          
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <MessageCircle size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 240,
  },
  content: {
    flex: 1,
    marginTop: -40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    marginTop: -40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 16,
  },
  location: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
  },
  tabsContainer: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabs: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  tab: {
    marginRight: 32,
    fontSize: 16,
    color: '#6B7280',
    paddingVertical: 8,
  },
  activeTab: {
    color: '#000',
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  responsibilitiesList: {
    gap: 12,
  },
  responsibility: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  skillWrapper: {
    marginVertical: 4,
  },
  skill: {
    fontSize: 16,
    color: '#6B7280',
  },
  skillDot: {
    fontSize: 16,
    color: '#6B7280',
    marginHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  messageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#3F6CDF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    flex: 1,
    height: 56,
    backgroundColor: '#3F6CDF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});