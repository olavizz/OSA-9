interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (target: number, hours: number[]): Result => {
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

const modifyArgs = (args: string[]) => {
    const list = args.map(item => Number(item));
    if (list.every(item => !isNaN(item))) {
        const target = list[0];
        const hours = list.slice(1);
        return {
            value1: target,
            value2: hours
        };
    } else throw new Error('items are not numbers');
};

try {
    const { value1, value2 } = modifyArgs(process.argv.slice(2));
    console.log(calculateExercises(value1, value2));
} catch (error: unknown) {
    let errorMessage = 'not working';
    if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
    console.log(errorMessage);
}