import { StatusBar } from 'expo-status-bar';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <GluestackUIProvider><View style={styles.container}>
        <Text>hello workd</Text>
        <StatusBar style="auto" />
      </View></GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
