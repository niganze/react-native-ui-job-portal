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
          headerTintColor: '#fff',
          headerTitle: '',
        }}
      />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image
            source={require('../../assets/images/office-image.png')}
            style={styles.headerImage}
          />
          
          <View style={styles.content}>
            <Image
              source={require('../../assets/images/google-logo.png')}
              style={styles.logo}
            />
            
            <Text style={styles.title}>Product Designer</Text>
            <Text style={styles.location}>California, USA</Text>
            
            <View style={styles.tabs}>
              <Text style={[styles.tab, styles.activeTab]}>Description</Text>
              <Text style={styles.tab}>Company</Text>
              <Text style={styles.tab}>Aplicant</Text>
              <Text style={styles.tab}>Salary</Text>
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Job Responsibilities</Text>
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
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills Needed</Text>
              <View style={styles.skillsContainer}>
                <Text style={styles.skill}>Lead</Text>
                <Text style={styles.skill}>UX Design</Text>
                <Text style={styles.skill}>Problem Solving</Text>
                <Text style={styles.skill}>Critical</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.messageButton}>
            <MessageCircle size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply Now</Text>
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
    height: 200,
  },
  content: {
    padding: 16,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: -30,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 12,
    marginRight: 24,
    color: '#666',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  responsibility: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  messageButton: {
    width: 48,
    height: 48,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#4169e1',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});