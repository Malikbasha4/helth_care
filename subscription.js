// subscription.js


function subscribe() {
    // Validate the form before submitting
    if (validateForm()) {
      // If the form is valid, calculate the total price
      var totalPrice = calculateTotalPrice();
      // If the selected duration is 12 (1 Year), apply the offer
      if (document.getElementById("subscriptionDuration").value === "12") {
        totalPrice += calculateOfferMonths();
      }
      // Show the total price and proceed to the thank-you page
      alert("Total Price: Rupees" + totalPrice);
      window.location.href = "thank-you.html";
    }
  }
  
  function validateForm() {
    var subscriptionType = document.getElementById("subscriptionType");
    var subscriptionDuration = document.getElementById("subscriptionDuration");
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");
    var bloodGroup = document.getElementById("bloodGroup");
    var phoneNumber = document.getElementById("phoneNumber");
    var weight = document.getElementById("weight");
    var workoutMethod = document.getElementById("workoutMethod");
  
    // Validate each field
    if (subscriptionType.value === "") {
      alert("Please select a subscription type.");
      return false;
    }
  
    if (subscriptionDuration.value === "") {
      alert("Please select a subscription duration.");
      return false;
    }
  
    if (name.value === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (age.value === "" || isNaN(age.value)) {
      alert("Please enter a valid age.");
      return false;
    }
  
    if (gender.value === "") {
      alert("Please select your gender.");
      return false;
    }
  
    if (bloodGroup.value === "") {
      alert("Please select your blood group.");
      return false;
    }
  
    if (phoneNumber.value === "" || isNaN(phoneNumber.value)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    if (weight.value === "" || isNaN(weight.value)) {
      alert("Please enter a valid weight.");
      return false;
    }
  
    if (workoutMethod.value === "") {
      alert("Please enter your workout method.");
      return false;
    }
  
    // If all validations pass, return true
    return true;
  }
  
  function calculateTotalPrice() {
    var subscriptionType = document.getElementById("subscriptionType").value;
    var subscriptionDuration = parseInt(document.getElementById("subscriptionDuration").value);
  
    // Define prices for different subscription types and durations
    var prices = {
      "hour": 10,
      "day": 50,
      "week": 150,
      "month": 300,
      "year": 3500
    };
  
    // Calculate total price based on selected type and duration
    var totalPrice = prices[subscriptionType] * subscriptionDuration;
  
    return totalPrice;
  }
  
  function calculateOfferMonths() {
    var subscriptionDuration = parseInt(document.getElementById("subscriptionDuration").value);
  
    // Define offer months for different durations
    var offerMonths = {
      "6": 2,
      "12": 3
    };
  
    // Check if the selected duration is eligible for the offer
    if (offerMonths.hasOwnProperty(subscriptionDuration.toString())) {
      return offerMonths[subscriptionDuration];
    }
  
    return 0;
 
  }
  
