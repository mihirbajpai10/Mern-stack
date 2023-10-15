import React, { useState } from 'react';
import { motion } from 'framer-motion';


const StateManagement = () => {
    let likes = 10;

    const [comment, setComment] = useState(0);

    const [share, setShare] = useState(0);

    const [width, setWidth] = useState(100);

    const [imageLink, setImageLink] = useState("")

    const addlike = () => {
        likes++;
        console.log(likes);
    }
    const addComment = () => {
        setComment(comment + 1);

    }
    const addShare = () => {
        setShare(share + 1);

    }
    return (
        <motion.div
            className='bg-body-secondary vh-100'
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{type: "spring", duration: 15, stiffness: 100}}
        >
        <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />

            <button className='btn btn-primary' onClick={addlike}>{likes} Add Like </button>

            <button className='btn btn-dark' onClick={addComment}>{comment} Add Comment </button>
            <button className='btn btn-secondary' onClick={addShare}>{share} Add share </button>

            <img width={width} src="https://sketchok.com/images/articles/06-anime/026-demon-slayer/27/40m.jpg" alt="" />

            <input
            className='form-range'
            type="range"
            min="0"
            max="400"
            onChange={(e) => { setWidth(e.target.value)}} />

            <h3>Insert Image Link Hare</h3>
            <input type="text" className='form-control' onChange={ e => setImageLink(e.target.value)} />
            <img src={imageLink} alt="" />
            
        </div>
        </motion.div>
    )
}

export default StateManagement