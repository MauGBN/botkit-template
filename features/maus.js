//
// Respond to various 'hello' words, attach file by URL and from local file system
var fs = require('fs');

module.exports = function( controller ) {

    controller.hears( [ 'ola k ase?' ], 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message,'Ola k ase?' );
        await bot.reply( message, { markdown: 'desarrollando o k ase?' } );
      });

    controller.hears( 'url', 'message,direct_message', async ( bot,message ) => {

        await bot.reply( message, {
            text: 'Aww!',
            files: [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Youngkitten.JPG/220px-Youngkitten.JPG' ]
        });
    })

    controller.commandHelp.push( { command: 'ola k ase?', text: 'un saludo' } );
}