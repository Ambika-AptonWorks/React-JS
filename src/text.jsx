import React from 'react';

function Hello(props) {
    return <h1>{props.msg}</h1>;
}  
const Hello_comp = <Hello msg="Hello, welcome to my page!" />;
export default Hello_comp;