
<script lang="ts">
    import type { PageData } from './$types';
    import { Alert, Button, Chip, Paper, TextInput, TypographyProvider } from '@svelteuidev/core';
    import { marked } from 'marked';
    import sanitizeHtml from 'sanitize-html';

    let sanitize = true;
    let markdown = "";

    const htmlOf = (content: string) => {
        let html = marked.parse(content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,""));
        return sanitize ? sanitizeHtml(html) : html;
    }
</script>

<main>
    {#if Math.random() > 0.5}
        <h1>Welcome!</h1>
    {:else}
        <h1>Bienvenue!</h1>
    {/if}


    {#if !sanitize}
        <Button color="green" on:click={() => { sanitize = true }}>Sanitize output html</Button>
        <Alert title="Warning!" color="red">
            Do not paste untrusted input, the html below is not sanitized!
        </Alert>
    {:else}
        <Button color="orange" on:click={() => { sanitize = false }}>Stop sanitizing output html</Button>
    {/if}
    <textarea bind:value={markdown}></textarea>

    <TypographyProvider>
        {@html htmlOf(markdown)}
    </TypographyProvider>

    <Button variant='gradient' gradient={{from: 'teal', to: 'blue', deg: 60}}>
        Teal Blue
    </Button>

    <Paper>
        Paper is the most basic UI component. Use it to create cards, dropdowns, modals and other components that require background with shadow
    </Paper>
</main>

<style>
    /*noinspection CssUnknownTarget*/
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
</style>
