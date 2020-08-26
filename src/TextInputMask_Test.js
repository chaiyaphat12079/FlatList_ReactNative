import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';

const {height, width} = Dimensions.get('screen');
export default class TextInputMask_Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        phone_not_validated: false,
        keyboardOffset: 0,
        phone_no: '',
        };
    }
    render() {
        return (
        <View>
            <TextInputMask
            placeholder="Phone number"
            style={{width: '60%', ...styles.TextInput, borderRadius: 0}}
            onFocus={() => {
                this.setState({
                keyboardOffset: Platform.OS === 'android' ? 0 : -1000,
                });
            }}
            maxLength={12}
            keyboardType="number-pad"
            onChangeText={(formatted, extracted) => {
                var regexPhone = /(^([0][6|8|9])([0-9]{8})\b)\b/;
                this.setState({phone_no: extracted});
                if (!regexPhone.test(extracted) && extracted !== '') {
                this.setState({phone_not_validated: true});
                } else {
                this.setState({phone_not_validated: false});
                }
            }}
            value={this.state.phone_no}
            mask={'[000]-[000]-[0000]'}
            />
            {this.state.phone_not_validated ? (
            <View
                style={{
                flex: 1,
                width: width,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                }}>
                <Text
                allowFontScaling={false}
                style={{...styles.TextInputLabel, fontWeight: 'bold'}}>
                {''}
                </Text>
                <Text
                allowFontScaling={false}
                style={{
                    ...styles.TextInputLabel,
                    color: '#E40613',
                    width: '60%',
                    alignSelf: 'flex-start',
                    textAlign: 'left',
                }}>
                กรุณากรอกให้ถูกฟอร์ม
                </Text>
            </View>
            ) : null}
        </View>
        );
    }
}
const styles = StyleSheet.create({
    TextInput: {
        fontSize: height * 0.035,
        height: height * 0.06,
        borderWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
});
