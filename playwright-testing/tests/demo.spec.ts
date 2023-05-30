import { test, expect } from '@appetize/playwright';

// see playwright.config.ts for session configuration
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
            // select the first element that matches the selector
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

    // tap button that recenters map on current location
    await session.tap({
        element: {
            attributes: {
                accessibilityLabel: 'Recenter on your location'
            }
        }
    })
    
    // assert that current location is shown on map    
    await expect(session).toHaveElement({ 
        attributes: { 
            text: 'Silicon Valley' 
        }
    });
});