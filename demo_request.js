

 $.ajax({
        type: 'GET',
        dataType:'json',
        url: 'http://dummy.restapiexample.com/api/v1/employees',

        success: function (datas) {
        	let resultList = '';
        	datas.data.sort(
    			function(a, b) {
       			return b.employee_age - a.employee_age
       		})

       		for(let i=0;i<datas.data.length;i++){
       			if(!datas.data[i+1] || !datas.data[i+2] ){
       				break;
       			}
       			
       			if(datas.data[i].employee_age == datas.data[i+1].employee_age){
       				console.log(datas.data[i].employee_age);
       				console.log(datas.data[i].employee_name);
       				console.log(datas.data[i+1].employee_name);
       					resultList += `
        		<div class="row">

        		<ul>
   
        			<strong>Age: ${datas.data[i].employee_age}</strong>

        			<br>${datas.data[i].employee_name}
        			<br>${datas.data[i+1].employee_name}
        		</ul>
        		</div>
        		`;

       			}
       			else if(datas.data[i].employee_age !== datas.data[i+1].employee_age && datas.data[i+1].employee_age !== datas.data[i+2].employee_age){
       				console.log(datas.data[i+1].employee_age);
       				console.log(datas.data[i+1].employee_name);

       				resultList += `
        		<div class="row">

        		<ul>

        			<strong>Age:${datas.data[i+1].employee_age}</strong>
        			<br>${datas.data[i+1].employee_name}
        		</ul>
        		</div>
        		`;

       			}


       	}
       	document.getElementById('demo').innerHTML = resultList;


        	// datas.data.forEach((employees)=>{
        	// 	// console.log(employees.employee_age);
        	// 	// console.log(employees.employee_name);


        	
        	// 	resultList += `
        	// 	<div class="row">

        	// 	<ul>
   
        	// 		<strong>Age: ${employees.employee_age}</strong>

        	// 		<br>${employees.employee_name}
        	// 	</ul>
        	// 	</div>
        	// 	`;

        	// })

        	// document.getElementById('demo').innerHTML = resultList;


        },
    });
