import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";
import { stackStyles, cardStyles } from "./config";

const PhotoTabs = createMaterialTopTabNavigator(
  {
    SelectPhoto,
    TakePhoto
  },
  {
    tabBarPosition: "bottom"
  }
);

export default createStackNavigator(
  {
    PhotoTabs,
    UploadPhoto
  },
  {
    defaultNavigationOptions: {
      headerLeft: () => null,
      headerStyle: {
        ...stackStyles
      },
      cardStyle: {
        ...cardStyles
      }
    }
  }
);