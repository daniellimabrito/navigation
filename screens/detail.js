import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {styles} from '../styles/styles'

class Detail extends Component {
   
    render() {
        console.log(this.props.route);
        const varTest = this.props.route.params.screenName
        return (
            <View style={styles.center}>
                <Text style={styles.title}> Detail Screen </Text>
                <Text style={styles.title}> {varTest} </Text>

                 <Button
                    title='View Top Tabs'
                    onPress={() => {this.props.navigation.navigate('Top Tabs', {name: "AAA"})}}
                /> 
                <Button
                    title='View Bottom Tabs'
                    onPress={() => {this.props.navigation.navigate('Bottom Tabs',  {name: "BBB"})}}
                />
                 <Button
                    title='Back to Feed'
                    onPress={() => {this.props.navigation.navigate('Feed', {data: "Hello!"})}}
                /> 
            </View>
        )
    }
}

export default Detail
