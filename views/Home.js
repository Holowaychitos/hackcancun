const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const Home = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/bebe1.png')} />
      </View>
    )
  }
})

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    alignSelf: 'center'
  }
}

module.exports = Home
