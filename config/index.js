var config = {
    dev: {
        mode: 'dev',
        port: 3000
    },
    prod: {
        mode: 'prod',
        port: 5000
    }
}

module.exports = function(mode) {
    return config[mode || process.argv[2] || 'dev'] || config
}
