export const tsSnippets = {
    importReact: `import React from 'react';`,
    importReactNative: `import { View, Text, StyleSheet } from 'react-native';`,
    componentTemplate: `interface MyCompProps {
    message: string;
  }

  const MyComponent: React.FC<MyCompProps> = ({ message='MyComponent' }) => {
    return (
      <View style={styles.container}>
        <Text>{message}</Text>
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
//# sourceMappingURL=ts-snippets.js.map