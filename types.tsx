
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  Fleet: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

//HOME FOOTER
export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

//HOME SCREEN
export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

// Second Screen
export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
};

export type TweetType = {
  id: string;
  createdAt: string;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLike?: number;
};

export type RootTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
