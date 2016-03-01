'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid,
  Text,
  Image,
  ToastAndroid,
  PixelRatio,
  Dimensions,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Dimensions from 'Dimensions';

export default class Live_view extends Component {


  static defaultProps = {//暂时不用
    miniIcon:'',
    logoUrl:'',
    author:'xx',
    title:'电影',
    seeingNum:'0',
    praiseNum:'0',
    };  // 注意这里有分号
  static propTypes = {//暂时不用
    miniIcon:React.PropTypes.string.isRequired,
    logoUrl:React.PropTypes.string.isRequired,
    author:React.PropTypes.string.isRequired,
    title:React.PropTypes.string.isRequired,
    seeingNum:React.PropTypes.string.isRequired,
    praiseNum:React.PropTypes.string.isRequired,
  };  // 注意这里有分号


	render(){
		return this.render_view();
	}


	render_view(){
		return (





	       <View style={styles.container}>
	          <Image style={styles.sub_img} source={{uri:this.props.listSource.logoUrl}} >

                <View style={styles.view_background}/>

                <View style={styles.sbu_flex}>
                  <View style={styles.img_header_background}>
                    <Image  style={styles.img_header}  source={{uri:this.props.listSource.miniIcon}} />
                  </View>

                  <Text style={styles.text_author}>{this.props.listSource.author}</Text>
                  <Text style={styles.text_title}>{this.props.listSource.mzName}</Text>
                  <View style={styles.watch_like_view}>
                    <Image style={styles.img_watch_like} source={require('./drawable/image_list_watching.png')} />
                    <Text style={styles.text_watch_like}>{this.props.listSource.seeingNum}</Text>
                    <View style={styles.view_line}/>
                    <Image style={styles.img_watch_like} source={require('./drawable/image_list_praise.png')} />
                    <Text style={styles.text_watch_like}>{this.props.listSource.praiseNum}</Text>
                  </View>
                </View>
	          </Image>

			</View>
			);
	}


}

const styles = StyleSheet.create({
	container: {
    flex:1,
    justifyContent: 'center',
	},

	title:{
		fontSize: 20,
	},


sbu_flex:{
  flex:1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
},
view_background:{
  height:Dimensions.get('window').width*0.6,
  width:Dimensions.get('window').width,
  backgroundColor:'#000',
  opacity:0.2,
  position :'absolute',//默认使用realtive布局
},

sub_img:{
	flex:1,
  height:Dimensions.get('window').width*0.6,
  width:Dimensions.get('window').width,
},

img_header_background:{
  borderRadius:18,
  backgroundColor:'#fff',
  padding:1,
},
img_header:{
  width: 35,
  height: 35,
  borderRadius:18,

},

view_line:{
  backgroundColor:'#fff',
  width:1,
  height:10,
  marginLeft:5,
  marginRight:5,
},

 watch_like_view:{
   marginTop:5,
 	 flexDirection: 'row',
 	 alignItems: 'center',

 },

 img_watch_like:{
  height:10,
  width:12,
 },

 text_watch_like:{
 	marginLeft:3,
 	fontSize:11,
  color: '#fff',
 },

 text_author:{
   fontSize:13,
   color: '#fff',
   marginTop:5,
 },

 text_title:{
   fontSize:16,
   fontWeight:'bold',
   color: '#fff',
   marginTop:5,
 },
});


AppRegistry.registerComponent('Live_view', () => Live_view);
