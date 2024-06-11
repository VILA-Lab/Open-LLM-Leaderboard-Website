const smallScaleData = [
    {
        "model": "Phi-3-mini-128k-instruct (3.8B)",
        "Average": 40.00,
        "MMLU": 36.97,
        "ARC":60.94,
        "WinoGrande": 46.88,
        "PIQA": 32.04,
        "CommonsenseQA": 49.15,
        "Race": 37.81,
        "MedMCQA": 22.61,
        "OpenkookQA": 33.60
    },
   {
        "model": "Qwen1.5 (1.8B)",
        "Average": 21.68,
        "MMLU": 9.99,
        "ARC":15.84 ,
        "WinoGrande": 40.96,
        "PIQA": 15.52,
        "CommonsenseQA": 31.13,
        "Race": 34.91,
        "MedMCQA": 4.7,
        "OpenkookQA": 20.37
    },
   {
        "model": "Gemma (2B)",
        "Average": 16.66,
        "MMLU": 17.52,
        "ARC":23.93,
        "WinoGrande": 16.10,
        "PIQA": 15.09,
        "CommonsenseQA": 27.46,
        "Race": 14.32,
        "MedMCQA": 4.57,
        "OpenkookQA": 14.26
    },
 
    {
        "model": "SlimPajama-DC (1.3B)",
        "Average": 9.60,
        "MMLU": 9.22,
        "ARC":14.95,
        "WinoGrande": 14.76,
        "PIQA": 5.32,
        "CommonsenseQA": 9.01,
        "Race": 16.19,
        "MedMCQA": 1.68,
        "OpenkookQA": 5.70
    },
   {
        "model": "RedPajama (1B)",
        "Average": 9.00,
        "MMLU": 9.21,
        "ARC":13.5,
        "WinoGrande": 16.97,
        "PIQA": 0.86,
        "CommonsenseQA": 11.41,
        "Race": 14.35,
        "MedMCQA": 1.86,
        "OpenkookQA": 3.87
    },
    {
        "model": "OLMo (1.2B)",
        "Average": 8.85,
        "MMLU": 8.54,
        "ARC":13.18,
        "WinoGrande": 6.16,
        "PIQA": 8.05,
        "CommonsenseQA": 13.10,
        "Race": 13.61,
        "MedMCQA": 2.07,
        "OpenkookQA": 6.11
    },
  {
        "model": "Pythia (1.4B)",
        "Average": 8.79,
        "MMLU": 9.66,
        "ARC":14.69,
        "WinoGrande": 11.52,
        "PIQA": 4.17,
        "CommonsenseQA": 9.01,
        "Race": 12.76,
        "MedMCQA": 3.19,
        "OpenkookQA": 5.30
    },
   {
        "model": "TinyLLama (1.1B)",
        "Average": 8.45,
        "MMLU": 8.94,
        "ARC":13.31,
        "WinoGrande": 12.23,
        "PIQA": 3.59,
        "CommonsenseQA": 6.06,
        "Race": 16.7,
        "MedMCQA": 2.07,
        "OpenkookQA": 4.68
    },
   {
        "model": "OPT (1.3B)",
        "Average": 7.89,
        "MMLU": 7.40,
        "ARC":11.83, 
        "WinoGrande": 12.47,
        "PIQA": 4.48,
        "CommonsenseQA": 7.61,
        "Race": 13.61,
        "MedMCQA": 1.25,
        "OpenkookQA": 4.48
    },
    {
        "model": "GPT-Neo (1.3B)",
        "Average": 7.42,
        "MMLU": 6.94,
         "ARC": 6.69,
        "WinoGrande": 10.81,
        "PIQA": 4.31,
        "CommonsenseQA": 6.34,
        "Race": 13.75,
        "MedMCQA": 2.63,
        "OpenkookQA": 4.89
    },
    {
        "model": "Cerebras-GPT (1.3B)",
        "Average": 4.86,
        "MMLU": 5.37,
        "ARC":4.43,
        "WinoGrande": 9.31,
        "PIQA": 2.16,
        "CommonsenseQA": 6.2,
        "Race": 6.9,
        "MedMCQA": 1.04,
        "OpenkookQA": 3.46
    }
];

        const largeScaleData = [
            {
                "model": "GPT-4o",
                "Average": 70.15,
                "MMLU": 70.09,
                "ARC":86.31,
                "WinoGrande":72.22,
                "PIQA":60.34,
                "CommonsenseQA":70.28,
                "Race":67.87 ,
                "MedMCQA":57.85 ,
                "OpenkookQA":67.21 
            },
          {
                "model": "GPT-4-1106-preview",
                "Average": 65.93,
                "MMLU": 74.77,
                "ARC":82.68,
                "WinoGrande": 66.22,
                "PIQA": 61.64,
                "CommonsenseQA": 62.96,
                "Race": 67.05,
                "MedMCQA": 51.81,
                "OpenkookQA": 60.29
            },
            {
                "model": "Claude-3 Opus",
                "Average": 62.53,
                "MMLU": 70.23,
                "ARC":75.47,
                "WinoGrande": 63.54,
                "PIQA": 59.05,
                "CommonsenseQA": 63.66,
                "Race": 66.22,
                "MedMCQA": 49.14,
                "OpenkookQA": 52.95
            },
            {
                "model": "Mistral Large",
                "Average": 60.48,
                "MMLU": 68.76,
                "ARC":72.32,
                "WinoGrande": 56.83,
                "PIQA": 61.21,
                "CommonsenseQA": 55.35,
                "Race": 70.17,
                "MedMCQA": 43.44,
                "OpenkookQA": 58.66
            },
            {
                "model": "GPT-3.5",
                "Average": 60.32,
                "MMLU": 65.38,
                 "ARC":78.24,
                "WinoGrande":  64.56,
                "PIQA": 54.89,
                "CommonsenseQA":  67.89,
                "Race": 60.11,
                "MedMCQA": 41.42,
                "OpenkookQA": 49.90
            },
            {
                "model": "Gemini 1.0 Pro",
                "Average": 54.06,
                "MMLU": 56.04,
                "ARC":72.35,
                "WinoGrande":  56.35,
                "PIQA": 47.70,
                "CommonsenseQA": 50.56,
                "Race": 61.02,
                "MedMCQA": 35.89,
                "OpenkookQA": 52.55
            },
            {
                "model": "Llama3-70b-instruct",
                "Average": 52.92,
                "MMLU": 59.67,
                "ARC":67.09,
                "WinoGrande": 57.14,
                "PIQA": 43.10,
                "CommonsenseQA": 55.49,
                "Race": 58.21,
                "MedMCQA": 41.67,
                "OpenkookQA": 40.94
            }
];

let currentData = []; // Tracks the current data displayed

function loadData(scale) {
    const tableBody = document.getElementById('llmTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table data
    currentData = scale === 'small' ? smallScaleData : largeScaleData;
    displayData(currentData);

     // Get all buttons
    const buttons = document.querySelectorAll('.multi-button button');

    // Remove 'active' class from all buttons
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    const activeButton = document.querySelector(`button[onclick="loadData('${scale}')"]`);
    activeButton.classList.add('active');
}

function displayData(data) {
    const tableBody = document.getElementById('llmTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table data
    data.forEach(item => {
        const row = `<tr>
            <td>${item.model}</td>
            <td>${item.Average}</td>
            <td>${item.MMLU}</td>
            <td>${item.WinoGrande}</td>
            <td>${item.PIQA}</td>
            <td>${item.CommonsenseQA}</td>
            <td>${item.Race}</td>
            <td>${item.MedMCQA}</td>
            <td>${item.OpenkookQA}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

let sortDirections = new Array(9).fill(true); // True for ascending, false for descending

function sortTable(columnIndex) {
    sortDirections[columnIndex] = !sortDirections[columnIndex]; // Toggle the direction
    currentData.sort((a, b) => {
        const x = Object.values(a)[columnIndex];
        const y = Object.values(b)[columnIndex];
        return sortDirections[columnIndex] ? (x > y ? 1 : x < y ? -1 : 0) : (x < y ? 1 : x > y ? -1 : 0);
    });
    displayData(currentData);
}

document.addEventListener('DOMContentLoaded', () => loadData('small')); // Load small scale by default
