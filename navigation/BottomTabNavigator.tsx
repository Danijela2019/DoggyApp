import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { useTheme } from '@react-navigation/native';


import {
  BottomTabParamList,
  FavoritesHomeProps,
  FavoritesStackParamList,
  KnowledgeRoute,
  KnowledgeStackParamList,
  LeaderboardHomeProps,
  LeaderboardStackParamList,
  MapHomeProps,
  MapStackParamList,
  NavigationStyle,
  RouteOptions,
  StartHomeRoute,
  StartParamList,
  themeColorTypes,
  useThemeTypes,
} from '../types';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import ArticleScreen from '../screens/ArticleScreen';
import { FavoritesScreen, KnowledgeScreen, LeaderboardScreen, MapScreen } from '../screens';
import { View } from '../components/Themed';

function TabBarIcon(props: { name: string; color: string }) {
  return (
    <Ionicons
      size={30}
      {...props}
    />
  );
}

export default function BottomTabNavigator(): React.ReactElement {
  const themeColors: useThemeTypes = useTheme();

  const { colors: { tabIconDefault, tabIconSelected } } = themeColors;
  const BottomTab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <BottomTab.Navigator
      initialRouteName="Start"
      tabBarOptions={
        {
          ...styles.container,
          activeTintColor: tabIconSelected,
          inactiveTintColor: tabIconDefault,
       
        }
      }
    >
      <BottomTab.Screen
        name="Start"
        component={StartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Knowledge"
        component={KnowledgeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-bulb" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-pin" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Leaderboard"
        component={LeaderboardNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-star" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-heart" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const createHeaderIcon = (
  iconName: string,
  colorTheme: themeColorTypes
 ): React.ReactElement => {
  const backgroundColorSchema = colorTheme.dark
    ? colorTheme.colors.card
    : colorTheme.colors.primary;
  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColorSchema }]}
    >
      <TabBarIcon name={iconName} color="#fff" />
    </View>
  );
 };
 
function OptionsSettings({ route }: RouteOptions) {
  const themeColors: useThemeTypes = useTheme();
  const backgroundColorSchema = themeColors.dark
    ? themeColors.colors.card
    : themeColors.colors.primary;
 
const options: StackNavigationOptions = {
  headerTitleStyle: { fontFamily: "montserrat-semiBold", color: "#fff" },
  headerStyle: { backgroundColor: backgroundColorSchema },
  headerTitle: route.name,
  headerTitleAlign: "center",
  headerLeft: () => createHeaderIcon("md-contact", themeColors),
  headerRight: () => createHeaderIcon("md-notifications", themeColors),
};
return options;
}

function ArticleOptionsSettings() {
const themeColors: useThemeTypes = useTheme();
const backgroundColorSchema = themeColors.dark
? themeColors.colors.card
: themeColors.colors.primary;

{
const options: StackNavigationOptions = {
  title: "Article",
  headerTitleAlign: "center",
  headerBackTitle: "Back",
  headerStyle: { backgroundColor: backgroundColorSchema },
  headerTitleStyle: {
    fontFamily: "montserrat-semiBold",
    color: "#fff",
  },
  headerTintColor: "#fff",
};
return options;
}
}
const StartStack = createStackNavigator<StartParamList>();
function StartNavigator({ route }: StartHomeRoute): React.ReactElement {
const colorTheme = useTheme();
const backgroundColorSchema = colorTheme.dark
? colorTheme.colors.card
: colorTheme.colors.primary;

return (
<StartStack.Navigator>
  <StartStack.Screen
    name="Start"
    component={StartScreen}
    options={OptionsSettings({ route })}
  />
  <StartStack.Screen
    name="ArticleScreen"
    component={ArticleScreen}
    options={ArticleOptionsSettings()}
  />
</StartStack.Navigator>
);
}

const KnowledgeStack = createStackNavigator<KnowledgeStackParamList>();

function KnowledgeNavigator({ route }: KnowledgeRoute) {
const colorTheme = useTheme();
const backgroundColorSchema = colorTheme.dark
? colorTheme.colors.card
: colorTheme.colors.primary;
return (
<KnowledgeStack.Navigator>
  <KnowledgeStack.Screen
    name="KnowledgeScreen"
    component={KnowledgeScreen}
    options={OptionsSettings({ route })}
  />
  <KnowledgeStack.Screen
    name="ArticleScreen"
    component={ArticleScreen}
    options={ArticleOptionsSettings()}
  />
</KnowledgeStack.Navigator>
);
}

const MapStack = createStackNavigator<MapStackParamList>();

function MapNavigator({ route }: MapHomeProps) {
return (
<MapStack.Navigator>
  <MapStack.Screen
    name="MapScreen"
    component={MapScreen}
    options={OptionsSettings({ route })}
  />
</MapStack.Navigator>
);
}

const LeaderboardStack = createStackNavigator<LeaderboardStackParamList>();

function LeaderboardNavigator({ route }: LeaderboardHomeProps) {
return (
<LeaderboardStack.Navigator>
  <LeaderboardStack.Screen
    name="LeaderboardScreen"
    component={LeaderboardScreen}
    options={OptionsSettings({ route })}
  />
</LeaderboardStack.Navigator>
);
}

const FavoritesStack = createStackNavigator<FavoritesStackParamList>();

function FavoritesNavigator({ route }: FavoritesHomeProps) {
return (
<FavoritesStack.Navigator>
  <FavoritesStack.Screen
    name="FavoritesScreen"
    component={FavoritesScreen}
    options={OptionsSettings({ route })}
  />
</FavoritesStack.Navigator>
);
}

const styles: NavigationStyle = {
container: {
labelStyle: {
  fontWeight: "bold",
},
paddingLeft: 30,
paddingRight: 30,
},
};

