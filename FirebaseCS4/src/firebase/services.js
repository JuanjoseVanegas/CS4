import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getAuth } from 'firebase/auth';
import { FirebaseAuth } from './config';


export const signInWithCredentials = async ({ email, password }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        return resp.user.uid;
    } catch (e) {
        throw e.message
    }
};


export const loginWithCredentials = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        return resp.user.uid;
    } catch (e) {
        throw e.message
    }
};

export const onAuthStateHasChanged = (setSession) => {
    onAuthStateChanged(FirebaseAuth, user => {
        if (!user) return setSession({ status: 'no-authenticated', userId: null });
        setSession({ status: 'authenticated', userId: user.uid });
    });
};

export const logoutFirebase = async () => await FirebaseAuth.signOut();
