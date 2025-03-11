function pyramid(blocks, height){
	if (height === 0)return;
	console.log(blocks);
	pyramid(blocks+blocks[0], height - 1);
}

pyramid('#', 50);
