const TRANSLATE_URL = "https://app.translate.preferredai.jp/demo";

// 拡張機能アイコンをクリックした時の動作
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.setOptions({
    tabId: tab.id,
    path: 'sidepanel.html',
    enabled: true
  });
  chrome.sidePanel.open({ tabId: tab.id });
});

// インストール時にサイドバーの設定を初期化
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});