//  let a = document.getElementsByClassName("clicc")

// $(".cclick").click(function () {
//     alert("Hello")
// })

//  $('.block').click(


//      function () {
//          $('.block').css('background', 'red')
//      }
//  )

//  $('.block').attr('title', 'hello');

//  $(selector).removeAttr(attributeName);

//  $(selector).load("url", "data", function (response, status, request) {
//      this; // dom element
    
//  });

// $.ajax({
//     url: "./scripts/hello.txt",
//     success: function (data) {
//         $('.block').text(data)
//     }
// });

//  jqAjax - ajax technology - spa
//  $(".load1").click(function () {
//      $.ajax({
//         url: "./scripts/hello.txt",
//         success: function (hello) {
//             $(".result").html(hello)
//         }
//     });
//  })

// $(".load2").click(function () {
//     $.ajax({
//         url: "./scripts/wow.txt",
//         success: function (wow) {
//             $(".result").text(wow)
//         }
//     });
// })

// $("input").click(function () {
//     $(this).css('background', 'red')
// })


// $('.el').first() 



// При натиску на перше коло усі кола по черзі мають стати жовтого кольору.
// document.getElementById("first").onclick = () => {
//     let a =  document.getElementsByClassName("block")[0]
//         for (let i = 0; i < 11; i++) {
          
//             setTimeout(function() {
//                 a.style.background = "red"
//             }, 6000);
//         }
//   }



// let element2 = {
//     tag: "p",
//     color: "blue",
//     w: 300,
//     h: 200,
//     size: 4,
//     pos: {
//       x: 120,
//       y: 300,
//     },
//   };
  
  
//   let block = () => {
//     let myEl = document.createElement(element2.tag);
//     myEl.classList.add("Ahover");
//     myEl.style.color = element2.color;
//     myEl.textContent = "Hello";
//     myEl.style.width = element2.w + 'px';
//     myEl.style.height = element2.h + 'px';
//     myEl.style.fontSize = element2.size + 'px';
//     myEl.style.position = "absolute";
//     myEl.style.left = element2.pos.x + 'px';
//     myEl.style.top = element2.pos.y + "px";
//     document.body.append(myEl);
//   }

//   block()
// let body = document.getElementsByClassName("body")[0];

// let blauSite = document.createElement("div");
// blauSite.style.height = "100vh";
// blauSite.style.width = "600px";
// blauSite.style.background = "skyblue";

// let pinkSite = document.createElement("div");
// pinkSite.style.height = "100vh";
// pinkSite.style.width = "1200px";
// pinkSite.style.background = "pink";
// pinkSite.style.padding = "17px";

// let wrapper = document.createElement("div");
// wrapper.style.display = "flex";

// let wrapperInp = document.createElement("div");
// wrapperInp.style.position = "absolute";
//  wrapperInp.style.display = "flex";
//  wrapperInp.style.flexDirection = "row-reveerse";
//  wrapperInp.style.gap = "15px";
//  wrapperInp.style.padding = "30px";

// let input = document.createElement("input");
// input.type = "number";
// input.value = "Hi";

// let button = document.createElement("button");
// button.textContent = "create"
// button.style.background = "orange"
// button.style.padding = "6px"
// button.style.width = "75px"
// button.style.fontSize = "20px"
// button.style.fontWeight = "600"
// button.style.border = "none"


// button.addEventListener("click", () => {
//     for (let i = 0; i < input.value; i++) {
//         let blockYellow = document.createElement("div")
//         blockYellow.style.background = "yellow"
//         blockYellow.style.height = "30px"
//         blockYellow.style.width = "30px"
//         blockYellow.style.borderRadius = "15px"
//         block.appendChild(blockYellow);
//     }
// })

// let block = document.createElement("div");
// block.style.height = "600px";
// block.style.width = "1100px";
// block.style.background = "#000";
// block.style.display = "flex";
// block.style.marginLeft = "65px";
// block.style.color = "white";
// block.style.overflowY = "auto";
// block.style.flexWrap = "wrap";
// block.style.gap = "15px";


// body.appendChild(wrapper);
// wrapper.appendChild(blauSite);
// wrapper.appendChild(pinkSite);
// wrapper.appendChild(wrapperInp);
// wrapperInp.appendChild(input);
// wrapperInp.appendChild(button);
// pinkSite.appendChild(block);

let count = 0;
let start = true;
let block = false;

while(start) {
    let pas = window.prompt("Your passowrd: XXXXXXXXXXX");
    if(pas === "9Valky!24599"){
        start = false;
    } else {
        count++;
    }
    if(count === 3) {
        block = true;
        while(block){
            alert("Your account is block!")
        }
    }
}