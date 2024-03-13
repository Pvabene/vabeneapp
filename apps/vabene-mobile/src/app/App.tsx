/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      ></SafeAreaView>
    </>
  );
};

export default App;
