function toggleMenu() {
    document.getElementById('navList').classList.toggle('show');
}

function navigate(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function showDisclaimer() {
    alert("Disclaimer:\n\nThe results shown on this website are published by the Bangladesh Technical Education Board. There is no possibility of error in the data.");
}

function searchResult() {
    const roll = document.getElementById("rollInput").value.trim();
    const output = document.getElementById("output");
    const result = data.find(item => item.roll === roll);

    if (!roll) {
        output.innerHTML = "<p>রোল নম্বর লিখুন।</p>";
    } else if (result) {
        output.innerHTML = `
          <div class="result-card">
            <p><strong>রোল:</strong> ${result.roll}</p>
            <p><strong>স্কুল:</strong> ${result.school || 'তথ্য নেই'}</p>
            <p><strong>ট্রেড:</strong> ${result.trade || 'তথ্য নেই'}</p>
            <p><strong>GPA:</strong> ${result.result === "F" ? "ফেল করেছে" : result.result}</p>
          </div>
        `;
    } else {
        output.innerHTML = "<p>এই রোলের কোনো রেজাল্ট পাওয়া যায়নি।</p>";
    }
}

navigate('home');