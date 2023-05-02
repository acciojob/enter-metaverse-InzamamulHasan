//your JS code here. If required.
let enterBtn=document.getElementById("enterBtn");
let status=document.getElementById("status");
enterBtn.addEventListener("click",()=>{
	/*let h1=document.createElement("h1");
	h1.innerText="Enter the Metaverse";
	status.insertAdjacentElement("afterend",h1);*/
	status.innerHTML=`<h1>Enter the Metaverse</h1>`
})
