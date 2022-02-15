import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// const { Octokit } = require("@octokit/core");
const MyActionOctokit = Octokit.plugin(
  require("@octokit/plugin-paginate-rest").paginateRest,
  require("@octokit/plugin-throttling").throttling,
  require("@octokit/plugin-retry").retry
).defaults({
  throttle: {
    onAbuseLimit: (retryAfter, options) => {
      /* ... */
    },
    onRateLimit: (retryAfter, options) => {
      /* ... */
    },
  },
  authStrategy: require("@octokit/auth-action").createActionAuth,
  userAgent: `my-octokit-action/v1.2.3`,
});

const octokit = new MyActionOctokit();
const installations = await octokit.paginate("GET /app/installations");
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
