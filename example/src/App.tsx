import { Button, Input } from 'merlo-ui'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import '../global.css'

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <View className="bg-background dark py-12" style={styles.container}>
      {show && (
        <Input isRequired label="Label" labelPlacement="outside" size="lg" />
      )}

      <Button className="my-4" onPress={() => setShow(!show)}>
        Toggle
      </Button>
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
