import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {CAROUSEL_SCREEN} from '../navigation/constants';
import ImageCarousel from '../components/carousel/ImageCarousel';
import {getCarousel} from '../api/carouselApi';
import {useQuery} from 'react-query';

import Colors from '../styles/colors';

type Props = StackScreenProps<RootStackParamList, typeof CAROUSEL_SCREEN>;

const Carousel: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    flex: 1,
  };

  const {
    data: carouselData,
    isLoading,
    isError,
  } = useQuery<CarouselItem[], Error>('carousel', getCarousel);

  const _renderCarousel = () => {
    if (isLoading) {
      return (
        <View>
          <Text>Loading carousel...</Text>
        </View>
      );
    }

    if (isError) {
      return (
        <View>
          <Text>Error loading carousel...</Text>
        </View>
      );
    }

    const randomizedData: CarouselItemRandomized[] = [];
    carouselData?.forEach(item => {
      randomizedData.push({
        title: item.title,
        imageUrl: item.images[Math.floor(Math.random() * item.images.length)],
      });
    });

    return <ImageCarousel data={randomizedData} />;
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.mainContainer}}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.black : Colors.white}
      />

      {_renderCarousel()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Carousel;
