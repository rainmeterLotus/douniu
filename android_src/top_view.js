'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  BackAndroid,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
export default class Top_view extends Component {

  static propTypes={
    leftVectorIcon:React.PropTypes.string,
    leftIcon:React.PropTypes.number,
    leftTitle:React.PropTypes.string,

    rightIcon:React.PropTypes.number,
    rightTitle:React.PropTypes.string,

    centerIcon:React.PropTypes.number,
    centerTitle:React.PropTypes.string,
  };

  render(){
    return (
      <View style={styles.container}>

            <TouchableOpacity style={styles.view_container_left} activeOpacity={1} onPress={()=>this.onClickBack()}>

                {this.props.leftTitle &&<Text style={styles.text_left}>{this.props.leftTitle}</Text>}
                {this.props.leftIcon &&<Image style={styles.img_left} source={this.props.leftIcon} />}
                {this.props.leftVectorIcon && <Icon name={this.props.leftVectorIcon} size={32} color='#666' />}

            </TouchableOpacity>

            <TouchableOpacity style={styles.view_container_center} activeOpacity={1}>
              {this.props.centerTitle &&<Text style={styles.text_center}>{this.props.centerTitle}</Text>}
              {this.props.centerIcon && <Image style={styles.img_center} source={this.props.centerIcon} />}
            </TouchableOpacity>


            <TouchableOpacity style={styles.view_container_right} activeOpacity={1}>
              {this.props.rightTitle &&<Text style={styles.text_right}>{this.props.rightTitle}</Text>}
              {this.props.rightIcon && <Image style={styles.img_right} source={this.props.rightIcon} />}
            </TouchableOpacity>

      </View>
    );

  }

  onClickBack(){
    const navigator = this.props.navigator;
    if(navigator){
      navigator.pop();
    }
  }



}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },

  text_left:{
    fontSize:18,
    fontWeight:'bold',
    color: '#fff',
  },

  text_center:{
    fontSize:20,
    fontWeight:'bold',
    color: '#fff',
  },

  text_right:{
    fontSize:18,
    fontWeight:'bold',
    color: '#fff',
  },

  img_center:{
    width:50,
    height:20,
    margin:10,
  },

  img_right:{
    width:20,
    height:20,

  },
  img_left:{
    width:20,
    height:20,

  },

  view_container_center:{
    height:50,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  view_container_left:{
    justifyContent:'center',
    alignItems:'flex-start',
    width:100,
    height:50,
    marginLeft:10,
  },

  view_container_right:{
    justifyContent:'center',
    alignItems:'flex-end',
    width:100,
    height:50,
    marginRight:10,
  },
});

AppRegistry.registerComponent('Top_view', () => Top_view);
