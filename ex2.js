function table(size){
	for(let j = 0; j < size; j++){
		let line = '';
		for(let i = 0; i < size; i++)
			if(j%2==0)
				if(i%2==0)
					line += " "
				else
					line += "#"
			else
				if(i%2==0)
					line += "#"
				else
					line += " "
		console.log(line);
	}
}

table(8);
