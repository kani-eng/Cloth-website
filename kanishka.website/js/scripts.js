
document.addEventListener('DOMContentLoaded', function () {

    // Display checkbox options when the "Start Customizing" button is clicked
    document.getElementById('customization-btn').addEventListener('click', function () {
      document.getElementById('customization-options').style.display = 'block'; // Show the customization options
    });
  
    // Handle customization submission
    document.getElementById('submit-customization').addEventListener('click', function () {
      const selectedOptions = [];
      const checkboxes = document.querySelectorAll('input[name="customization"]:checked');
      checkboxes.forEach(function (checkbox) {
        selectedOptions.push(checkbox.value);
      });
      if (selectedOptions.length === 0) {
        alert("Please select at least one customization option.");
      } else {
        alert('You selected: ' + selectedOptions.join(', '));
      }
    });
  
    // Book Consultation Button
    const consultationButton = document.getElementById('consultation-btn');
    consultationButton.addEventListener('click', function () {
      alert("Thank you for booking a consultation! A stylist will reach out to you shortly.");
    });
  
    // Schedule Appointment Button (Opens Modal)
    const scheduleAppointmentButton = document.getElementById('schedule-appointment-btn');
    scheduleAppointmentButton.addEventListener('click', function () {
      document.getElementById('appointment-modal').style.display = 'block';
    });
  
    // Close Modal Functionality
    const closeModalButton = document.getElementById('close-modal-btn');
    closeModalButton.addEventListener('click', function () {
      document.getElementById('appointment-modal').style.display = 'none';
    });
  
    // Close Modal if user clicks outside of the modal
    window.addEventListener('click', function (event) {
      if (event.target === document.getElementById('appointment-modal')) {
        document.getElementById('appointment-modal').style.display = 'none';
      }
    });
  
    // Appointment Form Submit
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
      appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        console.log(`Appointment Scheduled for ${name} on ${date} at ${time}`);
        alert('Your appointment has been scheduled!');
        document.getElementById('appointment-modal').style.display = 'none';
      });
    }
  
  });
  