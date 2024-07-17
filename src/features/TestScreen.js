import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {COLORS} from '../utils/colors';

function TestScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const colors = COLORS[colorScheme ?? 'dark'];

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'left',
      headerTitle: 'Test Screen',
      headerStyle: {
        backgroundColor: colors.primary,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
      headerTitleStyle: {
        color: colors.secondary,
      },
    });
  }, [navigation, colorScheme, colors]);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: colors.primary},
      ]}
      showsVerticalScrollIndicator={false}>
      <View style={[styles.logoContainer, {borderColor: colors.secondary}]}>
        <Text style={[styles.logoNumberText, {color: colors.secondary}]}>
          1
        </Text>
        <Text style={{color: colors.secondary}}>ⓘ</Text>
      </View>
      <Text style={[styles.mainInfoTextBase, {color: colors.secondary}]}>
        Bold Text
      </Text>
      <Text style={{color: colors.secondary}}>Regular Text</Text>
      <TouchableOpacity style={styles.linkButton}>
        <Text style={[styles.linkButtonText, {color: colors.secondary}]}>
          Link Text
        </Text>
      </TouchableOpacity>
      <View style={[styles.divider, {backgroundColor: colors.secondary}]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logoContainer: {
    height: 100,
    width: 100,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    borderWidth: 3,
    borderRadius: 20,
  },
  logoNumberText: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  mainInfoTextBase: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  linkButton: {
    marginVertical: 8,
  },
  linkButtonText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default TestScreen;
