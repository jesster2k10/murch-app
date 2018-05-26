import { NavigationActions } from 'react-navigation';
import screenNames from "../screen_names";

export const navigateToProduct = () => {
  console.log(screenNames)
  NavigationActions.navigate({
    routeName: screenNames.PRODUCT,
  });
}

export const navigateToCart = () =>
  NavigationActions.navigate({
    routeName: screenNames.CART
  });