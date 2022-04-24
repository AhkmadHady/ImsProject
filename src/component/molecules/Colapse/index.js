import { StyleSheet, Text, View } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import React from 'react'
import { Gap } from '../../atoms';

const Colapse = ({titleHeader,textConten}) => {
  return (
    <View style={styles.page}> 
       <Collapse style={styles.separator}>
        <CollapseHeader>
            <View> 
                <Text style={styles.title}> {titleHeader}</Text>
                <Gap height={5}/>
            </View> 
        </CollapseHeader>
        <CollapseBody>
             <View style={styles.separatorBody}>
                 <Gap height={5}/>
                 <Text style={styles.textConten}>{textConten}</Text>
             </View>
        </CollapseBody>
        </Collapse>
    </View>
  )
}

export default Colapse

const styles = StyleSheet.create({
    separator:{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#A5A5A5',
        padding: 5

    },
    separatorBody:{
        borderTopWidth:1,
        borderTopColor: '#A5A5A5',
    },

    page:{
        paddingHorizontal:5,
        paddingVertical:5
    },
    title:{
        fontSize: 15,
        color: '#03AC0E',
        fontWeight:'bold',

    },
    textConten:{
        fontSize: 14,
        color: '#000', 
    }
 
})