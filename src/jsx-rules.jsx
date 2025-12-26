// 1. small html tags

import { Fragment } from "react";

// const r1 = <P>hello</P>; // error - <p> not <P>
const r2 = <p>hello</p>; // V

// 2. large letter means react component
function Div() {
    return <div>my div</div>
};
const r3 = <Div></Div>;

// 3. tags must be closed
// const r4 = <input type="" > - error
const r5 = <input type="" value="bye" />;
const r6 = <input type="" value="hello"></input>;

// 4. single wrapper
// const r7 =(<h1>hhh</h1><p>hhhh</p>) // error
const r8 = (<div><h1>hhh</h1><p>hhhh</p></div>);
const r9 = (<Fragment>
    <h1>hhh</h1>
    <p>hhhh</p>
</Fragment>);
const r10 = (<>
    <h1>hhh</h1>
    <p>hhhh</p>
</>);

// 5. no reserve js words - JS לא ניתן להשתמש במילים שמורות של
// const r11 = <p class="abc">hello</p> // ERROR
const r12 = <p className="abc">hello</p>;
const r13 = (<form>
    <label htmlFor="pass">Password: </label>
    <input type="password" name="pass" id="pass" />
</form>);

// 6. camelCase your attributes, style, events

// const r14 = <form novalidate></form> // ERROR
const r15 = <form noValidate></form>;
const r16 = <h1 style={{ backgroundColor: 'red' }}>hello</h1>;
const r17 = <button onClick={() => alert('hello')}></button>

// 7. js in jsx inside {}
// 7.1 - tag content
let data;
data = "hello"; // 1. string
data = 10; // 2. number (auto convert to string)
data = <strong>important!</strong> // 3. tag/component

// 4. boolean (true/false), null, undefined - not show
data = true;
data = false;
data = null;
data = undefined;

data = ['a', 'b', false, 10, <h1>hello</h1>]; // array of all above

// data = { name: 'abc' } // ERROR - to convert: JSON.stringify(...)
// data = new Date() // ERROR - to convert: .toString();

const r18 = <p>{data} bla bla bla...</p>;

// 7.2 - attribute value - type of attribute
const r19 = (<div className={'a b c'} style={{ color: 'red' }} onClick={() => alert('hi')}>
    hello
</div>);

// 8. conditions & loops - just js expression in {}

const mark = 95;

let r20;
if (mark >= 90) {
    r20 = <p className="mark">good</p>; // return
} else {
    r20 = <p className="mark">not good</p>; // return
}

// trinary if - ? : (if-else)
const r21 = <p className="mark">{mark > 90 ? 'excelent' : mark > 80 ? 'good' : 'not good'}</p>;
const isLoggedIn = true; // if true show "hello"
// const r23 = if(isLoggedIn) <p>hello</p>; // ERROR לא מחזיר ערך not in {}

// && (if)
const r22 = isLoggedIn ? <p>hello</p> : null;
const r24 = isLoggedIn && <p>hello</p>; // <p>hello</p>
const r25 = (mark === 100) && <p>hello</p>; // false - not shown

// ||, ?? - default value (else)
// || = falsy: 0/false/null/undefined/''
// ?? = false/undefined/null
const time = 0;
const userOr = time || 100; // 100 (0 is falsy)
const userNulish = time ?? 100; // 0 (0 is not false/undefined/null)

const x = 10, y = 50, z = 30;
console.log(x === 10 && y === 20 && z === 30); // until false

console.log(x === 20 || y === 50 || z === 30); // until true

// for - לא מחזיר ערך
// map - לולאה שמחזירה ערך
const arr = ['shira', 'noa', 'michal'];

// new array size 3 (type number)
const len = arr.map((val, ind) => {
    // val - ערך נוכחי מהמערך
    // ind - אינדקס נוכחי
    return val.length;
});

const lis = arr.map((item) => {
    return <li>{item}</li>;
})

const r26 = (<ul>
    {/* <li></li> */}
    {lis}

    {/* 'shira' 'noa' 'michal' */}
    {/* {arr} */}

</ul>);

// DRY code = Don't Repeat Yourself  = good
// WET code = Write Everything Twice = not good