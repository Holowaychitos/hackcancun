const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const Ranking = React.createClass({
  render: function() {
    return (
      <View>
        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/02/17/12/24/fruits-82524_960_720.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Title</Text>
              <Text>Title</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
})

const styles = {
  rakingItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  rankingImage: {
    marginRight: 16,
    borderRadius: 25,
    height: 50,
    width: 50
  },
  rankingTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4
  },
  rankingInfo: {
    flexDirection: 'row',
    flex: 1
  },
  rankingInfoFirst: {
    flex: 1,
    justifyContent: 'center'
  },
  rankingInfoSecond: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  rankingSuccess: {
    color: '#27AE60',
    fontWeight: '700'
  }
}

module.exports = Ranking
