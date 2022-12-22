import type { PageLoad } from './$types';

export const load = async() => {
    return {
        blogs: [
            {
                id: 1,
                title: "Hello World",
                description: "First ever blog!"
            },
            {
                id: 2,
                title: "How I made this blog with sveltekit!",
                description: "A thorough explanation on how I made this blog, and how you can too!"
            }
        ]
    };
};