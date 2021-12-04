import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {MAIN_SCREEN} from '../navigation/constants';

import Colors from '../styles/colors';
import fonts from '../styles/fonts';

type Props = StackScreenProps<RootStackParamList, typeof MAIN_SCREEN>;

const Main: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.mainContainer}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          ...styles.screenContainer,
        }}>
        <Text style={styles.textCentered}>Lorem ipsum</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  textCentered: {
    ...fonts.bold,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 40,
  },
});

export default Main;
