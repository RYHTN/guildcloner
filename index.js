const fs = require("fs")
    , path = require("path")
    , yaml = require("yaml")
    , eris = require("eris")
    , CommandsHelper = require("./structures/CommandsHelper")
    , yargs = require("yargs");

const config = yaml.parse(fs.readFileSync("./config.yml", { encoding: "utf-8" }))
    , client = new eris.Client(config.token)
    , commanders = new CommandsHelper(client, config);

let arg = yargs
    .wrap(Math.min(100))
    .usage('Usage: $0 <command> [options]')
    .version(false)
    .showHelpOnFail(true)
    .strict()
    .demandCommand()
    .locale("en")

commanders.commands.forEach(command => {
    arg.command(command);
});

arg
    .help()
    .argv;