window.addEventListener('load', function () {

    const ce = document.getElementById('CE');
    const c = document.getElementById('C');
    const bs = document.getElementById('backspace');
    const divide = document.getElementById('divide');
    const times = document.getElementById('times');
    const sub = document.getElementById('minus');
    const add = document.getElementById('plus');
    const pm = document.getElementById('pm');
    const eq = document.getElementById('eq');
    const num = document.getElementsByClassName('num');
    const output = document.getElementById('output');
    let action;
    let actionEq;
    let val = null;
    let def = 0;
    output.addEventListener('', function () {

    });

    /**
     * get numbers
     */
    for (let i = 0; i < num.length; i++) {

        num[i].addEventListener('click', function (e) {
            if (action !== 'ADD' && action !== 'SUB' && action !== 'DIVIDE' && action !== 'TIMES' && action !== "EQ") {
                def = e.target.value;
                output.value += def;
            } else {
                output.value = e.target.value;
                action = null;
            }
        });

    }
    /**
     * plus minus
     */
    pm.addEventListener('click', function () {
        if ( output.value < 0 || output.value > 0) {
            output.value = -1 * output.value
        }
    });
    /**
     * delete all
     */
    c.addEventListener('click', function () {
        output.value = null;
        val = null;
        actionEq = null;
    });
    ce.addEventListener('click', function () {
        output.value = null;
    });

    /**
     * backspace
     */
    bs.addEventListener('click', function () {
        let outputArr = output.value.split('');
        if (!outputArr.length <= 1) {
            outputArr.pop();
            output.value = outputArr.join('');
        } else {
            output.value = 0;
        }
    });


    add.addEventListener('click', function () {
        action = 'ADD';
        actionEq = 'ADD';
        if (val === null) {
            val = parseFloat(output.value);
            output.value = null;
        } else {
            val = parseFloat(output.value) + val;
            output.value = val
        }
    });
    sub.addEventListener('click', function () {
        action = 'SUB';
        actionEq = 'SUB';
        if (val === null) {
            val = parseFloat(output.value);
            output.value = null;
        } else {
            val = parseFloat(output.value) - val;
            output.value = val
        }
    });
    divide.addEventListener('click', function () {
        action = 'DIVIDE';
        actionEq = 'DIVIDE';
        if (val === null) {
            val = parseFloat(output.value);
            output.value = null;
        } else {
            val = parseFloat(output.value) / val;
            output.value = val
        }
    });
    times.addEventListener('click', function () {
        action = 'TIMES';
        actionEq = 'TIMES';
        if (val === null) {
            val = parseFloat(output.value);
            output.value = null;
        } else {
            val = parseFloat(output.value) * val;
            output.value = val
        }
    });
    /**
     * equal
     */
    eq.addEventListener('click', function () {
        switch (actionEq) {
            case "ADD":
                val = parseFloat(output.value) + val;
                output.value = val;
                action = 'EQ';
                break;
            case "SUB":
                val = parseFloat(output.value) - val;
                output.value = val;
                action = 'EQ';
                break;
            case "DIVIDE":
                val = parseFloat(output.value) / val;
                output.value = val;
                action = 'EQ';
                break;
            case "TIMES":
                val = parseFloat(output.value) * val;
                output.value = val;
                action = 'EQ';
                break;
            default:
                output.value = null;
                action = 'EQ';
                break;

        }

    });
});
