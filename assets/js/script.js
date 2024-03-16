// Sayfa yüklendiğinde çalışacağını belirtir.
addEventListener("DOMContentLoaded",function (sayfaYuklendi) {
    // görev oluştur kartındaki input ve butona id verildi.
    let btnAddTaskList = document.getElementById("btnAddTaskList");
    let inputNewTaskName = document.getElementById("inputNewTaskName");
    let taskListUl = document.getElementById("taskListUl");
    let btnGorevTamamlandi = document.getElementById("btnGorevTamamlandi");
    let btnGorevCikar = document.getElementById("btnGorevCikar");
    let btnGorevTumunuSec = document.getElementById("btnGorevTumunuSec");

    
    //seçilen görev - checkbox 
    let secilenGorev = document.getElementById("selectTask"); 
    
    let secilenGorevler = document.querySelectorAll(".select-task");
    // görev listesinde bulunan ul içerisinde li oluşturacağız ancak
    // bu li'lerin id'leri benzersiz olmalı ayrıştırıp sorgulama yapabilelim.
    // vt'de arama yapabiliriz
    let taskList = []

    // tamamlanmış görevlerin ul içerisindeki li'lerin benzersiz id'si için array
    let complatedTaskList = []

    // Seçilen görev listesi
    let selectedList = []


    // seçilen görev
    secilenGorev.addEventListener("change",function (event) {
        console.log("secilen görev checkbox");    
    });


    btnGorevTumunuSec.addEventListener("click",function (event) {
        
        taskList.forEach(function(value,index,array){
            // görev kartındaki tıkladığımız dinamik isimli input id'yi değişkene atadık
            let selectInput = document.getElementById("input-"+value);
            // input seçili mi? seçili ise silelim
            if (selectInput.hasAttribute("checked")){
                selectInput.removeAttribute("checked");
                selectInput.checked=false;

            }else{ 
                selectInput.setAttribute("checked","checked");
                // seçili checkbox yok ise seçili listeye ekle
                // (tümünü seçe bastığımızda seçilenler listesi oluşacak)
                selectedList.push(value);
                selectInput.checked=true;


                // diziden kaldırmak için
                
                // tümünü seçe basmadan önce tıklanmış olan checkbox'un indexi
                let removeItemIndex = selectedList.indexOf(value);
                if (removeItemIndex !== -1 ) {
                    selectedList.splice(removeItemIndex,1);
                }
            }

        });
    });

    // görevler kartında ulde bulunan seçili li elementini çıkartma
    btnGorevCikar.addEventListener("click",function (event) {
        // console.log("gorev cıkar butonu");
        taskList.forEach(function(value,index,array){
            let secilenInput = document.getElementById("input-"+value);
            console.log(secilenInput.id);
            if (secilenInput.checked) {
                // seçili inputun li'sini sileceğiz
                let kapsayiciLiElement = document.getElementById("wrapper-li-"+value);
                kapsayiciLiElement.remove();
                // tümünü seçe basmadan önce tıklanmış olan checkbox'un indexi
                let removeItemIndex = taskList.indexOf(value);
                if (removeItemIndex !== -1 ) {
                    taskList.splice(removeItemIndex,1);
                }
                
            }
        });
    });

    // görev oluştur butonuna tıklandığında listener ile işlem yap
    btnAddTaskList.addEventListener("click",function (event) {
        // butona tıklandığında görev listesi kartında bulunan ul içerisine li oluşturacağız.
        if (inputNewTaskName.value==null || inputNewTaskName.value=="") {
            alert("Görev ekleme girdisi boş bırakılmış")
        }else{
            createLiElement(); 
        }
    });

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
        inputElement.className = "select-task me-3 select-task";
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