import { Input } from 'merlo-ui'
import { StyleSheet, View } from 'react-native'

import '../global.css'

export default function App() {
  return (
    <View style={styles.container}>
      <Input variant="flat" color="success" />
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
