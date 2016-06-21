/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const React = require('react')
const {ColoredView, NavigationBar} = require('react-native-ui')
const {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image
} = require('react-native')

const Views = {
  home: {
    title: 'Home',
    icon: 'home',
    component: require('./views/Home')
  },
  ranking: {
    title: 'Ranking',
    icon: 'trophy',
    component: require('./views/Ranking')
  },
  progress: {
    title: 'Progreso',
    icon: 'graph-bar',
    component: require('./views/Stats')
  },
  tips: {
    title: 'Tips',
    icon: 'lightbulb',
    component: require('./views/Tips')
  }
}

const hackcancun = React.createClass({

  getInitialState() {
    return {
      currentViewKey: 'home'
    }
  },

  onNavigationChange(newTab) {
    this.setState({
      currentViewKey: newTab
    })
  },

  render() {
    const {currentViewKey} = this.state
    const CurrentView = Views[currentViewKey].component

    return (
      <ColoredView color='#8E44AD' title={Views[currentViewKey].title} customStyles={customStyles}>
        <View style={styles.scrollView} key={currentViewKey}>
          <ScrollView style={styles.scrollView} centerContent={true}>
            <CurrentView style={{flex: 1}}/>
          </ScrollView>
        </View>
        <NavigationBar
          active={currentViewKey}
          content={Views}
          onChange={this.onNavigationChange} />
      </ColoredView>
    );
  }
})

const customStyles = {
  container: {
    backgroundColor: '#fff'
  }
}

const styles = {
  scrollView: {
    flex: 1
  }
}

AppRegistry.registerComponent('hackcancun', () => hackcancun);
