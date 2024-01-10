   function getTweets() {
  let divs = document.querySelectorAll("div"); // Load Div Elements
  //console.log(divs)

  for (let div of divs) {
    let dataTestId = div.getAttribute("data-testid");

    if (dataTestId === "User-Name") {
     // console.log("User-Name element found");

      const usernameTag = div.querySelector('a[role="link"]');
      const username = usernameTag
        ? usernameTag.getAttribute("href").split("/").pop()
        : null;

      if (username) {
        console.log("Username:", username);
      } else {
        console.log("Username not found.");
      }
    }

    
  }
} 


  window.addEventListener("scroll",()=>{
     getTweets();
   
  });

