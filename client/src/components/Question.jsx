import * as React from 'react';
import Example from './Example';
import {useState} from "react"

function Question() {
    const [str, setstr] = useState("1 <= Number of nodes <= 1000")
    const [title1, settitle1] = useState("Example 1:")
    const [pic1, setpic1] = useState("https://res.cloudinary.com/xenotoxin/image/upload/v1641109681/eg1_omanda.jpg")
    const [title2, settitle2] = useState("Example 2:")
    const [pic2, setpic2] = useState("https://res.cloudinary.com/xenotoxin/image/upload/v1641109681/eg2_ha8vgp.jpg")

    return (
        <div className="Question">
            {/* <h1>My Code Compiler</h1> */}
            {/* <img src='https://res.cloudinary.com/xenotoxin/image/upload/v1654674008/logo_ll5wjs.png' alt='logo' className='ideLogo'/> */}
            <h2 className='Qname'>Binary Tree to BST</h2>
            <hr></hr>
            <p className='task'>Given a Binary Tree, convert it to Binary Search Tree in such a way that keeps the original structure of Binary Tree intact.</p>
            <Example state={{ title: title1, pic: pic1 }} />
            <Example state={{ title:title2, pic:pic2 }} />
            <h3  className='heading'>Your Task:</h3>
            <p className='task'>You don't need to read input or print anything. Your task is to complete the function binaryTreeToBST() which takes the root of the Binary tree as input and returns the root of the BST. The driver code will print inorder traversal of the converted BST.</p>
            <h3 className='heading'>Expected Time Complexity:</h3> <p className='inLine '>O(NLogN).</p>
            <h3 className='heading'>Expected Auxiliary Space:</h3> <p className='inLine '> O(N).</p>
            <h3 className='heading'>Constraints:</h3> <p className='inLine '>{str}</p>
        </div>
    );
}

export default Question;
