const calculateBmi = (height: number, weight: number) => {
    if (18.5 <= weight/((height/100)**2) && weight/((height/100)**2) <= 24.9) {
        return 'Normal weight'
    } else if (weight/((height/100)**2) < 18.5) {
        return 'Underweight'
    } else if (weight/((height/100)**2) > 24.9) {
        return 'Overweight'
    } else {
        return 'dont know'
    }
};

const parseArguments = (args: string[]): number[] => {
    if (args.length !== 2) {
        throw new Error('Not right amount of arguments')
    }
   const values = args.map(arg => Number(arg));
   if (isNaN(values[0]) || isNaN(values[1])) {
    throw new Error('Provided values were not numbers!')
   }
   return values;
}

try {
    const values = parseArguments(process.argv.slice(2))
    console.log(calculateBmi(values[0], values[1])); 
} catch (error: unknown) {
    let errorMessage = 'now working';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}

