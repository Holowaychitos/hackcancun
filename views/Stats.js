const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const {BarChart} = require('react-native-charts')

const Stats = React.createClass({
  render: function() {
    return (
      <View>
        <View style={{paddingLeft: 32, paddingTop: 20, paddingBottom: 16}}>
          <Text style={styles.text}>
            Puntos de actividad conseguidos 🏆
          </Text>
        </View>
        <BarChart
          dataSets={[
            {
              fillColor: '#46b3f7',
              data: [
                { value: 5 },
                { value: 8 },
                { value: 6 },
                { value: 11 },
              ]
            },
            {
              fillColor: '#3386b9',
              data: [
                { value: 4 },
                { value: 9 },
                { value: 8 },
                { value: 13 },
              ]
            },
          ]}
          graduation={3}
          horizontal={false}
          showGrid={true}
          barSpacing={0}
          style={{
            height: 150,
            margin: 15,
          }}/>
        <View style={{padding: 32}}>
          <Text style={styles.text}>Tus stats la ultima semana 💪</Text>

          <Text style={styles.textBold}>
            ¡Tienes más puntos de esfuerzo que la vez pasada, felicidades! 🏆
          </Text>
        </View>
        <Image
          source={require('../assets/squirtle.png')}
          style={{
            alignSelf: 'center',
            width: 300,
            height: 180
          }} resizeMode='contain' />
      </View>
    )
  }
})

const styles = {
  text: {
    fontSize: 16
  },
  textBold: {
    fontWeight: '700',
    marginTop: 16,
    fontSize: 16
  }
}

module.exports = Stats
