const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const {BarChart} = require('react-native-charts')

const Stats = React.createClass({
  render: function() {
    return (
      <View>
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
          <Text>Tus stats la ultima semana 💪</Text>

          <Text style={{fontWeight: '700', marginTop: 16}}>
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

module.exports = Stats
