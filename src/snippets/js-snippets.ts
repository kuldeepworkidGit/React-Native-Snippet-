export const jsSnippets = {
  importReact: `import React from 'react';`,
  importReactNative: `import { View, Text, StyleSheet } from 'react-native';`,
  componentTemplate: `const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyComponent;`,
};
