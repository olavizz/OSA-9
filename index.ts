import express from 'express';
import { calculateBmi, parseArguments } from './bmiCalculator';

const app = express();


app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;
    console.log(height, weight);

    // Check that both height and weight are strings
    if (typeof height !== 'string' || typeof weight !== 'string') {
        res.send('Malformatted parameters');
        throw new Error('Malformatted parameters');
    }

    try {
        console.log('calling parseArguments with', [height, weight]);
        const values = parseArguments([height, weight]);
        const bmi = calculateBmi(values[0], values[1]);
        const object = {
            weight: values[1],
            height: values[0],
            bmi: bmi
        };
        res.send(object);

    } catch (error: unknown) {
        console.log(error);
        const object = {
            error: "malformatted parameters"
        };
        res.send(object);
    }
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`port is running in port ${PORT}`);
});
