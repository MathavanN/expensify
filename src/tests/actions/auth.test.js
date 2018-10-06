import { login, logout } from '../../actions/auth';

test("should generate set login object", () => {
    const action = login("123");
    expect(action).toEqual({
        type: "LOGIN",
        uid: "123"
    });
});

test("should generate set logout object", () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    });
});