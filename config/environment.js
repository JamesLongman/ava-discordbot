'use strict';

/* This is the config/environment.js file which is the primary config file which holds critical values
such as the bot token and the environment the bot is set to run in

This file, as well as serving as an example, will actually be the environment.js version used by the
Travis CI for the project */

module.exports = {
    /* Your bot's user ID, shown when you obtained the token, or you can right click on the bot on
    discord and copy its ID directly if you have dev mode enabled in your discord settings, should
    be a string */
    botUserID: '5838398763863863',

    // Database info for mysql connections, in docker this will be:
    database: {
        host: 'mysql',
        user: 'local',
        password: '123',
        database: 'Ava',
        port: '3306',
    },
    
    /* The environment is a string, either "development" (for local running), "staging" (for a test server
    hosted version), or "production" (for a live server hosted version)

    Additionally there is the testing environment which is to be used by Travis */
    environment: 'testing',

    /* The file path to your project folder ("/app" by default in docker) */
    root: '/home/travis/build/JamesLongman/ava-bot',

    /* Your bot token, obtained from: https://discordapp.com/developers/applications/me
    Should be a string */
    token: '59774FDGJ££6wgdG54FGY%£Wdjglkn4$$gm;&Gbjrj5',
};
