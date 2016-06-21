const React = require('react')
const ReactNative = require('react-native')

const {Alert} = ReactNative
const {ImageCard} = require('react-native-ui')

import { AnimatedCircularProgress } from 'react-native-circular-progress';


const {View, Text} = ReactNative

const Tips = React.createClass({
  getInitialState() {
    return {
      fill: 4
    }
  },

  componentDidMount() {
    Alert.alert('Ajuuuuuua! 🎉', '¡Rompiste tu record!')
  },

  render() {
    const {fill} = this.state

    return (
      <View>
        <ImageCard
          subtitle='Salta y aumenta tu habilidad'
          title='Saltos'
          imageUrl='http://www.movementmattersny.com/wp-content/uploads/2014/08/kids-jumping.jpg' />

        <AnimatedCircularProgress
          size={200}
          width={5}
          fill={fill * 10}
          tintColor="#ECF0F1"
          backgroundColor="#2C3E50"
          style={styles.circularProgress}>
          {fillText => <Text style={styles.fillText}>
            {10 - fill}
          </Text>}
        </AnimatedCircularProgress>

        <View style={{padding: 16}}>
          <Text>1. Párate frente al sensor.</Text>
          <Text>2. Brinca.</Text>
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
