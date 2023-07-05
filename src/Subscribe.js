import branch, { BranchSubscriber } from 'react-native-branch';

console.info("Subscribing to Branch links");

// const subscriber = new BranchSubscriber({
//   onOpenStart: ({ uri, cachedInitialEvent }) => {
//     console.log(`Branch opening URI ${uri} ${cachedInitialEvent ? '[cached]' : ''}`);
//   },
//   onOpenComplete: ({ error, params, uri }) => {
//     if (error) {
//       console.error(`Error from Branch opening URI ${uri}: ${error}`);
//       return;
//     }

//     console.info(`Received link response from Branch for ${uri}`);

//     console.log(`params: ${JSON.stringify(params)}`);
//   },
// });

// subscriber.subscribe();

// branch.subscribe(({error, params, uri}) => {
//   if (error) {
//     console.error(`Error from Branch opening URI ${uri}: ${error}`);
//     return
//   }

//   // params will never be null if error is null

//   if (params['+non_branch_link']) {
//     const nonBranchUrl = params['+non_branch_link']
//     // Route non-Branch URL if appropriate.
//     return
//   }

//   if (params['+clicked_branch_link']) {
//       console.log(`Branch params: ${JSON.stringify(params)}`);
//     return
//   }
// })


branch.subscribe({
    onOpenStart: ({
        uri,
        cachedInitialEvent
    }) => {
        console.log(
            'subscribe onOpenStart, will open ' +
            uri +
            ' cachedInitialEvent is ' +
            cachedInitialEvent,
        );
    },
    onOpenComplete: ({
        error,
        params,
        uri
    }) => {
        if (error) {
            console.error(
                'subscribe onOpenComplete, Error from opening uri: ' +
                uri +
                ' error: ' +
                error,
            );
            return;
        }
        else if (params) {
            if (!params['+clicked_branch_link']) {
                if (params['+non_branch_link']) {
                    console.log('non_branch_link: ' + uri);
                    // Route based on non-Branch links
                    return;
                }
            } else {
                // Handle params
                let deepLinkPath = params.$deeplink_path as string; 
                let canonicalUrl = params.$canonical_url as string;
                // Route based on Branch link data 
                return
            }
        }
    },
});
