
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CompProps = {
    navigation?:any,
    handleToken?: any
};
type CompState = {
    // state here
};
export default class CustomSidebar extends React.Component<CompProps, CompState> {
    constructor(props: CompProps) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <DrawerContentScrollView {...this.props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              this.props.navigation.navigate('HomeStack');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="clipboard-list" color={color} size={size} />
            )}
            label="Categories"
            onPress={() => {
                this.props.navigation.navigate('Categories');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="collapse-all-outline" color={color} size={size} />
            )}
            label="Transactions"
            onPress={() => {
                this.props.navigation.navigate('AllTransactions');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="bell-ring-outline" color={color} size={size} />
            )}
            label="Reminders"
            onPress={() => {
                this.props.navigation.navigate('ReminderStack');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="chart-areaspline" color={color} size={size} />
            )}
            label="Charts"
            onPress={() => {
                this.props.navigation.navigate('Charts');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            this.props.navigation.closeDrawer();
            this.props.handleToken(null);
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: primaryColor,
    },
    logo: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    drawerContent: {
      flex: 1,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
    },
  });
  