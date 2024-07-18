import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'


const EmailSideBar = () => {

    const data = [
        {
            id: '1',
            icon: "facebook-messenger",
            text: "Primary"
        },
        {
            id: '2',
            icon: "picture",
            text: "Promotion"
        },
        {
            id: '3',
            icon: "facebook-messenger",
            text: "Social"
        },
    ]

    const RenderLists = ({ item }) => (
        <View style={styles.flatListItem}>
            <Icons name={item.icon} color={"white"} size={20} />
            <Text style={styles.listText}>{item.text}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Gmail</Text>
            <View style={styles.list}>
                <Icons name="folder-multiple-image" color={"white"} size={20} />
                <Text style={styles.listText}>All Inboxes</Text>
            </View>
            {/* <FlatList
                data={data}
                renderItem={RenderLists}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContent}
            /> */}
            <View style={styles.flatListItem}>
                <Icon1 name="picture" color={"white"} size={20} />
                <Text style={styles.listText}>Primary</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icon1 name="tago" color={"white"} size={20} />
                <Text style={styles.listText}>Promotion</Text>
            </View>

            
            <View style={styles.flatListItem}>
                <Icon2 name="users" color={"white"} size={20} />
                <Text style={styles.listText}>Social</Text>
            </View>

            <Text style={styles.labels}>All labels</Text>

            <View style={styles.flatListItem}>
                <Icon2 name="star" color={"white"} size={20} />
                <Text style={styles.listText}>Started</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icon2 name="clock" color={"white"} size={20} />
                <Text style={styles.listText}>Snoozed</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icons name="arrow-right-bold-outline" color={"white"} size={20} />
                <Text style={styles.listText}>Important</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icons name="send-clock-outline" color={"white"} size={20} />
                <Text style={styles.listText}>Scheduled</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icons name="chevron-right-box-outline" color={"white"} size={20} />
                <Text style={styles.listText}>Scheduled</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icon1 name="file1" color={"white"} size={20} />
                <Text style={styles.listText}>Drafts</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icons name="email-multiple-outline" color={"white"} size={20} />
                <Text style={styles.listText}>All mail</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icon1 name="exclamationcircleo" color={"white"} size={20} />
                <Text style={styles.listText}>Spam</Text>
            </View>

            <View style={styles.flatListItem}>
                <Icons name="trash-can-outline" color={"white"} size={20} />
                <Text style={styles.listText}>Trash</Text>
            </View>
        </View>
    )
}

export default EmailSideBar

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '85%',
        backgroundColor: '#282836',
        paddingVertical: 20,
    },
    heading: {
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
        marginHorizontal: 20,
        fontWeight:'black'
    },
    list: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    listText: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 25
    },
    flatListItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    flatListContent: {
        paddingBottom: 10,
    },
    labels: {
        color: 'white',
        marginHorizontal: 20,
        marginVertical:10
    }
})
