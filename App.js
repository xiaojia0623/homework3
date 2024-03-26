import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState()
  const [showResult, setShowResult] = useState()

  const [secondValidCode, setSecondValidCode] = useState()

  //測試一 密碼判斷
  const firstValidTest = () => {
    if (validCode === ''){
      setShowResult('請勿空白');
    }else if(validCode != '123456'){
      setShowResult('輸入錯誤! 請重新輸入密碼，謝謝');
    }else{
      setShowResult('恭喜! 輸入成功!! 太好了');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.captionStyle}>密碼判斷測試</Text>
      <Text style={styles.secondCaptionStyle}>測試一: </Text>
      <TextInput style={styles.textInput} maxLength={6} keyboardType='numeric' value={validCode} secureTextEntry={true} onChangeText={(text) => setValidCode(text)}/>
      <Text style={[styles.point,{color: 'yellow', marginBottom:10}]}>{showResult}</Text>
      <TouchableOpacity style={styles.enterBtn} onPress={firstValidTest}>
        <Text style={styles.btnContent}>Enter</Text>
      </TouchableOpacity>



      <Text style={styles.secondCaptionStyle}>測試二: 可即時判斷</Text>
      <TextInput style={styles.textInput} maxLength={6} keyboardType='numeric'  value={secondValidCode} secureTextEntry={true} 
      onChangeText={(text) => setSecondValidCode(text)}/>
      {secondValidCode != "" ? ( secondValidCode != '123456' ? <Text style={[styles.point,{color:'red'}]}>輸入錯誤! 請重新輸入密碼</Text> : <Text style={[styles.point,{color:'#7FFF00'}]}>恭喜! 輸入成功!</Text>): <Text style={[styles.point,{color:'red'}]}>請填寫完整，謝謝</Text>}
      {/* <TouchableOpacity style={styles.enterBtn}>
        <Text style={styles.btnContent}>Enter</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
  captionStyle:{
    fontSize:26,
    color:'white',
  },
  secondCaptionStyle:{
    fontSize:22,
    marginBottom:10,
    color:'white',
  },
  textInput:{
    backgroundColor:'#fff',
    color:'black',
    fontSize:22,
    borderRadius:5,
    width:250,
    marginBottom:20,
    textAlign:'center'
  },
  point:{
    fontSize:20,
    marginBottom:20
  },
  enterBtn:{
    backgroundColor:'#00FFFF',
    borderRadius:10,
    width:150
  },
  btnContent:{
    color:'#000',
    fontSize:20,
    textAlign:'center',
  },
});
