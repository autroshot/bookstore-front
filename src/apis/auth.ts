import { Inputs } from '../pages/sign-up';
import { httpClient } from './http';

async function signUp(inputs: Inputs) {
    await httpClient.post('/users', inputs);

    return;
}

async function changeUserInfo(inputs: Inputs) {
    await httpClient.patch('/user', inputs);

    return;
}

async function emailAuth(inputs: Pick<Inputs, 'email'>) {
    await httpClient.post('/auth/email', inputs);

    return;
}

async function login(inputs: Inputs) {
    await httpClient.post('/auth/basic', inputs);

    return;
}

async function logout() {
    await httpClient.delete('/auth');

    return;
}

export { changeUserInfo, emailAuth, login, logout, signUp };
