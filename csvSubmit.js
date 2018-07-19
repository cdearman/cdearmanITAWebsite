

function nameOrder(){
		var fullNameArr = [];
		function Name(firstName,lastName){
			this.firstName =firstName;
			this.lastName = lastName;
		}

		
		var nameList = document.getElementById('names').value;
		console.log(nameList);
		var nameArr = nameList.split(",")
		console.log(nameArr);
		for (let i=0; i<nameArr.length; i++){
			
			firstName = nameArr[i].split(" ").slice(0);
			lastName = nameArr[i].split(" ").slice(1);
			newItem = new Name(firstName,lastName);
			fullNameArr.push(newItem);
		
		}
		console.log(fullNameArr);
		fullNameArr.sort(function(a,b){
			return a.lastName > b.lastName;
		});
		console.log(fullNameArr);
		console.log(nameArr);
		for (let i=0; i<fullNameArr.length; i++){
			var html = '<li>%name%</li>';
			var newHtml;
			newHtml = html.replace('%name%',fullNameArr[i].firstName);
			document.getElementById('nameTable').insertAdjacentHTML('beforeend',newHtml);
		}
		return false;
		
}

