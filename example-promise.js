/*
function getTempCallback(loc, cb) {
    cb(undefined, 78);
    cb('City not found');
}

getTempCallback('Samara', function (err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(loc) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('Samara').then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise err', err);
});*/

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== 'number') {
            reject('a is not a number');
        }

        if (typeof b !== 'number') {
            reject('b is not a number');
        }

        resolve(a + b);
    });
}

addPromise(22, 123).then(function (sum) {
    console.log('result: ', sum);
}, function (err) {
    console.log('error: ', err);
});

