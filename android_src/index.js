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
  Text,
  ViewPagerAndroid,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Oriention_ from 'react-native-orientation';
import ViewPager from 'react-native-viewpager';
import Top_view from './top_view';
import Bottom_view from './bottom_view';
import DouNiuInderictor from './DouNiuInderictor';
import Live_item from './live_item';
import MyComponent from './my_component';
import VideoComponent from './video_player';

var PAGES = [
   'Page 0',
   'Page 1',
   'Page 2',
 ];

 function notifyMessage(msg: string) {
   ToastAndroid.show(msg, ToastAndroid.SHORT)

  }

export default class douniu_index extends Component {

  componentDidMount() {
   Oriention_.lockToPortrait();
  }

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    let viewPagerDs = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
    this.state = {
      dataSource:ds.cloneWithRows(this.getDatass()),
      page:0,
      pagerDataSource:viewPagerDs.cloneWithPages(PAGES),
    };


  }

   getDatass(){
    let dataArr = [
      {miniIcon:'http://test.douniuonline.com/multimedia/image/CHANNEL/2015/07/02/mini_a9130634190b4f6eaca1761ce8a43002.jpg',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/12/03/2015_12_03_16_42_53_017.jpg',
      playUrl:'http://test.douniuonline.com/FtpData/M3U8Data/YiRen/play.m3u8',
      seeingNum:'12',
      praiseNum:'23',
      author:'流小貝',
      mzName:'Vod-蚁人-精彩欣赏'},

      {miniIcon:'http://test.douniuonline.com/multimedia/image/membericon/2016/01/13/mini_f16d8dc03ad543538c02caf769b1fd78.jpg',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/12/03/2015_12_03_16_40_34_846.jpg',
      playUrl:'http://test.douniuonline.com/FtpData/M3U8Data/WanMingSuDi/play.m3u8',
      seeingNum:'112',
      praiseNum:'233',
      author:'臭臭干嘛了',
      mzName:'Vod-玩命速递-精彩欣赏'},

      {miniIcon:'http://test.douniuonline.com/multimedia/image/CHANNEL/2015/08/14/mini_92e676c721164fce951caa0fb7885f16.jpg',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/12/03/2015_12_03_14_01_30_889.jpg',
      playUrl:'http://test.douniuonline.com/FtpData/M3U8Data/HuoXingJiuYuan/play.m3u8',
      seeingNum:'92',
      praiseNum:'456',
      author:'路飞君',
      mzName:'科幻电影-火星救援'},

      {miniIcon:'http://q.qlogo.cn/qqapp/1104742819/31B30F1B7E46938B619D0EC051E54686/40',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/11/26/2015_11_26_15_45_56_500.jpg',
      playUrl:'http://test.douniuonline.com/720x480_800k/play.m3u8',
      seeingNum:'122',
      praiseNum:'236',
      author:'七宝',
      mzName:'Vod-动作电影-hls封装格式'},

      {miniIcon:'http://test.douniuonline.com//multimedia/membericon/2015/11/10/2015_11_10_17_04_31_503.png',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/11/12/2015_11_12_11_06_08_037.jpg',
      playUrl:'http://test.douniuonline.com//FtpData/QingMaiTian/remengequ-5.mp4',
      seeingNum:'52',
      praiseNum:'203',
      author:'青麦田',
      mzName:'测试点播需求'},

      {miniIcon:'http://test.douniuonline.com//multimedia/membericon/2015/11/10/2015_11_10_17_04_31_503.png',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/11/10/2015_11_10_17_50_10_907.jpg',
      playUrl:'http://test.douniuonline.com/FtpData/QingMaiTian/AYXuanChanPian.ts',
      seeingNum:'36',
      praiseNum:'473',
      author:'青麦田',
      mzName:'安佑环保养猪卡通宣传片'},

      {miniIcon:'http://test.douniuonline.com//multimedia/membericon/2015/11/10/2015_11_10_17_04_31_503.png',
      logoUrl:'http://test.douniuonline.com//multimedia/image/CHANNEL/2015/11/10/2015_11_10_17_50_20_507.jpg',
      playUrl:'http://test.douniuonline.com/FtpData/QingMaiTian/2015QingMaiTian-GX.ts',
      seeingNum:'5',
      praiseNum:'44',
      author:'青麦田',
      mzName:'2015寻找中国美丽猪场活动-广西站'},
    ];
    // for(let i=0;i<5;i++){
    //   dataArr.push('item'+i);
    //
    // }

    return dataArr;
  }






  render() {

    return this.renderViewPagerAndroid();
  }

  renderViewPagerAndroid(){
  return (


    <View style={styles.container}>
      <ViewPagerAndroid style={styles.viewPager}
            initialPage={0}
            onPageScroll={this.onPageScroll.bind(this)}
            onPageSelected={this.onPageSelected.bind(this)}
            ref={viewPager => { this.viewPager = viewPager; }}
          >
          <View style={styles.page}>
            <Top_view  centerIcon={require('./drawable/image_dou_niu_small.png')} rightIcon={require('./drawable/live_right_top_search.png')}/>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderListview.bind(this)}
              scrollRenderAheadDistance={1}
            />

          </View>
          <View style={styles.page} >
            <Top_view centerTitle={"预告"}/>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderListview.bind(this)}
              scrollRenderAheadDistance={1}
            />

          </View>

          <View style={styles.container_my} >
            <Top_view  centerTitle={"我的"}/>
            <MyComponent navigator={this.props.navigator}/>
          </View>
      </ViewPagerAndroid>


      <Bottom_view
        style={styles.bottom_view_style}
        gotoPage={this.gotoPage_.bind(this)}
        ref={bottomView => { this.bottomView = bottomView; }}
      />
    </View>


    );
  }

  gotoPage_(page){
    this.viewPager.setPage(page);
    this.bottomView.setChange(page);
  }

  onPageScroll(e) {
  }

  onPageSelected(e){
    this.bottomView.setChange(e.nativeEvent.position);
  }

  renderListview(itemData,sectionID,rowID){

     return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{this.onClick_list(itemData,sectionID,rowID)}}>
          <Live_item listSource={itemData}/>
        </TouchableOpacity>
      );
  }



  onClick_list(itemData,sectionID,rowID){
    const navigator = this.props.navigator;
    if(navigator){
      navigator.push({
        name:'video',
        component:VideoComponent,
        params:{
          itemData:itemData,
        },
      });
    }

  }



}

const styles = StyleSheet.create({
  page: {
      flex: 1,
      justifyContent: 'center',
       backgroundColor: '#1f1f1f',
  },

  viewPager: {
    flex: 1,
  },

  container_my:{
    flex: 1,
    justifyContent: 'flex-start',
     backgroundColor: '#1f1f1f',
  },


  container: {
    flex: 1,
    justifyContent: 'flex-end',
  //  alignItems: 'center',
    backgroundColor: '#1f1f1f',
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

AppRegistry.registerComponent('douniu_index', () => douniu_index);
