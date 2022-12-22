<main>
    <form action="http://127.0.0.1:8787/login" method="post">
        <input id="user" name="user" required/>
        <input id="pass" name="pass" type="password" required/>
        <button type="submit"></button>
    </form>
</main>

<style>
    input {
        background-color: #1a1a1a;
        color: aliceblue;
        appearance: none;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.5em 1.3em;
        font-size: 1em;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        color: rgb(255, 255, 255);
        text-align: center;
    }

    button:hover {
        border-color: aliceblue;
        transition: border-color 0.25s;
    }

    button:active {
        border-color: cornsilk;
        color: cornsilk;
        background-color: #343434;
    }
</style>