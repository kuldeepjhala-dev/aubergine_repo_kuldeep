async function fetchUniversityData() {
    const name = document.getElementById('universityName').value;
    const country = document.getElementById('country').value;

    const apiUrl = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        const resultHtml = data.map(university => `
            <div class="card">
                <h2>${university.name}</h2>
                <h2>${university.country}</h2>
                <h2><a href="${university.web_pages}">${university.domains}</a></h2>   
            </div>
        `).join('');
        document.getElementById('result').innerHTML = resultHtml;

    } catch (error) {
        console.error('Error fetching university data:', error);
        document.getElementById('result').innerHTML = '<p>Failed to fetch data.</p>';
    }
}