process.stdin.on('readable', function() {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        var os = process.env.os;
        
        // if(os !=== null){
        // 	process.stdout.write(os);
        // }else{
        // 	process.stderr.write("Unknown");
        // }

        switch (os) {
        	case "Windows_NT":
       			process.stdout.write("Windows");
        		break;
        	case "Linux":
       			process.stdout.write("Linux");
	        	break;
        	case "Mac":
	   			process.stdout.write("Macintosh");
	        	break;
        	default:
        		process.stderr.write("Unknown");
        		break;
        }

        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!');
        }
    }
});