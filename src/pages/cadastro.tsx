import React, { useState } from 'react';
import { useRouter } from 'next/router';

function CadastroPage() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleCadastro = () => {
        const savedUsers = localStorage.getItem('users');
        const users = savedUsers ? JSON.parse(savedUsers) : [];

        const userExists = users.some((u: any) => u.username === username);
        if (userExists) {
            alert('Nome de usuário já existe.');
            return;
        }

        const newUser = {
            name,
            username,
            password,
            avatar: '/assets/images/avatar-placeholder.png'
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuário cadastrado com sucesso!');
        router.push('/login');
    };

    return (
        <div
            style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}
        >
            <h2>Cadastro</h2>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: 10, marginBottom: 10 }}
            />
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
                onClick={handleCadastro}
                style={{ padding: 10, width: '100%' }}
            >
                Cadastrar
            </button>
        </div>
    );
}

export default CadastroPage;
