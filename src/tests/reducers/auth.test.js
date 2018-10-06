import authReducer from '../../reducers/auth';

test('Should setup login', () => {
    const currentState = {};
    const state = authReducer(currentState, { type: "LOGIN", uid: "123" });
    expect(state).toEqual({
        uid : "123"
    });
});

test('Should setup logout', () => {
    const currentState = {
        uid: "123"
    };
    const state = authReducer(currentState, { type: 'LOGOUT' });
    expect(state).toEqual({});
});