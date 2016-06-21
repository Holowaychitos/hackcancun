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
  View
} = require('react-native')

const hackcancun = React.createClass({
  render() {
    return (
      <ColoredView color='#8E44AD' title='Amigochi' customStyles={customStyles}>
        <ScrollView style={styles.scrollView}>
          <Text>yey</Text>
        </ScrollView>
        <NavigationBar content={{
          home: {
            title: 'Yo'
          },
          other: {
            title: 'Ranking'
          },
          stats: {
            title: 'Stats'
          }
        }}/>
      </ColoredView>
    );
  }
})

const customStyles = {
  container: {
  }
}

const styles = {
  scrollView: {
    flex: 1
  }
}

AppRegistry.registerComponent('hackcancun', () => hackcancun);
