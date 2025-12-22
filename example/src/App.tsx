import { Input } from 'merlo-ui'
import { StyleSheet, View } from 'react-native'

import '../global.css'

export default function App() {
  return (
    <View className="bg-background dark py-12" style={styles.container}>
      <Input label="Label" labelPlacement="outside" size="lg" />
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
