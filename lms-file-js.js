const fileElements = document.querySelector('.lms-files-main-items-a-files-list');
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; 

button.onclick = ()=>{
  input.click();
}

input.addEventListener("change", function(){
  file = this.files;
  dropArea.classList.add("active");
    for(el of file){
    const svg = `<svg class="lms-files-main-items-a-file-svg-icon" id="Capa_1"
  enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"
  xmlns="http://www.w3.org/2000/svg">
  <g>
      <path
          d="m152.274 105.738v-49.671h117.485c5.971 0 11.336 3.645 13.536 9.195l16.044 40.475-78.074 22.507z"
          fill="#8ac9fe" />
      <path
          d="m299.343 105.738h-22.185l-16.048-40.475c-2.2-5.551-7.567-9.201-13.529-9.201h22.175c5.973 0 11.339 3.65 13.54 9.201z"
          fill="#60b7ff" />
      <path
          d="m404.702 105.738h-212.401c-5.971 0-11.336-3.645-13.536-9.195l-12.399-31.28c-2.2-5.55-7.566-9.195-13.536-9.195h-102.925c-8.042 0-14.561 6.519-14.561 14.561v20.549c0 8.042-6.519 14.561-14.561 14.561h-1.343c-10.737 0-19.44 8.704-19.44 19.44v298.199c0 17.98 14.576 32.555 32.555 32.555h391.586v-330.755c.001-10.736-8.703-19.44-19.439-19.44z"
          fill="#fef0ae" />
      <g fill="#fee97d">
          <path
              d="m130.33 150.377c-10.733 0-19.43 8.708-19.43 19.441l-45.348 253.849c-.74 4.153-1.881 8.235-3.598 12.09-5.85 13.19-15.483 20.181-29.392 20.181h-.01c-4.287 0-8.368-.822-12.121-2.334 7.382-3.053 12.943-9.078 16.829-17.847 1.707-3.855 2.858-7.937 3.598-12.09l45.338-253.849c0-10.733 8.708-19.441 19.441-19.441z" />
          <path
              d="m192.301 105.738h-20.561c-5.973 0-11.34-3.65-13.54-9.191l-12.398-31.284c-2.2-5.551-7.567-9.201-13.529-9.201h20.561c5.963 0 11.329 3.65 13.529 9.201l12.398 31.284c2.201 5.542 7.567 9.191 13.54 9.191z" />
          <path
              d="m424.14 125.179v330.758h-20.561v-330.758c0-10.733-8.697-19.441-19.441-19.441h20.561c10.743 0 19.441 8.708 19.441 19.441z" />
      </g>
      <path
          d="m130.335 150.379h362.225c10.737 0 19.44 8.704 19.44 19.44l-45.777 266.673c0 10.737-8.704 19.44-19.44 19.44h-381.666-32.558c13.908 0 23.547-6.986 29.397-20.178 1.71-3.855 2.859-7.935 3.6-12.087l45.338-253.849c0-10.735 8.704-19.439 19.441-19.439z"
          fill="#fee45a" />
      <path
          d="m511.998 169.818-45.78 266.679c0 10.733-8.697 19.441-19.43 19.441h-24.704c10.733 0 19.441-8.708 19.441-19.441l45.78-266.679c0-10.733-8.708-19.441-19.441-19.441h24.694c10.742 0 19.44 8.708 19.44 19.441z"
          fill="#fed402" />
      <g>
          <path
              d="m200.196 372.851h-63.601c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h63.601c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z"
              fill="#fac600" />
      </g>
      <g>
          <path
              d="m225.436 403.428h-101.177c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h101.177c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
              fill="#fac600" />
      </g>
  </g>
</svg><a href="#">${el.name}</a>`;
    const newFile = document.createElement('li');
    newFile.innerHTML = svg;
    fileElements.appendChild(newFile)
    // fileElements.children[i].lastElementChild.textContent = el.name;
    i++;
  }
  
  console.log(file);
});


dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
  // dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  // dragText.textContent = "Drag & Drop to Upload File";
});
let i = 0;
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault();
  file = event.dataTransfer.files;

  for(el of file){
    const svg = `<svg class="lms-files-main-items-a-file-svg-icon" id="Capa_1"
  enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"
  xmlns="http://www.w3.org/2000/svg">
  <g>
      <path
          d="m152.274 105.738v-49.671h117.485c5.971 0 11.336 3.645 13.536 9.195l16.044 40.475-78.074 22.507z"
          fill="#8ac9fe" />
      <path
          d="m299.343 105.738h-22.185l-16.048-40.475c-2.2-5.551-7.567-9.201-13.529-9.201h22.175c5.973 0 11.339 3.65 13.54 9.201z"
          fill="#60b7ff" />
      <path
          d="m404.702 105.738h-212.401c-5.971 0-11.336-3.645-13.536-9.195l-12.399-31.28c-2.2-5.55-7.566-9.195-13.536-9.195h-102.925c-8.042 0-14.561 6.519-14.561 14.561v20.549c0 8.042-6.519 14.561-14.561 14.561h-1.343c-10.737 0-19.44 8.704-19.44 19.44v298.199c0 17.98 14.576 32.555 32.555 32.555h391.586v-330.755c.001-10.736-8.703-19.44-19.439-19.44z"
          fill="#fef0ae" />
      <g fill="#fee97d">
          <path
              d="m130.33 150.377c-10.733 0-19.43 8.708-19.43 19.441l-45.348 253.849c-.74 4.153-1.881 8.235-3.598 12.09-5.85 13.19-15.483 20.181-29.392 20.181h-.01c-4.287 0-8.368-.822-12.121-2.334 7.382-3.053 12.943-9.078 16.829-17.847 1.707-3.855 2.858-7.937 3.598-12.09l45.338-253.849c0-10.733 8.708-19.441 19.441-19.441z" />
          <path
              d="m192.301 105.738h-20.561c-5.973 0-11.34-3.65-13.54-9.191l-12.398-31.284c-2.2-5.551-7.567-9.201-13.529-9.201h20.561c5.963 0 11.329 3.65 13.529 9.201l12.398 31.284c2.201 5.542 7.567 9.191 13.54 9.191z" />
          <path
              d="m424.14 125.179v330.758h-20.561v-330.758c0-10.733-8.697-19.441-19.441-19.441h20.561c10.743 0 19.441 8.708 19.441 19.441z" />
      </g>
      <path
          d="m130.335 150.379h362.225c10.737 0 19.44 8.704 19.44 19.44l-45.777 266.673c0 10.737-8.704 19.44-19.44 19.44h-381.666-32.558c13.908 0 23.547-6.986 29.397-20.178 1.71-3.855 2.859-7.935 3.6-12.087l45.338-253.849c0-10.735 8.704-19.439 19.441-19.439z"
          fill="#fee45a" />
      <path
          d="m511.998 169.818-45.78 266.679c0 10.733-8.697 19.441-19.43 19.441h-24.704c10.733 0 19.441-8.708 19.441-19.441l45.78-266.679c0-10.733-8.708-19.441-19.441-19.441h24.694c10.742 0 19.44 8.708 19.44 19.441z"
          fill="#fed402" />
      <g>
          <path
              d="m200.196 372.851h-63.601c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h63.601c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z"
              fill="#fac600" />
      </g>
      <g>
          <path
              d="m225.436 403.428h-101.177c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h101.177c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z"
              fill="#fac600" />
      </g>
  </g>
</svg><a href="#">${el.name}</a>`;
    const newFile = document.createElement('li');
    newFile.innerHTML = svg;
    fileElements.appendChild(newFile)
    i++;
  }
  // showFile();
});



// این قسمت باید تغییر کنه و فایل ها رو نشون بده توی قسمت بالا
function showFile(){
  let fileType = file[0].type;
  console.log(fileType); 
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
  console.log(validExtensions.includes(fileType))
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; 
      
    }
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
