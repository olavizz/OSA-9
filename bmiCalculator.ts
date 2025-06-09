const calculateBmi = (height: number, weight: number) => {
    if (18.5 <= weight/((height/100)**2) && weight/((height/100)**2) <= 24.9) {
        return 'Normal weight'
    } else {
        return 'dont know'
    }
};

console.log(calculateBmi(180, 74));
