import { test, expect } from '@appetize/playwright';

test.setup({
    // this example uses the Appetize demo app    
    publicKey: 'demo',
    device: 'iphone14pro',
    osVersion: '16.0'
});

test('goes to Places tab and shows current location on map', async ({
    session,
}) => {
    // tap on 'Places' tab
    await session.tap({
        element: {
            text: 'Places',
        },
    });
    
    // tap on 'Enable location' on the dialog that pops up
    await session.tap({
        element: {
            text: 'Enable location',
        },
    });
    
    // tap on 'Allow Once'
    await session.tap({
        element: {
            text: 'Allow Once',
        },
    });
    
    // assert that the 'Save' button is visible
    await expect(session).toHaveElement({ text: 'Save' });
});