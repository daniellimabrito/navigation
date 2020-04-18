import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {styles} from '../styles/styles'

class Feed extends Component {
    render() {

        //console.log(this.props)
       // if(this.props.route.params.data){
           
       // }


        return (
            <View style={styles.center}>
                <Text style={styles.title}> Navigation Drawer </Text>
                <Button
                    title='Go to Feed Item'
                    onPress={() => this.props.navigation.navigate('Detail', {screenName: "Value from Feed screen"})}
                />
            </View>
        )
    }
}

export default Feed
