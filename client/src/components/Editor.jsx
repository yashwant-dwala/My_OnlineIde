import * as React from 'react';
// import AceEditor from 'react-ace';
// import '../lib/mode-c_cpp';

function Editor() {
    // let editor;
    // window.onload = function () {
    //     editor = ace.edit("editor")
    //     editor.setTheme("ace/theme/monokai")
    //     editor.session.setMode("ace/mode/c_cpp")
    // }
    return (
        <div className="ide">
            <div className='Lang'>
                <label>Language : </label>
                <select>
                    <option>C++</option>
                    <option>Python</option>
                    <option>nodeJs</option>
                </select>
            </div>
            <div className='code'></div>
            <div>
                <div id='editor'>
                    <textarea className="editor" rows="40" cols="100"
                        placeholder='#include<bits/stdc++.h>
                        using namespace std;

                        //Function that constructs BST from its preorder traversal.
                        Node* post_order(int pre[], int size)
                        {
                            //code here
                        }'/>
                </div>
                <br />
                <button className="compile">Compile&run</button>
                <button className="submit">Submit</button>
            </div>
        </div>
    );
}

export default Editor;
