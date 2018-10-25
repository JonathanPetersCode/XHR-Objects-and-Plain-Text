document.getElementById("button").addEventListener("click", loadData);

  function loadData(){
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open 
  xhr.open("GET", "data.txt", true);
  // console.log("Ready State:", xhr.readyState)

  // Use for spinners/loaders
  xhr.onprogress = function(){
    console.log("Readystate", xhr.readyState);
  }

  
  xhr.onload = function(){
    console.log("Ready State:", xhr.readyState);
    if(this.status === 200){
      // console.log(this.responseText)
      document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }
    
  // xhr.onreadystatechange = function(){
  //   console.log("Ready State:", xhr.readyState)
  //   if(this.readyState === 4 && this.status === 200){
  //     console.log(this.responseText)
  //   }
  // }

  xhr.onerror = function(){
    console.log("Request Error...");
  }
  xhr.send();
};
