# Discord Guild Copy

This script give you opportunity to backup your server 
in case of problems

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Git
- NodeJS
- Yarn (Not required but better than npm)
- Discord Bot Token (Use for copy your discord or past save)

### Installing

- Clone this repo with `git clone https://github.com/0x394/Discord-Guild-Copy`

- Rename `config.yml.exemple` to `config.yml` and add your bot token

- `yarn install` or `npm i` in folder

## How does it work ?

Let me show you with help page:

![how-it-work](https://rias.dxd.moe/QeCAMtKs.png)

If you don't need emojis, add `--disable-emojis` like this: `node . save 624227910320128005 uwu --disable-emojis` for example.

## Built With

* [Eris](https://abal.moe/Eris/) - A Node.JS Discord Library
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Yaml](https://yaml.org/) - human friendly data serialization standard for all programming languages
* [Yargs](http://yargs.js.org/) - The modern, pirate-themed successor to optimist. 

## Contributing

If you would like to help me to improve this tool, you can make pull requests or open issues.

## Authors

* **Sylvain L.** - *Initial work* - [0x394](https://github.com/0x394)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This README was make with https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
