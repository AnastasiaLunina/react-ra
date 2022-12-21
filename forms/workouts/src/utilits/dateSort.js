function dateSort(a, b) {
    a = a.split('.');
    b = b.split('.');
    return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
}

export default dateSort;