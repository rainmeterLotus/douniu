'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ToastAndroid,
  PropTypes,
  BackAndroid,
  Dimensions,
  TouchableOpacity,
  NativeModules,
  View
} from 'react-native';
var ImagePickerManager = NativeModules.ImagePickerManager;
import Top_view from './top_view';
import Camera from 'react-native-camera-android';


var options = {
      title: 'Select Avatar', // specify null or empty string to remove the title
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
      customButtons: {
        'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
      },
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo', // 'photo' or 'video'
      videoQuality: 'high', // 'low', 'medium', or 'high'
      durationLimit: 10, // video recording max time in seconds
      maxWidth: 100, // photos only
      maxHeight: 100, // photos only
      aspectX: 2, // aspectX:aspectY, the cropping image's ratio of width to height
      aspectY: 1, // aspectX:aspectY, the cropping image's ratio of width to height
      quality: 0.1, // photos only
      angle: 0, // photos only
      allowsEditing: false, // Built in functionality to resize/reposition the image
      noData: true, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
      storageOptions: { // if this key is provided, the image will get saved in the documents/pictures directory (rather than a temporary directory)
        skipBackup: true, // image will NOT be backed up to icloud
        path: 'images' // will save image at /Documents/images rather than the root
      }
};





export default  class MyHead extends Component{



  constructor(props){
    super(props);
    this.state={
      showCamera_picture:false,
      showCamera:false,
      headSource:require('./drawable/user_default_headimage.png'),
    };
  }



  render(){



    if(this.state.showCamera){
      return (

            <Camera
            style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}
              ref={refCamera=>{this.refCamera=refCamera;}} // the reference of your camera view
              type={"back"} // the type of your camera
              autoFocus={true}
              torchMode={"off"} // flashlight settings of your camera
              viewFinderDisplay={false} // set it to true if you want to scan barcodes
              onBarCodeRead={this._barcodeReceived}
              onPictureTaken={this._onPictureTaken}

              />

      );
    }else{


    return (
      <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=>{this.setState({showCamera_picture:false})}}>
        <Top_view leftVectorIcon={'ios-arrow-back'} centerTitle={"个人资料"} rightTitle={"完成"} navigator={this.props.navigator}/>

        <View style={styles.container_center}>
         <Image source={require('./drawable/perfect_personal_data_hint_image.png')} style={styles.img_tip}/>

         <TouchableOpacity style={styles.img_header_background_first}  >
           <TouchableOpacity style={styles.img_header_background_second} activeOpacity={1} onPress={()=>this.onClickHead()}>
             <Image style={styles.img_header} source={this.state.headSource} />
           </TouchableOpacity>
         </TouchableOpacity>

         <View style={[styles.container_textInput,styles.flexDirection_row]}>
          <Text style={styles.text_input_prefix}>昵称</Text>
          <TextInput multiline={false} defaultValue ={"请输入昵称"} style={styles.textInput_} underlineColorAndroid={'transparent'}/>
         </View>

         <View style={[styles.container_textInput,styles.flexDirection_row]}>
          <Text style={styles.text_input_prefix}>个性签名</Text>

          <TextInput multiline={false} defaultValue ={'介绍一下自己吧'} style={styles.textInput_} underlineColorAndroid={'transparent'}/>
         </View>

        </View>


        {this.state.showCamera_picture&& <View style={[styles.container_camera_picture,styles.flexDirection_row]}>
          <TouchableOpacity style={styles.touchableOpacity_camera_picture} onPress={()=>this._launchImageLibrary()}>
            <Image source={require('./drawable/image_picture.png')} style={styles.img_camera_picture}/>
            <Text style={styles.text_camera_picture}>相册</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchableOpacity_camera_picture} onPress={()=>this._launchCamera()}>
           <Image source={require('./drawable/image_camera.png')} style={[styles.img_camera_picture,{width:50}]}/>
            <Text style={styles.text_camera_picture}>拍照片</Text>
          </TouchableOpacity>
        </View>}


      </TouchableOpacity>
    );

  }

  }


  _launchCamera(){
    this.setState({
      showCamera_picture :false,
    });

    ImagePickerManager.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }else {


       const source = {uri: response.uri, isStatic: true};
        this.setState({
          headSource: source
        });
      }
     });
  }
  _launchImageLibrary(){
      this.setState({
        showCamera_picture :false,
      });

      ImagePickerManager.launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePickerManager Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          // You can display the image using either data:
        //  const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

          // uri (on iOS)
        //  const source = {uri: response.uri.replace('file://', ''), isStatic: true};
          // uri (on android)

         const source = {uri: response.uri, isStatic: true};
          console.log('===source==response.uri= ', response.uri);
          console.log('===source==else= ', source);
          this.setState({
            headSource: source
          });
        }
     });


  }

  _onPictureTaken(event){
    this.setState({
      showCamera:false,
      showCamera_picture:true,
    });
    if(event.type !== 'error') {
      console.log("file://" + event.message)
    }
  }

  onClickHead(){
    this.setState({
      showCamera_picture:!this.state.showCamera_picture
    });

  }

  componentDidMount() {

        const navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
              navigator.pop();
              console.log("=============componentDidMount=========WelcomeView_1======="+navigator.getCurrentRoutes().length);
              return true;
            }
            return false;
        });
      }



}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#1f1f1f',
    flexDirection:'column',

  },

  container_center:{

    alignItems:'center',
  },

  flexDirection_column:{
    flexDirection:'column',
  },
  flexDirection_row:{
    flexDirection:'row',
  },

  img_tip:{
    width:280,
    height:16,
    marginTop:25,

  },
  img_header_background_first:{
    borderRadius:100,
    backgroundColor:'#000',
    padding:6,
    marginTop:35,
  },
  img_header_background_second:{
    borderRadius:100,
    backgroundColor:'#cb0133',
    padding:2,

  },
  img_header:{
    width: 100,
    height: 100,
    borderRadius:35,
  },

  textInput_:{
    height:50,
    width:230,
    fontSize:16,
    paddingBottom:3,
    marginLeft:15,
    color:'#fff',
  },

  text_input_prefix:{
    fontSize:16,
    color:'#fff',
  },

  container_textInput:{
    width:280,
    marginTop:20,
    paddingLeft:10,
    paddingRight:10,
    alignItems:'center',
    backgroundColor:'#000',
    borderRadius:30,
  },


  container_camera_picture:{

    height:120,
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    backgroundColor:'#000',
  },

  touchableOpacity_camera_picture:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text_camera_picture:{
    marginTop:10,
    fontSize:15,
    color:'#fff',
  },
  img_camera_picture:{
    backgroundColor:'transparent',
    width:40,
    height:40,
  },
});

export default MyHead
