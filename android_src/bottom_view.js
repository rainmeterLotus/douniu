/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid,
  Text,
  Image,
  ToastAndroid,
  PropTypes,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
export default class Bottom_view extends Component {
   // 注意这里有分号
   constructor(props){
     super(props);
     this.state={
       page:0
     };
   }


  setChange(page){
    this.setState({
      page
    });
  }
	render(){
    return this.render_view();
	}

	render_view(){
    let pageid = this.state.page;
    let opacityLive = 0;
    let opacityPlan = 0;
    let opacityMy = 0;

    let marginLeftLive = -10;
    let marginLeftPlan = -10;
    let marginLeftMy = -10;

    switch (pageid) {
      case 0:
        opacityLive = 1;
        marginLeftLive =5;
        break;
      case 1:
        opacityPlan = 1;
        marginLeftPlan = 5;
        break;
      case 2:
        opacityMy = 1;
        marginLeftMy = 5;
        break;
      default:

    }



		return (
			<View style={styles.container} >

				<TouchableOpacity style={[styles.item_container,{marginLeft:15}]} activeOpacity={1} onPress={()=>this.gotoPage_live(0)}>
					<Image source={require('./drawable/bottom_icon_live.png')} style={styles.thumbnail} />
          <Image source={require('./drawable/bottom_icon_live_selected.png')} style={[styles.thumbnail_selected,{opacity: opacityLive}]} />
					<Text style={[styles.instructions,{opacity: opacityLive,marginLeft:marginLeftLive}]}  >直播</Text>
				</TouchableOpacity>


        <TouchableOpacity style={styles.item_container} activeOpacity={1} onPress={()=>this.gotoPage_live(1)}>

          <Image source={require('./drawable/bottom_icon_trailer.png')}  style={styles.thumbnail}  />
          <Image source={require('./drawable/bottom_icon_trailer_selected.png')}  style={[styles.thumbnail_selected,{opacity: opacityPlan}]}  />
          <Text style={[styles.instructions,{opacity:opacityPlan,marginLeft:marginLeftPlan}] } >预告</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item_container} activeOpacity={1} onPress={()=>this.gotoPage_live(2)}>
          <Image source={require('./drawable/bottom_icon_mine.png')} style={styles.thumbnail} />
          <Image source={require('./drawable/bottom_icon_mine_selected.png')} style={[styles.thumbnail_selected,{opacity: opacityMy}]} />
          <Text style={[styles.instructions,{opacity:opacityMy,marginLeft:marginLeftMy}]} >我的</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item_container_making} activeOpacity={1} onPress={()=>this.gotoPage_live(0)}>
          <Image source={require('./drawable/bottom_icon_making.png')} style={styles.thumbnail_making} />
        </TouchableOpacity>


			</View>

			);
	}

  gotoPage_live(page){
    // ToastAndroid.show("goto--",ToastAndroid.SHORT);
    this.props.gotoPage(page);

  }

}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  //  alignSelf : 'flex-start',
    backgroundColor: '#000',
  //  resizeMode:'contain',
  },
  icon: {
    width:30,
    height:30,
    marginTop:6,
    textAlign:'center'
},

  item_container:{
  	flexDirection:'row',
    alignItems: 'center',
    padding:10,
    backgroundColor: '#000',

  },


  item_container_making:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    padding:10,
    paddingRight:25,
  //  backgroundColor: '#0f0',
    justifyContent:'flex-end',
  },

  rightContainer: {
    flex: 1,
  },

  instructions: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    overflow:'hidden',
  //  marginBottom: 2,
  },
  title: {
    fontSize: 12,
    marginLeft: 8,
    paddingTop: 15,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 25,
    height: 25,
  },
  thumbnail_selected: {
    width: 25,
    height: 25,
    position:'absolute',
    left:10,
  },
   thumbnail_making: {
    width: 40,
    height: 25,
  },
});

AppRegistry.registerComponent('Bottom_view', () => Bottom_view);
