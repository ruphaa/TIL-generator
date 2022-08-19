import { Octokit } from 'octokit';
import { Buffer } from 'buffer';

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
})

async function saveToGithubAPI(pathName, content) {
    // const { data: user } = await octokit.request('GET /user')
    const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: 'ruphaa',
        repo: 'TIL',
        path: `${pathName}.md`,
        message: 'Today I learnt',
        content: Buffer.from(content, 'utf8').toString('base64')
    })
    return response.data;
}

export { saveToGithubAPI };

// https://github.com/octokit/octokit.js
// https://docs.github.com/en/rest/repos
// https://www.youtube.com/watch?v=H1TupRbbjSI&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx
// https://github.com/ruphaa/TIL/tree/main

// https://www.learnwithjason.dev/github-automation-with-octokit
// env files gotchas: https://vhudyma-blog.eu/cant-read-environment-variable-in-react/