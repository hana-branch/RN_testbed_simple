import React, { Component, useEffect } from 'react'
import branch from 'react-native-branch'
import BranchMethods from './BranchMethods'

// export default class App extends Component {
//   render() {
//     return <BranchMethods />
//   }
// }

const App = () => {
  useEffect(() => {
    const unsubscribe = branch.subscribe({
        onOpenComplete: ({ error, params, uri }) => {
            if (error) {
                console.error(`[branch.io] subscribe onOpenComplete, Error from opening uri: ${uri} Error: ${error}`);
                return;
            }
            else {
              console.log(`[branch.io] subscribe: ${JSON.stringify(params)}`);
            }
        }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <BranchMethods />
  );
}

export default App;
