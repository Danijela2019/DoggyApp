import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});



export default function App(): React.ReactElement | null {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
