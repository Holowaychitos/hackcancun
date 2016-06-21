const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const Home = React.createClass({
  getInitialState() {
    return {
      currentSprite: 1
    }
  },

  componentDidMount() {
    this.animation = setInterval(() => {
      this.setState({
        currentSprite: this.state.currentSprite === 1 ? 2 : 1
      })
    }, 400)
  },

  componentWillUnmount() {
    clearInterval(this.animation)
  },

  render() {
    const {currentSprite} = this.state

    return <View style={styles.container}>
      {currentSprite === 1 ? (
        <Image style={{width: 300, height: 300}} resizeMode='contain' source={require('../assets/bebe1.png')} />
      ) : (
        <Image style={{width: 300, height: 300}} resizeMode='contain' source={require('../assets/bebe2.png')} />
      )}
    </View>
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
