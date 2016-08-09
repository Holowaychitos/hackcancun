const React = require('react')
const ReactNative = require('react-native')

const {Alert} = ReactNative
const {ImageCard} = require('react-native-ui')

window.navigator.userAgent = 'react-native'

const {AnimatedCircularProgress} = require('react-native-circular-progress');

const {View, Text} = ReactNative

var io = require('socket.io-client/socket.io')
window.socket = io.connect('http://198.199.67.175:8000', {
  jsonp: false,
  transports: ['websocket']
})

const Tips = React.createClass({
  getInitialState() {
    return {
      jumpCount: 0,
      startedDate: 0
    }
  },

  onJump() {
    const jumpCount = this.state.jumpCount + 1

    if (this.state.jumpCount === 10) {
      return
    }

    if (jumpCount === 10) {
      Alert.alert('Felicidades 🎉', '¡Tienes un nuevo record!')
    }

    this.setState({
      jumpCount: jumpCount
    })
  },

  componentDidMount() {
    window.socket.on('jump', () => {
      this.onJump()
    })
  },

  componentWillUnmount() {
    window.socket.removeAllListeners('jump')
  },

  render() {
    const {jumpCount} = this.state

    return (
      <View>
        <ImageCard
          subtitle='Salta y aumenta tu habilidad'
          title='Saltos'
          imageUrl='http://www.movementmattersny.com/wp-content/uploads/2014/08/kids-jumping.jpg' />

        <AnimatedCircularProgress
          size={200}
          width={5}
          fill={jumpCount * 10}
          tintColor="#ECF0F1"
          backgroundColor="#2C3E50"
          style={styles.circularProgress}>
          {fillText => <Text style={styles.fillText}>
            {10 - jumpCount}
          </Text>}
        </AnimatedCircularProgress>

        <View style={{padding: 16}}>
          <Text style={{fontSize: 15, paddingBottom: 8}}>1. Párate frente al sensor.</Text>
          <Text style={{fontSize: 15, paddingBottom: 8}}>2. Brinca.</Text>
        </View>
      </View>
    )
  }
})

const styles = {
  fillText: {
    alignSelf: 'center',
    position: 'absolute',
    top: 68,
    width: 200,
    left: 0,
    fontSize: 54,
    fontWeight: '200',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  circularProgress: {
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32
  }
}

module.exports = Tips
