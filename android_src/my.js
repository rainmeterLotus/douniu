'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  ToastAndroid,
  PropTypes,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Navigator,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import MyHead from './my_head';
import Top_view from './top_view';
export default class MyComponent extends Component {


  _renderScene(router,navigator){
    let Component = router.component;
    return <Component navigator={navigator}/>
  }

  render(){
    return (
      <Navigator
        initialRoute={{name:'douniu',component:MyComponentInner}}
        configureScene={()=>{return Navigator.SceneConfigs.HorizontalSwipeJump;}}
        renderScene={(router,naivgator)=>this._renderScene(router,naivgator)}
      />
    );
  }
}


export default class MyComponentInner extends Component {

  constructor(props){
    super(props);
    this.onClickHead = this.onClickHead.bind(this);
  }


  render(){

    return(
      <View style={[styles.flexDirection_column,{flex:1}]}>
        <Top_view  centerTitle={"我的"}/>
        <View style={styles.flexDirection_column}>
          <View style={[styles.flexDirection_row,{marginLeft:19,marginTop:5,}]}>
            <TouchableOpacity style={styles.img_header_background}  activeOpacity={1} onPress={this.onClickHead}>
              <Image style={styles.img_header} source={require('./drawable/user_default_headimage.png')} />
            </TouchableOpacity>

            <View style={[styles.flexDirection_column,{marginLeft:15,}]}>
              <Text style={styles.text_header_name}>嘻嘻哈哈哈</Text>
              <Text style={styles.text_header_id_indroduction}>ID:1000033</Text>
              <Text style={styles.text_header_id_indroduction}>这个家伙什么也没有留下</Text>

            </View>


          </View>

          <View style={[styles.flexDirection_row,{marginTop:22,}]}>
            <TouchableOpacity style={styles.touchableOpacity_live_fans_focus_order}>
              <Text style={styles.text_live_fans_focus_order}>47</Text>
              <Text style={styles.text_live_fans_focus_order}>直播</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity_live_fans_focus_order}>
              <Text style={styles.text_live_fans_focus_order}>15</Text>
              <Text style={styles.text_live_fans_focus_order}>粉丝</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity_live_fans_focus_order}>
              <Text style={styles.text_live_fans_focus_order}>23</Text>
              <Text style={styles.text_live_fans_focus_order}>关注</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpacity_live_fans_focus_order}>
              <Text style={styles.text_live_fans_focus_order}>5</Text>
              <Text style={styles.text_live_fans_focus_order}>订单</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.flexDirection_row,{paddingRight:10,paddingLeft:10,}]}>
          <View style={styles.view_line}/>
        </View>


          <ScrollView contentContainerStyle={styles.container_scrollview} >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview,{paddingTop:30}]} activeOpacity={1}>
                <View style={styles.img_unicom_wo_background}>
                  <Image style={styles.img_unicom_wo} resizeMode={Image.resizeMode.contain} source={require('./drawable/unicom_wo.png')}/>
                </View>
                <Text style={styles.text_scrollview}>直播免流量包</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>我的代金卷</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                  <Text style={styles.text_scrollview}>我的牛币</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>我的牛毛</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>分享斗牛软件</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>设置</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>意见反馈</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>关于斗牛</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.flexDirection_row,styles.touchableOpacity_text_scrollview,{paddingBottom:30}]} activeOpacity={1}>
                <Text style={styles.text_scrollview}>退出当前账号</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

      </View>

    );
  }


  onClickHead(){
    const navigator = this.props.navigator;
    if(navigator){
      navigator.push({
        name:'my_head',
        component:MyHead,
      });
    }
  }
}

const styles = StyleSheet.create({
  flexDirection_column:{
    flexDirection:'column',
  },
  flexDirection_row:{
    flexDirection:'row',
  },
  icon: {
    width:30,
    height:30,
    marginTop:6,
    textAlign:'center'
},

  touchableOpacity_live_fans_focus_order:{
    flex:1,
    alignItems:'center',
  },

  touchableOpacity_text_scrollview:{
    alignItems:'center',
    paddingTop:15,
    paddingBottom:15,
  },

  view_line:{
    flex:1,
    width:Dimensions.get('window').width,
    height:0.5,
    backgroundColor:'#333',
    marginTop:20,
  },

  text_live_fans_focus_order:{
    color:'#ccc',
    fontSize:12,
  },

  text_header_name:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },

  text_header_id_indroduction:{
    color:'#999',
    fontSize:12,
    marginTop:8,
  },

  text_scrollview:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:15,

  },



  img_header_background:{
    borderRadius:35,
    backgroundColor:'#cb0133',
    padding:1,
  },
  img_header:{
    width: 70,
    height: 70,
    borderRadius:35,
  },

  img_unicom_wo:{
    width:38,
    height:14,
  },

  img_unicom_wo_background:{
    width:42,
    height:15,
    backgroundColor:'#fff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },

  container_scrollview:{
    alignItems:'center',
    justifyContent:'center',
  },
});

export default MyComponent
//AppRegistry.registerComponent('MyComponent', () => MyComponent);
