document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    // ⬇️ ВСТАВЬ СЮДА СВОЮ ССЫЛКУ ИЗ APPS SCRIPT ⬇️
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyIjMoHpcIyZPHLJy4FA5LopSIQU8wok-Eo8seFZai_5ZxiBQJ1O76toHHRu8m03tjGiA/exec';

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            statusDiv.textContent = 'Отправка...';
            statusDiv.style.color = '#333';

            const formData = new FormData(form);

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: formData
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log('Ответ от Google:', data);
                    if (data.result === 'success') {
                        statusDiv.textContent = '✅ Спасибо! Заявка отправлена.';
                        statusDiv.style.color = 'green';
                        form.reset();
                    } else {
                        throw new Error('Ошибка от сервера');
                    }
                })
                .catch(function (error) {
                    console.error('Ошибка:', error);
                    statusDiv.textContent = '❌ Ошибка. Попробуйте позже.';
                    statusDiv.style.color = 'red';
                });
        });
    } else {
        console.error('Форма не найдена!');
    }
});