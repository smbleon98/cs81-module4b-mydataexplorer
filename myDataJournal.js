// My repo URL: https://github.com/smbleon98/cs81-module4b-mydataexplorer

// Define an array named weekData with 7 objects, one for each day. 
// Use your real or realistic data:
// day (string), sleepHours (number), screenTime (hours), mood (string), caffeineIntake (cups), focusLevel (1–10)
let weekData = [
    {day: "Sunday", sleepHours: 6, screenTime: 8, mood: "Sad", caffeineIntake: 0, focusLevel: 5},
    {day: "Monday", sleepHours: 5, screenTime: 4, mood: "Stressed", caffeineIntake: 0, focusLevel: 4},
    {day: "Tuesday", sleepHours: 6, screenTime: 4, mood: "Stressed", caffeineIntake: 0, focusLevel: 4},
    {day: "Wednesday", sleepHours: 5, screenTime: 4, mood: "Stressed", caffeineIntake: 0, focusLevel: 5},
    {day: "Thursday", sleepHours: 6, screenTime: 4, mood: "Content", caffeineIntake: 0, focusLevel: 5},
    {day: "Friday", sleepHours: 8, screenTime: 9, mood: "Happy", caffeineIntake: 0, focusLevel: 7},
    {day: "Saturday", sleepHours: 8, screenTime: 9, mood: "Content", caffeineIntake: 0, focusLevel: 7}
];

/*
PREDICTION
1. Which day had the most screen time? 
- Friday or Saturday is  the day I had the most screen time. My screentime is "low" during the weekends
due to working a full-time job. 

2. Best focus day?
- My best focus day is also probably Friday, which sounds contradicting given that it's also the day of
most of my screentime. The reason for this is probably because the workweek can be cognitive overload 
during the day, which decreases my focus level during the night. At the same time, being in the weekend zone
makes me spiritually happy, so I'm able to focus better.

3. Is more caffeine helping?
- No, because I do not drink coffee (not a fan of the taste, and yes, that probably puts me at a productivity
disadvantage).
*/

function findHighestScreenTime(myData){
    let maxScreenTime = 0;
    let matchingDay = "";

    for (let day of myData) {
        if (day.screenTime > maxScreenTime) {
            maxScreenTime = day.screenTime;
            matchingDay = day.day;
        }
    }
    return `${matchingDay} (${maxScreenTime} hrs)`;
}


function averageSleep(myData){
    let avgSleep = 0;
    let sleepSum = 0;
    for (let day of myData) {
        sleepSum += day.sleepHours;
    }
    avgSleep = sleepSum / 7;            // Will want to adjust 7 to myData.length if this expands
    return avgSleep;
}


function mostFrequentMood(myData){
    let moodCounts = {}; 

    for (let day of myData) {
        let mood = day.mood;
        if (moodCounts[mood]) {
            moodCounts[mood] += 1;
        } else {
            moodCounts[mood] = 1;
        }
    }

    let maxCount = 0;
    let mostFrequentMood = "";

    for (let mood in moodCounts) {
        if (moodCounts[mood] > maxCount) {
            maxCount = moodCounts[mood];
            mostFrequentMood = mood;
        }
    }

    return mostFrequentMood;
}


function averageFocus(myData){
    let avgFocus = 0;
    let focusSum = 0;
    for (let day of myData) {
        focusSum += day.focusLevel;
    }
    avgFocus = focusSum / 7;            // Will want to adjust 7 to myData.length if this expands
    return avgFocus;
}

console.log("Analyzing Shadia's Data Journal...");
console.log(`Most screen time: ${findHighestScreenTime(weekData)}`);
console.log(`Average sleep: ${averageSleep(weekData)}`);
console.log(`Most frequent mood: ${mostFrequentMood(weekData)}`);
console.log(`Average focus level: ${averageFocus(weekData)}`)

console.log("Reflection:");
console.log("Stress is my most common mood, and my focus level is very average at 5.3.");
console.log("I take 0 caffeine, and I wonder if that will help my focus level and general well-being.");