import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/authContext'
import React, { useState, useContext } from 'react';
import { Button, Card, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const Login = () => {
    const { handleLoginWithCredentials } = useContext(AuthContext);
    const [error, setError] = useState('');

    const { handleChange, pass, email } = useForm({
        initialState: {
            email: '',
            pass: '',
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLoginWithCredentials(pass, email);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            const result = await signInWithPopup(auth, provider);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Card className="max-w-sm">
            <div>
                <h2>Login</h2>
                {error && (
                    <Alert color="failure" icon={HiInformationCircle}>
                        <span className="font-medium">{error}</span>
                    </Alert>
                )}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" icon={HiMail} placeholder="name@flowbite.com" name="email" value={email} onChange={handleChange} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" placeholder="password" name="pass" value={pass} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4">
                        <Button pill gradientMonochrome="cyan" type="submit" className="w-full md:w-auto">Submit</Button>
                        <Button pill gradientMonochrome="cyan" type="button" onClick={handleSignInWithGoogle} className="w-full md:w-auto">Google</Button>
                    </div>
                </form>
            </div>
        </Card>
    );
};