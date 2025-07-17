alert("📌 Instructions & Uses:\n\n1️⃣ Choose the desired size of your QR code.\n2️⃣ Enter any text or link (e.g., URL's like LinkedIn, Instagram, GitHub project).\n3️⃣ Click 'Generate' to create your QR code.\n\n📱 Scan the QR with your phone to open the link.\n🖼️ You can save the QR as an image in your gallery.\n✨ Share it with others instead of typing your profile names or links manually!🙌");

function genQR() {
    //var gapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld";
      const myimg = document.getElementById("img");
const mytext = document.getElementById("qrtext").value.trim();
const mysize = document.getElementById("size").value;

if (mytext !== "") {
  myimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${mysize}x${mysize}&data=${encodeURIComponent(mytext)}`;
  myimg.style.display = "block";




        // Hide form elements
        document.getElementById("size").style.display = "none";
        document.getElementById("qrtext").style.display = "none";
        document.querySelector("input[type='submit']").style.display = "none";
        document.querySelector("h2").style.display = "none";
        document.querySelector("p").style.display = "none";

        // Show Reset button
        document.getElementById("resetBtn").style.display = "inline-block";
      } else {
        alert("Please Enter Text");
      }
    }

    function resetForm() {
      document.getElementById("img").src = "";
      document.getElementById("qrtext").value = "";
      document.getElementById("size").value = "100";

      // Show form elements again
      document.getElementById("size").style.display = "inline-block";
      document.getElementById("qrtext").style.display = "inline-block";
      document.querySelector("input[type='submit']").style.display = "inline-block";
      document.querySelector("h2").style.display = "block";
      document.querySelector("p").style.display = "block";

      // Hide Reset button
      document.getElementById("resetBtn").style.display = "none";
    }
 