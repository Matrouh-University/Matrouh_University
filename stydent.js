let spject = document.querySelector(".span3");
for(let f = 0 ; f < 15; f++){
  spject.children[3].children[f].style.display = "none"; 
  spject.children[1].children[f].style.display = "none"; 
  spject.children[2].children[f].style.display = "none";
}
for(let A = 15 ; A < 32; A++){
  spject.children[3].children[A].style.display = "none";
  spject.children[1].children[A].style.display = "none"; 
  spject.children[2].children[A].style.display = "none";
}
for(let M = 32; M < 49; M++){  
  spject.children[3].children[M].style.display = "none";
  spject.children[1].children[M].style.display = "none"; 
  spject.children[2].children[M].style.display = "none";
}
for(let S = 49 ; S < 66; S++){
  spject.children[3].children[S].style.display = "none";
  spject.children[1].children[S].style.display = "none"; 
  spject.children[2].children[S].style.display = "none"; 
}


  // الوان الهيدر الجانبي 
  let home = document.querySelector(".alress");
  let user = document.querySelector(".aluser");
  let serves = document.querySelector(".servers");
  let spjec = document.querySelector(".spject");
  let favourt = document.querySelector(".spject2");
  let siting = document.querySelector(".setting");
  let titlr1 = document.querySelector(".titlr1");
 
 
 
 
  home.style.background = "#ffffff55";
  home.style.borderRadius = "8px";
  user.style.borderRadius = "8px";
  serves.style.borderRadius = "8px";
  spjec.style.borderRadius = "8px";
  favourt.style.borderRadius = "8px";
 siting.style.borderRadius = "8px";
  function color(type1,type2,type3,type4,type5,type6){
   home.style.background = type1;
   user.style.background = type2;
   serves.style.background = type3;
   spjec.style.background = type4;
   favourt.style.background = type5;
   siting.style.background = type6;
  }
  function hide_pup(){
    document.getElementById("pup").classList.remove('open') 
  }
  function hide_pup2(){
    document.querySelector(".sitting").classList.remove('open') 
  }
let services = document.querySelector(".services");
let title = document.querySelector(".table");
let title2 = document.querySelector("#title2")
let ben = document.querySelector(".spject");
let tit = document.querySelector(".titlr");

let viduo = document.querySelector("#viduo");
      let exam = document.querySelector("#exam");
      let voice = document.querySelector("#mp3");
      let pdf = document.querySelector("#pdf");


  // تغيرات الصفحه الرئيسيه 
  home.addEventListener("click",()=>{
   color("#ffffff55","#123","#123","#123","#123","#123");
    hide_pup();
    services.style.display = "none";
    titlr1.style.display = "none";
  })
  // تغيرات المستخدم 
  user.addEventListener("click",()=>{
   color("#123","#ffffff55","#123","#123","#123","#123")
   let Name_user = document.querySelector(".Name_user");
   let Number_user = document.querySelector(".Number_user");
   let Group_user = document.querySelector(".Group_user")
   Name_user.textContent=  localStorage.getItem("name");
   Number_user.textContent =  localStorage.getItem("username");
   Group_user.textContent = localStorage.getItem("group");
   titlr1.style.display = "none";
   tit.style.display = "none";
  })
  // تغيرات الخدمات 
  serves.addEventListener("click",()=>{
   color("#123","#123","#ffffff55","#123","#123","#123");
    hide_pup();
    services.style.display = "inline";
    title.style.display = "none"
    tit.style.display = "none";
    title2.style.display = "none";
    titlr1.style.display = "none";
    pdf.children[1].children[0].textContent = "ملفات";
    pdf.children[1].children[1].textContent = "File";
    voice.children[1].children[0].textContent = "محادثات"
    voice.children[1].children[1].textContent = "AI";
    voice.children[0].classList.remove("fa-solid");
    voice.children[0].classList.remove("fa-headset");
    voice.children[0].classList.add("fa-brands");
    voice.children[0].classList.add("fa-rocketchat");
    exam.children[0].classList.remove("fas");
    exam.children[0].classList.remove("fa-pen");
    exam.children[0].classList.add("fa-solid");
    exam.children[0].classList.add("fa-cloud");
    exam.children[1].children[0].textContent = "تخزين سحابي"
    exam.children[1].children[1].textContent = "Cloud";
    viduo.children[1].children[0].textContent = "فديوهات"
    viduo.children[1].children[1].textContent = "Mp4";
    viduo.children[0].className = "fa-solid fa-file-video";
    //viduo.children[0].classList.add("fa-gamepad");
    
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'serves.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) { // هنا يجب استخدام xhr بدلاً من ServerData
        var jsonData = JSON.parse(xhr.responseText); // هنا يجب استخدام xhr بدلاً من ServerData
        let tr = document.querySelectorAll(".tr");
        tr.forEach((element, index ,) => {
          element.children[0].children[0].textContent = jsonData["file"][`Name${index}`];
          element.children[0].children[1].className = jsonData["file"][`class${index}`];
          element.children[1].textContent = jsonData["file"][`server${index}`];
          element.children[2].children[0].href = jsonData["file"][`link${index}`];
          voice.addEventListener("click",()=>{
            element.children[0].children[0].textContent = jsonData["Ai"][`Name${index}`];
            element.children[0].children[1].className = jsonData["Ai"][`class${index}`];
            element.children[1].textContent = jsonData["Ai"][`server${index}`];
            element.children[2].children[0].href = jsonData["Ai"][`link${index}`];
          })
           pdf.addEventListener("click",()=>{
            element.children[0].children[0].textContent = jsonData["file"][`Name${index}`];
            element.children[0].children[1].className = jsonData["file"][`class${index}`];
            element.children[1].textContent = jsonData["file"][`server${index}`];
            element.children[2].children[0].href = jsonData["file"][`link${index}`];
           })
           exam.addEventListener("click",()=>{
            element.children[0].children[0].textContent = jsonData["Cloud"][`Name${index}`];
            element.children[0].children[1].className = jsonData["Cloud"][`class${index}`];
            element.children[1].textContent = jsonData["Cloud"][`server${index}`];
            element.children[2].children[0].href = jsonData["Cloud"][`link${index}`];
           }) 
           viduo.addEventListener("click",()=>{
            element.children[0].children[0].textContent = jsonData["games"][`Name${index}`];
            element.children[0].children[1].className = jsonData["games"][`class${index}`];
            element.children[1].textContent = jsonData["games"][`server${index}`];
            element.children[2].children[0].href = jsonData["games"][`link${index}`];
           })
           element.children[2].addEventListener("click", (event) => {
            // منع سلوك الافتراضي للزر
            event.preventDefault();
            
            // حساب موقع النافذة في قلب الصفحة
            const windowWidth = 600; // عرض النافذة
            const windowHeight = 400; // ارتفاع النافذة
            const left = (window.innerWidth - windowWidth) / 2 + (window.innerWidth / 4); // يمكن تعديل هذا الرقم لتحريك النافذة إلى اليمين أكثر أو أقل
            const top = (window.innerHeight - windowHeight) / 2;
            
            // فتح الرابط في نافذة منبثقة ووضعها في قلب الصفحة
            window.open(element.children[2].children[0].href, "_blank", `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
        });
        
        
        
      });
      
        
      }
    };
    xhr.send();})
 
  // تغيرات المواد المختاره 
  spjec.addEventListener("click",()=>{
   color("#123","#123","#123","#ffffff55","#123","#123")
   hide_pup()
   services.style.display = "none";
   titlr1.style.display = "none";
   title.style.display  = "none";

  })
  // تغيرات استمارة التسجيل
favourt.addEventListener("click",()=>{
 color("#123","#123","#123","#123","#ffffff55","#123")
 hide_pup()
 services.style.display = "none";
 titlr1.style.display = "grid";
 tit.style.display = "none";
title.style.display = "none"

 //window.location.reload();
})
//تغيرات الضبط 
siting.addEventListener("click",()=>{
 color("#123","#123","#123","#123","#123","#ffffff55")
 hide_pup()
 services.style.display = "none";
 titlr1.style.display = "none";
 tit.style.display = "none";
title.style.display = "none";

})
let nav = document.querySelector(".title-info");
let clickCount = 0;
nav.addEventListener("click", () => {
  clickCount++;
  if (clickCount % 2 === 1) {
    let info = document.querySelector(".data-info");
    info.style.display = "none";
    nav.style.background = "red";
  } else {
    let info = document.querySelector(".data-info");
    info.style.display = "flex";
    nav.style.background = "#0080ff";
  }
});



let userN = document.getElementById("ame");
userN.textContent = localStorage.getItem(`name`);
var xhr = new XMLHttpRequest();
xhr.open('GET', "spject.json", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);

    // تغيرات شعبة جغرافيا
    if(localStorage.getItem("group") === `"geography"`){
      let con =  " ";
      for (let v = 0; v < 21 ; v++){
      function fan (type1,type2,type3,type4,type5){ 
        if(localStorage.getItem(type1) === type2){
          let select = document.querySelector(`.lecture${type5}`);
          select.children[0].textContent = con;
          let option = document.querySelector(`.lecture${type5} .option${v}`);
          option.value = type3;
          option.textContent = type4;
          select.appendChild(option);
          option.style.display = "none";
          if(option.textContent !== ""){
            option.style.display = "inline";
          }
          let iframe = document.querySelector(".iframe");
          let iframe_close = document.querySelector(".iframe_close");
          iframe_close.addEventListener("click",()=>{
            iframe.style.display = "none";
          })
          select.addEventListener("change", () => {
            let iframe1 = document.querySelector(".iframe1")
              iframe.style.display = "grid";
              iframe1.src = select.value;
          });
          
        }
      }
    
      // اضافة ملفات pdf الي الموقع 
      pdf.addEventListener("click",()=>{
        con = "محاضرات pdf"
        voice.style.background = "#123";
        exam.style.background = "#123";
        viduo.style.background = "#123";
        pdf.style.background = "#ffffff55";
        
 
        
         
         // مواد المستوي الاول 
         fan(`spject0`,` مهارات التواصل باللغه العربيه1`,jsonData["level1_G&H"].spj1[`L_Pdf${v}`],jsonData["level1_G&H"].spj1[`T_PDF${v}`],0);
         fan(`spject1`,`العمليات الرياضيه الاساسيه `,jsonData["level1_G&H"].spj2[`L_Pdf${v}`],jsonData["level1_G&H"].spj2[`T_PDF${v}`],1);
         fan(`spject2`,` مفاهيم علوم الحياه `,jsonData["level1_G&H"].spj3[`L_Pdf${v}`],jsonData["level1_G&H"].spj3[`T_PDF${v}`],2);
         fan(`spject3`,`الاداره الرقميه  `,jsonData["level1_G&H"].spj4[`L_Pdf${v}`],jsonData["level1_G&H"].spj4[`T_PDF${v}`],3); 
         fan(`spject4`,`اخلاقيات مهنة التعليم `,jsonData["level1_G&H"].spj5[`L_Pdf${v}`],jsonData["level1_G&H"].spj5[`T_PDF${v}`],4); 
         fan(`spject5`,`ثقافه تاريخيه `,jsonData["level1_G&H"].spj6[`L_Pdf${v}`],jsonData["level1_G&H"].spj6[`T_PDF${v}`],5);
         fan(`spject6`,` التربيه و المجتمع `,jsonData["level1_G&H"].spj7[`L_Pdf${v}`],jsonData["level1_G&H"].spj7[`T_PDF${v}`],6); 
         fan(`spject7`,` فرص العمل التشاركي`,jsonData["level1_G&H"].spj8[`L_Pdf${v}`],jsonData["level1_G&H"].spj8[`T_PDF${v}`],7);
         fan(`spject8`,`مبادي الاقصاد `,jsonData["level1_G&H"].spj9[`L_Pdf${v}`],jsonData["level1_G&H"].spj9[`T_PDF${v}`],8);
         fan(`spject9`,`الصحه النفسيه لطفل المرحله الابتدائيه`,jsonData["level1_G&H"].spj10[`L_Pdf${v}`],jsonData["level1_G&H"].spj10[`T_PDF${v}`],9); 
         fan(`spject10`,`سكشن العمليات الرياضيه الاساسيه`,jsonData["level1_G&H"].spj11[`L_Pdf${v}`],jsonData["level1_G&H"].spj11[`T_PDF${v}`],10);
         fan(`spject11`,`سكشن مهارات تواصل باللغه العربيه 1`,jsonData["level1_G&H"].spj12[`L_Pdf${v}`],jsonData["level1_G&H"].spj12[`T_PDF${v}`],11); 
         fan(`spject12`,`التفكير العلمي الفلسفي`,jsonData["level1_G&H"].spj13[`L_Pdf${v}`],jsonData["level1_G&H"].spj13[`T_PDF${v}`],12);
         fan(`spject13`,`مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj14[`L_Pdf${v}`],jsonData["level1_G&H"].spj14[`T_PDF${v}`],13); 
         fan(`spject14`,`سكشن مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj15[`L_Pdf${v}`],jsonData["level1_G&H"].spj15[`T_PDF${v}`],14);
           //مواد المستوي الثاني
           fan(`spject15`,`تدريس مصغر 2`,jsonData["level2_G&H"].spj1[`L_Pdf${v}`],jsonData["level2_G&H"].spj1[`T_PDF${v}`],15);
           fan(`spject16`,`تكنولوجيا الاتصال و التعليم عن بعد`,jsonData["level2_G&H"].spj2[`L_Pdf${v}`],jsonData["level2_G&H"].spj2[`T_PDF${v}`],16);
           fan(`spject17`,`سكشن تكنولوجيا الاتصال و التعليم عن بعد `,jsonData["level2_G&H"].spj3[`L_Pdf${v}`],jsonData["level2_G&H"].spj3[`T_PDF${v}`],17);
           fan(`spject18`,`سكشن المدخل البيئي في التدريس `,jsonData["level2_G&H"].spj4[`L_Pdf${v}`],jsonData["level2_G&H"].spj4[`T_PDF${v}`],18); 
           fan(`spject19`,`اللغة الانجليزيه`,jsonData["level2_G&H"].spj5[`L_Pdf${v}`],jsonData["level2_G&H"].spj5[`T_PDF${v}`],19); 
           fan(`spject20`,`المدخل البيئي في التدريس`,jsonData["level2_G&H"].spj6[`L_Pdf${v}`],jsonData["level2_G&H"].spj6[`T_PDF${v}`],20);
           fan(`spject21`,`سيكلوجية اللعب `,jsonData["level2_G&H"].spj7[`L_Pdf${v}`],jsonData["level2_G&H"].spj7[`T_PDF${v}`],21); 
           fan(`spject22`,`تدريب ميداني3`,jsonData["level2_G&H"].spj8[`L_Pdf${v}`],jsonData["level2_G&H"].spj8[`T_PDF${v}`],22);
           fan(`spject23`,`مهارات التواصل 3`,jsonData["level2_G&H"].spj9[`L_Pdf${v}`],jsonData["level2_G&H"].spj9[`T_PDF${v}`],23);
           fan(`spject24`,`الثقافه الجغرافيه`,jsonData["level2_G&H"].spj10[`L_Pdf${v}`],jsonData["level2_G&H"].spj10[`T_PDF${v}`],24); 
           fan(`spject25`,`تاريخ التعليم الابتدائي `,jsonData["level2_G&H"].spj11[`L_Pdf${v}`],jsonData["level2_G&H"].spj11[`T_PDF${v}`],25);
           fan(`spject26`,`مهارات تواصل 4`,jsonData["level2_G&H"].spj12[`L_Pdf${v}`],jsonData["level2_G&H"].spj12[`T_PDF${v}`],26); 
           fan(`spject27`,`تدريس مصغر1`,jsonData["level2_G&H"].spj13[`L_Pdf${v}`],jsonData["level2_G&H"].spj13[`T_PDF${v}`],27);
           fan(`spject28`,`تدريب ميداني2`,jsonData["level2_G&H"].spj14[`L_Pdf${v}`],jsonData["level2_G&H"].spj14[`T_PDF${v}`],28);     
          //مواد المستوي الثالث 
        fan(`spject32`,`القيادة التربوية للمعلم في الفصل و المدرسة`,jsonData["level3_G&H"].Adm_0364[`L_Pdf${v}`],jsonData["level3_G&H"].Adm_0364[`T_PDF${v}`],32) 
        fan(`spject33`,`نظام التعليم في مصر و الاتجاهات المعاصرة`,jsonData["level3_G&H"].Comp_0262[`L_Pdf${v}`],jsonData["level3_G&H"].Comp_0262[`T_PDF${v}`],33) 
        fan(`spject34`,` تدريب ميدانى 5`,jsonData["level3_G&H"].Curr_06612[`L_Pdf${v}`],jsonData["level3_G&H"].Curr_06612[`T_PDF${v}`],34) 
        fan(`spject35`,` تدريس مصغر 4`,jsonData["level3_G&H"].Curr_06613[`L_Pdf${v}`],jsonData["level3_G&H"].Curr_06613[`T_PDF${v}`],35) 
        fan(`spject36`,`استراتيجيات التعليم النشط في مجال التخصص`,jsonData["level3_G&H"].Curr_06614[`L_Pdf${v}`],jsonData["level3_G&H"].Curr_06614[`T_PDF${v}`],36) 
        fan(`spject37`,`الاتجاهات المعاصرة في النظرية التربوية في الفلسفة و علم الاجتماع`,jsonData["level3_G&H"].Ed_0169[`L_Pdf${v}`],jsonData["level3_G&H"].Ed_0169[`T_PDF${v}`],37) 
        fan(`spject38`,`التقويم الشامل لطفل المرحلة الابتدائية`,jsonData["level3_G&H"].EdPsy_0464[`L_Pdf${v}`],jsonData["level3_G&H"].EdPsy_0464[`T_PDF${v}`],38) 
        fan(`spject39`,`جغرافيا العالم العربي`,jsonData["level3_G&H"].SS11_623[`L_Pdf${v}`],jsonData["level3_G&H"].SS11_623[`T_PDF${v}`],39)
        fan(`spject40`,`جغرافيا العالم`,jsonData["level3_G&H"].SS_11819[`L_Pdf${v}`],jsonData["level3_G&H"].SS_11819[`T_PDF${v}`],40) 
        fan(`spject41`,`سكشن استراتيجيات التعلم النشط`,jsonData["level3_G&H"].spj_10[`L_Pdf${v}`],jsonData["level3_G&H"].spj_10[`T_PDF${v}`],41) 
        fan(`spject42`,`سكشن التقويم الشامل لطفل المرحله الابتدائيه `,jsonData["level3_G&H"].spj_11[`L_Pdf${v}`],jsonData["level3_G&H"].spj_11[`T_PDF${v}`],42) 
        fan(`spject43`,`تدريب ميداني 4`,jsonData["level3_G&H"].spj_12[`L_Pdf${v}`],jsonData["level3_G&H"].spj_12[`T_PDF${v}`],43) 
        fan(`spject44`,`تدريس مصغر 3`,jsonData["level3_G&H"].spj_13[`L_Pdf${v}`],jsonData["level3_G&H"].spj_13[`T_PDF${v}`],44) 

                //مواد المستوي الرابع
        fan(`spject45`,`قضايا بيئيه `,jsonData["level4_G&H"].spj_1[`L_Pdf${v}`],jsonData["level4_G&H"].spj_1[`T_PDF${v}`],45) 
        fan(`spject46`,`تطبيقات تكنولوجيا الاتصال في التخصص`,jsonData["level4_G&H"].spj_2[`L_Pdf${v}`],jsonData["level4_G&H"].spj_2[`T_PDF${v}`],46) 
                fan(`spject47`,`سكشن تطبيقات تكنولوجيا الاتصال في التخصص `,jsonData["level4_G&H"].spj_3[`L_Pdf${v}`],jsonData["level4_G&H"].spj_3[`T_PDF${v}`],47) 
              }
            )
          }
         // اضافة الصوت في الموقع
        voice.addEventListener("click",()=>{
          voice.style.background = "#ffffff55";
          exam.style.background = "#123";
          viduo.style.background = "#123";
          pdf.style.background = "#123";

          con = "تسجيلا صوتيه";
          for (let v = 0; v < 21 ; v++){
            function fan (type1,type2,type3,type4,type5){ 
              if(localStorage.getItem(type1) === type2){
                let select = document.querySelector(`.lecture${type5}`);
                select.children[0].textContent = con;
                let option = document.querySelector(`.lecture${type5} .option${v}`);
                option.value = type3;
                option.textContent = type4;
                select.appendChild(option);
                option.style.display = "none";
                if(option.textContent !== ""){
                  option.style.display = "inline";
                }
                let iframe = document.querySelector(".iframe");
                let iframe_close = document.querySelector(".iframe_close");
                iframe_close.addEventListener("click",()=>{
                  iframe.style.display = "none";
                })
                select.addEventListener("change", () => {
                  let iframe1 = document.querySelector(".iframe1")
                    iframe.style.display = "grid";
                    iframe1.src = select.value;
                });
                
              }
            }
             // مواد المستوي الاول 
            fan(`spject0`,` مهارات التواصل باللغه العربيه1`,jsonData["level1_G&H"].spj1[`L_voice${v}`],jsonData["level1_G&H"].spj1[`T_voice${v}`],0);
            fan(`spject1`,`العمليات الرياضيه الاساسيه `,jsonData["level1_G&H"].spj2[`L_voice${v}`],jsonData["level1_G&H"].spj2[`T_voice${v}`],1);
            fan(`spject2`,` مفاهيم علوم الحياه `,jsonData["level1_G&H"].spj3[`L_voice${v}`],jsonData["level1_G&H"].spj3[`T_voice${v}`],2);
            fan(`spject3`,`الاداره الرقميه  `,jsonData["level1_G&H"].spj4[`L_voice${v}`],jsonData["level1_G&H"].spj4[`T_voice${v}`],3); 
            fan(`spject4`,`اخلاقيات مهنة التعليم `,jsonData["level1_G&H"].spj5[`L_voice${v}`],jsonData["level1_G&H"].spj5[`T_voice${v}`],4); 
            fan(`spject5`,`ثقافه تاريخيه `,jsonData["level1_G&H"].spj6[`L_voice${v}`],jsonData["level1_G&H"].spj6[`T_voice${v}`],5);
            fan(`spject6`,` التربيه و المجتمع `,jsonData["level1_G&H"].spj7[`L_voice${v}`],jsonData["level1_G&H"].spj7[`T_voice${v}`],6); 
            fan(`spject7`,` فرص العمل التشاركي`,jsonData["level1_G&H"].spj8[`L_voice${v}`],jsonData["level1_G&H"].spj8[`T_voice${v}`],7);
            fan(`spject8`,`مبادي الاقصاد `,jsonData["level1_G&H"].spj9[`L_voice${v}`],jsonData["level1_G&H"].spj9[`T_voice${v}`],8);
            fan(`spject9`,`الصحه النفسيه لطفل المرحله الابتدائيه`,jsonData["level1_G&H"].spj10[`L_voice${v}`],jsonData["level1_G&H"].spj10[`T_voice${v}`],9); 
            fan(`spject10`,`سكشن العمليات الرياضيه الاساسيه`,jsonData["level1_G&H"].spj11[`L_voice${v}`],jsonData["level1_G&H"].spj11[`T_voice${v}`],10);
            fan(`spject11`,`سكشن مهارات تواصل باللغه العربيه 1`,jsonData["level1_G&H"].spj12[`L_voice${v}`],jsonData["level1_G&H"].spj12[`T_voice${v}`],11); 
            fan(`spject12`,`التفكير العلمي الفلسفي`,jsonData["level1_G&H"].spj13[`L_voice${v}`],jsonData["level1_G&H"].spj13[`T_voice${v}`],12);
            fan(`spject13`,`مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj14[`L_voice${v}`],jsonData["level1_G&H"].spj14[`T_voice${v}`],13); 
            fan(`spject14`,`سكشن مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj15[`L_voice${v}`],jsonData["level1_G&H"].spj15[`T_voice${v}`],14);
              //مواد المستوي الثاني
            fan(`spject15`,`تدريس مصغر 2`,jsonData["level2_G&H"].spj1[`L_voice${v}`],jsonData["level2_G&H"].spj1[`T_voice${v}`],15);
            fan(`spject16`,`تكنولوجيا الاتصال و التعليم عن بعد`,jsonData["level2_G&H"].spj2[`L_voice${v}`],jsonData["level2_G&H"].spj2[`T_voice${v}`],16);
            fan(`spject17`,`سكشن تكنولوجيا الاتصال و التعليم عن بعد `,jsonData["level2_G&H"].spj3[`L_voice${v}`],jsonData["level2_G&H"].spj3[`T_voice${v}`],17);
            fan(`spject18`,`سكشن المدخل البيئي في التدريس `,jsonData["level2_G&H"].spj4[`L_voice${v}`],jsonData["level2_G&H"].spj4[`T_voice${v}`],18); 
            fan(`spject19`,`اللغة الانجليزيه`,jsonData["level2_G&H"].spj5[`L_voice${v}`],jsonData["level2_G&H"].spj5[`T_voice${v}`],19); 
            fan(`spject20`,`المدخل البيئي في التدريس`,jsonData["level2_G&H"].spj6[`L_voice${v}`],jsonData["level2_G&H"].spj6[`T_voice${v}`],20);
            fan(`spject21`,`سيكلوجية اللعب `,jsonData["level2_G&H"].spj7[`L_voice${v}`],jsonData["level2_G&H"].spj7[`T_voice${v}`],21); 
            fan(`spject22`,`تدريب ميداني3`,jsonData["level2_G&H"].spj8[`L_voice${v}`],jsonData["level2_G&H"].spj8[`T_voice${v}`],22);
            fan(`spject23`,`مهارات التواصل 3`,jsonData["level2_G&H"].spj9[`L_voice${v}`],jsonData["level2_G&H"].spj9[`T_voice${v}`],23);
            fan(`spject24`,`الثقافه الجغرافيه`,jsonData["level2_G&H"].spj10[`L_voice${v}`],jsonData["level2_G&H"].spj10[`T_voice${v}`],24); 
            fan(`spject25`,`تاريخ التعليم الابتدائي `,jsonData["level2_G&H"].spj11[`L_voice${v}`],jsonData["level2_G&H"].spj11[`T_voice${v}`],25);
            fan(`spject26`,`مهارات تواصل 4`,jsonData["level2_G&H"].spj12[`L_voice${v}`],jsonData["level2_G&H"].spj12[`T_voice${v}`],26); 
            fan(`spject27`,`تدريس مصغر1`,jsonData["level2_G&H"].spj13[`L_voice${v}`],jsonData["level2_G&H"].spj13[`T_voice${v}`],27);
            fan(`spject28`,`تدريب ميداني2`,jsonData["level2_G&H"].spj14[`L_voice${v}`],jsonData["level2_G&H"].spj14[`T_voice${v}`],28);     
             //مواد المستوي الثالث 
           fan(`spject32`,`القيادة التربوية للمعلم في الفصل و المدرسة`,jsonData["level3_G&H"].Adm_0364[`L_voice${v}`],jsonData["level3_G&H"].Adm_0364[`T_voice${v}`],32) 
           fan(`spject33`,`نظام التعليم في مصر و الاتجاهات المعاصرة`,jsonData["level3_G&H"].Comp_0262[`L_voice${v}`],jsonData["level3_G&H"].Comp_0262[`T_voice${v}`],33) 
           fan(`spject34`,` تدريب ميدانى 5`,jsonData["level3_G&H"].Curr_06612[`L_voice${v}`],jsonData["level3_G&H"].Curr_06612[`T_voice${v}`],34) 
           fan(`spject35`,` تدريس مصغر 4`,jsonData["level3_G&H"].Curr_06613[`L_voice${v}`],jsonData["level3_G&H"].Curr_06613[`T_voice${v}`],35) 
           fan(`spject36`,`استراتيجيات التعليم النشط في مجال التخصص`,jsonData["level3_G&H"].Curr_06614[`L_voice${v}`],jsonData["level3_G&H"].Curr_06614[`T_voice${v}`],36) 
           fan(`spject37`,`الاتجاهات المعاصرة في النظرية التربوية في الفلسفة و علم الاجتماع`,jsonData["level3_G&H"].Ed_0169[`L_voice${v}`],jsonData["level3_G&H"].Ed_0169[`T_voice${v}`],37) 
           fan(`spject38`,`التقويم الشامل لطفل المرحلة الابتدائية`,jsonData["level3_G&H"].EdPsy_0464[`L_voice${v}`],jsonData["level3_G&H"].EdPsy_0464[`T_voice${v}`],38) 
           fan(`spject39`,`جغرافيا العالم العربي`,jsonData["level3_G&H"].SS11_623[`L_voice${v}`],jsonData["level3_G&H"].SS11_623[`T_voice${v}`],39)
           fan(`spject40`,`جغرافيا العالم`,jsonData["level3_G&H"].SS_11819[`L_voice${v}`],jsonData["level3_G&H"].SS_11819[`T_voice${v}`],40) 
           fan(`spject41`,`سكشن استراتيجيات التعلم النشط`,jsonData["level3_G&H"].spj_10[`L_voice${v}`],jsonData["level3_G&H"].spj_10[`T_voice${v}`],41) 
           fan(`spject42`,`سكشن التقويم الشامل لطفل المرحله الابتدائيه `,jsonData["level3_G&H"].spj_11[`L_voice${v}`],jsonData["level3_G&H"].spj_11[`T_voice${v}`],42) 
           fan(`spject43`,`تدريب ميداني 4`,jsonData["level3_G&H"].spj_12[`L_voice${v}`],jsonData["level3_G&H"].spj_12[`T_voice${v}`],43) 
           fan(`spject44`,`تدريس مصغر 3`,jsonData["level3_G&H"].spj_13[`L_voice${v}`],jsonData["level3_G&H"].spj_13[`T_voice${v}`],44) 
   
                   //مواد المستوي الرابع
            fan(`spject45`,`قضايا بيئيه `,jsonData["level4_G&H"].spj_1[`L_voice${v}`],jsonData["level4_G&H"].spj_1[`T_voice${v}`],45) 
            fan(`spject46`,`تطبيقات تكنولوجيا الاتصال في التخصص`,jsonData["level4_G&H"].spj_2[`L_voice${v}`],jsonData["level4_G&H"].spj_2[`T_voice${v}`],46) 
            fan(`spject47`,`سكشن تطبيقات تكنولوجيا الاتصال في التخصص `,jsonData["level4_G&H"].spj_3[`L_voice${v}`],jsonData["level4_G&H"].spj_3[`T_voice${v}`],47) 
          }
  
         })
  
        //اضافة الامتحنات الي الموقع
        viduo.addEventListener("click",()=>{
          voice.style.background = "#123";
          exam.style.background = "#123";
          viduo.style.background = "#ffffff55";
          pdf.style.background = "#123";
          
          con = "فديوهات";
          for (let v = 0; v < 21 ; v++){
            function fan (type1,type2,type3,type4,type5){ 
              if(localStorage.getItem(type1) === type2){
                let select = document.querySelector(`.lecture${type5}`);
                select.children[0].textContent = con;
                let option = document.querySelector(`.lecture${type5} .option${v}`);
                option.value = type3;
                option.textContent = type4;
                select.appendChild(option);
                option.style.display = "none";
                if(option.textContent !== ""){
                  option.style.display = "inline";
                }
                let iframe = document.querySelector(".iframe");
                let iframe_close = document.querySelector(".iframe_close");
                iframe_close.addEventListener("click",()=>{
                  iframe.style.display = "none";
                })
                select.addEventListener("change", () => {
                  let iframe1 = document.querySelector(".iframe1")
                    iframe.style.display = "grid";
                    iframe1.src = select.value;
                });
                
              }
            }
             // مواد المستوي الاول 
            fan(`spject0`,` مهارات التواصل باللغه العربيه1`,jsonData["level1_G&H"].spj1[`L_video${v}`],jsonData["level1_G&H"].spj1[`T_video${v}`],0);
            fan(`spject1`,`العمليات الرياضيه الاساسيه `,jsonData["level1_G&H"].spj2[`L_video${v}`],jsonData["level1_G&H"].spj2[`T_video${v}`],1);
            fan(`spject2`,` مفاهيم علوم الحياه `,jsonData["level1_G&H"].spj3[`L_video${v}`],jsonData["level1_G&H"].spj3[`T_video${v}`],2);
            fan(`spject3`,`الاداره الرقميه  `,jsonData["level1_G&H"].spj4[`L_video${v}`],jsonData["level1_G&H"].spj4[`T_video${v}`],3); 
            fan(`spject4`,`اخلاقيات مهنة التعليم `,jsonData["level1_G&H"].spj5[`L_video${v}`],jsonData["level1_G&H"].spj5[`T_video${v}`],4); 
            fan(`spject5`,`ثقافه تاريخيه `,jsonData["level1_G&H"].spj6[`L_video${v}`],jsonData["level1_G&H"].spj6[`T_video${v}`],5);
            fan(`spject6`,` التربيه و المجتمع `,jsonData["level1_G&H"].spj7[`L_video${v}`],jsonData["level1_G&H"].spj7[`T_video${v}`],6); 
            fan(`spject7`,` فرص العمل التشاركي`,jsonData["level1_G&H"].spj8[`L_video${v}`],jsonData["level1_G&H"].spj8[`T_video${v}`],7);
            fan(`spject8`,`مبادي الاقصاد `,jsonData["level1_G&H"].spj9[`L_video${v}`],jsonData["level1_G&H"].spj9[`T_video${v}`],8);
            fan(`spject9`,`الصحه النفسيه لطفل المرحله الابتدائيه`,jsonData["level1_G&H"].spj10[`L_video${v}`],jsonData["level1_G&H"].spj10[`T_video${v}`],9); 
            fan(`spject10`,`سكشن العمليات الرياضيه الاساسيه`,jsonData["level1_G&H"].spj11[`L_video${v}`],jsonData["level1_G&H"].spj11[`T_video${v}`],10);
            fan(`spject11`,`سكشن مهارات تواصل باللغه العربيه 1`,jsonData["level1_G&H"].spj12[`L_video${v}`],jsonData["level1_G&H"].spj12[`T_video${v}`],11); 
            fan(`spject12`,`التفكير العلمي الفلسفي`,jsonData["level1_G&H"].spj13[`L_video${v}`],jsonData["level1_G&H"].spj13[`T_video${v}`],12);
            fan(`spject13`,`مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj14[`L_video${v}`],jsonData["level1_G&H"].spj14[`T_video${v}`],13); 
            fan(`spject14`,`سكشن مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj15[`L_video${v}`],jsonData["level1_G&H"].spj15[`T_video${v}`],14);
              //مواد المستوي الثاني
            fan(`spject15`,`تدريس مصغر 2`,jsonData["level2_G&H"].spj1[`L_video${v}`],jsonData["level2_G&H"].spj1[`T_video${v}`],15);
            fan(`spject16`,`تكنولوجيا الاتصال و التعليم عن بعد`,jsonData["level2_G&H"].spj2[`L_video${v}`],jsonData["level2_G&H"].spj2[`T_video${v}`],16);
            fan(`spject17`,`سكشن تكنولوجيا الاتصال و التعليم عن بعد `,jsonData["level2_G&H"].spj3[`L_video${v}`],jsonData["level2_G&H"].spj3[`T_video${v}`],17);
            fan(`spject18`,`سكشن المدخل البيئي في التدريس `,jsonData["level2_G&H"].spj4[`L_video${v}`],jsonData["level2_G&H"].spj4[`T_video${v}`],18); 
            fan(`spject19`,`اللغة الانجليزيه`,jsonData["level2_G&H"].spj5[`L_video${v}`],jsonData["level2_G&H"].spj5[`T_video${v}`],19); 
            fan(`spject20`,`المدخل البيئي في التدريس`,jsonData["level2_G&H"].spj6[`L_video${v}`],jsonData["level2_G&H"].spj6[`T_video${v}`],20);
            fan(`spject21`,`سيكلوجية اللعب `,jsonData["level2_G&H"].spj7[`L_video${v}`],jsonData["level2_G&H"].spj7[`T_video${v}`],21); 
            fan(`spject22`,`تدريب ميداني3`,jsonData["level2_G&H"].spj8[`L_video${v}`],jsonData["level2_G&H"].spj8[`T_video${v}`],22);
            fan(`spject23`,`مهارات التواصل 3`,jsonData["level2_G&H"].spj9[`L_video${v}`],jsonData["level2_G&H"].spj9[`T_video${v}`],23);
            fan(`spject24`,`الثقافه الجغرافيه`,jsonData["level2_G&H"].spj10[`L_video${v}`],jsonData["level2_G&H"].spj10[`T_video${v}`],24); 
            fan(`spject25`,`تاريخ التعليم الابتدائي `,jsonData["level2_G&H"].spj11[`L_video${v}`],jsonData["level2_G&H"].spj11[`T_video${v}`],25);
            fan(`spject26`,`مهارات تواصل 4`,jsonData["level2_G&H"].spj12[`L_video${v}`],jsonData["level2_G&H"].spj12[`T_video${v}`],26); 
            fan(`spject27`,`تدريس مصغر1`,jsonData["level2_G&H"].spj13[`L_video${v}`],jsonData["level2_G&H"].spj13[`T_video${v}`],27);
            fan(`spject28`,`تدريب ميداني2`,jsonData["level2_G&H"].spj14[`L_video${v}`],jsonData["level2_G&H"].spj14[`T_video${v}`],28);     
             //مواد المستوي الثالث 
           fan(`spject32`,`القيادة التربوية للمعلم في الفصل و المدرسة`,jsonData["level3_G&H"].Adm_0364[`L_video${v}`],jsonData["level3_G&H"].Adm_0364[`T_video${v}`],32) 
           fan(`spject33`,`نظام التعليم في مصر و الاتجاهات المعاصرة`,jsonData["level3_G&H"].Comp_0262[`L_video${v}`],jsonData["level3_G&H"].Comp_0262[`T_video${v}`],33) 
           fan(`spject34`,` تدريب ميدانى 5`,jsonData["level3_G&H"].Curr_06612[`L_video${v}`],jsonData["level3_G&H"].Curr_06612[`T_video${v}`],34) 
           fan(`spject35`,` تدريس مصغر 4`,jsonData["level3_G&H"].Curr_06613[`L_video${v}`],jsonData["level3_G&H"].Curr_06613[`T_video${v}`],35) 
           fan(`spject36`,`استراتيجيات التعليم النشط في مجال التخصص`,jsonData["level3_G&H"].Curr_06614[`L_video${v}`],jsonData["level3_G&H"].Curr_06614[`T_video${v}`],36) 
           fan(`spject37`,`الاتجاهات المعاصرة في النظرية التربوية في الفلسفة و علم الاجتماع`,jsonData["level3_G&H"].Ed_0169[`L_video${v}`],jsonData["level3_G&H"].Ed_0169[`T_video${v}`],37) 
           fan(`spject38`,`التقويم الشامل لطفل المرحلة الابتدائية`,jsonData["level3_G&H"].EdPsy_0464[`L_video${v}`],jsonData["level3_G&H"].EdPsy_0464[`T_video${v}`],38) 
           fan(`spject39`,`جغرافيا العالم العربي`,jsonData["level3_G&H"].SS11_623[`L_video${v}`],jsonData["level3_G&H"].SS11_623[`T_video${v}`],39)
           fan(`spject40`,`جغرافيا العالم`,jsonData["level3_G&H"].SS_11819[`L_video${v}`],jsonData["level3_G&H"].SS_11819[`T_video${v}`],40) 
           fan(`spject41`,`سكشن استراتيجيات التعلم النشط`,jsonData["level3_G&H"].spj_10[`L_video${v}`],jsonData["level3_G&H"].spj_10[`T_video${v}`],41) 
           fan(`spject42`,`سكشن التقويم الشامل لطفل المرحله الابتدائيه `,jsonData["level3_G&H"].spj_11[`L_video${v}`],jsonData["level3_G&H"].spj_11[`T_video${v}`],42) 
           fan(`spject43`,`تدريب ميداني 4`,jsonData["level3_G&H"].spj_12[`L_video${v}`],jsonData["level3_G&H"].spj_12[`T_video${v}`],43) 
           fan(`spject44`,`تدريس مصغر 3`,jsonData["level3_G&H"].spj_13[`L_video${v}`],jsonData["level3_G&H"].spj_13[`T_video${v}`],44) 
   
                   //مواد المستوي الرابع
            fan(`spject45`,`قضايا بيئيه `,jsonData["level4_G&H"].spj_1[`L_video${v}`],jsonData["level4_G&H"].spj_1[`T_video${v}`],45) 
            fan(`spject46`,`تطبيقات تكنولوجيا الاتصال في التخصص`,jsonData["level4_G&H"].spj_2[`L_video${v}`],jsonData["level4_G&H"].spj_2[`T_video${v}`],46) 
            fan(`spject47`,`سكشن تطبيقات تكنولوجيا الاتصال في التخصص `,jsonData["level4_G&H"].spj_3[`L_video${v}`],jsonData["level4_G&H"].spj_3[`T_video${v}`],47) 
          }
  
        }) 
        // اضافة الامتحانات الي الموقع
        exam.addEventListener("click",()=>{
          voice.style.background = "#123";
          exam.style.background = "#ffffff55";
          viduo.style.background = "#123";
          pdf.style.background = "#123";
           
          con = "امتحانات";
          for (let v = 0; v < 21 ; v++){
            function fan (type1,type2,type3,type4,type5){ 
              if(localStorage.getItem(type1) === type2){
                let select = document.querySelector(`.lecture${type5}`);
                select.children[0].textContent = con;
                let option = document.querySelector(`.lecture${type5} .option${v}`);
                option.value = type3;
                option.textContent = type4;
                select.appendChild(option);
                option.style.display = "none";
                if(option.textContent !== ""){
                  option.style.display = "inline";
                }
                let iframe = document.querySelector(".iframe");
                let iframe_close = document.querySelector(".iframe_close");
                iframe_close.addEventListener("click",()=>{
                  iframe.style.display = "none";
                })
                select.addEventListener("change", () => {
                  let iframe1 = document.querySelector(".iframe1")
                    iframe.style.display = "grid";
                    iframe1.src = select.value;
                });
                
              }
            }
             // مواد المستوي الاول 
            fan(`spject0`,` مهارات التواصل باللغه العربيه1`,jsonData["level1_G&H"].spj1[`L_Exam${v}`],jsonData["level1_G&H"].spj1[`T_Exam${v}`],0);
            fan(`spject1`,`العمليات الرياضيه الاساسيه `,jsonData["level1_G&H"].spj2[`L_Exam${v}`],jsonData["level1_G&H"].spj2[`T_Exam${v}`],1);
            fan(`spject2`,` مفاهيم علوم الحياه `,jsonData["level1_G&H"].spj3[`L_Exam${v}`],jsonData["level1_G&H"].spj3[`T_Exam${v}`],2);
            fan(`spject3`,`الاداره الرقميه  `,jsonData["level1_G&H"].spj4[`L_Exam${v}`],jsonData["level1_G&H"].spj4[`T_Exam${v}`],3); 
            fan(`spject4`,`اخلاقيات مهنة التعليم `,jsonData["level1_G&H"].spj5[`L_Exam${v}`],jsonData["level1_G&H"].spj5[`T_Exam${v}`],4); 
            fan(`spject5`,`ثقافه تاريخيه `,jsonData["level1_G&H"].spj6[`L_Exam${v}`],jsonData["level1_G&H"].spj6[`T_Exam${v}`],5);
            fan(`spject6`,` التربيه و المجتمع `,jsonData["level1_G&H"].spj7[`L_Exam${v}`],jsonData["level1_G&H"].spj7[`T_Exam${v}`],6); 
            fan(`spject7`,` فرص العمل التشاركي`,jsonData["level1_G&H"].spj8[`L_Exam${v}`],jsonData["level1_G&H"].spj8[`T_Exam${v}`],7);
            fan(`spject8`,`مبادي الاقصاد `,jsonData["level1_G&H"].spj9[`L_Exam${v}`],jsonData["level1_G&H"].spj9[`T_Exam${v}`],8);
            fan(`spject9`,`الصحه النفسيه لطفل المرحله الابتدائيه`,jsonData["level1_G&H"].spj10[`L_Exam${v}`],jsonData["level1_G&H"].spj10[`T_Exam${v}`],9); 
            fan(`spject10`,`سكشن العمليات الرياضيه الاساسيه`,jsonData["level1_G&H"].spj11[`L_Exam${v}`],jsonData["level1_G&H"].spj11[`T_Exam${v}`],10);
            fan(`spject11`,`سكشن مهارات تواصل باللغه العربيه 1`,jsonData["level1_G&H"].spj12[`L_Exam${v}`],jsonData["level1_G&H"].spj12[`T_Exam${v}`],11); 
            fan(`spject12`,`التفكير العلمي الفلسفي`,jsonData["level1_G&H"].spj13[`L_Exam${v}`],jsonData["level1_G&H"].spj13[`T_Exam${v}`],12);
            fan(`spject13`,`مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj14[`L_Exam${v}`],jsonData["level1_G&H"].spj14[`T_Exam${v}`],13); 
            fan(`spject14`,`سكشن مهارات تواصل باللغه العربيه 2`,jsonData["level1_G&H"].spj15[`L_Exam${v}`],jsonData["level1_G&H"].spj15[`T_Exam${v}`],14);
              //مواد المستوي الثاني
            fan(`spject15`,`تدريس مصغر 2`,jsonData["level2_G&H"].spj1[`L_Exam${v}`],jsonData["level2_G&H"].spj1[`T_Exam${v}`],15);
            fan(`spject16`,`تكنولوجيا الاتصال و التعليم عن بعد`,jsonData["level2_G&H"].spj2[`L_Exam${v}`],jsonData["level2_G&H"].spj2[`T_Exam${v}`],16);
            fan(`spject17`,`سكشن تكنولوجيا الاتصال و التعليم عن بعد `,jsonData["level2_G&H"].spj3[`L_Exam${v}`],jsonData["level2_G&H"].spj3[`T_Exam${v}`],17);
            fan(`spject18`,`سكشن المدخل البيئي في التدريس `,jsonData["level2_G&H"].spj4[`L_Exam${v}`],jsonData["level2_G&H"].spj4[`T_Exam${v}`],18); 
            fan(`spject19`,`اللغة الانجليزيه`,jsonData["level2_G&H"].spj5[`L_Exam${v}`],jsonData["level2_G&H"].spj5[`T_Exam${v}`],19); 
            fan(`spject20`,`المدخل البيئي في التدريس`,jsonData["level2_G&H"].spj6[`L_Exam${v}`],jsonData["level2_G&H"].spj6[`T_Exam${v}`],20);
            fan(`spject21`,`سيكلوجية اللعب `,jsonData["level2_G&H"].spj7[`L_Exam${v}`],jsonData["level2_G&H"].spj7[`T_Exam${v}`],21); 
            fan(`spject22`,`تدريب ميداني3`,jsonData["level2_G&H"].spj8[`L_Exam${v}`],jsonData["level2_G&H"].spj8[`T_Exam${v}`],22);
            fan(`spject23`,`مهارات التواصل 3`,jsonData["level2_G&H"].spj9[`L_Exam${v}`],jsonData["level2_G&H"].spj9[`T_Exam${v}`],23);
            fan(`spject24`,`الثقافه الجغرافيه`,jsonData["level2_G&H"].spj10[`L_Exam${v}`],jsonData["level2_G&H"].spj10[`T_Exam${v}`],24); 
            fan(`spject25`,`تاريخ التعليم الابتدائي `,jsonData["level2_G&H"].spj11[`L_Exam${v}`],jsonData["level2_G&H"].spj11[`T_Exam${v}`],25);
            fan(`spject26`,`مهارات تواصل 4`,jsonData["level2_G&H"].spj12[`L_Exam${v}`],jsonData["level2_G&H"].spj12[`T_Exam${v}`],26); 
            fan(`spject27`,`تدريس مصغر1`,jsonData["level2_G&H"].spj13[`L_Exam${v}`],jsonData["level2_G&H"].spj13[`T_Exam${v}`],27);
            fan(`spject28`,`تدريب ميداني2`,jsonData["level2_G&H"].spj14[`L_Exam${v}`],jsonData["level2_G&H"].spj14[`T_Exam${v}`],28);     
             //مواد المستوي الثالث 
           fan(`spject32`,`القيادة التربوية للمعلم في الفصل و المدرسة`,jsonData["level3_G&H"].Adm_0364[`L_Exam${v}`],jsonData["level3_G&H"].Adm_0364[`T_Exam${v}`],32) 
           fan(`spject33`,`نظام التعليم في مصر و الاتجاهات المعاصرة`,jsonData["level3_G&H"].Comp_0262[`L_Exam${v}`],jsonData["level3_G&H"].Comp_0262[`T_Exam${v}`],33) 
           fan(`spject34`,` تدريب ميدانى 5`,jsonData["level3_G&H"].Curr_06612[`L_Exam${v}`],jsonData["level3_G&H"].Curr_06612[`T_Exam${v}`],34) 
           fan(`spject35`,` تدريس مصغر 4`,jsonData["level3_G&H"].Curr_06613[`L_Exam${v}`],jsonData["level3_G&H"].Curr_06613[`T_Exam${v}`],35) 
           fan(`spject36`,`استراتيجيات التعليم النشط في مجال التخصص`,jsonData["level3_G&H"].Curr_06614[`L_Exam${v}`],jsonData["level3_G&H"].Curr_06614[`T_Exam${v}`],36) 
           fan(`spject37`,`الاتجاهات المعاصرة في النظرية التربوية في الفلسفة و علم الاجتماع`,jsonData["level3_G&H"].Ed_0169[`L_Exam${v}`],jsonData["level3_G&H"].Ed_0169[`T_Exam${v}`],37) 
           fan(`spject38`,`التقويم الشامل لطفل المرحلة الابتدائية`,jsonData["level3_G&H"].EdPsy_0464[`L_Exam${v}`],jsonData["level3_G&H"].EdPsy_0464[`T_Exam${v}`],38) 
           fan(`spject39`,`جغرافيا العالم العربي`,jsonData["level3_G&H"].SS11_623[`L_Exam${v}`],jsonData["level3_G&H"].SS11_623[`T_Exam${v}`],39)
           fan(`spject40`,`جغرافيا العالم`,jsonData["level3_G&H"].SS_11819[`L_Exam${v}`],jsonData["level3_G&H"].SS_11819[`T_Exam${v}`],40) 
           fan(`spject41`,`سكشن استراتيجيات التعلم النشط`,jsonData["level3_G&H"].spj_10[`L_Exam${v}`],jsonData["level3_G&H"].spj_10[`T_Exam${v}`],41) 
           fan(`spject42`,`سكشن التقويم الشامل لطفل المرحله الابتدائيه `,jsonData["level3_G&H"].spj_11[`L_Exam${v}`],jsonData["level3_G&H"].spj_11[`T_Exam${v}`],42) 
           fan(`spject43`,`تدريب ميداني 4`,jsonData["level3_G&H"].spj_12[`L_Exam${v}`],jsonData["level3_G&H"].spj_12[`T_Exam${v}`],43) 
           fan(`spject44`,`تدريس مصغر 3`,jsonData["level3_G&H"].spj_13[`L_Exam${v}`],jsonData["level3_G&H"].spj_13[`T_Exam${v}`],44) 
   
                   //مواد المستوي الرابع
            fan(`spject45`,`قضايا بيئيه `,jsonData["level4_G&H"].spj_1[`L_Exam${v}`],jsonData["level4_G&H"].spj_1[`T_Exam${v}`],45) 
            fan(`spject46`,`تطبيقات تكنولوجيا الاتصال في التخصص`,jsonData["level4_G&H"].spj_2[`L_Exam${v}`],jsonData["level4_G&H"].spj_2[`T_Exam${v}`],46) 
            fan(`spject47`,`سكشن تطبيقات تكنولوجيا الاتصال في التخصص `,jsonData["level4_G&H"].spj_3[`L_Exam${v}`],jsonData["level4_G&H"].spj_3[`T_Exam${v}`],47) 
          }
          
        })
      for(let i = 0; i < 66; i++){
        function sp(type1,type2,type3,type4,type5){
          switch(localStorage.getItem(type1)){
            case type2: document.querySelector(type3).href = type4;
            let td = document.querySelector(`.td${i}`);
            tr = document.querySelector(`.tr${type5}`).style.display = "table-row"
            let a = document.querySelector(`.a${i}`);
            td.textContent = localStorage.getItem(`spject${i}`)
            a.textContent = localStorage.getItem(`doc${i}`)
            break;
          }
        }
        // مواد المستوي الاول
        
          sp(`spject0`,` مهارات التواصل باللغه العربيه1`,`.a0`,jsonData["level1_G&H"].spj1.D_E,0)
          sp(`spject1`,`العمليات الرياضيه الاساسيه `,`.a1`,jsonData["level1_G&H"].spj2.D_E,1)
          sp(`spject2`,` مفاهيم علوم الحياه `,`.a2`,jsonData["level1_G&H"].spj3.D_E,2)
          sp(`spject3`,`الاداره الرقميه  `,`.a3`,jsonData["level1_G&H"].spj4.D_E,3)
          sp(`spject4`,`اخلاقيات مهنة التعليم `,`.a4`,jsonData["level1_G&H"].spj5.D_E,4)
          sp(`spject5`,`ثقافه تاريخيه `,`.a5`,jsonData["level1_G&H"].spj6.D_E,5)
          sp(`spject6`,` التربيه و المجتمع `,`.a6`,jsonData["level1_G&H"].spj7.D_E,6)
          sp(`spject7`,` فرص العمل التشاركي`,`.a7`,jsonData["level1_G&H"].spj8.D_E,7)
          sp(`spject8`,`مبادي الاقصاد `,`.a8`,jsonData["level1_G&H"].spj9.D_E,8)

          sp(`spject9`,`الصحه النفسيه لطفل المرحله الابتدائيه`,`.a9`,jsonData["level1_G&H"].spj10.D_E,9)
          sp(`spject10`,`سكشن العمليات الرياضيه الاساسيه`,`.a10`,jsonData["level1_G&H"].spj11.D_E,10)
          sp(`spject11`,`سكشن مهارات تواصل باللغه العربيه 1`,`.a11`,jsonData["level1_G&H"].spj12.D_E,11)
          sp(`spject12`,`التفكير العلمي الفلسفي`,`.a12`,jsonData["level1_G&H"].spj13.D_E,12)
          sp(`spject13`,`مهارات تواصل باللغه العربيه 2`,`.a13`,jsonData["level1_G&H"].spj14.D_E,13)
          sp(`spject14`,`سكشن مهارات تواصل باللغه العربيه 2`,`.a14`,jsonData["level1_G&H"].spj15.D_E,14)
          //مواد المستوي الثاني 
          sp(`spject15`,`تدريس مصغر 2`,`.a15`,jsonData["level2_G&H"].spj1.D_E,15)
          sp(`spject16`,`تكنولوجيا الاتصال و التعليم عن بعد`,`.a16`,jsonData["level2_G&H"].spj2.D_E,16)
          sp(`spject17`,`سكشن تكنولوجيا الاتصال و التعليم عن بعد `,`.a17`,jsonData["level2_G&H"].spj3.D_E,17)
          sp(`spject18`,`سكشن المدخل البيئي في التدريس `,`.a18`,jsonData["level2_G&H"].spj4.D_E,18)
          sp(`spject19`,`اللغة الانجليزيه`,`.a19`,jsonData["level2_G&H"].spj5.D_E,19)
          sp(`spject20`,`المدخل البيئي في التدريس`,`.a20`,jsonData["level2_G&H"].spj6.D_E,20)
          sp(`spject21`,`سيكلوجية اللعب `,`.a21`,jsonData["level2_G&H"].spj7.D_E,21)
          sp(`spject22`,`تدريب ميداني3`,`.a22`,jsonData["level2_G&H"].spj8.D_E,22)
          sp(`spject23`,`مهارات التواصل 3`,`.a23`,jsonData["level2_G&H"].spj9.D_E,23)

          sp(`spject24`,`الثقافه الجغرافيه`,`.a24`,jsonData["level2_G&H"].spj10.D_E,24)
          sp(`spject25`,`تاريخ التعليم الابتدائي `,`.a25`,jsonData["level2_G&H"].spj11.D_E,25)
          sp(`spject26`,`مهارات تواصل 4`,`.a26`,jsonData["level2_G&H"].spj12.D_E,26)
          sp(`spject27`,`تدريس مصغر1`,`.a27`,jsonData["level2_G&H"].spj13.D_E,27)
          sp(`spject28`,`تدريب ميداني2`,`.a28`,jsonData["level2_G&H"].spj14.D_E,28)
      
      
        //مواد المستوي الثالث
          sp(`spject32`,`القيادة التربوية للمعلم في الفصل و المدرسة`,`.a32`,jsonData["level3_G&H"].Adm_0364.D_E,32)
          sp(`spject33`,`نظام التعليم في مصر و الاتجاهات المعاصرة`,`.a33`,jsonData["level3_G&H"].Comp_0262.D_E,33)
          sp(`spject34`,` تدريب ميدانى 5`,`.a34`,jsonData["level3_G&H"].Curr_06612.D_E,34)
          sp(`spject35`,` تدريس مصغر 4`,`.a35`,jsonData["level3_G&H"].Curr_06613.D_E,35)
          sp(`spject36`,`استراتيجيات التعليم النشط في مجال التخصص`,`.a36`,jsonData["level3_G&H"].Curr_06614.D_E,36)
          sp(`spject37`,`الاتجاهات المعاصرة في النظرية التربوية في الفلسفة و علم الاجتماع`,`.a37`,jsonData["level3_G&H"].Ed_0169.D_E,37)
          sp(`spject38`,`التقويم الشامل لطفل المرحلة الابتدائية`,`.a38`,jsonData["level3_G&H"].EdPsy_0464.D_E,38)
          sp(`spject39`,`جغرافيا العالم العربي`,`.a39`,jsonData["level3_G&H"].SS11_623.D_E,39)
          sp(`spject40`,`جغرافيا العالم`,`.a40`,jsonData["level3_G&H"].SS_11819.D_E,40)
          sp(`spject41`,`سكشن استراتيجيات التعلم النشط`,`.a41`,jsonData["level3_G&H"].spj_10.D_E,41)
          sp(`spject42`,`سكشن التقويم الشامل لطفل المرحله الابتدائيه `,`.a42`,jsonData["level3_G&H"].spj_11.D_E,42)
          sp(`spject43`,`تدريب ميداني 4`,`.a43`,jsonData["level3_G&H"].spj_12.D_E,43)
          sp(`spject44`,`تدريس مصغر 3`,`.a44`,jsonData["level3_G&H"].spj_13.D_E,44)
         //مواد المستوي الرابع
         sp(`spject45`,`قضايا بيئيه `,`.a45`,jsonData["level4_G&H"].spj_1.D_E,45)
         sp(`spject46`,`تطبيقات تكنولوجيا الاتصال في التخصص`,`.a46`,jsonData["level4_G&H"].spj_2.D_E,46)
         sp(`spject47`,`سكشن تطبيقات تكنولوجيا الاتصال في التخصص `,`.a47`,jsonData["level4_G&H"].spj_3.D_E,47)
          //مواد المستوي الاول 
         let button = document.querySelector(".level");
          button.children[0].addEventListener("click", () => {
            let spject = document.querySelector(".span3");
            spject.children[1].children[0].textContent = jsonData["level1_G&H"].spj1.Name;
            spject.children[1].children[1].textContent = jsonData["level1_G&H"].spj2.Name;
            spject.children[1].children[2].textContent = jsonData["level1_G&H"].spj3.Name;
            spject.children[1].children[3].textContent = jsonData["level1_G&H"].spj4.Name;
            spject.children[1].children[4].textContent = jsonData["level1_G&H"].spj5.Name;
            spject.children[1].children[5].textContent = jsonData["level1_G&H"].spj6.Name;
            spject.children[1].children[6].textContent = jsonData["level1_G&H"].spj7.Name;
            spject.children[1].children[7].textContent = jsonData["level1_G&H"].spj8.Name;
            spject.children[1].children[8].textContent = jsonData["level1_G&H"].spj9.Name;
            spject.children[1].children[9].textContent = jsonData["level1_G&H"].spj10.Name;
            spject.children[1].children[10].textContent = jsonData["level1_G&H"].spj11.Name;
            spject.children[1].children[11].textContent = jsonData["level1_G&H"].spj12.Name;
            spject.children[1].children[12].textContent = jsonData["level1_G&H"].spj13.Name;
            spject.children[1].children[13].textContent = jsonData["level1_G&H"].spj14.Name;
            spject.children[1].children[14].textContent = jsonData["level1_G&H"].spj15.Name;


            spject.children[2].children[0].textContent = jsonData["level1_G&H"].spj1.D_T;
            spject.children[2].children[1].textContent = jsonData["level1_G&H"].spj2.D_T;
            spject.children[2].children[2].textContent = jsonData["level1_G&H"].spj3.D_T;
            spject.children[2].children[3].textContent = jsonData["level1_G&H"].spj4.D_T;
            spject.children[2].children[4].textContent = jsonData["level1_G&H"].spj5.D_T;
            spject.children[2].children[5].textContent = jsonData["level1_G&H"].spj6.D_T;
            spject.children[2].children[6].textContent = jsonData["level1_G&H"].spj7.D_T;
            spject.children[2].children[7].textContent = jsonData["level1_G&H"].spj8.D_T;
            spject.children[2].children[8].textContent = jsonData["level1_G&H"].spj9.D_T;
            spject.children[2].children[9].textContent = jsonData["level1_G&H"].spj10.D_T;
            spject.children[2].children[10].textContent = jsonData["level1_G&H"].spj11.D_T;
            spject.children[2].children[11].textContent = jsonData["level1_G&H"].spj12.D_T;
            spject.children[2].children[12].textContent = jsonData["level1_G&H"].spj13.D_T;
            spject.children[2].children[13].textContent = jsonData["level1_G&H"].spj14.D_T;
            spject.children[2].children[14].textContent = jsonData["level1_G&H"].spj15.D_T;
            for(let f = 0 ; f < 15; f++){ 
              spject.children[3].children[f].style.display = "inline";
              spject.children[2].children[f].style.display = "inline";
              spject.children[1].children[f].style.display = "inline"; 
              spject.children[3].children[f].addEventListener("click",()=>{
              localStorage.setItem(`spject${f}`,`${spject.children[1].children[f].textContent}`)
              localStorage.setItem(`doc${f}`,`${spject.children[2].children[f].textContent}`)
              spject.children[3].children[f].children[0].classList.remove("fa-check");
             })


            }
            for(let A = 15 ; A < 32; A++){
              spject.children[3].children[A].style.display = "none";
              spject.children[2].children[A].style.display = "none";
              spject.children[1].children[A].style.display = "none"; 
            }
            for(let S = 45 ; S < 48; S++){
              spject.children[3].children[S].style.display = "none";
              spject.children[2].children[S].style.display = "none";
              spject.children[1].children[S].style.display = "none";  
            }
            for(let M = 32; M < 45; M++){
              spject.children[2].children[M].style.display = "none";
              spject.children[1].children[M].style.display = "none";
              spject.children[3].children[M].style.display = "none"; 
           }
         
         
          })
          
        // مواد المستوي الثاني 
        button.children[1].addEventListener("click",()=>{
          let spject = document.querySelector(".span3");
          spject.children[1].children[15].textContent = jsonData["level2_G&H"].spj1.Name;
          spject.children[1].children[16].textContent = jsonData["level2_G&H"].spj2.Name;
          spject.children[1].children[17].textContent = jsonData["level2_G&H"].spj3.Name;
          spject.children[1].children[18].textContent = jsonData["level2_G&H"].spj4.Name;
          spject.children[1].children[19].textContent = jsonData["level2_G&H"].spj5.Name;
          spject.children[1].children[20].textContent = jsonData["level2_G&H"].spj6.Name;
          spject.children[1].children[21].textContent = jsonData["level2_G&H"].spj7.Name;
          spject.children[1].children[22].textContent = jsonData["level2_G&H"].spj8.Name;
          spject.children[1].children[23].textContent = jsonData["level2_G&H"].spj9.Name;
          spject.children[1].children[24].textContent = jsonData["level2_G&H"].spj10.Name;
          spject.children[1].children[25].textContent = jsonData["level2_G&H"].spj11.Name;
          spject.children[1].children[26].textContent = jsonData["level2_G&H"].spj12.Name;
          spject.children[1].children[27].textContent = jsonData["level2_G&H"].spj13.Name;
          spject.children[1].children[28].textContent = jsonData["level2_G&H"].spj14.Name;
  


          spject.children[2].children[15].textContent = jsonData["level2_G&H"].spj1.D_T;
          spject.children[2].children[16].textContent = jsonData["level2_G&H"].spj2.D_T;
          spject.children[2].children[17].textContent = jsonData["level2_G&H"].spj3.D_T;
          spject.children[2].children[18].textContent = jsonData["level2_G&H"].spj4.D_T;
          spject.children[2].children[19].textContent = jsonData["level2_G&H"].spj5.D_T;
          spject.children[2].children[20].textContent = jsonData["level2_G&H"].spj6.D_T;
          spject.children[2].children[21].textContent = jsonData["level2_G&H"].spj7.D_T;
          spject.children[2].children[22].textContent = jsonData["level2_G&H"].spj8.D_T;
          spject.children[2].children[23].textContent = jsonData["level2_G&H"].spj9.D_T;
          spject.children[2].children[24].textContent = jsonData["level2_G&H"].spj10.D_T;
          spject.children[2].children[25].textContent = jsonData["level2_G&H"].spj11.D_T;
          spject.children[2].children[26].textContent = jsonData["level2_G&H"].spj12.D_T;
          spject.children[2].children[27].textContent = jsonData["level2_G&H"].spj13.D_T;
          spject.children[2].children[28].textContent = jsonData["level2_G&H"].spj14.D_T;
  
          for(let f = 0 ; f < 15; f++){ 
          spject.children[3].children[f].style.display = "none";
            spject.children[2].children[f].style.display = "none";
            spject.children[1].children[f].style.display = "none"; 
          }
          for(let A = 15 ; A < 29; A++){ 
             spject.children[3].children[A].style.display = "inline";
            spject.children[2].children[A].style.display = "inline";
            spject.children[1].children[A].style.display = "inline"; 
            spject.children[3].children[A].addEventListener("click",()=>{
            localStorage.setItem(`spject${A}`,`${spject.children[1].children[A].textContent}`)
            localStorage.setItem(`doc${A}`,`${spject.children[2].children[A].textContent}`)
            spject.children[3].children[A].children[0].classList.remove("fa-check");
           })
          }
          for(let S = 49 ; S < 66; S++){
            spject.children[3].children[S].style.display = "none";
            spject.children[2].children[S].style.display = "none";
            spject.children[1].children[S].style.display = "none";  
          }
          for(let M = 32; M < 49; M++){
            spject.children[2].children[M].style.display = "none";
            spject.children[1].children[M].style.display = "none";
            spject.children[3].children[M].style.display = "none"; 
         }
        })
        // مواد المستوي الثالث
        button.children[2].addEventListener("click",()=>{
          let spject = document.querySelector(".span3");
          spject.children[1].children[32].textContent = jsonData["level3_G&H"].Adm_0364.Name;
          spject.children[1].children[33].textContent = jsonData["level3_G&H"].Comp_0262.Name;
          spject.children[1].children[34].textContent = jsonData["level3_G&H"].Curr_06612.Name;
          spject.children[1].children[35].textContent = jsonData["level3_G&H"].Curr_06613.Name;
          spject.children[1].children[36].textContent = jsonData["level3_G&H"].Curr_06614.Name;
          spject.children[1].children[37].textContent = jsonData["level3_G&H"].Ed_0169.Name;
          spject.children[1].children[38].textContent = jsonData["level3_G&H"].EdPsy_0464.Name;
          spject.children[1].children[39].textContent = jsonData["level3_G&H"].SS11_623.Name;
          spject.children[1].children[40].textContent = jsonData["level3_G&H"].SS_11819.Name;
          spject.children[1].children[41].textContent = jsonData["level3_G&H"].spj_10.Name;
          spject.children[1].children[42].textContent = jsonData["level3_G&H"].spj_11.Name;
          spject.children[1].children[43].textContent = jsonData["level3_G&H"].spj_12.Name;
          spject.children[1].children[44].textContent = jsonData["level3_G&H"].spj_13.Name;
          spject.children[2].children[32].textContent = jsonData["level3_G&H"].Adm_0364.D_T;
          spject.children[2].children[33].textContent = jsonData["level3_G&H"].Comp_0262.D_T;
          spject.children[2].children[34].textContent = jsonData["level3_G&H"].Curr_06612.D_T;
          spject.children[2].children[35].textContent = jsonData["level3_G&H"].Curr_06613.D_T;
          spject.children[2].children[36].textContent = jsonData["level3_G&H"].Curr_06614.D_T;
          spject.children[2].children[37].textContent = jsonData["level3_G&H"].Ed_0169.D_T;
          spject.children[2].children[38].textContent = jsonData["level3_G&H"].EdPsy_0464.D_T;
          spject.children[2].children[39].textContent = jsonData["level3_G&H"].SS11_623.D_T;
          spject.children[2].children[40].textContent = jsonData["level3_G&H"].SS_11819.D_T;
          spject.children[2].children[41].textContent = jsonData["level3_G&H"].spj_10.D_T;
          spject.children[2].children[42].textContent = jsonData["level3_G&H"].spj_11.D_T;
          spject.children[2].children[43].textContent = jsonData["level3_G&H"].spj_12.D_T;
          spject.children[2].children[44].textContent = jsonData["level3_G&H"].spj_13.D_T;
          for(let f = 0 ; f < 15; f++){
            spject.children[3].children[f].style.display = "none"; 
            spject.children[2].children[f].style.display = "none";
            spject.children[1].children[f].style.display = "none"; 
          }
          for(let A = 15 ; A < 32; A++){
            spject.children[3].children[A].style.display = "none";
            spject.children[2].children[A].style.display = "none";
            spject.children[1].children[A].style.display = "none"; 
          }
          for(let S = 45 ; S < 66; S++){
            spject.children[3].children[S].style.display = "none";
            spject.children[2].children[S].style.display = "none";
            spject.children[1].children[S].style.display = "none";  
          }
          for(let M = 32; M < 45; M++){ 
            spject.children[3].children[M].style.display = "inline";
            spject.children[2].children[M].style.display = "inline";
            spject.children[1].children[M].style.display = "inline"; 
            spject.children[3].children[M].addEventListener("click",()=>{
            localStorage.setItem(`spject${M}`,`${spject.children[1].children[M].textContent}`)
            localStorage.setItem(`doc${M}`,`${spject.children[2].children[M].textContent}`)
            spject.children[3].children[M].children[0].classList.remove("fa-check");
           })}
        })
        // مواد المستوي الرابع
        button.children[3].addEventListener("click",()=>{
          let spject = document.querySelector(".span3");
          spject.children[1].children[45].textContent = jsonData["level4_G&H"].spj_1.Name;
          spject.children[1].children[46].textContent = jsonData["level4_G&H"].spj_2.Name;
          spject.children[1].children[47].textContent = jsonData["level4_G&H"].spj_3.Name;
          spject.children[2].children[45].textContent = jsonData["level4_G&H"].spj_1.D_T;
          spject.children[2].children[46].textContent = jsonData["level4_G&H"].spj_2.D_T;
          spject.children[2].children[47].textContent = jsonData["level4_G&H"].spj_3.D_T;
          for(let f = 0 ; f < 15; f++){
            spject.children[3].children[f].style.display = "none"; 
            spject.children[2].children[f].style.display = "none";
            spject.children[1].children[f].style.display = "none"; 
          }
          for(let A = 15 ; A < 32; A++){
            spject.children[3].children[A].style.display = "none";
            spject.children[2].children[A].style.display = "none";
            spject.children[1].children[A].style.display = "none"; 
          }
          for(let S = 45 ; S < 48; S++){  
            spject.children[3].children[S].style.display = "inline";
            spject.children[2].children[S].style.display = "inline";
            spject.children[1].children[S].style.display = "inline"; 
            spject.children[3].children[S].addEventListener("click",()=>{
            localStorage.setItem(`spject${S}`,`${spject.children[1].children[S].textContent}`)
            localStorage.setItem(`doc${S}`,`${spject.children[2].children[S].textContent}`)
            spject.children[3].children[S].children[0].classList.remove("fa-check");
           })
             
          }
          for(let M = 32; M < 45; M++){ 
            spject.children[3].children[M].style.display = "none";
            spject.children[2].children[M].style.display = "none";
            spject.children[1].children[M].style.display = "none"; 
         }
        })
      }
    }  
  }
  //صفحة استمارة التسجيل
  let span4 = document.querySelector(".span4");
  for(let k = 0; k < 66 ;k++){
    span4.children[1].children[k].textContent = localStorage.getItem(`spject${k}`);
    span4.children[2].children[k].textContent = localStorage.getItem(`doc${k}`);
    span4.children[1].children[k].style.display = "inline";
    span4.children[2].children[k].style.display = "inline";
    span4.children[3].children[k].style.display = "inline";
    span4.children[3].children[k].addEventListener("click",()=>{
      localStorage.removeItem(`spject${k}`);
      localStorage.removeItem(`doc${k}`);
      //window.location.reload()
    })
    if(span4.children[1].children[k].textContent === ""){
      span4.children[1].children[k].style.display = "none";
      span4.children[2].children[k].style.display = "none";
      span4.children[3].children[k].style.display = "none";
    }
  }
//---------------------------------------------------------------------------------------------------------------------------------------------

};
xhr.send();

let alress = document.querySelector(".alress");
ben.addEventListener("click", () => {
  title.style.display = "none";
  title2.style.display = "none";
  tit.style.display = "grid";})
  alress.addEventListener("click",()=>{
    window.location.reload()
    title2.style.display = "flex";
    title.style.display = "table";
      tit.style.display = "none";
  })

let logOut = document.querySelector(".log-out");
logOut.addEventListener("click",()=>{
  window.close("mm.html");
  window.open("login.html");
  //location.open(URL('index.html'))
})


function show_pup(){
  document.getElementById("pup").classList.add('open') 
}
function show_pup2(){
  document.querySelector(".sitting").classList.add('open') 
}
// الحصول على عنصر input
const fileInput = document.getElementById("fileInput");


// استماع لحدث تغيير الملف
fileInput.addEventListener("change", function(event) {
    // الحصول على الملف المحدد
    const selectedFile = event.target.files[0];
    
    // التأكد من وجود الملف
    if (selectedFile) {
        // إنشاء رابط للملف
        const fileURL = URL.createObjectURL(selectedFile);
        
        // حفظ مسار الصورة في Local Storage
        window.localStorage.setItem("image", fileURL);
        
        // عرض الصورة في الصفحة
        let imgetest = document.getElementById("imgetest");
        let img1 = document.querySelector(".img1");
        let user_image = document.querySelector(".user_image");
        imgetest.src = fileURL;
        img1.src = fileURL;
        user_image.src = fileURL;
    }
});

// التأكد من وجود الصورة في Local Storage عند إعادة تحميل الصفحة
window.addEventListener("load", function() {
    const savedImageURL = window.localStorage.getItem("image");
    if (savedImageURL) {
        // عرض الصورة في الصفحة
        let imgetest = document.getElementById("imgetest");
        let img1 = this.document.querySelector(".img1");
        let user_image = document.querySelector(".user_image");
        imgetest.src = savedImageURL;
        img1.src = savedImageURL;
        user_image.src = savedImageURL;
    }
});



