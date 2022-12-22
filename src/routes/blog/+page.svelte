<script lang="ts">
	import { Alert, AppShell, Button, Paper, TypographyProvider } from '@svelteuidev/core';
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
	<div class='fill'>
		{#if !sanitize}
			<Button color="green" on:click={() => { sanitize = true }}>Sanitize output html</Button>
			<Alert title="Warning!" color="red" style='max-width: 35%; overflow: hidden;'>
				Do not paste untrusted input, the html below is not sanitized!
			</Alert>
		{:else}
			<Button color="orange" on:click={() => { sanitize = false }}>Stop sanitizing output html</Button>
		{/if}

		<textarea bind:value={markdown}></textarea>
	</div>

	<div class='box'></div>

	<div class='content'>
		<TypographyProvider>
			{@html htmlOf(markdown)}
		</TypographyProvider>
	</div>

</main>

<style>
		.fill {
		}

		.content {
        overflow-wrap: break-word;
				max-height: 90vh;
				overflow-y: scroll;
		}

    ::-webkit-scrollbar {
        width: 20px;
				float: left;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #d6dee1;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #a8bbbf;
    }

    .box{
        width: 10vw;
        height: 80vh;
				float: left;
    }

    textarea {
        width: 40%;
        height: 90vh;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #1a1a1a;
        border-radius: 4px;
        background-color: #343434;
        font-size: 16px;
        resize: none;
				float: left;
				color: whitesmoke;
    }
</style>