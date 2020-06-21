  fetch("airports_local.json")
      .then((resp) => resp.json()) 
      .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "Cracow") {
               console.log(element.destination);
               document.getElementById("output").innerHTML += `${element.destination}`;
               document.getElementById("dateFirstTrip").innerHTML += `${element.date}`;
               document.getElementById("output2").innerHTML += `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceFirstTrip").innerHTML += `${element.price}`;

      }
   });
   });

   
   fetch('airports_local.json')
      .then((resp) => resp.json()) 
      .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "Barcelona") {
               console.log(element.destination);
               document.getElementById("secondTrip").innerHTML += `${element.destination}`;
               document.getElementById("dateSecondTrip").innerHTML += `${element.date}`;
               document.getElementById("secondTripDep").innerHTML += `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceSecondTrip").innerHTML += `${element.price}`;
      }
   });
   });

   
     
   fetch("airports_local.json")
      .then((resp) => resp.json()) 
      .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "New York") {
               console.log(element.destination);
               document.getElementById("thirdTrip").innerHTML += `${element.destination}`;
               document.getElementById("dateThirdTrip").innerHTML += `${element.date}`;
               document.getElementById("thirdTripDep").innerHTML += `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceThirdTrip").innerHTML += `${element.price}`;

      }
   });
   });



   document.getElementById("btnFirstTrip").addEventListener("click", getDataFirst);

   function getDataFirst() {
     fetch("airports_local.json")
       .then((resp) => resp.json()) 
       .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "Cracow") {
               console.log(element.destination);
               document.getElementById("destinationSummary").innerHTML = `${element.destination}`;
               document.getElementById("dateSummary").innerHTML = `${element.date}`;
               document.getElementById("hoursSummary").innerHTML = `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceSummary").innerHTML = `${element.price}`;
            
            }
           });
       });
   }

   document.getElementById("btnSecondTrip").addEventListener("click", getDataSecond);

   function getDataSecond() {
     fetch("airports_local.json")
       .then((resp) => resp.json()) 
       .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "Barcelona") {
               console.log(element.destination);
               document.getElementById("destinationSummary").innerHTML = `${element.destination}`;
               document.getElementById("dateSummary").innerHTML = `${element.date}`;
               document.getElementById("hoursSummary").innerHTML = `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceSummary").innerHTML = `${element.price}`;
            
            }
           });
       });
   }

   document.getElementById("btnThirdTrip").addEventListener("click", getDataThird);

   function getDataThird() {
     fetch("airports_local.json")
       .then((resp) => resp.json()) // Transform the data into json
       .then(function (data) {
         data.forEach(function (element) {
            if (element.destination == "New York") {
               console.log(element.destination);
               document.getElementById("destinationSummary").innerHTML = `${element.destination}`;
               document.getElementById("dateSummary").innerHTML = `${element.date}`;
               document.getElementById("hoursSummary").innerHTML = `${element.departure}` + " - " + `${element.arrival}` ;
               document.getElementById("priceSummary").innerHTML = `${element.price}`;
            
            }
           });
       });
   }

   function btnEconomyPassengerMinus() {
      document.getElementById("numberOfEconomyPassengers").stepDown();
      getMaxSeats();
    }
    
    function btnEconomyPassengerPlus() {
      document.getElementById("numberOfEconomyPassengers").stepUp();
      getMaxSeats();

    }

    function btnPremiumEconomyPassengerMinus() {
      document.getElementById("numberOfPremiumEconomyPassengers").stepDown();
      getMaxSeats();

    }
    
    function btnPremiumEconomyPassengerPlus() {
      document.getElementById("numberOfPremiumEconomyPassengers").stepUp();
      getMaxSeats();

    }

    function btnBusinessPassengerMinus() {
      document.getElementById("numberOfBusinessPassengers").stepDown();
      getMaxSeats();

    }
    
    function btnBusinessPassengerPlus() {
      document.getElementById("numberOfBusinessPassengers").stepUp();
      getMaxSeats();

    }

    function reservedSeatChangeColor(){
     let partials = document.querySelectorAll('#seat g path')
         console.log(partials);
         partials.forEach(el=> {
            el.style.fill = 'red';
            el.style.background = 'red';
         })
    }

    const getSession = () => {
       fetch('http://localhost:3000/getSession', {
         method: 'GET',
         mode: 'cors',
         cache: 'no-cache',
         credentials: 'same-origin', 
         headers: {
           'Content-Type': 'application/json'
         },
         redirect: 'follow',
         referrerPolicy: 'no-referrer'
      })
         .then(res=> {
            console.log(res);
         })
    }

 
    let seats = [
      {
        id:1,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:2,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:3,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:4,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:5,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:6,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:7,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:8,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:9,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:10,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:11,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:12,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 528,
      },
      {
        id:13,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:14,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:15,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:16,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:17,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:18,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:19,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:20,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:21,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:22,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:23,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:24,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:25,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:26,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:27,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:28,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:29,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:30,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:31,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:32,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:33,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:34,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:35,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:36,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:37,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:38,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:39,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:40,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:41,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:42,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:43,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:44,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:45,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:46,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:47,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:48,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:49,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:50,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:51,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:52,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:53,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:54,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:55,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:56,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:57,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:58,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:59,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:60,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:61,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:62,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:63,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:64,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:65,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:66,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:67,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      },
      {
        id:68,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 278,
      }
    ]
    
    let seatsTwo = [
      {
        id:69,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:70,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:71,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:72,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:73,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:74,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:75,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:76,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:77,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:78,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:79,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:90,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:91,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:92,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:93,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:94,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:95,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:96,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:97,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:98,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:99,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:100,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:101,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:102,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:103,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:104,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:105,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:106,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:107,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:108,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1180,
      },
      {
        id:109,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:110,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:111,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:112,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:113,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:114,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:115,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:116,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:117,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:118,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:119,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:120,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:121,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:122,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:123,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:124,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:125,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:126,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:127,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:128,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:129,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:130,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:131,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:132,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:133,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:134,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:135,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:136,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:137,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:138,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:69,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:70,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:71,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:72,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:73,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:74,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:75,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:76,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:77,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:78,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:79,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:90,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:91,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:92,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:93,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:94,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:95,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:96,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:97,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:98,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:99,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:100,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:101,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:102,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:103,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:104,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:105,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:106,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:107,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:108,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:109,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:110,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:111,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:112,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:113,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:114,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:115,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:116,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:117,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:118,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:119,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:120,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:121,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:122,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:123,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:124,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:125,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:126,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:127,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:128,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:129,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:130,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:131,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:132,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:133,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:134,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:135,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:136,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:137,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:138,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:139,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:140,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:141,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:142,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:143,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:144,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:145,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:146,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:147,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:148,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:149,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:150,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:151,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:152,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:153,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:154,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:155,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:156,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:157,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:158,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:159,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:160,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:161,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:162,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:163,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:164,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:165,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:166,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:167,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:168,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:169,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:170,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:171,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:172,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:173,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:174,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:175,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:176,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:177,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:178,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:179,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:180,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:181,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:182,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:183,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:184,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:185,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:186,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:187,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:188,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:189,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:190,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:191,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:192,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:193,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:194,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:195,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:196,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:197,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
      {
        id:198,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 930,
      },
    ]

    let seatsThree = [
      {
        id:199,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:200,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:201,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:202,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:203,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:204,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:205,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:206,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:207,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:208,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:209,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:210,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:209,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:210,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:211,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:212,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:213,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:214,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:215,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:216,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:217,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:218,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:219,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:220,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:221,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:222,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:223,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:224,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:225,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:226,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:227,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:228,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:229,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:230,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:231,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:232,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:233,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:234,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:235,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:236,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:237,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:238,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:239,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:240,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:241,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:242,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:243,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:244,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:245,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:246,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:247,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:248,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:249,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:250,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:251,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:252,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:253,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:254,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:255,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:256,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:257,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:258,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:259,
        seatLetter: 'a',
        color: 'green',
        afterClickColor: 'red',
        price: 1454,
      },
      {
        id:260,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:261,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:262,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:263,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:264,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:265,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:266,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:267,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },    
      {
        id:268,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:269,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:270,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:271,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:272,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:273,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:274,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:275,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:276,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:277,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:278,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:279,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:280,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:281,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:282,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:283,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:284,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:285,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:286,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:287,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:288,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:289,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:290,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:291,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:292,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:293,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:294,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:295,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:296,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:297,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:298,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:299,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:300,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:301,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:302,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:303,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:304,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:305,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:306,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:307,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:308,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:309,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:310,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:311,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:312,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:313,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:314,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:315,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:316,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:317,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:318,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:319,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:320,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:321,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:322,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:323,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:324,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:325,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:326,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:327,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:328,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:329,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:330,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:331,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:332,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:333,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:334,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:335,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:336,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:337,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:338,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:339,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:340,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:341,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:342,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:343,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:344,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:345,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:346,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:347,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:348,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:349,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:350,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:351,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:352,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:353,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:354,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:355,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:356,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:357,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },    
      {
        id:358,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:359,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:360,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:361,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:362,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:363,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:364,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:365,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:366,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:367,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:368,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:369,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:370,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:371,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:372,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:373,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:374,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:375,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:376,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:377,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:378,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:379,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:380,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:381,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:382,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:383,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:384,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:385,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:386,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:387,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:388,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:389,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:390,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:391,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:392,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:393,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:394,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:395,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:396,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:397,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:398,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:399,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:400,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:401,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:402,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:403,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:404,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:405,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:406,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:407,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:408,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:409,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:410,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:411,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:412,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:413,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:414,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:415,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:416,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:417,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:418,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:420,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:421,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:422,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:423,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:424,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:425,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:426,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:427,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:428,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:429,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:430,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:431,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:432,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:433,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:434,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:435,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:436,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:437,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:438,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:439,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:440,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:441,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:442,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:443,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:444,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:445,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:446,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:447,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:448,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },    
      {
        id:449,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:450,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:451,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:452,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:453,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:454,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:455,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:456,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:457,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:458,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:459,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:460,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:461,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:462,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:463,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:464,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:465,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:466,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:467,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:468,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:469,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:470,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:471,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:472,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:473,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:474,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:475,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:476,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:477,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:478,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:479,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:480,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:481,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:482,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:483,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:484,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:485,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:486,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:487,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:488,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:489,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:490,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:491,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:492,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:493,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      },
      {
        id:494,
        seatLetter: 'a',
        color: 'orange',
        afterClickColor: 'red',
        price: 1204,
      }
    ]
    
    
    
    calculatePrices = (planeSeats, planeId) => {
      let allSeats = document.querySelectorAll(`#${planeId} .seats`);
      let newArray = [], calculatedPrice = 0;
      allSeats.forEach(el => {
        if(el.style.background === "red") {
          newArray.push(el.id);
        }
      })
      planeSeats.forEach(seat => {
        newArray.forEach(el => {
          if(seat.id === parseFloat(el)) {
            calculatedPrice += seat.price;
          }
        })
      })
      document.getElementById("totalPrice").innerHTML="The price for the ticket(s) is " + calculatedPrice + " PLN";
    }
    let maxSeats = 9;
    reserveSeat = (id, planeSeats, planeId) => {
      let takenSeats = 0;
       let seatReserved = document.querySelectorAll(`#${planeId} .seats`)
         seatReserved.forEach(el => {
            if (el.style.background=="red") {
              takenSeats++;
            }
         })
      if(document.getElementById(id).style.background === 'red') {
        document.getElementById(id).style.background = 'orange';
        maxSeatsReserved(takenSeats-1);
      } else {
       
         if(takenSeats<maxSeats) {
            document.getElementById(id).style.background = 'red';
         }
         maxSeatsReserved(takenSeats+1);
      }
      calculatePrices(planeSeats, planeId);
    }
    
    refreshSeats = (planeSeats, planeId, objectName, emptyPlace, breakAfter, dominatingBreak) => {
      document.getElementById(planeId).innerHTML = '';
      planeSeats.forEach( (el,index) => {
        if(index===emptyPlace) {
          if(dominatingBreak) {
            if(index%dominatingBreak !== 0) {
              document.getElementById(planeId).innerHTML += `<div class="emptyPlace"></div>`;
            }
          } else {
            document.getElementById(planeId).innerHTML += `<div class="emptyPlace"></div>`;
          }
          emptyPlace+=breakAfter;
        }
        document.getElementById(planeId).innerHTML += `<div class="seats" id="${el.id}" style="background: ${el.color}" onclick="reserveSeat('${el.id}', ${objectName}, '${planeId}')">${el.seatLetter}</div>`
      })
    }
    refreshSeats(seats, 'plane', 'seats', 2, 4);
    refreshSeats(seatsTwo, 'secondPlane', 'seatsTwo', 3, 6);
    refreshSeats(seatsThree, 'thirdPlane', 'seatsThree', 3, 3, 9);

  
   maxSeatsReserved = (num) => {
      console.log(num)
      document.getElementById("numberOfEconomyPassengers").max=num;
      document.getElementById("numberOfPremiumEconomyPassengers").max=num;
      document.getElementById("numberOfBusinessPassengers").max=num;
    }

    getMaxSeats = (id) => {
       let economyPasssengers = parseInt(document.getElementById("numberOfEconomyPassengers").value);
       let premiumPassengers = parseInt(document.getElementById("numberOfPremiumEconomyPassengers").value);
       let businessPassengers = parseInt(document.getElementById("numberOfBusinessPassengers").value);
     
       maxSeats = 0;
       
     let elementValue = parseInt(document.getElementById(id).value);
     console.log(id);
     if(id==="numberOfEconomyPassengers") {
      maxSeats += businessPassengers;
      maxSeats += premiumPassengers;
      console.log(maxSeats);
      if(maxSeats >=9 ) {
        console.log('wieksze')
        document.getElementById(id).value = 0;
      } else {
        console.log('mniejsze')
        console.log(elementValue);
        console.log(maxSeats);
        console.log(elementValue+maxSeats)
        if(elementValue+maxSeats > 9) {
          console.log('tujestem')
        document.getElementById(id).value = 9 - maxSeats;
        }
      }
     }

    
     if(id==="numberOfPremiumEconomyPassengers") {
      maxSeats += businessPassengers;
      maxSeats += economyPasssengers;
      console.log(maxSeats);
      if(maxSeats >=9 ) {
        console.log('wieksze')
        document.getElementById(id).value = 0;
      } else {
        console.log('mniejsze')
        console.log(elementValue);
        console.log(maxSeats);
        if(elementValue+maxSeats > 9) {
        document.getElementById(id).value = 9 - maxSeats;
        }
      }
     }

    
     if(id==="numberOfBusinessPassengers") {
      maxSeats += premiumPassengers;
      maxSeats += economyPasssengers;
      console.log(maxSeats);
      if(maxSeats >=9 ) {
        console.log('wieksze')
        document.getElementById(id).value = 0;
      } else {
        console.log('mniejsze')
        console.log(elementValue);
        console.log(maxSeats);
        if(elementValue+maxSeats > 9) {
        document.getElementById(id).value = 9 - maxSeats;
        }
      }
     }
     
      // if(maxSeats>9) {
      //    document.getElementById("numberOfPremiumEconomyPassengers").value = 9 - (1+ economyPasssengers);
      // }
      // maxSeats += businessPassengers;
      // if(maxSeats>9) {
      //    document.getElementById("numberOfBusinessPassengers").value = 9 - (economyPasssengers+premiumPassengers);
      // }
    }


    let standardSummary = () => {
    let extraLuggageStandard = document.getElementById("numberOfEconomyPassengers").value;
    let fastLaneStandard = document.getElementById("numberOfPremiumEconomyPassengers").value;
    let luggageLaneSummary = document.getElementById("numberOfBusinessPassengers").value;
      document.getElementById("extraLuggageSummary").innerHTML="Extra luggage (+20PLN)"+ extraLuggageStandard;
      document.getElementById("fastLaneSummary").innerHTML=fastLaneStandard;
      document.getElementById("luggageLaneSummary").innerHTML=luggageLaneSummary;
    }


    
    document.getElementById("btnFirstTrip").addEventListener("click", showFirstPlane = () => {
      let planeFirst = document.getElementById("plane");
      planeFirst.classList.toggle("hiddenPlane");
      let planeSecond = document.getElementById("secondPlane");
      planeSecond.classList.add("hiddenPlane");
      let planeThird = document.getElementById("thirdPlane");
      planeThird.classList.add("hiddenPlane");
    })

    document.getElementById("btnSecondTrip").addEventListener("click", showSecondPlane = () => {
      var planeSecond = document.getElementById("secondPlane");
      planeSecond.classList.toggle("hiddenPlane");
      let planeFirst = document.getElementById("plane");
      planeFirst.classList.add("hiddenPlane");
      let planeThird = document.getElementById("thirdPlane");
      planeThird.classList.add("hiddenPlane");
    })

    document.getElementById("btnThirdTrip").addEventListener("click", showThirdPlane = () => {
      let planeThird = document.getElementById("thirdPlane");
      planeThird.classList.remove("hiddenPlane");
      let planeFirst = document.getElementById("plane");
      planeFirst.classList.add("hiddenPlane");
      let planeSecond = document.getElementById("secondPlane");
      planeSecond.classList.add("hiddenPlane");
    })