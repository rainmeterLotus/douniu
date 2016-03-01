/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  ListView,
  Image,
  Text,
  ViewPagerAndroid,
  Navigator,
  ToastAndroid,
  InteractionManager,
  Dimensions,
  View
} from 'react-native';

import DouNiu from './android_src/index';
class douniu extends Component {
  constructor(props) {
      super(props);
      this.state = {renderPlaceholderOnly: true};
    }

  _renderScene(router,navigator){
    let Component = router.component;
    return <Component {...router.params}navigator={navigator}/>
  }

  render(){
    if(this.state.renderPlaceholderOnly){
      return (
        <View style={{flex:1,backgroundColor:'#1f1f1f',justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./android_src/drawable/initpage.png')} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}/>
        </View>
      );
    }

    return (
      <Navigator
        initialRoute={{name:'douniu',component:DouNiu}}
        configureScene={()=>{return Navigator.SceneConfigs.HorizontalSwipeJump;}}
        renderScene={(router,naivgator)=>this._renderScene(router,naivgator)}
      />
    );
  }


    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.setState({renderPlaceholderOnly: false});
      });
    }


}

const styles = StyleSheet.create({

  pageStyle: {
    flex:1,
      alignItems: 'center',
      padding: 20,
    },


  container: {
    flex: 1,
    justifyContent: 'flex-end',
  //  alignItems: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bottom_view_style:{
     flex: 1,
  },
});



AppRegistry.registerComponent('douniu', () => douniu);
