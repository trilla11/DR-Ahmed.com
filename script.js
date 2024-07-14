document.addEventListener('DOMContentLoaded', function() {
    const branchSelect = document.getElementById('branch');
    const timeSelect = document.getElementById('time');

    // Define fixed appointment times (adjust as needed)
    const branchTimes = {
        branch1: ['09:00', '10:00', '11:00', '12:00'],
        branch2: ['09:30', '10:30', '11:30', '12:30'],
        branch3: ['10:00', '11:00', '12:00', '13:00']
        // Add more branches and their respective times as needed
    };

    // Function to update appointment times based on selected branch
    function updateTimes() {
        const selectedBranch = branchSelect.value;
        const times = branchTimes[selectedBranch];

        // Clear previous options
        timeSelect.innerHTML = '';

        // Populate time options
        times.forEach(time => {
            const option = document.createElement('option');
            option.text = time;
            option.value = time;
            timeSelect.add(option);
        });
    }

    // Event listener for branch selection change
    branchSelect.addEventListener('change', updateTimes);

    // Initialize times based on initial branch selection
    updateTimes();
});
