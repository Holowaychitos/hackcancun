const React = require('react')
const ReactNative = require('react-native')

const {ImageCard} = require('react-native-ui')

const {View, Text} = ReactNative

const Tips = React.createClass({
  render: function() {
    return (
      <View>
        <ImageCard
          subtitle='Juega futbol para ser más rápido'
          title='Futbol'
          imageUrl='http://cdn2.uvnimg.com/3c/a6/921400d0499cb2980b77c519307e/futbol-generic-entry-point.jpg' />

        <ImageCard
          subtitle='¡Cada fruta te da un poder diferente!'
          title='Frutas y verduras'
          imageUrl='https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg' />

        <ImageCard
          subtitle='Dormir es la mejor forma de recuperarte'
          title='Dormir'
          imageUrl='http://estaticos.muyinteresante.es/media/cache/680x_thumb/uploads/images/gallery/5548e20741444aef0ed38fa6/dormir-bien-atencion1.jpg' />

        <ImageCard
          subtitle='Juega futbol para ser más rápido'
          title='Futbol'
          imageUrl='http://cdn2.uvnimg.com/3c/a6/921400d0499cb2980b77c519307e/futbol-generic-entry-point.jpg' />
      </View>
    )
  }
})

module.exports = Tips
