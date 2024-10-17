export default function Signup (props) {
    return (
        <>
        <div className="header">
            <h1>WEATHER APP</h1>
        </div>
        <div className="form-container">
        <div id="app">
            <p>Register</p>
            <form id="myForm">
              <input type="text"
              name="Name"
              placeholder="Enter a Username"
              pattern="^[a-zA-Z]+"
              title="Please start your username with a letter from a-z."
              required/>
              <input type="text"
              name="Email"
              placeholder="Enter your Email "
              title="Please start your email with a letter and follow the format name@mail.com"
              pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" required/>
              <input
                type="password" minlength="4" maxlength="12"
                name="password"
                id="password"
                placeholder="Enter a Password"
                required
                />
              <button type="submit">Submit</button>
            </form>
        </div>
        <div id>
            <p>login if you already have account </p>
            <form
           
            name="jForm"
            method="POST"
            id="form">
                <input type="text" name="email" placeholder="Email" 
                pattern="^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$" required/>
                <input id="password" type="password" minlength="4" maxlength="12" placeholder="Password" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
    );
}