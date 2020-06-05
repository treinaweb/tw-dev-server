function listArgs(){
    const pattern = (/^--[a-z]/),
    arguments = {};
    process.argv.forEach(val => {
        const [argName, value] = val.split('=');

        if(pattern.test(argName)){
            arguments[argName.replace('--', '')] = value || true;
        }
    });
    return arguments;
}

 const Arguments = {
    list: listArgs(),
    get(argumentName, defaultValue){
        return Arguments.list[argumentName] || defaultValue;
    }
}

module.exports = Arguments;