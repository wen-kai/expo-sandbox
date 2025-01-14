import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useEventListener } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function VideoPlayer({
                                      style,
                                      source,
                                      shouldPlay = false,
                                      isFullscreen = false,
                                      isMuted = true,
                                      isLooping = true,
                                      onFullscreenExit,
                                      onFullscreenEnter,
                                    }) {

  useEffect(() => {
    if (
      shouldPlay
    ) {
      player.play();
    } else {
      player.pause();
    }
  }, [shouldPlay]);

  useEffect(() => {
    if (
      isFullscreen &&
      this.videoView
    ) {
      this.videoView.enterFullscreen();
    }
  }, [isFullscreen]);

  const player = useVideoPlayer({ uri: source }, videoPlayer => {
    videoPlayer.muted = isMuted;
    videoPlayer.loop = isLooping;
    videoPlayer.audioMixingMode = 'mixWithOthers';

    if (
      shouldPlay
    ) {
      videoPlayer.play();
    }
  });

  return (
    <VideoView
      ref={node => {
        this.videoView = node;
      }}
      style={style}
      player={player}
      contentFit={'contain'}
      onFullscreenEnter={onFullscreenEnter}
      onFullscreenExit={onFullscreenExit}
      allowFullScreen
      nativeControls={isFullscreen}
    />
  );
}
