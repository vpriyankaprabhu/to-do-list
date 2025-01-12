$(function () {
    var timerInterval;
    var time = 0; // in seconds
    var isTimerRunning = false;
    
    if ($('#task-list li').length > 0) {
        $('#timer-display').hide();
    } else {
        $('#timer-display').show();
    }

    $('#add-task').click(function() {
        const taskText = $('#task-input').val();
        if (taskText !== "") {
            const taskItem = $('<li class="task-item"></li>');
            taskItem.text(taskText+"  ");
            const deleteButton = $('<button class="delete-task">Delete</button><br/>');
            taskItem.append(deleteButton);
            $('#task-list').append(taskItem);

            // Add delete functionality
            deleteButton.click(function() {
                taskItem.remove();
            });

            // Show timer when the first task is added
            console.log($('#task-list li').length);
            if ($('#task-list li').length === 1) {
                $('#timer-display').removeClass('hidden');
            }

            // Clear the input field
            $('#task-input').val('');
        }
    });

    $('#clear-task').click(function() {
        // Clear the input field
        $('#task-input').val('');
    });

    $('#start-timer').click(function() {
        if (!isTimerRunning) {
            isTimerRunning = true;
            timerInterval = setInterval(function() {
                time++;
                const minutes = Math.floor(time / 60);
                const seconds = time % 60;
                $('#timer').text(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
            }, 1000);
        }
    });

    $('#stop-timer').click(function() {
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
        }
    });

    $('#reset-timer').click(function() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        time = 0
        $('#timer').text(`${String(0).padStart(2, '0')}:${String(0).padStart(2, '0')}`);
    });
});