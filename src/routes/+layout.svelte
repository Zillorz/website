<script>
    import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider withGlobalStyles themeObserver={'dark'}>
    <slot />
</SvelteUIProvider>