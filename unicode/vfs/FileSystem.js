// FileSystem.js
// =============

let fs = require ('fs');

fs.readFile('init.json', 'utf8', (err, data) =>{
	if (err) throw err;
	let parse = JSON.parse(data);


	//console.log(parse);


let find = new FileSystem(parse);

//find.find("/home");

find.traverseAndList("")


//let split = find.find();
//console.log(split);







//parse.FileSystem.find("/path/to/this/file");


})


const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}


class FileSystem {
    constructor (obj) {
    	this.obj = obj;
        /*    Params: obj representing the virtual file system */
    }

    find(path = "") {

    	
    	if (path === ""){
    		let concat = ['fs', '/', 'files'];
    		return getNestedObject(this.obj, concat);
    	}

    	else{

    	path = path.substring(1);
    
    	let split = path.split("/");

    	let fs = ['fs', '/', 'files'];

    	let concat = fs.concat(split);
    	return getNestedObject(this.obj, concat);
    }

    	//console.log(concat)


    	//return get(split, this.obj);

        /*    Params:  query path.
         *    Example:
         *       /path/to/this/file
         *       ['', 'path', 'to', 'this', 'file']
         */
    }

    traverseAndList(path) {



    	let traverse = this.find(path);

    	let list = [];

    	for (var key in traverse){
    		
    		list[key] = traverse[key];
    		console.log(key)
    	}

console.log(list)
    	//for 

    	//let path = path;

    	//for 
        /* Params:
         *    A list of directoies destructured from the path.
         */
    }

    makeDirectory(path, dirName) {
        /* Params:
         *    A list of directoies destructured from the path,
         *    the directory name that is going to create
         *    Example:
         *       /path/to/this/file
         *       ['', 'path', 'to', 'this', 'file']
         */
    }

    cat(path) {
        /* Params:
         *    A list of directoies destructured from the path.
         *    Example:
         *       /path/to/this/file
         *       ['', 'path', 'to', 'this', 'file']
         */
    }

    write(path, content) {
        /* Params:
         *    A list of directoies destructured from the path,
         *    and the content ready to be written to the file
         *    Example:
         *       /path/to/this/file
         *       ['', 'path', 'to', 'this', 'file']
         */
    }
}