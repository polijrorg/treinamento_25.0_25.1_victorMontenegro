import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';

const sidebarRightItems = [
    { icon: '/assets/images/chick-svgrepo-com.png', label: 'Piupiwer' },
    { icon: '/assets/images/bx_home.png', label: 'Página Inicial' },
    {
        icon: '/assets/images/ic_outline-notifications.png',
        label: 'Notificações'
    },
    { icon: '/assets/images/Cloud_Check.png', label: 'Salvos' },
    { icon: '/assets/images/pajamas_profile.png', label: 'Perfil' },
    { icon: '/assets/images/akar-icons_gear.png', label: 'Configurações' }
];

const sidebarImages = [
    { src: '/assets/images/image1.png', title: 'Eleições 2022' },
    { src: '/assets/images/image2.png', title: 'A fazenda' },
    { src: '/assets/images/image3.png', title: 'Voley' }
];

function FeedPage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    // Carrega usuário e comentários do localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        } else {
            router.replace('/login');
        }

        const storedComments = localStorage.getItem('comments');
        setComments(storedComments ? JSON.parse(storedComments) : []);
    }, [router]);

    // Persiste comentários sempre que mudam
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    if (loading) return null;

    const filteredComments = comments.filter((c) =>
        c.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments((prev) => [newComment.trim(), ...prev]);
            setNewComment('');
        }
    };

    const handleDeleteComment = (index: number) => {
        setComments((prev) => {
            const updated = [...prev];
            updated.splice(index, 1);
            return updated;
        });
    };

    return (
        <S.Container>
            <S.LeftColumn>
                {sidebarRightItems.map((item, idx) => (
                    <S.MenuItem key={Number(idx)}>
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label}</span>
                    </S.MenuItem>
                ))}
            </S.LeftColumn>

            <S.CenterColumn>
                <S.SearchBar
                    type="text"
                    placeholder="Pesquisar comentários..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <S.CommentList>
                    {filteredComments.map((cmt, idx) => (
                        <S.CommentBox
                            key={Number(idx)}
                            onClick={() =>
                                router.push({
                                    pathname: '/comentario',
                                    query: { id: idx }
                                })
                            }
                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <img
                                        src={
                                            user?.avatar ||
                                            '/assets/images/avatar-placeholder.png'
                                        }
                                        alt="Avatar"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            marginRight: 12
                                        }}
                                    />
                                    <div>
                                        <strong style={{ color: 'white' }}>
                                            {user?.name || 'Usuário'}
                                        </strong>
                                        <br />
                                        <span
                                            style={{
                                                color: 'gray',
                                                fontSize: 12
                                            }}
                                        >
                                            @{user?.username || 'user'}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteComment(idx);
                                    }}
                                >
                                    <img
                                        src="/assets/images/Trash_Full.png"
                                        alt="Excluir"
                                        style={{ width: 20, height: 20 }}
                                    />
                                </button>
                            </div>

                            <p style={{ color: 'white', marginTop: 8 }}>
                                {cmt}
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: 12,
                                    gap: 16
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}
                                >
                                    <img
                                        src="/assets/images/Arrow_Reload_02.png"
                                        alt="Repostar"
                                        style={{ width: 18, height: 18 }}
                                    />
                                    <span
                                        style={{ color: 'white', fontSize: 14 }}
                                    >
                                        1
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}
                                >
                                    <img
                                        src="/assets/images/Chat_Circle.png"
                                        alt="Comentar"
                                        style={{ width: 18, height: 18 }}
                                    />
                                    <span
                                        style={{ color: 'white', fontSize: 14 }}
                                    >
                                        1
                                    </span>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4
                                    }}
                                >
                                    <img
                                        src="/assets/images/Heart_02.png"
                                        alt="Curtir"
                                        style={{ width: 18, height: 18 }}
                                    />
                                    <span
                                        style={{ color: 'white', fontSize: 14 }}
                                    >
                                        2
                                    </span>
                                </div>
                            </div>
                        </S.CommentBox>
                    ))}
                </S.CommentList>

                <S.NewCommentSection>
                    <S.InputWrapper>
                        <S.CommentInput
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Escreva um comentário..."
                        />
                        <S.SendButton onClick={handleAddComment}>
                            <img
                                src="/assets/images/Paper_Plane.png"
                                alt="Enviar"
                            />
                        </S.SendButton>
                    </S.InputWrapper>
                </S.NewCommentSection>
            </S.CenterColumn>

            <S.RightColumn>
                <S.RightTitleWrapper>
                    <img
                        src="/assets/images/Frame.png"
                        alt="Pius em alta"
                        style={{ width: 24, height: 24, marginRight: 8 }}
                    />
                    <S.RightTitle>Pius em alta</S.RightTitle>
                </S.RightTitleWrapper>
                <S.RightSeparator />

                {sidebarImages.map((item, idx) => (
                    <React.Fragment key={Number(idx)}>
                        <S.ImageCard>
                            <img src={item.src} alt={item.title} />
                            <h4>{item.title}</h4>
                        </S.ImageCard>
                        {idx < sidebarImages.length - 1 && <S.RightSeparator />}
                    </React.Fragment>
                ))}
            </S.RightColumn>
        </S.Container>
    );
}

export default FeedPage;
