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