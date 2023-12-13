const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (quest) => {
    return new Promise((resolve) => {
        rl.question(quest, (answer) => {
            resolve(answer);
        });
    });
};

const calculate = (n) => {
    const list = [1];

    for (let i = 1; i < n; i++) {
        list.push(list[i - 1] + i);
    }

    return list;
};

const runSloane = async () => {
    console.log('\n----- A000124 Sloane oeis  -----');
    const num = await question('Enter a number: ');

    const result = calculate(parseInt(num));
    console.log('Output: ' + result.join('-'));

    rl.close();
};

runSloane();