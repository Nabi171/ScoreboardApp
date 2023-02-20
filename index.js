// //select dom elements
const counterEL = document.getElementById("counter");

//action creators
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
}
const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
}
const reset = (value) => {
    return {
        type: RESET,
        payload: value,
    };
}

// initial state 
const initialState = {
    value: 0,

};


//action identifier
const INCREMENT = "increment";
const DECREMENT = 'decrement'
const RESET = 'reset';



//create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + parseFloat(action.payload),
        }
    }
    else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    }
    else if (action.type === RESET) {
        return {
            ...state,
            value: 0

        }
    }
    else {
        return state;
    }
}


//crete store
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    counterEL.innerText = parseFloat(state.value);
};

//update uI initiallly
render();

store.subscribe(render);

// //button click listerners


//dispatch for increament value
document.getElementById('incrementForm').addEventListener('submit', (e) => {
    const incrementEL = document.getElementById("increment");
    const incrementELvalue = parseFloat(incrementEL.value);
    store.dispatch(increment(incrementELvalue));
    e.preventDefault();
});


//dispatch for decrement value
document.getElementById('decrementForm').addEventListener('submit', (e) => {
    const decrementEL = document.getElementById("decrement");
    const decrementELvalue = parseFloat(decrementEL.value);
    store.dispatch(decrement(decrementELvalue));
    e.preventDefault();
});

//dispatch for reset value
document.getElementById('reset-btn').addEventListener('click', () => {

    store.dispatch(reset());

});


//raw js file for testing purpose
// document.getElementById('increme').addEventListener('submit', function (e) {
//     const incrementEL = document.getElementById("increment");
//     const incrementELvalue = parseFloat(incrementEL.value);
//     const counterEL = document.getElementById("counter");
//     const counterValue = parseFloat(counterEL.innerText);
//     console.log(counterValue);
//     const total = incrementELvalue + counterValue;
//     counterEL.innerText = total;
//     e.preventDefault();

// })


// document.getElementById('decrementForm').addEventListener('submit', function (e) {

//     const decrementEL = document.getElementById("decrement");
//     const decrementELvalue = parseFloat(decrementEL.value);
//     const counterEL = document.getElementById("counter");
//     const counterValue = parseFloat(counterEL.innerText);

//     const total = counterValue - decrementELvalue;
//     counterEL.innerText = total;
//     e.preventDefault();

// })












// for adding another row

const anotherMatches = document.getElementById('add_mathes');

document.getElementById('add-btn').addEventListener('click', function () {
    anotherMatches.innerHTML = ` <div class="match">
    <div class="wrapper">
        <button class="lws-delete">
            <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match 1</h3>
    </div>
    <div class="inc-dec">
        <form id="incremetForm2" class="incrementForm">
            <h4>Increment</h4>
            <input id="increment2" type="number" name="increment" class="lws-increment" />
        </form>
        <form id="decrementForm2" class="decrementForm">
            <h4>Decrement</h4>
            <input type="number" name="decrement" class="lws-decrement" id="decrement2" />
        </form>
    </div>
    <div class="numbers">
        <h2 class="lws-singleResult" id="counter2">0</h2>
    </div>
</div>
</div>`;


})




// document.getElementById('reset-btn').addEventListener('click', function () {
//     anotherMatches.innerHTML = ``;


// })












// document.getElementById('incremetForm2').addEventListener('submit', function (e) {

//     const incrementEL = document.getElementById("increment2");
//     const incrementELvalue = parseFloat(incrementEL.value);
//     const counterEL = document.getElementById("counter2");
//     const counterValue = parseFloat(counterEL.innerText);
//     console.log(counterValue);
//     const total = incrementELvalue + counterValue;
//     counterEL.innerText = total;
//     e.preventDefault();

// })
// document.getElementById('decrementForm2').addEventListener('submit', function (e) {

//     const decrementEL = document.getElementById("decrement2");
//     const decrementELvalue = parseFloat(decrementEL.value);
//     const counterEL = document.getElementById("counter2");
//     const counterValue = parseFloat(counterEL.innerText);

//     const total = counterValue - decrementELvalue;
//     counterEL.innerText = total;
//     e.preventDefault();

// })















