const url = "https://jsonplaceholder.typicode.com/";
  fetch(`${url}/users`)
    .then(res => res.json())
	.then((users)=>{
		console.log(users);
		const latList = users.map((user) => `${user.address.geo.lat}`);
		console.log(latList);
		const northList = users.filter((user) => user.address.geo.lat > 0);
        console.log(northList);
		const mediaLat = latList.reduce((total, lat) => total + parseInt(lat), 0) / latList.length;
        console.log(mediaLat);
	})
    .catch(err=> console.log(err));