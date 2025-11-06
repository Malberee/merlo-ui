import { Slider } from 'merlo-ui'
import { StyleSheet, View } from 'react-native'

import '../global.css'

export default function App() {
  return (
    <View className="bg-background dark py-12" style={styles.container}>
      <Slider size="lg" defaultValue={[0, 10]} maxValue={10} showSteps />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
})
