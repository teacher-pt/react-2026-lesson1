export default function Students() {
    const arr = ['shira', 'noa', 'michal'];

    const lis = arr.map((item) => {
        return <li>{item}</li>;
    })

    return (<ul>
        {lis}
    </ul>);
}