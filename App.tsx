/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from '@/navigation';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { colors } from '@/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={colors.background}
        />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

// const styles = StyleSheet.create({
//   AndroidSafeArea: {
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//   }
// });
