const selfNumber = () => {
    for (let i = 1; i <= 10000; i++) {
        let isSelfNumber = true;
        for (let j = Math.max(1, i - 9 * String(i).length); j <= i; j++) {
            if (
                String(j)
                    .split("")
                    .reduce((sum, num) => sum + Number(num), j) === i
            ) {
                isSelfNumber = false;
                break;
            }
        }

        if (isSelfNumber) {
            console.log(i);
        }
    }
};
selfNumber()