import React, {FC, useState, useEffect, useRef, useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import colors from '../../styles/colors';

const ITEMS_IN_VIEW = 4;
const TRANSLATE_Y_AMOUNT = 48;

interface ImageCarouselProps {
  data: CarouselItemRandomized[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({data}) => {
  const [width, setWidth] = useState<number>(0);
  const itemLength = width * 0.2;
  const placeholderLength = (width - itemLength * 4) / 2;
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);
  const flatListRef = useRef<FlatList<any>>(null);
  const currentIndex = useRef<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const [dataWithPlaceholders, setDataWithPlaceholders] = useState<
    CarouselItemRandomized[]
  >([]);

  useEffect(() => {
    setDataWithPlaceholders([
      {title: '', imageUrl: ''},
      ...data,
      {title: '', imageUrl: ''},
    ]);
  }, [data]);

  const onViewableItemsChanged = useCallback(
    ({viewableItems}) => {
      const itemsInView = viewableItems.filter(
        ({item}: {item: CarouselItemRandomized}) => item.imageUrl && item.title,
      );

      if (itemsInView.length === 0) {
        return;
      }

      if (__DEV__) {
        console.log('ITEMS IN VIEW');
        itemsInView.forEach((item: CarouselItemRandomized) => {
          console.log(item);
        });
      }

      currentIndex.current = itemsInView[0].index;
      const lastViewableIndex =
        data.length - ITEMS_IN_VIEW > 0 ? data.length - ITEMS_IN_VIEW + 1 : 1;

      setIsNextDisabled(currentIndex.current === lastViewableIndex);
      setIsPrevDisabled(currentIndex.current === 1);
    },
    [data],
  );

  const handleOnPrev = () => {
    if (currentIndex.current === 1) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index:
          currentIndex.current - ITEMS_IN_VIEW > 0
            ? currentIndex.current - ITEMS_IN_VIEW
            : 1,
      });
    }
  };

  const handleOnNext = () => {
    if (currentIndex.current === data.length) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current + 4,
      });
    }
  };

  const _renderEmptyItem = () => {
    return <View style={{width: placeholderLength}} />;
  };

  return (
    <View
      style={styles.container}
      onLayout={event => {
        console.log('Layout event fired', event.nativeEvent.layout.width);
        setWidth(event.nativeEvent.layout.width);
      }}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={dataWithPlaceholders}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={[styles.flatListContent]}
        snapToInterval={itemLength}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        initialScrollIndex={2}
        getItemLayout={(_data: any, index: number) => ({
          length: itemLength,
          offset: itemLength * (index - 1),
          index,
        })}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        renderItem={({item, index}) => {
          if (!item.imageUrl || !item.title) {
            return _renderEmptyItem();
          }

          const translateY = scrollX.interpolate({
            inputRange: [
              (index - 5) * itemLength,
              (index - 4) * itemLength,
              (index - 3) * itemLength,
              (index - 2) * itemLength,
              (index - 1) * itemLength,
              index * itemLength,
            ],
            outputRange: [
              TRANSLATE_Y_AMOUNT * 2,
              TRANSLATE_Y_AMOUNT,
              TRANSLATE_Y_AMOUNT,
              TRANSLATE_Y_AMOUNT,
              TRANSLATE_Y_AMOUNT,
              TRANSLATE_Y_AMOUNT * 2,
            ],
            extrapolate: 'clamp',
          });

          // const scale = scrollX.interpolate({
          //   inputRange: [
          //     (index - 5) * ITEM_LENGTH,
          //     (index - 4) * ITEM_LENGTH,
          //     (index - 3) * ITEM_LENGTH,
          //     (index - 2) * ITEM_LENGTH,
          //     (index - 1) * ITEM_LENGTH,
          //     index * ITEM_LENGTH,
          //   ],
          //   outputRange: [1, 1.5, 1.5, 1.5, 1.5, 1],
          //   extrapolate: 'clamp',
          // });

          return (
            <View style={{width: itemLength}}>
              <Animated.View
                style={[
                  {
                    transform: [{translateY}],
                  },
                  styles.itemContent,
                ]}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={[styles.itemImage, {height: itemLength}]}
                />
                <Text style={styles.itemText} numberOfLines={1}>
                  {item.title}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <Pressable
          onPress={handleOnPrev}
          disabled={isPrevDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || isPrevDisabled ? 0.5 : 1.0,
            },
            styles.navigationBtn,
          ]}>
          <IconEntypo name="chevron-left" size={30} color="#900" />
        </Pressable>
        <Pressable
          onPress={handleOnNext}
          disabled={isNextDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || isNextDisabled ? 0.5 : 1.0,
            },
            styles.navigationBtn,
          ]}>
          <IconEntypo name="chevron-right" size={30} color="#900" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowContainer: {
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  flatListContent: {
    alignItems: 'center',
    marginBottom: TRANSLATE_Y_AMOUNT,
  },
  itemContent: {
    marginHorizontal: 3,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 10,
    position: 'absolute',
    bottom: 6,
    right: 6,
    color: 'white',
    fontWeight: '600',
  },
  itemImage: {
    width: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  navigationBtn: {
    marginHorizontal: 10,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: colors.orange,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ImageCarousel;
