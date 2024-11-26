import { useState } from "react";
function Test1() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const { username, password } = data;
    const onChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("Form submitted:", data);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                Enter the username:<br />
                <input type="text" placeholder="username" value={username} name="username" onChange={onChange} />
                <br /> Enter the password:<br />
                <input type="password" placeholder="password" value={password}  name="password" onChange={onChange} />
                <br /><br /> <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Test1;
