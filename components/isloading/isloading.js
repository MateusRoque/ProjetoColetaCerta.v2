import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const isLoading = ({ isLoading }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <YourOtherComponent />
      )}
    </View>
  );
};

export default isLoading;