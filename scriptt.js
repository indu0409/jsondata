fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out="";
    for(let product of data){
        out +=`
       
       <tr>
       <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.username}</td>
       <td>${product.email}</td>
       <td>${product.address.street}</td>
       <td>${product.address.suite}</td>
       <td>${product.address.city}</td>
       <td>${product.address.zipcode}</td>
       <td>${product.address.geo.lat}</td>
       <td>${product.address.geo.lng}</td>
       <td>${product.phone}</td>
       <td>${product.website}</td>
       <td>${product.company.name}</td>
       <td>${product.company.catchPhrase}</td>
       <td>${product.company.bs}</td>
       </tr>
        `;

    }
    placeholder.innerHTML=out;
});  