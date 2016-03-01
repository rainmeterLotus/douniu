'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  ToastAndroid,
  Dimensions,
  BackAndroid,
  View
} from 'react-native';
import Video from 'react-native-video';
import Oriention_ from 'react-native-orientation';
export default class VideoComponent extends Component{

  constructor(props) {
     super(props);
     this.state = {
      itemData:null,
     };
   }


  render(){
    if(this.state.itemData){

      return (
        <View style={styles.container}>
          <Video source={{uri: this.state.itemData.playUrl}} // Can be a URL or a local file.
           rate={1.0}                   // 0 is paused, 1 is normal.
           volume={1.0}                 // 0 is muted, 1 is normal.
           muted={false}                // Mutes the audio entirely.
           paused={false}               // Pauses playback entirely.
           resizeMode="cover"           // Fill the whole screen at aspect ratio.
           repeat={true}                // Repeat forever.
           style={styles.backgroundVideo} />

         </View>
      );
    }

    return (
      <View style={styles.container}></View>
    );
  }

 componentWillMount(){

}

  componentDidMount() {
    this.setState({
      itemData:this.props.itemData,
    });
    Oriention_.lockToLandscape();
    const navigator = this.props.navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
          Oriention_.lockToPortrait();
          navigator.pop();
          return true;
        }
        return false;
    });
  }


}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});
export default VideoComponent;
