import React, { useState } from 'react';
import { useRouter } from 'next/router';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        const savedUsers = localStorage.getItem('users');
        const users = savedUsers ? JSON.parse(savedUsers) : [];

        const user = users.find(
            (u: any) => u.username === username && u.password === password
        );

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            router.push('/');
        } else {
            alert('Usuário ou senha inválidos.');
        }
    };

    return (
        <div
            style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}
        >
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: 10, marginBottom: 10 }}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: 10, marginBottom: 10 }}
            />
            <button
                type="button"
                onClick={handleLogin}
                style={{ padding: 10, width: '100%' }}
            >
                Entrar
            </button>
            <button
                type="button"
                onClick={() => router.push('/cadastro')}
                style={{ padding: 10, width: '100%', marginTop: 10 }}
            >
                Criar Conta
            </button>
        </div>
    );
}

export default LoginPage;
