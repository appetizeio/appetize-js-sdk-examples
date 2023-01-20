import { devices, PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
    testDir: './tests',
    outputDir: 'test-results/',
    timeout: 120 * 1000,
    expect: {        
        timeout: 5000,
        
        // recommended ratio for screenshot testing
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.05,
        }
    },    
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    reporter: 'line',
    
    // correlates to number of concurrent Appetize sessions at once.
    // if you are a paid Appetize user you may increase this.
    workers: 1,
    
    // required - each test file will use 1 browser and 1 Appetize session
    fullyParallel: false,
    
    use: {    
        trace: 'on-first-retry',
        baseURL: 'https://appetize.io',
    },

    // any browser is fine, but use only 1
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        }
    ]
};

export default config;
