module.exports = class BasePage {
    async swipe_up(roll) {
        const START_Y = 1850;
        const END_Y = 100;
        const X_COORD = 500; 

        for (let i = 0; i < roll; i++) {
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: X_COORD, y: START_Y }, 
                        { type: 'pointerDown', button: 0 },                      
                        { type: 'pause', duration: 500 },                         
                        { type: 'pointerMove', duration: 1000, x: X_COORD, y: END_Y }, 
                        { type: 'pointerUp', button: 0 }                          
                    ]
                }
            ]);
            await driver.pause(2000);
        }
    }
}