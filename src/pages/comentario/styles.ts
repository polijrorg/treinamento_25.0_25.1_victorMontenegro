import styled from 'styled-components';

// Container geral da página de comentário
export const ComentarioContainer = styled.div`
    background-color: #000;
    min-height: 100vh;
    padding: 40px 20px;
`;

// Caixa do comentário principal
export const ComentarioBox = styled.div`
    background-color: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 24px;
`;

// Título das seções
export const SectionTitle = styled.h2`
    color: #fff;
    margin-bottom: 16px;
`;

// Lista de respostas
export const RepliesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
`;

// Caixa de cada resposta
export const ReplyBox = styled(ComentarioBox)`
    background-color: #2a2a2a;
    margin-left: 20px;
`;

// Área de texto para nova resposta
export const ReplyInput = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #444;
    background-color: #222;
    color: #fff;
    resize: vertical;
    font-size: 14px;
`;

// Botão de enviar resposta
export const ReplyButton = styled.button`
    margin-top: 12px;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
`;
