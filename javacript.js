document.addEventListener('DOMContentLoaded', () => {
  let heartCount = 0;
  let coinCount = 100; 
  let copyCount = 0;
  const callHistory = [];

  const heartCountEl = document.getElementById('heartCount');
  const coinCountEl = document.getElementById('coinCount');
  const copyCountEl = document.getElementById('copyCount');
  const callHistoryListEl = document.getElementById('callHistoryList');
  const likeButtons = document.querySelectorAll('.like-btn');
  const callButtons = document.querySelectorAll('.call-btn');
  const copyButtons = document.querySelectorAll('.copy-btn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  coinCountEl.textContent = coinCount;
   // ❤️ Like button
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      heartCount++;
      heartCountEl.textContent = heartCount;
    });
  });

  // Call button (coin loss)
  callButtons.forEach(button => {
    button.addEventListener('click', () => {
      const number = button.getAttribute('data-number');
      const service = button.getAttribute('data-service');

      if (coinCount >= 20) {
        coinCount -= 20;
        coinCountEl.textContent = coinCount;
        alert("Calling" +" " + service +" "+ number+ "..")

        const callTime = new Date().toLocaleTimeString();
        callHistory.push({ service, number, time: callTime });
        renderCallHistory();
      } else {
        alert("Not enough coins to make a call!");
      }
    });
  });