  
  
  const diseaseData = {
    disease1: {
      title: "Flu",
      cause: "nfluenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It spreads easily through coughs, sneezes, or contact with contaminated surfaces.",
      prevention: "Prevent flu by getting vaccinated, practicing good hygiene, and avoiding close contact with sick individuals."
    },
    disease2: {
      title: "Diabetes",
      cause: "Body’s inability to regulate blood sugar properly.",
      prevention: "Healthy eating, exercise, and regular medical checkups."
    },
    disease3: {
      title: "Heart Disease",
      cause: "High blood pressure, cholesterol, smoking, obesity, and poor lifestyle.",
      prevention: "Healthy diet, regular exercise, stress control, no smoking."
    },
    disease4: {
      title: "Stroke",
      cause: "Interrupted blood flow to brain due to clots or burst vessels.",
      prevention: "Control blood pressure, avoid tobacco, and stay active."
    },
    disease5: {
      title: "Cancer",
      cause: "Mutations, smoking, radiation, infections like HPV and hepatitis.",
      prevention: "No tobacco, healthy diet, screening, and vaccinations."
    },
    disease6: {
      title: "Tuberculosis (TB)",
      cause: "Bacterial infection (Mycobacterium tuberculosis), airborne spread.",
      prevention: "BCG vaccination, ventilation, and mask-wearing around TB patients."
    },
    disease7: {
      title: "Hepatitis B",
      cause: "Spread through infected blood, fluids, or childbirth.",
      prevention: "Vaccination, avoid needle sharing, and practice safe sex."
    },
    disease8: {
      title: "Malaria",
      cause: "Mosquito-borne parasite (Anopheles mosquito).",
      prevention: "Mosquito nets, repellents, and no stagnant water."
    },
    disease9: {
      title: "COVID-19",
      cause: "Coronavirus SARS-CoV-2 spread via respiratory droplets.",
      prevention: "Vaccination, masking, distancing, and hygiene."
    },
    disease10: {
      title: "HIV/AIDS",
      cause: "HIV virus via blood, sex, childbirth, or breastfeeding.",
      prevention: "Safe sex, sterile needles, ART therapy, and testing."
    }
  };
  function openModal(key) {
    const data = diseaseData[key];
    if (data) {
      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-cause').innerHTML = `<strong>Cause:</strong> ${data.cause}`;
      document.getElementById('modal-prevention').innerHTML = `<strong>Prevention:</strong> ${data.prevention}`;
      document.getElementById('modal').style.display = 'flex';
    }
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  
  
