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
  View
} from 'react-native';

var SCREEN_HEIGHT = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Ionicons';
export default class Bottom_view extends Component {
  static propTypes={
    goToPage: React.PropTypes.func,
    activePage: React.PropTypes.number,
    pageCount: React.PropTypes.number
  };// 注意这里有分号
   constructor(props){
     super(props);

   }




	render(){
    return this.render_view();
	}

	render_view(){
    //var pageCount = this.props.pageCount;
    console.log("===DouNiuInderictor==pageCount===="+this.props.activePage);
    let pageid = this.props.activePage;
    let opacityLive = 0;
    let opacityPlan = 0;
    let opacityMy = 0;

    let iconLive = require('./drawable/bottom_icon_live.png');
    let iconPlan = require('./drawable/bottom_icon_trailer.png');
    let iconMy = require('./drawable/bottom_icon_mine.png');
    switch (pageid) {
      case 0:
        opacityLive = 1;
        iconLive = require('./drawable/bottom_icon_live_selected.png');
        break;
      case 1:
        opacityPlan = 1;
        iconPlan = require('./drawable/bottom_icon_trailer_selected.png');
        break;
      case 2:
        opacityMy = 1;
        iconMy = require('./drawable/bottom_icon_mine_selected.png');
        break;
      default:

    }



		return (
			<View style={styles.container} >

				<View style={styles.item_container}>
					<Image source={iconLive} style={styles.thumbnail} />
					<Text style={[styles.instructions,{opacity: opacityLive}]} onPress={()=>this.gotoPage_live(0)} >直播</Text>
				</View>


        <View style={styles.item_container} >
          <Image source={iconPlan}  style={styles.thumbnail}  />
          <Text style={[styles.instructions,{opacity:opacityPlan}] } onPress={()=>this.gotoPage_live(1)}>预告</Text>
        </View>

          <View style={styles.item_container}>
          <Image source={iconMy} style={styles.thumbnail} />
          <Text style={[styles.instructions,{opacity:opacityMy}]} onPress={()=>this.gotoPage_live(2)}>我的</Text>
        </View>

        <View style={styles.item_container_making}>
          <Image source={require('./drawable/bottom_icon_making.png')} style={styles.thumbnail_making} />
        </View>


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
    paddingRight:20,
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
   thumbnail_making: {
    width: 40,
    height: 25,
  },
});

AppRegistry.registerComponent('Bottom_view', () => Bottom_view);
