
const config = {
    testDir: './tests',
    outputDir: 'test-results/',
    timeout: 120 * 1000,
    expect: {        
        // recommended ratio for screenshot testing
        toMatchSnapshot: {
            maxDiffPixelRatio: 0.05,
        }
    },
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 3 : 0,
    reporter: 'line',
    
    // correlates to number of concurrent Appetize sessions at a time
    workers: 1,
    fullyParallel: false,
    
    use: {    
        trace: 'retain-on-failure',
        baseURL: 'https://appetize.io',
        
        // Appetize session configuration
        config: {
            publicKey: 'demo',
            device: 'iphone13pro',
            osVersion: '16',           
            location: [37.37750, -122.06750] // Silicon Valley
        }    
    },
}

export default config;
