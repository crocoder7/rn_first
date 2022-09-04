import React from 'react';
import { ReactNode } from 'react';
import { ImageBackground } from 'react-native';

export default class Loading extends React.Component {
    render(): ReactNode {
        return (
            <ImageBackground 
                source={require("../../assets/petmal.png")}
                style={{width:"100%", height:"100%"}}>
            </ImageBackground>
        );
    }
}