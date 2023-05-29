import { test, expect } from '@appetize/playwright';

test('goes to Places tab and shows current location on map', async ({
    session,
}) => {
    // tap on 'Places' tab
    await session.tap({
        element: {
            attributes: {
                text: 'Places',
            }
        },
    });
    
    // tap on 'Enable location' on the dialog that pops up
    await session.tap(
        {
            element: {
                attributes: { 
                    text: 'Enable location',
                }
            },
        }, 
        {
            // select the first element that matches the query
            matchIndex: 0
        }
    );
    
    // tap on 'Allow Once' on location permission dialog
    await session.tap({
        element: {
            attributes: { 
                text: 'Allow Once',
            }
        },
    });
    
    // assert that current location is shown on map    
    // (location of device is set in playwright.config.ts)
    await expect(session).toHaveElement({ 
        attributes: { 
            text: 'Silicon Valley' 
        }
    });
});