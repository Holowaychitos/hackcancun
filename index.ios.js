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
    component: require('./views/Home')
  },
  ranking: {
    title: 'Ranking',
    component: require('./views/Ranking')
  },
  stats: {
    title: 'Stats',
    component: require('./views/Stats')
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
        <ScrollView style={styles.scrollView}>
          <CurrentView />
        </ScrollView>
        <NavigationBar active={currentViewKey} content={Views} onChange={this.onNavigationChange} />
      </ColoredView>
    );
  }
})

const customStyles = {
  container: {
    backgroundColor: '#ECF0F1'
  }
}

const styles = {
  scrollView: {
    flex: 1
  }
}

AppRegistry.registerComponent('hackcancun', () => hackcancun);
