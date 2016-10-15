var Names = ['drval', 'pticha', 'german', 'ioanka'];

Names.forEach(function (nm) {
    console.log('forEach name: ', nm);
});

Names.forEach((nm) => {
    console.log('arrow-fn name: ', nm);
});

Names.forEach((nm) => console.log(nm));

var me = (me) => me + '!';
console.log(me('drval'));

var ab = (a, b) => a + b;
console.log(ab(2, 3));

var ps = {
    name: 'drval',
    greet: function () {
        Names.forEach((nm) => {
            // this не перезаписывается внутри стрелочной функции!
            console.log(this.name + ' says hi to ' + nm);
        });
    }
}
ps.greet();