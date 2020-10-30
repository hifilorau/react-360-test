import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment, staticAssetURL, NativeModules, staticResourceURL
} from 'react-360';


// const {VideoModule} = NativeModules;

// VideoModule.createPlayer('myplayer');
// // Play a specific video
// VideoModule.play({
//   source: {url: staticAssetURL('static_assets/video_360.mp4')},
//   autoPlay: true // provide the path to the video
//   // stereo: '3DTB', // optionally, supply the format of the video
// });
// // Display the background video on the Environment
// Environment.setBackgroundVideo('myplayer'); // or you can use player._player which is same value
// // Or, play in-line on a surface
// Environment.setScreen(
//   'default', /* screen name */
//   'myplayer', /* player unique id */
//   'default', /* surface name */
//   0, 0, 600, 400 /* relative position on the surface */
// );


export default class test360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>What's going on in this waterfall?</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // width: 1000,
    // height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('test360', () => test360);
