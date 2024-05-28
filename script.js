document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario
  
    var questions = document.querySelectorAll('.question');
    var correctAnswers = 0;
  
    questions.forEach(function(question, index) {
      var answer = question.querySelector('input[name^="question"]:checked');
      if (answer === null) {
        //alert('Por favor, responde a la pregunta: ' + (index + 1));
        return;
      }
  
      var selectedAnswer = answer.value;
      var correctAnswer = question.dataset.answer;
  
      if (selectedAnswer === correctAnswer) {
        // Respuesta correcta
        console.log('Pregunta ' + (index+1) + ': correcta');
        question.classList.remove('incorrectaQ');
        question.classList.add('correcta');
        answer.classList.add('correcta');
        correctAnswers++;
      } else {
        // Respuesta incorrecta
        console.log('Pregunta ' + (index+1) + ': incorrecta');
        question.classList.add('incorrectaQ');
        answer.classList.add('incorrectaA');
      }
    });

    const correctas = $('.correctas');
    correctas.text(correctAnswers);
  
    // Puedes utilizar la variable correctAnswers para mostrar la cantidad de respuestas correctas al usuario, enviar los resultados al servidor, etc.
  });
  