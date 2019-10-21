import Reactotron from 'reactotron-react-native';
import { NativeModules } from 'react-native';

// if (__DEV__) {
//   // const tron = Reactotron.configure({ host: '127.0.0.1' })
//   const tron = Reactotron.configure({ host: 'localhost' })
//     .useReactNative()
//     // .useReactNative(asyncStorage())
//     // .use(reactotronRedux())
//     // .use(reactotronSaga())
//     .connect();

//   tron.clear();

//   console.tron = tron;
// }

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({ host: scriptHostname })
    .useReactNative()
    .connect();

  console.tron = tron;
}
