<script>
    import Login from "./login.svelte"
</script>

<main>
    <a href="/"><img class="logo" src="/logo.svg" width="96" alt=""></a>

    <Login />
</main>

<style>
    main {
        align-content: center;
        justify-content: center;
        text-align: center;
    }


    .logo {
        position: absolute;
        left: 1vw;
        top: 1vw;
    }

    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

</style>
