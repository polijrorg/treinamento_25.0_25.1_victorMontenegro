import styled from 'styled-components';
import { defaultTheme } from '../../styles/default.theme';

export const CommentBox = styled.div`
    background-color: ${defaultTheme.colors.slate3};
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;

    border: 1px solid #333;
`;

export const RightTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: ${defaultTheme.colors.slate1};
`;

export const LeftColumn = styled.div`
    width: 20%;
    padding: ${defaultTheme.space[4]}px;
    background-color: ${defaultTheme.colors.slate1};
    border-right: 1px solid ${defaultTheme.colors.slate5};
    overflow-y: auto;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${defaultTheme.space[5]}px;
    padding: ${defaultTheme.space[2]}px;
    border-radius: ${defaultTheme.radii.sm}px;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
        margin-right: ${defaultTheme.space[3]}px;
    }

    span {
        font-family: ${defaultTheme.fonts.untitled};
        font-size: ${defaultTheme.fontSizes[3]};
        color: ${defaultTheme.colors.white};
    }

    /* Hover normal para todos */
    &:hover {
        background-color: ${defaultTheme.colors.sky8};
    }

    /* Primeiro item especial */
    &:first-child {
        img {
            width: 40px;
            height: 40px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
        }

        /* Primeiro item NÃO muda o fundo ao passar mouse */
        &:hover {
            background-color: transparent;
        }
    }
`;

export const CenterColumn = styled.div`
    width: 60%;
    padding: ${defaultTheme.space[4]}px;
    overflow-y: auto;
    background-color: ${defaultTheme.colors.slate2};
`;

export const SearchBar = styled.input`
    width: 100%;
    padding: ${defaultTheme.space[3]}px;
    margin-bottom: ${defaultTheme.space[4]}px;
    border: 1px solid ${defaultTheme.colors.slate5};
    border-radius: ${defaultTheme.radii.sm}px;
    background-color: ${defaultTheme.colors.slate8};
    color: ${defaultTheme.colors.white};
`;

export const CommentList = styled.div`
    max-height: calc(100vh - 240px);
    overflow-y: auto;
    margin-bottom: ${defaultTheme.space[4]}px;
`;

export const CommentItem = styled.div`
    padding: ${defaultTheme.space[3]}px;
    border-bottom: 1px solid ${defaultTheme.colors.slate6};
    font-size: ${defaultTheme.fontSizes[2]};
    color: ${defaultTheme.colors.onSurface.mediumEmphasis};
    background-color: ${defaultTheme.colors.slate2};
    border-radius: ${defaultTheme.radii.sm}px;
    margin-bottom: ${defaultTheme.space[2]}px;
`;

export const NewCommentSection = styled.div`
    margin-top: ${defaultTheme.space[4]}px;
`;

export const CommentInput = styled.textarea`
    width: 100%;
    padding: ${defaultTheme.space[3]}px ${defaultTheme.space[9]}px
        ${defaultTheme.space[3]}px ${defaultTheme.space[3]}px; /* espaço extra à direita para o botão */
    border: 1px solid ${defaultTheme.colors.slate5};
    border-radius: ${defaultTheme.radii.sm}px;
    resize: none;
    height: 80px;
    font-size: ${defaultTheme.fontSizes[2]};
    background-color: ${defaultTheme.colors.slate8};
    color: ${defaultTheme.colors.white};
`;

export const AddButton = styled.button`
    margin-left: ${defaultTheme.space[3]}px;
    padding: ${defaultTheme.space[2]}px ${defaultTheme.space[4]}px;
    border: none;
    border-radius: ${defaultTheme.radii.md}px;
    background-color: ${defaultTheme.colors.sky11};
    color: ${defaultTheme.colors.white};
    cursor: pointer;
    font-family: ${defaultTheme.fonts.untitled};
`;

export const RightColumn = styled.div`
    width: 20%;
    padding: ${defaultTheme.space[4]}px;
    background-color: ${defaultTheme.colors.slate1};
    border-left: 1px solid ${defaultTheme.colors.slate5};
    overflow-y: auto;
`;

export const RightTitle = styled.h2`
    font-size: ${defaultTheme.fontSizes[3]};
    font-family: ${defaultTheme.fonts.untitled};
    color: ${defaultTheme.colors.white};
    margin-bottom: ${defaultTheme.space[2]}px;
`;

export const RightSeparator = styled.hr`
    border: none;
    height: 1px;
    background-color: ${defaultTheme.colors.slate6};
    margin-bottom: ${defaultTheme.space[4]}px;
`;

export const ImageCard = styled.div`
    margin-bottom: ${defaultTheme.space[5]}px;

    img {
        width: 100%;
        border-radius: ${defaultTheme.radii.sm}px;
    }

    h4 {
        margin-top: ${defaultTheme.space[2]}px;
        font-size: ${defaultTheme.fontSizes[3]};
        color: ${defaultTheme.colors.white};
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const SendButton = styled.button`
    position: absolute;
    right: 12px;
    bottom: 12px;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`;
