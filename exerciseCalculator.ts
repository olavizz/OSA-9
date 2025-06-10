interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
    const periodLength = hours.length;
    const trainingDays = hours.filter(day => day > 0).length;
    const average = hours.reduce((sum, day) => sum + day, 0) / periodLength;
    const success = average >= target;
    
    let rating: number;
    let ratingDescription: string;
    
    if (average < target) {
        rating = 1;
        ratingDescription = 'bad, try harder next time';
    } else if (average === target) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
    } else {
        rating = 3;
        ratingDescription = 'excellent, keep up the good work!';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};   

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));