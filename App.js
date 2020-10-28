import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
function UselessTextInput(props) {
return (
    <TextInput
          {...props}
          style={{height:40, borderWidth:1}}
          editable = {true}
          maxLength = {40}
      />
   );
}
export default function UselessTextInputMultiline() {
   const [myText, setMyText] = useState('yellow');
   const [myNumber, setMyNumber] = useState(15);
   const onPressText = () => {
	//setMyText(text);
	//setMyNumber(num);
   }
    return (
         <View 
			style={{
			   flex: 1,
			   alignItems: 'center',
			   justifyContent: 'center',
			   backgroundColor: myText.toLowerCase(),
			   borderBottomColor: '#000000',
			   borderBottomWidth: 1,
			   }}  >

			<Text>{myText}{'\n\n'}</Text>

			<UselessTextInput
				multiline
				numberOfLines = {4}
				value={myText}
				onChangeText={text => setMyText(text)}

			/>

			<UselessTextInput
				multiline
				numberOfLines = {4}
				value={myNumber}
				onChangeText={num => setMyNumber(parseInt(num))}

			/>


      <Text style={{fontSize:myNumber}}>
{'\n'}{'\n'}Press Me!</Text>
		</View>
    
	);  
}


