/* @flow */

import * as React from 'react';
import { Animated, StyleSheet, View, ViewPropTypes } from 'react-native';
import { HeaderTitle, SafeAreaView } from 'react-navigation';
import HeaderStyleInterpolator from 'react-navigation/src/views/Header/HeaderStyleInterpolator';
import withOrientation from 'react-navigation/src/views/withOrientation';
import type { NavigationScene, NavigationStyleInterpolator, HeaderProps } from 'react-navigation/src/TypeDefinition';
import { iOSUIKit } from 'react-native-typography';
import HeaderLargeBackButton from './headerLargeBackButton';

type SceneProps = {
  scene: NavigationScene,
  position: Animated.Value,
  progress: Animated.Value,
  style?: ViewPropTypes.style,
};

type SubViewRenderer<T> = (props: SceneProps) => ?React.Node;

type SubViewName = 'left' | 'title' | 'right';

type Props = HeaderProps & { isLandscape: boolean };

let styles;

/**
 * Copied from react-navigation/src/views/Header/Header.
 *
 * Modified to match the styles of an iOS 11 Navigation Bar with Large Title.
 */
class HeaderLarge extends React.PureComponent<Props> {
  _getHeaderTitleString(scene: NavigationScene): ?string {
    const sceneOptions = this.props.getScreenDetails(scene).options;
    if (typeof sceneOptions.headerTitle === 'string') {
      return sceneOptions.headerTitle;
    }
    return sceneOptions.title;
  }

  _getLastScene(scene: NavigationScene): ?NavigationScene {
    return this.props.scenes.find((s: *) => s.index === scene.index - 1);
  }

  _getBackButtonTitleString(scene: NavigationScene): ?string {
    const lastScene = this._getLastScene(scene);
    if (!lastScene) {
      return null;
    }
    const { headerBackTitle } = this.props.getScreenDetails(lastScene).options;
    if (headerBackTitle || headerBackTitle === null) {
      return headerBackTitle;
    }
    return this._getHeaderTitleString(lastScene);
  }

  _navigateBack = () => {
    this.props.navigation.goBack(null);
  };

  _renderTitleComponent = (props: SceneProps): ?React.Node => {
    /**
     * Modified to ignore truncation-related functionality (onLayout width calculation). Also modified to pass down
     * a `tintColor` prop when `options.headerTitle` is a valid element. Also modified so that `RenderedHeaderTitle`
     * has styles applied to make it match the iOS 11 Navigation Bar with Large Title styles, and has the `color`
     * style specified last to ensure that the `options.headerTintColor` value is applied.
     */
    // $FlowFixMe
    const { options } = this.props.getScreenDetails(props.scene);
    const { headerTitle } = options;

    if (React.isValidElement(options.headerTitle)) {
      return React.cloneElement(options.headerTitle, { tintColor: options.headerTintColor });
    }

    const titleString = this._getHeaderTitleString(props.scene);
    const tintColor = options.headerTintColor;
    const allowFontScaling = options.headerTitleAllowFontScaling;
    const RenderedHeaderTitle = headerTitle && typeof headerTitle !== 'string' ? headerTitle : HeaderTitle;

    return (
      <RenderedHeaderTitle
        allowFontScaling={allowFontScaling == null ? true : allowFontScaling}
        style={[styles.titleText, options.headerTitleStyle, !!tintColor && { color: tintColor }]}
      >
        {titleString}
      </RenderedHeaderTitle>
    );
  };

  _renderLeftComponent = (props: SceneProps): ?React.Node => {
    /**
     * Modified to ignore truncation-related functionality (truncated title, limited width), and to use our custom
     * HeaderLargeBackButton when a headerLeft is not specified. Also modified to pass down a `tintColor` prop when
     * `options.headerLeft` is a valid element.
     */
    // $FlowFixMe
    const { options } = this.props.getScreenDetails(props.scene);

    if (React.isValidElement(options.headerLeft)) {
      return React.cloneElement(options.headerLeft, { tintColor: options.headerTintColor });
    }

    if (options.headerLeft === null) {
      return options.headerLeft;
    }

    if (props.scene.index === 0) {
      return null;
    }

    const backButtonTitle = this._getBackButtonTitleString(props.scene);

    const RenderedLeftComponent = options.headerLeft || HeaderLargeBackButton;

    return (
      <RenderedLeftComponent
        onPress={this._navigateBack}
        tintColor={options.headerTintColor}
        title={backButtonTitle}
        titleStyle={options.headerBackTitleStyle}
      />
    );
  };

  _renderRightComponent = (props: SceneProps): ?React.Node => {
    /**
     * Modified to pass down a `tintColor` prop when `options.headerRight` is a valid element.
     */
    const { options } = this.props.getScreenDetails(props.scene);

    if (React.isValidElement(options.headerRight)) {
      return React.cloneElement(options.headerRight, { tintColor: options.headerTintColor });
    }

    return options.headerRight || null;
  };

  _renderLeft(props: SceneProps): ?React.Node {
    /**
     * Modified to use `HeaderStyleInterpolator.forRight` for consistency between headerLeft and headerRight
     * transition styles.
     */
    return this._renderSubView(props, 'left', this._renderLeftComponent, HeaderStyleInterpolator.forRight);
  }

  _renderTitle(props: SceneProps, options: *): ?React.Node {
    /**
     * Modified to ignore styles relating to absolute positioning of title.
     */
    return this._renderSubView(props, 'title', this._renderTitleComponent, HeaderStyleInterpolator.forCenter);
  }

  _renderRight(props: SceneProps): ?React.Node {
    return this._renderSubView(props, 'right', this._renderRightComponent, HeaderStyleInterpolator.forRight);
  }

  _renderSubView<T>(
    props: SceneProps,
    name: SubViewName,
    renderer: SubViewRenderer<T>,
    styleInterpolator: NavigationStyleInterpolator
  ): ?React.Node {
    const { scene } = props;
    const { index, isStale, key } = scene;

    const offset = this.props.navigation.state.index - index;

    if (Math.abs(offset) > 2) {
      // Scene is far away from the active scene. Hides it to avoid unnecessary rendering.
      return null;
    }

    const subView = renderer(props);

    if (subView == null) {
      return null;
    }

    const pointerEvents = offset !== 0 || isStale ? 'none' : 'box-none';

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        key={`${name}_${key}`}
        style={[
          styles.item,
          styles[name],
          props.style,
          styleInterpolator({
            // todo: determine if we really need to splat all this.props
            ...this.props,
            ...props,
          }),
        ]}
      >
        {subView}
      </Animated.View>
    );
  }

  _renderHeader(props: SceneProps): React.Node {
    /**
     * Modified to change the header layout by wrapping header actions in a styled View, which is separate from the
     * title.
     */
    let left = this._renderLeft(props);
    const right = this._renderRight(props);

    const title = this._renderTitle(props, {
      hasLeftComponent: !!left,
      hasRightComponent: !!right,
    });

    // If we have a `headerRight` but don't have a `headerLeft`, we render an empty `View` as our `headerLeft` so that
    // the `headerRight` will still appear on the right side of the header.
    if (!left && !!right) {
      left = <View />;
    }

    return (
      <View style={[StyleSheet.absoluteFill, styles.header]} key={`scene_${props.scene.key}`}>
        <View style={styles.headerLeftRightContainer}>
          {left}
          {right}
        </View>

        {title}
      </View>
    );
  }

  render() {
    /**
     * Modified to increase the app bar height to match the height of an iOS 11 Navigation Bar with Large Title.
     */
    let appBar;

    if (this.props.mode === 'float') {
      const scenesProps: Array<SceneProps> = this.props.scenes.map((scene: NavigationScene) => ({
        position: this.props.position,
        progress: this.props.progress,
        scene,
      }));
      appBar = scenesProps.map(this._renderHeader, this);
    } else {
      appBar = this._renderHeader({
        position: new Animated.Value(this.props.scene.index),
        progress: new Animated.Value(0),
        scene: this.props.scene,
      });
    }

    // eslint-disable-next-line no-unused-vars
    const { scenes, scene, position, screenProps, progress, isLandscape, ...rest } = this.props;

    const { options } = this.props.getScreenDetails(scene);
    const { headerStyle } = options;

    // Match the height of an iOS 11 Navigation Bar with Large Title.
    const appBarHeight = 96;

    const containerStyles = [
      styles.container,
      {
        height: appBarHeight,
      },
      headerStyle,
    ];

    return (
      <Animated.View {...rest}>
        <SafeAreaView style={containerStyles} forceInset={{ top: 'always', bottom: 'never' }}>
          <View style={styles.appBar}>{appBar}</View>
        </SafeAreaView>
      </Animated.View>
    );
  }
}

/**
 * Modified to change the header layout, and to make the bottom border stronger to provide more separation between
 * header and content.
 */
styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
  },
  appBar: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
  },
  headerLeftRightContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

    // Match height of HeaderLargeBackButton. This is needed so that when we don't have a `headerLeft` or `headerRight`
    // we maintain a consistent header layout (without setting a height here, the `title` is not positioned correctly).
    // There is probably a better solution for this.
    height: 21 + 12 + 12,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  title: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  titleText: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    marginHorizontal: 0,
    textAlign: 'left',
  },
  left: {
    flex: 1,
    paddingRight: 20,
  },
  right: {},
});

export default withOrientation(HeaderLarge);