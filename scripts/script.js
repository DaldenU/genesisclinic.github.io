function showRegistrationForm() {
    var registrationForm = document.getElementById('registrationForm');
    registrationForm.style.display = 'block';
}

function submitForm() {
  document.getElementById('registration-button').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
  });
  
  var doctorType = document.getElementById('doctorType').value;
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var phone_num = document.getElementById('phone-num').value;
  var country = document.getElementById('country').value;

  alert(`Registered for ${doctorType} - ${fullName}, Email: ${email}, Num: ${phone_num}, Country: ${country}`);
}




//code starts when submit button's pressed

document.getElementById("submit").addEventListener("click", function(event) {
  //getting data from the html
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    //validating process
    if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) {
        event.preventDefault()
    }
    else{
      var jumbotron = document.createElement("div");
      jumbotron.className = "jumbotron";
    
      // Create and set the heading
      var heading = document.createElement("h5");
      heading.textContent = name + ":";
    
      // Create and set the paragraph
      var paragraph = document.createElement("p");
      paragraph.textContent = message;
    
      // Append the heading and paragraph to the jumbotron
      jumbotron.appendChild(heading);
      jumbotron.appendChild(paragraph);
    
      // Get the container element by its ID
      var container = document.getElementById("commentary");
    
      // Append the jumbotron to the container
      container.appendChild(jumbotron);
      //if validation goes as planned deleting existing input
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      $(jumbotron).animate({
        opacity: 1,
        width: "50%", // Expand to 50% of the viewport width
      }, 1000, function() {
        // Animation complete, now animate back to the original size
        $(jumbotron).animate({
          width: "100%", // Original width
        }, 1000);
      });
      
      $(jumbotron).hover(
        function() {
          
          // Mouseover event
          $(this).css("background-color", "lightgreen"); // Change background color on hover
        },
        function() {
          // Mouseout event
          $(this).css("background-color", "#e9ecef"); // Change background color on hover out
        }
      );
    }
  });
  //name validation
  function validateName(name) {
    if (name === "") {
      alert("Name is required");
      return false;
    }
    return true;
  }
  //message validation
  function validateMessage(message){
    if (message === "") {
        alert("Message is required");
        return false;
      }
      return true;
  }
  //email validation
  function validateEmail(email) {
    //using regex to test inout
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }
    return true;
  }
  


document.getElementById('searchService').addEventListener('input', function() {
  let inputVal = this.value.toLowerCase();

  let servicesElements = document.querySelectorAll('div.service-details > h4');
  let servicesArray = [];
  
  for (let i = 0; i < servicesElements.length; i++) {
    servicesArray.push(servicesElements[i].textContent.toLowerCase());
  }

  let dropdown = document.getElementById('searchDropdown');
  dropdown.innerHTML = '';

  for (let i = 0; i < servicesArray.length; i++) {
    if (servicesArray[i].includes(inputVal) && inputVal !== "") {
      let item = document.createElement('a');
      item.href = '#';
      item.className = 'dropdown-item';
      item.textContent = servicesElements[i].textContent;
      item.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('searchService').value = this.textContent;
        dropdown.innerHTML = '';
        dropdown.style.display = "none";
      });
      dropdown.appendChild(item);
    }
}
  dropdown.style.display = dropdown.children.length ? "block" : "none";
});


$(document).ready(function() {
  var element = $('#registrationFormAnim');
  var finalPosition = ( window.innerWidth - element.width() ) / 2; // Calculate the final position

  element.animate({ left: finalPosition }, 1000, 'linear'); // Adjust the duration and easing function
});
