document.addEventListener("DOMContentLoaded", function() {
    // Show the first section by default
    const firstButton = document.querySelector('.sidenav button');
    firstButton.classList.add('active-button');
    
    const firstSectionId = firstButton.getAttribute('onclick').match(/'([^']+)'/)[1];
    document.getElementById(firstSectionId).style.display = 'block';
});

function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.sidenav button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Add active class to the corresponding button
    const activeButton = Array.from(buttons).find(button => {
        return button.getAttribute('onclick').includes(sectionId);
    });
    
    if (activeButton) {
        activeButton.classList.add('active-button');
    }
}

// Function to toggle the sidebar visibility
function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('active'); // Toggle the active class
}

// Function to close the sidebar when clicking outside of it
function closeSidenav(event) {
    const sidenav = document.querySelector('.sidenav');
    const toggleButton = document.querySelector('.toggle-sidenav');

    // Check if the click was outside the sidenav and the toggle button
    if (!sidenav.contains(event.target) && !toggleButton.contains(event.target)) {
        sidenav.classList.remove('active'); // Remove the active class
    }
}

// Event listener for clicks on the document
document.addEventListener('click', closeSidenav);


function copyText(elementId) {
    const input = document.getElementById(elementId);
    input.disabled = false; // Temporarily enable to copy
    input.select();
    document.execCommand("copy");
    input.disabled = true; // Disable again after copying
    // alert(elementId.charAt(0).toUpperCase() + elementId.slice(1) + " copied to clipboard!");
}


function toggleSolution1_1() {
  var img1 = document.getElementById("solution-img1-1");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
}

function toggleSolution1_2() {
  var img2 = document.getElementById("solution-img1-2");
  img2.style.display = img2.style.display === "none" ? "block" : "none";
  var img2 = document.getElementById("solution-img1-2-1");
  img2.style.display = img2.style.display === "none" ? "block" : "none";
}

function toggleSolution1_3() {
  var img3 = document.getElementById("solution-img1-3");
  var img4 = document.getElementById("solution-img1-3-1");
  if (img3.style.display === "none" && img4.style.display === "none") {
    img3.style.display = "block";
    img4.style.display = "block";
  } else {
    img3.style.display = "none";
    img4.style.display = "none";
    
  }
}

function toggleSolution1_4() {
  var img5 = document.getElementById("solution-img1-4");
  img5.style.display = img5.style.display === "none" ? "block" : "none";
  var img5 = document.getElementById("solution-img1-4-1");
  img5.style.display = img5.style.display === "none" ? "block" : "none";
}

function toggleSolution1_5() {
  var img6 = document.getElementById("solution-img1-5");
  img6.style.display = img6.style.display === "none" ? "block" : "none";
  var img6 = document.getElementById("solution-img1-5-1");
  img6.style.display = img6.style.display === "none" ? "block" : "none";
}

function toggleSolution1_6() {
  var img6 = document.getElementById("solution-img1-6");
  img6.style.display = img6.style.display === "none" ? "block" : "none";
  var img6 = document.getElementById("solution-img1-6-1");
  img6.style.display = img6.style.display === "none" ? "block" : "none";
}
function toggleSolution1_7() {
  var img6 = document.getElementById("solution-img1-7");
  img6.style.display = img6.style.display === "none" ? "block" : "none";
}



function toggleSolution2_1() {
  const img1 = document.getElementById("solution-img2-1");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}

function toggleSolution2_2() {
  const img1 = document.getElementById("solution-img2-2");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}

function toggleSolution2_3() {
  const img1 = document.getElementById("solution-img2-3");
  const img2 = document.getElementById("solution-img2-3-1");



  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";

}

function toggleSolution2_4() {
  const img1 = document.getElementById("solution-img2-4");
  const img2 = document.getElementById("solution-img2-4-1");
  


  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";
  
}

function toggleSolution2_5() {
  const img1 = document.getElementById("solution-img2-5");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
  const img2 = document.getElementById("solution-img2-5-1");
  img2.style.display = (img2.style.display === "none") ? "block" : "none";
}

function toggleSolution2_6() {
  const img1 = document.getElementById("solution-img2-6");
  const img2 = document.getElementById("solution-img2-6-1");

  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";
}

function toggleSolution2_7() {
  const img1 = document.getElementById("solution-img2-7");
  const img2 = document.getElementById("solution-img2-7-1");

  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";
}


function toggleSolution2_8() {
  const img1 = document.getElementById("solution-img2-8");
  const img2 = document.getElementById("solution-img2-8-1");

  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";
}
function toggleSolution2_9() {
  const img1 = document.getElementById("solution-img2-9");
  const img2 = document.getElementById("solution-img2-9-1");

  const isHidden = img1.style.display === "none" && img2.style.display === "none";
  
  img1.style.display = isHidden ? "block" : "none";
  img2.style.display = isHidden ? "block" : "none";
}

function toggleSolution2_10() {
  const img1 = document.getElementById("solution-img2-10");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}

function toggleSolution2_11() {
  const img1 = document.getElementById("solution-img2-11");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}

function toggleSolution2_12() {
  const img1 = document.getElementById("solution-img2-12");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}

function toggleSolution2_13() {
  const img1 = document.getElementById("solution-img2-13");
  img1.style.display = (img1.style.display === "none") ? "block" : "none";
}



function toggleSolution3_1() {
  const img = document.getElementById("solution-img3-1");
  img.style.display = img.style.display === "none" ? "block" : "none";
}

function toggleSolution3_2() {
  const img1 = document.getElementById("solution-img3-2");
  const img2 = document.getElementById("solution-img3-2-1");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
  img2.style.display = img2.style.display === "none" ? "block" : "none";
}

function toggleSolution3_3() {
  const img = document.getElementById("solution-img3-3");
  img.style.display = img.style.display === "none" ? "block" : "none";
}

function toggleSolution3_4() {
  const img1 = document.getElementById("solution-img3-4");
  const img2 = document.getElementById("solution-img3-4-1");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
  img2.style.display = img2.style.display === "none" ? "block" : "none";
}

function toggleSolution3_5() {
  const img1 = document.getElementById("solution-img3-5");
  const img2 = document.getElementById("solution-img3-5-1");
  const img3 = document.getElementById("solution-img3-5-2");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
  img2.style.display = img2.style.display === "none" ? "block" : "none";
  img3.style.display = img3.style.display === "none" ? "block" : "none";
}

function toggleSolution3_6() {
  const img1 = document.getElementById("solution-img3-6");
  const img2 = document.getElementById("solution-img3-6-1");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
  img2.style.display = img2.style.display === "none" ? "block" : "none";
}

function toggleSolution3_7() {
  const img = document.getElementById("solution-img3-7");
  img.style.display = img.style.display === "none" ? "block" : "none";
}

function toggleSolution3_8() {
  const img1 = document.getElementById("solution-img3-8");
  const img2 = document.getElementById("solution-img3-8-1");
  const img3 = document.getElementById("solution-img3-8-2");
  img1.style.display = img1.style.display === "none" ? "block" : "none";
  img2.style.display = img2.style.display === "none" ? "block" : "none";
  img3.style.display = img3.style.display === "none" ? "block" : "none";
}

