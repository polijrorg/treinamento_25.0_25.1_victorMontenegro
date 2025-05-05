import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const FeedPage = dynamic(() => import('../template/Feed/FeedPage'), {
    ssr: false
});

function Home() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('currentUser');
        const currentUser = stored ? JSON.parse(stored) : null;

        if (!currentUser) {
            router.replace('/login');
        } else {
            setUser(currentUser);
        }
    }, []);

    if (!user) return null;

    return <FeedPage />;
}

export default Home;
