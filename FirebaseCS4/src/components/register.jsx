import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react';
import { Button, Card, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";


export const Register = () => {
    const { handleRegisterWithCredentials } = useContext(AuthContext);

    const { handleChange, pass, email } = useForm({
        initialState: {
            email: '',
            pass: ''
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegisterWithCredentials(pass, email);
    };

    return (
        <Card className="max-w-sm w-96 mt-8">
            <div className="container-auth">
                <h2>Register</h2>
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
                        <TextInput id="password1" type="password" placeholder="Password" name="pass" value={pass} onChange={handleChange} required />
                    </div>
                    <div className="flex justify-center">
                        <Button pill gradientMonochrome="cyan" type="submit">Register</Button>
                    </div>
                </form>
            </div>
        </Card>
    )
}