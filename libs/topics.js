const topics = [
    {
        title: 'What is Blockchain?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Blockchain.md#what-is-blockchain'
    },
    {
        title: 'Non-fungible tokens (NFTs)',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Blockchain.md#understanding-non-fungible-tokens-nfts'
    },
    {
        title: 'What is ECMAScript?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#what-is-ecmascript'
    },
    {
        title: 'What is Babel?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#what-is-babel'
    },
    {
        title: 'What is TypeScript?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#what-is-typescript'
    },
    {
        title: 'What is JavaScript frameworks?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#what-is-javascript-frameworks'
    },
    {
        title: 'Node.js',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#nodejs'
    },
    {
        title: 'Linting and Formatting',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#linting-and-formatting'
    },
    {
        title: 'JavaScript is an "object-oriented" language',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#what-does-it-mean-when-we-say-javascript-is-an-object-oriented-language'
    },
    {
        title: 'Modern Javascript Loading (async and defer)',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#modern-javascript-loading-async-and-defer'
    },
    {
        title: 'Javascript Module',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#javascript-is-a-prototype-based-object-oriented-programming-language'
    },
    {
        title: 'Virtual Reality, Augmented Reality, Extended Reality',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#what-are-virtual-and-augmented-and-extended-reality-which-is-growing-faster-and-which-is-better-for-your-business'
    },
    {
        title: 'Internet of Things (IoT)',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#what-is-internet-of-things-iot'
    },
    {
        title: 'What is the cloud?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#what-is-the-cloud'
    },
    {
        title: 'What is Artificial Intelligence?',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#what-is-artificial-intelligence'
    },
    {
        title: 'Data Analytics',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#data-analytics'
    },
    {
        title: 'Web3',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/NanoLearnings.md#web3'
    },
    {
        title: 'Javascript Objects',
        url: 'https://github.com/sjMalik/my-learnings/blob/main/Javascript.md#javascript-objects'
    },
    {
        title: 'Ddos/Brute Force Attcack and Prevent in Nodejs',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#ddosbrute-force-attcack-and-prevent-in-nodejs'
    },
    {
        title: 'How do you secure the API?',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#how-do-you-secure-the-api'
    },
    {
        title: 'What is an SSL certificate?',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#what-is-an-ssl-certificate'
    },
    {
        title: 'File Upload',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#file-upload'
    },
    {
        title: 'Response Compression',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#response-compression'
    },
    {
        title: 'HTTP Cookies',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#http-cookies'
    },
    {
        title: 'Scaffolding node-express project',
        url: 'https://github.com/sjMalik/nodejs-tips-and-tricks#scaffolding-node-express-project'
    },
    {
        title: 'What is Kafka?',
        url: 'https://github.com/sjMalik/nodejs-kafka#what-is-kafka'
    },
    {
        title: 'express-generator',
        url: 'https://github.com/sjMalik/express-handlebar-jquery-swagger#express-generator'
    },
    {
        title: 'Express method-override middleware',
        url: 'https://github.com/sjMalik/express-handlebar-jquery-swagger#express-method-override-middleware'
    },
    {
        title: 'NodeJS Middleware',
        url: 'https://github.com/sjMalik/practice-javascript#nodejs-middleware'
    },
    {
        title: 'Call, Apply and Bind',
        url: 'https://github.com/sjMalik/practice-javascript#call-apply-and-bind'
    },
    {
        title: 'Chai Documentation',
        url: 'https://github.com/sjMalik/practice-javascript#chai-documentation'
    },
    {
        title: 'What is currying function?',
        url: 'https://github.com/sjMalik/practice-javascript#what-is-currying-function'
    },
    {
        title: 'ES6 Concepts',
        url: 'https://github.com/sjMalik/practice-javascript#es6-concepts'
    },
];


module.exports.getMultipleRandom = (num) => {
    const shuffled = [...topics].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}