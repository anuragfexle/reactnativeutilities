import React, { FC, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
} from 'react-native';

import Voice, {
    SpeechRecognizedEvent,
    SpeechResultsEvent,
    SpeechErrorEvent,
} from '@react-native-community/voice';
import { MIC_ICON, microphoneIcon } from "../utils/sharedImages";

enum resizeMode {
    cover = "cover", contain = "contain", stretch = "stretch", repeat = "repeat", center = "center"
}

enum overFlow {
    visible = "visible", hidden = "hidden"
}

enum imageTypes {
    'local', 'uri'
}
interface SpacerProps {
    height?: number | string | 0;
    width?: number | string | 0;
    bgColor?: string | 'transparent';
    styles?: [] | object | {};
}
interface ImageComponentProps {
    source: string | undefined | any;
    styles?: object;
    height: number | string;
    width: number | string;
    tintColor?: string;
    resizeMode?: resizeMode;
    overflow?: overFlow;
    imageType: any;
}

const Spacer: FC<SpacerProps> = (props) => {
    return <View style={[props.styles, { backgroundColor: props.bgColor, width: props.width, height: props.height }]}/>
};

const ImageComponent: FC<ImageComponentProps> = (props) => {

    const {} = props;

    return props.imageType === imageTypes.local ?
        <Image source={props.source} style={[ props.styles, { height: props.height, width: props.width, tintColor: props.tintColor, resizeMode: props.resizeMode, } ] }/>
        :
        <Image source={{uri: props.source }} style={[ props.styles, { height: props.height, width: props.width, resizeMode: props.resizeMode, } ] }/>
};

function VoiceToText(props: any) {

    const [recognized, setRecognized] = useState('');
    const [volume, setVolume] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);

    const [isPlay, setIsPlay] = useState(false);

    const requestMicrophonePermission = async () => {
        if (Platform.OS === "android") {
          let returnType = false;
          try {
            const granted = await PermissionsAndroid.requestMultiple([
              PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]).then((result) => {
              if (
                result["android.permission.RECORD_AUDIO"] ===
                PermissionsAndroid.RESULTS.GRANTED
              ) {
                returnType = true;
              } else {
                returnType = false;
              }
            });
          } catch (err) {
            console.log("err", err);
            returnType = false;
          }
          return returnType;
        } else {
          return true;
        }
      };

    useEffect(() => {

        (async () => {
            let allowPermission = await requestMicrophonePermission();
            if (allowPermission === false) {
                await requestMicrophonePermission();
                return;
            }
        })();

        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechRecognized = onSpeechRecognized;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    useEffect(() => {

    }, [isPlay]);

    const onSpeechStart = (e: any) => {
        console.log('onSpeechStart: ', e);
        setStarted('√');
    };

    const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
        console.log('onSpeechRecognized: ', e);
        setRecognized('√');
    };

    const onSpeechEnd = (e: any) => {
        // console.log('onSpeechEnd: ', e);
        setEnd('√');
    };

    const onSpeechError = (e: SpeechErrorEvent) => {
        // console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };

    const onSpeechResults =async (e: SpeechResultsEvent) => {
        console.log('onSpeechResults: ', e);
        props.getSpeechToTextCallBack(e.value)
        setTimeout(() => {
            togglePlayPauseButton(false);
        }, 1000) 
       // await setResults(e.value as never);
    };

    const togglePlayPauseButton = (play: boolean) => {
        console.log(play);
        setIsPlay(play);
    };

    const onSpeechPartialResults = (e: SpeechResultsEvent) => {
        // console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value as never);
    };

    const onSpeechVolumeChanged = (e: any) => {
        // console.log('onSpeechVolumeChanged: ', e);
        setVolume(e.value);
    };

    const getSpeechToTextCallBack = () => {
         // props.getSpeechToTextCallBack(results)

    };

    const _startRecognizing = async () => {
        _clearState();
        togglePlayPauseButton(true);
        try {
            console.log('isstarted');
            await Voice.start('en-IN');
        } catch (e) {
            console.error(e);
        }
    };

    const _stopRecognizing = async () => {
        togglePlayPauseButton(false);
        try {
            console.log('isstopped');
            await Voice.stop();
             props.getSpeechToTextCallBack(results)
        } catch (e) {
            console.error(e);
        }
    };

    const _clearState = () => {
        setRecognized('');
        setVolume('');
        setError('');
        setEnd('');
        setStarted('');
        setResults([]);
        setPartialResults([]);
    };

    return <View style={[isPlay?{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        backgroundColor: '#fff',
        width: 120, height: 32, position:
            'absolute',
        bottom: 10,
        right: 10,
    }:
    {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        backgroundColor: '#398AA6',
        width: 120, height: 32,
        position:
            'absolute',
        bottom: 10,
        right: 10,
    }]}>

        {isPlay ?
            <TouchableOpacity
                onPress={_stopRecognizing}
                style={{
                    flexDirection: 'row',
                    // width: '100%',
                    // height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ImageComponent tintColor={'red'} width={11} height={12} resizeMode={resizeMode.contain} imageType={imageTypes.local}
                    source={MIC_ICON} />
                <Spacer width={5} />
                <Text style={[{
                    color: '#2D313D',
                    fontSize: 10,
                }]}>{"Stop"}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={_startRecognizing}
                style={{
                    flexDirection: 'row',
                    // width: '100%',
                    // height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ImageComponent tintColor={'#fff'} 
                width={11} height={12} 
                resizeMode={resizeMode.contain} 
                imageType={imageTypes.local}
                    source={microphoneIcon} />
                <Spacer width={6} />
                <Text style={[{
                    color: '#fff',
                    fontSize: 10,
                }]}>{"Voice To Text"}</Text>
            </TouchableOpacity>
        }
    </View>
}

const styles = StyleSheet.create({

});

export default VoiceToText;






/* 
    example of using this component 

    Call it in Component like below...

<VoiceToText getSpeechToTextCallBack={getSpeechToTextCallBack} />


const getSpeechToTextCallBack = (results: any) => {
        results.map((item: any) => {
           console.log(item)
            return;
        });
    };

*/
