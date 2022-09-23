
const checkTemp = (t) => {
    if (Number(t) <= 20)
        return -1;
    if (Number(t) >= 21)
        return 0;
    if (Number(t) <= 40)
        return 1;
}
