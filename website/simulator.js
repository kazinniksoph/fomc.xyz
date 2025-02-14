document.addEventListener('DOMContentLoaded', function() {
    // Initialize the simulation
    initializeSimulation();
});

function initializeSimulation() {
    const phases = document.querySelectorAll('.phase');
    let currentPhaseIndex = 0;

    function updatePhases() {
        phases.forEach((phase, index) => {
            if (index < currentPhaseIndex) {
                phase.classList.add('completed');
                phase.classList.remove('active');
            } else if (index === currentPhaseIndex) {
                phase.classList.add('active');
                phase.classList.remove('completed');
            } else {
                phase.classList.remove('active', 'completed');
            }
        });
    }

    // Start the simulation automatically
    setTimeout(() => {
        const welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.textContent = "Chair: Welcome to today's Federal Open Market Committee meeting. Let's begin with our opening remarks...";
    }, 1500);
} 