const solution = (participant, completion) => {
    const countOfName = new Map();
    participant.forEach(name => countOfName.set(name, (countOfName.get(name) || 0) + 1));

    completion.forEach(name => {
        const count = countOfName.get(name);

        if (count === 1) {
            countOfName.delete(name);
        } else {
            countOfName.set(name, count - 1);
        }
    });

    return countOfName.keys().next().value;
};