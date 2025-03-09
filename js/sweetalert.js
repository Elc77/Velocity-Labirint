document.addEventListener("DOMContentLoaded", function () {
    // Select the image element
    const image = document.querySelector("#alertImage");
  
    // Ensure the image exists before attaching an event listener
    if (image) {
      // Handle image click
      image.addEventListener("click", function () {
        // Show Sweet Alert with custom message
        swal({
          title: "Made by: ",
          text: "Elija Čermelj, 4. RB",
          confirmButtonColor: "#0088CC"
        });
      });
    }
  });