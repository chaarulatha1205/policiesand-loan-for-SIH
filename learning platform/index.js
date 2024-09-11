document.addEventListener('DOMContentLoaded', () => {
    const policyList = document.getElementById('policy-list');
    const loanList = document.getElementById('loan-list');
    const subscribeForm = document.getElementById('subscribe-form');
    const policySearch = document.getElementById('policy-search');
    const loanSearch = document.getElementById('loan-search');

    // 20 sample policies
    const policies = [
        "Sustainable Farming Initiative: 30% subsidy on organic fertilizers",
        "Water Conservation Program: Grants for drip irrigation systems",
        "Crop Diversification Scheme: Additional support for farmers growing multiple crops",
        "Solar Farming Incentive: Tax benefits for installing solar panels on farmland",
        "Soil Health Card Scheme: Free soil testing and recommendations",
        "Farm Mechanization Program: Subsidies on purchase of modern farming equipment",
        "Organic Farming Promotion: Financial assistance for organic certification",
        "Agri-Export Zone Scheme: Infrastructure support for export-oriented farm products",
        "Kisan Credit Card Scheme: Easy credit access for farmers",
        "Pradhan Mantri Fasal Bima Yojana: Crop insurance at minimal premiums",
        "E-Nam (National Agriculture Market): Online trading platform for agricultural commodities",
        "Micro Irrigation Fund: Financial assistance for micro-irrigation infrastructure",
        "Paramparagat Krishi Vikas Yojana: Promotion of traditional farming practices",
        "Agricultural Marketing Infrastructure Scheme: Support for creation of marketing infrastructure",
        "National Food Security Mission: Increasing production of rice, wheat, pulses, and coarse cereals",
        "Rashtriya Krishi Vikas Yojana: Holistic development of agriculture and allied sectors",
        "Mission for Integrated Development of Horticulture: Support for horticulture sector",
        "Livestock Insurance Scheme: Insurance coverage for livestock",
        "Sub-Mission on Agricultural Mechanization: Increasing the reach of farm mechanization to small and marginal farmers",
        "National Mission on Oilseeds and Oil Palm: Increasing production and productivity of oilseeds"
    ];

    // 10 sample loan policies
    const loans = [
        { name: "Kisan Credit Card", amount: "Based on land holding and crops", interest: "4% per annum", duration: "12 months" },
        { name: "Agricultural Term Loan", amount: "Up to ₹10 lakh", interest: "8.4% per annum", duration: "5-15 years" },
        { name: "Crop Loan", amount: "Based on scale of finance", interest: "7% per annum", duration: "12 months" },
        { name: "Solar Pump Set Loan", amount: "Up to ₹10 lakh", interest: "8.6% per annum", duration: "10 years" },
        { name: "Farm Mechanization Loan", amount: "Up to ₹50 lakh", interest: "8.8% per annum", duration: "7-10 years" },
        { name: "Minor Irrigation Loan", amount: "Up to ₹25 lakh", interest: "8.5% per annum", duration: "9 years" },
        { name: "Land Purchase Loan", amount: "Up to ₹20 lakh", interest: "9% per annum", duration: "10 years" },
        { name: "Horticultural Loan", amount: "Based on project cost", interest: "8.7% per annum", duration: "5-10 years" },
        { name: "Dairy Loan", amount: "Up to ₹5 lakh per animal", interest: "8.5% per annum", duration: "5-7 years" },
        { name: "Poultry Loan", amount: "Based on unit size", interest: "8.9% per annum", duration: "5-7 years" }
    ];

    function displayPolicies(policiesArray) {
        policyList.innerHTML = '';
        policiesArray.forEach(policy => {
            const li = document.createElement('li');
            li.textContent = policy;
            policyList.appendChild(li);
        });
    }

    function displayLoans(loansArray) {
        loanList.innerHTML = '';
        loansArray.forEach(loan => {
            const div = document.createElement('div');
            div.className = 'loan-card';
            div.innerHTML = `
                <h3>${loan.name}</h3>
                <p>Amount: ${loan.amount}</p>
                <p>Interest Rate: ${loan.interest}</p>
                <p>Duration: ${loan.duration}</p>
            `;
            loanList.appendChild(div);
        });
    }

    displayPolicies(policies);
    displayLoans(loans);

    policySearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPolicies = policies.filter(policy => 
            policy.toLowerCase().includes(searchTerm)
        );
        displayPolicies(filteredPolicies);
    });

    loanSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredLoans = loans.filter(loan => 
            loan.name.toLowerCase().includes(searchTerm) ||
            loan.amount.toLowerCase().includes(searchTerm) ||
            loan.interest.toLowerCase().includes(searchTerm) ||
            loan.duration.toLowerCase().includes(searchTerm)
        );
        displayLoans(filteredLoans);
    });

    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        console.log(`Subscription requested for: ${email}`);
        alert(`Thank you for subscribing with ${email}. You'll receive our updates soon!`);
        subscribeForm.reset();
    });
});