var JScratch = function() {
    JScratch.prototype.getInfo = function() {
        return {
            id: 'JScratch',
            name: 'Programa Scratch usando JavaScript',
            blocks: [
                {
                    opcode: 'js',
                    blockType: Scratch.BlockType.COMMAND,
                    blockAllThreads: false,
                    text: 'ejecuta el código javascript introducido',
                    func: 'jsparse',
                    arguments: {
                        CODE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "codigo javascript aquí",
                        },
                    }
                },

        }
    }
};

JScratch.prototype.jsparse = function (args, util) {
    text = args.CODE;
    if (text==="move(10);") {
        const steps = 10;
        const radians = MathUtil.degToRad(90 - util.target.direction);
        const dx = steps * Math.cos(radians);
        const dy = steps * Math.sin(radians);
        util.target.setXY(util.target.x + dx, util.target.y + dy);
    } else {
        
    }
};

Scratch.extensions.register(new JScratch());
