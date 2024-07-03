
document.addEventListener('DOMContentLoaded', function() {
    const cursosRealizados = [
        { tema: 'Curso de HTML', institucion: 'Udemy', horas: 20, fechaInicio: '2022-01-01', fechaFinal: '2022-01-20' },
        { tema: 'Curso de CSS', institucion: 'Coursera', horas: 30, fechaInicio: '2022-02-01', fechaFinal: '2022-02-28' },
        { tema: 'Curso de JavaScript', institucion: 'Platzi', horas: 25, fechaInicio: '2022-03-01', fechaFinal: '2022-03-25' },
    ];

    const cursosList = document.getElementById('cursos-realizados');
    cursosRealizados.forEach(curso => {
        const li = document.createElement('li');
        li.textContent = `${curso.tema}, ${curso.institucion} (${curso.horas} horas, ${curso.fechaInicio} - ${curso.fechaFinal})`;
        cursosList.appendChild(li);
    });

    const secundariaItem = document.getElementById('secundaria');
    const certificadoSecundariaContainer = document.getElementById('certificado-secundaria-container');
    secundariaItem.addEventListener('click', function() {
        certificadoSecundariaContainer.classList.toggle('hidden');
    });

    const primariaItem = document.getElementById('primaria');
    const certificadoPrimariaContainer = document.getElementById('certificado-primaria-container');
    primariaItem.addEventListener('click', function() {
        certificadoPrimariaContainer.classList.toggle('hidden');
    });

    const superioresItem = document.getElementById('superiores');
    const certificadoSuperioresContainer = document.getElementById('certificado-superiores-container');
    superioresItem.addEventListener('click', function() {
        certificadoSuperioresContainer.classList.toggle('hidden');
    });
});
