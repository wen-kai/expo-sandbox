import {Image, StyleSheet, Platform, View, FlatList, Dimensions, TouchableOpacity} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VideoPlayer from "./VideoPlayer";
import {useState} from "react";

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [fullscreenIndex, setFullScreenIndex] = useState(null);
  const [viewableIndex, setViewableIndex] = useState(0);
  const [viewableIndexNested, setViewableIndexNested] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(true);

  return (
    <View
      style={{ flex: 1, backgroundColor: 'black' }}
    >
    <View style={{ width, height }}>
        <FlatList
            data={[
                {
                    video1: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
                    video2: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                },
                {
                    video1: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
                    video2: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                },
                {
                    video1: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
                    video2: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
                }
            ]}
            snapToOffsets={[0, height, height * 2]}
            snapToAlignment={'start'}
            onViewableItemsChanged={({ viewableItems }) => {
                const viewableItem = viewableItems.find(i => i.isViewable);
                setViewableIndex(viewableItem?.index);
            }}
            renderItem={({ item, index }) => (
                <View style={{ width, height }}>
                    <VideoPlayer
                        style={{ width, height }}
                        shouldPlay={shouldPlay && index === viewableIndex}
                        isFullscreen={fullscreenIndex === index}
                        onFullscreenExit={() => setFullScreenIndex(null)}
                        source={item.video1}
                    />

                    {/* FULLSCREEN & PLAY BUTTONS */}
                    <View style={{ position: 'absolute', bottom: 50, right: 50 }}>
                        <TouchableOpacity onPress={() => setFullScreenIndex(index)}>
                            <ThemedText type="title">Fullscreen</ThemedText>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setShouldPlay(!shouldPlay)}>
                            <ThemedText type="title">{shouldPlay ? 'Pause' : 'Play'}</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    </View>
    </View>
  );
}
