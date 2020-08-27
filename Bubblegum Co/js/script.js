const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sept 5, 2020 00:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S Today!!;
      //}

    }, second)

    const createForm = document.querySelector("#createForm");
    const progressBar = document.querySelector("#progressBar");
    const progressHandler = document.querySelector("progressHandler");
    const postSubmit = document.querySelector("#postSubmit");

    if(createForm !=null){
      let d;
      createForm.addEventListener("submit", async(e)=>{
        e.preventDefault(); //prevents page from refreshing

        if(document.getElementById("title").value !="" && document.getElementById("content").value !=""
        && document.getElementById("").files[0] !="")

        {
          let title = document.getElementById("title").value;
          let content = document.getElementById("content").value;
          let cover = document.getElementById("cover").files[0];

          console.log(cover);

          //ref to FB bucket
          const storageRef =firebase.storage().ref();
          const storageChild = storageRef.child(cover.name)

          console.log('uploading file...');

          //"put" uploads the file
          const postCover = storageChild.put(cover);

          //async above uses await to continue
          await new Promise((resoleve)=>{
            //will listen to the event e 
            postCover.on("state_changed",(snapshot) =>{
              let progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
              console.log(Math.trunc(progress));
              if(progressHandler !=null)
              {
                progressHandler.styled.display = true
              }
              if(postSubmit !=null)
              {
                postSubmit.disabled = true;
              }

              if(progressBar !=null)
              {
                progressBar.value = progress;
              }
            }, (error) =>{
              console.log|(error);
            }, async()=>{
              const downloasURL = await storageChild.getDownloadURL();
              d = downloadURL;
              console.log(d);
              resolve();
            });
            });
            const fileRef =await Firebase.storage().reffromURL(d);

            let post ={
              title,
              content,
              cover:d,
              fileref: fileRef.location.path
            }
          };
          await firebase.firestore().collection("post").add(post);

          console.log("post aded successfully");
          if(postSubmit !=null){
            window.location.replace("index.html");
            postSubmit.disable=false;

          }
        else{
          console.log("You Must complete all fields!")

        }
        })
      }

    


    
    const config ={
      apiKey: "AIzaSyD1U_zTm1unycKe00c2t9SYVyz83-sQYFg",
        authDomain: "task-2-event.firebaseapp.com",
        databaseURL: "https://task-2-event.firebaseio.com",
        projectId: "task-2-event",
        storageBucket: "task-2-event.appspot.com",
        messagingSenderId: "710782422549",
        appId: "1:710782422549:web:c8702b23e95b9a0415881c"
    }
    firebase,initialize(config);
    const firestore = firebase.firestor(); //method of this FB Class
    
    
  