const load = async () => {
    const res = await wait2min()
    const res2 = await wait2min2()
    const res3 = await wait0min()

    return Promise.all(res, res2, res3)
}
const wait2min = () => {
    setTimeout(() => {
        console.log('wait 2 min');
    }, 2000);
}

const wait2min2 = () => {
    setTimeout(() => {
        console.log('wait 5 min another');
    }, 1000);
}

const wait0min = () => {
    console.log('wait 0 min');
}
load()

