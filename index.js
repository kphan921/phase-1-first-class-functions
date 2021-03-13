

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return namedFunction;
}

const namedFunction = () => 'Named Function';

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Hi');
    }
}

