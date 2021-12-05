import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {CAROUSEL_SCREEN} from '../navigation/constants';
import ImageCarousel from '../components/carousel/ImageCarousel';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../styles/colors';

type Props = StackScreenProps<RootStackParamList, typeof CAROUSEL_SCREEN>;

const carouselData: CarouselItem[] = [
  {
    title: 'First block',
    images: [
      'https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112',
      'https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177',
      'https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400',
    ],
  },
  {
    title: '2nd block',
    images: [
      'https://media.istockphoto.com/photos/woman-standing-and-looking-at-lago-di-carezza-in-dolomites-picture-id1038870630',
      'https://media.istockphoto.com/photos/child-hugging-tree-with-heart-shape-on-it-picture-id1226721220',
      'https://media.istockphoto.com/photos/path-through-sunlit-forest-picture-id1205214235',
    ],
  },
  {
    title: '3rd block',
    images: [
      'https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177',
      'https://media.istockphoto.com/photos/dandelion-seed-picture-id157681198',
      'https://media.istockphoto.com/photos/winding-road-picture-id1173544006',
    ],
  },
  {
    title: '4th block',
    images: [
      'https://media.istockphoto.com/photos/beautiful-emeraldcolored-glacial-rivers-of-iceland-taken-from-a-picture-id1202227531',
      'https://media.istockphoto.com/photos/mata-atlantica-atlantic-forest-in-brazil-picture-id935746242',
      'https://media.istockphoto.com/photos/dandelion-picture-id1180494132',
    ],
  },
  {
    title: '5th block',
    images: [
      'https://media.istockphoto.com/photos/frank-o-gehrys-neuer-zollhof-buildings-at-medienhafen-dusseldorf-picture-id577660854',
      'https://media.istockphoto.com/photos/cecilienhof-palace-in-new-park-potsdam-germany-picture-id1214112532',
      'https://media.istockphoto.com/photos/rostock-christmas-market-at-neuer-markt-square-on-a-sunny-day-picture-id890124032',
    ],
  },
  {
    title: '6th block',
    images: [
      'https://media.istockphoto.com/photos/neuer-zollhof-by-architect-frank-o-gehry-in-the-media-harbour-in-picture-id1052880010',
      'https://media.istockphoto.com/photos/neuer-zollhof-buildings-and-rhein-tower-at-medienhafen-dusseldorf-picture-id465800908',
      'https://media.istockphoto.com/photos/donnerbrunnen-fountain-in-vienna-austria-baroque-fountain-located-on-picture-id1143320171',
    ],
  },
  {
    title: '7th block',
    images: [
      'https://media.istockphoto.com/photos/capuchin-church-which-houses-imperial-crypt-in-vienna-picture-id1092151828',
      'https://media.istockphoto.com/photos/frank-o-gehrys-neuer-zollhof-buildings-at-medienhafen-dusseldorf-picture-id458937731',
      'https://media.istockphoto.com/photos/evening-view-of-media-harbor-with-neuer-zollhof-buldings-in-germany-picture-id825227704',
    ],
  },
  {
    title: '8th block',
    images: [
      'https://media.istockphoto.com/photos/famous-donner-fountain-at-the-neuer-markt-picture-id494738703',
      'https://media.istockphoto.com/photos/ocean-at-dawn-picture-id466888366',
      'https://media.istockphoto.com/photos/chimney-stacks-of-cecilienhof-palace-in-neuer-park-potsdam-germany-picture-id1279201016',
    ],
  },
];

const Carousel: React.FC<Props> = () => {
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
      <View>
        <IconEntypo name="chevron-left" size={30} color="#900" />
      </View>
      <ImageCarousel data={carouselData} />
      <Text>Carousel</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Carousel;
