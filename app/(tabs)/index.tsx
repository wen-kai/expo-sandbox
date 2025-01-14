import {Image, StyleSheet, Platform, View, FlatList, Dimensions, TouchableOpacity} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import VideoPlayer from "./VideoPlayer";
import {useState} from "react";

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {

  return (
    <View
      style={{ flex: 1, backgroundColor: 'white' }}
    >
        <View
            style={{
                position: 'absolute',
                top: 100,
                left: 100,
                transform: [
                    { scale: 100 },
                ],
            }}
        >
            <View
                style={{
                    transform: [
                        { scale: 0.01 },
                    ],
                }}
            >
                <View
                    style={{
                        transform: [
                            { scale: 1 },
                        ],
                    }}
                >
                    <View style={{ width: 100, height: 100, borderWidth: 3, borderColor: 'blue', backgroundColor: 'red' }} />
                </View>
            </View>
        </View>
    </View>
  );
}
