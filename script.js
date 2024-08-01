    const addBtn = document.querySelector(".add-amount");
    const description = document.querySelector("#description");
    const amount = document.querySelector("#amount");
    const category = document.querySelector("#expence-category");
    const date = document.querySelector("#expence-date");
    const tableBody = document.querySelector(".expence-list");

    addBtn.addEventListener("click", function (e) {
        e.preventDefault(); 

        
        const trow = document.createElement("tr");

       
        const td1 = document.createElement("td");
        td1.classList.add("tdata");
        td1.textContent = description.value;
        trow.appendChild(td1);

       
        const td2 = document.createElement("td");
        td2.classList.add("tdata");
        td2.textContent = amount.value;
        trow.appendChild(td2);

      
        const td3 = document.createElement("td");
        td3.classList.add("tdata");
        td3.textContent = category.value;
        trow.appendChild(td3);

    
        const td4 = document.createElement("td");
        td4.classList.add("tdata");
        td4.textContent = date.value;
        trow.appendChild(td4);

       
        const td5 = document.createElement("td");
        td5.classList.add("tdata");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-button");
        editBtn.textContent = "Edit";
        td5.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        deleteBtn.textContent = "Delete";
        td5.appendChild(deleteBtn);

        trow.appendChild(td5);
        tableBody.appendChild(trow);

        description.value = '';
        amount.value = '';
        category.value = '';
        date.value = '';

        deleteBtn.addEventListener("click", (e) => {
            e.target.closest("tr").remove();
        });

        editBtn.addEventListener("click", (e) => {
            const row = e.target.closest("tr");
            description.value = row.children[0].textContent;
            amount.value = row.children[1].textContent;
            category.value = row.children[2].textContent;
            date.value = row.children[3].textContent;
            row.remove();
        });
    });
