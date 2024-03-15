// Sayfa yüklendiğinde çalışacağını belirtir.
addEventListener("DOMContentLoaded",function (sayfaYuklendi) {

    // görev oluştur kartındaki input ve butona id verildi.
    let btnAddTaskList = document.getElementById("btnAddTaskList");
    //let btnAddTaskListe = $("btnAddTaskListe");
    let inputNewTaskName = document.getElementById("inputNewTaskName");
    let taskListUl = document.getElementById("taskListUl");
    // görev oluştur butonuna tıklandığında listener ile işlem yap

    btnAddTaskList.addEventListener("click",function (event) {
        //console.log("tiklandi");
        // butona tıklandığında görev listesi kartında bulunan ul içerisine li oluşturacağız.
        createLiElement(); 
    });

    // görev listesinde bulunan ul içerisinde li oluşturacağız ancak
    // bu li'lerin id'leri benzersiz olmalı ayrıştırıp sorgulama yapabilelim.
    // vt'de arama yapabiliriz
    let taskList = []

    // tamamlanmış görevlerin ul içerisindeki li'lerin benzersiz id'si için array
    let complatedTaskList = []


    // butona tıklandığında görev listesi kartında bulunan ul içerisine li oluşturacağız.
    function createLiElement() {
        // idler sıfırdan başlıyor biz 12den başlatalım
        let inputID = taskList.length + 1;
        taskList.push(inputID);

        // task list için li elementini oluşturalım
        let liElement = document.createElement("li")
        liElement.className = "list-group-item task-list-item px-3";
        // wrapper-li-1
        liElement.id = "wrapper-li-"+inputID;

        let inputElement = document.createElement("input");
        inputElement.type="checkbox";
        inputElement.className = "select-task me-3";
        inputElement.id = "input-"+inputID;

        let labelElement = document.createElement("label");
        labelElement.setAttribute("for","input-"+inputID);

        labelElement.innerText = inputNewTaskName.value;

        let iElement = document.createElement("i");
        iElement.className = "bi bi-trash text-primary float-end trashed";


        // görevlistesindeki li'nin içerisinde bulunan elementleri li'ye sırasıya ekleyelim
        liElement.appendChild(inputElement);
        liElement.appendChild(labelElement);
        liElement.appendChild(iElement);

        // tanımladığımız lielementini ul'nin içerisine ekleyelim.
        taskListUl.appendChild(liElement);

    }


})