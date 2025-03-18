import React, { Fragment, useState, useEffect } from 'react';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import Hdr_fltr from '../components/hdr_fltr.tsx';
import MnPst_View from '../components/mnPst_View.tsx';
import MFooter from '../components/footer.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';

export default function Home({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        if (!posts) {
            axios.get('/api/posts')
                .then(response => setPosts(response.data))
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [posts]);

    return (
        <Fragment>
            <MHeader />
            <main>
                <Lft_menu />
                <div className="cntr_wrp dI pA p10">
                    <Hdr_fltr />
                    <div className="mnVwbdy">
                        {posts ? posts.map(post => (
                            <div key={post.id} className="mnPst_Wpr dI w100">
                                {post.content}
                            </div>
                        )) : 'Loading...'}
                        <MnPst_View />
                    </div>
                </div>
            </main>
            <ChatMsg_Mod />
            <PstGlb_Mod />
        </Fragment>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const initialPosts = await res.json();
    return { props: { initialPosts } };
}