const React = require('react')
const ReactNative = require('react-native')

const {View, Text, Image} = ReactNative

const Ranking = React.createClass({
  render: function() {
    return (
      <View>
        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/445400536569749504/8vJ-Prbe_400x400.png'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Maru Lango</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+11</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/423174396069441536/2IRA_C-W_400x400.jpeg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Jeduan Cornejo</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+5</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/718228933091729408/aguelcQt_400x400.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Melissa Garo</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+3</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/725470639377666049/woDWTAN1_400x400.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Javier Bórquez</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+2</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/2696674759/e8cebae23a94b3b6a81e1321f7dc55a2_400x400.png'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Iddar Olivares</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+2</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/3075233293/92380e10b8a09207f649c61e791b3a62_400x400.jpeg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Alberto Nava</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/707330965945778177/rOTBtyuu_400x400.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Diana Mariel</Text>
            </View>
            <View style={styles.rankingInfoSecond}>
              <Text style={styles.rankingSuccess}>+1</Text>
              <Text>esta semana</Text>
            </View>
          </View>
        </View>

        <View style={styles.rakingItem}>
          <Image source={{uri: 'https://pbs.twimg.com/profile_images/690450362755604480/6JXIqk3g_400x400.jpg'}} style={styles.rankingImage} />
          <View style={styles.rankingInfo}>
            <View style={styles.rankingInfoFirst}>
              <Text style={styles.rankingTitle}>Magio Bus</Text>
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
    fontSize: 16,
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
