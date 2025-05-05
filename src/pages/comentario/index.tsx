import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as CS from './styles';

function ComentarioPage() {
    const router = useRouter();
    const { id } = router.query; // ?id=0, ?id=1, etc.

    const [comment, setComment] = useState<string | null>(null);
    const [replies, setReplies] = useState<string[]>([]);
    const [newReply, setNewReply] = useState('');

    useEffect(() => {
        // só roda no browser, após o query estar disponível
        if (typeof window === 'undefined' || id === undefined) return;

        const idx = Array.isArray(id) ? Number(id[0]) : Number(id);

        // carrega comentário principal
        const stored = localStorage.getItem('comments');
        const arr: string[] = stored ? JSON.parse(stored) : [];
        setComment(arr[idx] ?? null);

        // carrega respostas
        const key = `replies-${idx}`;
        const storedReplies = localStorage.getItem(key);
        setReplies(storedReplies ? JSON.parse(storedReplies) : []);
    }, [id]);

    const handleReply = () => {
        if (
            typeof window === 'undefined' ||
            id === undefined ||
            !newReply.trim()
        )
            return;

        const idx = Array.isArray(id) ? Number(id[0]) : Number(id);
        const key = `replies-${idx}`;
        const updated = [newReply.trim(), ...replies];
        setReplies(updated);
        localStorage.setItem(key, JSON.stringify(updated));
        setNewReply('');
    };

    // enquanto carrega ou não encontra o comentário
    if (comment === null) {
        return (
            <p style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>
                Carregando ou comentário não encontrado.
            </p>
        );
    }

    return (
        <CS.ComentarioContainer>
            <CS.SectionTitle>Comentário</CS.SectionTitle>
            <CS.ComentarioBox>
                <p>{comment}</p>
            </CS.ComentarioBox>

            <CS.SectionTitle>Respostas</CS.SectionTitle>
            <CS.RepliesList>
                {replies.map((rep, i) => (
                    <CS.ReplyBox key={Number(i)}>{rep}</CS.ReplyBox>
                ))}
            </CS.RepliesList>

            <CS.ReplyInput
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Escreva uma resposta..."
            />
            <CS.ReplyButton onClick={handleReply}>Responder</CS.ReplyButton>
        </CS.ComentarioContainer>
    );
}

export default ComentarioPage;
