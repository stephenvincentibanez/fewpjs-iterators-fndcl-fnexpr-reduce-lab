const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = () => {
// return batteryBatches.reduce((total, batteries) => batteries + total, 0)}

let totalBatteries = batteryBatches.reduce( (total, batteries) => batteries + total, 0)