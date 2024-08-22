async function fetchUniversityData() {
    const name = document.getElementById('universityName').value;
    const country = document.getElementById('country').value;

    const apiUrl = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const resultHtml = data.map(university => `
            <div class="card">
                <img src="${university.alpha_two_code ? 'https://via.placeholder.com/100' : 'https://via.placeholder.com/100'}" alt="University Image">
                <h2>${university.name}</h2>
            </div>
        `).join('');

        document.getElementById('result').innerHTML = resultHtml;

    } catch (error) {
        console.error('Error fetching university data:', error);
        document.getElementById('result').innerHTML = '<p>Failed to fetch data.</p>';
    }
}
