import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {MAIN_SCREEN} from '../navigation/constants';

import Colors from '../styles/colors';
import fonts from '../styles/fonts';
import ReactLogoSvg from '../assets/icons/react_logo.svg';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = StackScreenProps<RootStackParamList, typeof MAIN_SCREEN>;

const Main: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.mainContainer}}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          ...styles.screenContainer,
        }}>
        <View style={styles.containerCentered}>
          <ReactLogoSvg style={styles.svgIcon} height={100} width={100} />
        </View>
        <View>
          <IconEntypo name="chevron-left" size={30} color="#900" />
        </View>
        <View>
          <IconEntypo name="chevron-left" size={30} color="#900" />
        </View>
        <View>
          <IconMaterialCommunity name="baby-face" size={30} color="#900" />
        </View>
        <View>
          <IconMaterialCommunity
            name="baby-face-outline"
            size={30}
            color="#900"
          />
        </View>
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
  containerCentered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgIcon: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Main;
