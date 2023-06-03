let p =fetch('https://jsonplaceholder.typicode.com/users')  //json format
p.then(res => {
return res.json() //coverted to object
})
.then(data => {    //api data which is coverted to object
  console.log(data[0].name)
  let tableData="";
  data.map((values) =>{
    tableData+=`<tr>
   <td>${values.id}</td>
   <td>${values.name}</td>
   <td>${values.username}</td>
   <td>${values.email}</td>
   <td>${values.phone}</td>
   <td>${values.website}</td>
   <td>${values.address.street} ${values.address.suite}</td>
   `
  });
  document.getElementById("table_body").innerHTML = tableData
}).catch((error) =>{
    console.log(error)
})