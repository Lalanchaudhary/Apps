import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'picture', label: 'Primary', navigateTo: 'Home' },
  { icon: 'tago', label: 'Promotion', navigateTo: 'profile' },
  { icon: 'addusergroup', label: 'Social', navigateTo: 'Primary' },
];

const DrawerList2 = [
  { icon: 'star-outline', label: 'Starred', navigateTo: 'pdf' },
  { icon: 'clock-outline', label: 'Snoozed', navigateTo: 'Profile' },
  { icon: 'arrow-right-bold-outline', label: 'Important', navigateTo: 'Primary' },
  { icon: 'send-clock-outline', label: 'Scheduled', navigateTo: 'Profile' },
  { icon: 'file-outline', label: 'Drafts', navigateTo: 'Primary' },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerLayout2 = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icons name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};


const DrawerItems = () => {
  return DrawerList.map((e, i) => {
    return (
      <DrawerLayout
        key={i}
        label={e.label}
        icon={e.icon}
        navigateTo={e.navigateTo}
      />
    );
  });
};

const DrawerItems2 = () => {
  return DrawerList2.map((e, i) => {
    return (
      <DrawerLayout2
        key={i}
        label={e.label}
        icon={e.icon}
        navigateTo={e.navigateTo}
      />
    );
  });
};

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.gmail_view}>
            <Text style={styles.gmail_text}>Gmail</Text>
          </View>
          <View style={styles.All_inbox}>
            <Icons name="folder-multiple-image" color={"grey"} size={20} />
            <Text style={styles.All_inbox_text}>All inboxes</Text>
          </View>
          <DrawerItems />
          <Text style={styles.labels}>All labels</Text>
          <DrawerItems2 />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  gmail_view: {
    padding: 15,
    paddingHorizontal: 25,
  },
  gmail_text: {
    color: 'red',
    fontSize: 22
  },
  All_inbox: {
    flexDirection: 'row',
    padding: 20,
    gap: 32,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  All_inbox_text: {
    fontSize: 16,

  },
  labels: {
    color: 'grey',
    marginHorizontal: 20,
    marginVertical: 10
  }
});
