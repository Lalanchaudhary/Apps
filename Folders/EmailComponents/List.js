import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5'

const List = ({ data }) => {
  return (
    <>
      {
        data.map((e, index) => {
          return (
            <View key={index} style={styles.lists}>
              <Icons name="facebook-messenger" color={"white"} size={20} />
              <Text style={styles.list_text}>All Inboxes</Text>
            </View>
          )
        })
      }
    </>
  )
}

export default List

const styles = StyleSheet.create({
  lists: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  list_text: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 25
  }
})
