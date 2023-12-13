function showTab(tabNumber) {
  for (let i = 1; i <= 7; i++) {
    const tab = document.getElementById('tab' + i);
    if (tab) {
      tab.style.display = 'none';
    }
  }

  const selectedTab = document.getElementById('tab' + tabNumber);
  if (selectedTab) {
    selectedTab.style.display = 'grid';
  } 

  for (let i = 1; i <= 7; i++) {
    const tab = document.querySelector('.tab:nth-child(' + i + ')');
    if (tab) {
      tab.classList.remove('active');
    }
  }

  const tab = document.querySelector('.tab:nth-child(' + tabNumber + ')');
  if (tab) {
    tab.classList.add('active');
  }
}
