// define actions
const ADD_MATCH = "ADD_MATCH";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// define action creators
const addMatchAction = () => store.dispatch({ type: ADD_MATCH, payload: { score: 120 } });
const incrementScoreAction = (id, value) => store.dispatch({ type: INCREMENT, payload: { id, value } });
const decrementScoreAction = (id, value) => store.dispatch({ type: DECREMENT, payload: { id, value } });
const resetScoresAction = () => store.dispatch({ type: RESET });

const allMatches = document.querySelector(".all-matches");
const addMatch = document.querySelector(".lws-addMatch");
const reset = document.querySelector(".lws-reset");

// define reducer
const initialState = { matches: [] };

//initially creating a "match"
window.addEventListener("load", () => {
    return addMatchAction();
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCH:
            const newMatch = {
                id: state.matches.length,
                score: 120,
            };
            return {
                ...state,
                matches: [...state.matches, newMatch],
            };
        case INCREMENT:
            return {
                ...state,
                matches: state.matches.map((match) => {
                    if (match.id === action.payload.id) {
                        return {
                            ...match,
                            score: match.score + action.payload.value,
                        };
                    }
                    return match;
                }),
            };
        case DECREMENT:
            return {
                ...state,
                matches: state.matches.map((match) => {
                    if (match.id === action.payload.id) {
                        return {
                            ...match,
                            score: Math.max(match.score - action.payload.value, 0),
                        };
                    }
                    return match;
                }),
            };
        case RESET:
            return {
                ...state,
                matches: state.matches.map((match) => ({ ...match, score: 0 })),
            };
        default:
            return state;
    }
};

//add new match
addMatch.addEventListener("click", () => {
    return addMatchAction();
});

//reset all
reset.addEventListener("click", () => {
    return resetScoresAction();
});

// create store
const store = Redux.createStore(reducer);

const render = () => {
    const state = store.getState();

    allMatches.innerHTML = "";
    state.matches.forEach((match, index) => {
        const newMatch = document.createElement("div");
        newMatch.classList.add("match");

        newMatch.innerHTML = `
      <div class="wrapper">
        <button class="lws-delete">
          <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${index + 1}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm">
          <h4>Increment</h4>
          <input type="number" name="increment" class="lws-increment" data-match-index="${index}" />
        </form>
        <form class="decrementForm">
          <h4>Decrement</h4>
          <input type="number" name="decrement" class="lws-decrement" data-match-index="${index}" />
        </form>
      </div>
      <div class="numbers">
        <h2 class="lws-singleResult">${match.score}</h2>
      </div>
    `;

        // add the match to all-matches
        allMatches.insertAdjacentElement("beforeend", newMatch);

        //increment
        const incrementButtons = document.querySelectorAll(".lws-increment");
        incrementButtons.forEach((button, index) => {
            button.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    const value = parseInt(e.target.value);
                    e.preventDefault();
                    store.dispatch({
                        type: "INCREMENT",
                        payload: {
                            id: index,
                            value: value,
                        },
                    });
                }
            });
        });
    });






    // decrement
    const decrementButtons = document.querySelectorAll(".lws-decrement");
    decrementButtons.forEach((button, index) => {
        button.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const value = parseInt(e.target.value);
                e.preventDefault();
                store.dispatch({
                    type: "DECREMENT",
                    payload: {
                        id: index,
                        value: value,
                    },
                });
            }
        });
    });




};



render();

store.subscribe(render);