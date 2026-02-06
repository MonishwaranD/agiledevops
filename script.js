function router(view){
    const viewport=document.getElementById("app-viewport");
    const tpl=document.getElementById("tpl-"+view);

    document.querySelectorAll(".nav-item")
        .forEach(n=>n.classList.remove("active"));

    event.target.classList.add("active");

    document.getElementById("view-title").innerText =
        view.charAt(0).toUpperCase()+view.slice(1);

    viewport.innerHTML="";
    viewport.appendChild(tpl.content.cloneNode(true));
}

/* Clock */
setInterval(()=>{
    document.getElementById("live-clock").innerText=
        new Date().toLocaleString();
},1000);

/* Bookings */
let id=1;
function handleNewBooking(e){
    e.preventDefault();
    const guest=document.getElementById("guest").value;
    const room=document.getElementById("room").value;

    const row=`
        <tr>
            <td>${id++}</td>
            <td>${guest}</td>
            <td>${room}</td>
            <td style="color:#22c55e">Confirmed</td>
        </tr>
    `;

    document.getElementById("list-bookings").innerHTML+=row;
    e.target.reset();
}

/* Staff */
function addMockStaff(){
    const names=["Arun","Kiran","John","Priya","Meena"];
    const staff=document.getElementById("list-staff");
    const div=document.createElement("div");
    div.className="staff-card";
    div.innerText=names[Math.floor(Math.random()*names.length)];
    staff.appendChild(div);
}

/* Default page */
router("dashboard");