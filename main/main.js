module.exports = function main() {
    let result = [];
    let str = [...arguments[0]];
    // for (let i=0;i<str.length;i++){
    //     if (str[i] === '0') {
    //         result.push('._.\n'+'|.|\n'+'|_|');
    //     }
    //     else if (str[i] === '1') {
    //         result.push('...\n'+'..|\n'+'..|');
    //     }
    //     else if (str[i] === '2') {
    //         result.push('._.\n'+'._|\n'+'|_.');
    //     }
    //     else if (str[i] === '3') {
    //         result.push('._.\n'+'._|\n'+'._|');
    //     }
    //     else if (str[i] === '4') {
    //         result.push('...\n'+'|_|\n'+'..|');
    //     }
    //     else if (str[i] === '5') {
    //         result.push('._.\n'+'|_.\n'+'._|');
    //     }
    //     else if (str[i] === '6') {
    //         result.push('._.\n'+'|_.\n'+'|_|');
    //     }
    //     else if (str[i] === '7') {
    //         result.push('._.\n'+'..|\n'+'..|');
    //     }
    //     else if (str[i] === '8') {
    //         result.push('._.\n'+'|_|\n'+'|_|');
    //     }
    //     else if (str[i] === '9') {
    //         result.push('._.\n'+'|_|\n'+'..|');
    //     }
    //     else throw Error;
    // }
    for (let i=0;i<str.length;i++){
        if (i !== str.length-1){
        if (str[i] === '0') {
            result.push('._. ');
        }
        else if (str[i] === '1') {
            result.push('... ');
        }
        else if (str[i] === '2') {
            result.push('._. ');
        }
        else if (str[i] === '3') {
            result.push('._. ');
        }
        else if (str[i] === '4') {
            result.push('... ');
        }
        else if (str[i] === '5') {
            result.push('._. ');
        }
        else if (str[i] === '6') {
            result.push('._. ');
        }
        else if (str[i] === '7') {
            result.push('._. ');
        }
        else if (str[i] === '8') {
            result.push('._. ');
        }
        else if (str[i] === '9') {
            result.push('._. ');
        }
    }
    else{
        if (str[i] === '0') {
            result.push('._.\n');
        }
        else if (str[i] === '1') {
            result.push('...\n');
        }
        else if (str[i] === '2') {
            result.push('._.\n');
        }
        else if (str[i] === '3') {
            result.push('._.\n');
        }
        else if (str[i] === '4') {
            result.push('...\n');
        }
        else if (str[i] === '5') {
            result.push('._.\n');
        }
        else if (str[i] === '6') {
            result.push('._.\n');
        }
        else if (str[i] === '7') {
            result.push('._.\n');
        }
        else if (str[i] === '8') {
            result.push('._.\n');
        }
        else if (str[i] === '9') {
            result.push('._.\n');
        }
    }
    }
    for (let i=0;i<str.length;i++){
        if (i !== str.length-1){
        if (str[i] === '0') {
            result.push('|.| ');
        }
        else if (str[i] === '1') {
            result.push('..| ');
        }
        else if (str[i] === '2') {
            result.push('._| ');
        }
        else if (str[i] === '3') {
            result.push('._| ');
        }
        else if (str[i] === '4') {
            result.push('|_| ');
        }
        else if (str[i] === '5') {
            result.push('|_. ');
        }
        else if (str[i] === '6') {
            result.push('|_. ');
        }
        else if (str[i] === '7') {
            result.push('..| ');
        }
        else if (str[i] === '8') {
            result.push('|_| ');
        }
        else if (str[i] === '9') {
            result.push('|_| ');
        }
    }
        else {
            if (str[i] === '0') {
                result.push('|.|\n');
            }
            else if (str[i] === '1') {
                result.push('..|\n');
            }
            else if (str[i] === '2') {
                result.push('._|\n');
            }
            else if (str[i] === '3') {
                result.push('._|\n');
            }
            else if (str[i] === '4') {
                result.push('|_|\n');
            }
            else if (str[i] === '5') {
                result.push('|_.\n');
            }
            else if (str[i] === '6') {
                result.push('|_.\n');
            }
            else if (str[i] === '7') {
                result.push('..|\n');
            }
            else if (str[i] === '8') {
                result.push('|_|\n');
            }
            else if (str[i] === '9') {
                result.push('|_|\n');
            }
        }
    }
    for (let i=0;i<str.length;i++){
        if (i !== str.length-1){
        if (str[i] === '0') {
            result.push('|_| ');
        }
        else if (str[i] === '1') {
            result.push('..| ');
        }
        else if (str[i] === '2') {
            result.push('|_. ');
        }
        else if (str[i] === '3') {
            result.push('._| ');
        }
        else if (str[i] === '4') {
            result.push('..| ');
        }
        else if (str[i] === '5') {
            result.push('._| ');
        }
        else if (str[i] === '6') {
            result.push('|_| ');
        }
        else if (str[i] === '7') {
            result.push('..| ');
        }
        else if (str[i] === '8') {
            result.push('|_| ');
        }
        else if (str[i] === '9') {
            result.push('..| ');
        }
    }
    else{
        if (str[i] === '0') {
            result.push('|_|\n');
        }
        else if (str[i] === '1') {
            result.push('..|\n');
        }
        else if (str[i] === '2') {
            result.push('|_.\n');
        }
        else if (str[i] === '3') {
            result.push('._|\n');
        }
        else if (str[i] === '4') {
            result.push('..|\n');
        }
        else if (str[i] === '5') {
            result.push('._|\n');
        }
        else if (str[i] === '6') {
            result.push('|_|\n');
        }
        else if (str[i] === '7') {
            result.push('..|\n');
        }
        else if (str[i] === '8') {
            result.push('|_|\n');
        }
        else if (str[i] === '9') {
            result.push('..|\n');
        }
    }
}
    
    return result.join('');
};