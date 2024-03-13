const envVar: AppConfig = require(`./env.${process.env.NODE_ENV}`);
export default envVar;
