let currentRoutine = [];

function calculateBenchRoutine(oneRepMax) {
    const routine = [];
    const steadyWorkout = { sets: 6, reps: 2, percentage: 0.8 };

    routine.push({ workout: `Workout 1`, ...steadyWorkout });
    routine.push({ workout: `Workout 2`, sets: 6, reps: 3, percentage: 0.8 });
    routine.push({ workout: `Workout 3`, ...steadyWorkout });
    routine.push({ workout: `Workout 4`, sets: 6, reps: 4, percentage: 0.8 });
    routine.push({ workout: `Workout 5`, ...steadyWorkout });
    routine.push({ workout: `Workout 6`, sets: 6, reps: 5, percentage: 0.8 });
    routine.push({ workout: `Workout 7`, ...steadyWorkout });
    routine.push({ workout: `Workout 8`, sets: 6, reps: 6, percentage: 0.8 });
    routine.push({ workout: `Workout 9`, ...steadyWorkout });
    routine.push({ workout: `Workout 10`, sets: 5, reps: 5, percentage: 0.85 });
    routine.push({ workout: `Workout 11`, ...steadyWorkout });
    routine.push({ workout: `Workout 12`, sets: 4, reps: 4, percentage: 0.90 });
    routine.push({ workout: `Workout 13`, ...steadyWorkout });
    routine.push({ workout: `Workout 14`, sets: 3, reps: 3, percentage: 0.95 });
    routine.push({ workout: `Workout 15`, ...steadyWorkout });
    routine.push({ workout: `Workout 16`, ...steadyWorkout });
    routine.push({ workout: `Workout 17`, sets: 2, reps: 2, percentage: 1.00 });
    routine.push({ workout: `Workout 18`, sets: 1, reps: 1, percentage: 1.05 });

    return routine.map(workout => {
        return {
            workout: workout.workout,
            sets: workout.sets,
            reps: workout.reps,
            weight: (oneRepMax * workout.percentage).toFixed(2)
        };
    });
}

function generateRoutine() {
    const oneRepMax = document.getElementById('oneRepMax').value;
    currentRoutine = calculateBenchRoutine(oneRepMax);
    displayRoutine(currentRoutine);
}

function displayRoutine(routine) {
    const routineContainer = document.getElementById('routine');
    routineContainer.innerHTML = '';

    for (let week = 0; week < 6; week++) {
        const weekDiv = document.createElement('div');
        const index = week * 3;
        const monday = routine[index];
        const wednesday = routine[index + 1];
        const friday = routine[index + 2];

        weekDiv.innerHTML = `<h2>Vecka ${week + 1}</h2>
            <p>Monday: ${monday.sets} Set x ${monday.reps} Reps x ${monday.weight} kg</p>
            <p>Wednsday: ${wednesday.sets} Set x ${wednesday.reps} Reps x ${wednesday.weight} kg</p>
            <p>Friday: ${friday.sets} Set x ${friday.reps} Reps x ${friday.weight} kg</p>`;

        routineContainer.appendChild(weekDiv);
    }
}

function roundWeights() {
    currentRoutine = currentRoutine.map(workout => {
        return {
            ...workout,
            weight: roundToNearest2_5(workout.weight)
        };
    });
    displayRoutine(currentRoutine);
}

function roundToNearest2_5(weight) {
    return (Math.round(weight / 2.5) * 2.5).toFixed(2);
}
