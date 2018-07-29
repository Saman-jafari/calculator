window.addEventListener('load', function () {

    const ce = document.getElementById('CE');
    const c = document.getElementById('C');
    const bs = document.getElementById('backspace');
    const divide = document.getElementById('divide');
    const times = document.getElementById('times');
    const minus = document.getElementById('minus');
    const add = document.getElementById('plus');
    const pm = document.getElementById('pm');
    const eq = document.getElementById('eq');
    const num = document.getElementsByClassName('num');
    const output = document.getElementById('output');

    let val = null;
    let def = 0;

    /**
     * get numbers
     */
    for (let i = 0; i < num.length; i++) {
        num[i].addEventListener('click', function (e) {
                def = e.target.value;
                output.value += def;
        });
        num[i].addEventListener('change', function (e) {

        })
    }
    /**
     * delete all
     */
    c.addEventListener('click', function () {
        output.value = null;
        firstVal = null;
        secVal = null;
    });
    output.addEventListener('change', function () {

    });

    /**
     * backspace
     */
    bs.addEventListener('click', function () {
        let outputArr = output.value.split('');
        if (!outputArr.length <= 1 ){
        outputArr.pop();
        output.value = outputArr.join('');
        } else {
            output.value = 0;
        }
    });
    /**
     * equal
     */
    eq.addEventListener('click',function () {

    });

    add.addEventListener('click',function () {
        val = parseFloat(output.value)
        val += val
        output.value = val

    })
});
