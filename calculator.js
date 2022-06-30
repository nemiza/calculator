
/**
 * Calculate simple math expression from input string
 * @param  {string} inExpression
 */
 function calculate (inExpression) {
    const expression = inExpression.replace(/\s/g, '');
    const testIsExpr = expression.search(/^[\-\+]?\d+(?:\.\d*)?(?:[\-\+\/\*]\d+(?:\.\d*)?)*$/);
    if (testIsExpr === -1)
        return null;
    let sumArray = expression.split('+');
    sumArray = sumArray.map((sum) => {
        let subArray = sum.split('-');
        subArray = subArray.map((sub) => {
            let multArray = sub.split('*');
            multArray = multArray.map((mult) => {
                let devArray = mult.split('/');
                if (devArray.length === 1)
                    return Number(mult);
                return devArray.reduce((prevVal, currVal) => Number(prevVal) / Number(currVal));
            });
            return multArray.reduce((prevVal, currVal) => prevVal * currVal, 1);
        });
        if (subArray.length === 1)
            return subArray[0];
        return subArray.reduce((prevVal, currVal) => prevVal - currVal);
    });
    return sumArray.reduce((prevVal, currVal) => prevVal + currVal);
};

module.exports = calculate;